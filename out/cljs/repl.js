// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1007){
var map__1008 = p__1007;
var map__1008__$1 = (((((!((map__1008 == null))))?(((((map__1008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1008):map__1008);
var m = map__1008__$1;
var n = cljs.core.get.call(null,map__1008__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1008__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4689__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4689__auto__)){
return or__4689__auto__;
} else {
return [(function (){var temp__5535__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5535__auto__)){
var ns = temp__5535__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1010_1042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1011_1043 = null;
var count__1012_1044 = (0);
var i__1013_1045 = (0);
while(true){
if((i__1013_1045 < count__1012_1044)){
var f_1046 = cljs.core._nth.call(null,chunk__1011_1043,i__1013_1045);
cljs.core.println.call(null,"  ",f_1046);


var G__1047 = seq__1010_1042;
var G__1048 = chunk__1011_1043;
var G__1049 = count__1012_1044;
var G__1050 = (i__1013_1045 + (1));
seq__1010_1042 = G__1047;
chunk__1011_1043 = G__1048;
count__1012_1044 = G__1049;
i__1013_1045 = G__1050;
continue;
} else {
var temp__5535__auto___1051 = cljs.core.seq.call(null,seq__1010_1042);
if(temp__5535__auto___1051){
var seq__1010_1052__$1 = temp__5535__auto___1051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1010_1052__$1)){
var c__5215__auto___1053 = cljs.core.chunk_first.call(null,seq__1010_1052__$1);
var G__1054 = cljs.core.chunk_rest.call(null,seq__1010_1052__$1);
var G__1055 = c__5215__auto___1053;
var G__1056 = cljs.core.count.call(null,c__5215__auto___1053);
var G__1057 = (0);
seq__1010_1042 = G__1054;
chunk__1011_1043 = G__1055;
count__1012_1044 = G__1056;
i__1013_1045 = G__1057;
continue;
} else {
var f_1058 = cljs.core.first.call(null,seq__1010_1052__$1);
cljs.core.println.call(null,"  ",f_1058);


var G__1059 = cljs.core.next.call(null,seq__1010_1052__$1);
var G__1060 = null;
var G__1061 = (0);
var G__1062 = (0);
seq__1010_1042 = G__1059;
chunk__1011_1043 = G__1060;
count__1012_1044 = G__1061;
i__1013_1045 = G__1062;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1063 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4689__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4689__auto__)){
return or__4689__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1063);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1063)))?cljs.core.second.call(null,arglists_1063):arglists_1063));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1014_1064 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1015_1065 = null;
var count__1016_1066 = (0);
var i__1017_1067 = (0);
while(true){
if((i__1017_1067 < count__1016_1066)){
var vec__1028_1068 = cljs.core._nth.call(null,chunk__1015_1065,i__1017_1067);
var name_1069 = cljs.core.nth.call(null,vec__1028_1068,(0),null);
var map__1031_1070 = cljs.core.nth.call(null,vec__1028_1068,(1),null);
var map__1031_1071__$1 = (((((!((map__1031_1070 == null))))?(((((map__1031_1070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1031_1070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1031_1070):map__1031_1070);
var doc_1072 = cljs.core.get.call(null,map__1031_1071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1073 = cljs.core.get.call(null,map__1031_1071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1069);

cljs.core.println.call(null," ",arglists_1073);

if(cljs.core.truth_(doc_1072)){
cljs.core.println.call(null," ",doc_1072);
} else {
}


var G__1074 = seq__1014_1064;
var G__1075 = chunk__1015_1065;
var G__1076 = count__1016_1066;
var G__1077 = (i__1017_1067 + (1));
seq__1014_1064 = G__1074;
chunk__1015_1065 = G__1075;
count__1016_1066 = G__1076;
i__1017_1067 = G__1077;
continue;
} else {
var temp__5535__auto___1078 = cljs.core.seq.call(null,seq__1014_1064);
if(temp__5535__auto___1078){
var seq__1014_1079__$1 = temp__5535__auto___1078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1014_1079__$1)){
var c__5215__auto___1080 = cljs.core.chunk_first.call(null,seq__1014_1079__$1);
var G__1081 = cljs.core.chunk_rest.call(null,seq__1014_1079__$1);
var G__1082 = c__5215__auto___1080;
var G__1083 = cljs.core.count.call(null,c__5215__auto___1080);
var G__1084 = (0);
seq__1014_1064 = G__1081;
chunk__1015_1065 = G__1082;
count__1016_1066 = G__1083;
i__1017_1067 = G__1084;
continue;
} else {
var vec__1033_1085 = cljs.core.first.call(null,seq__1014_1079__$1);
var name_1086 = cljs.core.nth.call(null,vec__1033_1085,(0),null);
var map__1036_1087 = cljs.core.nth.call(null,vec__1033_1085,(1),null);
var map__1036_1088__$1 = (((((!((map__1036_1087 == null))))?(((((map__1036_1087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1036_1087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1036_1087):map__1036_1087);
var doc_1089 = cljs.core.get.call(null,map__1036_1088__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1090 = cljs.core.get.call(null,map__1036_1088__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1086);

cljs.core.println.call(null," ",arglists_1090);

if(cljs.core.truth_(doc_1089)){
cljs.core.println.call(null," ",doc_1089);
} else {
}


var G__1091 = cljs.core.next.call(null,seq__1014_1079__$1);
var G__1092 = null;
var G__1093 = (0);
var G__1094 = (0);
seq__1014_1064 = G__1091;
chunk__1015_1065 = G__1092;
count__1016_1066 = G__1093;
i__1017_1067 = G__1094;
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
var temp__5535__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5535__auto__)){
var fnspec = temp__5535__auto__;
cljs.core.print.call(null,"Spec");

var seq__1038 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1039 = null;
var count__1040 = (0);
var i__1041 = (0);
while(true){
if((i__1041 < count__1040)){
var role = cljs.core._nth.call(null,chunk__1039,i__1041);
var temp__5535__auto___1095__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5535__auto___1095__$1)){
var spec_1096 = temp__5535__auto___1095__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1096));
} else {
}


var G__1097 = seq__1038;
var G__1098 = chunk__1039;
var G__1099 = count__1040;
var G__1100 = (i__1041 + (1));
seq__1038 = G__1097;
chunk__1039 = G__1098;
count__1040 = G__1099;
i__1041 = G__1100;
continue;
} else {
var temp__5535__auto____$1 = cljs.core.seq.call(null,seq__1038);
if(temp__5535__auto____$1){
var seq__1038__$1 = temp__5535__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1038__$1)){
var c__5215__auto__ = cljs.core.chunk_first.call(null,seq__1038__$1);
var G__1101 = cljs.core.chunk_rest.call(null,seq__1038__$1);
var G__1102 = c__5215__auto__;
var G__1103 = cljs.core.count.call(null,c__5215__auto__);
var G__1104 = (0);
seq__1038 = G__1101;
chunk__1039 = G__1102;
count__1040 = G__1103;
i__1041 = G__1104;
continue;
} else {
var role = cljs.core.first.call(null,seq__1038__$1);
var temp__5535__auto___1105__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5535__auto___1105__$2)){
var spec_1106 = temp__5535__auto___1105__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1106));
} else {
}


var G__1107 = cljs.core.next.call(null,seq__1038__$1);
var G__1108 = null;
var G__1109 = (0);
var G__1110 = (0);
seq__1038 = G__1107;
chunk__1039 = G__1108;
count__1040 = G__1109;
i__1041 = G__1110;
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
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5535__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5535__auto__)){
var msg = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5535__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5535__auto__)){
var ed = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1111 = cljs.core.conj.call(null,via,t);
var G__1112 = cljs.core.ex_cause.call(null,t);
via = G__1111;
t = G__1112;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5535__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5535__auto__)){
var root_msg = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5535__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5535__auto__)){
var data = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5535__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5535__auto__)){
var phase = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__1115 = datafied_throwable;
var map__1115__$1 = (((((!((map__1115 == null))))?(((((map__1115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1115):map__1115);
var via = cljs.core.get.call(null,map__1115__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1115__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1115__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1116 = cljs.core.last.call(null,via);
var map__1116__$1 = (((((!((map__1116 == null))))?(((((map__1116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1116):map__1116);
var type = cljs.core.get.call(null,map__1116__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1116__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1116__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1117 = data;
var map__1117__$1 = (((((!((map__1117 == null))))?(((((map__1117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1117):map__1117);
var problems = cljs.core.get.call(null,map__1117__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1117__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1117__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1118 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1118__$1 = (((((!((map__1118 == null))))?(((((map__1118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1118):map__1118);
var top_data = map__1118__$1;
var source = cljs.core.get.call(null,map__1118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1123 = phase;
var G__1123__$1 = (((G__1123 instanceof cljs.core.Keyword))?G__1123.fqn:null);
switch (G__1123__$1) {
case "read-source":
var map__1124 = data;
var map__1124__$1 = (((((!((map__1124 == null))))?(((((map__1124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1124):map__1124);
var line = cljs.core.get.call(null,map__1124__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1124__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1126 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1126__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1126,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1126);
var G__1126__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1126__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1126__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1126__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1127 = top_data;
var G__1127__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1127,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1127);
var G__1127__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1127__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1127__$1);
var G__1127__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1127__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1127__$2);
var G__1127__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1127__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1127__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1127__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1127__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1128 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1128,(0),null);
var method = cljs.core.nth.call(null,vec__1128,(1),null);
var file = cljs.core.nth.call(null,vec__1128,(2),null);
var line = cljs.core.nth.call(null,vec__1128,(3),null);
var G__1131 = top_data;
var G__1131__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1131,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1131);
var G__1131__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1131__$1);
var G__1131__$3 = (cljs.core.truth_((function (){var and__4678__auto__ = source__$1;
if(cljs.core.truth_(and__4678__auto__)){
return method;
} else {
return and__4678__auto__;
}
})())?cljs.core.assoc.call(null,G__1131__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1131__$2);
var G__1131__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1131__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1131__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1131__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1131__$4;
}

break;
case "execution":
var vec__1132 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1132,(0),null);
var method = cljs.core.nth.call(null,vec__1132,(1),null);
var file = cljs.core.nth.call(null,vec__1132,(2),null);
var line = cljs.core.nth.call(null,vec__1132,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1114_SHARP_){
var or__4689__auto__ = (p1__1114_SHARP_ == null);
if(or__4689__auto__){
return or__4689__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1114_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4689__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4689__auto__)){
return or__4689__auto__;
} else {
return line;
}
})();
var G__1135 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1135__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1135,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1135);
var G__1135__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1135__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1135__$1);
var G__1135__$3 = (cljs.core.truth_((function (){var or__4689__auto__ = fn;
if(cljs.core.truth_(or__4689__auto__)){
return or__4689__auto__;
} else {
var and__4678__auto__ = source__$1;
if(cljs.core.truth_(and__4678__auto__)){
return method;
} else {
return and__4678__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1135__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4689__auto__ = fn;
if(cljs.core.truth_(or__4689__auto__)){
return or__4689__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1135__$2);
var G__1135__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1135__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1135__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1135__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1135__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1123__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1139){
var map__1140 = p__1139;
var map__1140__$1 = (((((!((map__1140 == null))))?(((((map__1140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1140):map__1140);
var triage_data = map__1140__$1;
var phase = cljs.core.get.call(null,map__1140__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1140__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1140__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1140__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1140__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1140__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1140__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1140__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4689__auto__ = source;
if(cljs.core.truth_(or__4689__auto__)){
return or__4689__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4689__auto__ = line;
if(cljs.core.truth_(or__4689__auto__)){
return or__4689__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4689__auto__ = class$;
if(cljs.core.truth_(or__4689__auto__)){
return or__4689__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1142 = phase;
var G__1142__$1 = (((G__1142 instanceof cljs.core.Keyword))?G__1142.fqn:null);
switch (G__1142__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5332__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1143_1152 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1144_1153 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1145_1154 = true;
var _STAR_print_fn_STAR__temp_val__1146_1155 = (function (x__5333__auto__){
return sb__5332__auto__.append(x__5333__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1145_1154);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1146_1155);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1137_SHARP_){
return cljs.core.dissoc.call(null,p1__1137_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1144_1153);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1143_1152);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5332__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5332__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1147_1156 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1148_1157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1149_1158 = true;
var _STAR_print_fn_STAR__temp_val__1150_1159 = (function (x__5333__auto__){
return sb__5332__auto__.append(x__5333__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1149_1158);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1150_1159);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1138_SHARP_){
return cljs.core.dissoc.call(null,p1__1138_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1148_1157);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1147_1156);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5332__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1142__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
