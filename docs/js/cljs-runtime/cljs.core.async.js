goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14609 = (function (f,blockable,meta14610){
this.f = f;
this.blockable = blockable;
this.meta14610 = meta14610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14611,meta14610__$1){
var self__ = this;
var _14611__$1 = this;
return (new cljs.core.async.t_cljs$core$async14609(self__.f,self__.blockable,meta14610__$1));
}));

(cljs.core.async.t_cljs$core$async14609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14611){
var self__ = this;
var _14611__$1 = this;
return self__.meta14610;
}));

(cljs.core.async.t_cljs$core$async14609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14610","meta14610",-606358165,null)], null);
}));

(cljs.core.async.t_cljs$core$async14609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14609");

(cljs.core.async.t_cljs$core$async14609.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14609.
 */
cljs.core.async.__GT_t_cljs$core$async14609 = (function cljs$core$async$__GT_t_cljs$core$async14609(f,blockable,meta14610){
return (new cljs.core.async.t_cljs$core$async14609(f,blockable,meta14610));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14608 = arguments.length;
switch (G__14608) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14609(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14625 = arguments.length;
switch (G__14625) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14629 = arguments.length;
switch (G__14629) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14651 = arguments.length;
switch (G__14651) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17779 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17779) : fn1.call(null, val_17779));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17779) : fn1.call(null, val_17779));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14659 = arguments.length;
switch (G__14659) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17818 = n;
var x_17822 = (0);
while(true){
if((x_17822 < n__5593__auto___17818)){
(a[x_17822] = x_17822);

var G__17832 = (x_17822 + (1));
x_17822 = G__17832;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14759 = (function (flag,meta14760){
this.flag = flag;
this.meta14760 = meta14760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14761,meta14760__$1){
var self__ = this;
var _14761__$1 = this;
return (new cljs.core.async.t_cljs$core$async14759(self__.flag,meta14760__$1));
}));

(cljs.core.async.t_cljs$core$async14759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14761){
var self__ = this;
var _14761__$1 = this;
return self__.meta14760;
}));

(cljs.core.async.t_cljs$core$async14759.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14759.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14760","meta14760",939395145,null)], null);
}));

(cljs.core.async.t_cljs$core$async14759.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14759");

(cljs.core.async.t_cljs$core$async14759.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14759");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14759.
 */
cljs.core.async.__GT_t_cljs$core$async14759 = (function cljs$core$async$__GT_t_cljs$core$async14759(flag,meta14760){
return (new cljs.core.async.t_cljs$core$async14759(flag,meta14760));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14759(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14763 = (function (flag,cb,meta14764){
this.flag = flag;
this.cb = cb;
this.meta14764 = meta14764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14765,meta14764__$1){
var self__ = this;
var _14765__$1 = this;
return (new cljs.core.async.t_cljs$core$async14763(self__.flag,self__.cb,meta14764__$1));
}));

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14765){
var self__ = this;
var _14765__$1 = this;
return self__.meta14764;
}));

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14764","meta14764",31258136,null)], null);
}));

(cljs.core.async.t_cljs$core$async14763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14763");

(cljs.core.async.t_cljs$core$async14763.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14763.
 */
cljs.core.async.__GT_t_cljs$core$async14763 = (function cljs$core$async$__GT_t_cljs$core$async14763(flag,cb,meta14764){
return (new cljs.core.async.t_cljs$core$async14763(flag,cb,meta14764));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14763(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14780_SHARP_){
var G__14786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14780_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14786) : fret.call(null, G__14786));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14781_SHARP_){
var G__14788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14781_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14788) : fret.call(null, G__14788));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17878 = (i + (1));
i = G__17878;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17879 = arguments.length;
var i__5727__auto___17880 = (0);
while(true){
if((i__5727__auto___17880 < len__5726__auto___17879)){
args__5732__auto__.push((arguments[i__5727__auto___17880]));

var G__17881 = (i__5727__auto___17880 + (1));
i__5727__auto___17880 = G__17881;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14796){
var map__14797 = p__14796;
var map__14797__$1 = cljs.core.__destructure_map(map__14797);
var opts = map__14797__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14791){
var G__14792 = cljs.core.first(seq14791);
var seq14791__$1 = cljs.core.next(seq14791);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14792,seq14791__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14809 = arguments.length;
switch (G__14809) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14450__auto___17895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_14893){
var state_val_14894 = (state_14893[(1)]);
if((state_val_14894 === (7))){
var inst_14869 = (state_14893[(2)]);
var state_14893__$1 = state_14893;
var statearr_14900_17908 = state_14893__$1;
(statearr_14900_17908[(2)] = inst_14869);

(statearr_14900_17908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (1))){
var state_14893__$1 = state_14893;
var statearr_14903_17926 = state_14893__$1;
(statearr_14903_17926[(2)] = null);

(statearr_14903_17926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (4))){
var inst_14833 = (state_14893[(7)]);
var inst_14833__$1 = (state_14893[(2)]);
var inst_14835 = (inst_14833__$1 == null);
var state_14893__$1 = (function (){var statearr_14906 = state_14893;
(statearr_14906[(7)] = inst_14833__$1);

return statearr_14906;
})();
if(cljs.core.truth_(inst_14835)){
var statearr_14907_17934 = state_14893__$1;
(statearr_14907_17934[(1)] = (5));

} else {
var statearr_14908_17937 = state_14893__$1;
(statearr_14908_17937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (13))){
var state_14893__$1 = state_14893;
var statearr_14909_17948 = state_14893__$1;
(statearr_14909_17948[(2)] = null);

(statearr_14909_17948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (6))){
var inst_14833 = (state_14893[(7)]);
var state_14893__$1 = state_14893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14893__$1,(11),to,inst_14833);
} else {
if((state_val_14894 === (3))){
var inst_14888 = (state_14893[(2)]);
var state_14893__$1 = state_14893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14893__$1,inst_14888);
} else {
if((state_val_14894 === (12))){
var state_14893__$1 = state_14893;
var statearr_14911_17962 = state_14893__$1;
(statearr_14911_17962[(2)] = null);

(statearr_14911_17962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (2))){
var state_14893__$1 = state_14893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14893__$1,(4),from);
} else {
if((state_val_14894 === (11))){
var inst_14850 = (state_14893[(2)]);
var state_14893__$1 = state_14893;
if(cljs.core.truth_(inst_14850)){
var statearr_14915_17979 = state_14893__$1;
(statearr_14915_17979[(1)] = (12));

} else {
var statearr_14916_17980 = state_14893__$1;
(statearr_14916_17980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (9))){
var state_14893__$1 = state_14893;
var statearr_14918_17985 = state_14893__$1;
(statearr_14918_17985[(2)] = null);

(statearr_14918_17985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (5))){
var state_14893__$1 = state_14893;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14919_17989 = state_14893__$1;
(statearr_14919_17989[(1)] = (8));

} else {
var statearr_14920_17990 = state_14893__$1;
(statearr_14920_17990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (14))){
var inst_14867 = (state_14893[(2)]);
var state_14893__$1 = state_14893;
var statearr_14921_17994 = state_14893__$1;
(statearr_14921_17994[(2)] = inst_14867);

(statearr_14921_17994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (10))){
var inst_14844 = (state_14893[(2)]);
var state_14893__$1 = state_14893;
var statearr_14924_18006 = state_14893__$1;
(statearr_14924_18006[(2)] = inst_14844);

(statearr_14924_18006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (8))){
var inst_14838 = cljs.core.async.close_BANG_(to);
var state_14893__$1 = state_14893;
var statearr_14927_18017 = state_14893__$1;
(statearr_14927_18017[(2)] = inst_14838);

(statearr_14927_18017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_14928 = [null,null,null,null,null,null,null,null];
(statearr_14928[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_14928[(1)] = (1));

return statearr_14928;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_14893){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_14893);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e14932){var ex__14122__auto__ = e14932;
var statearr_14934_18034 = state_14893;
(statearr_14934_18034[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_14893[(4)]))){
var statearr_14935_18038 = state_14893;
(statearr_14935_18038[(1)] = cljs.core.first((state_14893[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18043 = state_14893;
state_14893 = G__18043;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_14893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_14893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_14938 = f__14451__auto__();
(statearr_14938[(6)] = c__14450__auto___17895);

return statearr_14938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14952){
var vec__14953 = p__14952;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953,(1),null);
var job = vec__14953;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14450__auto___18050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_14965){
var state_val_14966 = (state_14965[(1)]);
if((state_val_14966 === (1))){
var state_14965__$1 = state_14965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14965__$1,(2),res,v);
} else {
if((state_val_14966 === (2))){
var inst_14962 = (state_14965[(2)]);
var inst_14963 = cljs.core.async.close_BANG_(res);
var state_14965__$1 = (function (){var statearr_14980 = state_14965;
(statearr_14980[(7)] = inst_14962);

return statearr_14980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14965__$1,inst_14963);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_14988 = [null,null,null,null,null,null,null,null];
(statearr_14988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_14988[(1)] = (1));

return statearr_14988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_14965){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_14965);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e14993){var ex__14122__auto__ = e14993;
var statearr_14994_18054 = state_14965;
(statearr_14994_18054[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_14965[(4)]))){
var statearr_14996_18058 = state_14965;
(statearr_14996_18058[(1)] = cljs.core.first((state_14965[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18064 = state_14965;
state_14965 = G__18064;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_14965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_14965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_15003 = f__14451__auto__();
(statearr_15003[(6)] = c__14450__auto___18050);

return statearr_15003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15010){
var vec__15012 = p__15010;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15012,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15012,(1),null);
var job = vec__15012;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18072 = n;
var __18073 = (0);
while(true){
if((__18073 < n__5593__auto___18072)){
var G__15021_18076 = type;
var G__15021_18077__$1 = (((G__15021_18076 instanceof cljs.core.Keyword))?G__15021_18076.fqn:null);
switch (G__15021_18077__$1) {
case "compute":
var c__14450__auto___18079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18073,c__14450__auto___18079,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async){
return (function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = ((function (__18073,c__14450__auto___18079,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async){
return (function (state_15044){
var state_val_15045 = (state_15044[(1)]);
if((state_val_15045 === (1))){
var state_15044__$1 = state_15044;
var statearr_15049_18085 = state_15044__$1;
(statearr_15049_18085[(2)] = null);

(statearr_15049_18085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (2))){
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15044__$1,(4),jobs);
} else {
if((state_val_15045 === (3))){
var inst_15042 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15044__$1,inst_15042);
} else {
if((state_val_15045 === (4))){
var inst_15031 = (state_15044[(2)]);
var inst_15032 = process__$1(inst_15031);
var state_15044__$1 = state_15044;
if(cljs.core.truth_(inst_15032)){
var statearr_15055_18100 = state_15044__$1;
(statearr_15055_18100[(1)] = (5));

} else {
var statearr_15056_18101 = state_15044__$1;
(statearr_15056_18101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (5))){
var state_15044__$1 = state_15044;
var statearr_15057_18102 = state_15044__$1;
(statearr_15057_18102[(2)] = null);

(statearr_15057_18102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (6))){
var state_15044__$1 = state_15044;
var statearr_15058_18103 = state_15044__$1;
(statearr_15058_18103[(2)] = null);

(statearr_15058_18103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (7))){
var inst_15040 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
var statearr_15059_18108 = state_15044__$1;
(statearr_15059_18108[(2)] = inst_15040);

(statearr_15059_18108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18073,c__14450__auto___18079,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async))
;
return ((function (__18073,switch__14118__auto__,c__14450__auto___18079,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_15060 = [null,null,null,null,null,null,null];
(statearr_15060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_15060[(1)] = (1));

return statearr_15060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_15044){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15044);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15061){var ex__14122__auto__ = e15061;
var statearr_15062_18111 = state_15044;
(statearr_15062_18111[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_15044[(4)]))){
var statearr_15064_18115 = state_15044;
(statearr_15064_18115[(1)] = cljs.core.first((state_15044[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18124 = state_15044;
state_15044 = G__18124;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_15044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_15044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
;})(__18073,switch__14118__auto__,c__14450__auto___18079,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async))
})();
var state__14452__auto__ = (function (){var statearr_15067 = f__14451__auto__();
(statearr_15067[(6)] = c__14450__auto___18079);

return statearr_15067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
});})(__18073,c__14450__auto___18079,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async))
);


break;
case "async":
var c__14450__auto___18125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18073,c__14450__auto___18125,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async){
return (function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = ((function (__18073,c__14450__auto___18125,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async){
return (function (state_15082){
var state_val_15083 = (state_15082[(1)]);
if((state_val_15083 === (1))){
var state_15082__$1 = state_15082;
var statearr_15087_18129 = state_15082__$1;
(statearr_15087_18129[(2)] = null);

(statearr_15087_18129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (2))){
var state_15082__$1 = state_15082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15082__$1,(4),jobs);
} else {
if((state_val_15083 === (3))){
var inst_15080 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15082__$1,inst_15080);
} else {
if((state_val_15083 === (4))){
var inst_15071 = (state_15082[(2)]);
var inst_15072 = async(inst_15071);
var state_15082__$1 = state_15082;
if(cljs.core.truth_(inst_15072)){
var statearr_15090_18138 = state_15082__$1;
(statearr_15090_18138[(1)] = (5));

} else {
var statearr_15091_18139 = state_15082__$1;
(statearr_15091_18139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (5))){
var state_15082__$1 = state_15082;
var statearr_15095_18140 = state_15082__$1;
(statearr_15095_18140[(2)] = null);

(statearr_15095_18140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (6))){
var state_15082__$1 = state_15082;
var statearr_15100_18141 = state_15082__$1;
(statearr_15100_18141[(2)] = null);

(statearr_15100_18141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15083 === (7))){
var inst_15078 = (state_15082[(2)]);
var state_15082__$1 = state_15082;
var statearr_15107_18143 = state_15082__$1;
(statearr_15107_18143[(2)] = inst_15078);

(statearr_15107_18143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18073,c__14450__auto___18125,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async))
;
return ((function (__18073,switch__14118__auto__,c__14450__auto___18125,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_15114 = [null,null,null,null,null,null,null];
(statearr_15114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_15114[(1)] = (1));

return statearr_15114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_15082){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15082);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15115){var ex__14122__auto__ = e15115;
var statearr_15116_18145 = state_15082;
(statearr_15116_18145[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_15082[(4)]))){
var statearr_15122_18146 = state_15082;
(statearr_15122_18146[(1)] = cljs.core.first((state_15082[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18148 = state_15082;
state_15082 = G__18148;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_15082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_15082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
;})(__18073,switch__14118__auto__,c__14450__auto___18125,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async))
})();
var state__14452__auto__ = (function (){var statearr_15123 = f__14451__auto__();
(statearr_15123[(6)] = c__14450__auto___18125);

return statearr_15123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
});})(__18073,c__14450__auto___18125,G__15021_18076,G__15021_18077__$1,n__5593__auto___18072,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15021_18077__$1)].join('')));

}

var G__18161 = (__18073 + (1));
__18073 = G__18161;
continue;
} else {
}
break;
}

var c__14450__auto___18162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_15151){
var state_val_15152 = (state_15151[(1)]);
if((state_val_15152 === (7))){
var inst_15146 = (state_15151[(2)]);
var state_15151__$1 = state_15151;
var statearr_15154_18164 = state_15151__$1;
(statearr_15154_18164[(2)] = inst_15146);

(statearr_15154_18164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15152 === (1))){
var state_15151__$1 = state_15151;
var statearr_15155_18166 = state_15151__$1;
(statearr_15155_18166[(2)] = null);

(statearr_15155_18166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15152 === (4))){
var inst_15126 = (state_15151[(7)]);
var inst_15126__$1 = (state_15151[(2)]);
var inst_15127 = (inst_15126__$1 == null);
var state_15151__$1 = (function (){var statearr_15156 = state_15151;
(statearr_15156[(7)] = inst_15126__$1);

return statearr_15156;
})();
if(cljs.core.truth_(inst_15127)){
var statearr_15157_18167 = state_15151__$1;
(statearr_15157_18167[(1)] = (5));

} else {
var statearr_15158_18173 = state_15151__$1;
(statearr_15158_18173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15152 === (6))){
var inst_15135 = (state_15151[(8)]);
var inst_15126 = (state_15151[(7)]);
var inst_15135__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15138 = [inst_15126,inst_15135__$1];
var inst_15139 = (new cljs.core.PersistentVector(null,2,(5),inst_15137,inst_15138,null));
var state_15151__$1 = (function (){var statearr_15159 = state_15151;
(statearr_15159[(8)] = inst_15135__$1);

return statearr_15159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15151__$1,(8),jobs,inst_15139);
} else {
if((state_val_15152 === (3))){
var inst_15148 = (state_15151[(2)]);
var state_15151__$1 = state_15151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15151__$1,inst_15148);
} else {
if((state_val_15152 === (2))){
var state_15151__$1 = state_15151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15151__$1,(4),from);
} else {
if((state_val_15152 === (9))){
var inst_15143 = (state_15151[(2)]);
var state_15151__$1 = (function (){var statearr_15160 = state_15151;
(statearr_15160[(9)] = inst_15143);

return statearr_15160;
})();
var statearr_15161_18179 = state_15151__$1;
(statearr_15161_18179[(2)] = null);

(statearr_15161_18179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15152 === (5))){
var inst_15130 = cljs.core.async.close_BANG_(jobs);
var state_15151__$1 = state_15151;
var statearr_15162_18180 = state_15151__$1;
(statearr_15162_18180[(2)] = inst_15130);

(statearr_15162_18180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15152 === (8))){
var inst_15135 = (state_15151[(8)]);
var inst_15141 = (state_15151[(2)]);
var state_15151__$1 = (function (){var statearr_15163 = state_15151;
(statearr_15163[(10)] = inst_15141);

return statearr_15163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15151__$1,(9),results,inst_15135);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_15164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_15164[(1)] = (1));

return statearr_15164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_15151){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15151);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15166){var ex__14122__auto__ = e15166;
var statearr_15167_18182 = state_15151;
(statearr_15167_18182[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_15151[(4)]))){
var statearr_15168_18184 = state_15151;
(statearr_15168_18184[(1)] = cljs.core.first((state_15151[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18185 = state_15151;
state_15151 = G__18185;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_15151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_15151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_15170 = f__14451__auto__();
(statearr_15170[(6)] = c__14450__auto___18162);

return statearr_15170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


var c__14450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_15216){
var state_val_15217 = (state_15216[(1)]);
if((state_val_15217 === (7))){
var inst_15212 = (state_15216[(2)]);
var state_15216__$1 = state_15216;
var statearr_15222_18191 = state_15216__$1;
(statearr_15222_18191[(2)] = inst_15212);

(statearr_15222_18191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (20))){
var state_15216__$1 = state_15216;
var statearr_15226_18192 = state_15216__$1;
(statearr_15226_18192[(2)] = null);

(statearr_15226_18192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (1))){
var state_15216__$1 = state_15216;
var statearr_15227_18195 = state_15216__$1;
(statearr_15227_18195[(2)] = null);

(statearr_15227_18195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (4))){
var inst_15177 = (state_15216[(7)]);
var inst_15177__$1 = (state_15216[(2)]);
var inst_15178 = (inst_15177__$1 == null);
var state_15216__$1 = (function (){var statearr_15228 = state_15216;
(statearr_15228[(7)] = inst_15177__$1);

return statearr_15228;
})();
if(cljs.core.truth_(inst_15178)){
var statearr_15229_18197 = state_15216__$1;
(statearr_15229_18197[(1)] = (5));

} else {
var statearr_15233_18198 = state_15216__$1;
(statearr_15233_18198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (15))){
var inst_15194 = (state_15216[(8)]);
var state_15216__$1 = state_15216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15216__$1,(18),to,inst_15194);
} else {
if((state_val_15217 === (21))){
var inst_15207 = (state_15216[(2)]);
var state_15216__$1 = state_15216;
var statearr_15237_18199 = state_15216__$1;
(statearr_15237_18199[(2)] = inst_15207);

(statearr_15237_18199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (13))){
var inst_15209 = (state_15216[(2)]);
var state_15216__$1 = (function (){var statearr_15238 = state_15216;
(statearr_15238[(9)] = inst_15209);

return statearr_15238;
})();
var statearr_15239_18203 = state_15216__$1;
(statearr_15239_18203[(2)] = null);

(statearr_15239_18203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (6))){
var inst_15177 = (state_15216[(7)]);
var state_15216__$1 = state_15216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15216__$1,(11),inst_15177);
} else {
if((state_val_15217 === (17))){
var inst_15202 = (state_15216[(2)]);
var state_15216__$1 = state_15216;
if(cljs.core.truth_(inst_15202)){
var statearr_15245_18205 = state_15216__$1;
(statearr_15245_18205[(1)] = (19));

} else {
var statearr_15246_18207 = state_15216__$1;
(statearr_15246_18207[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (3))){
var inst_15214 = (state_15216[(2)]);
var state_15216__$1 = state_15216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15216__$1,inst_15214);
} else {
if((state_val_15217 === (12))){
var inst_15190 = (state_15216[(10)]);
var state_15216__$1 = state_15216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15216__$1,(14),inst_15190);
} else {
if((state_val_15217 === (2))){
var state_15216__$1 = state_15216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15216__$1,(4),results);
} else {
if((state_val_15217 === (19))){
var state_15216__$1 = state_15216;
var statearr_15257_18215 = state_15216__$1;
(statearr_15257_18215[(2)] = null);

(statearr_15257_18215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (11))){
var inst_15190 = (state_15216[(2)]);
var state_15216__$1 = (function (){var statearr_15261 = state_15216;
(statearr_15261[(10)] = inst_15190);

return statearr_15261;
})();
var statearr_15268_18216 = state_15216__$1;
(statearr_15268_18216[(2)] = null);

(statearr_15268_18216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (9))){
var state_15216__$1 = state_15216;
var statearr_15269_18217 = state_15216__$1;
(statearr_15269_18217[(2)] = null);

(statearr_15269_18217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (5))){
var state_15216__$1 = state_15216;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15274_18220 = state_15216__$1;
(statearr_15274_18220[(1)] = (8));

} else {
var statearr_15275_18221 = state_15216__$1;
(statearr_15275_18221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (14))){
var inst_15196 = (state_15216[(11)]);
var inst_15194 = (state_15216[(8)]);
var inst_15194__$1 = (state_15216[(2)]);
var inst_15195 = (inst_15194__$1 == null);
var inst_15196__$1 = cljs.core.not(inst_15195);
var state_15216__$1 = (function (){var statearr_15276 = state_15216;
(statearr_15276[(11)] = inst_15196__$1);

(statearr_15276[(8)] = inst_15194__$1);

return statearr_15276;
})();
if(inst_15196__$1){
var statearr_15277_18230 = state_15216__$1;
(statearr_15277_18230[(1)] = (15));

} else {
var statearr_15278_18231 = state_15216__$1;
(statearr_15278_18231[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (16))){
var inst_15196 = (state_15216[(11)]);
var state_15216__$1 = state_15216;
var statearr_15280_18235 = state_15216__$1;
(statearr_15280_18235[(2)] = inst_15196);

(statearr_15280_18235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (10))){
var inst_15184 = (state_15216[(2)]);
var state_15216__$1 = state_15216;
var statearr_15287_18236 = state_15216__$1;
(statearr_15287_18236[(2)] = inst_15184);

(statearr_15287_18236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (18))){
var inst_15199 = (state_15216[(2)]);
var state_15216__$1 = state_15216;
var statearr_15294_18241 = state_15216__$1;
(statearr_15294_18241[(2)] = inst_15199);

(statearr_15294_18241[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15217 === (8))){
var inst_15181 = cljs.core.async.close_BANG_(to);
var state_15216__$1 = state_15216;
var statearr_15295_18245 = state_15216__$1;
(statearr_15295_18245[(2)] = inst_15181);

(statearr_15295_18245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_15297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__);

(statearr_15297[(1)] = (1));

return statearr_15297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1 = (function (state_15216){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15216);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15307){var ex__14122__auto__ = e15307;
var statearr_15308_18247 = state_15216;
(statearr_15308_18247[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_15216[(4)]))){
var statearr_15309_18248 = state_15216;
(statearr_15309_18248[(1)] = cljs.core.first((state_15216[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18253 = state_15216;
state_15216 = G__18253;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__ = function(state_15216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1.call(this,state_15216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_15310 = f__14451__auto__();
(statearr_15310[(6)] = c__14450__auto__);

return statearr_15310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));

return c__14450__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15315 = arguments.length;
switch (G__15315) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15324 = arguments.length;
switch (G__15324) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15327 = arguments.length;
switch (G__15327) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14450__auto___18273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_15353){
var state_val_15354 = (state_15353[(1)]);
if((state_val_15354 === (7))){
var inst_15349 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
var statearr_15355_18274 = state_15353__$1;
(statearr_15355_18274[(2)] = inst_15349);

(statearr_15355_18274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (1))){
var state_15353__$1 = state_15353;
var statearr_15356_18275 = state_15353__$1;
(statearr_15356_18275[(2)] = null);

(statearr_15356_18275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (4))){
var inst_15330 = (state_15353[(7)]);
var inst_15330__$1 = (state_15353[(2)]);
var inst_15331 = (inst_15330__$1 == null);
var state_15353__$1 = (function (){var statearr_15358 = state_15353;
(statearr_15358[(7)] = inst_15330__$1);

return statearr_15358;
})();
if(cljs.core.truth_(inst_15331)){
var statearr_15359_18280 = state_15353__$1;
(statearr_15359_18280[(1)] = (5));

} else {
var statearr_15360_18281 = state_15353__$1;
(statearr_15360_18281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (13))){
var state_15353__$1 = state_15353;
var statearr_15361_18282 = state_15353__$1;
(statearr_15361_18282[(2)] = null);

(statearr_15361_18282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (6))){
var inst_15330 = (state_15353[(7)]);
var inst_15336 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15330) : p.call(null, inst_15330));
var state_15353__$1 = state_15353;
if(cljs.core.truth_(inst_15336)){
var statearr_15362_18283 = state_15353__$1;
(statearr_15362_18283[(1)] = (9));

} else {
var statearr_15363_18284 = state_15353__$1;
(statearr_15363_18284[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (3))){
var inst_15351 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15353__$1,inst_15351);
} else {
if((state_val_15354 === (12))){
var state_15353__$1 = state_15353;
var statearr_15364_18285 = state_15353__$1;
(statearr_15364_18285[(2)] = null);

(statearr_15364_18285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (2))){
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15353__$1,(4),ch);
} else {
if((state_val_15354 === (11))){
var inst_15330 = (state_15353[(7)]);
var inst_15340 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15353__$1,(8),inst_15340,inst_15330);
} else {
if((state_val_15354 === (9))){
var state_15353__$1 = state_15353;
var statearr_15365_18289 = state_15353__$1;
(statearr_15365_18289[(2)] = tc);

(statearr_15365_18289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (5))){
var inst_15333 = cljs.core.async.close_BANG_(tc);
var inst_15334 = cljs.core.async.close_BANG_(fc);
var state_15353__$1 = (function (){var statearr_15367 = state_15353;
(statearr_15367[(8)] = inst_15333);

return statearr_15367;
})();
var statearr_15368_18295 = state_15353__$1;
(statearr_15368_18295[(2)] = inst_15334);

(statearr_15368_18295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (14))){
var inst_15347 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
var statearr_15369_18298 = state_15353__$1;
(statearr_15369_18298[(2)] = inst_15347);

(statearr_15369_18298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (10))){
var state_15353__$1 = state_15353;
var statearr_15370_18299 = state_15353__$1;
(statearr_15370_18299[(2)] = fc);

(statearr_15370_18299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (8))){
var inst_15342 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
if(cljs.core.truth_(inst_15342)){
var statearr_15371_18302 = state_15353__$1;
(statearr_15371_18302[(1)] = (12));

} else {
var statearr_15372_18304 = state_15353__$1;
(statearr_15372_18304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_15377 = [null,null,null,null,null,null,null,null,null];
(statearr_15377[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_15377[(1)] = (1));

return statearr_15377;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_15353){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15353);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15379){var ex__14122__auto__ = e15379;
var statearr_15380_18310 = state_15353;
(statearr_15380_18310[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_15353[(4)]))){
var statearr_15381_18311 = state_15353;
(statearr_15381_18311[(1)] = cljs.core.first((state_15353[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18312 = state_15353;
state_15353 = G__18312;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_15353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_15353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_15383 = f__14451__auto__();
(statearr_15383[(6)] = c__14450__auto___18273);

return statearr_15383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_15411){
var state_val_15412 = (state_15411[(1)]);
if((state_val_15412 === (7))){
var inst_15405 = (state_15411[(2)]);
var state_15411__$1 = state_15411;
var statearr_15415_18317 = state_15411__$1;
(statearr_15415_18317[(2)] = inst_15405);

(statearr_15415_18317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (1))){
var inst_15386 = init;
var inst_15388 = inst_15386;
var state_15411__$1 = (function (){var statearr_15416 = state_15411;
(statearr_15416[(7)] = inst_15388);

return statearr_15416;
})();
var statearr_15417_18318 = state_15411__$1;
(statearr_15417_18318[(2)] = null);

(statearr_15417_18318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (4))){
var inst_15391 = (state_15411[(8)]);
var inst_15391__$1 = (state_15411[(2)]);
var inst_15392 = (inst_15391__$1 == null);
var state_15411__$1 = (function (){var statearr_15420 = state_15411;
(statearr_15420[(8)] = inst_15391__$1);

return statearr_15420;
})();
if(cljs.core.truth_(inst_15392)){
var statearr_15421_18319 = state_15411__$1;
(statearr_15421_18319[(1)] = (5));

} else {
var statearr_15422_18320 = state_15411__$1;
(statearr_15422_18320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (6))){
var inst_15388 = (state_15411[(7)]);
var inst_15395 = (state_15411[(9)]);
var inst_15391 = (state_15411[(8)]);
var inst_15395__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15388,inst_15391) : f.call(null, inst_15388,inst_15391));
var inst_15396 = cljs.core.reduced_QMARK_(inst_15395__$1);
var state_15411__$1 = (function (){var statearr_15426 = state_15411;
(statearr_15426[(9)] = inst_15395__$1);

return statearr_15426;
})();
if(inst_15396){
var statearr_15427_18324 = state_15411__$1;
(statearr_15427_18324[(1)] = (8));

} else {
var statearr_15428_18325 = state_15411__$1;
(statearr_15428_18325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (3))){
var inst_15407 = (state_15411[(2)]);
var state_15411__$1 = state_15411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15411__$1,inst_15407);
} else {
if((state_val_15412 === (2))){
var state_15411__$1 = state_15411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15411__$1,(4),ch);
} else {
if((state_val_15412 === (9))){
var inst_15395 = (state_15411[(9)]);
var inst_15388 = inst_15395;
var state_15411__$1 = (function (){var statearr_15435 = state_15411;
(statearr_15435[(7)] = inst_15388);

return statearr_15435;
})();
var statearr_15437_18326 = state_15411__$1;
(statearr_15437_18326[(2)] = null);

(statearr_15437_18326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (5))){
var inst_15388 = (state_15411[(7)]);
var state_15411__$1 = state_15411;
var statearr_15440_18327 = state_15411__$1;
(statearr_15440_18327[(2)] = inst_15388);

(statearr_15440_18327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (10))){
var inst_15403 = (state_15411[(2)]);
var state_15411__$1 = state_15411;
var statearr_15441_18328 = state_15411__$1;
(statearr_15441_18328[(2)] = inst_15403);

(statearr_15441_18328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (8))){
var inst_15395 = (state_15411[(9)]);
var inst_15398 = cljs.core.deref(inst_15395);
var state_15411__$1 = state_15411;
var statearr_15443_18333 = state_15411__$1;
(statearr_15443_18333[(2)] = inst_15398);

(statearr_15443_18333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14119__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14119__auto____0 = (function (){
var statearr_15451 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15451[(0)] = cljs$core$async$reduce_$_state_machine__14119__auto__);

(statearr_15451[(1)] = (1));

return statearr_15451;
});
var cljs$core$async$reduce_$_state_machine__14119__auto____1 = (function (state_15411){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15411);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15454){var ex__14122__auto__ = e15454;
var statearr_15456_18346 = state_15411;
(statearr_15456_18346[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_15411[(4)]))){
var statearr_15457_18347 = state_15411;
(statearr_15457_18347[(1)] = cljs.core.first((state_15411[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18348 = state_15411;
state_15411 = G__18348;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14119__auto__ = function(state_15411){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14119__auto____1.call(this,state_15411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14119__auto____0;
cljs$core$async$reduce_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14119__auto____1;
return cljs$core$async$reduce_$_state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_15459 = f__14451__auto__();
(statearr_15459[(6)] = c__14450__auto__);

return statearr_15459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));

return c__14450__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_15475){
var state_val_15476 = (state_15475[(1)]);
if((state_val_15476 === (1))){
var inst_15469 = cljs.core.async.reduce(f__$1,init,ch);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15475__$1,(2),inst_15469);
} else {
if((state_val_15476 === (2))){
var inst_15471 = (state_15475[(2)]);
var inst_15472 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15471) : f__$1.call(null, inst_15471));
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15475__$1,inst_15472);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14119__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14119__auto____0 = (function (){
var statearr_15478 = [null,null,null,null,null,null,null];
(statearr_15478[(0)] = cljs$core$async$transduce_$_state_machine__14119__auto__);

(statearr_15478[(1)] = (1));

return statearr_15478;
});
var cljs$core$async$transduce_$_state_machine__14119__auto____1 = (function (state_15475){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15475);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15480){var ex__14122__auto__ = e15480;
var statearr_15481_18354 = state_15475;
(statearr_15481_18354[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_15475[(4)]))){
var statearr_15482_18355 = state_15475;
(statearr_15482_18355[(1)] = cljs.core.first((state_15475[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18356 = state_15475;
state_15475 = G__18356;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14119__auto__ = function(state_15475){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14119__auto____1.call(this,state_15475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14119__auto____0;
cljs$core$async$transduce_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14119__auto____1;
return cljs$core$async$transduce_$_state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_15488 = f__14451__auto__();
(statearr_15488[(6)] = c__14450__auto__);

return statearr_15488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));

return c__14450__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15495 = arguments.length;
switch (G__15495) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_15531){
var state_val_15532 = (state_15531[(1)]);
if((state_val_15532 === (7))){
var inst_15511 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
var statearr_15543_18359 = state_15531__$1;
(statearr_15543_18359[(2)] = inst_15511);

(statearr_15543_18359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (1))){
var inst_15500 = cljs.core.seq(coll);
var inst_15501 = inst_15500;
var state_15531__$1 = (function (){var statearr_15545 = state_15531;
(statearr_15545[(7)] = inst_15501);

return statearr_15545;
})();
var statearr_15546_18367 = state_15531__$1;
(statearr_15546_18367[(2)] = null);

(statearr_15546_18367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (4))){
var inst_15501 = (state_15531[(7)]);
var inst_15509 = cljs.core.first(inst_15501);
var state_15531__$1 = state_15531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15531__$1,(7),ch,inst_15509);
} else {
if((state_val_15532 === (13))){
var inst_15525 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
var statearr_15550_18372 = state_15531__$1;
(statearr_15550_18372[(2)] = inst_15525);

(statearr_15550_18372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (6))){
var inst_15514 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
if(cljs.core.truth_(inst_15514)){
var statearr_15554_18373 = state_15531__$1;
(statearr_15554_18373[(1)] = (8));

} else {
var statearr_15555_18374 = state_15531__$1;
(statearr_15555_18374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (3))){
var inst_15529 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15531__$1,inst_15529);
} else {
if((state_val_15532 === (12))){
var state_15531__$1 = state_15531;
var statearr_15557_18375 = state_15531__$1;
(statearr_15557_18375[(2)] = null);

(statearr_15557_18375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (2))){
var inst_15501 = (state_15531[(7)]);
var state_15531__$1 = state_15531;
if(cljs.core.truth_(inst_15501)){
var statearr_15561_18379 = state_15531__$1;
(statearr_15561_18379[(1)] = (4));

} else {
var statearr_15562_18380 = state_15531__$1;
(statearr_15562_18380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (11))){
var inst_15522 = cljs.core.async.close_BANG_(ch);
var state_15531__$1 = state_15531;
var statearr_15565_18381 = state_15531__$1;
(statearr_15565_18381[(2)] = inst_15522);

(statearr_15565_18381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (9))){
var state_15531__$1 = state_15531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15569_18384 = state_15531__$1;
(statearr_15569_18384[(1)] = (11));

} else {
var statearr_15570_18385 = state_15531__$1;
(statearr_15570_18385[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (5))){
var inst_15501 = (state_15531[(7)]);
var state_15531__$1 = state_15531;
var statearr_15571_18386 = state_15531__$1;
(statearr_15571_18386[(2)] = inst_15501);

(statearr_15571_18386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (10))){
var inst_15527 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
var statearr_15573_18387 = state_15531__$1;
(statearr_15573_18387[(2)] = inst_15527);

(statearr_15573_18387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (8))){
var inst_15501 = (state_15531[(7)]);
var inst_15517 = cljs.core.next(inst_15501);
var inst_15501__$1 = inst_15517;
var state_15531__$1 = (function (){var statearr_15575 = state_15531;
(statearr_15575[(7)] = inst_15501__$1);

return statearr_15575;
})();
var statearr_15577_18391 = state_15531__$1;
(statearr_15577_18391[(2)] = null);

(statearr_15577_18391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_15578 = [null,null,null,null,null,null,null,null];
(statearr_15578[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_15578[(1)] = (1));

return statearr_15578;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_15531){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15531);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e15580){var ex__14122__auto__ = e15580;
var statearr_15581_18397 = state_15531;
(statearr_15581_18397[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_15531[(4)]))){
var statearr_15584_18398 = state_15531;
(statearr_15584_18398[(1)] = cljs.core.first((state_15531[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18403 = state_15531;
state_15531 = G__18403;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_15531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_15531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_15588 = f__14451__auto__();
(statearr_15588[(6)] = c__14450__auto__);

return statearr_15588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));

return c__14450__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15597 = arguments.length;
switch (G__15597) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18409 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18409(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18414 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18414(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18421 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18421(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18423 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18423(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15644 = (function (ch,cs,meta15645){
this.ch = ch;
this.cs = cs;
this.meta15645 = meta15645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15646,meta15645__$1){
var self__ = this;
var _15646__$1 = this;
return (new cljs.core.async.t_cljs$core$async15644(self__.ch,self__.cs,meta15645__$1));
}));

(cljs.core.async.t_cljs$core$async15644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15646){
var self__ = this;
var _15646__$1 = this;
return self__.meta15645;
}));

(cljs.core.async.t_cljs$core$async15644.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15644.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15644.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15644.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15644.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15645","meta15645",-705764398,null)], null);
}));

(cljs.core.async.t_cljs$core$async15644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15644");

(cljs.core.async.t_cljs$core$async15644.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15644.
 */
cljs.core.async.__GT_t_cljs$core$async15644 = (function cljs$core$async$__GT_t_cljs$core$async15644(ch,cs,meta15645){
return (new cljs.core.async.t_cljs$core$async15644(ch,cs,meta15645));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15644(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14450__auto___18442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_15822){
var state_val_15823 = (state_15822[(1)]);
if((state_val_15823 === (7))){
var inst_15808 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15836_18444 = state_15822__$1;
(statearr_15836_18444[(2)] = inst_15808);

(statearr_15836_18444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (20))){
var inst_15703 = (state_15822[(7)]);
var inst_15715 = cljs.core.first(inst_15703);
var inst_15716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15715,(0),null);
var inst_15717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15715,(1),null);
var state_15822__$1 = (function (){var statearr_15837 = state_15822;
(statearr_15837[(8)] = inst_15716);

return statearr_15837;
})();
if(cljs.core.truth_(inst_15717)){
var statearr_15838_18445 = state_15822__$1;
(statearr_15838_18445[(1)] = (22));

} else {
var statearr_15839_18446 = state_15822__$1;
(statearr_15839_18446[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (27))){
var inst_15749 = (state_15822[(9)]);
var inst_15757 = (state_15822[(10)]);
var inst_15751 = (state_15822[(11)]);
var inst_15670 = (state_15822[(12)]);
var inst_15757__$1 = cljs.core._nth(inst_15749,inst_15751);
var inst_15758 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15757__$1,inst_15670,done);
var state_15822__$1 = (function (){var statearr_15842 = state_15822;
(statearr_15842[(10)] = inst_15757__$1);

return statearr_15842;
})();
if(cljs.core.truth_(inst_15758)){
var statearr_15843_18458 = state_15822__$1;
(statearr_15843_18458[(1)] = (30));

} else {
var statearr_15844_18462 = state_15822__$1;
(statearr_15844_18462[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (1))){
var state_15822__$1 = state_15822;
var statearr_15847_18470 = state_15822__$1;
(statearr_15847_18470[(2)] = null);

(statearr_15847_18470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (24))){
var inst_15703 = (state_15822[(7)]);
var inst_15722 = (state_15822[(2)]);
var inst_15723 = cljs.core.next(inst_15703);
var inst_15679 = inst_15723;
var inst_15680 = null;
var inst_15681 = (0);
var inst_15682 = (0);
var state_15822__$1 = (function (){var statearr_15850 = state_15822;
(statearr_15850[(13)] = inst_15681);

(statearr_15850[(14)] = inst_15722);

(statearr_15850[(15)] = inst_15679);

(statearr_15850[(16)] = inst_15680);

(statearr_15850[(17)] = inst_15682);

return statearr_15850;
})();
var statearr_15851_18487 = state_15822__$1;
(statearr_15851_18487[(2)] = null);

(statearr_15851_18487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (39))){
var state_15822__$1 = state_15822;
var statearr_15878_18488 = state_15822__$1;
(statearr_15878_18488[(2)] = null);

(statearr_15878_18488[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (4))){
var inst_15670 = (state_15822[(12)]);
var inst_15670__$1 = (state_15822[(2)]);
var inst_15671 = (inst_15670__$1 == null);
var state_15822__$1 = (function (){var statearr_15879 = state_15822;
(statearr_15879[(12)] = inst_15670__$1);

return statearr_15879;
})();
if(cljs.core.truth_(inst_15671)){
var statearr_15880_18495 = state_15822__$1;
(statearr_15880_18495[(1)] = (5));

} else {
var statearr_15882_18496 = state_15822__$1;
(statearr_15882_18496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (15))){
var inst_15681 = (state_15822[(13)]);
var inst_15679 = (state_15822[(15)]);
var inst_15680 = (state_15822[(16)]);
var inst_15682 = (state_15822[(17)]);
var inst_15698 = (state_15822[(2)]);
var inst_15700 = (inst_15682 + (1));
var tmp15875 = inst_15681;
var tmp15876 = inst_15679;
var tmp15877 = inst_15680;
var inst_15679__$1 = tmp15876;
var inst_15680__$1 = tmp15877;
var inst_15681__$1 = tmp15875;
var inst_15682__$1 = inst_15700;
var state_15822__$1 = (function (){var statearr_15884 = state_15822;
(statearr_15884[(13)] = inst_15681__$1);

(statearr_15884[(15)] = inst_15679__$1);

(statearr_15884[(16)] = inst_15680__$1);

(statearr_15884[(17)] = inst_15682__$1);

(statearr_15884[(18)] = inst_15698);

return statearr_15884;
})();
var statearr_15887_18504 = state_15822__$1;
(statearr_15887_18504[(2)] = null);

(statearr_15887_18504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (21))){
var inst_15726 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15892_18508 = state_15822__$1;
(statearr_15892_18508[(2)] = inst_15726);

(statearr_15892_18508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (31))){
var inst_15757 = (state_15822[(10)]);
var inst_15761 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15757);
var state_15822__$1 = state_15822;
var statearr_15893_18510 = state_15822__$1;
(statearr_15893_18510[(2)] = inst_15761);

(statearr_15893_18510[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (32))){
var inst_15748 = (state_15822[(19)]);
var inst_15750 = (state_15822[(20)]);
var inst_15749 = (state_15822[(9)]);
var inst_15751 = (state_15822[(11)]);
var inst_15763 = (state_15822[(2)]);
var inst_15764 = (inst_15751 + (1));
var tmp15889 = inst_15748;
var tmp15890 = inst_15750;
var tmp15891 = inst_15749;
var inst_15748__$1 = tmp15889;
var inst_15749__$1 = tmp15891;
var inst_15750__$1 = tmp15890;
var inst_15751__$1 = inst_15764;
var state_15822__$1 = (function (){var statearr_15894 = state_15822;
(statearr_15894[(19)] = inst_15748__$1);

(statearr_15894[(20)] = inst_15750__$1);

(statearr_15894[(9)] = inst_15749__$1);

(statearr_15894[(11)] = inst_15751__$1);

(statearr_15894[(21)] = inst_15763);

return statearr_15894;
})();
var statearr_15895_18511 = state_15822__$1;
(statearr_15895_18511[(2)] = null);

(statearr_15895_18511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (40))){
var inst_15781 = (state_15822[(22)]);
var inst_15785 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15781);
var state_15822__$1 = state_15822;
var statearr_15897_18514 = state_15822__$1;
(statearr_15897_18514[(2)] = inst_15785);

(statearr_15897_18514[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (33))){
var inst_15768 = (state_15822[(23)]);
var inst_15771 = cljs.core.chunked_seq_QMARK_(inst_15768);
var state_15822__$1 = state_15822;
if(inst_15771){
var statearr_15898_18517 = state_15822__$1;
(statearr_15898_18517[(1)] = (36));

} else {
var statearr_15899_18518 = state_15822__$1;
(statearr_15899_18518[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (13))){
var inst_15692 = (state_15822[(24)]);
var inst_15695 = cljs.core.async.close_BANG_(inst_15692);
var state_15822__$1 = state_15822;
var statearr_15900_18519 = state_15822__$1;
(statearr_15900_18519[(2)] = inst_15695);

(statearr_15900_18519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (22))){
var inst_15716 = (state_15822[(8)]);
var inst_15719 = cljs.core.async.close_BANG_(inst_15716);
var state_15822__$1 = state_15822;
var statearr_15902_18520 = state_15822__$1;
(statearr_15902_18520[(2)] = inst_15719);

(statearr_15902_18520[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (36))){
var inst_15768 = (state_15822[(23)]);
var inst_15773 = cljs.core.chunk_first(inst_15768);
var inst_15775 = cljs.core.chunk_rest(inst_15768);
var inst_15777 = cljs.core.count(inst_15773);
var inst_15748 = inst_15775;
var inst_15749 = inst_15773;
var inst_15750 = inst_15777;
var inst_15751 = (0);
var state_15822__$1 = (function (){var statearr_15908 = state_15822;
(statearr_15908[(19)] = inst_15748);

(statearr_15908[(20)] = inst_15750);

(statearr_15908[(9)] = inst_15749);

(statearr_15908[(11)] = inst_15751);

return statearr_15908;
})();
var statearr_15909_18526 = state_15822__$1;
(statearr_15909_18526[(2)] = null);

(statearr_15909_18526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (41))){
var inst_15768 = (state_15822[(23)]);
var inst_15787 = (state_15822[(2)]);
var inst_15788 = cljs.core.next(inst_15768);
var inst_15748 = inst_15788;
var inst_15749 = null;
var inst_15750 = (0);
var inst_15751 = (0);
var state_15822__$1 = (function (){var statearr_15910 = state_15822;
(statearr_15910[(19)] = inst_15748);

(statearr_15910[(20)] = inst_15750);

(statearr_15910[(25)] = inst_15787);

(statearr_15910[(9)] = inst_15749);

(statearr_15910[(11)] = inst_15751);

return statearr_15910;
})();
var statearr_15911_18534 = state_15822__$1;
(statearr_15911_18534[(2)] = null);

(statearr_15911_18534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (43))){
var state_15822__$1 = state_15822;
var statearr_15912_18538 = state_15822__$1;
(statearr_15912_18538[(2)] = null);

(statearr_15912_18538[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (29))){
var inst_15796 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15913_18539 = state_15822__$1;
(statearr_15913_18539[(2)] = inst_15796);

(statearr_15913_18539[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (44))){
var inst_15805 = (state_15822[(2)]);
var state_15822__$1 = (function (){var statearr_15915 = state_15822;
(statearr_15915[(26)] = inst_15805);

return statearr_15915;
})();
var statearr_15916_18540 = state_15822__$1;
(statearr_15916_18540[(2)] = null);

(statearr_15916_18540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (6))){
var inst_15739 = (state_15822[(27)]);
var inst_15738 = cljs.core.deref(cs);
var inst_15739__$1 = cljs.core.keys(inst_15738);
var inst_15740 = cljs.core.count(inst_15739__$1);
var inst_15741 = cljs.core.reset_BANG_(dctr,inst_15740);
var inst_15746 = cljs.core.seq(inst_15739__$1);
var inst_15748 = inst_15746;
var inst_15749 = null;
var inst_15750 = (0);
var inst_15751 = (0);
var state_15822__$1 = (function (){var statearr_15919 = state_15822;
(statearr_15919[(19)] = inst_15748);

(statearr_15919[(27)] = inst_15739__$1);

(statearr_15919[(20)] = inst_15750);

(statearr_15919[(9)] = inst_15749);

(statearr_15919[(28)] = inst_15741);

(statearr_15919[(11)] = inst_15751);

return statearr_15919;
})();
var statearr_15920_18552 = state_15822__$1;
(statearr_15920_18552[(2)] = null);

(statearr_15920_18552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (28))){
var inst_15748 = (state_15822[(19)]);
var inst_15768 = (state_15822[(23)]);
var inst_15768__$1 = cljs.core.seq(inst_15748);
var state_15822__$1 = (function (){var statearr_15924 = state_15822;
(statearr_15924[(23)] = inst_15768__$1);

return statearr_15924;
})();
if(inst_15768__$1){
var statearr_15925_18555 = state_15822__$1;
(statearr_15925_18555[(1)] = (33));

} else {
var statearr_15926_18556 = state_15822__$1;
(statearr_15926_18556[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (25))){
var inst_15750 = (state_15822[(20)]);
var inst_15751 = (state_15822[(11)]);
var inst_15753 = (inst_15751 < inst_15750);
var inst_15754 = inst_15753;
var state_15822__$1 = state_15822;
if(cljs.core.truth_(inst_15754)){
var statearr_15927_18563 = state_15822__$1;
(statearr_15927_18563[(1)] = (27));

} else {
var statearr_15928_18564 = state_15822__$1;
(statearr_15928_18564[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (34))){
var state_15822__$1 = state_15822;
var statearr_15929_18565 = state_15822__$1;
(statearr_15929_18565[(2)] = null);

(statearr_15929_18565[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (17))){
var state_15822__$1 = state_15822;
var statearr_15930_18566 = state_15822__$1;
(statearr_15930_18566[(2)] = null);

(statearr_15930_18566[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (3))){
var inst_15810 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15822__$1,inst_15810);
} else {
if((state_val_15823 === (12))){
var inst_15733 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15936_18567 = state_15822__$1;
(statearr_15936_18567[(2)] = inst_15733);

(statearr_15936_18567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (2))){
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15822__$1,(4),ch);
} else {
if((state_val_15823 === (23))){
var state_15822__$1 = state_15822;
var statearr_15943_18569 = state_15822__$1;
(statearr_15943_18569[(2)] = null);

(statearr_15943_18569[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (35))){
var inst_15794 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15945_18571 = state_15822__$1;
(statearr_15945_18571[(2)] = inst_15794);

(statearr_15945_18571[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (19))){
var inst_15703 = (state_15822[(7)]);
var inst_15707 = cljs.core.chunk_first(inst_15703);
var inst_15708 = cljs.core.chunk_rest(inst_15703);
var inst_15709 = cljs.core.count(inst_15707);
var inst_15679 = inst_15708;
var inst_15680 = inst_15707;
var inst_15681 = inst_15709;
var inst_15682 = (0);
var state_15822__$1 = (function (){var statearr_15947 = state_15822;
(statearr_15947[(13)] = inst_15681);

(statearr_15947[(15)] = inst_15679);

(statearr_15947[(16)] = inst_15680);

(statearr_15947[(17)] = inst_15682);

return statearr_15947;
})();
var statearr_15948_18574 = state_15822__$1;
(statearr_15948_18574[(2)] = null);

(statearr_15948_18574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (11))){
var inst_15679 = (state_15822[(15)]);
var inst_15703 = (state_15822[(7)]);
var inst_15703__$1 = cljs.core.seq(inst_15679);
var state_15822__$1 = (function (){var statearr_15954 = state_15822;
(statearr_15954[(7)] = inst_15703__$1);

return statearr_15954;
})();
if(inst_15703__$1){
var statearr_15955_18577 = state_15822__$1;
(statearr_15955_18577[(1)] = (16));

} else {
var statearr_15958_18578 = state_15822__$1;
(statearr_15958_18578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (9))){
var inst_15735 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15964_18579 = state_15822__$1;
(statearr_15964_18579[(2)] = inst_15735);

(statearr_15964_18579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (5))){
var inst_15677 = cljs.core.deref(cs);
var inst_15678 = cljs.core.seq(inst_15677);
var inst_15679 = inst_15678;
var inst_15680 = null;
var inst_15681 = (0);
var inst_15682 = (0);
var state_15822__$1 = (function (){var statearr_15967 = state_15822;
(statearr_15967[(13)] = inst_15681);

(statearr_15967[(15)] = inst_15679);

(statearr_15967[(16)] = inst_15680);

(statearr_15967[(17)] = inst_15682);

return statearr_15967;
})();
var statearr_15970_18580 = state_15822__$1;
(statearr_15970_18580[(2)] = null);

(statearr_15970_18580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (14))){
var state_15822__$1 = state_15822;
var statearr_15972_18581 = state_15822__$1;
(statearr_15972_18581[(2)] = null);

(statearr_15972_18581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (45))){
var inst_15802 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15973_18582 = state_15822__$1;
(statearr_15973_18582[(2)] = inst_15802);

(statearr_15973_18582[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (26))){
var inst_15739 = (state_15822[(27)]);
var inst_15798 = (state_15822[(2)]);
var inst_15799 = cljs.core.seq(inst_15739);
var state_15822__$1 = (function (){var statearr_15974 = state_15822;
(statearr_15974[(29)] = inst_15798);

return statearr_15974;
})();
if(inst_15799){
var statearr_15975_18584 = state_15822__$1;
(statearr_15975_18584[(1)] = (42));

} else {
var statearr_15976_18585 = state_15822__$1;
(statearr_15976_18585[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (16))){
var inst_15703 = (state_15822[(7)]);
var inst_15705 = cljs.core.chunked_seq_QMARK_(inst_15703);
var state_15822__$1 = state_15822;
if(inst_15705){
var statearr_15977_18586 = state_15822__$1;
(statearr_15977_18586[(1)] = (19));

} else {
var statearr_15978_18591 = state_15822__$1;
(statearr_15978_18591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (38))){
var inst_15791 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15979_18592 = state_15822__$1;
(statearr_15979_18592[(2)] = inst_15791);

(statearr_15979_18592[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (30))){
var state_15822__$1 = state_15822;
var statearr_15980_18593 = state_15822__$1;
(statearr_15980_18593[(2)] = null);

(statearr_15980_18593[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (10))){
var inst_15680 = (state_15822[(16)]);
var inst_15682 = (state_15822[(17)]);
var inst_15691 = cljs.core._nth(inst_15680,inst_15682);
var inst_15692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15691,(0),null);
var inst_15693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15691,(1),null);
var state_15822__$1 = (function (){var statearr_15982 = state_15822;
(statearr_15982[(24)] = inst_15692);

return statearr_15982;
})();
if(cljs.core.truth_(inst_15693)){
var statearr_15984_18602 = state_15822__$1;
(statearr_15984_18602[(1)] = (13));

} else {
var statearr_15986_18603 = state_15822__$1;
(statearr_15986_18603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (18))){
var inst_15730 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15987_18604 = state_15822__$1;
(statearr_15987_18604[(2)] = inst_15730);

(statearr_15987_18604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (42))){
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15822__$1,(45),dchan);
} else {
if((state_val_15823 === (37))){
var inst_15781 = (state_15822[(22)]);
var inst_15768 = (state_15822[(23)]);
var inst_15670 = (state_15822[(12)]);
var inst_15781__$1 = cljs.core.first(inst_15768);
var inst_15782 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15781__$1,inst_15670,done);
var state_15822__$1 = (function (){var statearr_15988 = state_15822;
(statearr_15988[(22)] = inst_15781__$1);

return statearr_15988;
})();
if(cljs.core.truth_(inst_15782)){
var statearr_15990_18606 = state_15822__$1;
(statearr_15990_18606[(1)] = (39));

} else {
var statearr_15991_18610 = state_15822__$1;
(statearr_15991_18610[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (8))){
var inst_15681 = (state_15822[(13)]);
var inst_15682 = (state_15822[(17)]);
var inst_15684 = (inst_15682 < inst_15681);
var inst_15685 = inst_15684;
var state_15822__$1 = state_15822;
if(cljs.core.truth_(inst_15685)){
var statearr_15992_18611 = state_15822__$1;
(statearr_15992_18611[(1)] = (10));

} else {
var statearr_15993_18618 = state_15822__$1;
(statearr_15993_18618[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14119__auto__ = null;
var cljs$core$async$mult_$_state_machine__14119__auto____0 = (function (){
var statearr_15999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15999[(0)] = cljs$core$async$mult_$_state_machine__14119__auto__);

(statearr_15999[(1)] = (1));

return statearr_15999;
});
var cljs$core$async$mult_$_state_machine__14119__auto____1 = (function (state_15822){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_15822);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16001){var ex__14122__auto__ = e16001;
var statearr_16002_18622 = state_15822;
(statearr_16002_18622[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_15822[(4)]))){
var statearr_16003_18623 = state_15822;
(statearr_16003_18623[(1)] = cljs.core.first((state_15822[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18624 = state_15822;
state_15822 = G__18624;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14119__auto__ = function(state_15822){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14119__auto____1.call(this,state_15822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14119__auto____0;
cljs$core$async$mult_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14119__auto____1;
return cljs$core$async$mult_$_state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_16004 = f__14451__auto__();
(statearr_16004[(6)] = c__14450__auto___18442);

return statearr_16004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16006 = arguments.length;
switch (G__16006) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18629 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18629(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18630 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18630(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18635 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18635(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18642 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18642(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18651 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18651(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18666 = arguments.length;
var i__5727__auto___18667 = (0);
while(true){
if((i__5727__auto___18667 < len__5726__auto___18666)){
args__5732__auto__.push((arguments[i__5727__auto___18667]));

var G__18668 = (i__5727__auto___18667 + (1));
i__5727__auto___18667 = G__18668;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16058){
var map__16059 = p__16058;
var map__16059__$1 = cljs.core.__destructure_map(map__16059);
var opts = map__16059__$1;
var statearr_16061_18677 = state;
(statearr_16061_18677[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16062_18678 = state;
(statearr_16062_18678[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16067_18684 = state;
(statearr_16067_18684[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16051){
var G__16052 = cljs.core.first(seq16051);
var seq16051__$1 = cljs.core.next(seq16051);
var G__16053 = cljs.core.first(seq16051__$1);
var seq16051__$2 = cljs.core.next(seq16051__$1);
var G__16054 = cljs.core.first(seq16051__$2);
var seq16051__$3 = cljs.core.next(seq16051__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16052,G__16053,G__16054,seq16051__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16089 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16090){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16090 = meta16090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16091,meta16090__$1){
var self__ = this;
var _16091__$1 = this;
return (new cljs.core.async.t_cljs$core$async16089(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16090__$1));
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16091){
var self__ = this;
var _16091__$1 = this;
return self__.meta16090;
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16090","meta16090",1490069935,null)], null);
}));

(cljs.core.async.t_cljs$core$async16089.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16089");

(cljs.core.async.t_cljs$core$async16089.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16089");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16089.
 */
cljs.core.async.__GT_t_cljs$core$async16089 = (function cljs$core$async$__GT_t_cljs$core$async16089(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16090){
return (new cljs.core.async.t_cljs$core$async16089(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16090));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16089(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14450__auto___18731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_16204){
var state_val_16205 = (state_16204[(1)]);
if((state_val_16205 === (7))){
var inst_16155 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
if(cljs.core.truth_(inst_16155)){
var statearr_16209_18732 = state_16204__$1;
(statearr_16209_18732[(1)] = (8));

} else {
var statearr_16211_18733 = state_16204__$1;
(statearr_16211_18733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (20))){
var inst_16146 = (state_16204[(7)]);
var state_16204__$1 = state_16204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16204__$1,(23),out,inst_16146);
} else {
if((state_val_16205 === (1))){
var inst_16128 = calc_state();
var inst_16129 = cljs.core.__destructure_map(inst_16128);
var inst_16130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16129,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16129,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16129,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16134 = inst_16128;
var state_16204__$1 = (function (){var statearr_16215 = state_16204;
(statearr_16215[(8)] = inst_16134);

(statearr_16215[(9)] = inst_16133);

(statearr_16215[(10)] = inst_16130);

(statearr_16215[(11)] = inst_16132);

return statearr_16215;
})();
var statearr_16216_18740 = state_16204__$1;
(statearr_16216_18740[(2)] = null);

(statearr_16216_18740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (24))){
var inst_16137 = (state_16204[(12)]);
var inst_16134 = inst_16137;
var state_16204__$1 = (function (){var statearr_16220 = state_16204;
(statearr_16220[(8)] = inst_16134);

return statearr_16220;
})();
var statearr_16223_18749 = state_16204__$1;
(statearr_16223_18749[(2)] = null);

(statearr_16223_18749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (4))){
var inst_16146 = (state_16204[(7)]);
var inst_16149 = (state_16204[(13)]);
var inst_16145 = (state_16204[(2)]);
var inst_16146__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16145,(0),null);
var inst_16147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16145,(1),null);
var inst_16149__$1 = (inst_16146__$1 == null);
var state_16204__$1 = (function (){var statearr_16231 = state_16204;
(statearr_16231[(7)] = inst_16146__$1);

(statearr_16231[(13)] = inst_16149__$1);

(statearr_16231[(14)] = inst_16147);

return statearr_16231;
})();
if(cljs.core.truth_(inst_16149__$1)){
var statearr_16232_18757 = state_16204__$1;
(statearr_16232_18757[(1)] = (5));

} else {
var statearr_16233_18758 = state_16204__$1;
(statearr_16233_18758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (15))){
var inst_16138 = (state_16204[(15)]);
var inst_16175 = (state_16204[(16)]);
var inst_16175__$1 = cljs.core.empty_QMARK_(inst_16138);
var state_16204__$1 = (function (){var statearr_16235 = state_16204;
(statearr_16235[(16)] = inst_16175__$1);

return statearr_16235;
})();
if(inst_16175__$1){
var statearr_16236_18762 = state_16204__$1;
(statearr_16236_18762[(1)] = (17));

} else {
var statearr_16238_18764 = state_16204__$1;
(statearr_16238_18764[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (21))){
var inst_16137 = (state_16204[(12)]);
var inst_16134 = inst_16137;
var state_16204__$1 = (function (){var statearr_16241 = state_16204;
(statearr_16241[(8)] = inst_16134);

return statearr_16241;
})();
var statearr_16242_18765 = state_16204__$1;
(statearr_16242_18765[(2)] = null);

(statearr_16242_18765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (13))){
var inst_16163 = (state_16204[(2)]);
var inst_16164 = calc_state();
var inst_16134 = inst_16164;
var state_16204__$1 = (function (){var statearr_16246 = state_16204;
(statearr_16246[(8)] = inst_16134);

(statearr_16246[(17)] = inst_16163);

return statearr_16246;
})();
var statearr_16249_18766 = state_16204__$1;
(statearr_16249_18766[(2)] = null);

(statearr_16249_18766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (22))){
var inst_16195 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16250_18780 = state_16204__$1;
(statearr_16250_18780[(2)] = inst_16195);

(statearr_16250_18780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (6))){
var inst_16147 = (state_16204[(14)]);
var inst_16153 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16147,change);
var state_16204__$1 = state_16204;
var statearr_16254_18781 = state_16204__$1;
(statearr_16254_18781[(2)] = inst_16153);

(statearr_16254_18781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (25))){
var state_16204__$1 = state_16204;
var statearr_16255_18787 = state_16204__$1;
(statearr_16255_18787[(2)] = null);

(statearr_16255_18787[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (17))){
var inst_16139 = (state_16204[(18)]);
var inst_16147 = (state_16204[(14)]);
var inst_16177 = (inst_16139.cljs$core$IFn$_invoke$arity$1 ? inst_16139.cljs$core$IFn$_invoke$arity$1(inst_16147) : inst_16139.call(null, inst_16147));
var inst_16178 = cljs.core.not(inst_16177);
var state_16204__$1 = state_16204;
var statearr_16256_18789 = state_16204__$1;
(statearr_16256_18789[(2)] = inst_16178);

(statearr_16256_18789[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (3))){
var inst_16200 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16204__$1,inst_16200);
} else {
if((state_val_16205 === (12))){
var state_16204__$1 = state_16204;
var statearr_16262_18791 = state_16204__$1;
(statearr_16262_18791[(2)] = null);

(statearr_16262_18791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (2))){
var inst_16134 = (state_16204[(8)]);
var inst_16137 = (state_16204[(12)]);
var inst_16137__$1 = cljs.core.__destructure_map(inst_16134);
var inst_16138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16137__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16137__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16137__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16204__$1 = (function (){var statearr_16269 = state_16204;
(statearr_16269[(15)] = inst_16138);

(statearr_16269[(18)] = inst_16139);

(statearr_16269[(12)] = inst_16137__$1);

return statearr_16269;
})();
return cljs.core.async.ioc_alts_BANG_(state_16204__$1,(4),inst_16140);
} else {
if((state_val_16205 === (23))){
var inst_16186 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
if(cljs.core.truth_(inst_16186)){
var statearr_16271_18795 = state_16204__$1;
(statearr_16271_18795[(1)] = (24));

} else {
var statearr_16273_18796 = state_16204__$1;
(statearr_16273_18796[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (19))){
var inst_16181 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16276_18797 = state_16204__$1;
(statearr_16276_18797[(2)] = inst_16181);

(statearr_16276_18797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (11))){
var inst_16147 = (state_16204[(14)]);
var inst_16160 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16147);
var state_16204__$1 = state_16204;
var statearr_16277_18798 = state_16204__$1;
(statearr_16277_18798[(2)] = inst_16160);

(statearr_16277_18798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (9))){
var inst_16138 = (state_16204[(15)]);
var inst_16169 = (state_16204[(19)]);
var inst_16147 = (state_16204[(14)]);
var inst_16169__$1 = (inst_16138.cljs$core$IFn$_invoke$arity$1 ? inst_16138.cljs$core$IFn$_invoke$arity$1(inst_16147) : inst_16138.call(null, inst_16147));
var state_16204__$1 = (function (){var statearr_16283 = state_16204;
(statearr_16283[(19)] = inst_16169__$1);

return statearr_16283;
})();
if(cljs.core.truth_(inst_16169__$1)){
var statearr_16284_18804 = state_16204__$1;
(statearr_16284_18804[(1)] = (14));

} else {
var statearr_16285_18805 = state_16204__$1;
(statearr_16285_18805[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (5))){
var inst_16149 = (state_16204[(13)]);
var state_16204__$1 = state_16204;
var statearr_16288_18816 = state_16204__$1;
(statearr_16288_18816[(2)] = inst_16149);

(statearr_16288_18816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (14))){
var inst_16169 = (state_16204[(19)]);
var state_16204__$1 = state_16204;
var statearr_16291_18820 = state_16204__$1;
(statearr_16291_18820[(2)] = inst_16169);

(statearr_16291_18820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (26))){
var inst_16191 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16293_18822 = state_16204__$1;
(statearr_16293_18822[(2)] = inst_16191);

(statearr_16293_18822[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (16))){
var inst_16183 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
if(cljs.core.truth_(inst_16183)){
var statearr_16294_18826 = state_16204__$1;
(statearr_16294_18826[(1)] = (20));

} else {
var statearr_16295_18827 = state_16204__$1;
(statearr_16295_18827[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (10))){
var inst_16197 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16297_18828 = state_16204__$1;
(statearr_16297_18828[(2)] = inst_16197);

(statearr_16297_18828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (18))){
var inst_16175 = (state_16204[(16)]);
var state_16204__$1 = state_16204;
var statearr_16300_18836 = state_16204__$1;
(statearr_16300_18836[(2)] = inst_16175);

(statearr_16300_18836[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (8))){
var inst_16146 = (state_16204[(7)]);
var inst_16158 = (inst_16146 == null);
var state_16204__$1 = state_16204;
if(cljs.core.truth_(inst_16158)){
var statearr_16304_18838 = state_16204__$1;
(statearr_16304_18838[(1)] = (11));

} else {
var statearr_16305_18840 = state_16204__$1;
(statearr_16305_18840[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14119__auto__ = null;
var cljs$core$async$mix_$_state_machine__14119__auto____0 = (function (){
var statearr_16307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16307[(0)] = cljs$core$async$mix_$_state_machine__14119__auto__);

(statearr_16307[(1)] = (1));

return statearr_16307;
});
var cljs$core$async$mix_$_state_machine__14119__auto____1 = (function (state_16204){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16204);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16312){var ex__14122__auto__ = e16312;
var statearr_16313_18847 = state_16204;
(statearr_16313_18847[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_16204[(4)]))){
var statearr_16315_18852 = state_16204;
(statearr_16315_18852[(1)] = cljs.core.first((state_16204[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18862 = state_16204;
state_16204 = G__18862;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14119__auto__ = function(state_16204){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14119__auto____1.call(this,state_16204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14119__auto____0;
cljs$core$async$mix_$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14119__auto____1;
return cljs$core$async$mix_$_state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_16327 = f__14451__auto__();
(statearr_16327[(6)] = c__14450__auto___18731);

return statearr_16327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18885 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18885(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18904 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18904(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18918 = (function() {
var G__18919 = null;
var G__18919__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18919__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18919 = function(p,v){
switch(arguments.length){
case 1:
return G__18919__1.call(this,p);
case 2:
return G__18919__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18919.cljs$core$IFn$_invoke$arity$1 = G__18919__1;
G__18919.cljs$core$IFn$_invoke$arity$2 = G__18919__2;
return G__18919;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16392 = arguments.length;
switch (G__16392) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18918(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18918(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16428 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16429){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16429 = meta16429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16430,meta16429__$1){
var self__ = this;
var _16430__$1 = this;
return (new cljs.core.async.t_cljs$core$async16428(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16429__$1));
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16430){
var self__ = this;
var _16430__$1 = this;
return self__.meta16429;
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16429","meta16429",-823453937,null)], null);
}));

(cljs.core.async.t_cljs$core$async16428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16428");

(cljs.core.async.t_cljs$core$async16428.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16428.
 */
cljs.core.async.__GT_t_cljs$core$async16428 = (function cljs$core$async$__GT_t_cljs$core$async16428(ch,topic_fn,buf_fn,mults,ensure_mult,meta16429){
return (new cljs.core.async.t_cljs$core$async16428(ch,topic_fn,buf_fn,mults,ensure_mult,meta16429));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16416 = arguments.length;
switch (G__16416) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16411_SHARP_){
if(cljs.core.truth_((p1__16411_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16411_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16411_SHARP_.call(null, topic)))){
return p1__16411_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16411_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16428(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14450__auto___19025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_16545){
var state_val_16546 = (state_16545[(1)]);
if((state_val_16546 === (7))){
var inst_16539 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16547_19031 = state_16545__$1;
(statearr_16547_19031[(2)] = inst_16539);

(statearr_16547_19031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (20))){
var state_16545__$1 = state_16545;
var statearr_16549_19033 = state_16545__$1;
(statearr_16549_19033[(2)] = null);

(statearr_16549_19033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (1))){
var state_16545__$1 = state_16545;
var statearr_16551_19039 = state_16545__$1;
(statearr_16551_19039[(2)] = null);

(statearr_16551_19039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (24))){
var inst_16518 = (state_16545[(7)]);
var inst_16528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16518);
var state_16545__$1 = state_16545;
var statearr_16552_19041 = state_16545__$1;
(statearr_16552_19041[(2)] = inst_16528);

(statearr_16552_19041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (4))){
var inst_16460 = (state_16545[(8)]);
var inst_16460__$1 = (state_16545[(2)]);
var inst_16461 = (inst_16460__$1 == null);
var state_16545__$1 = (function (){var statearr_16553 = state_16545;
(statearr_16553[(8)] = inst_16460__$1);

return statearr_16553;
})();
if(cljs.core.truth_(inst_16461)){
var statearr_16554_19045 = state_16545__$1;
(statearr_16554_19045[(1)] = (5));

} else {
var statearr_16555_19046 = state_16545__$1;
(statearr_16555_19046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (15))){
var inst_16512 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16557_19051 = state_16545__$1;
(statearr_16557_19051[(2)] = inst_16512);

(statearr_16557_19051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (21))){
var inst_16533 = (state_16545[(2)]);
var state_16545__$1 = (function (){var statearr_16558 = state_16545;
(statearr_16558[(9)] = inst_16533);

return statearr_16558;
})();
var statearr_16560_19054 = state_16545__$1;
(statearr_16560_19054[(2)] = null);

(statearr_16560_19054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (13))){
var inst_16488 = (state_16545[(10)]);
var inst_16493 = cljs.core.chunked_seq_QMARK_(inst_16488);
var state_16545__$1 = state_16545;
if(inst_16493){
var statearr_16564_19057 = state_16545__$1;
(statearr_16564_19057[(1)] = (16));

} else {
var statearr_16566_19058 = state_16545__$1;
(statearr_16566_19058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (22))){
var inst_16525 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
if(cljs.core.truth_(inst_16525)){
var statearr_16568_19065 = state_16545__$1;
(statearr_16568_19065[(1)] = (23));

} else {
var statearr_16569_19067 = state_16545__$1;
(statearr_16569_19067[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (6))){
var inst_16460 = (state_16545[(8)]);
var inst_16518 = (state_16545[(7)]);
var inst_16520 = (state_16545[(11)]);
var inst_16518__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16460) : topic_fn.call(null, inst_16460));
var inst_16519 = cljs.core.deref(mults);
var inst_16520__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16519,inst_16518__$1);
var state_16545__$1 = (function (){var statearr_16570 = state_16545;
(statearr_16570[(7)] = inst_16518__$1);

(statearr_16570[(11)] = inst_16520__$1);

return statearr_16570;
})();
if(cljs.core.truth_(inst_16520__$1)){
var statearr_16572_19069 = state_16545__$1;
(statearr_16572_19069[(1)] = (19));

} else {
var statearr_16573_19070 = state_16545__$1;
(statearr_16573_19070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (25))){
var inst_16530 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16574_19073 = state_16545__$1;
(statearr_16574_19073[(2)] = inst_16530);

(statearr_16574_19073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (17))){
var inst_16488 = (state_16545[(10)]);
var inst_16503 = cljs.core.first(inst_16488);
var inst_16504 = cljs.core.async.muxch_STAR_(inst_16503);
var inst_16505 = cljs.core.async.close_BANG_(inst_16504);
var inst_16506 = cljs.core.next(inst_16488);
var inst_16470 = inst_16506;
var inst_16471 = null;
var inst_16472 = (0);
var inst_16473 = (0);
var state_16545__$1 = (function (){var statearr_16576 = state_16545;
(statearr_16576[(12)] = inst_16471);

(statearr_16576[(13)] = inst_16470);

(statearr_16576[(14)] = inst_16473);

(statearr_16576[(15)] = inst_16472);

(statearr_16576[(16)] = inst_16505);

return statearr_16576;
})();
var statearr_16577_19077 = state_16545__$1;
(statearr_16577_19077[(2)] = null);

(statearr_16577_19077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (3))){
var inst_16541 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16545__$1,inst_16541);
} else {
if((state_val_16546 === (12))){
var inst_16514 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16581_19080 = state_16545__$1;
(statearr_16581_19080[(2)] = inst_16514);

(statearr_16581_19080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (2))){
var state_16545__$1 = state_16545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16545__$1,(4),ch);
} else {
if((state_val_16546 === (23))){
var state_16545__$1 = state_16545;
var statearr_16585_19084 = state_16545__$1;
(statearr_16585_19084[(2)] = null);

(statearr_16585_19084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (19))){
var inst_16460 = (state_16545[(8)]);
var inst_16520 = (state_16545[(11)]);
var inst_16523 = cljs.core.async.muxch_STAR_(inst_16520);
var state_16545__$1 = state_16545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16545__$1,(22),inst_16523,inst_16460);
} else {
if((state_val_16546 === (11))){
var inst_16488 = (state_16545[(10)]);
var inst_16470 = (state_16545[(13)]);
var inst_16488__$1 = cljs.core.seq(inst_16470);
var state_16545__$1 = (function (){var statearr_16588 = state_16545;
(statearr_16588[(10)] = inst_16488__$1);

return statearr_16588;
})();
if(inst_16488__$1){
var statearr_16590_19091 = state_16545__$1;
(statearr_16590_19091[(1)] = (13));

} else {
var statearr_16591_19092 = state_16545__$1;
(statearr_16591_19092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (9))){
var inst_16516 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16592_19098 = state_16545__$1;
(statearr_16592_19098[(2)] = inst_16516);

(statearr_16592_19098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (5))){
var inst_16467 = cljs.core.deref(mults);
var inst_16468 = cljs.core.vals(inst_16467);
var inst_16469 = cljs.core.seq(inst_16468);
var inst_16470 = inst_16469;
var inst_16471 = null;
var inst_16472 = (0);
var inst_16473 = (0);
var state_16545__$1 = (function (){var statearr_16593 = state_16545;
(statearr_16593[(12)] = inst_16471);

(statearr_16593[(13)] = inst_16470);

(statearr_16593[(14)] = inst_16473);

(statearr_16593[(15)] = inst_16472);

return statearr_16593;
})();
var statearr_16594_19110 = state_16545__$1;
(statearr_16594_19110[(2)] = null);

(statearr_16594_19110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (14))){
var state_16545__$1 = state_16545;
var statearr_16598_19111 = state_16545__$1;
(statearr_16598_19111[(2)] = null);

(statearr_16598_19111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (16))){
var inst_16488 = (state_16545[(10)]);
var inst_16495 = cljs.core.chunk_first(inst_16488);
var inst_16497 = cljs.core.chunk_rest(inst_16488);
var inst_16499 = cljs.core.count(inst_16495);
var inst_16470 = inst_16497;
var inst_16471 = inst_16495;
var inst_16472 = inst_16499;
var inst_16473 = (0);
var state_16545__$1 = (function (){var statearr_16600 = state_16545;
(statearr_16600[(12)] = inst_16471);

(statearr_16600[(13)] = inst_16470);

(statearr_16600[(14)] = inst_16473);

(statearr_16600[(15)] = inst_16472);

return statearr_16600;
})();
var statearr_16601_19119 = state_16545__$1;
(statearr_16601_19119[(2)] = null);

(statearr_16601_19119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (10))){
var inst_16471 = (state_16545[(12)]);
var inst_16470 = (state_16545[(13)]);
var inst_16473 = (state_16545[(14)]);
var inst_16472 = (state_16545[(15)]);
var inst_16478 = cljs.core._nth(inst_16471,inst_16473);
var inst_16479 = cljs.core.async.muxch_STAR_(inst_16478);
var inst_16480 = cljs.core.async.close_BANG_(inst_16479);
var inst_16481 = (inst_16473 + (1));
var tmp16595 = inst_16471;
var tmp16596 = inst_16470;
var tmp16597 = inst_16472;
var inst_16470__$1 = tmp16596;
var inst_16471__$1 = tmp16595;
var inst_16472__$1 = tmp16597;
var inst_16473__$1 = inst_16481;
var state_16545__$1 = (function (){var statearr_16604 = state_16545;
(statearr_16604[(12)] = inst_16471__$1);

(statearr_16604[(13)] = inst_16470__$1);

(statearr_16604[(17)] = inst_16480);

(statearr_16604[(14)] = inst_16473__$1);

(statearr_16604[(15)] = inst_16472__$1);

return statearr_16604;
})();
var statearr_16606_19128 = state_16545__$1;
(statearr_16606_19128[(2)] = null);

(statearr_16606_19128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (18))){
var inst_16509 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16608_19130 = state_16545__$1;
(statearr_16608_19130[(2)] = inst_16509);

(statearr_16608_19130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (8))){
var inst_16473 = (state_16545[(14)]);
var inst_16472 = (state_16545[(15)]);
var inst_16475 = (inst_16473 < inst_16472);
var inst_16476 = inst_16475;
var state_16545__$1 = state_16545;
if(cljs.core.truth_(inst_16476)){
var statearr_16610_19133 = state_16545__$1;
(statearr_16610_19133[(1)] = (10));

} else {
var statearr_16611_19134 = state_16545__$1;
(statearr_16611_19134[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16612[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16612[(1)] = (1));

return statearr_16612;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16545){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16545);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16616){var ex__14122__auto__ = e16616;
var statearr_16617_19141 = state_16545;
(statearr_16617_19141[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_16545[(4)]))){
var statearr_16618_19142 = state_16545;
(statearr_16618_19142[(1)] = cljs.core.first((state_16545[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19146 = state_16545;
state_16545 = G__19146;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_16668 = f__14451__auto__();
(statearr_16668[(6)] = c__14450__auto___19025);

return statearr_16668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16679 = arguments.length;
switch (G__16679) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16712 = arguments.length;
switch (G__16712) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16725 = arguments.length;
switch (G__16725) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14450__auto___19174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_16774){
var state_val_16775 = (state_16774[(1)]);
if((state_val_16775 === (7))){
var state_16774__$1 = state_16774;
var statearr_16776_19180 = state_16774__$1;
(statearr_16776_19180[(2)] = null);

(statearr_16776_19180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (1))){
var state_16774__$1 = state_16774;
var statearr_16777_19183 = state_16774__$1;
(statearr_16777_19183[(2)] = null);

(statearr_16777_19183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (4))){
var inst_16733 = (state_16774[(7)]);
var inst_16732 = (state_16774[(8)]);
var inst_16735 = (inst_16733 < inst_16732);
var state_16774__$1 = state_16774;
if(cljs.core.truth_(inst_16735)){
var statearr_16779_19187 = state_16774__$1;
(statearr_16779_19187[(1)] = (6));

} else {
var statearr_16780_19192 = state_16774__$1;
(statearr_16780_19192[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (15))){
var inst_16759 = (state_16774[(9)]);
var inst_16765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16759);
var state_16774__$1 = state_16774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16774__$1,(17),out,inst_16765);
} else {
if((state_val_16775 === (13))){
var inst_16759 = (state_16774[(9)]);
var inst_16759__$1 = (state_16774[(2)]);
var inst_16760 = cljs.core.some(cljs.core.nil_QMARK_,inst_16759__$1);
var state_16774__$1 = (function (){var statearr_16782 = state_16774;
(statearr_16782[(9)] = inst_16759__$1);

return statearr_16782;
})();
if(cljs.core.truth_(inst_16760)){
var statearr_16783_19205 = state_16774__$1;
(statearr_16783_19205[(1)] = (14));

} else {
var statearr_16784_19206 = state_16774__$1;
(statearr_16784_19206[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (6))){
var state_16774__$1 = state_16774;
var statearr_16785_19207 = state_16774__$1;
(statearr_16785_19207[(2)] = null);

(statearr_16785_19207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (17))){
var inst_16767 = (state_16774[(2)]);
var state_16774__$1 = (function (){var statearr_16788 = state_16774;
(statearr_16788[(10)] = inst_16767);

return statearr_16788;
})();
var statearr_16789_19209 = state_16774__$1;
(statearr_16789_19209[(2)] = null);

(statearr_16789_19209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (3))){
var inst_16772 = (state_16774[(2)]);
var state_16774__$1 = state_16774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16774__$1,inst_16772);
} else {
if((state_val_16775 === (12))){
var _ = (function (){var statearr_16792 = state_16774;
(statearr_16792[(4)] = cljs.core.rest((state_16774[(4)])));

return statearr_16792;
})();
var state_16774__$1 = state_16774;
var ex16787 = (state_16774__$1[(2)]);
var statearr_16793_19219 = state_16774__$1;
(statearr_16793_19219[(5)] = ex16787);


if((ex16787 instanceof Object)){
var statearr_16796_19220 = state_16774__$1;
(statearr_16796_19220[(1)] = (11));

(statearr_16796_19220[(5)] = null);

} else {
throw ex16787;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (2))){
var inst_16731 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16732 = cnt;
var inst_16733 = (0);
var state_16774__$1 = (function (){var statearr_16800 = state_16774;
(statearr_16800[(7)] = inst_16733);

(statearr_16800[(11)] = inst_16731);

(statearr_16800[(8)] = inst_16732);

return statearr_16800;
})();
var statearr_16801_19238 = state_16774__$1;
(statearr_16801_19238[(2)] = null);

(statearr_16801_19238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (11))){
var inst_16737 = (state_16774[(2)]);
var inst_16738 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16774__$1 = (function (){var statearr_16802 = state_16774;
(statearr_16802[(12)] = inst_16737);

return statearr_16802;
})();
var statearr_16803_19248 = state_16774__$1;
(statearr_16803_19248[(2)] = inst_16738);

(statearr_16803_19248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (9))){
var inst_16733 = (state_16774[(7)]);
var _ = (function (){var statearr_16806 = state_16774;
(statearr_16806[(4)] = cljs.core.cons((12),(state_16774[(4)])));

return statearr_16806;
})();
var inst_16744 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16733) : chs__$1.call(null, inst_16733));
var inst_16745 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16733) : done.call(null, inst_16733));
var inst_16746 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16744,inst_16745);
var ___$1 = (function (){var statearr_16811 = state_16774;
(statearr_16811[(4)] = cljs.core.rest((state_16774[(4)])));

return statearr_16811;
})();
var state_16774__$1 = state_16774;
var statearr_16815_19264 = state_16774__$1;
(statearr_16815_19264[(2)] = inst_16746);

(statearr_16815_19264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (5))){
var inst_16757 = (state_16774[(2)]);
var state_16774__$1 = (function (){var statearr_16816 = state_16774;
(statearr_16816[(13)] = inst_16757);

return statearr_16816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16774__$1,(13),dchan);
} else {
if((state_val_16775 === (14))){
var inst_16762 = cljs.core.async.close_BANG_(out);
var state_16774__$1 = state_16774;
var statearr_16817_19266 = state_16774__$1;
(statearr_16817_19266[(2)] = inst_16762);

(statearr_16817_19266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (16))){
var inst_16770 = (state_16774[(2)]);
var state_16774__$1 = state_16774;
var statearr_16818_19268 = state_16774__$1;
(statearr_16818_19268[(2)] = inst_16770);

(statearr_16818_19268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (10))){
var inst_16733 = (state_16774[(7)]);
var inst_16749 = (state_16774[(2)]);
var inst_16750 = (inst_16733 + (1));
var inst_16733__$1 = inst_16750;
var state_16774__$1 = (function (){var statearr_16820 = state_16774;
(statearr_16820[(7)] = inst_16733__$1);

(statearr_16820[(14)] = inst_16749);

return statearr_16820;
})();
var statearr_16821_19270 = state_16774__$1;
(statearr_16821_19270[(2)] = null);

(statearr_16821_19270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16775 === (8))){
var inst_16755 = (state_16774[(2)]);
var state_16774__$1 = state_16774;
var statearr_16822_19275 = state_16774__$1;
(statearr_16822_19275[(2)] = inst_16755);

(statearr_16822_19275[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16824[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16824[(1)] = (1));

return statearr_16824;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16774){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16774);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16826){var ex__14122__auto__ = e16826;
var statearr_16827_19286 = state_16774;
(statearr_16827_19286[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_16774[(4)]))){
var statearr_16828_19288 = state_16774;
(statearr_16828_19288[(1)] = cljs.core.first((state_16774[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19298 = state_16774;
state_16774 = G__19298;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_16832 = f__14451__auto__();
(statearr_16832[(6)] = c__14450__auto___19174);

return statearr_16832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16838 = arguments.length;
switch (G__16838) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14450__auto___19322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_16889){
var state_val_16890 = (state_16889[(1)]);
if((state_val_16890 === (7))){
var inst_16849 = (state_16889[(7)]);
var inst_16850 = (state_16889[(8)]);
var inst_16849__$1 = (state_16889[(2)]);
var inst_16850__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16849__$1,(0),null);
var inst_16851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16849__$1,(1),null);
var inst_16852 = (inst_16850__$1 == null);
var state_16889__$1 = (function (){var statearr_16893 = state_16889;
(statearr_16893[(9)] = inst_16851);

(statearr_16893[(7)] = inst_16849__$1);

(statearr_16893[(8)] = inst_16850__$1);

return statearr_16893;
})();
if(cljs.core.truth_(inst_16852)){
var statearr_16895_19323 = state_16889__$1;
(statearr_16895_19323[(1)] = (8));

} else {
var statearr_16900_19324 = state_16889__$1;
(statearr_16900_19324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (1))){
var inst_16839 = cljs.core.vec(chs);
var inst_16840 = inst_16839;
var state_16889__$1 = (function (){var statearr_16905 = state_16889;
(statearr_16905[(10)] = inst_16840);

return statearr_16905;
})();
var statearr_16906_19335 = state_16889__$1;
(statearr_16906_19335[(2)] = null);

(statearr_16906_19335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (4))){
var inst_16840 = (state_16889[(10)]);
var state_16889__$1 = state_16889;
return cljs.core.async.ioc_alts_BANG_(state_16889__$1,(7),inst_16840);
} else {
if((state_val_16890 === (6))){
var inst_16879 = (state_16889[(2)]);
var state_16889__$1 = state_16889;
var statearr_16912_19340 = state_16889__$1;
(statearr_16912_19340[(2)] = inst_16879);

(statearr_16912_19340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (3))){
var inst_16881 = (state_16889[(2)]);
var state_16889__$1 = state_16889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16889__$1,inst_16881);
} else {
if((state_val_16890 === (2))){
var inst_16840 = (state_16889[(10)]);
var inst_16842 = cljs.core.count(inst_16840);
var inst_16843 = (inst_16842 > (0));
var state_16889__$1 = state_16889;
if(cljs.core.truth_(inst_16843)){
var statearr_16917_19362 = state_16889__$1;
(statearr_16917_19362[(1)] = (4));

} else {
var statearr_16919_19363 = state_16889__$1;
(statearr_16919_19363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (11))){
var inst_16840 = (state_16889[(10)]);
var inst_16872 = (state_16889[(2)]);
var tmp16913 = inst_16840;
var inst_16840__$1 = tmp16913;
var state_16889__$1 = (function (){var statearr_16921 = state_16889;
(statearr_16921[(10)] = inst_16840__$1);

(statearr_16921[(11)] = inst_16872);

return statearr_16921;
})();
var statearr_16922_19376 = state_16889__$1;
(statearr_16922_19376[(2)] = null);

(statearr_16922_19376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (9))){
var inst_16850 = (state_16889[(8)]);
var state_16889__$1 = state_16889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16889__$1,(11),out,inst_16850);
} else {
if((state_val_16890 === (5))){
var inst_16877 = cljs.core.async.close_BANG_(out);
var state_16889__$1 = state_16889;
var statearr_16930_19378 = state_16889__$1;
(statearr_16930_19378[(2)] = inst_16877);

(statearr_16930_19378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (10))){
var inst_16875 = (state_16889[(2)]);
var state_16889__$1 = state_16889;
var statearr_16931_19382 = state_16889__$1;
(statearr_16931_19382[(2)] = inst_16875);

(statearr_16931_19382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (8))){
var inst_16851 = (state_16889[(9)]);
var inst_16840 = (state_16889[(10)]);
var inst_16849 = (state_16889[(7)]);
var inst_16850 = (state_16889[(8)]);
var inst_16867 = (function (){var cs = inst_16840;
var vec__16845 = inst_16849;
var v = inst_16850;
var c = inst_16851;
return (function (p1__16833_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16833_SHARP_);
});
})();
var inst_16868 = cljs.core.filterv(inst_16867,inst_16840);
var inst_16840__$1 = inst_16868;
var state_16889__$1 = (function (){var statearr_16933 = state_16889;
(statearr_16933[(10)] = inst_16840__$1);

return statearr_16933;
})();
var statearr_16934_19397 = state_16889__$1;
(statearr_16934_19397[(2)] = null);

(statearr_16934_19397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_16935 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16935[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_16935[(1)] = (1));

return statearr_16935;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16889){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16889);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e16936){var ex__14122__auto__ = e16936;
var statearr_16937_19403 = state_16889;
(statearr_16937_19403[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_16889[(4)]))){
var statearr_16938_19405 = state_16889;
(statearr_16938_19405[(1)] = cljs.core.first((state_16889[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19408 = state_16889;
state_16889 = G__19408;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_16939 = f__14451__auto__();
(statearr_16939[(6)] = c__14450__auto___19322);

return statearr_16939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16948 = arguments.length;
switch (G__16948) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14450__auto___19413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_16976){
var state_val_16977 = (state_16976[(1)]);
if((state_val_16977 === (7))){
var inst_16957 = (state_16976[(7)]);
var inst_16957__$1 = (state_16976[(2)]);
var inst_16958 = (inst_16957__$1 == null);
var inst_16959 = cljs.core.not(inst_16958);
var state_16976__$1 = (function (){var statearr_16978 = state_16976;
(statearr_16978[(7)] = inst_16957__$1);

return statearr_16978;
})();
if(inst_16959){
var statearr_16979_19427 = state_16976__$1;
(statearr_16979_19427[(1)] = (8));

} else {
var statearr_16980_19435 = state_16976__$1;
(statearr_16980_19435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (1))){
var inst_16951 = (0);
var state_16976__$1 = (function (){var statearr_16981 = state_16976;
(statearr_16981[(8)] = inst_16951);

return statearr_16981;
})();
var statearr_16982_19437 = state_16976__$1;
(statearr_16982_19437[(2)] = null);

(statearr_16982_19437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (4))){
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16976__$1,(7),ch);
} else {
if((state_val_16977 === (6))){
var inst_16971 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16985_19442 = state_16976__$1;
(statearr_16985_19442[(2)] = inst_16971);

(statearr_16985_19442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (3))){
var inst_16973 = (state_16976[(2)]);
var inst_16974 = cljs.core.async.close_BANG_(out);
var state_16976__$1 = (function (){var statearr_16986 = state_16976;
(statearr_16986[(9)] = inst_16973);

return statearr_16986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16976__$1,inst_16974);
} else {
if((state_val_16977 === (2))){
var inst_16951 = (state_16976[(8)]);
var inst_16954 = (inst_16951 < n);
var state_16976__$1 = state_16976;
if(cljs.core.truth_(inst_16954)){
var statearr_16987_19460 = state_16976__$1;
(statearr_16987_19460[(1)] = (4));

} else {
var statearr_16989_19462 = state_16976__$1;
(statearr_16989_19462[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (11))){
var inst_16951 = (state_16976[(8)]);
var inst_16963 = (state_16976[(2)]);
var inst_16964 = (inst_16951 + (1));
var inst_16951__$1 = inst_16964;
var state_16976__$1 = (function (){var statearr_16991 = state_16976;
(statearr_16991[(8)] = inst_16951__$1);

(statearr_16991[(10)] = inst_16963);

return statearr_16991;
})();
var statearr_16992_19474 = state_16976__$1;
(statearr_16992_19474[(2)] = null);

(statearr_16992_19474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (9))){
var state_16976__$1 = state_16976;
var statearr_17017_19480 = state_16976__$1;
(statearr_17017_19480[(2)] = null);

(statearr_17017_19480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (5))){
var state_16976__$1 = state_16976;
var statearr_17018_19491 = state_16976__$1;
(statearr_17018_19491[(2)] = null);

(statearr_17018_19491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (10))){
var inst_16968 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_17019_19497 = state_16976__$1;
(statearr_17019_19497[(2)] = inst_16968);

(statearr_17019_19497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (8))){
var inst_16957 = (state_16976[(7)]);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16976__$1,(11),out,inst_16957);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_17022 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17022[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_17022[(1)] = (1));

return statearr_17022;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_16976){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_16976);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e17026){var ex__14122__auto__ = e17026;
var statearr_17027_19512 = state_16976;
(statearr_17027_19512[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_16976[(4)]))){
var statearr_17028_19515 = state_16976;
(statearr_17028_19515[(1)] = cljs.core.first((state_16976[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19516 = state_16976;
state_16976 = G__19516;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_16976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_16976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_17029 = f__14451__auto__();
(statearr_17029[(6)] = c__14450__auto___19413);

return statearr_17029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17056 = (function (f,ch,meta17048,_,fn1,meta17057){
this.f = f;
this.ch = ch;
this.meta17048 = meta17048;
this._ = _;
this.fn1 = fn1;
this.meta17057 = meta17057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17058,meta17057__$1){
var self__ = this;
var _17058__$1 = this;
return (new cljs.core.async.t_cljs$core$async17056(self__.f,self__.ch,self__.meta17048,self__._,self__.fn1,meta17057__$1));
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17058){
var self__ = this;
var _17058__$1 = this;
return self__.meta17057;
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17038_SHARP_){
var G__17068 = (((p1__17038_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17038_SHARP_) : self__.f.call(null, p1__17038_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17068) : f1.call(null, G__17068));
});
}));

(cljs.core.async.t_cljs$core$async17056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17048","meta17048",-1048261112,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17047","cljs.core.async/t_cljs$core$async17047",-8074164,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17057","meta17057",159444811,null)], null);
}));

(cljs.core.async.t_cljs$core$async17056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17056");

(cljs.core.async.t_cljs$core$async17056.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17056.
 */
cljs.core.async.__GT_t_cljs$core$async17056 = (function cljs$core$async$__GT_t_cljs$core$async17056(f,ch,meta17048,_,fn1,meta17057){
return (new cljs.core.async.t_cljs$core$async17056(f,ch,meta17048,_,fn1,meta17057));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17047 = (function (f,ch,meta17048){
this.f = f;
this.ch = ch;
this.meta17048 = meta17048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17049,meta17048__$1){
var self__ = this;
var _17049__$1 = this;
return (new cljs.core.async.t_cljs$core$async17047(self__.f,self__.ch,meta17048__$1));
}));

(cljs.core.async.t_cljs$core$async17047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17049){
var self__ = this;
var _17049__$1 = this;
return self__.meta17048;
}));

(cljs.core.async.t_cljs$core$async17047.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17047.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17047.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17056(self__.f,self__.ch,self__.meta17048,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17076 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17076) : self__.f.call(null, G__17076));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17047.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17048","meta17048",-1048261112,null)], null);
}));

(cljs.core.async.t_cljs$core$async17047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17047");

(cljs.core.async.t_cljs$core$async17047.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17047.
 */
cljs.core.async.__GT_t_cljs$core$async17047 = (function cljs$core$async$__GT_t_cljs$core$async17047(f,ch,meta17048){
return (new cljs.core.async.t_cljs$core$async17047(f,ch,meta17048));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17047(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17085 = (function (f,ch,meta17086){
this.f = f;
this.ch = ch;
this.meta17086 = meta17086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17087,meta17086__$1){
var self__ = this;
var _17087__$1 = this;
return (new cljs.core.async.t_cljs$core$async17085(self__.f,self__.ch,meta17086__$1));
}));

(cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17087){
var self__ = this;
var _17087__$1 = this;
return self__.meta17086;
}));

(cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17086","meta17086",681179651,null)], null);
}));

(cljs.core.async.t_cljs$core$async17085.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17085");

(cljs.core.async.t_cljs$core$async17085.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17085");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17085.
 */
cljs.core.async.__GT_t_cljs$core$async17085 = (function cljs$core$async$__GT_t_cljs$core$async17085(f,ch,meta17086){
return (new cljs.core.async.t_cljs$core$async17085(f,ch,meta17086));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17085(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17107 = (function (p,ch,meta17108){
this.p = p;
this.ch = ch;
this.meta17108 = meta17108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17109,meta17108__$1){
var self__ = this;
var _17109__$1 = this;
return (new cljs.core.async.t_cljs$core$async17107(self__.p,self__.ch,meta17108__$1));
}));

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17109){
var self__ = this;
var _17109__$1 = this;
return self__.meta17108;
}));

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17108","meta17108",1791800355,null)], null);
}));

(cljs.core.async.t_cljs$core$async17107.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17107");

(cljs.core.async.t_cljs$core$async17107.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17107");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17107.
 */
cljs.core.async.__GT_t_cljs$core$async17107 = (function cljs$core$async$__GT_t_cljs$core$async17107(p,ch,meta17108){
return (new cljs.core.async.t_cljs$core$async17107(p,ch,meta17108));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17107(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17143 = arguments.length;
switch (G__17143) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14450__auto___19576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_17168){
var state_val_17169 = (state_17168[(1)]);
if((state_val_17169 === (7))){
var inst_17164 = (state_17168[(2)]);
var state_17168__$1 = state_17168;
var statearr_17170_19582 = state_17168__$1;
(statearr_17170_19582[(2)] = inst_17164);

(statearr_17170_19582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (1))){
var state_17168__$1 = state_17168;
var statearr_17173_19589 = state_17168__$1;
(statearr_17173_19589[(2)] = null);

(statearr_17173_19589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (4))){
var inst_17148 = (state_17168[(7)]);
var inst_17148__$1 = (state_17168[(2)]);
var inst_17150 = (inst_17148__$1 == null);
var state_17168__$1 = (function (){var statearr_17174 = state_17168;
(statearr_17174[(7)] = inst_17148__$1);

return statearr_17174;
})();
if(cljs.core.truth_(inst_17150)){
var statearr_17175_19594 = state_17168__$1;
(statearr_17175_19594[(1)] = (5));

} else {
var statearr_17176_19595 = state_17168__$1;
(statearr_17176_19595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (6))){
var inst_17148 = (state_17168[(7)]);
var inst_17155 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17148) : p.call(null, inst_17148));
var state_17168__$1 = state_17168;
if(cljs.core.truth_(inst_17155)){
var statearr_17178_19600 = state_17168__$1;
(statearr_17178_19600[(1)] = (8));

} else {
var statearr_17179_19601 = state_17168__$1;
(statearr_17179_19601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (3))){
var inst_17166 = (state_17168[(2)]);
var state_17168__$1 = state_17168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17168__$1,inst_17166);
} else {
if((state_val_17169 === (2))){
var state_17168__$1 = state_17168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17168__$1,(4),ch);
} else {
if((state_val_17169 === (11))){
var inst_17158 = (state_17168[(2)]);
var state_17168__$1 = state_17168;
var statearr_17184_19603 = state_17168__$1;
(statearr_17184_19603[(2)] = inst_17158);

(statearr_17184_19603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (9))){
var state_17168__$1 = state_17168;
var statearr_17188_19604 = state_17168__$1;
(statearr_17188_19604[(2)] = null);

(statearr_17188_19604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (5))){
var inst_17152 = cljs.core.async.close_BANG_(out);
var state_17168__$1 = state_17168;
var statearr_17190_19605 = state_17168__$1;
(statearr_17190_19605[(2)] = inst_17152);

(statearr_17190_19605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (10))){
var inst_17161 = (state_17168[(2)]);
var state_17168__$1 = (function (){var statearr_17191 = state_17168;
(statearr_17191[(8)] = inst_17161);

return statearr_17191;
})();
var statearr_17192_19606 = state_17168__$1;
(statearr_17192_19606[(2)] = null);

(statearr_17192_19606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17169 === (8))){
var inst_17148 = (state_17168[(7)]);
var state_17168__$1 = state_17168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17168__$1,(11),out,inst_17148);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_17193 = [null,null,null,null,null,null,null,null,null];
(statearr_17193[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_17193[(1)] = (1));

return statearr_17193;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_17168){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_17168);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e17194){var ex__14122__auto__ = e17194;
var statearr_17195_19610 = state_17168;
(statearr_17195_19610[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_17168[(4)]))){
var statearr_17196_19611 = state_17168;
(statearr_17196_19611[(1)] = cljs.core.first((state_17168[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19612 = state_17168;
state_17168 = G__19612;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_17168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_17168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_17199 = f__14451__auto__();
(statearr_17199[(6)] = c__14450__auto___19576);

return statearr_17199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17202 = arguments.length;
switch (G__17202) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14450__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_17267){
var state_val_17268 = (state_17267[(1)]);
if((state_val_17268 === (7))){
var inst_17263 = (state_17267[(2)]);
var state_17267__$1 = state_17267;
var statearr_17271_19644 = state_17267__$1;
(statearr_17271_19644[(2)] = inst_17263);

(statearr_17271_19644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (20))){
var inst_17230 = (state_17267[(7)]);
var inst_17244 = (state_17267[(2)]);
var inst_17245 = cljs.core.next(inst_17230);
var inst_17216 = inst_17245;
var inst_17217 = null;
var inst_17218 = (0);
var inst_17219 = (0);
var state_17267__$1 = (function (){var statearr_17272 = state_17267;
(statearr_17272[(8)] = inst_17218);

(statearr_17272[(9)] = inst_17217);

(statearr_17272[(10)] = inst_17219);

(statearr_17272[(11)] = inst_17244);

(statearr_17272[(12)] = inst_17216);

return statearr_17272;
})();
var statearr_17279_19645 = state_17267__$1;
(statearr_17279_19645[(2)] = null);

(statearr_17279_19645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (1))){
var state_17267__$1 = state_17267;
var statearr_17282_19649 = state_17267__$1;
(statearr_17282_19649[(2)] = null);

(statearr_17282_19649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (4))){
var inst_17205 = (state_17267[(13)]);
var inst_17205__$1 = (state_17267[(2)]);
var inst_17206 = (inst_17205__$1 == null);
var state_17267__$1 = (function (){var statearr_17286 = state_17267;
(statearr_17286[(13)] = inst_17205__$1);

return statearr_17286;
})();
if(cljs.core.truth_(inst_17206)){
var statearr_17287_19650 = state_17267__$1;
(statearr_17287_19650[(1)] = (5));

} else {
var statearr_17288_19651 = state_17267__$1;
(statearr_17288_19651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (15))){
var state_17267__$1 = state_17267;
var statearr_17292_19652 = state_17267__$1;
(statearr_17292_19652[(2)] = null);

(statearr_17292_19652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (21))){
var state_17267__$1 = state_17267;
var statearr_17293_19653 = state_17267__$1;
(statearr_17293_19653[(2)] = null);

(statearr_17293_19653[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (13))){
var inst_17218 = (state_17267[(8)]);
var inst_17217 = (state_17267[(9)]);
var inst_17219 = (state_17267[(10)]);
var inst_17216 = (state_17267[(12)]);
var inst_17226 = (state_17267[(2)]);
var inst_17227 = (inst_17219 + (1));
var tmp17289 = inst_17218;
var tmp17290 = inst_17217;
var tmp17291 = inst_17216;
var inst_17216__$1 = tmp17291;
var inst_17217__$1 = tmp17290;
var inst_17218__$1 = tmp17289;
var inst_17219__$1 = inst_17227;
var state_17267__$1 = (function (){var statearr_17295 = state_17267;
(statearr_17295[(8)] = inst_17218__$1);

(statearr_17295[(9)] = inst_17217__$1);

(statearr_17295[(10)] = inst_17219__$1);

(statearr_17295[(12)] = inst_17216__$1);

(statearr_17295[(14)] = inst_17226);

return statearr_17295;
})();
var statearr_17296_19665 = state_17267__$1;
(statearr_17296_19665[(2)] = null);

(statearr_17296_19665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (22))){
var state_17267__$1 = state_17267;
var statearr_17301_19672 = state_17267__$1;
(statearr_17301_19672[(2)] = null);

(statearr_17301_19672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (6))){
var inst_17205 = (state_17267[(13)]);
var inst_17214 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17205) : f.call(null, inst_17205));
var inst_17215 = cljs.core.seq(inst_17214);
var inst_17216 = inst_17215;
var inst_17217 = null;
var inst_17218 = (0);
var inst_17219 = (0);
var state_17267__$1 = (function (){var statearr_17302 = state_17267;
(statearr_17302[(8)] = inst_17218);

(statearr_17302[(9)] = inst_17217);

(statearr_17302[(10)] = inst_17219);

(statearr_17302[(12)] = inst_17216);

return statearr_17302;
})();
var statearr_17305_19678 = state_17267__$1;
(statearr_17305_19678[(2)] = null);

(statearr_17305_19678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (17))){
var inst_17230 = (state_17267[(7)]);
var inst_17237 = cljs.core.chunk_first(inst_17230);
var inst_17238 = cljs.core.chunk_rest(inst_17230);
var inst_17239 = cljs.core.count(inst_17237);
var inst_17216 = inst_17238;
var inst_17217 = inst_17237;
var inst_17218 = inst_17239;
var inst_17219 = (0);
var state_17267__$1 = (function (){var statearr_17310 = state_17267;
(statearr_17310[(8)] = inst_17218);

(statearr_17310[(9)] = inst_17217);

(statearr_17310[(10)] = inst_17219);

(statearr_17310[(12)] = inst_17216);

return statearr_17310;
})();
var statearr_17311_19688 = state_17267__$1;
(statearr_17311_19688[(2)] = null);

(statearr_17311_19688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (3))){
var inst_17265 = (state_17267[(2)]);
var state_17267__$1 = state_17267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17267__$1,inst_17265);
} else {
if((state_val_17268 === (12))){
var inst_17253 = (state_17267[(2)]);
var state_17267__$1 = state_17267;
var statearr_17312_19698 = state_17267__$1;
(statearr_17312_19698[(2)] = inst_17253);

(statearr_17312_19698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (2))){
var state_17267__$1 = state_17267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17267__$1,(4),in$);
} else {
if((state_val_17268 === (23))){
var inst_17261 = (state_17267[(2)]);
var state_17267__$1 = state_17267;
var statearr_17313_19705 = state_17267__$1;
(statearr_17313_19705[(2)] = inst_17261);

(statearr_17313_19705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (19))){
var inst_17248 = (state_17267[(2)]);
var state_17267__$1 = state_17267;
var statearr_17314_19707 = state_17267__$1;
(statearr_17314_19707[(2)] = inst_17248);

(statearr_17314_19707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (11))){
var inst_17216 = (state_17267[(12)]);
var inst_17230 = (state_17267[(7)]);
var inst_17230__$1 = cljs.core.seq(inst_17216);
var state_17267__$1 = (function (){var statearr_17315 = state_17267;
(statearr_17315[(7)] = inst_17230__$1);

return statearr_17315;
})();
if(inst_17230__$1){
var statearr_17316_19723 = state_17267__$1;
(statearr_17316_19723[(1)] = (14));

} else {
var statearr_17317_19725 = state_17267__$1;
(statearr_17317_19725[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (9))){
var inst_17255 = (state_17267[(2)]);
var inst_17256 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17267__$1 = (function (){var statearr_17318 = state_17267;
(statearr_17318[(15)] = inst_17255);

return statearr_17318;
})();
if(cljs.core.truth_(inst_17256)){
var statearr_17319_19734 = state_17267__$1;
(statearr_17319_19734[(1)] = (21));

} else {
var statearr_17320_19735 = state_17267__$1;
(statearr_17320_19735[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (5))){
var inst_17208 = cljs.core.async.close_BANG_(out);
var state_17267__$1 = state_17267;
var statearr_17321_19736 = state_17267__$1;
(statearr_17321_19736[(2)] = inst_17208);

(statearr_17321_19736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (14))){
var inst_17230 = (state_17267[(7)]);
var inst_17235 = cljs.core.chunked_seq_QMARK_(inst_17230);
var state_17267__$1 = state_17267;
if(inst_17235){
var statearr_17322_19737 = state_17267__$1;
(statearr_17322_19737[(1)] = (17));

} else {
var statearr_17323_19738 = state_17267__$1;
(statearr_17323_19738[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (16))){
var inst_17251 = (state_17267[(2)]);
var state_17267__$1 = state_17267;
var statearr_17324_19739 = state_17267__$1;
(statearr_17324_19739[(2)] = inst_17251);

(statearr_17324_19739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17268 === (10))){
var inst_17217 = (state_17267[(9)]);
var inst_17219 = (state_17267[(10)]);
var inst_17224 = cljs.core._nth(inst_17217,inst_17219);
var state_17267__$1 = state_17267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17267__$1,(13),out,inst_17224);
} else {
if((state_val_17268 === (18))){
var inst_17230 = (state_17267[(7)]);
var inst_17242 = cljs.core.first(inst_17230);
var state_17267__$1 = state_17267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17267__$1,(20),out,inst_17242);
} else {
if((state_val_17268 === (8))){
var inst_17218 = (state_17267[(8)]);
var inst_17219 = (state_17267[(10)]);
var inst_17221 = (inst_17219 < inst_17218);
var inst_17222 = inst_17221;
var state_17267__$1 = state_17267;
if(cljs.core.truth_(inst_17222)){
var statearr_17335_19748 = state_17267__$1;
(statearr_17335_19748[(1)] = (10));

} else {
var statearr_17336_19750 = state_17267__$1;
(statearr_17336_19750[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____0 = (function (){
var statearr_17337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17337[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__);

(statearr_17337[(1)] = (1));

return statearr_17337;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____1 = (function (state_17267){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_17267);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e17338){var ex__14122__auto__ = e17338;
var statearr_17339_19761 = state_17267;
(statearr_17339_19761[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_17267[(4)]))){
var statearr_17340_19767 = state_17267;
(statearr_17340_19767[(1)] = cljs.core.first((state_17267[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19771 = state_17267;
state_17267 = G__19771;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__ = function(state_17267){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____1.call(this,state_17267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14119__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_17341 = f__14451__auto__();
(statearr_17341[(6)] = c__14450__auto__);

return statearr_17341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));

return c__14450__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17343 = arguments.length;
switch (G__17343) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17350 = arguments.length;
switch (G__17350) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17363 = arguments.length;
switch (G__17363) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14450__auto___19787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_17394){
var state_val_17395 = (state_17394[(1)]);
if((state_val_17395 === (7))){
var inst_17389 = (state_17394[(2)]);
var state_17394__$1 = state_17394;
var statearr_17396_19788 = state_17394__$1;
(statearr_17396_19788[(2)] = inst_17389);

(statearr_17396_19788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (1))){
var inst_17368 = null;
var state_17394__$1 = (function (){var statearr_17397 = state_17394;
(statearr_17397[(7)] = inst_17368);

return statearr_17397;
})();
var statearr_17398_19796 = state_17394__$1;
(statearr_17398_19796[(2)] = null);

(statearr_17398_19796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (4))){
var inst_17371 = (state_17394[(8)]);
var inst_17371__$1 = (state_17394[(2)]);
var inst_17372 = (inst_17371__$1 == null);
var inst_17373 = cljs.core.not(inst_17372);
var state_17394__$1 = (function (){var statearr_17399 = state_17394;
(statearr_17399[(8)] = inst_17371__$1);

return statearr_17399;
})();
if(inst_17373){
var statearr_17403_19798 = state_17394__$1;
(statearr_17403_19798[(1)] = (5));

} else {
var statearr_17405_19799 = state_17394__$1;
(statearr_17405_19799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (6))){
var state_17394__$1 = state_17394;
var statearr_17409_19804 = state_17394__$1;
(statearr_17409_19804[(2)] = null);

(statearr_17409_19804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (3))){
var inst_17391 = (state_17394[(2)]);
var inst_17392 = cljs.core.async.close_BANG_(out);
var state_17394__$1 = (function (){var statearr_17410 = state_17394;
(statearr_17410[(9)] = inst_17391);

return statearr_17410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17394__$1,inst_17392);
} else {
if((state_val_17395 === (2))){
var state_17394__$1 = state_17394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17394__$1,(4),ch);
} else {
if((state_val_17395 === (11))){
var inst_17371 = (state_17394[(8)]);
var inst_17383 = (state_17394[(2)]);
var inst_17368 = inst_17371;
var state_17394__$1 = (function (){var statearr_17411 = state_17394;
(statearr_17411[(10)] = inst_17383);

(statearr_17411[(7)] = inst_17368);

return statearr_17411;
})();
var statearr_17412_19806 = state_17394__$1;
(statearr_17412_19806[(2)] = null);

(statearr_17412_19806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (9))){
var inst_17371 = (state_17394[(8)]);
var state_17394__$1 = state_17394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17394__$1,(11),out,inst_17371);
} else {
if((state_val_17395 === (5))){
var inst_17371 = (state_17394[(8)]);
var inst_17368 = (state_17394[(7)]);
var inst_17378 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17371,inst_17368);
var state_17394__$1 = state_17394;
if(inst_17378){
var statearr_17414_19807 = state_17394__$1;
(statearr_17414_19807[(1)] = (8));

} else {
var statearr_17416_19811 = state_17394__$1;
(statearr_17416_19811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (10))){
var inst_17386 = (state_17394[(2)]);
var state_17394__$1 = state_17394;
var statearr_17417_19812 = state_17394__$1;
(statearr_17417_19812[(2)] = inst_17386);

(statearr_17417_19812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (8))){
var inst_17368 = (state_17394[(7)]);
var tmp17413 = inst_17368;
var inst_17368__$1 = tmp17413;
var state_17394__$1 = (function (){var statearr_17418 = state_17394;
(statearr_17418[(7)] = inst_17368__$1);

return statearr_17418;
})();
var statearr_17419_19817 = state_17394__$1;
(statearr_17419_19817[(2)] = null);

(statearr_17419_19817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_17421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17421[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_17421[(1)] = (1));

return statearr_17421;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_17394){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_17394);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e17422){var ex__14122__auto__ = e17422;
var statearr_17423_19819 = state_17394;
(statearr_17423_19819[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_17394[(4)]))){
var statearr_17425_19820 = state_17394;
(statearr_17425_19820[(1)] = cljs.core.first((state_17394[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19821 = state_17394;
state_17394 = G__19821;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_17394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_17394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_17426 = f__14451__auto__();
(statearr_17426[(6)] = c__14450__auto___19787);

return statearr_17426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17437 = arguments.length;
switch (G__17437) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14450__auto___19825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_17506){
var state_val_17507 = (state_17506[(1)]);
if((state_val_17507 === (7))){
var inst_17502 = (state_17506[(2)]);
var state_17506__$1 = state_17506;
var statearr_17514_19827 = state_17506__$1;
(statearr_17514_19827[(2)] = inst_17502);

(statearr_17514_19827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (1))){
var inst_17452 = (new Array(n));
var inst_17453 = inst_17452;
var inst_17454 = (0);
var state_17506__$1 = (function (){var statearr_17515 = state_17506;
(statearr_17515[(7)] = inst_17453);

(statearr_17515[(8)] = inst_17454);

return statearr_17515;
})();
var statearr_17516_19833 = state_17506__$1;
(statearr_17516_19833[(2)] = null);

(statearr_17516_19833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (4))){
var inst_17457 = (state_17506[(9)]);
var inst_17457__$1 = (state_17506[(2)]);
var inst_17458 = (inst_17457__$1 == null);
var inst_17459 = cljs.core.not(inst_17458);
var state_17506__$1 = (function (){var statearr_17519 = state_17506;
(statearr_17519[(9)] = inst_17457__$1);

return statearr_17519;
})();
if(inst_17459){
var statearr_17520_19839 = state_17506__$1;
(statearr_17520_19839[(1)] = (5));

} else {
var statearr_17521_19843 = state_17506__$1;
(statearr_17521_19843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (15))){
var inst_17490 = (state_17506[(2)]);
var state_17506__$1 = state_17506;
var statearr_17522_19844 = state_17506__$1;
(statearr_17522_19844[(2)] = inst_17490);

(statearr_17522_19844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (13))){
var state_17506__$1 = state_17506;
var statearr_17523_19845 = state_17506__$1;
(statearr_17523_19845[(2)] = null);

(statearr_17523_19845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (6))){
var inst_17454 = (state_17506[(8)]);
var inst_17478 = (inst_17454 > (0));
var state_17506__$1 = state_17506;
if(cljs.core.truth_(inst_17478)){
var statearr_17526_19847 = state_17506__$1;
(statearr_17526_19847[(1)] = (12));

} else {
var statearr_17527_19848 = state_17506__$1;
(statearr_17527_19848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (3))){
var inst_17504 = (state_17506[(2)]);
var state_17506__$1 = state_17506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17506__$1,inst_17504);
} else {
if((state_val_17507 === (12))){
var inst_17453 = (state_17506[(7)]);
var inst_17488 = cljs.core.vec(inst_17453);
var state_17506__$1 = state_17506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17506__$1,(15),out,inst_17488);
} else {
if((state_val_17507 === (2))){
var state_17506__$1 = state_17506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17506__$1,(4),ch);
} else {
if((state_val_17507 === (11))){
var inst_17472 = (state_17506[(2)]);
var inst_17473 = (new Array(n));
var inst_17453 = inst_17473;
var inst_17454 = (0);
var state_17506__$1 = (function (){var statearr_17530 = state_17506;
(statearr_17530[(7)] = inst_17453);

(statearr_17530[(10)] = inst_17472);

(statearr_17530[(8)] = inst_17454);

return statearr_17530;
})();
var statearr_17531_19858 = state_17506__$1;
(statearr_17531_19858[(2)] = null);

(statearr_17531_19858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (9))){
var inst_17453 = (state_17506[(7)]);
var inst_17470 = cljs.core.vec(inst_17453);
var state_17506__$1 = state_17506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17506__$1,(11),out,inst_17470);
} else {
if((state_val_17507 === (5))){
var inst_17453 = (state_17506[(7)]);
var inst_17457 = (state_17506[(9)]);
var inst_17465 = (state_17506[(11)]);
var inst_17454 = (state_17506[(8)]);
var inst_17464 = (inst_17453[inst_17454] = inst_17457);
var inst_17465__$1 = (inst_17454 + (1));
var inst_17466 = (inst_17465__$1 < n);
var state_17506__$1 = (function (){var statearr_17537 = state_17506;
(statearr_17537[(12)] = inst_17464);

(statearr_17537[(11)] = inst_17465__$1);

return statearr_17537;
})();
if(cljs.core.truth_(inst_17466)){
var statearr_17538_19865 = state_17506__$1;
(statearr_17538_19865[(1)] = (8));

} else {
var statearr_17539_19866 = state_17506__$1;
(statearr_17539_19866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (14))){
var inst_17493 = (state_17506[(2)]);
var inst_17494 = cljs.core.async.close_BANG_(out);
var state_17506__$1 = (function (){var statearr_17541 = state_17506;
(statearr_17541[(13)] = inst_17493);

return statearr_17541;
})();
var statearr_17542_19871 = state_17506__$1;
(statearr_17542_19871[(2)] = inst_17494);

(statearr_17542_19871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (10))){
var inst_17476 = (state_17506[(2)]);
var state_17506__$1 = state_17506;
var statearr_17543_19872 = state_17506__$1;
(statearr_17543_19872[(2)] = inst_17476);

(statearr_17543_19872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17507 === (8))){
var inst_17453 = (state_17506[(7)]);
var inst_17465 = (state_17506[(11)]);
var tmp17540 = inst_17453;
var inst_17453__$1 = tmp17540;
var inst_17454 = inst_17465;
var state_17506__$1 = (function (){var statearr_17544 = state_17506;
(statearr_17544[(7)] = inst_17453__$1);

(statearr_17544[(8)] = inst_17454);

return statearr_17544;
})();
var statearr_17545_19873 = state_17506__$1;
(statearr_17545_19873[(2)] = null);

(statearr_17545_19873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_17546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17546[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_17546[(1)] = (1));

return statearr_17546;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_17506){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_17506);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e17547){var ex__14122__auto__ = e17547;
var statearr_17548_19878 = state_17506;
(statearr_17548_19878[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_17506[(4)]))){
var statearr_17549_19879 = state_17506;
(statearr_17549_19879[(1)] = cljs.core.first((state_17506[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19881 = state_17506;
state_17506 = G__19881;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_17506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_17506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_17551 = f__14451__auto__();
(statearr_17551[(6)] = c__14450__auto___19825);

return statearr_17551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17555 = arguments.length;
switch (G__17555) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14450__auto___19885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14451__auto__ = (function (){var switch__14118__auto__ = (function (state_17611){
var state_val_17612 = (state_17611[(1)]);
if((state_val_17612 === (7))){
var inst_17600 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
var statearr_17617_19896 = state_17611__$1;
(statearr_17617_19896[(2)] = inst_17600);

(statearr_17617_19896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (1))){
var inst_17556 = [];
var inst_17557 = inst_17556;
var inst_17558 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17611__$1 = (function (){var statearr_17618 = state_17611;
(statearr_17618[(7)] = inst_17558);

(statearr_17618[(8)] = inst_17557);

return statearr_17618;
})();
var statearr_17619_19903 = state_17611__$1;
(statearr_17619_19903[(2)] = null);

(statearr_17619_19903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (4))){
var inst_17561 = (state_17611[(9)]);
var inst_17561__$1 = (state_17611[(2)]);
var inst_17562 = (inst_17561__$1 == null);
var inst_17563 = cljs.core.not(inst_17562);
var state_17611__$1 = (function (){var statearr_17620 = state_17611;
(statearr_17620[(9)] = inst_17561__$1);

return statearr_17620;
})();
if(inst_17563){
var statearr_17623_19904 = state_17611__$1;
(statearr_17623_19904[(1)] = (5));

} else {
var statearr_17625_19905 = state_17611__$1;
(statearr_17625_19905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (15))){
var inst_17557 = (state_17611[(8)]);
var inst_17592 = cljs.core.vec(inst_17557);
var state_17611__$1 = state_17611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17611__$1,(18),out,inst_17592);
} else {
if((state_val_17612 === (13))){
var inst_17583 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
var statearr_17631_19908 = state_17611__$1;
(statearr_17631_19908[(2)] = inst_17583);

(statearr_17631_19908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (6))){
var inst_17557 = (state_17611[(8)]);
var inst_17585 = inst_17557.length;
var inst_17586 = (inst_17585 > (0));
var state_17611__$1 = state_17611;
if(cljs.core.truth_(inst_17586)){
var statearr_17635_19909 = state_17611__$1;
(statearr_17635_19909[(1)] = (15));

} else {
var statearr_17636_19910 = state_17611__$1;
(statearr_17636_19910[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (17))){
var inst_17597 = (state_17611[(2)]);
var inst_17598 = cljs.core.async.close_BANG_(out);
var state_17611__$1 = (function (){var statearr_17637 = state_17611;
(statearr_17637[(10)] = inst_17597);

return statearr_17637;
})();
var statearr_17638_19914 = state_17611__$1;
(statearr_17638_19914[(2)] = inst_17598);

(statearr_17638_19914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (3))){
var inst_17602 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17611__$1,inst_17602);
} else {
if((state_val_17612 === (12))){
var inst_17557 = (state_17611[(8)]);
var inst_17576 = cljs.core.vec(inst_17557);
var state_17611__$1 = state_17611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17611__$1,(14),out,inst_17576);
} else {
if((state_val_17612 === (2))){
var state_17611__$1 = state_17611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17611__$1,(4),ch);
} else {
if((state_val_17612 === (11))){
var inst_17565 = (state_17611[(11)]);
var inst_17561 = (state_17611[(9)]);
var inst_17557 = (state_17611[(8)]);
var inst_17573 = inst_17557.push(inst_17561);
var tmp17639 = inst_17557;
var inst_17557__$1 = tmp17639;
var inst_17558 = inst_17565;
var state_17611__$1 = (function (){var statearr_17640 = state_17611;
(statearr_17640[(12)] = inst_17573);

(statearr_17640[(7)] = inst_17558);

(statearr_17640[(8)] = inst_17557__$1);

return statearr_17640;
})();
var statearr_17641_19923 = state_17611__$1;
(statearr_17641_19923[(2)] = null);

(statearr_17641_19923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (9))){
var inst_17558 = (state_17611[(7)]);
var inst_17569 = cljs.core.keyword_identical_QMARK_(inst_17558,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17611__$1 = state_17611;
var statearr_17642_19927 = state_17611__$1;
(statearr_17642_19927[(2)] = inst_17569);

(statearr_17642_19927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (5))){
var inst_17565 = (state_17611[(11)]);
var inst_17558 = (state_17611[(7)]);
var inst_17566 = (state_17611[(13)]);
var inst_17561 = (state_17611[(9)]);
var inst_17565__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17561) : f.call(null, inst_17561));
var inst_17566__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17565__$1,inst_17558);
var state_17611__$1 = (function (){var statearr_17646 = state_17611;
(statearr_17646[(11)] = inst_17565__$1);

(statearr_17646[(13)] = inst_17566__$1);

return statearr_17646;
})();
if(inst_17566__$1){
var statearr_17647_19935 = state_17611__$1;
(statearr_17647_19935[(1)] = (8));

} else {
var statearr_17648_19936 = state_17611__$1;
(statearr_17648_19936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (14))){
var inst_17565 = (state_17611[(11)]);
var inst_17561 = (state_17611[(9)]);
var inst_17578 = (state_17611[(2)]);
var inst_17579 = [];
var inst_17580 = inst_17579.push(inst_17561);
var inst_17557 = inst_17579;
var inst_17558 = inst_17565;
var state_17611__$1 = (function (){var statearr_17649 = state_17611;
(statearr_17649[(7)] = inst_17558);

(statearr_17649[(14)] = inst_17580);

(statearr_17649[(15)] = inst_17578);

(statearr_17649[(8)] = inst_17557);

return statearr_17649;
})();
var statearr_17650_19937 = state_17611__$1;
(statearr_17650_19937[(2)] = null);

(statearr_17650_19937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (16))){
var state_17611__$1 = state_17611;
var statearr_17651_19939 = state_17611__$1;
(statearr_17651_19939[(2)] = null);

(statearr_17651_19939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (10))){
var inst_17571 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
if(cljs.core.truth_(inst_17571)){
var statearr_17652_19943 = state_17611__$1;
(statearr_17652_19943[(1)] = (11));

} else {
var statearr_17656_19944 = state_17611__$1;
(statearr_17656_19944[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (18))){
var inst_17594 = (state_17611[(2)]);
var state_17611__$1 = state_17611;
var statearr_17659_19947 = state_17611__$1;
(statearr_17659_19947[(2)] = inst_17594);

(statearr_17659_19947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17612 === (8))){
var inst_17566 = (state_17611[(13)]);
var state_17611__$1 = state_17611;
var statearr_17660_19950 = state_17611__$1;
(statearr_17660_19950[(2)] = inst_17566);

(statearr_17660_19950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14119__auto__ = null;
var cljs$core$async$state_machine__14119__auto____0 = (function (){
var statearr_17664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17664[(0)] = cljs$core$async$state_machine__14119__auto__);

(statearr_17664[(1)] = (1));

return statearr_17664;
});
var cljs$core$async$state_machine__14119__auto____1 = (function (state_17611){
while(true){
var ret_value__14120__auto__ = (function (){try{while(true){
var result__14121__auto__ = switch__14118__auto__(state_17611);
if(cljs.core.keyword_identical_QMARK_(result__14121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14121__auto__;
}
break;
}
}catch (e17666){var ex__14122__auto__ = e17666;
var statearr_17667_19953 = state_17611;
(statearr_17667_19953[(2)] = ex__14122__auto__);


if(cljs.core.seq((state_17611[(4)]))){
var statearr_17669_19954 = state_17611;
(statearr_17669_19954[(1)] = cljs.core.first((state_17611[(4)])));

} else {
throw ex__14122__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19955 = state_17611;
state_17611 = G__19955;
continue;
} else {
return ret_value__14120__auto__;
}
break;
}
});
cljs$core$async$state_machine__14119__auto__ = function(state_17611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14119__auto____1.call(this,state_17611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14119__auto____0;
cljs$core$async$state_machine__14119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14119__auto____1;
return cljs$core$async$state_machine__14119__auto__;
})()
})();
var state__14452__auto__ = (function (){var statearr_17671 = f__14451__auto__();
(statearr_17671[(6)] = c__14450__auto___19885);

return statearr_17671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14452__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
