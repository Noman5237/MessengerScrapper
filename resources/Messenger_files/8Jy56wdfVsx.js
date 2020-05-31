if (self.CavalryLogger) { CavalryLogger.start_js(["LK4Vg"]); }

__d("FBCircularGlyph.react",["cx","Image.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.circleSize,d=a.glyph,e=a.glyphSize;a=babelHelpers.objectWithoutPropertiesLoose(a,["circleSize","glyph","glyphSize"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")("_32qy",a.className),style:babelHelpers["extends"]({width:c,height:c},a.style),children:h.jsx("div",{className:"_32qz",children:h.jsx("div",{className:"_32q-",children:h.jsx(b("Image.react"),{src:d,width:e,height:e})})})}))};return c}(h.Component);a.propTypes={circleSize:(c=b("prop-types")).number,glyph:c.oneOfType([c.object,c.string])};e.exports=a}),null);
__d("VideoActionLink.react",["cx","CenteredContainer.react","Image.react","Link.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c="_2a_c";a.imageClass!=null&&(c=b("joinClasses")(c,a.imageClass));return h.jsxs(b("Link.react"),{className:"_2pi9",href:a.href,onClick:a.onClick,rel:a.rel,role:"button",children:[h.jsxs("div",{className:"_2a_3",children:[h.jsx("div",{className:"_2a_5"}),h.jsx("div",{className:c,children:h.jsx(b("Image.react"),{src:a.imageSrc,size:"24"})})]}),h.jsx("div",{className:"_63kv",children:h.jsx(b("CenteredContainer.react"),{horizontal:!1,fullHeight:!0,vertical:!0,children:a.text})})]})}e.exports=a}),null);
__d("VideoClickForMoreOverlay",["cx","CSS","DOM","EventListener","VideoPlayerUIComponentDrawer"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(c,d,e){var f=this;this.$1=c;this.$2=d;this.$3=!1;this.$4=this.$1.registerDrawer(b("VideoPlayerUIComponentDrawer").priorities.ClickForMore,e?a.REDESIGN_HEIGHT:a.DEFAULT_HEIGHT);this.$4.addListener("reposition",this.$5.bind(this));this.$1.addListener("VideoControls/visibilityUpdate",function(a){a=a.areControlsVisible;return f.$6(a)});c=this.$1.getOption("VideoControls","areControlsVisible");c&&this.$6(c);this.$1.addListener("stateChange",this.$7.bind(this));b("EventListener").listen(this.$2,"click",function(){return f.$8()})}var c=a.prototype;c.$5=function(a){b("DOM").setAttributes(this.$2,{style:"bottom:"+a+"px;"})};c.$6=function(a){this.$3=a,this.$7()};c.$7=function(){var a=!this.$1.isPlayerVersion("silvercity")&&!this.$1.getIsInChannel()&&this.$1.getSource()!=="tahoe"&&this.$1.isState("playing")&&!this.$1.getOption("SottoPaywall","enable");a&&this.$3?this.$9():this.$10()};c.$8=function(){this.$1.clickVideo()};c.$9=function(){b("CSS").removeClass(this.$2,"_2is8"),this.$4.reserve()};c.$10=function(){b("CSS").addClass(this.$2,"_2is8"),this.$4.release()};return a}();a.DEFAULT_HEIGHT=18;a.REDESIGN_HEIGHT=38;e.exports=a}),null);
__d("VideoReshareLink.react",["ix","cx","fbt","React","VideoActionLink.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");function a(a){return j.jsx(b("VideoActionLink.react"),{href:a.shareURI,imageClass:"_2a_f",imageSrc:g("115553"),rel:"dialog",text:i._("Share")})}e.exports=a}),null);
__d("VideoWatchAgainLink.react",["ix","cx","fbt","React","VideoActionLink.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(){c.props.vpc.clickVideo()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){return j.jsx(b("VideoActionLink.react"),{imageClass:"_2a_d",imageSrc:g("115481"),onClick:this.$1,text:i._("Watch again")})};return c}(j.PureComponent);e.exports=a}),null);
__d("VideoEndScreenWithActions.react",["cx","CenteredContainer.react","CSS","List.react","React","SubscriptionsHandler","VideoReshareLink.react","VideoWatchAgainLink.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={playerState:"",isInTahoe:c.props.vpc.getSource()==="tahoe"},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(this.props.vpc.addListener("stateChange",function(){return a.setState({playerState:a.props.vpc.getState()})}));this.$1.addSubscriptions(this.props.vpc.addListener("TahoeController/exitTahoe",function(){a.setState({isInTahoe:!1})}));this.$1.addSubscriptions(this.props.vpc.addListener("TahoeController/enterTahoe",function(){a.setState({isInTahoe:!0})}))};d.render=function(){var a=this.props.vpc;if(!a||a.getSource()!=="inline"||this.state.isInTahoe||this.state.playerState==="destroyed")return null;a=a.getRootNode();if(this.state.playerState!=="finished"){b("CSS").addClass(a,"_2a_0");return null}b("CSS").removeClass(a,"_2a_0");return h.jsx(b("CenteredContainer.react"),{className:"_2a_1",fullHeight:!0,vertical:!0,children:h.jsxs(b("List.react"),{border:"none",className:this.state.playerState!=="finished"?"hidden_elem":"",children:[h.jsx("li",{className:"_2a_2",children:h.jsx(b("VideoWatchAgainLink.react"),{vpc:this.props.vpc})}),this.props.shareURI?h.jsx("li",{className:"_2a_2",children:h.jsx(b("VideoReshareLink.react"),{shareURI:this.props.shareURI})}):null]})})};d.componentWillUnmount=function(){this.$1.release()};return c}(h.Component);e.exports=a}),null);
__d("VideoWithClickToSnowlift",["Bootloader","logVideosClickTracking"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a,b){this.$1=a,this.$2=b,this.$1.addListener("clickVideo",this.$3.bind(this)),this.$1.hasSeenClick()&&this.$3()}var c=a.prototype;c.$3=function(){var a=this;if(this.$1.isFullscreen()){if(this.$1.getOption("VideoWithLiveBroadcast","isLive"))return;this.$1.isState("playing")?this.$1.pause("user_initiated"):(b("logVideosClickTracking")(this.$1.getVideoNode()),this.$1.play("user_initiated"))}else b("Bootloader").loadModules(["PhotoSnowlift"],function(b){return b.bootstrap(a.$2)},"VideoWithClickToSnowlift")};return a}();e.exports=a}),null);
__d("VideoWithFluentUFISupport",["UFIVideoPlayerRegistry"],(function(a,b,c,d,e,f){a=function(a){"use strict";b("UFIVideoPlayerRegistry").registerVideoPlayerController(a)};e.exports=a}),null);
__d("VideoWithSequentialAutoplay",["Arbiter","SubscriptionsHandler","VideoPlayerHTML5Experiments","destroyOnUnload"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a,c){var d=this;this.$1=a;this.$2=c;this.$3=new(b("SubscriptionsHandler"))();if(b("VideoPlayerHTML5Experiments").displayLoopingWhenAutoplayNextVideo&&this.$2&&this.$2!=="0")if(this.$1.hasOption("Looping","disabled"))this.$1.setOption("Looping","disabled",!0);else{var e=this.$1.addListener("optionsChange",function(){d.$1.hasOption("Looping","disabled")&&(d.$1.setOption("Looping","disabled",!0),e.remove())});this.$3.addSubscriptions(e)}this.$1.addListener("finishPlayback",this.$4.bind(this));this.$3.addSubscriptions(b("Arbiter").subscribe("nextVideoAutoplay",function(a,b){b.nextVideoID==d.$1.getVideoID()&&d.$1.play("autoplay_initiated")}));b("destroyOnUnload")(function(){return d.$3.release()})}var c=a.prototype;c.$4=function(){b("Arbiter").inform("nextVideoAutoplay",{nextVideoID:this.$2})};return a}();e.exports=a}),null);
__d("VideoWithVODBroadcast",[],(function(a,b,c,d,e,f){a=function(a){"use strict";a.registerOption("VideoWithVODBroadcast","isLiveVOD",function(){return!0})};e.exports=a}),null);
__d("VideoPlayButton",["CSS","EventListener","VideoDisplayTimePlayButton"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a,c,d){this.$1=a;this.$2=c;d&&(this.$3=d.hiddenAfterFinish,this.$4=d.hiddenWhilePaused,this.$5=!!d.hiddenInFallback,this.$5=d.hiddenInFallback,this.$6=d.spherical);c=b("VideoDisplayTimePlayButton").getClicked(this.$2);b("VideoDisplayTimePlayButton").unregister(this.$2);a.addListener("beginPlayback",this.$7.bind(this));a.addListener("finishPlayback",this.$8.bind(this));a.addListener("pausePlayback",this.$9.bind(this));a.addListener("buffering",this.$10.bind(this));a.addListener("buffered",this.$11.bind(this));a.addListener("stateChange",this.$12.bind(this));a.addListener("playRequested",this.$13.bind(this));a.addListener("VideoChannelController/exitChannel",this.$14.bind(this));a.addListener("clickVideo",this.$15.bind(this));a.addListener("TahoeController/enterTahoe",this.$16.bind(this));b("EventListener").listen(this.$2,"click",this.$17.bind(this));d&&d.hiddenWhileJSLoading&&!d.hiddenWhileVideoLoading&&b("CSS").show(this.$2);c&&this.$17()}var c=a.prototype;c.$12=function(){this.$1.isState("fallback")&&(this.$5||this.$1.getIsInChannel()?b("CSS").hide(this.$2):b("CSS").show(this.$2))};c.$7=function(){b("CSS").hide(this.$2)};c.$9=function(){if(this.$4||this.$1.getSource()==="inline")return;b("CSS").show(this.$2)};c.$13=function(a){if(this.$1.isState("fallback")||a==="autoplay_initiated")return;b("CSS").hide(this.$2)};c.$14=function(){(this.$1.isState("paused")&&(!this.$4||this.$6)||this.$1.isState("finished")&&!this.$3)&&b("CSS").show(this.$2)};c.$16=function(){this.$1.isState("playing")||b("CSS").show(this.$2)};c.$8=function(){var a=this.$1.getOption("Looping","isLooping");this.$3||this.$1.getIsInChannel()||this.$1.getSource()==="tahoe"||a?b("CSS").hide(this.$2):b("CSS").show(this.$2)};c.$10=function(){b("CSS").hide(this.$2)};c.$11=function(){b("CSS").hide(this.$2)};c.$17=function(){this.$1.clickVideo()};c.$15=function(){if(this.$1.isState("fallback"))return;b("CSS").hide(this.$2)};return a}();e.exports=a}),null);
__d("XVideoWithRapidFeedbackAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/instream_video/rapid_feedback/async/",{ad_type:{type:"Enum",required:!0,enumType:1},video_id:{type:"String",required:!0},ad_client_token:{type:"String"},elapsed_time_since_ad:{type:"Float"},ad_position_in_video:{type:"Float"},player_origin:{type:"Enum",enumType:1},player_sub_origin:{type:"String"},player_format:{type:"Enum",enumType:1},script_path:{type:"String"},is_indicator_shown:{type:"Bool",defaultValue:!1},is_ad_complete:{type:"Bool",defaultValue:!1}})}),null);
__d("VideoWithRapidFeedback",["AsyncRequest","DateConsts","ScriptPath","ViewportTrackingHelper","XVideoWithRapidFeedbackAsyncController","onViewportChanged"],(function(a,b,c,d,e,f){var g=10*b("DateConsts").MS_PER_SEC;a=function(){"use strict";function a(a,c){this.$1=a,this.$2=c,this.$3=0,this.$4=0,this.$6=!1,this.$7=!1,a.isState("playing")&&this.$8(),a.addListener("beginPlayback",this.$8.bind(this)),a.addListener("pausePlayback",this.$9.bind(this)),a.addListener("commercialBreak/vodBreakStarting",this.$10.bind(this)),a.addListener("commercialBreak/showUFI",this.$11.bind(this)),this.$5=this.$12(),b("onViewportChanged")(this.$13.bind(this))}var c=a.prototype;c.$8=function(){this.$3===0&&(this.$3=Date.now())};c.$9=function(){this.$3>0&&(this.$4+=Date.now()-this.$3),this.$3=0};c.$10=function(){this.$6=!0};c.$11=function(){this.$6&&(this.$7=!0)};c.$13=function(){if(this.$1.isState("destroyed"))return;var a=this.$5;this.$5=this.$12();if(a&&!this.$5){a=this.$4;this.$3>0&&(a+=Date.now()-this.$3);a>g&&(this.$4=0,this.$3=0,this.$14())}};c.$12=function(){return b("ViewportTrackingHelper").isVisible(this.$1.getRootNode(),0)};c.$14=function(){var a=null,c=null,d=null,e=null,f=null,g=null,h=this.$1.getOption("VideoWithInstreamVideo","controller");if(h){h=h.getMostRecentAdInfo();h&&h.adClientToken&&(a=h.adClientToken,c=Date.now()-h.adStartPlayingTimeMs,d=h.adPositionInVideoMs,e=h.playerOrigin,f=h.playerSubOrigin,g=h.playerFormat)}h=b("XVideoWithRapidFeedbackAsyncController").getURIBuilder().setEnum("ad_type",this.$2).setString("video_id",this.$1.getVideoID()).setString("ad_client_token",a).setFloat("elapsed_time_since_ad",c).setFloat("ad_position_in_video",d).setEnum("player_format",g).setEnum("player_origin",e).setString("player_sub_origin",f).setString("script_path",b("ScriptPath").getScriptPath()).setBool("is_indicator_shown",this.$6).setBool("is_ad_complete",this.$7);new(b("AsyncRequest"))(h.getURI()).send()};return a}();e.exports=a}),null);
__d("VideoPlayerRegistryComponent",["invariant","SubscriptionsHandler","VideoPlayerRegistry"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this.$1=a||null,this.$2=new(b("SubscriptionsHandler"))(),this.$1&&this.$3()}var c=a.prototype;c.destroy=function(){this.$4(),this.$1=null};c.getController=function(){var a=this.$1;a||g(0,2032);return a};c.enable=function(a){this.$1&&this.$1!==a&&this.$4(),this.$1=a,this.$3()};c.disable=function(a){this.$4()};c.$3=function(){var a=this,c=this.getController();b("VideoPlayerRegistry").add(c);this.$2.addSubscriptions(c.addListener("stateChange",function(){c.isState("destroyed")&&a.destroy()}))};c.$4=function(){var a=this.getController();this.$2.release();this.$2.engage();b("VideoPlayerRegistry").remove(a)};return a}();e.exports=a}),null);
__d("VODPresenceCVCDisplayStage",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PRE_ENTER:"pre_enter",POST_ENTER:"post_enter"})}),null);
__d("VideoVODCVCFetchingQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1918447051537934"};b.getQueryID=function(){return"310269563033462"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("VideoVODCVCFetching",["Run","SubscriptionsHandler","VideoVODCVCFetchingQueryWebGraphQLQuery","VODPresenceCVCDisplayStage","WebGraphQL","clearTimeout","keyMirror","promiseDone","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g=b("keyMirror")(b("VODPresenceCVCDisplayStage")),h=1e4;a=function(){function a(a){var c=this;this.$1=null;this.$3=null;this.$4=null;this.$5=h;this.$6=!1;this.$10=function(){c.$6=!0,b("clearTimeout")(c.$4)};if(a.isAd()||a.isLiveVideo())return;this.$7=a;a.registerOption("VideoVODCVCFetching","cvcData",function(){return c.$1});this.$2=new(b("SubscriptionsHandler"))();this.$2.addSubscriptions(a.addListener("beginPlayback",function(){c.$3=null}),a.addListener("updateStatus",function(b){a.isState("playing")&&(c.$3===null&&(c.$3=b.position),c.$3+3<=b.position&&(c.$3=Infinity,c.$9(a)))}),a.addListener("pausePlayback",this.$10),a.addListener("finishPlayback",function(){return!a.getOption("Looping","isLooping")&&c.$10()}),a.addListener("becomeInvisible",this.$10));b("Run").onLeave(function(){return c.cleanOnLeave()})}var c=a.prototype;c.cleanOnLeave=function(){this.$2&&this.$2.release(),this.$10(),this.$7&&this.$7.hasOption("VideoVODCVCFetching","cvcData")&&this.$7.unregisterOption("VideoVODCVCFetching","cvcData")};c.$9=function(a){this.$6=!1,this.$11(a,g.POST_ENTER)};c.getQuery=function(a,c,d,e){return new(b("VideoVODCVCFetchingQueryWebGraphQLQuery"))({video_id:a.getVideoID(),stage:c,video_asset_id:d,prev_cvc:e})};c.$11=function(a,c){var d=this,e;e=b("WebGraphQL").exec(this.getQuery(a,c,this.$8,(e=this.$1)==null?void 0:e.viewerCount));b("promiseDone")(e,function(e){if(d.$6)return;e=e.vod_presence_cvc;if(e){var f=e.cvc||0,i=e.is_displayed,j=e.next_poll_ms||h;d.$8=e.video_asset_id;d.$1={viewerCount:f,showVODIndicator:i};a.emit("VideoVODCVC/viewCountChange",d.$1);j>=0&&c===g.POST_ENTER&&(d.$4=b("setTimeout")(d.$11.bind(d,a,c),j))}},function(e){if(d.$6)return;d.$4=b("setTimeout")(d.$11.bind(d,a,c),d.$5);d.$5=Math.min(Number.MAX_SAFE_INTEGER,2*d.$5)})};return a}();e.exports=a}),null);
__d("VideoVODCVCSubscription",["EntityPresenceClient","EntityPresenceManager","Int64","Run","SubscriptionsHandler","gkx"],(function(a,b,c,d,e,f){"use strict";var g=42,h=7,i=5;a=function(){function a(a){var c=this;this.$7=function(){c.$5=null,c.$4&&(c.$4&&c.$4.leave(),c.$4=null)};if(a.isAd()||a.isLiveVideo())return;this.$1=new(b("SubscriptionsHandler"))();this.$4=null;this.$2=a;this.$3=this.$2.getPlayerOrigin();this.$5=null;this.$1.addSubscriptions(a.addListener("beginPlayback",function(){c.$5=null}),a.addListener("updateStatus",function(a){c.$2.isState("playing")&&(c.$5===null&&(c.$5=a.position),c.$5+3<=a.position&&(c.$5=Infinity,c.$6()))}),a.addListener("pausePlayback",this.$7),a.addListener("finishPlayback",function(){return!a.getOption("Looping","isLooping")&&c.$7()}),a.addListener("becomeInvisible",this.$7),a.addListener("seekEnd",this.$7),a.addListener("TahoeController/exitTahoe",this.$7));b("Run").onLeave(function(){return c.cleanOnLeave()})}var c=a.prototype;c.cleanOnLeave=function(){this.$7(),this.$1&&this.$1.release()};c.$6=function(){if(this.$4)return;this.$4=b("gkx")("1275879")?b("EntityPresenceClient").enter("vod",this.$2.getVideoID(),this.getLoggingCapabilitiesForEntityPresence().toString()):b("EntityPresenceManager").enter("vod",this.$2.getVideoID(),this.getLoggingCapabilitiesForEntityPresence())};c.getLoggingCapabilitiesForEntityPresence=function(){var a,c;(a=b("Int64")).fromInt(0);c=a.fromString(Date.now().toString());var d=7;c=c.shiftLeft(d);c=c.add(a.fromInt(1));d=64-(g+h+i+d);c=c.shiftLeft(d);c=c.shiftLeft(i);c=c.add(a.fromInt(this.mapPlayerFormatToCapabilityBits(this.$2.getPlayerFormat())));c=c.shiftLeft(h);c=c.add(a.fromInt(this.mapPlayerOriginToCapabilityBits(this.$3)));return c};c.mapPlayerOriginToCapabilityBits=function(a){if(a===null)return 0;switch(a){case"commerce":return 12;case"direct_inbox":return 4;case"events":return 18;case"explorefeed":return 19;case"fb_stories":return 5;case"group":return 11;case"instant_articles":return 16;case"instant_shopping":return 16;case"live_chaining":return 22;case"living_room":return 9;case"living_room_recap":return 8;case"media_gallery":return 3;case"movie_checkout_flow":return 21;case"newsfeed":return 13;case"notifications":return 7;case"page_timeline":return 17;case"permalink":return 15;case"photosfeed":return 14;case"saved":return 23;case"search":return 20;case"top_live_bookmark":return 1;case"user_timeline":return 24;case"video_home":return 2;case"unknown":default:return 0}};c.mapPlayerFormatToCapabilityBits=function(a){if(a===null)return 0;switch(a){case"inline":return 1;case"snowlift":return 2;case"permalink":return 3;case"channel":return 4;case"full_screen":return 5;case"social_player":return 6;case"tv":return 7;case"misc":return 8;case"watch_scroll":return 9;case"watch_scroll_app_background":return 10;case"watch_and_go":return 11;case"watch_and_browse":return 12;case"canvas":return 13;case"tahoe":return 14;case"fb_stories":return 15;default:return 0}};return a}();e.exports=a}),null);
__d("VideoVODCVCUI.react",["ix","cx","Image.react","React","asset","intlSummarizeNumber"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return i.jsxs("div",{className:"_75tx",children:[i.jsx(b("Image.react"),{className:"_75ty",src:g("488783")}),b("intlSummarizeNumber")(this.props.viewerCount)]})};return c}(i.PureComponent);e.exports=a}),null);
__d("VideoVODIndicator.react",["cx","fbt","BasicFBNux","JSResource","React","SubscriptionsHandler","TooltipData","VideoVODCVCUI.react","gkx","joinClasses","lazyLoadComponent"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=b("lazyLoadComponent")(b("JSResource")("XUIAmbientNUX.react").__setRef("VideoVODIndicator.react")),k=6171,l=!1;a=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;d.$2=null;d.state={showVODIndicator:!1,isDisplayingAdBreak:!1,viewerCount:null,showNUX:!1};d.$3=function(){b("BasicFBNux").onDismiss(k),d.setState({showNUX:!1})};c=d.props.vpc;if(d.props.renderLocation==="tahoeBackAffordance")if(b("gkx")("1210328")){if(c.isLiveVideo())return babelHelpers.assertThisInitialized(d);var e=c.getOption("UnifiedCVC","cvcData");e!=null&&(d.state.showVODIndicator=!e.h,d.state.viewerCount=e.c)}else{e=c.getOption("VideoVODCVCFetching","cvcData");e&&(d.state.showVODIndicator=e.showVODIndicator,d.state.viewerCount=e.viewerCount)}return d}var d=c.prototype;d.initSubscriptions=function(a){var c=this;this.$2=new(b("SubscriptionsHandler"))();this.$2.addSubscriptions(a.addListener("VideoVODCVC/viewCountChange",function(a){b("gkx")("1210328")||c.setState({showVODIndicator:a.showVODIndicator,viewerCount:a.viewerCount})}),a.addListener("finishPlayback",function(){return!a.getOption("Looping","isLooping")&&c.setState({showVODIndicator:!1})}),a.addListener("commercialBreak/vodBreakStarting",function(){c.setState({isDisplayingAdBreak:!0})}),a.addListener("commercialBreak/showUFI",function(){c.setState({isDisplayingAdBreak:!1})}),a.addListener("unifiedCVC/update",function(d){b("gkx")("1210328")&&!a.isLiveVideo()&&c.setState({showVODIndicator:!d.h,viewerCount:d.c})}))};d.releaseSubscriptions=function(){this.$2&&this.$2.release()};d.componentDidMount=function(){this.initSubscriptions(this.props.vpc)};d.componentWillUnmount=function(){this.releaseSubscriptions()};d.render=function(){var a=this;if(!this.state.showVODIndicator||!this.state.viewerCount||this.state.isDisplayingAdBreak)return null;var c=null,d=null;this.state.showNUX?(d=i.jsx(i.Suspense,{fallback:null,children:i.jsx(j,{contextRef:function(){return a.$1},position:"right",shown:!0,onCloseButtonClick:this.$3,children:h._("See how many people are watching this video now")})}),l||(l=!0,b("BasicFBNux").onView(k))):c=b("TooltipData").propsFor(h._("Number of people watching now"),"right");return i.jsxs("div",babelHelpers["extends"]({className:b("joinClasses")("_75ug"+(this.props.renderLocation==="tahoeBackAffordance"?" _7348":"")+(this.props.renderLocation==="videoHomeFeedUnit"?" _72u5":"")+(this.props.renderLocation==="videoNewsFeedUnit"?" _75uh":"")+" uiContextualLayerParent")},c,{children:[i.jsx(b("VideoVODCVCUI.react"),{ref:function(b){return a.$1=b},viewerCount:this.state.viewerCount}),d]}))};return c}(i.Component);e.exports=a}),null);
__d("PlayerKeyboardControls.react",["ix","cx","CenteredContainer.react","Event","EventListener","FBCircularGlyph.react","Image.react","Keys","LiveRewindUtils","LiveVideoPlayerActions","React","ReactDOM","asset","clamp","joinClasses"],(function(a,b,c,d,e,f,g,h){var i=b("React"),j=10,k=.1;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={action:null},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$1=b("EventListener").listen(this.props.controller.getRootNode(),"keydown",this.$2.bind(this))};d.componentWillUnmount=function(){this.$1&&this.$1.remove()};d.$3=function(){if(!this.props.isLiveRewindEnabled)return;var a=this.props.controller,c=a.getCurrentTimePosition();this.setState({action:"pause"});a.pause("user_initiated");b("LiveVideoPlayerActions").setIsRewound(a,!0);b("LiveRewindUtils").logLiveRewindEvent("pause",a,null,c,null,c)};d.$4=function(){if(!this.props.isLiveRewindEnabled)return;var a=this.props.controller,c=a.getCurrentTimePosition();this.setState({action:"play"});a.play("user_initiated");b("LiveRewindUtils").logLiveRewindEvent("play",a,null,c,null,c)};d.$5=function(){return this.props.seekFrameWhenPaused&&!this.props.controller.isState("playing")?1/30:this.props.seekIncrement};d.$2=function(a){var c=this.props.controller,d=this.props.controller.getSource()==="tahoe";if(this.props.isFullscreenRequired&&!c.isFullscreen())return;var e=c.getCurrentTimePosition(),f=c.getVolume();switch(b("Event").getKeyCode(a)){case b("Keys").SPACE:d&&a.preventDefault();if(c.isState("playing")){if(this.props.isLiveStreaming){this.$3();break}this.setState({action:"pause"});c.pause("user_initiated")}else{if(this.props.isLiveStreaming){this.$4();break}this.setState({action:"play"});c.play("user_initiated")}break;case b("Keys").LEFT:if(this.props.isLiveStreaming){this.props.isLiveRewindEnabled&&(b("LiveRewindUtils").seekBack(c),this.setState({action:"rewind"}));break}this.setState({action:"rewind"});c.seek(e-this.$5());break;case b("Keys").RIGHT:if(this.props.isLiveStreaming){this.props.isLiveRewindEnabled&&(b("LiveRewindUtils").seekForward(c),this.setState({action:"forward"}));break}this.setState({action:"forward"});c.seek(e+this.$5());break;case b("Keys").UP:if(!c.isBroadcaster()&&c.isAudioBlocked())break;d&&a.preventDefault();e=Math.min(f+k,1);this.setState({action:"volume-up"});c.setVolume(e);c.isMuted()&&c.unmute();break;case b("Keys").DOWN:if(!c.isBroadcaster()&&c.isAudioBlocked())break;d&&a.preventDefault();e=Math.max(f-k,0);e<.001?(this.setState({action:"mute"}),c.mute()):(this.setState({action:"volume-down"}),c.setVolume(e));break;case b("Keys").M:if(!c.isBroadcaster()&&c.isAudioBlocked())break;c.isMuted()?(this.setState({action:"unmute"}),c.unmute()):(this.setState({action:"mute"}),c.mute());break;case b("Keys").F:c.isFullscreen()?this.setState({action:"exit-fs"}):this.setState({action:"enter-fs"});setTimeout(function(){return c.toggleFullscreen()},100);break;case b("Keys").COMMA:this.props.enablePlaybackRateControl&&c.setPlaybackRate(b("clamp")(c.getPlaybackRate()/2,.5,1));break;case b("Keys").PERIOD:this.props.enablePlaybackRateControl&&c.setPlaybackRate(b("clamp")(c.getPlaybackRate()*2,1,2));break}};d.render=function(){if(!this.state.action)return null;var a=this.props.controller,c="",d="",e=null;switch(this.state.action){case"play":c=g("476305");break;case"pause":c=g("476304");break;case"rewind":c=g("476307");d="_380-";a.isState("playing")?e=this.props.seekIncrement!==j?null:i.jsx(b("Image.react"),{className:"_pa6",src:g("476306")}):e=this.props.seekFrameWhenPaused?null:i.jsx(b("Image.react"),{className:"_pa6",src:g("476306")});break;case"forward":c=g("476308");d="_3813";a.isState("playing")?e=this.props.seekIncrement!==j?null:i.jsx(b("Image.react"),{className:"_pa6",src:g("476306")}):e=this.props.seekFrameWhenPaused?null:i.jsx(b("Image.react"),{className:"_pa6",src:g("476306")});break;case"volume-up":case"unmute":c=g("476301");break;case"volume-down":c=g("476302");break;case"mute":c=g("476303");break;case"enter-fs":c=g("476310");break;case"exit-fs":c=g("476309");break}a=i.jsx(b("FBCircularGlyph.react"),{circleSize:120,className:b("joinClasses")(d,"_3814"),glyph:c,ref:function(a){a=b("ReactDOM").findDOMNode(a);if(!a||!d)return;a.classList.remove(d);void a.offsetWidth;a.classList.add(d)}});return i.jsx(b("CenteredContainer.react"),{className:"_3815 _381b",fullHeight:!0,horizontal:!0,ref:function(a){a=b("ReactDOM").findDOMNode(a);if(!a)return;a.classList.remove("_381b");void a.offsetWidth;a.classList.add("_381b")},vertical:!0,children:i.jsxs("div",{children:[a,e]})})};return c}(i.Component);a.defaultProps={enablePlaybackRateControl:!1,isFullscreenRequired:!1,seekIncrement:j,seekFrameWhenPaused:!1};e.exports=a}),null);
__d("EmbeddedVideoPauseOverlay",["cx","fbt","Arbiter","CSS","DOM","DOMDimensions","EventListener","VideoPlayerExperiments","throttle"],(function(a,b,c,d,e,f,g,h){var i="_3bw";a=function(){"use strict";function a(a,c,d,e,f,g,i,j,k){var l=this;this.$1=c;this.$2=a;this.$3=d;this.$4=e;this.$5=f;this.$6=g;this.$7=i;this.$8=j;this.$9=0;k?(this.$10=k.showOnlyOnFullscreen,this.$11=k.showOnEndscreen):(this.$10=!1,this.$11=!0);this.$12=h._("Like");this.$13=h._("Unlike");this.$14=h._("Share");this.$15();this.$2.addListener("beginPlayback",this.$16.bind(this));this.$2.addListener("pausePlayback",this.$17.bind(this));this.$2.addListener("finishPlayback",this.$17.bind(this));this.$2.addListener("toggleFullscreen",this.$18.bind(this));b("EventListener").listen(this.$2.getRootNode(),"mousemove",b("throttle")(this.$19.bind(this),200));b("EventListener").listen(this.$2.getRootNode(),"mouseenter",function(){l.$20=!0});b("EventListener").listen(this.$2.getRootNode(),"mouseleave",function(){l.$2.isState("playing")&&(l.$20=!1,l.$21())});b("Arbiter").subscribe("embeddedUfiToggle",function(){l.$22(),l.$23()});b("EventListener").listen(window,"resize",b("throttle")(function(){l.$23()},100))}var c=a.prototype;c.$16=function(){this.$22(),this.$23(),this.$19()};c.$22=function(){var a;this.$2.isFullscreen()?a=64:a=32;this.$15();this.$9=b("DOMDimensions").getElementDimensions(this.$3).width+b("DOMDimensions").getElementDimensions(this.$4).width+a};c.$23=function(){if(this.$2.isState("destroyed"))return;var a=b("DOMDimensions").getElementDimensions(this.$2.getRootNode()).width;a=a<this.$9;a?this.$24():this.$15()};c.$15=function(){this.$6&&b("DOM").setContent(this.$6,this.$14),this.$7&&b("DOM").setContent(this.$7,this.$12),this.$8&&b("DOM").setContent(this.$8,this.$13),this.$5&&this.$5.showText()};c.$24=function(){this.$6&&b("DOM").setContent(this.$6,null),this.$7&&b("DOM").setContent(this.$7,null),this.$8&&b("DOM").setContent(this.$8,null),this.$5&&this.$5.hideText()};c.$25=function(){return this.$10&&!this.$2.isFullscreen()?!1:this.$2.isState("playing")&&this.$20||this.$2.isState("paused")||this.$26&&this.$2.isState("finished")};c.$19=function(){var a=this;this.$25()&&(this.$27(),clearTimeout(this.$28),this.$28=setTimeout(function(){a.$2.isState("playing")&&a.$21()},3e3))};c.$18=function(){this.$25()?this.$27():this.$21()};c.$17=function(){this.$25()?this.$27():this.$21()};c.$27=function(){b("CSS").removeClass(this.$1,i)};c.$21=function(){b("CSS").addClass(this.$1,i)};return a}();e.exports=a}),null);