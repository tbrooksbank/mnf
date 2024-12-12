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
            [mnf.calcs :as mnf]
            [mnf.data-validation :as mnf.data-validation]))

(def match-data
  (mnf/load-data "./resources/dummy_data.edn"))

(clerk/table match-data)

(def players
  (mnf/load-data "./resources/players.edn"))

(clerk/table players)

(mnf.data-validation/validate-all-data match-data players)

(def player-stats
  (mnf/calculate-player-stats match-data players))

(clerk/table player-stats)

(def this-weeks-players
  ["Rick Miles"
   "Christian"
   "Chris"
   "Catalin Dominte"
   "Sam"
   "Andre"
   "Gary"
   "Edd Cowley"
   "Simon Wardell"
   "Steve Rowland"
   "Tom Brooksbank"
   "Jonny"
   "Mark Gawthrop"
   "Richard Brown"
   "Mark Burnage"
   "Zam"])

(def this-weeks-combos
  (mnf/generate-team-combinations this-weeks-players))

(def team-options
  (mnf/analyze-team-combinations this-weeks-combos player-stats))

(clerk/table team-options)

(def team-example
  {:team1 ["Andre" "Rick Miles" "Sam" "Catalin Dominte" "Edd Cowley" "Simon Wardell" "Mark Gawthrop" "Mark Burnage"] 
   :team2 ["Tom Brooksbank" "Christian" "Chris" "Gary" "Jonny" "Zam" "Richard Brown" "Steve Rowland"]})

(mnf/analyze-team-combinations team-example player-stats)