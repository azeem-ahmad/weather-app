(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),o=t.n(c),m=(t(9),t(1)),i="ac2ea5c7be8a94a31d26427fcaf4b9c6",l="https://api.openweathermap.org/data/2.5/";var s=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)({}),s=Object(m.a)(o,2),p=s[0],u=s[1];return r.a.createElement("div",{className:"undefined"!=typeof p.main?p.main.temp<=0?"app cold":p.main.temp>0&&p.main.temp<26?"app default":p.main.temp>26&&p.main.temp<40?"app warm":p.main.temp>40?"app very-warm":"app":"app"},r.a.createElement("main",null,r.a.createElement("div",{className:"inner-wrapper"},r.a.createElement("h3",{className:"title"},"Weather App"),r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(t,"&units=metric&APPID=").concat(i)).then((function(e){return e.json()})).then((function(e){u(e),c(""),console.log(e)}))}})),"undefined"!=typeof p.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},p.name,", ",p.sys.country),r.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(r)}(new Date))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(p.main.temp),"\xb0c"),r.a.createElement("div",{className:"weather"},p.weather[0].main))):""),r.a.createElement("div",{class:"api-used-section"},r.a.createElement("p",null,"API Used:",r.a.createElement("a",{href:"https://openweathermap.org/api",target:"_blank",rel:"noopener noreferrer"},"https://openweathermap.org/api")),r.a.createElement("p",{class:"made-with"},"Made with ",r.a.createElement("i",{class:"fa fa-heart"})," By <Azeem />"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.787b63b7.chunk.js.map