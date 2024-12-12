goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12737 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12737(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12743 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12743(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11701 = coll;
var G__11702 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11701,G__11702) : shadow.dom.lazy_native_coll_seq.call(null, G__11701,G__11702));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11727 = arguments.length;
switch (G__11727) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11729 = arguments.length;
switch (G__11729) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11733 = arguments.length;
switch (G__11733) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11735 = arguments.length;
switch (G__11735) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11737 = arguments.length;
switch (G__11737) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11745 = arguments.length;
switch (G__11745) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11753){if((e11753 instanceof Object)){
var e = e11753;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11753;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11754 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11755 = null;
var count__11756 = (0);
var i__11757 = (0);
while(true){
if((i__11757 < count__11756)){
var el = chunk__11755.cljs$core$IIndexed$_nth$arity$2(null, i__11757);
var handler_12788__$1 = ((function (seq__11754,chunk__11755,count__11756,i__11757,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11754,chunk__11755,count__11756,i__11757,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12788__$1);


var G__12791 = seq__11754;
var G__12792 = chunk__11755;
var G__12793 = count__11756;
var G__12794 = (i__11757 + (1));
seq__11754 = G__12791;
chunk__11755 = G__12792;
count__11756 = G__12793;
i__11757 = G__12794;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11754);
if(temp__5804__auto__){
var seq__11754__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11754__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11754__$1);
var G__12795 = cljs.core.chunk_rest(seq__11754__$1);
var G__12796 = c__5525__auto__;
var G__12797 = cljs.core.count(c__5525__auto__);
var G__12798 = (0);
seq__11754 = G__12795;
chunk__11755 = G__12796;
count__11756 = G__12797;
i__11757 = G__12798;
continue;
} else {
var el = cljs.core.first(seq__11754__$1);
var handler_12799__$1 = ((function (seq__11754,chunk__11755,count__11756,i__11757,el,seq__11754__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11754,chunk__11755,count__11756,i__11757,el,seq__11754__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12799__$1);


var G__12800 = cljs.core.next(seq__11754__$1);
var G__12801 = null;
var G__12802 = (0);
var G__12803 = (0);
seq__11754 = G__12800;
chunk__11755 = G__12801;
count__11756 = G__12802;
i__11757 = G__12803;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11781 = arguments.length;
switch (G__11781) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11801 = cljs.core.seq(events);
var chunk__11802 = null;
var count__11803 = (0);
var i__11804 = (0);
while(true){
if((i__11804 < count__11803)){
var vec__11814 = chunk__11802.cljs$core$IIndexed$_nth$arity$2(null, i__11804);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11814,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12818 = seq__11801;
var G__12819 = chunk__11802;
var G__12820 = count__11803;
var G__12821 = (i__11804 + (1));
seq__11801 = G__12818;
chunk__11802 = G__12819;
count__11803 = G__12820;
i__11804 = G__12821;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11801);
if(temp__5804__auto__){
var seq__11801__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11801__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11801__$1);
var G__12827 = cljs.core.chunk_rest(seq__11801__$1);
var G__12828 = c__5525__auto__;
var G__12829 = cljs.core.count(c__5525__auto__);
var G__12830 = (0);
seq__11801 = G__12827;
chunk__11802 = G__12828;
count__11803 = G__12829;
i__11804 = G__12830;
continue;
} else {
var vec__11819 = cljs.core.first(seq__11801__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12831 = cljs.core.next(seq__11801__$1);
var G__12832 = null;
var G__12833 = (0);
var G__12834 = (0);
seq__11801 = G__12831;
chunk__11802 = G__12832;
count__11803 = G__12833;
i__11804 = G__12834;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11826 = cljs.core.seq(styles);
var chunk__11827 = null;
var count__11828 = (0);
var i__11829 = (0);
while(true){
if((i__11829 < count__11828)){
var vec__11846 = chunk__11827.cljs$core$IIndexed$_nth$arity$2(null, i__11829);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12837 = seq__11826;
var G__12838 = chunk__11827;
var G__12839 = count__11828;
var G__12840 = (i__11829 + (1));
seq__11826 = G__12837;
chunk__11827 = G__12838;
count__11828 = G__12839;
i__11829 = G__12840;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11826);
if(temp__5804__auto__){
var seq__11826__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11826__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11826__$1);
var G__12843 = cljs.core.chunk_rest(seq__11826__$1);
var G__12844 = c__5525__auto__;
var G__12845 = cljs.core.count(c__5525__auto__);
var G__12846 = (0);
seq__11826 = G__12843;
chunk__11827 = G__12844;
count__11828 = G__12845;
i__11829 = G__12846;
continue;
} else {
var vec__11850 = cljs.core.first(seq__11826__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12848 = cljs.core.next(seq__11826__$1);
var G__12849 = null;
var G__12850 = (0);
var G__12851 = (0);
seq__11826 = G__12848;
chunk__11827 = G__12849;
count__11828 = G__12850;
i__11829 = G__12851;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11863_12853 = key;
var G__11863_12854__$1 = (((G__11863_12853 instanceof cljs.core.Keyword))?G__11863_12853.fqn:null);
switch (G__11863_12854__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12859 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12859,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12859,"aria-");
}
})())){
el.setAttribute(ks_12859,value);
} else {
(el[ks_12859] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11883){
var map__11884 = p__11883;
var map__11884__$1 = cljs.core.__destructure_map(map__11884);
var props = map__11884__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11884__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11888 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11888,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11888,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11888,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11896 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11896,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11896;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11901 = arguments.length;
switch (G__11901) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11941){
var vec__11948 = p__11941;
var seq__11949 = cljs.core.seq(vec__11948);
var first__11950 = cljs.core.first(seq__11949);
var seq__11949__$1 = cljs.core.next(seq__11949);
var nn = first__11950;
var first__11950__$1 = cljs.core.first(seq__11949__$1);
var seq__11949__$2 = cljs.core.next(seq__11949__$1);
var np = first__11950__$1;
var nc = seq__11949__$2;
var node = vec__11948;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11954 = nn;
var G__11955 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11954,G__11955) : create_fn.call(null, G__11954,G__11955));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11956 = nn;
var G__11957 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11956,G__11957) : create_fn.call(null, G__11956,G__11957));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11958 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11958,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11958,(1),null);
var seq__11961_12888 = cljs.core.seq(node_children);
var chunk__11962_12889 = null;
var count__11963_12890 = (0);
var i__11964_12891 = (0);
while(true){
if((i__11964_12891 < count__11963_12890)){
var child_struct_12892 = chunk__11962_12889.cljs$core$IIndexed$_nth$arity$2(null, i__11964_12891);
var children_12893 = shadow.dom.dom_node(child_struct_12892);
if(cljs.core.seq_QMARK_(children_12893)){
var seq__12009_12894 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12893));
var chunk__12011_12895 = null;
var count__12012_12896 = (0);
var i__12013_12897 = (0);
while(true){
if((i__12013_12897 < count__12012_12896)){
var child_12899 = chunk__12011_12895.cljs$core$IIndexed$_nth$arity$2(null, i__12013_12897);
if(cljs.core.truth_(child_12899)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12899);


var G__12902 = seq__12009_12894;
var G__12903 = chunk__12011_12895;
var G__12904 = count__12012_12896;
var G__12905 = (i__12013_12897 + (1));
seq__12009_12894 = G__12902;
chunk__12011_12895 = G__12903;
count__12012_12896 = G__12904;
i__12013_12897 = G__12905;
continue;
} else {
var G__12907 = seq__12009_12894;
var G__12908 = chunk__12011_12895;
var G__12909 = count__12012_12896;
var G__12910 = (i__12013_12897 + (1));
seq__12009_12894 = G__12907;
chunk__12011_12895 = G__12908;
count__12012_12896 = G__12909;
i__12013_12897 = G__12910;
continue;
}
} else {
var temp__5804__auto___12911 = cljs.core.seq(seq__12009_12894);
if(temp__5804__auto___12911){
var seq__12009_12912__$1 = temp__5804__auto___12911;
if(cljs.core.chunked_seq_QMARK_(seq__12009_12912__$1)){
var c__5525__auto___12913 = cljs.core.chunk_first(seq__12009_12912__$1);
var G__12914 = cljs.core.chunk_rest(seq__12009_12912__$1);
var G__12915 = c__5525__auto___12913;
var G__12916 = cljs.core.count(c__5525__auto___12913);
var G__12917 = (0);
seq__12009_12894 = G__12914;
chunk__12011_12895 = G__12915;
count__12012_12896 = G__12916;
i__12013_12897 = G__12917;
continue;
} else {
var child_12918 = cljs.core.first(seq__12009_12912__$1);
if(cljs.core.truth_(child_12918)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12918);


var G__12920 = cljs.core.next(seq__12009_12912__$1);
var G__12921 = null;
var G__12922 = (0);
var G__12923 = (0);
seq__12009_12894 = G__12920;
chunk__12011_12895 = G__12921;
count__12012_12896 = G__12922;
i__12013_12897 = G__12923;
continue;
} else {
var G__12928 = cljs.core.next(seq__12009_12912__$1);
var G__12929 = null;
var G__12930 = (0);
var G__12931 = (0);
seq__12009_12894 = G__12928;
chunk__12011_12895 = G__12929;
count__12012_12896 = G__12930;
i__12013_12897 = G__12931;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12893);
}


var G__12934 = seq__11961_12888;
var G__12935 = chunk__11962_12889;
var G__12936 = count__11963_12890;
var G__12937 = (i__11964_12891 + (1));
seq__11961_12888 = G__12934;
chunk__11962_12889 = G__12935;
count__11963_12890 = G__12936;
i__11964_12891 = G__12937;
continue;
} else {
var temp__5804__auto___12939 = cljs.core.seq(seq__11961_12888);
if(temp__5804__auto___12939){
var seq__11961_12940__$1 = temp__5804__auto___12939;
if(cljs.core.chunked_seq_QMARK_(seq__11961_12940__$1)){
var c__5525__auto___12941 = cljs.core.chunk_first(seq__11961_12940__$1);
var G__12942 = cljs.core.chunk_rest(seq__11961_12940__$1);
var G__12943 = c__5525__auto___12941;
var G__12944 = cljs.core.count(c__5525__auto___12941);
var G__12945 = (0);
seq__11961_12888 = G__12942;
chunk__11962_12889 = G__12943;
count__11963_12890 = G__12944;
i__11964_12891 = G__12945;
continue;
} else {
var child_struct_12946 = cljs.core.first(seq__11961_12940__$1);
var children_12947 = shadow.dom.dom_node(child_struct_12946);
if(cljs.core.seq_QMARK_(children_12947)){
var seq__12042_12948 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12947));
var chunk__12044_12949 = null;
var count__12045_12950 = (0);
var i__12046_12951 = (0);
while(true){
if((i__12046_12951 < count__12045_12950)){
var child_12953 = chunk__12044_12949.cljs$core$IIndexed$_nth$arity$2(null, i__12046_12951);
if(cljs.core.truth_(child_12953)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12953);


var G__12955 = seq__12042_12948;
var G__12956 = chunk__12044_12949;
var G__12957 = count__12045_12950;
var G__12958 = (i__12046_12951 + (1));
seq__12042_12948 = G__12955;
chunk__12044_12949 = G__12956;
count__12045_12950 = G__12957;
i__12046_12951 = G__12958;
continue;
} else {
var G__12960 = seq__12042_12948;
var G__12961 = chunk__12044_12949;
var G__12962 = count__12045_12950;
var G__12963 = (i__12046_12951 + (1));
seq__12042_12948 = G__12960;
chunk__12044_12949 = G__12961;
count__12045_12950 = G__12962;
i__12046_12951 = G__12963;
continue;
}
} else {
var temp__5804__auto___12965__$1 = cljs.core.seq(seq__12042_12948);
if(temp__5804__auto___12965__$1){
var seq__12042_12966__$1 = temp__5804__auto___12965__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12042_12966__$1)){
var c__5525__auto___12968 = cljs.core.chunk_first(seq__12042_12966__$1);
var G__12969 = cljs.core.chunk_rest(seq__12042_12966__$1);
var G__12970 = c__5525__auto___12968;
var G__12971 = cljs.core.count(c__5525__auto___12968);
var G__12972 = (0);
seq__12042_12948 = G__12969;
chunk__12044_12949 = G__12970;
count__12045_12950 = G__12971;
i__12046_12951 = G__12972;
continue;
} else {
var child_12973 = cljs.core.first(seq__12042_12966__$1);
if(cljs.core.truth_(child_12973)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12973);


var G__12974 = cljs.core.next(seq__12042_12966__$1);
var G__12975 = null;
var G__12976 = (0);
var G__12977 = (0);
seq__12042_12948 = G__12974;
chunk__12044_12949 = G__12975;
count__12045_12950 = G__12976;
i__12046_12951 = G__12977;
continue;
} else {
var G__12979 = cljs.core.next(seq__12042_12966__$1);
var G__12980 = null;
var G__12981 = (0);
var G__12982 = (0);
seq__12042_12948 = G__12979;
chunk__12044_12949 = G__12980;
count__12045_12950 = G__12981;
i__12046_12951 = G__12982;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12947);
}


var G__12983 = cljs.core.next(seq__11961_12940__$1);
var G__12984 = null;
var G__12985 = (0);
var G__12986 = (0);
seq__11961_12888 = G__12983;
chunk__11962_12889 = G__12984;
count__11963_12890 = G__12985;
i__11964_12891 = G__12986;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12061 = cljs.core.seq(node);
var chunk__12062 = null;
var count__12063 = (0);
var i__12064 = (0);
while(true){
if((i__12064 < count__12063)){
var n = chunk__12062.cljs$core$IIndexed$_nth$arity$2(null, i__12064);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12992 = seq__12061;
var G__12993 = chunk__12062;
var G__12994 = count__12063;
var G__12995 = (i__12064 + (1));
seq__12061 = G__12992;
chunk__12062 = G__12993;
count__12063 = G__12994;
i__12064 = G__12995;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12061);
if(temp__5804__auto__){
var seq__12061__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12061__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12061__$1);
var G__12997 = cljs.core.chunk_rest(seq__12061__$1);
var G__12998 = c__5525__auto__;
var G__12999 = cljs.core.count(c__5525__auto__);
var G__13000 = (0);
seq__12061 = G__12997;
chunk__12062 = G__12998;
count__12063 = G__12999;
i__12064 = G__13000;
continue;
} else {
var n = cljs.core.first(seq__12061__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13006 = cljs.core.next(seq__12061__$1);
var G__13007 = null;
var G__13008 = (0);
var G__13009 = (0);
seq__12061 = G__13006;
chunk__12062 = G__13007;
count__12063 = G__13008;
i__12064 = G__13009;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12083 = arguments.length;
switch (G__12083) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12089 = arguments.length;
switch (G__12089) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12104 = arguments.length;
switch (G__12104) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13033 = arguments.length;
var i__5727__auto___13034 = (0);
while(true){
if((i__5727__auto___13034 < len__5726__auto___13033)){
args__5732__auto__.push((arguments[i__5727__auto___13034]));

var G__13036 = (i__5727__auto___13034 + (1));
i__5727__auto___13034 = G__13036;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12146_13037 = cljs.core.seq(nodes);
var chunk__12147_13038 = null;
var count__12148_13039 = (0);
var i__12149_13040 = (0);
while(true){
if((i__12149_13040 < count__12148_13039)){
var node_13041 = chunk__12147_13038.cljs$core$IIndexed$_nth$arity$2(null, i__12149_13040);
fragment.appendChild(shadow.dom._to_dom(node_13041));


var G__13048 = seq__12146_13037;
var G__13049 = chunk__12147_13038;
var G__13050 = count__12148_13039;
var G__13051 = (i__12149_13040 + (1));
seq__12146_13037 = G__13048;
chunk__12147_13038 = G__13049;
count__12148_13039 = G__13050;
i__12149_13040 = G__13051;
continue;
} else {
var temp__5804__auto___13052 = cljs.core.seq(seq__12146_13037);
if(temp__5804__auto___13052){
var seq__12146_13054__$1 = temp__5804__auto___13052;
if(cljs.core.chunked_seq_QMARK_(seq__12146_13054__$1)){
var c__5525__auto___13056 = cljs.core.chunk_first(seq__12146_13054__$1);
var G__13057 = cljs.core.chunk_rest(seq__12146_13054__$1);
var G__13058 = c__5525__auto___13056;
var G__13059 = cljs.core.count(c__5525__auto___13056);
var G__13060 = (0);
seq__12146_13037 = G__13057;
chunk__12147_13038 = G__13058;
count__12148_13039 = G__13059;
i__12149_13040 = G__13060;
continue;
} else {
var node_13061 = cljs.core.first(seq__12146_13054__$1);
fragment.appendChild(shadow.dom._to_dom(node_13061));


var G__13065 = cljs.core.next(seq__12146_13054__$1);
var G__13066 = null;
var G__13067 = (0);
var G__13068 = (0);
seq__12146_13037 = G__13065;
chunk__12147_13038 = G__13066;
count__12148_13039 = G__13067;
i__12149_13040 = G__13068;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12141){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12141));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12203_13073 = cljs.core.seq(scripts);
var chunk__12205_13074 = null;
var count__12206_13075 = (0);
var i__12207_13076 = (0);
while(true){
if((i__12207_13076 < count__12206_13075)){
var vec__12223_13077 = chunk__12205_13074.cljs$core$IIndexed$_nth$arity$2(null, i__12207_13076);
var script_tag_13078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12223_13077,(0),null);
var script_body_13079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12223_13077,(1),null);
eval(script_body_13079);


var G__13080 = seq__12203_13073;
var G__13081 = chunk__12205_13074;
var G__13082 = count__12206_13075;
var G__13083 = (i__12207_13076 + (1));
seq__12203_13073 = G__13080;
chunk__12205_13074 = G__13081;
count__12206_13075 = G__13082;
i__12207_13076 = G__13083;
continue;
} else {
var temp__5804__auto___13084 = cljs.core.seq(seq__12203_13073);
if(temp__5804__auto___13084){
var seq__12203_13085__$1 = temp__5804__auto___13084;
if(cljs.core.chunked_seq_QMARK_(seq__12203_13085__$1)){
var c__5525__auto___13086 = cljs.core.chunk_first(seq__12203_13085__$1);
var G__13087 = cljs.core.chunk_rest(seq__12203_13085__$1);
var G__13088 = c__5525__auto___13086;
var G__13089 = cljs.core.count(c__5525__auto___13086);
var G__13090 = (0);
seq__12203_13073 = G__13087;
chunk__12205_13074 = G__13088;
count__12206_13075 = G__13089;
i__12207_13076 = G__13090;
continue;
} else {
var vec__12230_13091 = cljs.core.first(seq__12203_13085__$1);
var script_tag_13092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12230_13091,(0),null);
var script_body_13093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12230_13091,(1),null);
eval(script_body_13093);


var G__13094 = cljs.core.next(seq__12203_13085__$1);
var G__13095 = null;
var G__13096 = (0);
var G__13097 = (0);
seq__12203_13073 = G__13094;
chunk__12205_13074 = G__13095;
count__12206_13075 = G__13096;
i__12207_13076 = G__13097;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12235){
var vec__12237 = p__12235;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12237,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12237,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12285 = arguments.length;
switch (G__12285) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12318 = cljs.core.seq(style_keys);
var chunk__12319 = null;
var count__12320 = (0);
var i__12321 = (0);
while(true){
if((i__12321 < count__12320)){
var it = chunk__12319.cljs$core$IIndexed$_nth$arity$2(null, i__12321);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13125 = seq__12318;
var G__13126 = chunk__12319;
var G__13127 = count__12320;
var G__13128 = (i__12321 + (1));
seq__12318 = G__13125;
chunk__12319 = G__13126;
count__12320 = G__13127;
i__12321 = G__13128;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12318);
if(temp__5804__auto__){
var seq__12318__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12318__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12318__$1);
var G__13129 = cljs.core.chunk_rest(seq__12318__$1);
var G__13130 = c__5525__auto__;
var G__13131 = cljs.core.count(c__5525__auto__);
var G__13132 = (0);
seq__12318 = G__13129;
chunk__12319 = G__13130;
count__12320 = G__13131;
i__12321 = G__13132;
continue;
} else {
var it = cljs.core.first(seq__12318__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13133 = cljs.core.next(seq__12318__$1);
var G__13134 = null;
var G__13135 = (0);
var G__13136 = (0);
seq__12318 = G__13133;
chunk__12319 = G__13134;
count__12320 = G__13135;
i__12321 = G__13136;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12335,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12346 = k12335;
var G__12346__$1 = (((G__12346 instanceof cljs.core.Keyword))?G__12346.fqn:null);
switch (G__12346__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12335,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12351){
var vec__12353 = p__12351;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12353,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12353,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12334){
var self__ = this;
var G__12334__$1 = this;
return (new cljs.core.RecordIter((0),G__12334__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12336,other12337){
var self__ = this;
var this12336__$1 = this;
return (((!((other12337 == null)))) && ((((this12336__$1.constructor === other12337.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12336__$1.x,other12337.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12336__$1.y,other12337.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12336__$1.__extmap,other12337.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12335){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12383 = k12335;
var G__12383__$1 = (((G__12383 instanceof cljs.core.Keyword))?G__12383.fqn:null);
switch (G__12383__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12335);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12334){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12384 = cljs.core.keyword_identical_QMARK_;
var expr__12385 = k__5309__auto__;
if(cljs.core.truth_((pred__12384.cljs$core$IFn$_invoke$arity$2 ? pred__12384.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12385) : pred__12384.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12385)))){
return (new shadow.dom.Coordinate(G__12334,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12384.cljs$core$IFn$_invoke$arity$2 ? pred__12384.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12385) : pred__12384.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12385)))){
return (new shadow.dom.Coordinate(self__.x,G__12334,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12334),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12334){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12334,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12343){
var extmap__5342__auto__ = (function (){var G__12392 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12343,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12343)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12392);
} else {
return G__12392;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12343),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12343),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12418,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12423 = k12418;
var G__12423__$1 = (((G__12423 instanceof cljs.core.Keyword))?G__12423.fqn:null);
switch (G__12423__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12418,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12427){
var vec__12428 = p__12427;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12417){
var self__ = this;
var G__12417__$1 = this;
return (new cljs.core.RecordIter((0),G__12417__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12419,other12420){
var self__ = this;
var this12419__$1 = this;
return (((!((other12420 == null)))) && ((((this12419__$1.constructor === other12420.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12419__$1.w,other12420.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12419__$1.h,other12420.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12419__$1.__extmap,other12420.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12418){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12455 = k12418;
var G__12455__$1 = (((G__12455 instanceof cljs.core.Keyword))?G__12455.fqn:null);
switch (G__12455__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12418);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12417){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12459 = cljs.core.keyword_identical_QMARK_;
var expr__12460 = k__5309__auto__;
if(cljs.core.truth_((pred__12459.cljs$core$IFn$_invoke$arity$2 ? pred__12459.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12460) : pred__12459.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12460)))){
return (new shadow.dom.Size(G__12417,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12459.cljs$core$IFn$_invoke$arity$2 ? pred__12459.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12460) : pred__12459.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12460)))){
return (new shadow.dom.Size(self__.w,G__12417,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12417),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12417){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12417,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12421){
var extmap__5342__auto__ = (function (){var G__12475 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12421,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12421)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12475);
} else {
return G__12475;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12421),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12421),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13200 = (i + (1));
var G__13201 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13200;
ret = G__13201;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12510){
var vec__12511 = p__12510;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12511,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12511,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12521 = arguments.length;
switch (G__12521) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13226 = ps;
var G__13227 = (i + (1));
el__$1 = G__13226;
i = G__13227;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12556 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12561_13242 = cljs.core.seq(props);
var chunk__12562_13243 = null;
var count__12563_13244 = (0);
var i__12564_13245 = (0);
while(true){
if((i__12564_13245 < count__12563_13244)){
var vec__12585_13246 = chunk__12562_13243.cljs$core$IIndexed$_nth$arity$2(null, i__12564_13245);
var k_13247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12585_13246,(0),null);
var v_13248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12585_13246,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13247);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13247),v_13248);


var G__13249 = seq__12561_13242;
var G__13250 = chunk__12562_13243;
var G__13251 = count__12563_13244;
var G__13252 = (i__12564_13245 + (1));
seq__12561_13242 = G__13249;
chunk__12562_13243 = G__13250;
count__12563_13244 = G__13251;
i__12564_13245 = G__13252;
continue;
} else {
var temp__5804__auto___13253 = cljs.core.seq(seq__12561_13242);
if(temp__5804__auto___13253){
var seq__12561_13254__$1 = temp__5804__auto___13253;
if(cljs.core.chunked_seq_QMARK_(seq__12561_13254__$1)){
var c__5525__auto___13255 = cljs.core.chunk_first(seq__12561_13254__$1);
var G__13256 = cljs.core.chunk_rest(seq__12561_13254__$1);
var G__13257 = c__5525__auto___13255;
var G__13258 = cljs.core.count(c__5525__auto___13255);
var G__13259 = (0);
seq__12561_13242 = G__13256;
chunk__12562_13243 = G__13257;
count__12563_13244 = G__13258;
i__12564_13245 = G__13259;
continue;
} else {
var vec__12600_13260 = cljs.core.first(seq__12561_13254__$1);
var k_13261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600_13260,(0),null);
var v_13262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600_13260,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13261);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13261),v_13262);


var G__13263 = cljs.core.next(seq__12561_13254__$1);
var G__13264 = null;
var G__13265 = (0);
var G__13266 = (0);
seq__12561_13242 = G__13263;
chunk__12562_13243 = G__13264;
count__12563_13244 = G__13265;
i__12564_13245 = G__13266;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12612 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(1),null);
var seq__12616_13269 = cljs.core.seq(node_children);
var chunk__12618_13270 = null;
var count__12619_13271 = (0);
var i__12620_13272 = (0);
while(true){
if((i__12620_13272 < count__12619_13271)){
var child_struct_13273 = chunk__12618_13270.cljs$core$IIndexed$_nth$arity$2(null, i__12620_13272);
if((!((child_struct_13273 == null)))){
if(typeof child_struct_13273 === 'string'){
var text_13275 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13275),child_struct_13273].join(''));
} else {
var children_13280 = shadow.dom.svg_node(child_struct_13273);
if(cljs.core.seq_QMARK_(children_13280)){
var seq__12665_13283 = cljs.core.seq(children_13280);
var chunk__12667_13284 = null;
var count__12668_13285 = (0);
var i__12669_13286 = (0);
while(true){
if((i__12669_13286 < count__12668_13285)){
var child_13296 = chunk__12667_13284.cljs$core$IIndexed$_nth$arity$2(null, i__12669_13286);
if(cljs.core.truth_(child_13296)){
node.appendChild(child_13296);


var G__13298 = seq__12665_13283;
var G__13299 = chunk__12667_13284;
var G__13300 = count__12668_13285;
var G__13301 = (i__12669_13286 + (1));
seq__12665_13283 = G__13298;
chunk__12667_13284 = G__13299;
count__12668_13285 = G__13300;
i__12669_13286 = G__13301;
continue;
} else {
var G__13303 = seq__12665_13283;
var G__13304 = chunk__12667_13284;
var G__13305 = count__12668_13285;
var G__13306 = (i__12669_13286 + (1));
seq__12665_13283 = G__13303;
chunk__12667_13284 = G__13304;
count__12668_13285 = G__13305;
i__12669_13286 = G__13306;
continue;
}
} else {
var temp__5804__auto___13308 = cljs.core.seq(seq__12665_13283);
if(temp__5804__auto___13308){
var seq__12665_13310__$1 = temp__5804__auto___13308;
if(cljs.core.chunked_seq_QMARK_(seq__12665_13310__$1)){
var c__5525__auto___13311 = cljs.core.chunk_first(seq__12665_13310__$1);
var G__13313 = cljs.core.chunk_rest(seq__12665_13310__$1);
var G__13314 = c__5525__auto___13311;
var G__13315 = cljs.core.count(c__5525__auto___13311);
var G__13316 = (0);
seq__12665_13283 = G__13313;
chunk__12667_13284 = G__13314;
count__12668_13285 = G__13315;
i__12669_13286 = G__13316;
continue;
} else {
var child_13317 = cljs.core.first(seq__12665_13310__$1);
if(cljs.core.truth_(child_13317)){
node.appendChild(child_13317);


var G__13318 = cljs.core.next(seq__12665_13310__$1);
var G__13319 = null;
var G__13320 = (0);
var G__13321 = (0);
seq__12665_13283 = G__13318;
chunk__12667_13284 = G__13319;
count__12668_13285 = G__13320;
i__12669_13286 = G__13321;
continue;
} else {
var G__13322 = cljs.core.next(seq__12665_13310__$1);
var G__13323 = null;
var G__13324 = (0);
var G__13325 = (0);
seq__12665_13283 = G__13322;
chunk__12667_13284 = G__13323;
count__12668_13285 = G__13324;
i__12669_13286 = G__13325;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13280);
}
}


var G__13327 = seq__12616_13269;
var G__13328 = chunk__12618_13270;
var G__13329 = count__12619_13271;
var G__13330 = (i__12620_13272 + (1));
seq__12616_13269 = G__13327;
chunk__12618_13270 = G__13328;
count__12619_13271 = G__13329;
i__12620_13272 = G__13330;
continue;
} else {
var G__13331 = seq__12616_13269;
var G__13332 = chunk__12618_13270;
var G__13333 = count__12619_13271;
var G__13334 = (i__12620_13272 + (1));
seq__12616_13269 = G__13331;
chunk__12618_13270 = G__13332;
count__12619_13271 = G__13333;
i__12620_13272 = G__13334;
continue;
}
} else {
var temp__5804__auto___13337 = cljs.core.seq(seq__12616_13269);
if(temp__5804__auto___13337){
var seq__12616_13338__$1 = temp__5804__auto___13337;
if(cljs.core.chunked_seq_QMARK_(seq__12616_13338__$1)){
var c__5525__auto___13342 = cljs.core.chunk_first(seq__12616_13338__$1);
var G__13343 = cljs.core.chunk_rest(seq__12616_13338__$1);
var G__13344 = c__5525__auto___13342;
var G__13345 = cljs.core.count(c__5525__auto___13342);
var G__13346 = (0);
seq__12616_13269 = G__13343;
chunk__12618_13270 = G__13344;
count__12619_13271 = G__13345;
i__12620_13272 = G__13346;
continue;
} else {
var child_struct_13348 = cljs.core.first(seq__12616_13338__$1);
if((!((child_struct_13348 == null)))){
if(typeof child_struct_13348 === 'string'){
var text_13349 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13349),child_struct_13348].join(''));
} else {
var children_13351 = shadow.dom.svg_node(child_struct_13348);
if(cljs.core.seq_QMARK_(children_13351)){
var seq__12684_13352 = cljs.core.seq(children_13351);
var chunk__12686_13353 = null;
var count__12687_13354 = (0);
var i__12688_13355 = (0);
while(true){
if((i__12688_13355 < count__12687_13354)){
var child_13357 = chunk__12686_13353.cljs$core$IIndexed$_nth$arity$2(null, i__12688_13355);
if(cljs.core.truth_(child_13357)){
node.appendChild(child_13357);


var G__13358 = seq__12684_13352;
var G__13359 = chunk__12686_13353;
var G__13360 = count__12687_13354;
var G__13361 = (i__12688_13355 + (1));
seq__12684_13352 = G__13358;
chunk__12686_13353 = G__13359;
count__12687_13354 = G__13360;
i__12688_13355 = G__13361;
continue;
} else {
var G__13362 = seq__12684_13352;
var G__13363 = chunk__12686_13353;
var G__13364 = count__12687_13354;
var G__13365 = (i__12688_13355 + (1));
seq__12684_13352 = G__13362;
chunk__12686_13353 = G__13363;
count__12687_13354 = G__13364;
i__12688_13355 = G__13365;
continue;
}
} else {
var temp__5804__auto___13366__$1 = cljs.core.seq(seq__12684_13352);
if(temp__5804__auto___13366__$1){
var seq__12684_13367__$1 = temp__5804__auto___13366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12684_13367__$1)){
var c__5525__auto___13371 = cljs.core.chunk_first(seq__12684_13367__$1);
var G__13387 = cljs.core.chunk_rest(seq__12684_13367__$1);
var G__13388 = c__5525__auto___13371;
var G__13390 = cljs.core.count(c__5525__auto___13371);
var G__13392 = (0);
seq__12684_13352 = G__13387;
chunk__12686_13353 = G__13388;
count__12687_13354 = G__13390;
i__12688_13355 = G__13392;
continue;
} else {
var child_13425 = cljs.core.first(seq__12684_13367__$1);
if(cljs.core.truth_(child_13425)){
node.appendChild(child_13425);


var G__13429 = cljs.core.next(seq__12684_13367__$1);
var G__13430 = null;
var G__13431 = (0);
var G__13432 = (0);
seq__12684_13352 = G__13429;
chunk__12686_13353 = G__13430;
count__12687_13354 = G__13431;
i__12688_13355 = G__13432;
continue;
} else {
var G__13439 = cljs.core.next(seq__12684_13367__$1);
var G__13440 = null;
var G__13441 = (0);
var G__13442 = (0);
seq__12684_13352 = G__13439;
chunk__12686_13353 = G__13440;
count__12687_13354 = G__13441;
i__12688_13355 = G__13442;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13351);
}
}


var G__13444 = cljs.core.next(seq__12616_13338__$1);
var G__13445 = null;
var G__13446 = (0);
var G__13447 = (0);
seq__12616_13269 = G__13444;
chunk__12618_13270 = G__13445;
count__12619_13271 = G__13446;
i__12620_13272 = G__13447;
continue;
} else {
var G__13449 = cljs.core.next(seq__12616_13338__$1);
var G__13450 = null;
var G__13451 = (0);
var G__13452 = (0);
seq__12616_13269 = G__13449;
chunk__12618_13270 = G__13450;
count__12619_13271 = G__13451;
i__12620_13272 = G__13452;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13464 = arguments.length;
var i__5727__auto___13465 = (0);
while(true){
if((i__5727__auto___13465 < len__5726__auto___13464)){
args__5732__auto__.push((arguments[i__5727__auto___13465]));

var G__13470 = (i__5727__auto___13465 + (1));
i__5727__auto___13465 = G__13470;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12719){
var G__12720 = cljs.core.first(seq12719);
var seq12719__$1 = cljs.core.next(seq12719);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12720,seq12719__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
