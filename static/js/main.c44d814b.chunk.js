(this["webpackJsonployverse-tools"]=this["webpackJsonployverse-tools"]||[]).push([[0],{11:function(e,t,r){},13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(4),c=r.n(o),s=(r(11),r(1)),l=r.n(s),u=r(5),i=r(2);var p=function(e){var t=e.columns,r=e.data,n=Object(i.b)({columns:t,data:r},i.a),o=n.getTableProps,c=n.getTableBodyProps,s=n.headerGroups,l=n.rows,u=n.prepareRow;return a.a.createElement("table",o(),a.a.createElement("thead",null,s.map((function(e){return a.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return a.a.createElement("th",e.getHeaderProps(e.getSortByToggleProps()),e.render("Header"),a.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""))})))}))),a.a.createElement("tbody",c(),l.map((function(e,t){return u(e),a.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return a.a.createElement("td",e.getCellProps(),e.render("Cell"))})))}))))};r(13);function m(e){return new Promise((function(t,r){var n=e.files[0],a=new FileReader;a.readAsText(n,"UTF-8"),a.onload=function(e){var r=function(e){for(var t=e.split("\n"),r=[],n=t[0].split(","),a=1;a<t.length;a++){for(var o={},c=t[a].split(","),s=0;s<n.length;s++)o[n[s]]=c[s];r.push(o)}return r}(e.target.result).filter((function(e){return"Y"===e["Disponibles para la venta [Smile]"]})).map((function(e){return{name:e.Nombre,qty:parseInt(e["En inventario [Smile]"]),supplier:e.Proveedor}})).sort((function(e,t){return e.qty-t.qty}));return t(r)},a.onerror=function(){r("Error")}}))}var d=function(){var e=a.a.useMemo((function(){return[{Header:"Nombre",accessor:"name"},{Header:"Cantidad",accessor:"qty"},{Header:"Proveedor",accessor:"supplier"}]}),[]),t=Object(n.useState)([]),r=Object(u.a)(t,2),o=r[0],c=r[1];return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Productos con inventario bajo"),a.a.createElement("input",{type:"file",onChange:function(e){var t,r;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.currentTarget,n.next=3,l.a.awrap(m(t));case 3:r=n.sent,c(r);case 5:case"end":return n.stop()}}))}}),a.a.createElement("hr",null),o.length?a.a.createElement(p,{columns:e,data:o}):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,r){e.exports=r(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.c44d814b.chunk.js.map