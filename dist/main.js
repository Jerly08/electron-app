(()=>{"use strict";var e={7927:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=r(4157),l=i(r(6928));function u(){new a.BrowserWindow({width:800,height:600,webPreferences:{preload:l.join(__dirname,"preload.js"),nodeIntegration:!0,contextIsolation:!1}}).loadFile(l.join(__dirname,"index.html"))}a.app.on("ready",u),a.app.on("window-all-closed",(()=>{"darwin"!==process.platform&&a.app.quit()})),a.app.on("activate",(()=>{0===a.BrowserWindow.getAllWindows().length&&u()}))},4157:e=>{e.exports=require("electron")},6928:e=>{e.exports=require("path")}},t={};!function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(7927)})();