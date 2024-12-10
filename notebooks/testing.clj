;# Monday Night football testing
;Start a jack-in and run the following
;
;(require '[nextjournal.clerk :as clerk])
;
;(clerk/serve! {:watch-paths ["notebooks" "src"]})
;
;Then navigate to http://localhost:7777/

(ns testing
  {:nextjournal.clerk/toc true}
  (:require [nextjournal.clerk :as clerk]
            [mnf.core :as mnf]))

(def match-data
  (mnf/load-match-data "./resources/match_data.edn"))

(def player-stats
  (mnf/calculate-player-stats match-data))

(def players
  ["Andre"
   "Tim"
   "Saffet"
   "Tom Brooksbank"
   "Berk"
   "Christian"
   "Simon"
   "Rick"
   "Mark G"
   "Rich B"
   "Steve"
   "Mark B"
   "Jonny"
   "Henry"
   "Kadir"
   "Tom Searle"])
   
(def all-combinations (mnf/generate-team-combinations players))

(def best-combination (mnf/find-most-balanced-combination all-combinations player-stats))


(defn print-balanced-teams [result]
  (println "\nMost balanced combination found:")
  (println "\nTeam 1:")
  (println (clojure.string/join ", " (:team1 result)))
  (println "Average score:" (format "%.2f" (get-in result [:team1-stats :avg-score])))
  (println "Chemistry score:" (get-in result [:team1-stats :chemistry-score]))
  (println "\nTeam 2:")
  (println (clojure.string/join ", " (:team2 result)))
  (println "Average score:" (format "%.2f" (get-in result [:team2-stats :avg-score])))
  (println "Chemistry score:" (get-in result [:team2-stats :chemistry-score]))
  (println "\nBalance score:" (format "%.3f" (:balance-score result))))

(print-balanced-teams best-combination)


