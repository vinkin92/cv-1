parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#writing"),i=document.querySelector("#main"),e=document.querySelector("#style"),r='/* \n * 你好，我叫vinkin\n * 接下来我演示一下我制作的太极图\n * 首先我要准备一个div\n * div的id为main\n * 设置div的尺寸并且在页面显示\n **/\n #main{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n }\n/* \n * 接下来我把 div 变成一个八卦图\n * 首先，把 div 变成一个圆\n */\n #main{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n }\n /* 然后制作八卦是阴阳形成的一黑一白*/\n #main{\n    background: linear-gradient(90deg, white 0%, white 50%, black 50%, black 100%);\n }\n/* 加两个空心圆 */\n #main::before{\n    content: "";\n    display: block;\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: black;\n    border-radius: 50%;\n    background: radial-gradient(circle, white 0%, white 25%, black 25%, black 100%);\n }\n #main::after{\n    content: "";\n    display: block;\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: white;\n    border-radius: 50%;\n    background: radial-gradient(circle, black 0%, black 28%, white 28%, white 100%, black 100%);\n }\n /* 最后，动起来吧，太极！！！ */\n #main {\n    animation: 5s run linear infinite;\n }',t="",a=0,o=function i(){setTimeout(function(){"\n"===r[a]?t+="<br>":" "===r[a]?t+="&nbsp;":t+=r[a],n.innerHTML=t,e.innerHTML=r.substring(0,a),window.scrollTo(0,99999),n.scrollTo(0,99999),a<r.length-1&&(a+=1,i())},50)};o();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.314e8059.js.map