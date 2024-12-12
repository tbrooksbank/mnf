(ns mnf.data-constructor
  (:require [mnf.calcs :as mnf]
            [mnf.data-validation :as data-val]))

(defn build-and-store-data!
  "Processes match and player data and stores results as EDN files"
  []
  (println "Starting data build process...")

  (try
    (println "Loading source data from:"
             "\n Match data: ./resources/dummy_data.edn"
             "\n Player data: ./resources/players.edn")
    (let [match-data (try
                       (mnf/load-data "./resources/dummy_data.edn")
                       (catch Exception e
                         (println "ERROR: Failed to load match data:" (.getMessage e))
                         (throw e)))
          players (try
                    (mnf/load-data "./resources/players.edn")
                    (catch Exception e
                      (println "ERROR: Failed to load player data:" (.getMessage e))
                      (throw e)))]

      (println "Validating data...")
      (try
        (data-val/validate-all-data match-data players)
        (catch Exception e
          (println "ERROR: Data validation failed:" (.getMessage e))
          (throw e)))

      (println "Calculating player stats...")
      (let [player-stats (try
                           (mnf/calculate-player-stats match-data players)
                           (catch Exception e
                             (println "ERROR: Failed to calculate player stats:" (.getMessage e))
                             (throw e)))]

        (println "Storing processed data files to:"
                 "\n Match data: docs/data/match-data.edn"
                 "\n Player data: docs/data/players.edn"
                 "\n Player stats: docs/data/player-stats.edn")
        (try
          (spit "docs/data/match-data.edn" (pr-str match-data))
          (spit "docs/data/players.edn" (pr-str players))
          (spit "docs/data/player-stats.edn" (pr-str player-stats))
          (catch Exception e
            (println "ERROR: Failed to write output files:" (.getMessage e))
            (throw e)))

        (println
         (str "\nProcessing complete:"
              "\n  Matches processed: " (count match-data)
              "\n  Players processed: " (count players)
              "\n  Stats generated: " (count player-stats)))))

    (catch Exception e
      (println "\nBuild process failed!")
      (System/exit 1))))