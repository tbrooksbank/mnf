goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18739){
var map__18747 = p__18739;
var map__18747__$1 = cljs.core.__destructure_map(map__18747);
var m = map__18747__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18747__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18747__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18782_19282 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18784_19283 = null;
var count__18785_19284 = (0);
var i__18786_19285 = (0);
while(true){
if((i__18786_19285 < count__18785_19284)){
var f_19287 = chunk__18784_19283.cljs$core$IIndexed$_nth$arity$2(null, i__18786_19285);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19287], 0));


var G__19289 = seq__18782_19282;
var G__19290 = chunk__18784_19283;
var G__19291 = count__18785_19284;
var G__19292 = (i__18786_19285 + (1));
seq__18782_19282 = G__19289;
chunk__18784_19283 = G__19290;
count__18785_19284 = G__19291;
i__18786_19285 = G__19292;
continue;
} else {
var temp__5804__auto___19293 = cljs.core.seq(seq__18782_19282);
if(temp__5804__auto___19293){
var seq__18782_19299__$1 = temp__5804__auto___19293;
if(cljs.core.chunked_seq_QMARK_(seq__18782_19299__$1)){
var c__5525__auto___19300 = cljs.core.chunk_first(seq__18782_19299__$1);
var G__19302 = cljs.core.chunk_rest(seq__18782_19299__$1);
var G__19303 = c__5525__auto___19300;
var G__19304 = cljs.core.count(c__5525__auto___19300);
var G__19305 = (0);
seq__18782_19282 = G__19302;
chunk__18784_19283 = G__19303;
count__18785_19284 = G__19304;
i__18786_19285 = G__19305;
continue;
} else {
var f_19307 = cljs.core.first(seq__18782_19299__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19307], 0));


var G__19308 = cljs.core.next(seq__18782_19299__$1);
var G__19309 = null;
var G__19310 = (0);
var G__19311 = (0);
seq__18782_19282 = G__19308;
chunk__18784_19283 = G__19309;
count__18785_19284 = G__19310;
i__18786_19285 = G__19311;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19313 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19313], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19313)))?cljs.core.second(arglists_19313):arglists_19313)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18913_19325 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18914_19326 = null;
var count__18915_19327 = (0);
var i__18916_19328 = (0);
while(true){
if((i__18916_19328 < count__18915_19327)){
var vec__19034_19329 = chunk__18914_19326.cljs$core$IIndexed$_nth$arity$2(null, i__18916_19328);
var name_19330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034_19329,(0),null);
var map__19037_19331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034_19329,(1),null);
var map__19037_19332__$1 = cljs.core.__destructure_map(map__19037_19331);
var doc_19333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037_19332__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037_19332__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19330], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19334], 0));

if(cljs.core.truth_(doc_19333)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19333], 0));
} else {
}


var G__19341 = seq__18913_19325;
var G__19342 = chunk__18914_19326;
var G__19343 = count__18915_19327;
var G__19344 = (i__18916_19328 + (1));
seq__18913_19325 = G__19341;
chunk__18914_19326 = G__19342;
count__18915_19327 = G__19343;
i__18916_19328 = G__19344;
continue;
} else {
var temp__5804__auto___19345 = cljs.core.seq(seq__18913_19325);
if(temp__5804__auto___19345){
var seq__18913_19346__$1 = temp__5804__auto___19345;
if(cljs.core.chunked_seq_QMARK_(seq__18913_19346__$1)){
var c__5525__auto___19351 = cljs.core.chunk_first(seq__18913_19346__$1);
var G__19352 = cljs.core.chunk_rest(seq__18913_19346__$1);
var G__19353 = c__5525__auto___19351;
var G__19354 = cljs.core.count(c__5525__auto___19351);
var G__19355 = (0);
seq__18913_19325 = G__19352;
chunk__18914_19326 = G__19353;
count__18915_19327 = G__19354;
i__18916_19328 = G__19355;
continue;
} else {
var vec__19047_19356 = cljs.core.first(seq__18913_19346__$1);
var name_19357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047_19356,(0),null);
var map__19050_19358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047_19356,(1),null);
var map__19050_19359__$1 = cljs.core.__destructure_map(map__19050_19358);
var doc_19360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19050_19359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19050_19359__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19357], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19361], 0));

if(cljs.core.truth_(doc_19360)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19360], 0));
} else {
}


var G__19372 = cljs.core.next(seq__18913_19346__$1);
var G__19373 = null;
var G__19374 = (0);
var G__19375 = (0);
seq__18913_19325 = G__19372;
chunk__18914_19326 = G__19373;
count__18915_19327 = G__19374;
i__18916_19328 = G__19375;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19059 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19061 = null;
var count__19062 = (0);
var i__19063 = (0);
while(true){
if((i__19063 < count__19062)){
var role = chunk__19061.cljs$core$IIndexed$_nth$arity$2(null, i__19063);
var temp__5804__auto___19379__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19379__$1)){
var spec_19381 = temp__5804__auto___19379__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19381)], 0));
} else {
}


var G__19383 = seq__19059;
var G__19384 = chunk__19061;
var G__19385 = count__19062;
var G__19386 = (i__19063 + (1));
seq__19059 = G__19383;
chunk__19061 = G__19384;
count__19062 = G__19385;
i__19063 = G__19386;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19059);
if(temp__5804__auto____$1){
var seq__19059__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19059__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19059__$1);
var G__19391 = cljs.core.chunk_rest(seq__19059__$1);
var G__19392 = c__5525__auto__;
var G__19393 = cljs.core.count(c__5525__auto__);
var G__19394 = (0);
seq__19059 = G__19391;
chunk__19061 = G__19392;
count__19062 = G__19393;
i__19063 = G__19394;
continue;
} else {
var role = cljs.core.first(seq__19059__$1);
var temp__5804__auto___19395__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19395__$2)){
var spec_19398 = temp__5804__auto___19395__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19398)], 0));
} else {
}


var G__19399 = cljs.core.next(seq__19059__$1);
var G__19400 = null;
var G__19401 = (0);
var G__19402 = (0);
seq__19059 = G__19399;
chunk__19061 = G__19400;
count__19062 = G__19401;
i__19063 = G__19402;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19120 = datafied_throwable;
var map__19120__$1 = cljs.core.__destructure_map(map__19120);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19120__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19120__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19122 = cljs.core.last(via);
var map__19122__$1 = cljs.core.__destructure_map(map__19122);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19122__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19123 = data;
var map__19123__$1 = cljs.core.__destructure_map(map__19123);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19124 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19124__$1 = cljs.core.__destructure_map(map__19124);
var top_data = map__19124__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19124__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19129 = phase;
var G__19129__$1 = (((G__19129 instanceof cljs.core.Keyword))?G__19129.fqn:null);
switch (G__19129__$1) {
case "read-source":
var map__19131 = data;
var map__19131__$1 = cljs.core.__destructure_map(map__19131);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19131__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19131__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19132 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19132__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19132,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19132);
var G__19132__$2 = (cljs.core.truth_((function (){var fexpr__19135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19135.cljs$core$IFn$_invoke$arity$1 ? fexpr__19135.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19135.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19132__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19132__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19132__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19138 = top_data;
var G__19138__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19138,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19138);
var G__19138__$2 = (cljs.core.truth_((function (){var fexpr__19140 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19140.cljs$core$IFn$_invoke$arity$1 ? fexpr__19140.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19140.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19138__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19138__$1);
var G__19138__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19138__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19138__$2);
var G__19138__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19138__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19138__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19138__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19138__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19143 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(3),null);
var G__19147 = top_data;
var G__19147__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19147,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19147);
var G__19147__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19147__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19147__$1);
var G__19147__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19147__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19147__$2);
var G__19147__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19147__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19147__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19147__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19147__$4;
}

break;
case "execution":
var vec__19149 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19149,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19149,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19149,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19149,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19117_SHARP_){
var or__5002__auto__ = (p1__19117_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19156 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19156.cljs$core$IFn$_invoke$arity$1 ? fexpr__19156.cljs$core$IFn$_invoke$arity$1(p1__19117_SHARP_) : fexpr__19156.call(null, p1__19117_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19159 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19159__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19159,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19159);
var G__19159__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19159__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19159__$1);
var G__19159__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19159__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19159__$2);
var G__19159__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19159__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19159__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19159__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19159__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19129__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19185){
var map__19186 = p__19185;
var map__19186__$1 = cljs.core.__destructure_map(map__19186);
var triage_data = map__19186__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19186__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19208 = phase;
var G__19208__$1 = (((G__19208 instanceof cljs.core.Keyword))?G__19208.fqn:null);
switch (G__19208__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19211 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19212 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19213 = loc;
var G__19214 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19215_19621 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19216_19622 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19217_19624 = true;
var _STAR_print_fn_STAR__temp_val__19218_19625 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19217_19624);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19218_19625);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19175_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19175_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19216_19622);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19215_19621);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19211,G__19212,G__19213,G__19214) : format.call(null, G__19211,G__19212,G__19213,G__19214));

break;
case "macroexpansion":
var G__19223 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19224 = cause_type;
var G__19225 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19226 = loc;
var G__19227 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19223,G__19224,G__19225,G__19226,G__19227) : format.call(null, G__19223,G__19224,G__19225,G__19226,G__19227));

break;
case "compile-syntax-check":
var G__19231 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19232 = cause_type;
var G__19233 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19234 = loc;
var G__19235 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19231,G__19232,G__19233,G__19234,G__19235) : format.call(null, G__19231,G__19232,G__19233,G__19234,G__19235));

break;
case "compilation":
var G__19239 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19240 = cause_type;
var G__19241 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19242 = loc;
var G__19243 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19239,G__19240,G__19241,G__19242,G__19243) : format.call(null, G__19239,G__19240,G__19241,G__19242,G__19243));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19244 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19245 = symbol;
var G__19246 = loc;
var G__19247 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19249_19708 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19250_19709 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19251_19710 = true;
var _STAR_print_fn_STAR__temp_val__19252_19711 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19251_19710);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19252_19711);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19182_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19182_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19250_19709);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19249_19708);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19244,G__19245,G__19246,G__19247) : format.call(null, G__19244,G__19245,G__19246,G__19247));
} else {
var G__19259 = "Execution error%s at %s(%s).\n%s\n";
var G__19260 = cause_type;
var G__19261 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19262 = loc;
var G__19263 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19259,G__19260,G__19261,G__19262,G__19263) : format.call(null, G__19259,G__19260,G__19261,G__19262,G__19263));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19208__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
