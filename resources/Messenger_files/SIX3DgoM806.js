if (self.CavalryLogger) { CavalryLogger.start_js(["EsN9S"]); }

__d("MercuryImageShareAttachment.react",["Link.react","MercuryFallbackShareAttachment.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MercuryShareSizeImageByWidthMixin","MessengerPhotoishXMA.react","React","createReactClass_DEPRECATED","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=b("createReactClass_DEPRECATED")({displayName:"MercuryImageShareAttachment",mixins:[b("MercuryShareSizeImageByWidthMixin")],propTypes:{attachment:b("MercuryShareAttachmentReactShape"),location:b("prop-types").oneOf(b("MercuryShareAttachmentRenderLocations").getValues()),maxWidth:b("prop-types").number},render:function(){if(this.props.location===b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW)return g.jsx(b("MercuryFallbackShareAttachment.react"),babelHelpers["extends"]({},this.props));else if(this.props.location===b("MercuryShareAttachmentRenderLocations").MESSENGER)return g.jsx(b("MessengerPhotoishXMA.react"),{attachType:"photo",attachments:[this.props.attachment]});var a=this.props.attachment&&this.props.attachment.uri;return g.jsx(b("Link.react"),{href:a,target:"_blank",children:this._renderImage()})}});e.exports=a}),null);