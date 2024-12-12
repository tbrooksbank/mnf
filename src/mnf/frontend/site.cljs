(ns mnf.frontend.site
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdom]
            [cljs.reader :as reader]))

;; State
(defonce root-atom (atom nil))

(def app-state
  (r/atom {:active-tab "team-sheet"
           :match-data nil
           :player-data nil}))

(def nav-state (r/atom {:menu-open? false}))

;; Data Loading
(defn load-edn-file [file-path callback]
  (js/console.log "Attempting to load:" file-path)
  (-> (js/fetch file-path)
      (.then (fn [response]
               (js/console.log "Response status:" (.-status response))
               (if (.-ok response)
                 (.text response)
                 (throw (js/Error. (str "Failed to load " file-path ": " (.-status response)))))))
      (.then (fn [text]
               (js/console.log "Loaded text from" file-path ":" (subs text 0 100))
               (callback (reader/read-string text))))
      (.catch (fn [error]
                (js/console.error "Error loading" file-path ":" error)))))

(defn load-data! []
  (println "Loading data...")  ; Add this
  (load-edn-file "/data/match-data.edn"
                 #(do
                    (println "Match data loaded")  ; Add this
                    (swap! app-state assoc :match-data %)))
  (load-edn-file "/data/player-stats.edn"
                 #(do
                    (println "Player data loaded")  ; Add this
                    (swap! app-state assoc :player-data %))))

;; Components
(defn format-value [v]
  (cond
    (instance? js/Date v) (.toLocaleDateString v)
    (number? v) (.toFixed v 2)  ; Format numbers to 2 decimal places
    :else (str v)))

(defn sort-by-key [data key-name ascending?]
  (let [comparator (if ascending? compare (comp - compare))]
    (sort-by #(get % key-name) comparator data)))

(defn data-table [data]
  (let [state (r/atom {:sort-key nil
                       :ascending? true})]
    (fn [data]
      (if (and data (seq data))
        [:table.data-table
         [:thead
          [:tr
           (doall
            (for [header (keys (first data))]
              ^{:key header}
              [:th.sortable
               {:on-click #(swap! state (fn [s]
                                          (if (= (:sort-key s) header)
                                            (update s :ascending? not)
                                            {:sort-key header
                                             :ascending? true})))
                :class (when (= header (:sort-key @state))
                         (if (:ascending? @state) "sort-asc" "sort-desc"))}
               (name header)]))]]
         [:tbody
          (doall
           (let [sorted-data (if (:sort-key @state)
                               (sort-by-key data (:sort-key @state) (:ascending? @state))
                               data)]
             (for [row sorted-data]
               ^{:key (hash row)}
               [:tr
                (doall
                 (for [header (keys (first data))]
                   ^{:key (str (hash row) header)}
                   [:td (format-value (get row header))]))])))]]
        [:div "No data available"]))))

(defn team-sheet []
  [:div.section
   [:h2 "Team Sheet"]
   [:p "Coming soon"]])

(defn match-data []
  [:div.section
   [:h2 "Match Data"]
   (let [data (:match-data @app-state)]
     (if (nil? data)
       [:div "Loading match data..."]
       [data-table data]))])

(defn player-data []
  [:div.section
   [:h2 "Player Data"]
   (let [data (:player-data @app-state)]
     (if (nil? data)
       [:div "Loading player stats..."]
       [data-table data]))])

(defn team-builder []
  [:div.section
   [:h2 "Team Builder"]
   [:p "Coming soon"]])

(defn nav-link [id label active-tab]
  [:a.nav-link
   {:href (str "#" id)
    :class (when (= active-tab id) "active")
    :on-click #(swap! app-state assoc :active-tab id)}
   label])

(defn navigation []
  (let [active-tab (:active-tab @app-state)
        menu-open? (:menu-open? @nav-state)]
    [:nav.navbar
     [:div.nav-brand
      [:button.hamburger
       {:on-click #(swap! nav-state update :menu-open? not)}
       [:span.hamburger-box
        [:span.hamburger-inner]]]]
     [:div.nav-menu {:class (when menu-open? "is-open")}
      [:div.nav-left
       [nav-link "team-sheet" "Team Sheet" active-tab]
       [nav-link "match-data" "Match Data" active-tab]
       [nav-link "player-data" "Player Data" active-tab]
       [nav-link "team-builder" "Team Builder" active-tab]]]]))

(defn main-content []
  (let [active-tab (:active-tab @app-state)]
    [:div.content
     (case active-tab
       "team-sheet" [team-sheet]
       "match-data" [match-data]
       "player-data" [player-data]
       "team-builder" [team-builder]
       [team-sheet])]))

(defn app []
  [:div
   [navigation]
   [main-content]
   [:footer.footer
    "Tom Brooksbank © 2024"]])

;; Initialize app
(defn init! []
  (load-data!)
  (when-not @root-atom
    (reset! root-atom (rdom/create-root (.getElementById js/document "app"))))
  (rdom/render @root-atom [app]))

;; Initialize once
(defonce start
  (init!))