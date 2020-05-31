if (self.CavalryLogger) { CavalryLogger.start_js(["pCB1k"]); }

__d("RunComet",["ExecutionEnvironment","FBLogger","createCancelableFunction","emptyFunction","recoverableViolation","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g={},h=!1,i=!1,j={remove:b("emptyFunction")};function k(a){a="Run."+a+" called unexpectedly. This is not supported in Comet!";b("FBLogger")("comet_infra").blameToPreviousFrame().blameToPreviousFrame().mustfix(a)}function l(a,c){g.unload==null&&(g.unload=[],g.afterunload=[],b("ExecutionEnvironment").canUseEventListeners&&window.addEventListener("unload",function(){o("unload"),o("afterunload")})),g[a]==null?(b("recoverableViolation")("EVENT_LISTENERS."+a+" wasn't initialized but should have been!","comet_infra"),g[a]=[c]):g[a].push(c)}function m(a){a||b("recoverableViolation")("Undefined event listener handler is not allowed","comet_infra");return b("createCancelableFunction")((a=a)!=null?a:b("emptyFunction"))}function n(a){return{remove:function(){a.cancel()}}}function o(a){var c=g[a]||[];for(var d=0;d<c.length;d++){var e=c[d];try{e()}catch(c){b("FBLogger")("comet_infra").catching(c).mustfix("Hit an error while executing '"+a+"' event listeners.")}}g[a]=[]}function p(a){if(h){a();return n(m(b("emptyFunction")))}a=m(a);g.domcontentloaded==null?(g.domcontentloaded=[a],b("ExecutionEnvironment").canUseEventListeners&&window.addEventListener("DOMContentLoaded",function(){o("domcontentloaded")},!0)):g.domcontentloaded.push(a);return n(a)}function a(a){a=m(a);l("afterunload",a);return n(a)}function c(a){a=m(a);g.load==null?(g.load=[a],b("ExecutionEnvironment").canUseEventListeners&&window.addEventListener("load",function(){o("domcontentloaded"),o("load")})):g.load.push(a);i&&b("setTimeout")(function(){o("domcontentloaded"),o("load")},0);return n(a)}function d(a){a=m(a);l("unload",a);return n(a)}function f(a,c){if(c!==!1){c="Run.onBeforeUnload was called with include_quickling_events as true or undefined, but this is not valid in Comet.";b("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(c)}c=m(a);g.beforeunload==null&&(g.beforeunload=[],b("ExecutionEnvironment").canUseEventListeners&&window.addEventListener("beforeunload",function(a){var c=g.beforeunload||[];for(var c=c,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;var h=void 0;try{h=f()}catch(a){b("FBLogger")("comet_infra").catching(a).mustfix("Hit an error while executing onBeforeUnload event listeners.")}if(h!==void 0){h!=null&&h.body!=null&&(h=h.body);a.preventDefault();a.returnValue=h;return h}}}));g.beforeunload.push(c);return n(c)}function q(a){k("onLeave");return j}function r(a,b){k("onCleanupOrLeave");return j}function s(a){k("removeHook")}function t(){p(function(){h=!0});var a=window.onload;window.onload=function(){a&&a(),i=!0}}b("ExecutionEnvironment").canUseDOM&&t();t={onAfterLoad:c,onAfterUnload:a,onBeforeUnload:f,onCleanupOrLeave:r,onLeave:q,onLoad:p,onUnload:d,__domContentCallback:null,__onloadCallback:null,__removeHook:s};e.exports=t}),null);
__d("VideoPlayerCaptions.react",["React","VideoPlayerHooks","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=b("VideoPlayerHooks").useActiveCaptions,j=b("VideoPlayerHooks").useVideoPlayerCaptionsReservations,k={captionsCenterAlign:{justifyContent:"taijpn5t",textAlign:"oqcyycmt"},captionsContainer:{bottom:"lhzng9rx",display:"j83agx80",justifyContent:"taijpn5t",position:"pmk7jnqg",textAlign:"oqcyycmt",transitionDuration:"pc15xi3s",transitionProperty:"flx89l3n",transitionTimingFunction:"eloblzlw",width:"k4urcfbm"},captionsDefault:{backgroundColor:"d6rk862h",color:"ljqsnud1",fontSize:"a5q79mjw",fontWeight:"ekzkrbhg",lineHeight:"j8p27hm0",marginTop:"kvgmc6g5",marginEnd:"nw5zvenu",marginBottom:"oygrvhab",marginStart:"pbhxczp3",paddingTop:"debrwdc1",paddingEnd:"m4n6deaq",paddingBottom:"pwvavz3a",paddingStart:"n1w2zk5c"},captionsLeftAlign:{justifyContent:"jifvfom9",textAlign:"hzawbc8m"},captionsRightAlign:{justifyContent:"bkfpd7mw",textAlign:"ftzlm3b6"}};function l(a){switch(a){case"center":return k.captionsCenterAlign;case"left":return k.captionsLeftAlign;case"right":return k.captionsRightAlign;default:b("recoverableViolation")("Unsupported captions text alignment: "+a,"comet_video_player")}}var m=h.memo(function(a){var c=a.activeCaptions;a=a.bottomAdjustment;a=a===void 0?0:a;var d=c==null?void 0:c.rows;if(d!=null&&d.length>0){d=d.map(function(a){return a.trim()}).filter(function(a){return!!a});return d.length>0?h.jsx("div",{className:(g||(g=b("stylex")))(k.captionsContainer,l((c=c==null?void 0:(c=c.styles)==null?void 0:c.textAlignment)!=null?c:"center")),style:{transform:"translateY("+-a+"px)"},children:h.jsx("div",{className:(g||(g=b("stylex")))(k.captionsDefault),children:d.map(function(a,b){return h.jsxs("span",{children:[a,h.jsx("br",{})]},b)})})}):null}return null});function a(){var a=i(),b=j(),c=0;b.length>0&&(c=b.filter(function(a){return a.location==="bottom"}).reduce(function(a,b){return a+b.height},0));return h.jsx(m,{activeCaptions:a,bottomAdjustment:c})}e.exports=a}),null);
__d("VideoPlayerCaptionsArea.react",["React","VideoPlayerCaptions.react","VideoPlayerContexts","VideoPlayerHooks"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useReducer,i=c.useState,j=b("VideoPlayerContexts").VideoPlayerCaptionsReservationActionsContext,k=b("VideoPlayerContexts").VideoPlayerCaptionsReservationsContext,l=b("VideoPlayerHooks").useCaptionsVisible;function m(a,b){switch(b.type){case"reserve":return a.concat(b.reservation);case"release":return a.filter(function(a){return a!==b.reservation});default:return a}}function a(a){a=a.children;var c=h(m,[]),d=c[0],e=c[1];c=i({release:function(a){e({reservation:a,type:"release"})},reserve:function(a){e({reservation:a,type:"reserve"});return a}});c=c[0];var f=l();return g.jsx(j.Provider,{value:c,children:g.jsxs(k.Provider,{value:d,children:[f?g.jsx(b("VideoPlayerCaptions.react"),{}):null,a]})})}e.exports=a}),null);
__d("CoreVideoPlayerAutoplayClientUtils",["gkx"],(function(a,b,c,d,e,f){"use strict";function a(a){}function b(a,b,c,d){return a==="PAUSE"&&b==="PAUSE"&&!c&&d}e.exports={componentShouldPause:b,log:a}}),null);
__d("createEvaluateVideoAutoplayPauseOnInvisibleRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){function b(b){b=b.videoPlayerPassiveViewabilityInfo;b=b?b.getCurrent().visiblePercentage:0;b=b>=a;return b?"SKIP":"PAUSE"}b.displayName="evaluateVideoAutoplayPauseOnInvisibleRule:"+a+"%";return b}e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnEndedRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.ended;return a?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnEndedRule";e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnFrozenRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.isFrozenPassive;a=a.getCurrentState();return a?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnFrozenRule";e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnUnmuteRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.muted;a=a.paused;return!b&&!a?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnUnmuteRule";e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnUserPausedRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.paused;a=a.lastPauseReason;return b&&a==="user_initiated"?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnUserPausedRule";e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnUserPlayRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.paused,c=a.muted;a=a.lastPlayReason;return!c&&!b&&a==="user_initiated"?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnUserPlayRule";e.exports=a}),null);
__d("evaluateVideoAutoplayPauseOnAdInvisibleRule",[],(function(a,b,c,d,e,f){"use strict";var g=.5;function a(a){var b=a.adClientToken;a=a.videoPlayerPassiveViewabilityInfo;a=a?a.getCurrent().visiblePercentage:0;a=a>=g;return b!=null&&!a?"PAUSE":"SKIP"}a.displayName="evaluateVideoAutoplayPauseOnAdInvisibleRule";e.exports=a}),null);
__d("MaybeSymbol",[],(function(a,b,c,d,e,f){"use strict";b=a.Symbol?a.Symbol:null;e.exports=b}),null);
__d("URLSearchParams",["MaybeSymbol"],(function(a,b,c,d,e,f){var g=/\+/g,h=/[!\'()*]/g,i=/%20/g,j=b("MaybeSymbol")?b("MaybeSymbol").iterator:null;function k(a){return encodeURIComponent(a).replace(i,"+").replace(h,function(a){return"%"+a.charCodeAt(0).toString(16)})}function l(a){return decodeURIComponent((a=a)!=null?a:"").replace(g," ")}function m(a){var b=a.slice(0),c={next:function(){var a=b.length,c=b.shift();return{done:c===void 0&&a<=0,value:c}}};j&&(c[j]=function(){return c});return c}a=function(){"use strict";function a(a){a===void 0&&(a="");a=a;a[0]==="?"&&(a=a.substr(1));this.$1=a.length?a.split("&").map(function(a){a=a.split("=");var b=a[0];a=a[1];return[l(b),l(a)]}):[]}var b=a.prototype;b.append=function(a,b){this.$1.push([a,String(b)])};b["delete"]=function(a){for(var b=0;b<this.$1.length;b++)this.$1[b][0]===a&&(this.$1.splice(b,1),b--)};b.entries=function(){if(j)return this.$1[j]();var a=this.$1.slice(0);return m(a)};b.get=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return this.$1[b][1];return null};b.getAll=function(a){var b=[];for(var c=0,d=this.$1.length;c<d;c++)this.$1[c][0]===a&&b.push(this.$1[c][1]);return b};b.has=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return!0;return!1};b.keys=function(){var a=this.$1.map(function(a){var b=a[0];a[1];return b});return j?a[j]():m(a)};b.set=function(a,b){var c=!1;for(var d=0;d<this.$1.length;d++)this.$1[d][0]===a&&(c?(this.$1.splice(d,1),d--):(this.$1[d][1]=String(b),c=!0));c||this.$1.push([a,String(b)])};b.toString=function(){return this.$1.map(function(a){var b=a[0];a=a[1];return k(b)+"="+k(a)}).join("&")};b.values=function(){var a=this.$1.map(function(a){a[0];a=a[1];return a});return j?a[j]():m(a)};b[j]=function(){return this.entries()};return a}();e.exports=a}),null);
__d("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule",["URLSearchParams"],(function(a,b,c,d,e,f){"use strict";b={};function a(a){var b=a.adClientToken,c=a.hiddenSubtreePassive,d=a.muted;a=a.isBackgrounded||c.getCurrentState().backgrounded;c=b!=null;return!a||!d?"SKIP":a&&d&&c?"PAUSE":"SKIP"}a.displayName="evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule";e.exports=a}),null);
__d("evaluateVideoAutoplayPauseOnHiddenSubtreeRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.hiddenSubtreePassive;return a.getCurrentState().hidden?"PAUSE":"SKIP"}a.displayName="evaluateVideoAutoplayPauseOnHiddenSubtreeRule";e.exports=a}),null);
__d("evaluateVideoAutoplayPauseOnMutedBackgroundedRule",["URLSearchParams"],(function(a,b,c,d,e,f){"use strict";b={};function a(a){var b=a.hiddenSubtreePassive,c=a.muted;a=a.isBackgrounded||b.getCurrentState().backgrounded;return a?a&&c?"PAUSE":"SKIP":"SKIP"}a.displayName="evaluateVideoAutoplayPauseOnMutedBackgroundedRule";e.exports=a}),null);
__d("VideoPlayerAutoplayRulesProvider",["evaluateVideoAutoplayIgnoreOnEndedRule","evaluateVideoAutoplayIgnoreOnFrozenRule","evaluateVideoAutoplayIgnoreOnUnmuteRule","evaluateVideoAutoplayIgnoreOnUserPausedRule","evaluateVideoAutoplayIgnoreOnUserPlayRule","evaluateVideoAutoplayPauseOnAdInvisibleRule","evaluateVideoAutoplayPauseOnHiddenSubtreeRule","evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule","evaluateVideoAutoplayPauseOnMutedBackgroundedRule","createEvaluateVideoAutoplayPauseOnInvisibleRule","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g,h,i,j,k=[a=b("evaluateVideoAutoplayIgnoreOnFrozenRule"),c=b("evaluateVideoAutoplayPauseOnAdInvisibleRule"),(d=b("createEvaluateVideoAutoplayPauseOnInvisibleRule"))(.5),b("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),f=b("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),g=b("evaluateVideoAutoplayIgnoreOnUnmuteRule"),h=b("evaluateVideoAutoplayIgnoreOnUserPausedRule"),i=b("evaluateVideoAutoplayIgnoreOnUserPlayRule"),j=b("evaluateVideoAutoplayIgnoreOnEndedRule")],l=[a,c,d(.5),b("evaluateVideoAutoplayPauseOnMutedBackgroundedRule"),f,g,h,i,j],m=[a,d(.5),f,h,i,j],n=[a,c,b("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),f,d(.5),i,h,j];d=[a,d(.5),f,g,h,i,j];a=[a,c,b("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),f,g,h,i,j];var o={basic:k,default_feed:l,gif:m,live_producer:d,tournament_hero:a,watch_feed:n};c={provideAutoplayRules:function(a){a=o[a];if(!a)throw b("unrecoverableViolation")("Unknown VideoPlayerAutoplayRulesType passed to VideoPlayerAutoplayRulesProvider","comet_video_player");return a}};e.exports=c}),null);
__d("VideoPlayerAutoplayContexts",["React","VideoPlayerAutoplayRulesProvider","cometUniqueID"],(function(a,b,c,d,e,f){"use strict";c=b("React");d=c.createContext;f=d({autoplayLocalRules:b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("basic"),autoplayScopeID:"null"});c=d(null);function a(){return b("cometUniqueID")()}e.exports={AutoplayApiContext:c,VideoAutoplayLocalScopeContext:f,makeAutoplayScopeID:a}}),null);
__d("VideoAutoplayLocalScopeProvider.react",["React","VideoPlayerAutoplayContexts"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useMemo,i=c.useRef,j=b("VideoPlayerAutoplayContexts").VideoAutoplayLocalScopeContext,k=b("VideoPlayerAutoplayContexts").makeAutoplayScopeID;function a(a){var b=a.autoplayLocalRules,c=a.customAutoplaySelectionFunc,d=k(),e=i(d);d=h(function(){return{autoplayLocalRules:b,autoplayScopeID:e.current,customAutoplaySelectionFunc:c}},[e,c,b]);return g.jsx(j.Provider,{value:d,children:a.children})}e.exports=a}),null);
__d("VideoAutoplayManagerUtils",["DOMRectIsEqual"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){var e=a?a.symbol:null;return a!=null&&e!==c&&a.previousAutoplayDecision===a.currentAutoplayDecision&&b("DOMRectIsEqual")((e=a.previousVideoPlayerViewabilityInfo)==null?void 0:e.positionToViewport,a.videoPlayerViewabilityInfo.positionToViewport)&&!(c==null&&d===1&&((e=a.previousVideoPlayerViewabilityInfo)==null?void 0:e.visiblePercentage)!==a.videoPlayerViewabilityInfo.visiblePercentage)}e.exports={shouldSkipBestAutoplayVideo:a}}),null);
__d("WwwCometVideoAutoplayFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","www_comet_video_autoplay");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("VideoAutoplayManagerX.react",["CometThrottle","React","VideoAutoplayLocalScopeProvider.react","VideoAutoplayManagerUtils","VideoPlayerAutoplayContexts","VideoPlayerAutoplayRulesProvider","WwwCometVideoAutoplayFalcoEvent","clearTimeout","gkx","recoverableViolation","useCometPassiveWindowSize","useCometUniqueID","CoreVideoPlayerAutoplayClientUtils"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useEffect,j=c.useMemo,k=c.useRef,l=b("VideoAutoplayManagerUtils").shouldSkipBestAutoplayVideo,m=b("VideoPlayerAutoplayContexts").AutoplayApiContext,n=750,o=200,p=b("CoreVideoPlayerAutoplayClientUtils").log;function q(a,b){a=a.videoPlayerViewabilityInfo.positionToViewport;if(a){var c=a.height;a=a.y;a=a+c/2;return Math.abs(a-b)}return Number.POSITIVE_INFINITY}function a(a){var c=b("useCometUniqueID")(),d=j(function(){return"MX::"+c},[c]),e=k(d);i(function(){e.current=d},[d]);var f=k(new Map()),r=k(new Map()),s=k(new Map()),t=k(new Map()),u=k(null),v=k(!1),w=b("useCometPassiveWindowSize")(),x=k(w);i(function(){x.current=w},[w]);i(function(){var a=v,c=u,d=f;return function(){a.current=!0;b("clearTimeout")(c.current);var e=d.current.values(),f=e.next();while(f.value!=null){var g=f.value,h=g.longThrottle;g=g.throttle;g.cancel();h.cancel();f.done||(f=e.next())}}},[]);var y=h(function(a){var c;if(v.current)return;var d=a.autoplayScopeID,f=(c=t.current.get(d))!=null?c:null;c=r.current.keys();var g=c.next(),h=[];while(g.value!=null){var i=r.current.get(g.value);if(i){var j=i.autoplayLocalScope,k=i.shouldAutoplayManageVideo;i=i.symbol;if(k&&j.autoplayScopeID===d){k=s.current.get(i);if(k){j=k.currentAutoplayDecision;var m=k.videoPlayerViewabilityInfo;s.current.set(i,{currentAutoplayDecision:j,previousAutoplayDecision:j,previousVideoPlayerViewabilityInfo:m,symbol:i,videoPlayerViewabilityInfo:m});j==="ALLOW"&&h.push(k)}}}g.done||(g=c.next())}i=x.current.getCurrent();var n=i.innerHeight/2;h.sort(function(a,b){var c=Math.floor(q(a,n)),d=Math.floor(q(b,n)),e=a.videoPlayerViewabilityInfo.positionToViewport,f=b.videoPlayerViewabilityInfo.positionToViewport,g=1.05,h=Math.abs(c-d),i=!1;if(e&&f){e=Math.max(e.height,f.height);i=h<=e/2*g}if(!i)if(c<d)return-1;else if(c>d)return 1;f=a.videoPlayerViewabilityInfo.visiblePercentage;h=b.videoPlayerViewabilityInfo.visiblePercentage;e=.01;if(Math.abs(f-h)>e)if(f>h)return-1;else if(f<h)return 1;c=(i=(g=a.videoPlayerViewabilityInfo.positionToViewport)==null?void 0:g.x)!=null?i:0;f=(e=(d=b.videoPlayerViewabilityInfo.positionToViewport)==null?void 0:d.x)!=null?e:0;return f-c});m=0;j=h[m];var o;k=j==null;while(!k)l(j,f,h.length)?(j=h[++m],k=j==null):k=!0;o=j?j.symbol:null;b("clearTimeout")(u.current);u.current=null;a.customAutoplaySelectionFunc&&(o=a.customAutoplaySelectionFunc(h,o,f));if(o!==f){if(f){g=f?r.current.get(f):null;if(g){var w=g.controller;c=w.getCurrentState();i=c.paused;k=f?s.current.get(f):null;m=function(a){var c;p(e.current,"[PAUSE] previously selected autoplay video: "+((c=f)!=null?c:"null"));b("WwwCometVideoAutoplayFalcoEvent").log(function(){return{autoplay_event_name:"pause",autoplay_scope_id:d,event_creation_time:Date.now(),initiator:e.current,initiator_type:"autoplay_manager",selected_autoplay_video_symbol:o,target:f,target_current_autoplay_decision:a==null?void 0:a.currentAutoplayDecision}});w.pause("autoplay_initiated")};if(k){j=k.currentAutoplayDecision;j==="ALLOW"&&!i&&m(k)}else m()}}if(o){a=r.current.get(o);if(a){h=a.controller;p(e.current,"[PLAY] newly selected autoplay video: "+o);var y=s.current.get(o)||null;b("WwwCometVideoAutoplayFalcoEvent").log(function(){return{autoplay_event_name:"play",autoplay_scope_id:d,event_creation_time:Date.now(),initiator:e.current,initiator_type:"autoplay_manager",selected_autoplay_video_symbol:o,target:f,target_current_autoplay_decision:y==null?void 0:y.currentAutoplayDecision}});h.play("autoplay_initiated")}}t.current.set(d,o)}},[]),z=h(function(a){a=a.autoplayScopeID;return{selectedAutoplayVideoSymbol:t.current.get(a)}},[]),A=h(function(a,c,d,g,h,i){p(e.current,"[Register] "+a);r.current.set(a,{autoplayLocalScope:d,controller:g,hiddenSubtreePassive:h,instanceKey:c,shouldAutoplayManageVideo:i,symbol:a});g=d.autoplayScopeID;f.current.has(g)||f.current.set(g,{longThrottle:b("CometThrottle")(y,n),throttle:b("CometThrottle")(y,o)})},[]),B=h(function(a,c,d){var e=r.current.get(a);if(e){e=e.autoplayLocalScope;var g=e.autoplayScopeID,h=s.current.get(a),i=h?h.previousAutoplayDecision:null,j=h?h.previousVideoPlayerViewabilityInfo:null;s.current.set(a,{currentAutoplayDecision:c,previousAutoplayDecision:i,previousVideoPlayerViewabilityInfo:j,symbol:a,videoPlayerViewabilityInfo:d});i=!0;(c==="IGNORE"||h&&h.currentAutoplayDecision==="IGNORE")&&(i=!1);j=t.current.get(g)||null;j===a&&c!=="ALLOW"&&t.current.set(g,null);if(i){d=f.current.get(g);d&&(b("gkx")("1238814")&&j==null?d.longThrottle(e):d.throttle(e))}}else b("recoverableViolation")("Received an update for an unregisterd video unit: "+a,"comet_video_player")},[]),C=h(function(a){p(e.current,"[Unregister] "+a);if(r.current.has(a)){var c=r.current.get(a);if(c){var d;c=c.autoplayLocalScope;var g=c.autoplayScopeID;s.current["delete"](a);d=(d=t.current.get(g))!=null?d:null;if(d===a){t.current.set(g,null);d=f.current.get(g);d?b("gkx")("1238814")?d.longThrottle(c):d.throttle(c):b("recoverableViolation")("No throttles exist for the current scope: "+g+", this is probably an error.","comet_video_player")}r.current["delete"](a)}}},[]),D=j(function(){return{getAutoplayManagerDebugInfo:z,register:A,unregister:C,update:B}},[z,A,C,B]),E=b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("basic");return g.jsx(m.Provider,{value:D,children:g.jsx(b("VideoAutoplayLocalScopeProvider.react"),{autoplayLocalRules:E,children:a.children})})}e.exports=a}),null);
__d("VideoPlayerCaptionsAreaDeferred.react",["requireDeferredForDisplay","React","deferredLoadComponent"],(function(a,b,c,d,e,f){"use strict";b("React");a=b("deferredLoadComponent")(b("requireDeferredForDisplay")("VideoPlayerCaptionsArea.react"));e.exports=a}),null);
__d("VideoPlayerFallbackCoverImplWithoutRetry.react",["fbt","React","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){a.onRetry;return h.jsx("div",{className:"stjgntxs ni8dbmo4 taijpn5t j83agx80 ora8z2hr bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",children:h.jsx("div",{className:"ij9ysmuz cbu4d94t j83agx80 bp9cbjyn",children:h.jsx(b("TetraText.react"),{align:"center",color:"white",type:"bodyLink3",children:g._("Sorry, we're having trouble with playing this video.")})})})}e.exports=a}),null);
__d("SphericalMediaGyroOverlay.react",["cx","CSS","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=800,j=function(a,b,c){b===void 0&&(b=!0);c===void 0&&(c=!1);return{gyroRoot:"_1zvy"+(a?" _2dz7":"")+(b?" _4z8s":"")+(c?" _4z8p":""),gyroOuter:"_4z8q",gyroInner:"_4z8r",gyroMeridian:"_4z8t",gyroEquator:"_4z8u",gyroTextShell:"_4z8v",gyroText:"_4z8w"}};a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.rootRef=h.createRef(),b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidUpdate=function(a){var c=this;if(a.isActive&&!this.props.isActive)setTimeout(function(){var a=c.rootRef.current;a instanceof Element&&b("CSS").hide(a)},i);else if(!this.props.isActive){a=this.rootRef.current;a instanceof Element&&b("CSS").hide(a)}};d.componentDidMount=function(){if(!this.props.isActive){var a=this.rootRef.current;a instanceof Element&&b("CSS").hide(a)}};d.render=function(){var a=this.props,c=a.className,d=a.isActive,e=a.isInfinite;a=a.isPaused;d=j(d,e,a);return h.jsx("div",{className:b("joinClasses")(c,d.gyroRoot),ref:this.rootRef,children:h.jsxs("div",{className:d.gyroOuter,children:[h.jsxs("div",{className:d.gyroInner,children:[h.jsx("div",{className:d.gyroMeridian}),h.jsx("div",{className:d.gyroEquator})]}),h.jsx("div",{className:d.gyroTextShell,children:h.jsx("span",{className:d.gyroText,children:"360"})})]})})};return c}(h.PureComponent);e.exports=a}),null);
__d("VideoPlayerSphericalFallbackCover.react",["fbt","React","SphericalMediaGyroOverlay.react","TetraText.react","stylex","unrecoverableViolation","useCometRouterDispatcher","useFeedClickEventHandler"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useState;function a(a){var c=a.videoTahoeUrl,d=b("useCometRouterDispatcher")();a=i(!1);var e=a[0],f=a[1];if(d==null)throw b("unrecoverableViolation")("Missing CometRouterDispatcher","comet_video_player");a=b("useFeedClickEventHandler")(function(){d.go(c,{})});return h.jsxs("div",{className:"bkfpd7mw cbu4d94t j83agx80 nhd2j8a9 bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",onClick:a,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},role:"link",tabIndex:0,children:[h.jsx(b("SphericalMediaGyroOverlay.react"),{isActive:!0}),h.jsx("div",{className:"l9j0dhe7 i7orit0i",children:e?h.jsx(b("TetraText.react"),{color:"white",type:"bodyLink3",children:g._("Click to expand")}):null})]})}e.exports=a}),null);
__d("useDebouncedValue",["React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useEffect,h=c.useState;function a(a,b){var c=h(a),d=c[0],e=c[1];g(function(){var c=setTimeout(function(){return e(a)},b);return function(){return clearTimeout(c)}},[a,b]);return d}e.exports=a}),null);
__d("VideoPlayerSpinner.react",["CometLoadingAnimation.react","React","VideoPlayerHooks","stylex","useDebouncedValue"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=b("VideoPlayerHooks").useStalling,j=36;function a(){var a=i();a=a;var c=b("useDebouncedValue")(a,a?200:500);return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"height-1":"tv7at329","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","start-1":"kfkz5moi","top-1":"rk01pc8j","transform-0.1":"py2didcb","transition-delay-1":"chkx7lpg","transition-duration-1":"kmdw4o4n","transition-property-1":"art1omkt","transition-timing-function-1":"e4zzj2sf","width-1":"thwo4zme"},a?null:{"opacity-1":"b5wmifdl","transition-delay-1":"hwaazqwg","transition-duration-1":"kmdw4o4n","transition-property-1":"l23jz15m","transition-timing-function-1":"e4zzj2sf","visibility-1":"kr9hpln1"}),children:h.jsx(b("CometLoadingAnimation.react"),{animationPaused:!c,size:j})})}e.exports=a}),null);
__d("isPrimitive",[],(function(a,b,c,d,e,f){"use strict";function a(a){switch(Object.prototype.toString.call(a)){case"[object String]":case"[object Number]":case"[object Boolean]":case"[object Null]":case"[object Undefined]":return!0}return!1}e.exports=a}),null);
__d("deepEquals",["isPrimitive"],(function(a,b,c,d,e,f){"use strict";var g=function(a){return function(b,c){return i(b,a[c])}},h=function(a,b){return function(c){return c in a&&c in b&&i(a[c],b[c])}};function i(a,c){if(Object.prototype.toString.call(a)!==Object.prototype.toString.call(c))return!1;if(b("isPrimitive")(a))return a===c;if(Array.isArray(a))return a.length===c.length&&a.every(g(c));var d=Object.keys(a);return d.length!==Object.keys(c).length?!1:d.every(h(a,c))}e.exports=i}),null);