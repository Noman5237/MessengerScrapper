if (self.CavalryLogger) { CavalryLogger.start_js(["Ey+Vb"]); }

__d("PlatformDialog",["cx","CSS","DOMEvent","DOMEventListener"],(function(a,b,c,d,e,f,g){var h;a=function(){"use strict";a.getInstance=function(){return h};function a(a,c,d){var e=this;h=this;this.$1=a;this.$2=c;this.$3=!1;b("DOMEventListener").add(this.$1,"submit",function(c){if(e.$3){new(b("DOMEvent"))(c).kill();return}e.$3=!0;d&&b("CSS").addClass(a,"_32qa")})}var c=a.prototype;c.getForm=function(){return this.$1};c.getDisplay=function(){return this.$2};c.hasBeenSubmitted=function(){return this.$3};return a}();a.RESPONSE="platform/dialog/response";e.exports=a}),null);
__d("Popup",["isTruthy"],(function(a,b,c,d,e,f){a={open:function(a,c,d,e){var f=[];b("isTruthy")(c)&&f.push("width="+c);b("isTruthy")(d)&&f.push("height="+d);var g=document.body;if(g!=null&&c!=null&&c!==0&&d!=null&&d!==0){var h="screenX"in window?window.screenX:window.screenLeft,i="screenY"in window?window.screenY:window.screenTop,j="outerWidth"in window?window.outerWidth:g.clientWidth;g="outerHeight"in window?window.outerHeight:g.clientHeight-22;h=Math.floor(h+(j-c)/2);j=Math.floor(i+(g-d)/2.5);f.push("left="+h);f.push("top="+j)}f.push("scrollbars");return window.open(a,e!=null&&e!==""?e:"_blank",f.join(","))}};e.exports=a}),null);
__d("PopupWindow",["DOMDimensions","DOMQuery","FlowMigrationUtilsForLegacyFiles","Layer","Popup","getViewportDimensions"],(function(a,b,c,d,e,f){var g=b("FlowMigrationUtilsForLegacyFiles").invariantViolation,h=b("FlowMigrationUtilsForLegacyFiles").isFalsy,i={_opts:{allowShrink:!0,strategy:"vector",timeout:100,widthElement:null},init:function(a){Object.assign(i._opts,a),window.setInterval(i._resizeCheck,i._opts.timeout)},_resizeCheck:function(){var a=b("getViewportDimensions")(),c=i._getDocumentSize(),d=b("Layer").getTopmostLayer();if(d){d=(d=d.getRoot())==null?void 0:d.firstChild;d||g("topMostLayer.getRoot().firstChild is null.");var e=b("DOMDimensions").getElementDimensions(d);e.height+=b("DOMDimensions").measureElementBox(d,"height",!0,!0,!0);e.width+=b("DOMDimensions").measureElementBox(d,"width",!0,!0,!0);c.height=Math.max(c.height,e.height);c.width=Math.max(c.width,e.width)}d=c.height-a.height;e=c.width-a.width;e<0&&h(i._opts.widthElement)&&(e=0);e=e>1?e:0;h(i._opts.allowShrink)&&d<0&&(d=0);if(d||e)try{window.console&&window.console.firebug,window.resizeBy(e,d),e&&window.moveBy(e/-2,0)}catch(a){}},_getDocumentSize:function(){var c=b("DOMDimensions").getDocumentDimensions();if(i._opts.strategy==="offsetHeight"){var d=document.body;if(!d)g("document.body is null.");else{c.height=(d=d.offsetHeight)!=null?d:0}}if(h(i._opts.widthElement)&&typeof i._opts.widthElement==="string"){d=b("DOMQuery").scry(document.body,i._opts.widthElement)[0];d&&(c.width=b("DOMDimensions").getElementDimensions(d).width)}d=a.Dialog;d&&d.max_bottom&&d.max_bottom>c.height&&(c.height=d.max_bottom);return c},open:function(a,c,d,e){return b("Popup").open(a,d,c,e)}};e.exports=i}),null);
__d("FavIcon",["DOM"],(function(a,b,c,d,e,f){var g,h,i;function j(){var a=b("DOM").scry(document.head,"link");a&&a.forEach(function(a){(a.rel.indexOf("icon")!=-1||a.rel.indexOf("shortcut icon")!=-1)&&b("DOM").remove(a)})}a={isToggledResource:function(){return i&&g instanceof HTMLLinkElement&&g.href===i?!0:!1},set:function(a){g&&b("DOM").remove(g),j(),g=b("DOM").create("link",{type:"image/x-icon",rel:"icon",href:a}),b("DOM").appendContent(b("DOM").find(document,"head"),g)},setToggleResources:function(a,b){g=document.querySelector('link[rel*=icon][href*=".ico"]'),g instanceof HTMLLinkElement&&(h=b!=null?b:g.href,i=a)},toggle:function(){if(!g||!i)return;if(g.href===h){this.set(i);return}this.set(h)},toggleSet:function(a){if(!g||!i||!h)return;a=a?i:h;g.href!==a&&this.set(a)}};e.exports=a}),null);
__d("SecureMessageListener",["SecurePostMessage","URI"],(function(a,b,c,d,e,f){"use strict";var g;a=function(){function a(a){this.$3=null,this.$4=!1,this.$1=a}var c=a.prototype;c.setEventHandler=function(a){this.$2=a;return this};c.setSupportedOrigins=function(a){this.$3=a;return this};c.skipOriginCheck_UNSAFE=function(){this.$4=!0;return this};c.beginListening=function(){var a=this;this.$1.addEventListener("message",function(b){a.run(b)});return this};c.stopListening=function(){var a=this;this.$1.removeEventListener("message",function(b){a.run(b)});return this};c.run=function(a){if(this.$3==null||this.$3.length===0){if(!this.$4&&a.origin!==this.$1.location.origin)return}else if(!this.isSupportedOrigin(this.$3,a.origin))return;if(this.$2)if(this.$2.length==1)this.$2(a);else{var c=function(c){b("SecurePostMessage").sendMessageToSpecificOrigin(a.source,c,a.origin)};this.$2(a,c)}};c.isSupportedOrigin=function(a,c){if(!new RegExp("^https://").test(c))return!1;var d=new(g||(g=b("URI")))(c);return a.some(function(a){return d.isSubdomainOfDomain(a)})};return a}();e.exports=a}),null);
__d("RecaptchaV2IFrameContainer",["RecaptchaV2Constants","SecureMessageListener","SecurePostMessage"],(function(a,b,c,d,e,f){var g=b("RecaptchaV2Constants").RecaptchaV2IFrameMessageTypes,h=["facebook.com","messenger.com","workplace.com","instagram.com"],i=16;e.exports={init:function(){var a=0,c=null;window.successCallback=d;b("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(window.parent,{type:g.GET_ORIGIN});window.setInterval(e,250);function d(a){f({type:g.CAPTCHA_SOLVED,token:a})}function e(){var b=document.getElementsByTagName("iframe"),c=0,d=0;for(var e=0;e<b.length;e++){var h=b[e],j=window.getComputedStyle(h);if(j.visibility==="hidden"||j.opacity===0)continue;j=h.getBoundingClientRect();c=Math.min(c,j.top);d=Math.max(d,j.bottom)}h=d-c+i;h!==0&&a!==h&&(a=h,f({type:g.RESIZE_IFRAME,size:{height:a}}))}function f(a,d){var e=(d=d)!=null?d:1;if(c==null){e<=3&&window.setTimeout(function(){f(a,e+1)},250*Math.pow(2,e*e));return}b("SecurePostMessage").sendMessageToSpecificOrigin(window.parent,a,c)}d=new(b("SecureMessageListener"))(window).setEventHandler(function(a){c=a.origin}).setSupportedOrigins(h);d.beginListening()}}}),null);
__d("PlatformVersioning",["invariant","PlatformVersions","StrSet","getObjectValues"],(function(a,b,c,d,e,f,g){var h=new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions)),i=location.pathname;i=i.substring(1,i.indexOf("/",1));var j=h.contains(i)?i:b("PlatformVersions").versions.UNVERSIONED;function k(a,c){if(c==b("PlatformVersions").versions.UNVERSIONED)return a;h.contains(c)||g(0,3769);a=a.indexOf("/")!==0?"/"+a:a;return"/"+c+a}function a(){return b("PlatformVersions").LATEST}function c(a){return a.setPath(k(a.getPath(),j))}function d(a){return k(a,j)}function f(a){return h.contains(a.substring(1,a.indexOf("/",1)))?a.substring(a.indexOf("/",1)):a}i={addVersionToPath:k,getLatestVersion:a,versionAwareURI:c,versionAwarePath:d,getUnversionedPath:f};e.exports=i}),null);