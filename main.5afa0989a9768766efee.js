(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,e){},QfWi:function(t,n,e){"use strict";e.r(n);e("L1EO");var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")},r="null";a.startBtn.addEventListener("click",(function(){r=setInterval((function(){var t,n;r&&a.startBtn.setAttribute("disabled",!0),a.body.style.background=o[(t=0,n=o.length-1,Math.floor(Math.random()*(n-t+1)+t))]}),500)})),a.stopBtn.addEventListener("click",(function(){clearInterval(r),a.startBtn.removeAttribute("disabled")}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.5afa0989a9768766efee.js.map