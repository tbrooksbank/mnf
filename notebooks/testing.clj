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
            [mnf.data.validation :as mnf.data-validation]
            [mnf.data.output-tables :as tables]))

^::clerk/no-cache
(def match-data
  (mnf/load-data "./resources/dummy_data.edn"))

(clerk/table match-data)

^::clerk/no-cache
(def players
  (mnf/load-data "./resources/players.edn"))

(clerk/table players)

(mnf.data-validation/validate-all-data match-data players)

^::clerk/no-cache
(def player-stats
  (mnf/calculate-player-stats match-data players))

(clerk/table player-stats)

^::clerk/no-cache
(def player-info
  (tables/player-info player-stats))

(clerk/table player-info)

^::clerk/no-cache
(def league-table-2
  (tables/league-table player-stats))

(clerk/table league-table-2)

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

^::clerk/no-cache
(def this-weeks-combos
  (mnf/generate-team-combinations this-weeks-players))

^::clerk/no-cache
(def team-options
  (mnf/analyze-team-combinations this-weeks-combos player-stats))

(clerk/table team-options)