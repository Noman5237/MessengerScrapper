if (self.CavalryLogger) { CavalryLogger.start_js(["QnHMU"]); }

__d("BanzaiLooper",["Banzai"],(function(a,b,c,d,e,f){var g={retry:!0};function h(a,c){b("Banzai").post("banzai_looper:"+a,c,g)}a={labelBinaryClassificationExample:function(a){h("binary_classification_example",babelHelpers["extends"]({operation:"label"},a))}};e.exports=a}),null);
__d("NotificationJewelPerformanceTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setBadgeCurrentCount=function(a){this.$1.badge_current_count=a;return this};c.setBadgeInitialCount=function(a){this.$1.badge_initial_count=a;return this};c.setClientSessionID=function(a){this.$1.client_session_id=a;return this};c.setClientTimestamp=function(a){this.$1.client_timestamp=a;return this};c.setEagerLoadTriggerAndDelay=function(a){this.$1.eager_load_trigger_and_delay=a;return this};c.setEventName=function(a){this.$1.event_name=a;return this};c.setJewelName=function(a){this.$1.jewel_name=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={badge_current_count:!0,badge_initial_count:!0,client_session_id:!0,client_timestamp:!0,eager_load_trigger_and_delay:!0,event_name:!0,jewel_name:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("JewelLogger",["BanzaiLooper","NotificationJewelPerformanceTypedLogger","NotificationListConfig","QuickPerformanceLogger","gkx","performanceNow"],(function(a,b,c,d,e,f){"use strict";var g,h=b("BanzaiLooper").labelBinaryClassificationExample,i=b("NotificationListConfig").sessionID,j=b("gkx")("678513"),k=!1,l=function(b){babelHelpers.inheritsLoose(a,b);function a(c){var d;d=b.call(this)||this;a.$JewelTypedLoggerWithSession1[c]||(a.$JewelTypedLoggerWithSession1[c]={});d.$JewelTypedLoggerWithSession2=c;return d}var c=a.prototype;c.setEventName=function(a){this.$JewelTypedLoggerWithSession3=a;return b.prototype.setEventName.call(this,a)};c.log=function(){a.$JewelTypedLoggerWithSession1[this.$JewelTypedLoggerWithSession2][this.$JewelTypedLoggerWithSession3]||(a.$JewelTypedLoggerWithSession1[this.$JewelTypedLoggerWithSession2][this.$JewelTypedLoggerWithSession3]=!0,this.setClientSessionID(i),this.setJewelName(this.$JewelTypedLoggerWithSession2),b.prototype.log.call(this))};return a}(b("NotificationJewelPerformanceTypedLogger"));l.$JewelTypedLoggerWithSession1={};function m(a){a.jewelName==="notifications"&&a.eventName==="list_populated"&&q(a.timestamp),new l(a.jewelName).setEventName(a.eventName).setClientTimestamp(a.timestamp).log()}function n(a){var b=a.trigger,c=a.eagerLoadDelayInMs,d=babelHelpers.objectWithoutPropertiesLoose(a,["trigger","eagerLoadDelayInMs"]);b=b+":"+c;new l(a.jewelName).setEventName(d.eventName).setClientTimestamp(d.timestamp).setEagerLoadTriggerAndDelay(b).log()}function o(a){j&&!k&&(b("QuickPerformanceLogger").markerStart(655584,0,a),k=!0)}function p(a){j&&k&&b("QuickPerformanceLogger").annotateMarkerIntArray(655584,"JEWEL_CLICK_COUNT",[a])}function q(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(655584,2,0,a),k=!1)}function r(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(655584,4,0,a),k=!1)}function s(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(655584,3,0,a),k=!1)}a={logDataEagerLoad:function(a){a.eventName==="data_eager_load_trigger"?n(a):m(a)},logJsBootload:function(a){a.eventName==="js_bootload_trigger"?n(a):m(a)},logJewelCancel:function(){r((g||(g=b("performanceNow")))())},logJewelFail:function(){s((g||(g=b("performanceNow")))())},logJewelClick:function(a){a.jewelName==="notifications"&&(o(a.timestamp),p(a.clickCount)),a.clickCount===1&&(new l(a.jewelName).setEventName("first_jewel_click").setClientTimestamp(a.timestamp).setBadgeInitialCount(a.badgeInitialCount).setBadgeCurrentCount(a.badgeCurrentCount).log(),a.jewelName==="notifications"&&h({trace:i,loopName:"notifications_jewel_click",label:"positive"}))},logJewelInitialize:function(a){new l(a.jewelName).setEventName("jewel_initialize").setClientTimestamp(a.timestamp).setBadgeInitialCount(a.badgeInitialCount).log(),a.jewelName==="notifications"&&h({trace:i,loopName:"notifications_jewel_click",label:"tentatively_negative"})},logJewelListComponentEvent:m};e.exports=a}),null);
__d("RangedCallbackManager",["CallbackManagerController","arrayStableSort","createObjectFrom"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a,c,d){this.$1=[],this.$2=!1,this.$3=!1,this.$4={},this.$5=new(b("CallbackManagerController"))(this.$6.bind(this)),this.$7=a,this.$8=c,this.$9=d}var c=a.prototype;c.executeOrEnqueue=function(a,b,c,d,e){return this.$5.executeOrEnqueue({start:a,limit:b},c,{strict:!!d,skipOnStrictHandler:e})};c.unsubscribe=function(a){this.$5.unsubscribe(a)};c.getUnavailableResources=function(a){a=this.$5.getRequest(a);var b=[];if(a&&!this.$2){var c=a.request;a=this.$10(a.options);c=c.start+c.limit;for(var a=a.length;a<c;a++)b.push(a)}return b};c.addResources=function(a){var b=this;a.forEach(function(a){b.$4[a]||(b.$4[a]=!0,b.$1.push(a),b.$3=null)});this.resortResources();this.$5.runPossibleCallbacks()};c.addResourcesWithoutSorting=function(a,c){var d=this.$1.slice(0,c);d=d.concat(a);d=d.concat(this.$1.slice(c));this.$1=d;Object.assign(this.$4,b("createObjectFrom")(a,!0));this.$3=null;this.$5.runPossibleCallbacks()};c.removeResources=function(a){var b=this;a.forEach(function(a){if(b.$4[a]){b.$4[a]=!1;a=b.$1.indexOf(a);a!=-1&&b.$1.splice(a,1)}})};c.removeAllResources=function(){this.$1=[],this.$4={}};c.resortResources=function(){var a=this;this.$1=b("arrayStableSort")(this.$1,function(b,c){return a.$8(a.$7(b),a.$7(c))})};c.setReachedEndOfArray=function(){this.$2||(this.$2=!0,this.$3=null,this.$5.runPossibleCallbacks())};c.hasReachedEndOfArray=function(){return this.$2};c.forceRunCallbacks=function(){this.$5.runPossibleCallbacks({force:!0})};c.setError=function(a){this.$3!==a&&(this.$3=a,this.$5.runPossibleCallbacks())};c.getError=function(a,b,c){c=this.$10({strict:c});return a+b>c.length?this.$3:null};c.hasResource=function(a){return this.$4[a]};c.getResourceAtIndex=function(a){return this.$1[a]};c.getAllResources=function(){return this.$1.concat()};c.getCurrentArraySize=function(a){return this.$10(a).length};c.$10=function(a){var b=this.$1;if(a&&a.strict){a=a.skipOnStrictHandler||this.$9;a&&(b=b.filter(a))}return b};c.$6=function(a,b){var c=this.$10(b),d=a.start;a=a.start+a.limit;b=!!(b&&b.force);if(!b&&!this.$2&&!this.$3&&a>c.length)return!1;else{b=c.slice(d,a);d=a>c.length?this.$3:null;return[b,d]}};c.getElementsUntil=function(a){var b=[];for(var c=0;c<this.$1.length;c++){var d=this.$7(this.$1[c]);if(this.$8(d,a)>0)break;b.push(this.$1[c])}return b};return a}();e.exports=a}),null);
__d("performanceNowNoFallback",["performance"],(function(a,b,c,d,e,f){var g;e.exports=(g||(g=b("performance"))).now?function(){return(g||(g=b("performance"))).now()}:null}),null);
__d("NotificationEagerLoader",["invariant","Promise","Arbiter","AsyncRequest","BigPipe","JewelLogger","NotificationComponentsBootloader","NotificationDataFetchConfig","NotificationEndpointState","NotificationListConfig","once","performanceAbsoluteNow","performanceNowNoFallback"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("JewelLogger").logDataEagerLoad,j=b("JewelLogger").logJsBootload,k=b("NotificationDataFetchConfig").dataEagerFetchTrigger,l=b("NotificationListConfig").jsBootloadTrigger,m=b("NotificationListConfig").numNotificationsPerPage;m=k!=="none"?m:0;var n={hasData:m>0,targetNumToLoad:m,endpointState:a(),payloadPromise:null};function a(){var a={endpointControllerName:"WebNotificationsPayloadPagelet"};return b("NotificationEndpointState").getInstance(a)}function c(a){if(!b("performanceNowNoFallback"))return b("NotificationComponentsBootloader").load().then(function(){});else{j({jewelName:"notifications",eventName:"js_bootload_trigger",trigger:l,timestamp:b("performanceNowNoFallback")()-a,eagerLoadDelayInMs:0});j({jewelName:"notifications",eventName:"js_bootload_start",timestamp:b("performanceNowNoFallback")()});return b("NotificationComponentsBootloader").load().then(function(){j({jewelName:"notifications",eventName:"js_bootload_end",timestamp:b("performanceNowNoFallback")()})})}}function d(a){b("performanceNowNoFallback")&&(i({jewelName:"notifications",eventName:"data_eager_load_trigger",trigger:k,timestamp:b("performanceNowNoFallback")()-a,eagerLoadDelayInMs:0}),i({jewelName:"notifications",eventName:"data_eager_load_start",timestamp:b("performanceNowNoFallback")()}));a=n.targetNumToLoad;var c=n.endpointState;a=c.getRequestParams(a);var d;switch(c.endpointControllerName){case"WebNotificationsPayloadPagelet":d="/ajax/notifications/client/get.php";break;case"AdsUnifiedNavNotificationsPayloadPagelet":d="/notifications/client/ads_unified_nav/";break;case"BusinessManagerNotificationsPayloadPagelet":d="/notifications/client/business_manager/";break}d!=null||g(0,5504,c.endpointControllerName);c=new(b("AsyncRequest"))(d).setAllowCrossPageTransition(!0).setData(a);a=c.exec().then(function(a){b("performanceNowNoFallback")&&i({jewelName:"notifications",eventName:"data_eager_load_end",timestamp:b("performanceNowNoFallback")()});return a.getPayload()});n.hasData||g(0,5505);return a}function f(a){return new(b("Promise"))(function(c,d){b("Arbiter").subscribeOnce(b("BigPipe").Events.init,b("once")(function(e,f){e=f.arbiter;if(!e){d("No arbiter from BigPipe init event");return}e.subscribeOnce(b("BigPipe").Events.displayed,b("once")(function(e,f){e=f.ts;f=(h||(h=b("performanceAbsoluteNow")))()-e;a(f).then(function(a){return c(a)})["catch"](function(a){return d(a)})}))}))})}l==="bigpipe_display_done"&&f(c);k==="bigpipe_display_done"&&(n.payloadPromise=f(d));e.exports={eagerlyLoadedData:n}}),null);
__d("DeveloperCommunicationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:DeveloperCommunicationLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:DeveloperCommunicationLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:DeveloperCommunicationLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAggregatedAlertDataID=function(a){this.$1.aggregated_alert_data_id=a;return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setDevAlertGroupCustom=function(a){this.$1.dev_alert_group_custom=a;return this};c.setDevAlertID=function(a){this.$1.dev_alert_id=a;return this};c.setDevAlertSource=function(a){this.$1.dev_alert_source=a;return this};c.setDevNotifMedium=function(a){this.$1.dev_notif_medium=a;return this};c.setDevNotifType=function(a){this.$1.dev_notif_type=a;return this};c.setDocPageDescription=function(a){this.$1.doc_page_description=a;return this};c.setEmailCompletionStatus=function(a){this.$1.email_completion_status=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setJewelCompletionStatus=function(a){this.$1.jewel_completion_status=a;return this};c.setMarkdownPageIds=function(a){this.$1.markdown_page_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setNotifDeliveryID=function(a){this.$1.notif_delivery_id=a;return this};c.setNotifEnvironment=function(a){this.$1.notif_environment=a;return this};c.setNotifID=function(a){this.$1.notif_id=a;return this};c.setNotifMedium=function(a){this.$1.notif_medium=a;return this};c.setNotifMediumSendFlag=function(a){this.$1.notif_medium_send_flag=a;return this};c.setObjective=function(a){this.$1.objective=a;return this};c.setPocTeam=function(a){this.$1.poc_team=a;return this};c.setRecipientID=function(a){this.$1.recipient_id=a;return this};c.setRecipientType=function(a){this.$1.recipient_type=a;return this};c.setRef=function(a){this.$1.ref=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setType=function(a){this.$1.type=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={aggregated_alert_data_id:!0,app_id:!0,dev_alert_group_custom:!0,dev_alert_id:!0,dev_alert_source:!0,dev_notif_medium:!0,dev_notif_type:!0,doc_page_description:!0,email_completion_status:!0,event:!0,jewel_completion_status:!0,markdown_page_ids:!0,notif_delivery_id:!0,notif_environment:!0,notif_id:!0,notif_medium:!0,notif_medium_send_flag:!0,objective:!0,poc_team:!0,recipient_id:!0,recipient_type:!0,ref:!0,time:!0,type:!0,weight:!0};e.exports=a}),null);
__d("DeveloperCommunicationLogger",["CurrentUser","DeveloperCommunicationTypedLogger"],(function(a,b,c,d,e,f){"use strict";function a(a){a=a?"jewel_list_open":"jewel_list_close";new(b("DeveloperCommunicationTypedLogger"))().setEvent(a).setType("dev_alert").setRecipientID(b("CurrentUser").getID()).log()}e.exports={logJewelToggle:a}}),null);
__d("NotificationJewelListController",["DeveloperCommunicationLogger","FBAMetaMegaMenuLogger","NotificationComponentsBootloader","NotificationListConfig","React","ReactDOM","promiseDone"],(function(a,b,c,d,e,f){var g=b("NotificationListConfig").numNotificationsPerPage,h=b("React"),i=null,j=null,k=null;a=function(){"use strict";function a(a,b){this.$1=!1,this.$2=!1,this.$3=!1,this.$4=a,this.$5=b}var c=a.prototype;c.open=function(){this.$1=!0,this.$6()};c.pause=function(){this.$2=!0,this.$5.pageType==="ANALYTICS"?b("FBAMetaMegaMenuLogger").logMegaMenuNotificationBellToggle(this.$2):this.$5.pageType==="APP_DASHBOARD"&&b("DeveloperCommunicationLogger").logJewelToggle(this.$2),this.$6()};c.unpause=function(){this.$2=!1,this.$5.pageType==="ANALYTICS"?b("FBAMetaMegaMenuLogger").logMegaMenuNotificationBellToggle(this.$2):this.$5.pageType==="APP_DASHBOARD"&&b("DeveloperCommunicationLogger").logJewelToggle(this.$2),this.$6()};c.setFlyoutOpenState=function(a){this.$3=a,this.$6()};c.$6=function(){var a=this;!i||!j?b("promiseDone")(b("NotificationComponentsBootloader").load(this.$5.isBizsite),function(b){var c=b[0],d=b[1];b=b[2];i=c;j=d;k=b;a.$7()}):this.$7()};c.$7=function(){var a=this;if(!i||!j||!k)return;b("ReactDOM").render(h.jsx(k,{children:h.jsx(i,{hasEverBeenOpened:this.$1,paused:this.$2,isBucketingDisabled:this.$5.isBucketingDisabled,isNotifsIntl:this.$5.isNotifsIntl,isFlyoutOpened:this.$3,classification:this.$5.classification,tracking:this.$5.tracking,shortenTimestamp:this.$5.shortenTimestamp,businessID:this.$5.businessID,profilePlus:this.$5.profilePlus,defaultTab:this.$5.defaultTab,maxHeight:this.$5.maxHeight,useChevron:this.$5.useChevron,chevronType:this.$5.chevronType,numPerPage:g,listRenderer:j,upsell:this.$5.upsell||null,endpoint:this.$5.endpoint,sourceView:this.$5.sourceView,settingsUri:this.$5.settingsUri,onClick:function(c,d){a.$5.pageType==="ANALYTICS"&&b("FBAMetaMegaMenuLogger").logMegaMenuNotificationClick(c,d)}})}),this.$4)};return a}();e.exports=a}),null);
__d("NotificationSubscriptions",["Arbiter","ChannelConstants","FacebookWebNotificationsSubscription","NotificationTokens","createNotificationSubscriptions","createObjectFrom"],(function(a,b,c,d,e,f){"use strict";function g(a){(!a.eligible_buckets||!a.eligible_buckets.includes("PRIORITY_INBOX"))&&(a.eligible_buckets=["PRIORITY_INBOX"].concat(a.eligible_buckets||[]));if(!a.sort_keys){var b=a.creation_time||Date.now()/1e3;a.sort_keys=[""+b,b+"000000"]}return a}e.exports=b("createNotificationSubscriptions")({subscribeToNotificationHides:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notification_hidden"),function(c,d){c=b("NotificationTokens").tokenizeIDs([d.obj.notif_id+""]);d=d.obj.state===1;a(b("createObjectFrom")(c,d))})},subscribeToNotificationReadnessUpdates:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notifications_read"),function(c,d){c=b("NotificationTokens").tokenizeIDs(d.obj.alert_ids);d=d.obj.new_state;a(b("createObjectFrom")(c,d))})},subscribeToNotificationSeenStateUpdates:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notifications_seen"),function(c,d){c=b("NotificationTokens").tokenizeIDs(d.obj.alert_ids);d=d.obj.new_state;a(b("createObjectFrom")(c,d))})},subscribeToRealtimeChannelNotifications:function(a){return b("FacebookWebNotificationsSubscription").subscribe({event:"NEW_NOTIFICATION",callback:function(b){a(b?[g(b)]:null)}})}})}),null);
__d("GlobalNotificationSubscriptionsSubscription",["NotificationSubscriptions"],(function(a,b,c,d,e,f){"use strict";e.exports=b("NotificationSubscriptions").setup()}),null);
__d("FacebookWebNotificationsQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2916229815068669"};b.getQueryID=function(){return"351037068876206"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("NotificationSync",["invariant","Arbiter","ChannelConstants","CurrentUser","FacebookWebNotificationsQueryWebGraphQLQuery","NotificationConstants","NotificationUpdates","WebGraphQL","WebPixelRatio","ifRequired","objectValues","promiseDone","qex"],(function(a,b,c,d,e,f,g){var h=0;function i(){var a={endpointControllerName:"WebNotificationsPayloadPagelet"},c;b("ifRequired")("NotificationStore",function(d){c=b("objectValues")(d.getAll(a))});if(c==null)return null;var d=c.map(function(a){return a.creation_time}).filter(Boolean);return d.length===0?null:Math.max.apply(Math,d)}function j(){var a=i();if(a==null)return;b("promiseDone")(b("WebGraphQL").exec(new(b("FacebookWebNotificationsQueryWebGraphQLQuery"))({environment:b("qex")._("1243439")?"MAIN_SURFACE":"WEB_DESKTOP",is_work_user:b("CurrentUser").isWorkUser(),newer_than:a,scale:b("WebPixelRatio").get(),should_fetch_buckets:!1,should_fetch_sort_keys:!1,should_include_server_time:!1})),function(a){if(a){a=(a=a)!=null?(a=a.viewer)!=null?(a=a.notifications)!=null?a.edges:a:a:a;a=a&&a.map(function(a){a=a.node;return a}).filter(Boolean);if(a==null)return;a={nodes:a};b("NotificationUpdates").handleUpdate(b("NotificationConstants").PayloadSourceType.SYNC,a)}})}var k=null,l=0;a={setup:function(a){l++;(h===null||a>h)&&(h=a);k==null&&(k=b("Arbiter").subscribe(b("ChannelConstants").ON_INVALID_HISTORY,j));var c=!1;return{remove:function(){if(c===!0)return;k!=null||g(0,51);c=!0;l--;l===0&&(k.unsubscribe(),k=null)}}}};e.exports=a}),null);
__d("GlobalNotificationSyncSubscription",["InitialServerTime","NotificationSync"],(function(a,b,c,d,e,f){"use strict";e.exports=b("NotificationSync").setup(b("InitialServerTime").serverTime)}),null);
__d("NotificationSeenState",["NotificationConstants","NotificationUpdates","createObjectFrom","ifRequired","objectValues"],(function(a,b,c,d,e,f){var g=1,h=2,i=0,j=g,k=3,l=b("NotificationConstants").PayloadSourceType.INITIAL_LOAD,m={SEEN_AND_READ:k,SEEN_BUT_UNREAD:j,UNSEEN_AND_UNREAD:i},n={};b("ifRequired")("NotificationStore",function(a){a=a.getAllForAllEndpoints();a=b("objectValues")(a);var c=p(a);Object.keys(c).forEach(function(a){var b=c[a];n[a]=b})});function o(a){var c=[],d=[];Object.keys(a).forEach(function(b){var e=a[b],f=n[b];n[b]=e;if(f===void 0){c.push(b);d.push(b);return}f=f^e;f&g&&c.push(b);f&h&&d.push(b)});c.length&&b("NotificationUpdates").didUpdateSeenState(c);d.length&&b("NotificationUpdates").didUpdateReadState(d)}b("NotificationUpdates").subscribe("update-notifications",function(a,c){a=c.nodes;if(!a||!a.length)return;c=c.payloadsource;var d=b("NotificationConstants").PayloadSourceType,e=c==d.ENDPOINT;c=a.filter(function(a){a=a.alert_id;return!e||n[a]===void 0});d=p(c);o(d)});function p(a){var b={};a.forEach(function(a){a.seen_state&&(b[a.alert_id]=m[a.seen_state])});return b}b("NotificationUpdates").subscribe("update-seen",function(a,c){if(!c.seenState)return;var d=[],e={};Object.keys(c.seenState).forEach(function(a){if(!c.seenState||!c.seenState[a]){d.push(a);return}var b=n[a];b!==void 0&&(e[a]=b|g)});a=babelHelpers["extends"]({},b("createObjectFrom")(d,i),e);o(a)});b("NotificationUpdates").subscribe("update-read",function(a,c){if(!c.readState)return;var d=[],e={};Object.keys(c.readState).forEach(function(a){if(!c.readState)return;var b=c.readState[a];if(b){d.push(a);return}b=n[a];b!==void 0?e[a]=b&~h:c.payloadsource==l&&(e[a]=j)});a=babelHelpers["extends"]({},b("createObjectFrom")(d,k),e);o(a)});function q(a){a=n[a];return a}var r={isRead:function(a){return q(a)===k},isSeen:function(a){return q(a)!==i},getUnseenCount:function(a,b){return r.getUnseenIDs(a,b).length},getUnseenIDs:function(a,b){var c=Object.keys(n).filter(function(a){return n[a]===i});a&&(c=c.filter(function(c){return b&&b[c]===a}));return c},getUnreadCount:function(){return r.getUnreadIDs().length},getUnreadIDs:function(){return Object.keys(n).filter(function(a){return n[a]!==k})},validateFilter:function(a,b){switch(b){case"seen_only":return r.isSeen(a);case"unseen_only":return!r.isSeen(a);case"read_only":return r.isRead(a);case"unread_only":return!r.isRead(a);case"seen_unread_only":return r.isSeen(a)&&!r.isRead(a);default:return!0}}};e.exports=r}),6);
__d("XBrowserPushDisabledController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/disabled/",{})}),null);
__d("XBrowserPushXOutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/xout/",{})}),null);
__d("XServiceWorkerSessionChangeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/service_workers/session/persist/",{})}),null);
__d("BrowserPushSessionChange.react",["fbt","ix","AsyncRequest","BanzaiLogger","Image.react","ImageBlock.react","LayerFadeOnHide","React","ReloadPage","XBrowserPushDisabledController","XBrowserPushXOutController","XServiceWorkerSessionChangeController","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","XUISpinner.react","XUIText.react","cxMargin","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={dialogShown:!0,spin:!1},d.$1=function(a){if(a)return;d.setState({dialogShown:!1});d.$2("session_keep");a=b("XServiceWorkerSessionChangeController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({app_id:d.props.push.appID}).setAllowCrossPageTransition(!0).setHandler(function(a){d.props.onHide()}).send()},d.$3=function(){d.setState({spin:!0});d.$2("session_uninstall");d.$2("xout");var a=b("XBrowserPushXOutController").getURIBuilder().getURI(),c=function(){d.props.push.unregisterPushAndSW(b("XBrowserPushDisabledController"),b("AsyncRequest")).done(function(a){b("ReloadPage").now()})};new(b("AsyncRequest"))().setURI(a).setMethod("POST").setHandler(c).setAllowCrossPageTransition(!0).send()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(a){a={event:a,appid:this.props.push.appID,surface:"session_change"};b("BanzaiLogger").log("BrowserPushLoggerConfig",a)};d.componentDidMount=function(){this.$2("session_change_prompt")};d.render=function(){if(!this.state.dialogShown)return null;var a=h("92724");return i.jsxs(b("XUIDialog.react"),{shown:!0,behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},onToggle:this.$1,width:445,children:[i.jsx(b("XUIDialogTitle.react"),{children:g._("Desktop notifications are on")}),i.jsx(b("XUIDialogBody.react"),{children:this.state.spin?i.jsx(b("XUISpinner.react"),{size:"large"}):i.jsxs(b("ImageBlock.react"),{spacing:"medium",children:[i.jsx(b("Image.react"),{src:a,alt:g._("Desktop notifications are on")}),i.jsxs("div",{children:[i.jsx("div",{className:"_3-8h",children:i.jsx(b("XUIText.react"),{size:"header3",children:g._("When you get a new notification, you'll see it in the corner of your screen.")})}),i.jsx("div",{className:"_3-8h",children:i.jsx(b("XUIText.react"),{size:"meta1",children:g._("To make sure that you get notifications, you'll now stay logged in to Facebook on this computer. If you're using a public computer or don't want to stay logged in, click Undo to turn off desktop notifications.")})})]})]})}),i.jsxs(b("XUIDialogFooter.react"),{children:[i.jsx(b("XUIDialogButton.react"),{action:"button",label:g._("Undo"),onClick:this.$3}),i.jsx(b("XUIDialogOkayButton.react"),{use:"confirm",action:"cancel"})]})]},"dialog")};return c}(i.Component);a.propTypes={onHide:b("prop-types").func.isRequired,push:b("prop-types").object.isRequired};e.exports=a}),null);
__d("NotificationPermissionNotice.react",["cx","fbt","Event","Keys","React","XUIAmbientNUX.react","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React"),j=[];a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){var a=this;j.push(b("Event").listen(window,"mousedown",this.props.onHide));j.push(b("Event").listen(window,"keydown",function(c){c.keyCode===b("Keys").ESC&&a.props.onHide()}))};d.componentWillUnmount=function(){while(j.length>0){var a=j.pop();a.remove()}};d.renderLayers=function(){var a=this,c=this.props.shortText?h._("Click the lock to give {browser_name} permission to send you desktop notifications.",[h._param("browser_name",this.props.browserName)]):h._("If you change your mind, click the lock to give {browser_name} permission to send you desktop notifications.",[h._param("browser_name",this.props.browserName)]);return i.jsx(b("XUIAmbientNUX.react"),{contextRef:function(){return a.refs.noticeAnchor},shown:!0,position:"below",onCloseButtonClick:this.props.onHide,children:c},"nux")};d.render=function(){return i.jsxs("span",{children:[i.jsx("span",{ref:"noticeAnchor",className:"_1_i1"}),this.renderLayers()]})};return c}(i.Component);a.propTypes={onHide:b("prop-types").func.isRequired,shortText:b("prop-types").bool,browserName:b("prop-types").string.isRequired};e.exports=a}),null);
__d("NotificationPermissionRequest.react",["cx","React","Spotlight.react","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("Spotlight.react"),{shown:!0,onHide:this.props.onHide,children:h.jsx("div",{className:"_n3"})},"spotlight")};return c}(h.Component);a.propTypes={onHide:b("prop-types").func};e.exports=a}),null);
__d("BlueBarCreateMenuTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEntrypointStyle=function(a){this.$1.entrypoint_style=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setHasUserCreatedPriorToStartDate=function(a){this.$1.has_user_created_prior_to_start_date=a;return this};c.setMenuElement=function(a){this.$1.menu_element=a;return this};c.setMenuStyle=function(a){this.$1.menu_style=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={entrypoint_style:!0,event:!0,has_user_created_prior_to_start_date:!0,menu_element:!0,menu_style:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("BlueBarCreateMenuLogger",["requireDeferred","BlueBarCreateMenuTypedLogger","CurrentUser"],(function(a,b,c,d,e,f){"use strict";var g=b("requireDeferred")("WebFunnelLogger");a={initModal:function(a,c,d,e){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("click").log();for(var f=0;f<a.length;f++)a[f]&&(function(){var g=a[f],h=g.name;g=g.element;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("impression").log();g.addEventListener("click",function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("click").log()})})()},initDropdown:function(a,c,d){a.onShow=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(c).setEntrypointStyle(d).setEvent("click").log(),a.forEachItem(function(a){if(a._data.ctor.name!=null&&!a._data.ctor.name.includes("MenuStaticItem")){a=a._data.id;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(a).setMenuStyle(c).setEntrypointStyle(d).setEvent("impression").log();a==="creation_hub_create_group"&&h("[impression][top nav][create menu][group]")}})},a.forEachItem(function(a){if(a._data.ctor.name!=null&&!a._data.ctor.name.includes("MenuStaticItem")){var e=a._data.id;a._onclickHandler=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(e).setMenuStyle(c).setEntrypointStyle(d).setEvent("click").log(),e==="creation_hub_create_group"&&h("[click][top nav][create menu][group]")}}})},logEntrypointImpression:function(a,c){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(a).setEntrypointStyle(c).setEvent("impression").log()}};function h(a){g.onReady(function(c){return new c("GroupsBlueFeedWebFunnelDefinition").setSessionKey(b("CurrentUser").getID()).setAction(a).log()})}e.exports=a}),null);
__d("WebBrowserDimensionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientHintWidth=function(a){this.$1.client_hint_width=a;return this};c.setCpuCoresCount=function(a){this.$1.cpu_cores_count=a;return this};c.setDocumentFontSize=function(a){this.$1.document_font_size=a;return this};c.setPixelRatio=function(a){this.$1.pixel_ratio=a;return this};c.setScreenX=function(a){this.$1.screen_x=a;return this};c.setScreenY=function(a){this.$1.screen_y=a;return this};c.setServerPixelRatio=function(a){this.$1.server_pixel_ratio=a;return this};c.setServerViewportX=function(a){this.$1.server_viewport_x=a;return this};c.setServerViewportY=function(a){this.$1.server_viewport_y=a;return this};c.setViewportX=function(a){this.$1.viewport_x=a;return this};c.setViewportY=function(a){this.$1.viewport_y=a;return this};c.setZoomRatio=function(a){this.$1.zoom_ratio=a;return this};return a}();c={client_hint_width:!0,cpu_cores_count:!0,document_font_size:!0,pixel_ratio:!0,screen_x:!0,screen_y:!0,server_pixel_ratio:!0,server_viewport_x:!0,server_viewport_y:!0,viewport_x:!0,viewport_y:!0,zoom_ratio:!0};e.exports=a}),null);
__d("BrowserDimensionsLogger",["SiteData","WebBrowserDimensionsTypedLogger","getViewportDimensions"],(function(a,b,c,d,e,f){"use strict";var g=null;a={init:function(a){var c=this.getInitialViewportDimensions();c=new(b("WebBrowserDimensionsTypedLogger"))().setPixelRatio(window.devicePixelRatio||1).setServerPixelRatio(b("SiteData").pr).setScreenX(window.screen.width).setScreenY(window.screen.height).setViewportX(c.width).setViewportY(c.height).setServerViewportX(a.viewportWidth).setServerViewportY(a.viewportHeight);window.navigator&&window.navigator.hardwareConcurrency&&c.setCpuCoresCount(window.navigator.hardwareConcurrency);a.clientHintWidth!=null&&c.setClientHintWidth(a.clientHintWidth);if(window.innerWidth>0&&window.outerWidth>0){a=Math.round(window.outerWidth/window.innerWidth*100)/100;c.setZoomRatio(a)}if(window.getComputedStyle&&document.documentElement!=null){a=window.getComputedStyle(document.documentElement);a!=null&&c.setDocumentFontSize(a.fontSize)}c.log()},getInitialViewportDimensions:function(){g===null&&(g=b("getViewportDimensions")());return g}};e.exports=a}),null);
__d("XBrowserPushMuteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/mute/",{appid:{type:"Int",required:!0},push_endpoint:{type:"String",required:!0},surface:{type:"Enum",required:!0,enumType:1},mute_for:{type:"Enum",enumType:0},__asyncDialog:{type:"Int"}})}),null);
__d("BrowserPushMuteOptionsLink",["fbt","regeneratorRuntime","AsyncRequest","PushRegistration","React","ReactDOM","XBrowserPushMuteController","promiseDone"],(function(a,b,c,d,e,f,g){var h=b("React");function i(a,c,d){c=b("PushRegistration").get(c,d);b("promiseDone")(c.getPushSubscription(),function(c){if(c){c=b("XBrowserPushMuteController").getURIBuilder().setEnum("surface","jewel").setString("push_endpoint",c.endpoint).setInt("appid",d).getURI();new(b("AsyncRequest"))().setURI(c).setRelativeTo(a).send()}})}a={showMuteOptions:function(a,c,d){var e,f;return b("regeneratorRuntime").async(function(j){while(1)switch(j.prev=j.next){case 0:e=b("PushRegistration").get(c,d);j.prev=1;j.next=4;return b("regeneratorRuntime").awrap(e.getPushSubscription());case 4:f=j.sent;j.next=10;break;case 7:j.prev=7,j.t0=j["catch"](1),f=null;case 10:if(!(!b("PushRegistration").pushPermissionIsOn()||!f)){j.next=12;break}return j.abrupt("return");case 12:b("ReactDOM").render(h.jsx("a",{href:"#",onClick:function(){i(a,c,d)},children:g._("Mute")}),a);case 13:case"end":return j.stop()}},null,this,[[1,7]])}};e.exports=a}),null);
__d("NotificationJewelFunnelLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={FUNNEL_LOGGING_NAME:"WWW_NOTIFICATION_FUNNEL",FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:"fetch_notifications",OPEN_JEWEL:"open_jewel",CLOSE_JEWEL:"close_jewel",MOUSE_OVER_ON_JEWEL:"mouse_over_on_jewel",SCROLL_TO_FETCH:"scroll_to_fetch",FETCH_NEXT_SET:"fetch_next_set",CLEAR_BADGE_COUNT:"clear_badge_count"}}}),null);
__d("ResponsiveSidebar",["AjaxPipeRequest","Arbiter","Bootloader","ChatConfig","ChatSidebarVisibility","CSS","Event","Run","URI","getOrCreateDOMID","qex","setImmediate","throttle"],(function(a,b,c,d,e,f){"use strict";var g,h=b("ChatConfig").get("sidebar.hide_divebar_off_homepage"),i=b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),j=b("qex")._("1211266")||!1,k="buddylistOff",l=!0;a={init:function(a){var c=this;if(this.shouldLoadContent(a))b("setImmediate")(function(){c.loadContentForConfig(a)});else{var d=document.documentElement||"";(h||j)&&!this.isOnHomepage()&&b("CSS").removeClass(d,"sidebarMode");var e=b("Event").listen(window,"resize",b("throttle")(function(){l&&(c.shouldLoadContent(a)&&(l=!1,e.remove(),c.loadContentForConfig(a)))},50));this.loadOnTransition(a);b("Run").onCleanupOrLeave(a.container,function(){l&&(l=!1,e.remove())})}},loadOnTransition:function(a){var c=this;if(h||i||j)var d=b("Arbiter").subscribe("page_transition",function(e,f){e=document.documentElement||"";!c.isOnHomepage(f.uri.getPath())?(i||j)&&b("CSS").addClass(e,k):(i&&(b("CSS").removeClass(e,k),b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"ResponsiveSidebar")),b("ChatSidebarVisibility").shouldShowSidebar(null,function(b,e){l&&setTimeout(function(){c.loadContentForConfig(a)}),l=!1,d.unsubscribe()},f.uri))})},isOnHomepage:function(a){return(a||new(g||(g=b("URI")))(window.location.href).getPath())==="/"},shouldLoadContent:function(a){var b=(h||i||j)&&!this.isOnHomepage();return!b&&a.triggerWidth<window.innerWidth},loadContentForConfig:function(a){var c="/ajax/pagelet/generic.php/SidebarPagelet";new(b("AjaxPipeRequest"))(b("getOrCreateDOMID")(a.container),c).send()}};e.exports=a}),null);
__d("CrossWindowEventEmitter",["CacheStorage","EventEmitter","FBJSON"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this)||this;d.$CrossWindowEventEmitter2=c;d.$CrossWindowEventEmitter1=new(b("CacheStorage"))("localstorage",c+":");d.$CrossWindowEventEmitter1.addValueChangeCallback(function(c,e,f){e=c.split(":")[1];try{c=b("FBJSON").parse(f)}catch(a){c=void 0}if(c&&c.__v){(f=a.prototype.emit).call.apply(f,[babelHelpers.assertThisInitialized(d),e].concat(c.__v))}});return d}var d=c.prototype;d.emit=function(b){var c;for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];this.emitRemote.apply(this,[b].concat(e));(c=a.prototype.emit).call.apply(c,[this,b].concat(e))};d.emitRemote=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$CrossWindowEventEmitter1.set(a,c)};return c}(b("EventEmitter"));e.exports=a}),null);