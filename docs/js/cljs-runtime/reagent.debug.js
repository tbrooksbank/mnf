goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11815__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11820__i = 0, G__11820__a = new Array(arguments.length -  0);
while (G__11820__i < G__11820__a.length) {G__11820__a[G__11820__i] = arguments[G__11820__i + 0]; ++G__11820__i;}
  args = new cljs.core.IndexedSeq(G__11820__a,0,null);
} 
return G__11815__delegate.call(this,args);};
G__11815.cljs$lang$maxFixedArity = 0;
G__11815.cljs$lang$applyTo = (function (arglist__11821){
var args = cljs.core.seq(arglist__11821);
return G__11815__delegate(args);
});
G__11815.cljs$core$IFn$_invoke$arity$variadic = G__11815__delegate;
return G__11815;
})()
);

(o.error = (function() { 
var G__11824__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11826__i = 0, G__11826__a = new Array(arguments.length -  0);
while (G__11826__i < G__11826__a.length) {G__11826__a[G__11826__i] = arguments[G__11826__i + 0]; ++G__11826__i;}
  args = new cljs.core.IndexedSeq(G__11826__a,0,null);
} 
return G__11824__delegate.call(this,args);};
G__11824.cljs$lang$maxFixedArity = 0;
G__11824.cljs$lang$applyTo = (function (arglist__11827){
var args = cljs.core.seq(arglist__11827);
return G__11824__delegate(args);
});
G__11824.cljs$core$IFn$_invoke$arity$variadic = G__11824__delegate;
return G__11824;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
