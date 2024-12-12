goog.provide('mnf.frontend.site');
if((typeof mnf !== 'undefined') && (typeof mnf.frontend !== 'undefined') && (typeof mnf.frontend.site !== 'undefined') && (typeof mnf.frontend.site.root_atom !== 'undefined')){
} else {
mnf.frontend.site.root_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
mnf.frontend.site.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),"team-sheet",new cljs.core.Keyword(null,"match-data","match-data",151938970),null,new cljs.core.Keyword(null,"player-data","player-data",77754120),null], null));
mnf.frontend.site.nav_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false], null));
mnf.frontend.site.load_edn_file = (function mnf$frontend$site$load_edn_file(file_path,callback){
console.log("Attempting to load:",file_path);

return fetch(file_path).then((function (response){
console.log("Response status:",response.status);

if(cljs.core.truth_(response.ok)){
return response.text();
} else {
throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_path),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response.status)].join('')));
}
})).then((function (text){
console.log("Loaded text from",file_path,":",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),(100)));

var G__12015 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__12015) : callback.call(null, G__12015));
})).catch((function (error){
return console.error("Error loading",file_path,":",error);
}));
});
mnf.frontend.site.load_data_BANG_ = (function mnf$frontend$site$load_data_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading data..."], 0));

mnf.frontend.site.load_edn_file("/data/match-data.edn",(function (p1__12016_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Match data loaded"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf.frontend.site.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"match-data","match-data",151938970),p1__12016_SHARP_);
}));

return mnf.frontend.site.load_edn_file("/data/player-stats.edn",(function (p1__12017_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Player data loaded"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf.frontend.site.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"player-data","player-data",77754120),p1__12017_SHARP_);
}));
});
mnf.frontend.site.format_value = (function mnf$frontend$site$format_value(v){
if((v instanceof Date)){
return v.toLocaleDateString();
} else {
if(typeof v === 'number'){
return v.toFixed((2));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
});
mnf.frontend.site.sort_by_key = (function mnf$frontend$site$sort_by_key(data,key_name,ascending_QMARK_){
var comparator = (cljs.core.truth_(ascending_QMARK_)?cljs.core.compare:cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.compare));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__12018_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__12018_SHARP_,key_name);
}),comparator,data);
});
mnf.frontend.site.data_table = (function mnf$frontend$site$data_table(data){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),null,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null));
return (function (data__$1){
if(cljs.core.truth_((function (){var and__5000__auto__ = data__$1;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(data__$1);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-table","table.data-table",98624197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function mnf$frontend$site$data_table_$_iter__12019(s__12020){
return (new cljs.core.LazySeq(null,(function (){
var s__12020__$1 = s__12020;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12020__$1);
if(temp__5804__auto__){
var s__12020__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12020__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12020__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12022 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12021 = (0);
while(true){
if((i__12021 < size__5479__auto__)){
var header = cljs.core._nth(c__5478__auto__,i__12021);
cljs.core.chunk_append(b__12022,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sortable","th.sortable",-1132266161),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__12021,header,c__5478__auto__,size__5479__auto__,b__12022,s__12020__$2,temp__5804__auto__,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (i__12021,header,c__5478__auto__,size__5479__auto__,b__12022,s__12020__$2,temp__5804__auto__,state){
return (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(s),header)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),cljs.core.not);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),header,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null);
}
});})(i__12021,header,c__5478__auto__,size__5479__auto__,b__12022,s__12020__$2,temp__5804__auto__,state))
);
});})(i__12021,header,c__5478__auto__,size__5479__auto__,b__12022,s__12020__$2,temp__5804__auto__,state))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?(cljs.core.truth_(new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"sort-asc":"sort-desc"):null)], null),cljs.core.name(header)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)));

var G__12036 = (i__12021 + (1));
i__12021 = G__12036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12022),mnf$frontend$site$data_table_$_iter__12019(cljs.core.chunk_rest(s__12020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12022),null);
}
} else {
var header = cljs.core.first(s__12020__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sortable","th.sortable",-1132266161),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (header,s__12020__$2,temp__5804__auto__,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(s),header)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),cljs.core.not);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),header,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null);
}
}));
});})(header,s__12020__$2,temp__5804__auto__,state))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?(cljs.core.truth_(new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"sort-asc":"sort-desc"):null)], null),cljs.core.name(header)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)),mnf$frontend$site$data_table_$_iter__12019(cljs.core.rest(s__12020__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.keys(cljs.core.first(data__$1)));
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var sorted_data = (cljs.core.truth_(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?mnf.frontend.site.sort_by_key(data__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))):data__$1);
var iter__5480__auto__ = (function mnf$frontend$site$data_table_$_iter__12023(s__12024){
return (new cljs.core.LazySeq(null,(function (){
var s__12024__$1 = s__12024;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12024__$1);
if(temp__5804__auto__){
var s__12024__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12024__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12024__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12026 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12025 = (0);
while(true){
if((i__12025 < size__5479__auto__)){
var row = cljs.core._nth(c__5478__auto__,i__12025);
cljs.core.chunk_append(b__12026,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = ((function (i__12025,row,c__5478__auto__,size__5479__auto__,b__12026,s__12024__$2,temp__5804__auto__,sorted_data,state){
return (function mnf$frontend$site$data_table_$_iter__12023_$_iter__12027(s__12028){
return (new cljs.core.LazySeq(null,((function (i__12025,row,c__5478__auto__,size__5479__auto__,b__12026,s__12024__$2,temp__5804__auto__,sorted_data,state){
return (function (){
var s__12028__$1 = s__12028;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12028__$1);
if(temp__5804__auto____$1){
var s__12028__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12028__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__12028__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__12030 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__12029 = (0);
while(true){
if((i__12029 < size__5479__auto____$1)){
var header = cljs.core._nth(c__5478__auto____$1,i__12029);
cljs.core.chunk_append(b__12030,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)));

var G__12037 = (i__12029 + (1));
i__12029 = G__12037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12030),mnf$frontend$site$data_table_$_iter__12023_$_iter__12027(cljs.core.chunk_rest(s__12028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12030),null);
}
} else {
var header = cljs.core.first(s__12028__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)),mnf$frontend$site$data_table_$_iter__12023_$_iter__12027(cljs.core.rest(s__12028__$2)));
}
} else {
return null;
}
break;
}
});})(i__12025,row,c__5478__auto__,size__5479__auto__,b__12026,s__12024__$2,temp__5804__auto__,sorted_data,state))
,null,null));
});})(i__12025,row,c__5478__auto__,size__5479__auto__,b__12026,s__12024__$2,temp__5804__auto__,sorted_data,state))
;
return iter__5480__auto__(cljs.core.keys(cljs.core.first(data__$1)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)));

var G__12038 = (i__12025 + (1));
i__12025 = G__12038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12026),mnf$frontend$site$data_table_$_iter__12023(cljs.core.chunk_rest(s__12024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12026),null);
}
} else {
var row = cljs.core.first(s__12024__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = ((function (row,s__12024__$2,temp__5804__auto__,sorted_data,state){
return (function mnf$frontend$site$data_table_$_iter__12023_$_iter__12031(s__12032){
return (new cljs.core.LazySeq(null,(function (){
var s__12032__$1 = s__12032;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12032__$1);
if(temp__5804__auto____$1){
var s__12032__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12032__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12032__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12034 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12033 = (0);
while(true){
if((i__12033 < size__5479__auto__)){
var header = cljs.core._nth(c__5478__auto__,i__12033);
cljs.core.chunk_append(b__12034,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)));

var G__12039 = (i__12033 + (1));
i__12033 = G__12039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12034),mnf$frontend$site$data_table_$_iter__12023_$_iter__12031(cljs.core.chunk_rest(s__12032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12034),null);
}
} else {
var header = cljs.core.first(s__12032__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)),mnf$frontend$site$data_table_$_iter__12023_$_iter__12031(cljs.core.rest(s__12032__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__12024__$2,temp__5804__auto__,sorted_data,state))
;
return iter__5480__auto__(cljs.core.keys(cljs.core.first(data__$1)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)),mnf$frontend$site$data_table_$_iter__12023(cljs.core.rest(s__12024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(sorted_data);
})())], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No data available"], null);
}
});
});
mnf.frontend.site.team_sheet = (function mnf$frontend$site$team_sheet(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Team Sheet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Coming soon"], null)], null);
});
mnf.frontend.site.match_data = (function mnf$frontend$site$match_data(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Match Data"], null),(function (){var data = new cljs.core.Keyword(null,"match-data","match-data",151938970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf.frontend.site.app_state));
if((data == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading match data..."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.data_table,data], null);
}
})()], null);
});
mnf.frontend.site.player_data = (function mnf$frontend$site$player_data(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Player Data"], null),(function (){var data = new cljs.core.Keyword(null,"player-data","player-data",77754120).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf.frontend.site.app_state));
if((data == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading player stats..."], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.data_table,data], null);
}
})()], null);
});
mnf.frontend.site.team_builder = (function mnf$frontend$site$team_builder(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Team Builder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Coming soon"], null)], null);
});
mnf.frontend.site.nav_link = (function mnf$frontend$site$nav_link(id,label,active_tab){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,id))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf.frontend.site.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),id);
})], null),label], null);
});
mnf.frontend.site.navigation = (function mnf$frontend$site$navigation(){
var active_tab = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf.frontend.site.app_state));
var menu_open_QMARK_ = new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf.frontend.site.nav_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-brand","div.nav-brand",2139201221),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.hamburger","button.hamburger",1646581668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf.frontend.site.nav_state,cljs.core.update,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hamburger-box","span.hamburger-box",-43903964),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hamburger-inner","span.hamburger-inner",-740803414)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-menu","div.nav-menu",2129544906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(menu_open_QMARK_)?"is-open":null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-left","div.nav-left",-1707614279),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.nav_link,"team-sheet","Team Sheet",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.nav_link,"match-data","Match Data",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.nav_link,"player-data","Player Data",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.nav_link,"team-builder","Team Builder",active_tab], null)], null)], null)], null);
});
mnf.frontend.site.main_content = (function mnf$frontend$site$main_content(){
var active_tab = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf.frontend.site.app_state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(function (){var G__12035 = active_tab;
switch (G__12035) {
case "team-sheet":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.team_sheet], null);

break;
case "match-data":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.match_data], null);

break;
case "player-data":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.player_data], null);

break;
case "team-builder":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.team_builder], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.team_sheet], null);

}
})()], null);
});
mnf.frontend.site.app = (function mnf$frontend$site$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.navigation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.main_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),"Tom Brooksbank \u00A9 2024"], null)], null);
});
mnf.frontend.site.init_BANG_ = (function mnf$frontend$site$init_BANG_(){
mnf.frontend.site.load_data_BANG_();

if(cljs.core.truth_(cljs.core.deref(mnf.frontend.site.root_atom))){
} else {
cljs.core.reset_BANG_(mnf.frontend.site.root_atom,reagent.dom.client.create_root(document.getElementById("app")));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mnf.frontend.site.root_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf.frontend.site.app], null));
});
if((typeof mnf !== 'undefined') && (typeof mnf.frontend !== 'undefined') && (typeof mnf.frontend.site !== 'undefined') && (typeof mnf.frontend.site.start !== 'undefined')){
} else {
mnf.frontend.site.start = mnf.frontend.site.init_BANG_();
}

//# sourceMappingURL=mnf.frontend.site.js.map
