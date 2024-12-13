# mnf

Provides a web app for viewing historical player & match data designed to be served in GitHub pages, as well as some clojure scripts that can be run locally to generate the files for the webpage and find balanced teams

## Usage

Update the two files in resources `match_data.edn` & `players.edn`

Run `mnf.data-constructor/build-and-store-data!` to produce stats and store in the website docs page
Note: This also runs data validations that check players in each match exist in the players data + other sense checks and specific to my use case that each team has 6-8 players (but the stats functions don't have this restriction)

To serve locally you can use the two commands below in seperate terminals:

Starting the clojure script compiler
```
npx shadow-cljs watch app
```

Starting the web server from the REPL
```clojure
clj -A:dev
(require 'user)
(def stop-server (start-server))
;To close
(stop-server)
```
