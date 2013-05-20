/**
 * Backbone PJAX Utilities
 * Version 0.1
 *
 * https://github.com/jeromegn/backbone.pjax
 */

!function(root,factory){if(typeof exports==="object"){module.exports=factory(require("underscore"),require("backbone"))}else if(typeof define==="function"&&define.amd){define(["underscore","backbone"],function(_,Backbone){return factory(_||root._,Backbone||root.Backbone)})}else{factory(_,Backbone)}}(this,function(_,Backbone){Backbone.PJAX={Router:Backbone.Router.extend({constructor:function(){Backbone.Router.apply(this,arguments);if(!(this.container instanceof Backbone.$))this.container=Backbone.$(this.container);return this},route:function(route,name,callback){Backbone.Router.prototype.route.apply(this,arguments);return this},navigate:function(fragment,options){var opts=_.clone(options||{});opts.pjax=true;this.trigger("pjax:start",fragment);Backbone.Router.prototype.navigate.apply(this,[fragment,opts]);var router=this;$.ajax({url:"/"+fragment,success:function(data){router.container.html(data);router.trigger("pjax:success")},error:function(){router.trigger("pjax:error")}})}})}});