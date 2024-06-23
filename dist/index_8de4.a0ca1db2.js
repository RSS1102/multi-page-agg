import * as __farm_external_module_assert from "assert";import * as __farm_external_module_child_process from "child_process";import * as __farm_external_module_crypto from "crypto";import * as __farm_external_module_events from "events";import * as __farm_external_module_fs from "fs";import * as __farm_external_module_http from "http";import * as __farm_external_module_https from "https";import * as __farm_external_module_net from "net";import * as __farm_external_module_os from "os";import * as __farm_external_module_path from "path";import * as __farm_external_module_tls from "tls";import * as __farm_external_module_util from "util";(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.setExternalModules({"assert": {...__farm_external_module_assert,__esModule:true},"child_process": {...__farm_external_module_child_process,__esModule:true},"crypto": {...__farm_external_module_crypto,__esModule:true},"events": {...__farm_external_module_events,__esModule:true},"fs": {...__farm_external_module_fs,__esModule:true},"http": {...__farm_external_module_http,__esModule:true},"https": {...__farm_external_module_https,__esModule:true},"net": {...__farm_external_module_net,__esModule:true},"os": {...__farm_external_module_os,__esModule:true},"path": {...__farm_external_module_path,__esModule:true},"tls": {...__farm_external_module_tls,__esModule:true},"util": {...__farm_external_module_util,__esModule:true}});(function(_){for(var r in _){_[r].__farm_resource_pot__='index_8de4.js';(globalThis || window || global)['650c7debb79582d1916d16c65fb3085a'].__farm_module_system__.register(r,_[r])}})({"0d2d8a82":function  (e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o;}});let n=r("@swc/helpers/_/_interop_require_default")._(r("abe6abb1")),u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).substr(1));let o=function(e,t=0){let r=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!(0,n.default)(r))throw TypeError("Stringified UUID is invalid");return r;};},"1a0c9f9f":function  (e,t,n,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]});}(t,{NIL:function(){return o.default;},parse:function(){return s.default;},stringify:function(){return b.default;},v1:function(){return f.default;},v3:function(){return d.default;},v4:function(){return i.default;},v5:function(){return c.default;},validate:function(){return _.default;},version:function(){return l.default;}});let r=n("@swc/helpers/_/_interop_require_default"),f=r._(n("ab7ef9ab")),d=r._(n("fede2a8c")),i=r._(n("93bdc2c7")),c=r._(n("f7709018")),o=r._(n("bbb6e588")),l=r._(n("e5dbdc5c")),_=r._(n("abe6abb1")),b=r._(n("0d2d8a82")),s=r._(n("4d4d6885"));},"231ab284":function  (r,t,n,o){r.exports=function(r,t){for(var n=[],o=0;o<r.length;o++){var p=t(r[o],o);e(p)?n.push.apply(n,p):n.push(p);}return n;};var e=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r);};},"2bcaebe5":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c;}});let l=n("@swc/helpers/_/_interop_require_default")._(n("crypto")),u=new Uint8Array(256),i=u.length;function c(){return i>u.length-16&&(l.default.randomFillSync(u),i=0),u.slice(i,i+=16);}},"4d4d6885":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l;}});let i=r("@swc/helpers/_/_interop_require_default")._(r("abe6abb1")),l=function(e){let t;if(!(0,i.default)(e))throw TypeError("Invalid UUID");let r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r;};},"57495705":function  (e,t,o,r){"use strict";o("net",!0);var s,n=o("tls",!0),c=o("http",!0),u=o("https",!0),i=o("events",!0);o("assert",!0);var l=o("util",!0);function p(e){var t=this;t.options=e||{},t.proxyOptions=t.options.proxy||{},t.maxSockets=t.options.maxSockets||c.Agent.defaultMaxSockets,t.requests=[],t.sockets=[],t.on("free",function(e,o,r,s){for(var n=d(o,r,s),c=0,u=t.requests.length;c<u;++c){var i=t.requests[c];if(i.host===n.host&&i.port===n.port){t.requests.splice(c,1),i.request.onSocket(e);return;}}e.destroy(),t.removeSocket(e);});}function f(e,t){var o=this;p.prototype.createSocket.call(o,e,function(r){var s=e.request.getHeader("host"),c=h({},o.options,{socket:r,servername:s?s.replace(/:.*$/,""):e.host}),u=n.connect(0,c);o.sockets[o.sockets.indexOf(r)]=u,t(u);});}function d(e,t,o){return"string"==typeof e?{host:e,port:t,localAddress:o}:e;}function h(e){for(var t=1,o=arguments.length;t<o;++t){var r=arguments[t];if("object"==typeof r)for(var s=Object.keys(r),n=0,c=s.length;n<c;++n){var u=s[n];void 0!==r[u]&&(e[u]=r[u]);}}return e;}t.httpOverHttp=function(e){var t=new p(e);return t.request=c.request,t;},t.httpsOverHttp=function(e){var t=new p(e);return t.request=c.request,t.createSocket=f,t.defaultPort=443,t;},t.httpOverHttps=function(e){var t=new p(e);return t.request=u.request,t;},t.httpsOverHttps=function(e){var t=new p(e);return t.request=u.request,t.createSocket=f,t.defaultPort=443,t;},l.inherits(p,i.EventEmitter),p.prototype.addRequest=function(e,t,o,r){var s=this,n=h({request:e},s.options,d(t,o,r));if(s.sockets.length>=this.maxSockets){s.requests.push(n);return;}s.createSocket(n,function(t){function o(){s.emit("free",t,n);}function r(e){s.removeSocket(t),t.removeListener("free",o),t.removeListener("close",r),t.removeListener("agentRemove",r);}t.on("free",o),t.on("close",r),t.on("agentRemove",r),e.onSocket(t);});},p.prototype.createSocket=function(e,t){var o=this,r={};o.sockets.push(r);var n=h({},o.proxyOptions,{method:"CONNECT",path:e.host+":"+e.port,agent:!1,headers:{host:e.host+":"+e.port}});e.localAddress&&(n.localAddress=e.localAddress),n.proxyAuth&&(n.headers=n.headers||{},n.headers["Proxy-Authorization"]="Basic "+new Buffer(n.proxyAuth).toString("base64")),s("making CONNECT request");var c=o.request(n);function u(n,u,i){if(c.removeAllListeners(),u.removeAllListeners(),200!==n.statusCode){s("tunneling socket could not be established, statusCode=%d",n.statusCode),u.destroy();var l=Error("tunneling socket could not be established, statusCode="+n.statusCode);l.code="ECONNRESET",e.request.emit("error",l),o.removeSocket(r);return;}if(i.length>0){s("got illegal response body from proxy"),u.destroy();var l=Error("got illegal response body from proxy");l.code="ECONNRESET",e.request.emit("error",l),o.removeSocket(r);return;}return s("tunneling connection has established"),o.sockets[o.sockets.indexOf(r)]=u,t(u);}c.useChunkedEncodingByDefault=!1,c.once("response",function(e){e.upgrade=!0;}),c.once("upgrade",function(e,t,o){process.nextTick(function(){u(e,t,o);});}),c.once("connect",u),c.once("error",function(t){c.removeAllListeners(),s("tunneling socket could not be established, cause=%s\n",t.message,t.stack);var n=Error("tunneling socket could not be established, cause="+t.message);n.code="ECONNRESET",e.request.emit("error",n),o.removeSocket(r);}),c.end();},p.prototype.removeSocket=function(e){var t=this.sockets.indexOf(e);if(-1!==t){this.sockets.splice(t,1);var o=this.requests.shift();o&&this.createSocket(o,function(e){o.request.onSocket(e);});}},process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)?s=function(){var e=Array.prototype.slice.call(arguments);"string"==typeof e[0]?e[0]="TUNNEL: "+e[0]:e.unshift("TUNNEL:"),console.error.apply(console,e);}:s=function(){},t.debug=s;},"57cbde83":function  (e,r,t,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n;}});let f=t("@swc/helpers/_/_interop_require_default")._(t("crypto")),n=function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),f.default.createHash("md5").update(e).digest();};},"5dbe4574":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]});}(t,{DNS:function(){return c;},URL:function(){return i;},default:function(){return d;}});let u=n("@swc/helpers/_/_interop_require_default"),f=u._(n("0d2d8a82")),o=u._(n("4d4d6885")),c="6ba7b810-9dad-11d1-80b4-00c04fd430c8",i="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function d(e,t,n){function r(e,r,u,c){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));let t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t;}(e)),"string"==typeof r&&(r=(0,o.default)(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let i=new Uint8Array(16+e.length);if(i.set(r),i.set(e,r.length),(i=n(i))[6]=15&i[6]|t,i[8]=63&i[8]|128,u){c=c||0;for(let e=0;e<16;++e)u[c+e]=i[e];return u;}return(0,f.default)(i);}try{r.name=e;}catch(e){}return r.DNS=c,r.URL=i,r;}},"5e98d953":function  (n,o,t,c){n.exports=t("57495705",!0);},"729bbbea":function  (e,r,t,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n;}});let f=t("@swc/helpers/_/_interop_require_default")._(t("crypto")),n=function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),f.default.createHash("sha1").update(e).digest();};},"93bdc2c7":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d;}});let u=r("@swc/helpers/_/_interop_require_default"),f=u._(r("2bcaebe5")),l=u._(r("0d2d8a82")),d=function(e,t,r){let n=(e=e||{}).random||(e.rng||f.default)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t;}return(0,l.default)(n);};},"ab7ef9ab":function  (e,t,l,n){"use strict";let r,o;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f;}});let u=l("@swc/helpers/_/_interop_require_default"),c=u._(l("2bcaebe5")),s=u._(l("0d2d8a82")),d=0,i=0,f=function(e,t,l){let n=t&&l||0,u=t||Array(16),f=(e=e||{}).node||r,_=void 0!==e.clockseq?e.clockseq:o;if(null==f||null==_){let t=e.random||(e.rng||c.default)();null==f&&(f=r=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==_&&(_=o=(t[6]<<8|t[7])&16383);}let v=void 0!==e.msecs?e.msecs:Date.now(),b=void 0!==e.nsecs?e.nsecs:i+1,m=v-d+(b-i)/1e4;if(m<0&&void 0===e.clockseq&&(_=_+1&16383),(m<0||v>d)&&void 0===e.nsecs&&(b=0),b>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");d=v,i=b,o=_;let p=((268435455&(v+=122192928e5))*1e4+b)%4294967296;u[n++]=p>>>24&255,u[n++]=p>>>16&255,u[n++]=p>>>8&255,u[n++]=255&p;let q=v/4294967296*1e4&268435455;u[n++]=q>>>8&255,u[n++]=255&q,u[n++]=q>>>24&15|16,u[n++]=q>>>16&255,u[n++]=_>>>8|128,u[n++]=255&_;for(let e=0;e<6;++e)u[n+e]=f[e];return t||(0,s.default)(u);};},"abe6abb1":function  (e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f;}});let u=r("@swc/helpers/_/_interop_require_default")._(r("c81834e5")),f=function(e){return"string"==typeof e&&u.default.test(e);};},"bbb6e588":function  (e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u;}});let u="00000000-0000-0000-0000-000000000000";},"c81834e5":function  (e,t,f,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r;}});let r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;},"e5dbdc5c":function  (e,r,t,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i;}});let u=t("@swc/helpers/_/_interop_require_default")._(t("abe6abb1")),i=function(e){if(!(0,u.default)(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16);};},"ee33bb61":function  (t,n,r,e){var i=r("231ab284",!0),o=r("f5bb2d95",!0);t.exports=function(t){return t?("{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2)),(function t(n,r){var e=[],s=o("{","}",n);if(!s||/\$$/.test(s.pre))return[n];var p=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),l=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),f=p||l,d=s.body.indexOf(",")>=0;if(!f&&!d)return s.post.match(/,.*\}/)?t(n=s.pre+"{"+s.body+u+s.post):[n];if(f)y=s.body.split(/\.\./);else if(1===(y=function t(n){if(!n)return[""];var r=[],e=o("{","}",n);if(!e)return n.split(",");var i=e.pre,s=e.body,p=e.post,u=i.split(",");u[u.length-1]+="{"+s+"}";var l=t(p);return p.length&&(u[u.length-1]+=l.shift(),u.push.apply(u,l)),r.push.apply(r,u),r;}(s.body)).length&&1===(y=t(y[0],!1).map(v)).length){var m=s.post.length?t(s.post,!1):[""];return m.map(function(t){return s.pre+y[0]+t;});}var j=s.pre,m=s.post.length?t(s.post,!1):[""];if(f){var y,M,A,C=h(y[0]),O=h(y[1]),S=Math.max(y[0].length,y[1].length),$=3==y.length?Math.abs(h(y[2])):1,x=g;O<C&&($*=-1,x=b);var E=y.some(c);M=[];for(var I=C;x(I,O);I+=$){if(l)"\\"===(A=String.fromCharCode(I))&&(A="");else if(A=String(I),E){var z=S-A.length;if(z>0){var L=Array(z+1).join("0");A=I<0?"-"+L+A.slice(1):L+A;}}M.push(A);}}else M=i(y,function(n){return t(n,!1);});for(var P=0;P<M.length;P++)for(var Z=0;Z<m.length;Z++){var D=j+M[P]+m[Z];(!r||f||D)&&e.push(D);}return e;})(t.split("\\\\").join(s).split("\\{").join(p).split("\\}").join(u).split("\\,").join(l).split("\\.").join(f),!0).map(d)):[];};var s="\0SLASH"+Math.random()+"\0",p="\0OPEN"+Math.random()+"\0",u="\0CLOSE"+Math.random()+"\0",l="\0COMMA"+Math.random()+"\0",f="\0PERIOD"+Math.random()+"\0";function h(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0);}function d(t){return t.split(s).join("\\").split(p).join("{").split(u).join("}").split(l).join(",").split(f).join(".");}function v(t){return"{"+t+"}";}function c(t){return/^-?0\d/.test(t);}function g(t,n){return t<=n;}function b(t,n){return t>=n;}},"f5bb2d95":function  (n,e,t,r){"use strict";function i(n,e,t){n instanceof RegExp&&(n=f(n,t)),e instanceof RegExp&&(e=f(e,t));var r=o(n,e,t);return r&&{start:r[0],end:r[1],pre:t.slice(0,r[0]),body:t.slice(r[0]+n.length,r[1]),post:t.slice(r[1]+e.length)};}function f(n,e){var t=e.match(n);return t?t[0]:null;}function o(n,e,t){var r,i,f,o,c,s=t.indexOf(n),u=t.indexOf(e,s+1),l=s;if(s>=0&&u>0){if(n===e)return[s,u];for(r=[],f=t.length;l>=0&&!c;)l==s?(r.push(l),s=t.indexOf(n,l+1)):1==r.length?c=[r.pop(),u]:((i=r.pop())<f&&(f=i,o=u),u=t.indexOf(e,l+1)),l=s<u&&s>=0?s:u;r.length&&(c=[f,o]);}return c;}n.exports=i,i.range=o;},"f730662f":function  (e,r,t,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("path",!0),c=t("fs",!0),s=t("os",!0),n=t("child_process",!0);function d(e){if(c.existsSync(e))switch(s.type()){case"Windows_NT":n.execSync('rd /S /Q "'+e+'"');break;case"Darwin":n.execSync('rm -rf "'+e+'"');}}r.copyFolder=function e(r,t,i){void 0===i&&(i={overwrite:!0,deleteTargetFold:!1});var s=i.overwrite,n=void 0===s||s,y=i.deleteTargetFold,l=void 0!==y&&y;if(l&&!n)throw Error("当deleteTargetFold为true时，overwrite只能是true");if(!c.existsSync(r))throw Error(r+"不存在！");l&&c.existsSync(t)&&d(t),c.existsSync(t)||c.mkdirSync(t,{recursive:!0}),c.readdirSync(r,{encoding:"utf8"}).map(function(s){var d=o.resolve(r,s),y=o.resolve(t,s);c.statSync(d).isDirectory()?e(d,y,i):(!c.existsSync(y)||n)&&c.copyFileSync(d,y);});},r.deleteFolder=d;},"f7709018":function  (e,t,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f;}});let l=r("@swc/helpers/_/_interop_require_default"),n=l._(r("5dbe4574")),d=l._(r("729bbbea")),f=(0,n.default)("v5",80,d.default);},"fede2a8c":function  (e,t,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f;}});let d=r("@swc/helpers/_/_interop_require_default"),l=d._(r("5dbe4574")),n=d._(r("57cbde83")),f=(0,l.default)("v3",48,n.default);},});