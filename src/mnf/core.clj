(ns mnf.core
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.math.combinatorics :as combo]))


(defn load-match-data
  "Load match data from EDN file"
  [file-path]
  (try
    (let [file (io/file file-path)]
      (if (.exists file)
        (-> file
            slurp
            edn/read-string)
        (throw (ex-info (str "File not found: " file-path)
                        {:file-path file-path
                         :absolute-path (.getAbsolutePath file)}))))
    (catch Exception e
      (println "Error loading file:" (.getMessage e))
      (println "Attempted file path:" file-path)
      (println "Working directory:" (System/getProperty "user.dir"))
      (throw e))))

(defn extract-player-results
  "First extract individual player results from match data"
  [matches]
  (reduce
   (fn [acc match]
     (let [{:keys [match-id date team-colours-data team-bibs-data]} match
           colours-result {:won (> (:goals team-colours-data) (:goals team-bibs-data))
                           :goals-for (:goals team-colours-data)
                           :goals-against (:goals team-bibs-data)
                           :date date}
           bibs-result {:won (> (:goals team-bibs-data) (:goals team-colours-data))
                        :goals-for (:goals team-bibs-data)
                        :goals-against (:goals team-colours-data)
                        :date date}]
       (-> acc
           (into (map #(assoc colours-result :player % :match-id match-id)
                      (:players team-colours-data)))
           (into (map #(assoc bibs-result :player % :match-id match-id)
                      (:players team-bibs-data))))))
   []
   matches))

(defn calculate-player-stats
  "Calculate statistics for all players"
  [matches]
  (let [all-player-results (extract-player-results matches)]
    (->> all-player-results
         (group-by :player)
         (map (fn [[player player-matches]]
                (let [player-in-bibs? (fn [match]
                                        (contains?
                                         (get-in match [:team-bibs-data :players])
                                         player))
                      railway-games (reduce +
                                            (for [match matches]
                                              (if (contains? (get-in match [:team-colours-data :players]) player)
                                                (:shooting-at-railway (:team-colours-data match))
                                                (:shooting-at-railway (:team-bibs-data match)))))
                      total-games (count player-matches)
                      wins (count (filter :won player-matches))
                      total-goal-diff (reduce + (map #(- (:goals-for %) (:goals-against %))
                                                     player-matches))
                      bibs-games (count (filter player-in-bibs? matches))
                      win-ratio (float (/ wins total-games))
                      goal-diff-ratio (/ total-goal-diff total-games)]
                  {:player player
                   :games-played total-games
                   :win-ratio win-ratio
                   :avg-goal-diff (float (/ total-goal-diff total-games))
                   :bibs-ratio (if (pos? total-games)
                                 (float (/ bibs-games total-games))
                                 0.0)
                   :railway-ratio (if (pos? total-games)
                                    (float (/ railway-games total-games))
                                    0.0)
                   :player-score (->> (+' (*' 0.6 win-ratio)
                                          (*' 0.4 goal-diff-ratio))
                                      bigdec)})))
         (sort-by :games-played >))))


(defn generate-team-combinations
  "Generate all possible combinations of two 8-person teams from 16 players.
   Returns a sequence of maps, each containing :team1 and :team2"
  [players]
  (when (= 16 (count players))
    (let [all-team1-combinations (combo/combinations players 8)]
      (->> all-team1-combinations
           ;; Only take half to avoid duplicate combinations (reversed teams)
           (take (/ (count all-team1-combinations) 2))
           (map (fn [team1]
                  (let [team2 (vec (remove (set team1) players))]
                    {:team1 (vec team1)
                     :team2 team2})))))))

(defn get-combo-score
  "Calculate score for a pair of players based on historical performance"
  [player1 player2 player-stats]
  (let [combo-results (get-in player-stats [:combo-ratings #{player1 player2}])]
    (if combo-results
      (+ (:win-ratio combo-results)
         (* 0.5 (:avg-goal-diff combo-results)))
      0))) ; Return 0 if no historical data for this pair

(defn calculate-team-chemistry
  "Calculate overall team chemistry based on all possible player pairs"
  [team player-stats]
  (let [player-pairs (combo/combinations team 2)
        pair-scores (map #(apply get-combo-score (conj % player-stats)) player-pairs)]
    (if (seq pair-scores)
      (/ (reduce + pair-scores) (count pair-scores))
      0)))

(defn calculate-team-score
  "Calculate total and average player score, including chemistry bonus"
  [team player-stats]
  (let [team-players-stats (filter #(contains? (set team) (:player %)) player-stats)
        raw-total-score (reduce + (map :player-score team-players-stats))
        chemistry-score (calculate-team-chemistry team player-stats)
        chemistry-bonus (* chemistry-score 10) ; Adjust weight as needed
        total-score (+ raw-total-score chemistry-bonus)]
    {:total-score total-score
     :avg-score (/ total-score (count team))
     :raw-score raw-total-score
     :chemistry-score chemistry-score}))

(defn evaluate-combination-balance
  "Calculate balance score based on difference in team scores (lower is more balanced)"
  [combination player-stats]
  (let [team1-stats (calculate-team-score (:team1 combination) player-stats)
        team2-stats (calculate-team-score (:team2 combination) player-stats)]
    {:balance-score (abs (- (:avg-score team1-stats)
                            (:avg-score team2-stats)))
     :team1-stats team1-stats
     :team2-stats team2-stats}))

(defn find-most-balanced-combination
  "Find the most balanced team combination from pre-generated combinations"
  [all-combinations player-stats]
  (let [scored-combinations (->> all-combinations
                                 (map (fn [combo]
                                        (let [evaluation (evaluate-combination-balance combo player-stats)]
                                          (assoc combo
                                                 :balance-score (:balance-score evaluation)
                                                 :team1-stats (:team1-stats evaluation)
                                                 :team2-stats (:team2-stats evaluation)))))
                                 (sort-by :balance-score))]
    (first scored-combinations)))