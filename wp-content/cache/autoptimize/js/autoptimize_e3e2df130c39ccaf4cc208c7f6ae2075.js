/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
(function($){$.extend($.fn,{validate:function(options){if(!this.length){options&&options.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return;}
var validator=$.data(this[0],'validator');if(validator){return validator;}
this.attr('novalidate','novalidate');validator=new $.validator(options,this[0]);$.data(this[0],'validator',validator);if(validator.settings.onsubmit){var inputsAndButtons=this.find("input, button");inputsAndButtons.filter(".cancel").click(function(){validator.cancelSubmit=true;});if(validator.settings.submitHandler){inputsAndButtons.filter(":submit").click(function(){validator.submitButton=this;});}
this.submit(function(event){if(validator.settings.debug)
event.preventDefault();function handle(){if(validator.settings.submitHandler){if(validator.submitButton){var hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);}
validator.settings.submitHandler.call(validator,validator.currentForm,event);if(validator.submitButton){hidden.remove();}
return false;}
return true;}
if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}
if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}
return handle();}else{validator.focusInvalid();return false;}});}
return validator;},valid:function(){if($(this[0]).is('form')){return this.validate().form();}else{var valid=true;var validator=$(this[0].form).validate();this.each(function(){valid&=validator.element(this);});return valid;}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,'validator').settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));staticRules[element.name]=existingRules;if(argument.messages)
settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}
var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}
var data=$.validator.normalizeRules($.extend({},$.validator.metadataRules(element),$.validator.classRules(element),$.validator.attributeRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data);}
return data;}});$.extend($.expr[":"],{blank:function(a){return!$.trim(""+a.value);},filled:function(a){return!!$.trim(""+a.value);},unchecked:function(a){return!a.checked;}});$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init();};$.validator.format=function(source,params){if(arguments.length==1)
return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};if(arguments.length>2&&params.constructor!=Array){params=$.makeArray(arguments).slice(1);}
if(params.constructor!=Array){params=[params];}
$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),n);});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(element,event){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(element)).hide();}},onfocusout:function(element,event){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element,event){if(element.name in this.submitted||element==this.lastElement){this.element(element);}},onclick:function(element,event){if(element.name in this.submitted)
this.element(element);else if(element.parentNode.name in this.submitted)
this.element(element.parentNode);},highlight:function(element,errorClass,validClass){if(element.type==='radio'){this.findByName(element.name).addClass(errorClass).removeClass(validClass);}else{$(element).addClass(errorClass).removeClass(validClass);}},unhighlight:function(element,errorClass,validClass){if(element.type==='radio'){this.findByName(element.name).removeClass(errorClass).addClass(validClass);}else{$(element).removeClass(errorClass).addClass(validClass);}}},setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"Este campo é obrigatório",remote:"Por favor conserte esse campo.",email:"Digite um email válido.",url:"Digite uma URL válida",date:"Digite um data válida.",dateISO:"Digite um data válida (ISO).",number:"Digite um número válido.",digits:"Digite apenas números.",creditcard:"Digite um número de cartão de crédito válido.",equalTo:"Digite a mesma senha.",accept:"Digite um valor com uma extensão válida.",maxlength:$.validator.format("Digite não mais do que {0} caracteres."),minlength:$.validator.format("Digite no mínimo {0} caracteres."),rangelength:$.validator.format("Digite um valor entre {0} e {1} caracteres."),range:$.validator.format("Digite um valor entre {0} e {1}."),max:$.validator.format("Digite um valor menor que ou igual a {0}."),min:$.validator.format("Digite um valor maior que ou igual a {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=(this.groups={});$.each(this.settings.groups,function(key,value){$.each(value.split(/\s/),function(index,name){groups[name]=key;});});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator"),eventType="on"+event.type.replace(/^validate/,"");validator.settings[eventType]&&validator.settings[eventType].call(validator,this[0],event);}
$(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, "+"[type='number'], [type='search'] ,[type='tel'], [type='url'], "+"[type='email'], [type='datetime'], [type='date'], [type='month'], "+"[type='week'], [type='time'], [type='datetime-local'], "+"[type='range'], [type='color'] ","focusin focusout keyup",delegate).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",delegate);if(this.settings.invalidHandler)
$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid())
$(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=(this.currentElements=this.elements());elements[i];i++){this.check(elements[i]);}
return this.valid();},element:function(element){element=this.validationTargetFor(this.clean(element));this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element)!==false;if(result){delete this.invalid[element.name];}else{this.invalid[element.name]=true;}
if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers);}
this.showErrors();return result;},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}
this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}
this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){if($.fn.resetForm)
$(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass);},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){var count=0;for(var i in obj)
count++;return count;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return this.size()==0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name==lastActive.name;}).length==1&&lastActive;},elements:function(){var validator=this,rulesCache={};return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&validator.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in rulesCache||!validator.objectLength($(this).rules()))
return false;rulesCache[this.name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){return $(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext);},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},check:function(element){element=this.validationTargetFor(this.clean(element));var rules=$(element).rules();var dependencyMismatch=false;for(var method in rules){var rule={method:method,parameters:rules[method]};try{var result=$.validator.methods[method].call(this,element.value.replace(/\r/g,""),element,rule.parameters);if(result=="dependency-mismatch"){dependencyMismatch=true;continue;}
dependencyMismatch=false;if(result=="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}
if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){this.settings.debug&&window.console&&console.log("exception occured when checking element "+element.id
+", check the '"+rule.method+"' method",e);throw e;}}
if(dependencyMismatch)
return;if(this.objectLength(rules))
this.successList.push(element);return true;},customMetaMessage:function(element,method){if(!$.metadata)
return;var meta=this.settings.meta?$(element).metadata()[this.settings.meta]:$(element).metadata();return meta&&meta.messages&&meta.messages[method];},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor==String?m:m[method]);},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined)
return arguments[i];}
return undefined;},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customMetaMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message=="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=jQuery.format(message.replace(theregex,'{$1}'),rule.parameters);}
this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper)
toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));return toToggle;},defaultShowErrors:function(){for(var i=0;this.errorList[i];i++){var error=this.errorList[i];this.settings.highlight&&this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);this.showLabel(error.element,error.message);}
if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}
if(this.settings.success){for(var i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}
if(this.settings.unhighlight){for(var i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}
this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass(this.settings.validClass).addClass(this.settings.errorClass);label.attr("generated")&&label.html(message);}else{label=$("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(element),generated:true}).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}
if(!this.labelContainer.append(label).length)
this.settings.errorPlacement?this.settings.errorPlacement(label,$(element)):label.insertAfter(element);}
if(!message&&this.settings.success){label.text("");typeof this.settings.success=="string"?label.addClass(this.settings.success):this.settings.success(label);}
this.toShow=this.toShow.add(label);},errorsFor:function(element){var name=this.idOrName(element);return this.errors().filter(function(){return $(this).attr('for')==name;});},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},validationTargetFor:function(element){if(this.checkable(element)){element=this.findByName(element.name).not(this.settings.ignore)[0];}
return element;},checkable:function(element){return/radio|checkbox/i.test(element.type);},findByName:function(name){var form=this.currentForm;return $(document.getElementsByName(name)).map(function(index,element){return element.form==form&&element.name==name&&element||null;});},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case'select':return $("option:selected",element).length;case'input':if(this.checkable(element))
return this.findByName(element.name).filter(':checked').length;}
return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param,element){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){return!$.validator.methods.required.call(this,$.trim(element.value),element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0)
this.pendingRequest=0;delete this.pending[element.name];if(valid&&this.pendingRequest==0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false;}else if(!valid&&this.pendingRequest==0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){className.constructor==String?this.classRuleSettings[className]=rules:$.extend(this.classRuleSettings,className);},classRules:function(element){var rules={};var classes=$(element).attr('class');classes&&$.each(classes.split(' '),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});return rules;},attributeRules:function(element){var rules={};var $element=$(element);for(var method in $.validator.methods){var value;if(method==='required'&&typeof $.fn.prop==='function'){value=$element.prop(method);}else{value=$element.attr(method);}
if(value){rules[method]=value;}else if($element[0].getAttribute("type")===method){rules[method]=true;}}
if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}
return rules;},metadataRules:function(element){if(!$.metadata)return{};var meta=$.data(element.form,'validator').settings.meta;return meta?$(element).metadata()[meta]:$(element).metadata();},staticRules:function(element){var rules={};var validator=$.data(element.form,'validator');if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}
return rules;},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return;}
if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}
if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});$.each(['minlength','maxlength','min','max'],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(['rangelength','range'],function(){if(rules[this]){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}
if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}
if(rules.messages){delete rules.messages;}
return rules;},normalizeRule:function(data){if(typeof data=="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}
return data;},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!=undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{required:function(value,element,param){if(!this.depend(param,element))
return"dependency-mismatch";switch(element.nodeName.toLowerCase()){case'select':var val=$(element).val();return val&&val.length>0;case'input':if(this.checkable(element))
return this.getLength(value,element)>0;default:return $.trim(value).length>0;}},remote:function(value,element,param){if(this.optional(element))
return"dependency-mismatch";var previous=this.previousValue(element);if(!this.settings.messages[element.name])
this.settings.messages[element.name]={};previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param=="string"&&{url:param}||param;if(this.pending[element.name]){return"pending";}
if(previous.old===value){return previous.valid;}
previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true;if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);validator.showErrors();}else{var errors={};var message=response||validator.defaultMessage(element,"remote");errors[element.name]=previous.message=$.isFunction(message)?message(value):message;validator.showErrors(errors);}
previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";},minlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)>=param;},maxlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)<=param;},rangelength:function(value,element,param){var length=this.getLength($.trim(value),element);return this.optional(element)||(length>=param[0]&&length<=param[1]);},min:function(value,element,param){return this.optional(element)||value>=param;},max:function(value,element,param){return this.optional(element)||value<=param;},range:function(value,element,param){return this.optional(element)||(value>=param[0]&&value<=param[1]);},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);},url:function(value,element){return this.optional(element)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value));},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},creditcard:function(value,element){if(this.optional(element))
return"dependency-mismatch";if(/[^0-9 -]+/.test(value))
return false;var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(var n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);var nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9)
nDigit-=9;}
nCheck+=nDigit;bEven=!bEven;}
return(nCheck%10)==0;},accept:function(value,element,param){param=typeof param=="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";return this.optional(element)||value.match(new RegExp(".("+param+")$","i"));},equalTo:function(value,element,param){var target=$(param).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid();});return value==target.val();}}});$.format=$.validator.format;})(jQuery);;(function($){var pendingRequests={};if($.ajaxPrefilter){$.ajaxPrefilter(function(settings,_,xhr){var port=settings.port;if(settings.mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}
pendingRequests[port]=xhr;}});}else{var ajax=$.ajax;$.ajax=function(settings){var mode=("mode"in settings?settings:$.ajaxSettings).mode,port=("port"in settings?settings:$.ajaxSettings).port;if(mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}
return(pendingRequests[port]=ajax.apply(this,arguments));}
return ajax.apply(this,arguments);};}})(jQuery);;(function($){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){$.each({focus:'focusin',blur:'focusout'},function(original,fix){$.event.special[fix]={setup:function(){this.addEventListener(original,handler,true);},teardown:function(){this.removeEventListener(original,handler,true);},handler:function(e){arguments[0]=$.event.fix(e);arguments[0].type=fix;return $.event.handle.apply(this,arguments);}};function handler(e){e=$.event.fix(e);e.type=fix;return $.event.handle.call(this,e);}});};$.extend($.fn,{validateDelegate:function(delegate,type,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});}});})(jQuery);
(function($){$.fn.caret=function(begin,end){if(this.length==0)return;if(typeof begin=='number'){end=(typeof end=='number')?end:begin;return this.each(function(){if(this.setSelectionRange){this.focus();this.setSelectionRange(begin,end);}else if(this.createTextRange){var range=this.createTextRange();range.collapse(true);range.moveEnd('character',end);range.moveStart('character',begin);range.select();}});}else{if(this[0].setSelectionRange){begin=this[0].selectionStart;end=this[0].selectionEnd;}else if(document.selection&&document.selection.createRange){var range=document.selection.createRange();begin=0-range.duplicate().moveStart('character',-100000);end=begin+range.text.length;}
return{begin:begin,end:end};}};var charMap={'9':"[0-9]",'a':"[A-Za-z]",'*':"[A-Za-z0-9]"};$.mask={addPlaceholder:function(c,r){charMap[c]=r;}};$.fn.unmask=function(){return this.trigger("unmask");};$.fn.mask=function(mask,settings){settings=$.extend({placeholder:"_",completed:null},settings);var re=new RegExp("^"+
$.map(mask.split(""),function(c,i){return charMap[c]||((/[A-Za-z0-9]/.test(c)?"":"\\")+c);}).join('')+"$");return this.each(function(){var input=$(this);var buffer=new Array(mask.length);var locked=new Array(mask.length);var valid=false;var ignore=false;var firstNonMaskPos=null;$.each(mask.split(""),function(i,c){locked[i]=(charMap[c]==null);buffer[i]=locked[i]?c:settings.placeholder;if(!locked[i]&&firstNonMaskPos==null)
firstNonMaskPos=i;});function focusEvent(){checkVal();writeBuffer();setTimeout(function(){$(input[0]).caret(valid?mask.length:firstNonMaskPos);},0);};function keydownEvent(e){var pos=$(this).caret();var k=e.keyCode;ignore=(k<16||(k>16&&k<32)||(k>32&&k<41));if((pos.begin-pos.end)!=0&&(!ignore||k==8||k==46)){clearBuffer(pos.begin,pos.end);}
if(k==8){while(pos.begin-->=0){if(!locked[pos.begin]){buffer[pos.begin]=settings.placeholder;if($.browser.opera){s=writeBuffer();input.val(s.substring(0,pos.begin)+" "+s.substring(pos.begin));$(this).caret(pos.begin+1);}else{writeBuffer();$(this).caret(Math.max(firstNonMaskPos,pos.begin));}
return false;}}}else if(k==46){clearBuffer(pos.begin,pos.begin+1);writeBuffer();$(this).caret(Math.max(firstNonMaskPos,pos.begin));return false;}else if(k==27){clearBuffer(0,mask.length);writeBuffer();$(this).caret(firstNonMaskPos);return false;}};function keypressEvent(e){if(ignore){ignore=false;return(e.keyCode==8)?false:null;}
e=e||window.event;var k=e.charCode||e.keyCode||e.which;var pos=$(this).caret();if(e.ctrlKey||e.altKey){return true;}else if((k>=41&&k<=122)||k==32||k>186){var p=seekNext(pos.begin-1);if(p<mask.length){if(new RegExp(charMap[mask.charAt(p)]).test(String.fromCharCode(k))){buffer[p]=String.fromCharCode(k);writeBuffer();var next=seekNext(p);$(this).caret(next);if(settings.completed&&next==mask.length)
settings.completed.call(input);}}}
return false;};function clearBuffer(start,end){for(var i=start;i<end&&i<mask.length;i++){if(!locked[i])
buffer[i]=settings.placeholder;}};function writeBuffer(){return input.val(buffer.join('')).val();};function checkVal(){var test=input.val();var pos=0;for(var i=0;i<mask.length;i++){if(!locked[i]){buffer[i]=settings.placeholder;while(pos++<test.length){var reChar=new RegExp(charMap[mask.charAt(i)]);if(test.charAt(pos-1).match(reChar)){buffer[i]=test.charAt(pos-1);break;}}}}
var s=writeBuffer();if(!s.match(re)){input.val("");clearBuffer(0,mask.length);valid=false;}else
valid=true;};function seekNext(pos){while(++pos<mask.length){if(!locked[pos])
return pos;}
return mask.length;};input.one("unmask",function(){input.unbind("focus",focusEvent);input.unbind("blur",checkVal);input.unbind("keydown",keydownEvent);input.unbind("keypress",keypressEvent);if($.browser.msie)
this.onpaste=null;else if($.browser.mozilla)
this.removeEventListener('input',checkVal,false);});input.bind("focus",focusEvent);input.bind("blur",checkVal);input.bind("keydown",keydownEvent);input.bind("keypress",keypressEvent);if($.browser.msie)
this.onpaste=function(){setTimeout(checkVal,0);};else if($.browser.mozilla)
this.addEventListener('input',checkVal,false);checkVal();});};})(jQuery);
jQuery.validator.addMethod("cpf",function(value,element){value=jQuery.trim(value);value=value.replace('.','');value=value.replace('.','');cpf=value.replace('-','');while(cpf.length<11)cpf="0"+cpf;var expReg=/^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;var a=[];var b=new Number;var c=11;for(i=0;i<11;i++){a[i]=cpf.charAt(i);if(i<9)b+=(a[i]*--c);}
if((x=b%11)<2){a[9]=0}else{a[9]=11-x}
b=0;c=11;for(y=0;y<10;y++)b+=(a[y]*c--);if((x=b%11)<2){a[10]=0;}else{a[10]=11-x;}
var retorno=true;if((cpf.charAt(9)!=a[9])||(cpf.charAt(10)!=a[10])||cpf.match(expReg))retorno=false;return this.optional(element)||retorno;},"Informe um CPF válido.");jQuery.validator.addMethod("dateBR",function(value,element){if(value.length!=10)return false;var data=value;var dia=data.substr(0,2);var barra1=data.substr(2,1);var mes=data.substr(3,2);var barra2=data.substr(5,1);var ano=data.substr(6,4);if(data.length!=10||barra1!="/"||barra2!="/"||isNaN(dia)||isNaN(mes)||isNaN(ano)||dia>31||mes>12)return false;if((mes==4||mes==6||mes==9||mes==11)&&dia==31)return false;if(mes==2&&(dia>29||(dia==29&&ano%4!=0)))return false;if(ano<1900)return false;return true;},"Informe uma data válida");jQuery.validator.addMethod("dateTimeBR",function(value,element){if(value.length!=16)return false;if(value.substr(10,1)!=' ')return false;var arrOpcoes=value.split(' ');if(arrOpcoes.length!=2)return false;var data=arrOpcoes[0];var dia=data.substr(0,2);var barra1=data.substr(2,1);var mes=data.substr(3,2);var barra2=data.substr(5,1);var ano=data.substr(6,4);if(data.length!=10||barra1!="/"||barra2!="/"||isNaN(dia)||isNaN(mes)||isNaN(ano)||dia>31||mes>12)return false;if((mes==4||mes==6||mes==9||mes==11)&&dia==31)return false;if(mes==2&&(dia>29||(dia==29&&ano%4!=0)))return false;var horario=arrOpcoes[1];var hora=horario.substr(0,2);var doispontos=horario.substr(2,1);var minuto=horario.substr(3,2);if(horario.length!=5||isNaN(hora)||isNaN(minuto)||hora>23||minuto>59||doispontos!=":")return false;return true;},"Informe uma data e uma hora validade");jQuery.validator.addMethod("cnpj",function(cnpj,element){cnpj=jQuery.trim(cnpj);cnpj=cnpj.replace('/','');cnpj=cnpj.replace('.','');cnpj=cnpj.replace('.','');cnpj=cnpj.replace('-','');var numeros,digitos,soma,i,resultado,pos,tamanho,digitos_iguais;digitos_iguais=1;if(cnpj.length<14&&cnpj.length<15){return this.optional(element)||false;}
for(i=0;i<cnpj.length-1;i++){if(cnpj.charAt(i)!=cnpj.charAt(i+1)){digitos_iguais=0;break;}}
if(!digitos_iguais){tamanho=cnpj.length-2
numeros=cnpj.substring(0,tamanho);digitos=cnpj.substring(tamanho);soma=0;pos=tamanho-7;for(i=tamanho;i>=1;i--){soma+=numeros.charAt(tamanho-i)*pos--;if(pos<2){pos=9;}}
resultado=soma%11<2?0:11-soma%11;if(resultado!=digitos.charAt(0)){return this.optional(element)||false;}
tamanho=tamanho+1;numeros=cnpj.substring(0,tamanho);soma=0;pos=tamanho-7;for(i=tamanho;i>=1;i--){soma+=numeros.charAt(tamanho-i)*pos--;if(pos<2){pos=9;}}
resultado=soma%11<2?0:11-soma%11;if(resultado!=digitos.charAt(1)){return this.optional(element)||false;}
return this.optional(element)||true;}else{return this.optional(element)||false;}},"Informe um CNPJ válido.");jQuery.validator.addMethod("notEqual",function(value,element,param){return value==$(param).val()?false:true;},"Este valor não pode ser igual");jQuery.validator.addMethod("diferenteDe",function(value,element,strCompara){return value==strCompara?false:true;},"Este valor não foi alterado");jQuery.validator.addMethod("maiorQue",function(value,element,param){return value<=$(param).val()?false:true;},"Este valor precisa ser maior");jQuery.validator.addMethod("menorQue",function(value,element,param){return value>=$(param).val()?false:true;},"Este valor precisa ser menor");
;(function(e,t,n,r){n.swipebox=function(i,s){var o={useCSS:true,hideBarsDelay:3e3},u=this,a=n(i),i=i,f=i.selector,l=n(f),c=t.createTouch!==r||"ontouchstart"in e||"onmsgesturechange"in e||navigator.msMaxTouchPoints,h=!!e.SVGSVGElement,p='<div id="swipebox-overlay">  				<div id="swipebox-slider"></div>					<div id="swipebox-caption"></div>					<div id="swipebox-action">						<a id="swipebox-close"></a>						<a id="swipebox-prev"></a>						<a id="swipebox-next"></a>					</div>			</div>';u.settings={};u.init=function(){u.settings=n.extend({},o,s);l.click(function(e){e.preventDefault();e.stopPropagation();index=a.index(n(this));d.target=n(e.target);d.init(index)})};var d={init:function(e){this.target.trigger("swipebox-start");this.build();this.openSlide(e);this.openImg(e);this.preloadImg(e+1);this.preloadImg(e-1)},build:function(){var t=this;n("body").append(p);if(t.doCssTrans()){n("#swipebox-slider").css({"-webkit-transition":"left 0.4s ease","-moz-transition":"left 0.4s ease","-o-transition":"left 0.4s ease","-khtml-transition":"left 0.4s ease",transition:"left 0.4s ease"});n("#swipebox-overlay").css({"-webkit-transition":"opacity 1s ease","-moz-transition":"opacity 1s ease","-o-transition":"opacity 1s ease","-khtml-transition":"opacity 1s ease",transition:"opacity 1s ease"});n("#swipebox-action, #swipebox-caption").css({"-webkit-transition":"0.5s","-moz-transition":"0.5s","-o-transition":"0.5s","-khtml-transition":"0.5s",transition:"0.5s"})}if(h){var r=n("#swipebox-action #swipebox-close").css("background-image");r=r.replace("png","svg");n("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({"background-image":r})}a.each(function(){n("#swipebox-slider").append('<div class="slide"></div>')});n("#swipebox-action #swipebox-close").append("<span class='fecharbox'>Fechar</span>");t.setDim();t.actions();t.keyboard();t.gesture();t.animBars();n(e).resize(function(){t.setDim()}).resize()},setDim:function(){var t={width:n(e).width(),height:e.innerHeight?e.innerHeight:n(e).height()};n("#swipebox-overlay").css(t)},supportTransition:function(){var e="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(var n=0;n<e.length;n++){if(t.createElement("div").style[e[n]]!==r){return e[n]}}return false},doCssTrans:function(){if(u.settings.useCSS&&this.supportTransition()){return true}},gesture:function(){if(c){var e=this,t=null,r=10,i={},s={};var o=n("#swipebox-caption, #swipebox-action");o.addClass("visible-bars");e.setTimeout();n("body").bind("touchstart",function(e){n(this).addClass("touching");s=e.originalEvent.targetTouches[0];i.pageX=e.originalEvent.targetTouches[0].pageX;n(".touching").bind("touchmove",function(e){e.preventDefault();e.stopPropagation();s=e.originalEvent.targetTouches[0]});return false}).bind("touchend",function(u){u.preventDefault();u.stopPropagation();t=s.pageX-i.pageX;if(t>=r){e.getPrev()}else if(t<=-r){e.getNext()}else{if(!o.hasClass("visible-bars")){e.showBars();e.setTimeout()}else{e.clearTimeout();e.hideBars()}}n(".touching").off("touchmove").removeClass("touching")})}},setTimeout:function(){if(u.settings.hideBarsDelay>0){var t=this;t.clearTimeout();t.timeout=e.setTimeout(function(){t.hideBars()},u.settings.hideBarsDelay)}},clearTimeout:function(){e.clearTimeout(this.timeout);this.timeout=null},showBars:function(){var e=n("#swipebox-caption, #swipebox-action");if(this.doCssTrans()){e.addClass("visible-bars")}else{n("#swipebox-caption").animate({top:0},500);n("#swipebox-action").animate({bottom:0},500);setTimeout(function(){e.addClass("visible-bars")},1e3)}},hideBars:function(){var e=n("#swipebox-caption, #swipebox-action");if(this.doCssTrans()){e.removeClass("visible-bars")}else{n("#swipebox-caption").animate({top:"0px"},500);n("#swipebox-action").animate({bottom:"0px"},500);setTimeout(function(){e.removeClass("visible-bars")},1e3)}},animBars:function(){var e=this;var t=n("#swipebox-caption, #swipebox-action");t.addClass("visible-bars");e.setTimeout();n("#swipebox-slider").click(function(n){if(!t.hasClass("visible-bars")){e.showBars();e.setTimeout()}});n("#swipebox-action").hover(function(){e.showBars();t.addClass("force-visible-bars");e.clearTimeout()},function(){t.removeClass("force-visible-bars");e.setTimeout()})},keyboard:function(){var t=this;n(e).bind("keyup",function(e){e.preventDefault();e.stopPropagation();if(e.keyCode==37){t.getPrev()}else if(e.keyCode==39){t.getNext()}else if(e.keyCode==27){t.closeSlide()}})},actions:function(){var e=this;if(a.length<2){n("#swipebox-prev, #swipebox-next").hide()}else{n("#swipebox-prev").bind("click touchend",function(t){t.preventDefault();t.stopPropagation();e.getPrev();e.setTimeout()});n("#swipebox-next").bind("click touchend",function(t){t.preventDefault();t.stopPropagation();e.getNext();e.setTimeout()})}n("#swipebox-close").bind("click touchend",function(t){e.closeSlide()})},setSlide:function(e,t){t=t||false;var r=n("#swipebox-slider");if(this.doCssTrans()){r.css({left:-e*100+"%"})}else{r.animate({left:-e*100+"%"})}n("#swipebox-slider .slide").removeClass("current");n("#swipebox-slider .slide").eq(e).addClass("current");this.setTitle(e);if(t){r.fadeIn()}n("#swipebox-prev, #swipebox-next").removeClass("disabled");if(e==0){n("#swipebox-prev").addClass("disabled")}else if(e==a.length-1){n("#swipebox-next").addClass("disabled")}},openSlide:function(t){n("html").addClass("swipebox");n(e).trigger("resize");this.setSlide(t,true)},preloadImg:function(e){var t=this;setTimeout(function(){t.openImg(e)},1e3)},openImg:function(e){var t=this;if(e<0||e>=a.length){return false}t.loadImg(a.eq(e).attr("href"),function(){n("#swipebox-slider .slide").eq(e).html(this)})},setTitle:function(e,t){n("#swipebox-caption").empty();if(a.eq(e).attr("title")){n("#swipebox-caption").append(a.eq(e).attr("title"))}},loadImg:function(e,t){var r=n("<img>").on("load",function(){t.call(r)});r.attr("src",e)},getNext:function(){var e=this;index=n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));if(index+1<a.length){index++;e.setSlide(index);e.preloadImg(index+1)}else{n("#swipebox-slider").addClass("rightSpring");setTimeout(function(){n("#swipebox-slider").removeClass("rightSpring")},500)}},getPrev:function(){var e=this;index=n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));if(index>0){index--;e.setSlide(index);e.preloadImg(index-1)}else{n("#swipebox-slider").addClass("leftSpring");setTimeout(function(){n("#swipebox-slider").removeClass("leftSpring")},500)}},closeSlide:function(){var t=this;n(e).trigger("resize");n("html").removeClass("swipebox");t.destroy()},destroy:function(){var t=this;n(e).unbind("keyup");n("body").unbind("touchstart");n("body").unbind("touchmove");n("body").unbind("touchend");n("#swipebox-slider").unbind();n("#swipebox-overlay").remove();a.removeData("_swipebox");t.target.trigger("swipebox-destroy")}};u.init()};n.fn.swipebox=function(e){if(!n.data(this,"_swipebox")){var t=new n.swipebox(this,e);this.data("_swipebox",t)}}})(window,document,jQuery);
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,!(!b.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g))):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});
/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery)}(function(a){function b(a){for(var b,c;a.length&&a[0]!==document;){if(b=a.css("position"),("absolute"===b||"relative"===b||"fixed"===b)&&(c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c))return c;a=a.parent()}return 0}function c(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.regional.en=a.extend(!0,{},this.regional[""]),this.regional["en-US"]=a.extend(!0,{},this.regional.en),this.dpDiv=d(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function d(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.delegate(c,"mouseout",function(){a(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).removeClass("ui-datepicker-next-hover")}).delegate(c,"mouseover",e)}function e(){a.datepicker._isDisabledDatepicker(g.inline?g.dpDiv.parent()[0]:g.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).addClass("ui-datepicker-next-hover"))}function f(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.11.4"}});var g;return a.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return f(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var e=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:e,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?d(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(c),a.data(b,"datepicker",c),c.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),"focus"!==d&&"both"!==d||b.focus(this._showDatepicker),"button"!==d&&"both"!==d||(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.click(function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,"datepicker",c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),c.settings.disabled&&this._disableDatepicker(b),c.dpDiv.css("display","block"))},_dialogDatepicker:function(b,c,d,e,g){var h,i,j,k,l,m=this._dialogInst;return m||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),a("body").append(this._dialogInput),m=this._dialogInst=this._newInst(this._dialogInput,!1),m.settings={},a.data(this._dialogInput[0],"datepicker",m)),f(m.settings,e||{}),c=c&&c.constructor===Date?this._formatDate(m,c):c,this._dialogInput.val(c),this._pos=g?g.length?g:[g.pageX,g.pageY]:null,this._pos||(i=document.documentElement.clientWidth,j=document.documentElement.clientHeight,k=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[i/2-100+k,j/2-150+l]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),m.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],"datepicker",m),this},_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,"datepicker");d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,"datepicker"),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):"div"!==c&&"span"!==c||d.removeClass(this.markerClassName).empty(),g===e&&(g=null))},_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,"datepicker")}catch(c){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(b,c,d){var e,g,h,i,j=this._getInst(b);return 2===arguments.length&&"string"==typeof c?"defaults"===c?a.extend({},a.datepicker._defaults):j?"all"===c?a.extend({},j.settings):this._get(j,c):null:(e=c||{},"string"==typeof c&&(e={},e[c]=d),void(j&&(this._curInst===j&&this._hideDatepicker(),g=this._getDateDatepicker(b,!0),h=this._getMinMaxDate(j,"min"),i=this._getMinMaxDate(j,"max"),f(j.settings,e),null!==h&&void 0!==e.dateFormat&&void 0===e.minDate&&(j.settings.minDate=this._formatDate(j,h)),null!==i&&void 0!==e.dateFormat&&void 0===e.maxDate&&(j.settings.maxDate=this._formatDate(j,i)),"disabled"in e&&(e.disabled?this._disableDatepicker(b):this._enableDatepicker(b)),this._attachments(a(b),j),this._autoSize(j),this._setDate(j,g),this._updateAlternate(j),this._updateDatepicker(j))))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);if(a.datepicker._get(e,"constrainInput"))return c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||d<" "||!c||c.indexOf(d)>-1},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},_showDatepicker:function(c){if(c=c.target||c,"input"!==c.nodeName.toLowerCase()&&(c=a("input",c.parentNode)[0]),!a.datepicker._isDisabledDatepicker(c)&&a.datepicker._lastInput!==c){var d,e,g,h,i,j,k;d=a.datepicker._getInst(c),a.datepicker._curInst&&a.datepicker._curInst!==d&&(a.datepicker._curInst.dpDiv.stop(!0,!0),d&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),e=a.datepicker._get(d,"beforeShow"),g=e?e.apply(c,[c,d]):{},g!==!1&&(f(d.settings,g),d.lastVal=null,a.datepicker._lastInput=c,a.datepicker._setDateFromField(d),a.datepicker._inDialog&&(c.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(c),a.datepicker._pos[1]+=c.offsetHeight),h=!1,a(c).parents().each(function(){return h|="fixed"===a(this).css("position"),!h}),i={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,d.dpDiv.empty(),d.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(d),i=a.datepicker._checkOffset(d,i,h),d.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":h?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),d.inline||(j=a.datepicker._get(d,"showAnim"),k=a.datepicker._get(d,"duration"),d.dpDiv.css("z-index",b(a(c))+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[j]?d.dpDiv.show(j,a.datepicker._get(d,"showOptions"),k):d.dpDiv[j||"show"](j?k:null),a.datepicker._shouldFocusInput(d)&&d.input.focus(),a.datepicker._curInst=d))}},_updateDatepicker:function(b){this.maxRows=4,g=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b);var c,d=this._getNumberOfMonths(b),f=d[1],h=17,i=b.dpDiv.find("."+this._dayOverClass+" a");i.length>0&&e.apply(i.get(0)),b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&b.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",h*f+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.focus(),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var c,d,e,f,g=this._curInst;!g||b&&g!==a.data(b,"datepicker")||this._datepickerShowing&&(c=this._get(g,"showAnim"),d=this._get(g,"duration"),e=function(){a.datepicker._tidyDialog(g)},a.effects&&(a.effects.effect[c]||a.effects[c])?g.dpDiv.hide(c,a.datepicker._get(g,"showOptions"),d,e):g.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(g,"onClose"),f&&f.apply(g.input?g.input[0]:null,[g.input?g.input.val():"",g]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id===a.datepicker._mainDivId||0!==c.parents("#"+a.datepicker._mainDivId).length||c.hasClass(a.datepicker.markerClassName)||c.closest("."+a.datepicker._triggerClass).length||!a.datepicker._datepickerShowing||a.datepicker._inDialog&&a.blockUI)&&(!c.hasClass(a.datepicker.markerClassName)||a.datepicker._curInst===d)||a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.focus(),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).each(function(){a(this).val(e)}))},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e="y"===a?d:1,f=new RegExp("^\\d{"+e+","+d+"}"),g=c.substring(i).match(f);if(!g)throw"Missing number at position "+i;return i+=g[0].length,parseInt(g[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];if(c.substr(i,d.length).toLowerCase()===d.toLowerCase())return f=b[0],i+=d.length,!1}),f!==-1)return f+1;throw"Unknown name at position "+i},x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(p===-1?p=(new Date).getFullYear():p<100&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(p<=k?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),r<=f)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).bind(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(_<0&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&b<Z?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,_<0&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;v<7;v++)D=(v+k)%7,C+="<th scope='col'"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X&&this.maxRows>G?this.maxRows:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;J<H;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;v<7;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&I<Z||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{
for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;k<12;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";o<=p;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"===c?b:0),e=a.drawMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),"M"!==c&&"Y"!==c||this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).mousedown(a.datepicker._checkExternalClick),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new c,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.11.4",a.datepicker});
jQuery(document).ready(function(){jQuery('input, textarea').focus(function(){if(jQuery(this).val()==jQuery(this).attr("title")){jQuery(this).val("");}}).blur(function(){if(jQuery(this).val()==""){jQuery(this).val(jQuery(this).attr("title"));}});var baseUrl=jQuery('meta[name=urlShop]').attr("content");var pgsUrl=jQuery('meta[name=pgsUrl]').attr("content");var urlSite=jQuery('meta[name=urlSite]').attr("content");jQuery("div.abas ul.botoes li").click(function(){var v=jQuery(this).attr('id');jQuery("ul.botoes li").removeClass('ativo');jQuery(this).addClass('ativo');jQuery('div.abas div').hide();jQuery('.'+v).fadeIn();});function startGaleria(){jQuery('ul.galeriaThumb li a').click(function(){var urlItem=jQuery(this).attr('href');jQuery('.imagem img').hide();jQuery('.imagem img').attr('src','');jQuery('.imagem img').attr('src',urlItem);jQuery('a.imageFirst').attr('href',urlItem);jQuery('.imagem img').fadeIn();return false;});};startGaleria();function startVariacaoTamanhoCor(){jQuery('li.selectVaricaoCor').click(function(){jQuery('p.msg').html('');jQuery('p.msg').hide();jQuery('p.indisp').fadeOut();jQuery('.btComprar').fadeIn();jQuery('p.quantidade').fadeIn();jQuery('p.parc').fadeIn();jQuery('li.selectVaricaoCor').removeClass('ativo');jQuery("ul.tamanhos li").removeClass('ativo');jQuery(this).addClass('ativo');var variacaoNome=""+jQuery(this).attr('rel');var preEstoque=""+jQuery(this).attr('rev');if(preEstoque=='esgotado'){jQuery('.btComprar').hide();jQuery('p.quantidade').fadeOut();jQuery('p.parc').fadeOut();jQuery('p.indisp').fadeIn();};jQuery('ul.tamanhos').hide();jQuery('ul.'+variacaoNome).fadeIn();});jQuery('li.selectVaricaoTamanho').click(function(){jQuery('p.msg').html('');jQuery('p.msg').hide();jQuery('p.indisp').fadeOut();jQuery('.btComprar').fadeIn();jQuery('p.quantidade').fadeIn();jQuery('p.parc').fadeIn();jQuery('li.selectVaricaoTamanho').removeClass('ativo');jQuery(this).addClass('ativo');var variacaoNome=""+jQuery(this).attr('rel');var preEstoque=""+jQuery(this).attr('rev');if(preEstoque=='esgotado'){jQuery('.btComprar').hide();jQuery('p.quantidade').fadeOut();jQuery('p.parc').fadeOut();jQuery('p.indisp').fadeIn();};});};startVariacaoTamanhoCor();function btIndisponivel(){jQuery('a.btAviso').click(function(){msg="Enviando...";jQuery('p.msg').html('<span >'+msg+'</span>');jQuery('p.msg').fadeIn();var postIDP=""+jQuery('#idP').val();var variacaoCorP="";var variacaoTamanhoP="";var ed=false;if(verificaCor()<1&&verificaTamanho()<1){ed=true;}else{var vC=parseInt(verificaCor());if(vC>=1){ativo=""+jQuery('ul.cores li.ativo').attr('rel');if(ativo=='undefined'){msg="Escolha uma cor disponível.";}else{variacaoCorP=ativo;}};var vT=parseInt(verificaTamanho());if(vT>=1){ativo=""+jQuery('ul.tamanhos li.ativo').attr('rel');if(ativo=='undefined'){if(msg==""){msg="Escolha um tamanho disponível.";}else{msg="Escolha uma cor e tamnho disponível.";};}else{variacaoTamanhoP=ativo;}};};var nomeAviso=""+jQuery('#nomeAviso').val();var emailAviso=""+jQuery('#emailAviso').val();var telAviso=""+jQuery('#telefoneAviso').val();if(telAviso=='Telefone com ddd'){telAviso='-';}
if(nomeAviso=="Digite seu Nome"||emailAviso=="Digite seu Email"){msg="Preencha os dados acima para ser avisado quando este produto chegar.";jQuery('p.msg').html('<span style="color:red">'+msg+'</span>');jQuery('p.msg').fadeIn();return false;}else{jQuery.post(baseUrl+"avisarQuandoChegar.php",{nomeAvisoR:''+nomeAviso+'',emailAvisoR:''+emailAviso+'',telAvisoR:telAviso,postIDPR:''+postIDP+'',variacaoCorPR:''+variacaoCorP+'',variacaoTamanhoPR:''+variacaoTamanhoP+''},function(data){msg=data;jQuery('p.msg').html('<span style="color:green;font-size:0.9em">'+msg+'</span>');jQuery('p.msg').fadeIn();});};return false;});jQuery('a.btAviso2').click(function(){msg="Enviando...";jQuery('p.msg').html('<span >'+msg+'</span>');jQuery('p.msg').fadeIn();var postIDP=""+jQuery('#idP').val();var variacaoCorP="";var variacaoTamanhoP="";var ed=false;if(verificaCor()<1&&verificaTamanho()<1){ed=true;}else{var vC=parseInt(verificaCor());if(vC>=1){ativo=""+jQuery('ul.cores li.ativo').attr('rel');if(ativo=='undefined'){msg="Escolha uma cor disponível.";}else{variacaoCorP=ativo;}};var vT=parseInt(verificaTamanho());if(vT>=1){ativo=""+jQuery('ul.tamanhos li.ativo').attr('rel');if(ativo=='undefined'){if(msg==""){msg="Escolha um tamanho disponível.";}else{msg="Escolha uma cor e tamnho disponível.";};}else{variacaoTamanhoP=ativo;}};};var nomeAviso=""+jQuery('#nomeAviso2').val();var emailAviso=""+jQuery('#emailAviso2').val();var telAviso=""+jQuery('#telefoneAviso2').val();if(telAviso=='Telefone com ddd'){telAviso='-';}
if(nomeAviso=="Digite seu Nome"||emailAviso=="Digite seu Email"){msg="Preencha os dados acima para ser avisado quando este produto chegar.";jQuery('p.msg').html('<span style="color:red">'+msg+'</span>');jQuery('p.msg').fadeIn();return false;}else{jQuery.post(baseUrl+"avisarQuandoChegar.php",{nomeAvisoR:''+nomeAviso+'',emailAvisoR:''+emailAviso+'',telAvisoR:''+telAviso+'',postIDPR:''+postIDP+'',variacaoCorPR:''+variacaoCorP+'',variacaoTamanhoPR:''+variacaoTamanhoP+''},function(data){msg=data;jQuery('p.msg').html('<span style="color:green;font-size:0.9em">'+msg+'</span>');jQuery('p.msg').fadeIn();});};return false;});};btIndisponivel();function btComprar(){jQuery('.btComprar').click(function(){jQuery('p.msg').html('');jQuery('p.msg').hide();var variacaoCorP="";var variacaoTamanhoP="";var qtdProdutoV=''+jQuery('#qtdProd').val();if(qtdProdutoV=='undefined'){qtdProdutoV=1;}
var postIDP=""+jQuery('#idP').val();var ed=false;var msg="";if(verificaCor()<1&&verificaTamanho()<1){ed=true;}else{var vC=parseInt(verificaCor());if(vC>=1){ativo=""+jQuery('ul.cores li.ativo').attr('rel');if(ativo=='undefined'){msg="Escolha uma cor disponível.";}else{variacaoCorP=ativo;}};var vT=parseInt(verificaTamanho());if(vT>=1){ativo=""+jQuery('ul.tamanhos li.ativo').attr('rel');if(ativo=='undefined'){if(msg==""){msg="Escolha um tamanho disponível.";}else{msg="Escolha uma cor e tamnho disponível.";};}else{variacaoTamanhoP=ativo;}};};if(msg==""){ed=true;};if(ed==true){jQuery('.carreg').fadeIn();jQuery.post(baseUrl+"consultaEstoque.php",{postID:postIDP,variacaoCor:variacaoCorP,variacaoTamanho:variacaoTamanhoP,qtdProduto:qtdProdutoV},function(data){var preEstoque=""+data;jQuery('.carreg').hide();var stk=parseInt(preEstoque);if(stk=='1'){jQuery('p.indisp').fadeIn();jQuery('p.quantidade').fadeOut();jQuery('p.parc').fadeOut();jQuery('.btComprar').fadeOut();}else{reloadQtdItems();aposAdicionarProduto(data);var qtdF=parseInt(qtdProdutoV);var qtdAtual=parseInt(jQuery('span.qtdProd').text());if(qtdAtual>0){qtdF+=qtdAtual;};jQuery('span.qtdProd').text(qtdF+"");};});}else{jQuery('.msg').html("<span style='color:red'>"+msg+"</span>");jQuery('.msg').fadeIn();};return false;});};btComprar();function aposAdicionarProduto(data){arrData=data.split("****");var html="<div class='contentSeguir'><span class='confirmAdd'></span><h3>Produto Adicionado com Sucesso</h3><br/><br/>";html+="<div class='contentBtSeguir'><p class='btSeguirLoja left'>Continuar a comprar</p>";html+="<a href='"+arrData[0]+"'><p class='btSeguirCarrinho left'>Editar Carrinho</p></a></div>";html+="<a href='"+arrData[1]+"'><p class='btSeguirCheckout left'>Ir para Pagamento</p></a></div>";html+="<div class='clear'></div></div>";jQuery('#contentLight').html(html);btSeguirLoja();lightbox_open();};function btSeguirLoja(){jQuery('.btSeguirLoja').click(function(){lightbox_close();});};function verificaCor(){var variacaoCores=jQuery("ul.cores li").size();return variacaoCores;};function verificaTamanho(){var verificaTamanho=jQuery("ul.tamanhos li").size();return verificaTamanho;};function reloadQtdItems(){jQuery.post(baseUrl+"reloadQtdItems.php",{},function(data){jQuery('a.qtdItemsCart').text(data);});};jQuery('.btCalcularFrete').click(function(){if(jQuery('.freteInfo')){jQuery('.freteInfo').remove();};getEndereco();});jQuery('#cepDois').focusout(function(){getEndereco();});getEndereco();function getEndereco(){var cepDestino=""+jQuery('input.cep').val();if(cepDestino==""||cepDestino=="undefined"){cepDestino=""+jQuery('input.cepUm').val()+jQuery('input.cepDois').val();};var bairro="";var cidade="";var estado="";if(cepDestino!=""&&cepDestino!="undefined"&&cepDestino!="undefinedundefined"){jQuery('.btCalcularFrete').text('Carregando');jQuery.getJSON(baseUrl+'shipping/buscaEndereco.php?cep='+cepDestino+'',function(data){if(data!=null||data!=""){jQuery.each(data,function(key,val){if(key=='logradouro'){rua=""+val;};if(key=='bairro'){bairro=""+val;};if(key=='cidade'){cidade=""+val;};if(key=='uf'){estado=""+val;};});if(rua=='null'){rua='';};if(cidade=='null'){cidade='';};if(bairro=='null'){bairro='';};jQuery('input.cityEntrega').val(estado+"**"+cidade);calculaFrete();if(cidade!=""||rua!=""||bairro!=""||estado!=""){endereco="<span>Referência:   "+rua+" "+bairro+" "+cidade+" "+estado+"</span>";jQuery(".endereco").html(endereco);};jQuery('input#enderecoCad').val(rua);jQuery('input#cidade').val(cidade);jQuery('input#bairro').val(bairro);jQuery("select#estadoUsuario option").filter(function(){return jQuery(this).val()==estado;}).prop('selected',true);}else{alert('Endereço não encontrado. Verifique o CEP.');}
jQuery('.btCalcularFrete').text('Calcular');});};};var loadCep=false;jQuery('input.campoCep').focusout(function(){var cepDestino=""+jQuery(this).val();var bairro="";var cidade="";var estado="";var rua="";if(cepDestino!=""&&loadCep==false&&cepDestino!="undefined"&&cepDestino!="undefinedundefined"){loadCep=true;jQuery('.carregaCep').fadeIn();jQuery.getJSON(baseUrl+'shipping/buscaEndereco.php?cep='+cepDestino+'',function(data){jQuery.each(data,function(key,val){if(key=='logradouro'){rua=""+val;};if(key=='bairro'){bairro=""+val;};if(key=='cidade'){cidade=""+val;};if(key=='uf'){estado=""+val;};jQuery('.carregaCep').fadeOut();});loadCep=false;if(rua=='null'){rua='';};if(cidade=='null'){cidade='';};if(bairro=='null'){bairro='';};jQuery('input#enderecoUsuario').val(rua);jQuery('input#cidadeUsuario').val(cidade);jQuery('input#bairroUsuario').val(bairro);jQuery("select#estadoUsuario option").filter(function(){return jQuery(this).val()==estado;}).prop('selected',true);});};});jQuery('input.campoCep2').focusout(function(){var cepDestino=""+jQuery(this).val();var bairro="";var cidade="";var estado="";var rua="";if(cepDestino!=""&&loadCep==false&&cepDestino!="undefined"&&cepDestino!="undefinedundefined"){loadCep=true;jQuery('.carregaCep').fadeIn();jQuery.getJSON(baseUrl+'shipping/buscaEndereco.php?cep='+cepDestino+'',function(data){jQuery.each(data,function(key,val){if(key=='logradouro'){rua=""+val;};if(key=='bairro'){bairro=""+val;};if(key=='cidade'){cidade=""+val;};if(key=='uf'){estado=""+val;};jQuery('.carregaCep').fadeOut();});loadCep=false;if(rua=='null'){rua='';};if(cidade=='null'){cidade='';};if(bairro=='null'){bairro='';};jQuery('input#enderecoUsuario2').val(rua);jQuery('input#cidadeUsuario2').val(cidade);jQuery('input#bairroUsuario2').val(bairro);jQuery("select#estadoUsuario2 option").filter(function(){return jQuery(this).val()==estado;}).prop('selected',true);});};});function calculaFrete(){var cepDestino=""+jQuery('input.cep').val();jQuery('p.resultFrete').html('');if(cepDestino==""||cepDestino=="undefined"){cepDestino=""+jQuery('input.cepUm').val()+jQuery('input.cepDois').val();};if(cepDestino==""||cepDestino=="undefined"){cepDestino=""+jQuery('input#cepUsuario2').val();if(cepDestino==""||cepDestino=="unefined"){cepDestino=""+jQuery('input#cepUsuario').val();}}
var peso=""+jQuery('input.peso').val();var cityUserE=""+jQuery('input.cityEntrega').val();var qtdProdV=""+jQuery('input#qtdProd').val();var idPrdV=""+jQuery('input.idPrd').val();if(cepDestino!=""+jQuery('input.cep').attr('title')){jQuery('.btCalcularFrete').text('Carregando');jQuery.post(baseUrl+"shipping/frete.php",{CepDestinoR:''+cepDestino+'',PesoR:''+peso+'',cityUser:''+cityUserE+'',idPrd:idPrdV,qtdProd:qtdProdV},function(data){jQuery('p.resultFrete').html(data);jQuery('.btCalcularFrete').text('Calcular');somaFrete();});};};jQuery('input.radioFrete').change(function(){var relV=""+jQuery(this).attr('id');var val=""+jQuery(this).val().replace(",",".");val=parseFloat(val);var subtotal=""+jQuery('.subtotalCart').text().replace(".","");subtotal=subtotal.replace(",",".");subtotal=parseFloat(subtotal);var descontoCart=""+jQuery('.descontoCart').text().replace(".","");descontoCart=descontoCart.replace(",",".");descontoCart=parseFloat(descontoCart);var totalCart=subtotal-descontoCart;var valorAdicional=""+jQuery('#taxaAdicional').text();if(valorAdicional!=""&&val>0){valorAdicional=valorAdicional.replace(",",".");valorAdicional=parseFloat(valorAdicional);totalCart=subtotal+valorAdicional-descontoCart;};var subtotalCartParc=parseFloat(""+jQuery('.subtotalCartParc').text().replace(",","."));var novaParcela=(totalCart/subtotalCartParc);jQuery('.subtotalCartParcValor').text(""+novaParcela.toFixed(2));jQuery('.totalCart').text('R$ '+totalCart.toFixed(2));jQuery('.freteInfo').remove();jQuery('<span class="freteInfo" style="font-size:12px">   </span>').insertAfter('.totalCart');pctDesconto=0;if(jQuery('.pctDesconto').text()!=''&&jQuery('.pctDesconto').text()!=undefined){pctDesconto=parseInt(""+jQuery('.pctDesconto').text());};valorDesconto=totalCart*pctDesconto/100;totalCart-=valorDesconto;totalCart+=val;jQuery('.valorDesconto').text(totalCart.toFixed(2));jQuery('.totalCart').text('R$ '+totalCart.toFixed(2));}).change();function somaFrete(){jQuery('.totalCart').text('R$ '+jQuery('.totalCart').attr('rel'));jQuery('input.radioFrete').change(function(){var relV=""+jQuery(this).attr('id');var val=""+jQuery(this).val().replace(",",".");val=parseFloat(val);var subtotal=""+jQuery('.subtotalCart').text().replace(".","");subtotal=subtotal.replace(",",".");subtotal=parseFloat(subtotal);var descontoCart=""+jQuery('.descontoCart').text().replace(".","");descontoCart=descontoCart.replace(",",".");descontoCart=parseFloat(descontoCart);var totalCart=subtotal+val-descontoCart;var valorAdicional=""+jQuery('#taxaAdicional').text();if(valorAdicional!=""&&val>0){valorAdicional=valorAdicional.replace(",",".");valorAdicional=parseFloat(valorAdicional);totalCart=subtotal+val+valorAdicional-descontoCart;};var subtotalCartParc=parseFloat(""+jQuery('.subtotalCartParc').text().replace(",","."));var novaParcela=(totalCart/subtotalCartParc);jQuery('.subtotalCartParcValor').text(""+novaParcela.toFixed(2));jQuery('.totalCart').text('R$ '+totalCart.toFixed(2));jQuery('.freteInfo').remove();jQuery('<span class="freteInfo" style="font-size:12px">   </span>').insertAfter('.totalCart');});var relV=""+jQuery('input.radioFrete[checked=checked]').attr('id');var val=""+jQuery('input.radioFrete[checked=checked]').val().replace(",",".");val=parseFloat(val);var subtotal=""+jQuery('.subtotalCart').text().replace(".","");;subtotal=subtotal.replace(",",".");subtotal=parseFloat(subtotal);var descontoCart=""+jQuery('.descontoCart').text().replace(".","");descontoCart=descontoCart.replace(",",".");descontoCart=parseFloat(descontoCart);var totalCart=subtotal+val-descontoCart;var valorAdicional=""+jQuery('#taxaAdicional').text();if(valorAdicional!=""&&val>0){valorAdicional=valorAdicional.replace(",",".");valorAdicional=parseFloat(valorAdicional);totalCart=subtotal+val+valorAdicional-descontoCart;};var subtotalCartParc=parseFloat(""+jQuery('.subtotalCartParc').text().replace(",","."));var novaParcela=(totalCart/subtotalCartParc);jQuery('.subtotalCartParcValor').text(""+novaParcela.toFixed(2));jQuery('.totalCart').text('R$'+totalCart.toFixed(2));jQuery('.freteInfo').remove();jQuery('<span class="freteInfo" style="font-size:12px">   </span>').insertAfter('.totalCart');};jQuery('.btSeguir2').click(function(){resultFrete=""+jQuery('.resultFrete').text();var Self=jQuery('div.block-content').eq(2);var irpara=parseInt(jQuery('.checkout').offset().top);if(resultFrete==""){Self=jQuery('div.block-content').eq(0);alert('Edite corretamente seu CEP para endereço de entrega.');irpara=parseInt(jQuery('#entregando').offset().top);};jQuery('.checkout .block .block-content:visible').slideUp(300);Self.slideDown(300);jQuery('.msg').html('');jQuery('html, body').animate({scrollTop:irpara},1000);});jQuery('.btSeguir3').click(function(){jQuery('.msg2').html('');jQuery(".carregando").fadeOut();var cidade="";var commentOrder=""+jQuery('#addComentOrder').val();var radioFreteV=""+jQuery('input[name=radioFrete]:checked').val();var varSelect=jQuery("input[name='tipoPagto']:checked").val();goCheckout(radioFreteV,commentOrder,cidade,varSelect);});function redirectCheckout(radioFreteV,commentOrder,cidade,varSelect){jQuery('.btSeguir3').text('Salvando Pedido...');var url=pgsUrl+"?confirma=true";var form=jQuery('<form action="'+url+'" method="post">'+'<input type="hidden" name="radioFrete" value="'+radioFreteV+'" />'+'<input type="hidden" name="commentOrderV" value="'+commentOrder+'" />'+'<input type="hidden" name="cidadeV" value="'+cidade+'" />'+'<input type="hidden" name="varSelectV" value="'+varSelect+'" />'+'</form>');jQuery('body').append(form);jQuery(form).submit();};function goCheckout(radioFreteV,commentOrder,cidade,varSelect){jQuery('.btSeguir3').text('Salvando Pedido...');var tipoPagtoV=""+varSelect;var formaPagamentoV=""+jQuery("input[name=formaPagamento]:checked").val();var parcelasV=""+jQuery("#parcelas option:selected").val();var codigoBandeiraV=""+jQuery("input[name=codigoBandeira]:checked").val();url=baseUrl+"saveOrderPayment.php";if(enviando==false){enviando=true;showBigLoad();goo=false;jQuery.post(url,{radioFrete:radioFreteV,tipoPagto:tipoPagtoV,formaPagamento:formaPagamentoV,parcelas:parcelasV,codigoBandeira:codigoBandeiraV},function(data){hideBigLoad();enviando=false;dataArr=data.split('****');numb=parseInt(dataArr[0]);if(numb==2){jQuery('.returnajx').html(dataArr[1]);goo=true;document.pagseguro.submit();};if(numb==3){jQuery('.returnajx3').html(dataArr[1]);goo=true;document.paypal.submit();};if(numb==4){jQuery('.returnajx4').html(dataArr[1]);goo=true;document.moip.submit();};if(numb==7){urlRedirect=dataArr[1];if(urlRedirect!='undefined'||urlRedirect!=undefined){window.location=""+urlRedirect;}else{};goo=true;};if(goo==false){urlRedirect=dataArr[1];if(urlRedirect=='undefined'||urlRedirect==undefined){window.location="";}else{window.location=""+urlRedirect;};};});};};function verificaF(formVerifica,url){if(parseInt(formVerifica)>0){window.location=''+url+'';}else{jQuery('.msg2').html('<p class="red">'+data+'</p>');jQuery('.msg2').fadeIn();};}
jQuery('.btChangeO').click(function(){jQuery('.ctChan').hide();var relProd=""+jQuery(this).attr('rel');jQuery('.'+relProd).fadeIn();});jQuery('ul.setas li').click(function(){showBigLoad();var relProd=""+jQuery(this).attr('rel');var revProd=""+jQuery(this).attr('rev');var classProd=""+jQuery(this).attr('class');var idProdV=""+jQuery(this).attr('title');var qtdProd=""+jQuery('input[title="'+idProdV+'"]').val();jQuery.post(baseUrl+"reloadCart.php",{relProdP:relProd,qtdProdP:qtdProd,revProdP:revProd,classProdP:classProd},function(data){if(parseInt(data)>=1){window.location='';jQuery('input[title="'+idProdV+'"]').val(data);if(classProd=="setaUp"){jQuery('input[title="'+idProdV+'"]').val(parseInt(qtdProd)+1);}else{jQuery('input[title="'+idProdV+'"]').val(parseInt(qtdProd)-1);}}else{window.location='';jQuery('.alerta').remove();jQuery(data).insertAfter('input[title='+idProdV+']');}});});jQuery('div.setas span').click(function(){showBigLoad();var relProd=""+jQuery(this).attr('rel');var revProd=""+jQuery(this).attr('rev');var classProd=""+jQuery(this).attr('class');var idProdV=""+jQuery(this).attr('title');var qtdProd=""+jQuery('input[title="'+idProdV+'"]').val();jQuery.post(baseUrl+"reloadCart.php",{relProdP:relProd,revProdP:revProd,classProdP:classProd,qtdProdP:qtdProd},function(data){if(parseInt(data)>=1){window.location='';jQuery('input[title="'+idProdV+'"]').val(data);if(classProd=="adicionarItem"){jQuery('input[title="'+idProdV+'"]').val(parseInt(qtdProd)+1);}else{jQuery('input[title="'+idProdV+'"]').val(parseInt(qtdProd)-1);}}else{jQuery('.alerta').remove();hideBigLoad();jQuery(data).insertAfter('input[title="'+idProdV+'"]');}});});jQuery(".addQtd").focus(function(){}).blur(function(){showBigLoad();var relProd=""+jQuery(this).attr('rel');var revProd=""+jQuery(this).attr('rev');var qtdProd=''+jQuery(this).val();var idProdV=""+jQuery(this).attr('title');jQuery.post(baseUrl+"reloadCart.php",{idProd:idProdV,relProdP:relProd,qtdProdP:qtdProd,revProdP:revProd},function(data){if(parseInt(data)>=0){window.location='';jQuery('input[title="'+idProdV+'"]').val(data);if(classProd=="adicionarItem"){jQuery('input[title="'+idProdV+'"]').val(parseInt(qtdProd)+1);}else{jQuery('input[title="'+idProdV+'"]').val(parseInt(qtdProd)-1);}}else{jQuery('.alerta').remove();hideBigLoad();jQuery(data).insertAfter('input[title="'+idProdV+'"]');}});});function showBigLoad(){var txt="<div id='janela'><div class='popup'><div class='loading'><span>Carregando</span></div></div></div>";jQuery(txt).insertAfter('body');jQuery('#janela').fadeIn();};function hideBigLoad(){jQuery('#janela').fadeOut();jQuery('#janela').remove();};jQuery('.btForgotPass').click(function(){jQuery('#loginForm').hide();jQuery('#forgotPassFormConfirma').hide();jQuery('#forgotPassForm').fadeIn();});jQuery('.btNovoCadastro').click(function(){jQuery('#forgotPassFormConfirma').hide();jQuery('#forgotPassForm').hide();jQuery('#novoRegistroForm').fadeIn();});jQuery('.btLogin').click(function(){jQuery('#forgotPassFormConfirma').hide();jQuery('#forgotPassForm').hide();jQuery('#loginForm').fadeIn();});jQuery('#formLogin').validate({messages:{emp:"Digite seu email. Não utilize espaços antes ou depois do email."},rules:{password:"required",password_again:{equalTo:"#pwp"}},submitHandler:function(form){var email=jQuery('#emp').val();var pass1=jQuery('#pwp').val();var checkoutV=""+jQuery('#checkout').val();jQuery('.carregando').fadeIn();jQuery(".msg").html("");jQuery(".msg").fadeOut();url=baseUrl+"editLoginAjax.php";jQuery.post(url,{emp:email,pwp:pass1,checkout:checkoutV},function(data){dataArr=data.split('****');numb=dataArr[0];urlRedirect=dataArr[1];jQuery('.carregando').fadeOut();jQuery(".msg").fadeOut();msg="";if(parseInt(numb)){msg="<strong style='color:green'>Seu acesso foi confirmado com sucesso! - Redirecionando... </strong>";jQuery(".msg").html(msg);jQuery(".msg").fadeIn();var timeout=function(){window.location=urlRedirect+""};setTimeout(timeout,1000);}else{msg="<strong style='color:red'>Houve erros no envio! Tente novamente </strong> | ERRO :"+data;jQuery(".msg").html(msg);jQuery(".msg").fadeIn();}});return false;}});jQuery('#formSenha').validate({messages:{emailr:"Digite seu email. Não utilize espaços antes ou depois do email."},rules:{password:"required",password_again:{equalTo:"#emailr"}},submitHandler:function(form){var emailr=""+jQuery('#emailr').val();jQuery('.carregando').fadeIn();jQuery(".msg").html("");jQuery(".msg").fadeOut();url=baseUrl+"editLostPassAjax.php";jQuery.post(url,{emp:emailr},function(data){jQuery('.carregando').fadeOut();msg="";if(parseInt(data)){msg="<strong style='color:green'>Pedido de nova senha realizado com  sucesso! Você receberá um email nos próximos 5 minutos. Caso demore, verifique também em seu filtro de SPAM e assine nosso email  como confiável.  </strong>";jQuery(".msg").html(msg);jQuery(".msg").fadeIn();}else{msg="<strong style='color:red'>Houve erros no envio! Tente novamente </strong> | ERRO :"+data;jQuery(".msg").fadeIn();jQuery(".msg").html(msg);}});return false;}});jQuery('#formRSenha').validate({messages:{emailrS:"Digite seu email. Não utilize espaços antes ou depois do email."},rules:{pwpR:"required",pwpR2:{equalTo:"#pwpR"}},submitHandler:function(form){var pwpR=jQuery('#pwpR').val();var pwpR2=jQuery('#pwpR2').val();var emailr=""+jQuery('#emailrS').val();var lkV=""+jQuery('#lk').val();jQuery('.carregando').fadeIn();jQuery(".msg").html("");jQuery(".msg").fadeOut();url=baseUrl+"editPassAjax.php";jQuery.post(url,{emp:emailr,pwp:pwpR,pw2p:pwpR2,lk:lkV},function(data){dataArr=data.split('****');numb=dataArr[0];urlRedirect=dataArr[1];jQuery('.carregando').fadeOut();msg="";if(parseInt(numb)){msg="<strong style='color:green'>Senha Alterada com Sucesso!</strong>";jQuery(".msg").html(msg);window.location=''+urlRedirect;}else{msg="<strong style='color:red'>Houve erros no envio! Tente novamente </strong> | ERRO :"+data;jQuery(".msg").html(msg);jQuery(".msg").fadeIn();}});return false;}});jQuery('#formESenha').validate({messages:{},rules:{pwpR:"required",pwpR2:{equalTo:"#pwpR"}},submitHandler:function(form){var pwpR=jQuery('#pwpR').val();var pwpR2=jQuery('#pwpR2').val();url=baseUrl+"editUserPassAjax.php";showBigLoad();jQuery('.msgRP').html('');jQuery.post(url,{pwp:pwpR,pw2p:pwpR2},function(data){jQuery('.msgRP').html(data);hideBigLoad();});return false;}});jQuery('#formCadastro').validate({messages:{termos:"Para se cadastrar você deve aceitar os termos de uso.",emailc:"Digite seu email. Não utilize espaços antes ou depois do email.",},rules:{passc:"required",passc2:{equalTo:"#passc"},termos:{required:true,minlength:1}},submitHandler:function(form){var nomeV=""+jQuery('#nome').val();var sobrenomeV=""+jQuery('#sobrenome').val();var emailc=""+jQuery('#emailc').val();var passc=""+jQuery('#passc').val();var pass2c=""+jQuery('#passc2').val();var checkoutV=""+jQuery('#checkout').val();var recebaV="";veriBox=parseInt(jQuery('input[name="receba"]').length);recebaV=0;if(veriBox>0){jQuery(boxes).each(function(){recebaV=1;});};jQuery('.carregando').fadeIn();jQuery(".msg").html("");jQuery(".msg").fadeOut();var che=Math.random();url=baseUrl+"editCriarLoginAjax.php?che="+che;jQuery.post(url,{emp:emailc,pwp:passc,pw2p:pass2c,nome:nomeV,sobrenome:sobrenomeV,checkout:checkoutV,receba:recebaV},function(data){jQuery('.carregando').fadeOut();msg="";dataArr=data.split('****');numb=dataArr[0];urlRedirect=dataArr[1];if(parseInt(numb)){msg="<strong style='color:green'>Seu acesso foi confirmado com sucesso!- Redirecionando...</strong>";jQuery(".msg").html(msg);var lgan=''+jQuery('#lganuncio').val();var lgan2=''+jQuery('#lgsite').val();var timeout=function(){window.location=urlRedirect;};setTimeout(timeout,1000);}else{msg="<strong style='color:red'>Houve erros no envio! Tente novamente </strong> | ERRO :"+data;jQuery(".msg").html(msg);jQuery(".msg").fadeIn();}
return false;});return false;}});if(jQuery.datepicker){jQuery(".nascC").datepicker({changeYear:true,changeMonth:true,yearRange:'-100:+0'});};jQuery('#infoPedido').validate({messages:{telefoneUsuario:"Digite um número válido. Não utilize espaços antes ou depois do numero.",telefoneUsuarioCel:"Digite um número válido. Não utilize espaços antes ou depois do numero.",userCpf:"Digite um número válido. Não utilize espaços, traços ou pontos antes ou depois dos numeros.",},rules:{},submitHandler:function(form){salvarDados();return false;}});function msgP(data){jQuery('.msgP').fadeIn();jQuery('.msgP').html(data);};function salvarDados(){var arrayData=new Array();jQuery('input.userData').each(function(index){var id=""+jQuery(this).attr('id');var text=""+jQuery(this).val();arrayData[id+"V"]=text;});arrayData["sexoUsuarioV"]=""+jQuery("select[name=sexoUsuario] option:selected").val();var nomeUsuarioV=""+arrayData['nomeUsuarioV'];var nascimentoUsuarioV=""+arrayData['nascimentoUsuarioV'];var sexoUsuarioV=""+arrayData['sexoUsuarioV'];var enderecoUsuarioV=""+arrayData['enderecoUsuarioV'];var enderecoUsuarioNumeroV=""+arrayData['enderecoUsuarioNumeroV'];var complementoUsuarioV=""+arrayData['complementoUsuarioV'];var bairroUsuarioV=""+arrayData['bairroUsuarioV'];var cidadeUsuarioV=""+arrayData['cidadeUsuarioV'];var userCpfV=""+arrayData['userCpfV'];var estadoUsuarioV=""+jQuery("#estadoUsuario option:selected").val();var cepUsuarioV=""+arrayData['cepUsuarioV'];var dddUsuarioV=""+arrayData['dddUsuarioV'];var telefoneUsuarioV=""+arrayData['telefoneUsuarioV'];var dddUsuarioCelV=""+arrayData['dddUsuarioCelV'];var telefoneUsuarioCelV=""+arrayData['telefoneUsuarioCelV'];var enderecoUsuario2V="";var enderecoUsuarioNumero2V="";var complementoUsuario2V="";var bairroUsuario2V="";var cidadeUsuario2V="";var estadoUsuario2V="";var estadoUsuario2V="";var cepUsuario2V="";statusCheck=jQuery('#abrirEnderecoEntrega').attr('checked');if(statusCheck=="checked"){var enderecoUsuario2V=""+arrayData['enderecoUsuario2V'];var enderecoUsuarioNumero2V=""+arrayData['enderecoUsuarioNumero2V'];var complementoUsuario2V=""+arrayData['complementoUsuario2V'];var bairroUsuario2V=""+arrayData['bairroUsuario2V'];var cidadeUsuario2V=""+arrayData['cidadeUsuario2V'];var estadoUsuario2V=""+jQuery("#estadoUsuario2 option:selected").val();var cepUsuario2V=""+arrayData['cepUsuario2V'];}else{var enderecoUsuario2V=""+enderecoUsuarioV;var enderecoUsuarioNumero2V=""+enderecoUsuarioNumeroV;var complementoUsuario2V=""+complementoUsuarioV;var bairroUsuario2V=""+bairroUsuarioV;var cidadeUsuario2V=""+cidadeUsuarioV;var estadoUsuario2V=""+estadoUsuarioV;var cepUsuario2V=""+cepUsuarioV;};salvarForm(nomeUsuarioV,nascimentoUsuarioV,sexoUsuarioV,enderecoUsuarioV,enderecoUsuarioNumeroV,complementoUsuarioV,bairroUsuarioV,cidadeUsuarioV,estadoUsuarioV,cepUsuarioV,enderecoUsuario2V,enderecoUsuarioNumero2V,complementoUsuario2V,bairroUsuario2V,cidadeUsuario2V,estadoUsuario2V,cepUsuario2V,dddUsuarioV,telefoneUsuarioV,dddUsuarioCelV,telefoneUsuarioCelV,userCpfV);};function salvarForm(nomeUsuarioV,nascimentoUsuarioV,sexoUsuarioV,enderecoUsuarioV,enderecoUsuarioNumeroV,complementoUsuarioV,bairroUsuarioV,cidadeUsuarioV,estadoUsuarioV,cepUsuarioV,enderecoUsuario2V,enderecoUsuarioNumero2V,complementoUsuario2V,bairroUsuario2V,cidadeUsuario2V,estadoUsuario2V,cepUsuario2V,dddUsuarioV,telefoneUsuarioV,dddUsuarioCelV,telefoneUsuarioCelV,userCpfV){jQuery(".carregando").fadeIn();jQuery.post(baseUrl+"editAjaxDadosUsuario.php",{nomeUsuario:nomeUsuarioV,nascimentoUsuario:nascimentoUsuarioV,sexoUsuario:sexoUsuarioV,enderecoUsuario:enderecoUsuarioV,enderecoUsuarioNumero:enderecoUsuarioNumeroV,complementoUsuario:complementoUsuarioV,bairroUsuario:bairroUsuarioV,cidadeUsuario:cidadeUsuarioV,estadoUsuario:estadoUsuarioV,cepUsuario:cepUsuarioV,enderecoUsuario2:enderecoUsuario2V,enderecoUsuarioNumero2:enderecoUsuarioNumero2V,complementoUsuario2:complementoUsuario2V,bairroUsuario2:bairroUsuario2V,cidadeUsuario2:cidadeUsuario2V,estadoUsuario2:estadoUsuario2V,cepUsuario2:cepUsuario2V,dddUsuario:dddUsuarioV,telefoneUsuario:telefoneUsuarioV,dddUsuarioCel:dddUsuarioCelV,telefoneUsuarioCel:telefoneUsuarioCelV,userCpf:userCpfV},function(data){jQuery(".carregando").fadeOut();msgP(data);if(cepUsuario2V!='undefined'){jQuery('input.cep').val(cepUsuario2V);jQuery('.cepEntrega').text(cepUsuario2V);};getEndereco();var checkout=jQuery('#checkout').val();if(checkout=='TRUE'){calculaFrete();var Self=jQuery('div.block-content').eq(1);var irpara=parseInt(jQuery('.checkout').offset().top);jQuery('html, body').animate({scrollTop:irpara},1000);jQuery('.checkout .block .block-content:visible').slideUp(300);Self.slideDown(300);jQuery('.msg').html('');};});};jQuery('.checkout .block').not(jQuery('.checkout .block:first')).find('.block-content').hide();jQuery('.checkout .block .block-head').click(function(){jQuery('.carregando').hide();jQuery('.msgP').text('');jQuery('.msg2').text('');var Self=jQuery(this).next().find('.block-content');var Self=jQuery('div.block-content').eq(0);irpara=parseInt(jQuery('.checkout').offset().top);jQuery('html, body').animate({scrollTop:irpara},1000);if(jQuery('.checkout .block .block-content:visible').is(Self))return;jQuery('.checkout .block .block-content:visible').slideUp(300);Self.slideDown(300);});jQuery('#copiarEndereco').change(function(){var statusCheck=jQuery(this).attr('checked');if(statusCheck=="checked"){var endereco=jQuery('#enderecoUsuario').val();jQuery('#enderecoUsuario2').val(endereco);var numero=jQuery('#enderecoUsuarioNumero').val();jQuery('#enderecoUsuarioNumero2').val(numero);var complemento=jQuery('#complementoUsuario').val();jQuery('#complementoUsuario2').val(complemento);var bairro=jQuery('#bairroUsuario').val();jQuery('#bairroUsuario2').val(bairro);var cidade=jQuery('#cidadeUsuario').val();jQuery('#cidadeUsuario2').val(cidade);var estado=jQuery('#estadoUsuario').val();jQuery('#estadoUsuario2').val(estado);var cep=jQuery('#cepUsuario').val();jQuery('#cepUsuario2').val(cep);};});jQuery('#abrirEnderecoEntrega').change(function(){var statusCheck=jQuery(this).attr('checked');if(statusCheck=="checked"){jQuery('.contentDadosEntrega').fadeIn();}else{jQuery('.contentDadosEntrega').hide();}});jQuery('.btCalcularDesconto').click(function(){var cupomV=jQuery('#cupom').val();jQuery(this).text('Carregando...');url=baseUrl+"consultaDescontoAjax.php";jQuery.post(url,{cupom:cupomV},function(data){themefolder=jQuery('.themefolder').val();if(themefolder=='loja1'){jQuery('.retCupom').text(data);}else{alert(themefolder);}});});var tamanhoOpen=false;jQuery('.expandirT').click(function(){key=jQuery(this).attr('rel');if(tamanhoOpen==false){jQuery('.'+key).fadeIn();tamanhoOpen=true;}else{jQuery('.tamanhoSelect .hide').hide();tamanhoOpen=false;};});var corOpen=false;jQuery('.expandirC').click(function(){key=jQuery(this).attr('rel');if(corOpen==false){jQuery('.'+key).fadeIn();corOpen=true;}else{jQuery('.corSelect .hide').hide();corOpen=false;};});showCamisaMedida=false;jQuery('.camisaMedida').click(function(){if(showCamisaMedida==false){urlImg=""+jQuery('#tabelaMedida').val();htmlTabelaMedidas="<div  class='containerMedidas'><p class='btFecharMedidas'></p><img src='"+urlImg+"' /></div><div id='fade' class='white_overlay'></div>";jQuery('body').append(htmlTabelaMedidas);jQuery('.containerMedidas,.white_overlay').fadeIn();loadBtFecharTabelaTamanho();showCamisaMedida=true;}else{jQuery('.containerMedidas,.black_overlay').hide();jQuery('.containerMedidas').remove();jQuery('.white_overlay').remove();showCamisaMedida=false;};});function loadBtFecharTabelaTamanho(){jQuery('.btFecharMedidas').click(function(){jQuery('.containerMedidas,.white_overlay').hide();showCamisaMedida=false;});};subFechado=true;jQuery('.temaSelect p.ativo').click(function(){if(subFechado==true){jQuery('.temaSelect p.sub').fadeIn();subFechado=false;}else{jQuery('.temaSelect p.sub').fadeOut();subFechado=true;}});jQuery('.temaSelect p.sub').click(function(){valor=jQuery(this).text();jQuery('.temaSelect p.ativo').text(valor);jQuery('.temaSelect p.ativo').attr('rel',jQuery(this).attr('rel'));jQuery('.temaSelect p.sub').fadeOut();subFechado=true;carregaFiltro();});jQuery('.tamanhoSelect li').click(function(){jQuery('.tamanhoSelect li').removeClass('ativo');jQuery(this).addClass('ativo');carregaFiltro();});jQuery('.corSelect li').click(function(){jQuery('.corSelect li').removeClass('ativo');jQuery(this).addClass('ativo');carregaFiltro();});function carregaFiltro(){tema=""+""+jQuery('.temaSelect p.ativo').attr('rel');tamanho=""+jQuery('.tamanhoSelect li.ativo').attr('rel');cor=""+jQuery('.corSelect li.ativo').attr('rel');currentCat=""+jQuery('#currentCat').val();url=baseUrl+"consultaFiltroBusca.php";showBigLoad();jQuery.post(url,{temaV:tema,tamanhoV:tamanho,corV:cor,currentCatV:currentCat},function(data){jQuery('.produtosRecentes').hide();jQuery('.produtosRecentes').html(data);jQuery('.produtosRecentes').fadeIn();hideBigLoad();});}
jQuery('.botaoEntrega').click(function(){var idEV=""+jQuery(this).attr('rel');var radioFreteV=""+jQuery("input[name=radioFrete]:checked").val();var radioFreteR=""+jQuery("input[name=radioFrete]:checked").attr('rel');showBigLoad();url=baseUrl+"defineEntregaPedido.php";jQuery.post(url,{idE:idEV,radioFrete:radioFreteV,radioFreteNome:radioFreteR},function(data){dataArr=data.split('****');numb=dataArr[0];urlRedirect=dataArr[1];window.location=""+urlRedirect;});});jQuery(".somenteNumeros").keydown(function(event){if(event.keyCode==46||event.keyCode==8||event.keyCode==9||event.keyCode==27||event.keyCode==13||(event.keyCode==65&&event.ctrlKey===true)||(event.keyCode>=35&&event.keyCode<=39)){return;}
else{if(event.shiftKey||(event.keyCode<48||event.keyCode>57)&&(event.keyCode<96||event.keyCode>105)){event.preventDefault();}}});var enviando=false;goo=false;jQuery('.tipo').click(function(){var tipoPagtoV=""+jQuery(this).attr('rel');jQuery('.tipo').removeClass('active');jQuery(this).addClass('active');jQuery('.formaDet').hide();jQuery('#'+tipoPagtoV+'Box').stop().fadeIn();});jQuery('.checkPagto').click(function(){var tipoPagtoV=""+jQuery(this).attr('rel');var formaPagamentoV=""+jQuery("input[name=formaPagamento]:checked").val();var parcelasV=""+jQuery("#parcelas option:selected").val();var codigoBandeiraV=""+jQuery("input[name=codigoBandeira]:checked").val();var radioFreteV=""+jQuery("#vFrete").val();url=baseUrl+"saveOrderPayment.php";if(enviando==false){enviando=true;showBigLoad();goo=false;jQuery.post(url,{radioFrete:radioFreteV,tipoPagto:tipoPagtoV,formaPagamento:formaPagamentoV,parcelas:parcelasV,codigoBandeira:codigoBandeiraV},function(data){hideBigLoad();enviando=false;dataArr=data.split('****');numb=parseInt(dataArr[0]);if(numb==2){jQuery('.returnajx').html(dataArr[1]);goo=true;document.pagseguro.submit();};if(numb==3){jQuery('.returnajx3').html(dataArr[1]);goo=true;document.paypal.submit();};if(numb==4){jQuery('.returnajx4').html(dataArr[1]);goo=true;document.moip.submit();};if(numb==7){urlRedirect=dataArr[1];if(urlRedirect!='undefined'||urlRedirect!=undefined){window.location=""+urlRedirect;}else{alert(urlRedirect);};goo=true;};formObrigado="<form action='"+dataArr[2]+"'   method='post'    id='obrigado' name='obrigado' style='display:none'  ><input type='hidden' name='redurl'  value='"+dataArr[1]+"'/><input type='submit'  value='ir'/></form>";jQuery('.returnajx').html(formObrigado);document.obrigado.submit();goo=true;if(goo==false){urlRedirect=dataArr[1];if(urlRedirect=='undefined'||urlRedirect==undefined){window.location="";}else{window.location=""+urlRedirect;};};});};return false;});jQuery('.bSearchOrder').click(function(){url=baseUrl+"getOrderUser.php";oidV=jQuery('#numPedido').val();if(enviando==false){enviando=true;showBigLoad();jQuery.post(url,{oid:oidV},function(data){hideBigLoad();jQuery('#contentOrders').html(data);enviando=false;});};return false;});jQuery('.sendAvalProd').click(function(){var oidV=""+jQuery("#orderNum").val();var idpV=""+jQuery(this).attr('rel');var avaliacaoV=""+jQuery("#avaliacao"+idpV).val();url=baseUrl+"setAvaliacaoProduto.php";if(enviando==false){enviando=true;showBigLoad();jQuery.post(url,{oid:oidV,idp:idpV,avaliacao:avaliacaoV},function(data){hideBigLoad();enviando=false;});};return false;});jQuery('.facebook_connect').click(function(){showBigLoad();});jQuery('.facebook_connect2').click(function(){showBigLoad();});jQuery(".btlightboxprod").click(function(){jQuery('#contentLight').html('');jQuery('.carregando').fadeIn();url=baseUrl+"previewProduct.php";oidV=""+jQuery(this).attr('rel');jQuery.post(url,{oid:oidV},function(data){jQuery('#contentLight').html(data);startVariacaoTamanhoCor();btComprar();btIndisponivel();if(jQuery.swipebox){jQuery(".group").swipebox();};jQuery('.carregando').fadeOut();});lightbox_open();});jQuery(".btEditarQdt").click(function(){oidVC=""+jQuery(this).attr('rel');oidV=""+jQuery(this).attr('rev');jQuery('#contentLight').html('');jQuery('.carregando').fadeIn();url=baseUrl+"changeProductInCart.php";jQuery.post(url,{oid:oidV,oidC:oidVC},function(data){jQuery('#contentLight').html(data);startVariacaoTamanhoCor();btAlterar();btIndisponivel();if(jQuery.swipebox){jQuery(".group").swipebox();};jQuery('.carregando').fadeOut();});lightbox_open();});jQuery(".lightbox_close").click(function(){lightbox_close();});jQuery("#fecharLight").click(function(){lightbox_close();});function lightbox_open(){window.scrollTo(0,0);jQuery('#light').stop().fadeIn();jQuery('#fade').stop().fadeIn();}
function lightbox_close(){jQuery('#light').stop().fadeOut();jQuery('#fade').stop().fadeOut();}
var limitAge=""+jQuery('meta[name=limitAge]').attr("content");if(limitAge=="18"){limitAge="-"+limitAge+"Y";}else{}
if(jQuery.datepicker){jQuery(".datepicker").datepicker({dateFormat:'dd/mm/yy',dayNames:['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],dayNamesMin:['D','S','T','Q','Q','S','S','D'],dayNamesShort:['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],monthNames:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],monthNamesShort:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],nextText:'Próximo',prevText:'Anterior',changeYear:true,changeMonth:true,yearRange:'-100:+0',minDate:new Date(1900,1-1,1),maxDate:''+limitAge,});};function btAlterar(){jQuery('.btAlterar').click(function(){var variacaoCorP="";var variacaoTamanhoP="";var qtdProdutoV=''+jQuery('#qtdProd').val();var postIDP=""+jQuery('#idP').val();var ed=false;var msg="";jQuery('p.msg').html('');jQuery('p.msg').hide();if(verificaCor()<1&&verificaTamanho()<1){ed=true;}else{var vC=parseInt(verificaCor());if(vC>=1){ativo=""+jQuery('ul.cores li.ativo').attr('rel');if(ativo=='undefined'){msg="Escolha uma cor disponível.";}else{variacaoCorP=ativo;}};var vT=parseInt(verificaTamanho());if(vT>=1){ativo=""+jQuery('ul.tamanhos li.ativo').attr('rel');if(ativo=='undefined'){if(msg==""){msg="Escolha um tamanho disponível.";}else{msg="Escolha uma cor e tamnho disponível.";};}else{variacaoTamanhoP=ativo;}};};if(msg==""){ed=true;};if(ed==true){showBigLoad();var idProdInCartV=""+jQuery(this).attr('rel');var idProdV=""+jQuery(this).attr('rev');jQuery.post(baseUrl+"reloadCartEdit.php",{idProdInCart:idProdInCartV,idProd:idProdV,variacaoCor:variacaoCorP,variacaoTamanho:variacaoTamanhoP,qtdProduto:qtdProdutoV},function(data){hideBigLoad();if(parseInt(data)>=1){window.location='';}else{jQuery('.msg').html(data);jQuery('.msg').fadeIn();};});}else{jQuery('.msg').html("<span style='color:red'>"+msg+"</span>");jQuery('.msg').fadeIn();}});};jQuery("li.precoAlt").click(function(){precoAlt=jQuery(this).find("span.precoAlt").attr('rel');precoAlt=precoAlt.replace('.','');precoAlt=precoAlt.replace(',','.');precoAlt=parseFloat(precoAlt);});jQuery(".enviarRevisao").click(function(){alert('enviando solicitação');url=baseUrl+"enviarSolicitacaoVerificacao.php";jQuery.post(url,{},function(data){window.location="";});});});;
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=b2e5315c8467a719bc615a0d07371550)
 * Config saved to config.json and https://gist.github.com/b2e5315c8467a719bc615a0d07371550
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){var a,s=e.attr("data-target")||(a=e.attr("href"))&&a.replace(/.*(?=#[^\s]+$)/,"");return t(s)}function a(e){return this.each(function(){var a=t(this),i=a.data("bs.collapse"),n=t.extend({},s.DEFAULTS,a.data(),"object"==typeof e&&e);!i&&n.toggle&&/show|hide/.test(e)&&(n.toggle=!1),i||a.data("bs.collapse",i=new s(this,n)),"string"==typeof e&&i[e]()})}var s=function(e,a){this.$element=t(e),this.options=t.extend({},s.DEFAULTS,a),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};s.VERSION="3.3.7",s.TRANSITION_DURATION=350,s.DEFAULTS={toggle:!0},s.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},s.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(i&&i.length&&(e=i.data("bs.collapse"),e&&e.transitioning))){var n=t.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){i&&i.length&&(a.call(i,"hide"),e||i.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var l=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return l.call(this);var o=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(l,this)).emulateTransitionEnd(s.TRANSITION_DURATION)[r](this.$element[0][o])}}}},s.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var a=this.dimension();this.$element[a](this.$element[a]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[a](0).one("bsTransitionEnd",t.proxy(i,this)).emulateTransitionEnd(s.TRANSITION_DURATION):i.call(this)}}},s.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},s.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(a,s){var i=t(s);this.addAriaAndCollapsedClass(e(i),i)},this)).end()},s.prototype.addAriaAndCollapsedClass=function(t,e){var a=t.hasClass("in");t.attr("aria-expanded",a),e.toggleClass("collapsed",!a).attr("aria-expanded",a)};var i=t.fn.collapse;t.fn.collapse=a,t.fn.collapse.Constructor=s,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(s){var i=t(this);i.attr("data-target")||s.preventDefault();var n=e(i),r=n.data("bs.collapse"),l=r?"toggle":i.data();a.call(n,l)})}(jQuery);

!function(a){"use strict";function b(a,c){if(!(this instanceof b)){var d=new b(a,c);return d.open(),d}this.id=b.id++,this.setup(a,c),this.chainCallbacks(b._callbackChain)}if("undefined"==typeof a)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var c=[],d=function(b){return c=a.grep(c,function(a){return a!==b&&a.$instance.closest("body").length>0})},e=function(a,b){var c={},d=new RegExp("^"+b+"([A-Z])(.*)");for(var e in a){var f=e.match(d);if(f){var g=(f[1]+f[2].replace(/([A-Z])/g,"-$1")).toLowerCase();c[g]=a[e]}}return c},f={keyup:"onKeyUp",resize:"onResize"},g=function(c){a.each(b.opened().reverse(),function(){return c.isDefaultPrevented()||!1!==this[f[c.type]](c)?void 0:(c.preventDefault(),c.stopPropagation(),!1)})},h=function(c){if(c!==b._globalHandlerInstalled){b._globalHandlerInstalled=c;var d=a.map(f,function(a,c){return c+"."+b.prototype.namespace}).join(" ");a(window)[c?"on":"off"](d,g)}};b.prototype={constructor:b,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:a.noop,beforeContent:a.noop,beforeClose:a.noop,afterOpen:a.noop,afterContent:a.noop,afterClose:a.noop,onKeyUp:a.noop,onResize:a.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(b,c){"object"!=typeof b||b instanceof a!=!1||c||(c=b,b=void 0);var d=a.extend(this,c,{target:b}),e=d.resetCss?d.namespace+"-reset":d.namespace,f=a(d.background||['<div class="'+e+"-loading "+e+'">','<div class="'+e+'-content">','<span class="'+e+"-close-icon "+d.namespace+'-close">',d.closeIcon,"</span>",'<div class="'+d.namespace+'-inner">'+d.loading+"</div>","</div>","</div>"].join("")),g="."+d.namespace+"-close"+(d.otherClose?","+d.otherClose:"");return d.$instance=f.clone().addClass(d.variant),d.$instance.on(d.closeTrigger+"."+d.namespace,function(b){var c=a(b.target);("background"===d.closeOnClick&&c.is("."+d.namespace)||"anywhere"===d.closeOnClick||c.closest(g).length)&&(d.close(b),b.preventDefault())}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var b=this,c=this.constructor.contentFilters,d=function(a){return b.$currentTarget&&b.$currentTarget.attr(a)},e=d(b.targetAttr),f=b.target||e||"",g=c[b.type];if(!g&&f in c&&(g=c[f],f=b.target&&e),f=f||d("href")||"",!g)for(var h in c)b[h]&&(g=c[h],f=b[h]);if(!g){var i=f;if(f=null,a.each(b.contentFilters,function(){return g=c[this],g.test&&(f=g.test(i)),!f&&g.regex&&i.match&&i.match(g.regex)&&(f=i),!f}),!f)return"console"in window&&window.console.error("Featherlight: no content filter found "+(i?' for "'+i+'"':" (no target specified)")),!1}return g.process.call(b,f)},setContent:function(b){var c=this;return(b.is("iframe")||a("iframe",b).length>0)&&c.$instance.addClass(c.namespace+"-iframe"),c.$instance.removeClass(c.namespace+"-loading"),c.$instance.find("."+c.namespace+"-inner").not(b).slice(1).remove().end().replaceWith(a.contains(c.$instance[0],b[0])?"":b),c.$content=b.addClass(c.namespace+"-inner"),c},open:function(b){var d=this;if(d.$instance.hide().appendTo(d.root),!(b&&b.isDefaultPrevented()||d.beforeOpen(b)===!1)){b&&b.preventDefault();var e=d.getContent();if(e)return c.push(d),h(!0),d.$instance.fadeIn(d.openSpeed),d.beforeContent(b),a.when(e).always(function(a){d.setContent(a),d.afterContent(b)}).then(d.$instance.promise()).done(function(){d.afterOpen(b)})}return d.$instance.detach(),a.Deferred().reject().promise()},close:function(b){var c=this,e=a.Deferred();return c.beforeClose(b)===!1?e.reject():(0===d(c).length&&h(!1),c.$instance.fadeOut(c.closeSpeed,function(){c.$instance.detach(),c.afterClose(b),e.resolve()})),e.promise()},resize:function(a,b){if(a&&b){this.$content.css("width","").css("height","");var c=Math.max(a/(parseInt(this.$content.parent().css("width"),10)-1),b/(parseInt(this.$content.parent().css("height"),10)-1));c>1&&(c=b/Math.floor(b/c),this.$content.css("width",""+a/c+"px").css("height",""+b/c+"px"))}},chainCallbacks:function(b){for(var c in b)this[c]=a.proxy(b[c],this,a.proxy(this[c],this))}},a.extend(b,{id:0,autoBind:"[data-featherlight]",defaults:b.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(b){return b instanceof a&&b},process:function(b){return this.persist!==!1?a(b):a(b).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(b){var c=this,d=a.Deferred(),e=new Image,f=a('<img src="'+b+'" alt="" class="'+c.namespace+'-image" />');return e.onload=function(){f.naturalWidth=e.width,f.naturalHeight=e.height,d.resolve(f)},e.onerror=function(){d.reject(f)},e.src=b,d.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(b){return a(b)}},ajax:{regex:/./,process:function(b){var c=a.Deferred(),d=a("<div></div>").load(b,function(a,b){"error"!==b&&c.resolve(d.contents()),c.fail()});return c.promise()}},iframe:{process:function(b){var c=new a.Deferred,d=a("<iframe/>").hide().attr("src",b).css(e(this,"iframe")).on("load",function(){c.resolve(d.show())}).appendTo(this.$instance.find("."+this.namespace+"-content"));return c.promise()}},text:{process:function(b){return a("<div>",{text:b})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(b,c){var d=this,e=new RegExp("^data-"+c+"-(.*)"),f={};return b&&b.attributes&&a.each(b.attributes,function(){var b=this.name.match(e);if(b){var c=this.value,g=a.camelCase(b[1]);if(a.inArray(g,d.functionAttributes)>=0)c=new Function(c);else try{c=a.parseJSON(c)}catch(h){}f[g]=c}}),f},extend:function(b,c){var d=function(){this.constructor=b};return d.prototype=this.prototype,b.prototype=new d,b.__super__=this.prototype,a.extend(b,this,c),b.defaults=b.prototype,b},attach:function(b,c,d){var e=this;"object"!=typeof c||c instanceof a!=!1||d||(d=c,c=void 0),d=a.extend({},d);var f,g=d.namespace||e.defaults.namespace,h=a.extend({},e.defaults,e.readElementConfig(b[0],g),d);return b.on(h.openTrigger+"."+h.namespace,h.filter,function(g){var i=a.extend({$source:b,$currentTarget:a(this)},e.readElementConfig(b[0],h.namespace),e.readElementConfig(this,h.namespace),d),j=f||a(this).data("featherlight-persisted")||new e(c,i);"shared"===j.persist?f=j:j.persist!==!1&&a(this).data("featherlight-persisted",j),i.$currentTarget.blur(),j.open(g)}),b},current:function(){var a=this.opened();return a[a.length-1]||null},opened:function(){var b=this;return d(),a.grep(c,function(a){return a instanceof b})},close:function(a){var b=this.current();return b?b.close(a):void 0},_onReady:function(){var b=this;b.autoBind&&(a(b.autoBind).each(function(){b.attach(a(this))}),a(document).on("click",b.autoBind,function(c){c.isDefaultPrevented()||"featherlight"===c.namespace||(c.preventDefault(),b.attach(a(c.currentTarget)),a(c.target).trigger("click.featherlight"))}))},_callbackChain:{onKeyUp:function(b,c){return 27===c.keyCode?(this.closeOnEsc&&a.featherlight.close(c),!1):b(c)},onResize:function(a,b){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),a(b)},afterContent:function(a,b){var c=a(b);return this.onResize(b),c}}}),a.featherlight=b,a.fn.featherlight=function(a,c){return b.attach(this,a,c)},a(document).ready(function(){b._onReady()})}(jQuery);
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
/*! jPlayer 2.9.1 for jQuery ~ (c) 2009-2014 Happyworm Ltd ~ MIT License */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery?a.jQuery:a.Zepto)}(this,function(a,b){a.fn.jPlayer=function(c){var d="jPlayer",e="string"==typeof c,f=Array.prototype.slice.call(arguments,1),g=this;return c=!e&&f.length?a.extend.apply(null,[!0,c].concat(f)):c,e&&"_"===c.charAt(0)?g:(this.each(e?function(){var e=a(this).data(d),h=e&&a.isFunction(e[c])?e[c].apply(e,f):e;return h!==e&&h!==b?(g=h,!1):void 0}:function(){var b=a(this).data(d);b?b.option(c||{}):a(this).data(d,new a.jPlayer(c,this))}),g)},a.jPlayer=function(b,c){if(arguments.length){this.element=a(c),this.options=a.extend(!0,{},this.options,b);var d=this;this.element.bind("remove.jPlayer",function(){d.destroy()}),this._init()}},"function"!=typeof a.fn.stop&&(a.fn.stop=function(){}),a.jPlayer.emulateMethods="load play pause",a.jPlayer.emulateStatus="src readyState networkState currentTime duration paused ended playbackRate",a.jPlayer.emulateOptions="muted volume",a.jPlayer.reservedEvent="ready flashreset resize repeat error warning",a.jPlayer.event={},a.each(["ready","setmedia","flashreset","resize","repeat","click","error","warning","loadstart","progress","suspend","abort","emptied","stalled","play","pause","loadedmetadata","loadeddata","waiting","playing","canplay","canplaythrough","seeking","seeked","timeupdate","ended","ratechange","durationchange","volumechange"],function(){a.jPlayer.event[this]="jPlayer_"+this}),a.jPlayer.htmlEvent=["loadstart","abort","emptied","stalled","loadedmetadata","canplay","canplaythrough"],a.jPlayer.pause=function(){a.jPlayer.prototype.destroyRemoved(),a.each(a.jPlayer.prototype.instances,function(a,b){b.data("jPlayer").status.srcSet&&b.jPlayer("pause")})},a.jPlayer.timeFormat={showHour:!1,showMin:!0,showSec:!0,padHour:!1,padMin:!0,padSec:!0,sepHour:":",sepMin:":",sepSec:""};var c=function(){this.init()};c.prototype={init:function(){this.options={timeFormat:a.jPlayer.timeFormat}},time:function(a){a=a&&"number"==typeof a?a:0;var b=new Date(1e3*a),c=b.getUTCHours(),d=this.options.timeFormat.showHour?b.getUTCMinutes():b.getUTCMinutes()+60*c,e=this.options.timeFormat.showMin?b.getUTCSeconds():b.getUTCSeconds()+60*d,f=this.options.timeFormat.padHour&&10>c?"0"+c:c,g=this.options.timeFormat.padMin&&10>d?"0"+d:d,h=this.options.timeFormat.padSec&&10>e?"0"+e:e,i="";return i+=this.options.timeFormat.showHour?f+this.options.timeFormat.sepHour:"",i+=this.options.timeFormat.showMin?g+this.options.timeFormat.sepMin:"",i+=this.options.timeFormat.showSec?h+this.options.timeFormat.sepSec:""}};var d=new c;a.jPlayer.convertTime=function(a){return d.time(a)},a.jPlayer.uaBrowser=function(a){var b=a.toLowerCase(),c=/(webkit)[ \/]([\w.]+)/,d=/(opera)(?:.*version)?[ \/]([\w.]+)/,e=/(msie) ([\w.]+)/,f=/(mozilla)(?:.*? rv:([\w.]+))?/,g=c.exec(b)||d.exec(b)||e.exec(b)||b.indexOf("compatible")<0&&f.exec(b)||[];return{browser:g[1]||"",version:g[2]||"0"}},a.jPlayer.uaPlatform=function(a){var b=a.toLowerCase(),c=/(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/,d=/(ipad|playbook)/,e=/(android)/,f=/(mobile)/,g=c.exec(b)||[],h=d.exec(b)||!f.exec(b)&&e.exec(b)||[];return g[1]&&(g[1]=g[1].replace(/\s/g,"_")),{platform:g[1]||"",tablet:h[1]||""}},a.jPlayer.browser={},a.jPlayer.platform={};var e=a.jPlayer.uaBrowser(navigator.userAgent);e.browser&&(a.jPlayer.browser[e.browser]=!0,a.jPlayer.browser.version=e.version);var f=a.jPlayer.uaPlatform(navigator.userAgent);f.platform&&(a.jPlayer.platform[f.platform]=!0,a.jPlayer.platform.mobile=!f.tablet,a.jPlayer.platform.tablet=!!f.tablet),a.jPlayer.getDocMode=function(){var b;return a.jPlayer.browser.msie&&(document.documentMode?b=document.documentMode:(b=5,document.compatMode&&"CSS1Compat"===document.compatMode&&(b=7))),b},a.jPlayer.browser.documentMode=a.jPlayer.getDocMode(),a.jPlayer.nativeFeatures={init:function(){var a,b,c,d=document,e=d.createElement("video"),f={w3c:["fullscreenEnabled","fullscreenElement","requestFullscreen","exitFullscreen","fullscreenchange","fullscreenerror"],moz:["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror"],webkit:["","webkitCurrentFullScreenElement","webkitRequestFullScreen","webkitCancelFullScreen","webkitfullscreenchange",""],webkitVideo:["webkitSupportsFullscreen","webkitDisplayingFullscreen","webkitEnterFullscreen","webkitExitFullscreen","",""],ms:["","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError"]},g=["w3c","moz","webkit","webkitVideo","ms"];for(this.fullscreen=a={support:{w3c:!!d[f.w3c[0]],moz:!!d[f.moz[0]],webkit:"function"==typeof d[f.webkit[3]],webkitVideo:"function"==typeof e[f.webkitVideo[2]],ms:"function"==typeof e[f.ms[2]]},used:{}},b=0,c=g.length;c>b;b++){var h=g[b];if(a.support[h]){a.spec=h,a.used[h]=!0;break}}if(a.spec){var i=f[a.spec];a.api={fullscreenEnabled:!0,fullscreenElement:function(a){return a=a?a:d,a[i[1]]},requestFullscreen:function(a){return a[i[2]]()},exitFullscreen:function(a){return a=a?a:d,a[i[3]]()}},a.event={fullscreenchange:i[4],fullscreenerror:i[5]}}else a.api={fullscreenEnabled:!1,fullscreenElement:function(){return null},requestFullscreen:function(){},exitFullscreen:function(){}},a.event={}}},a.jPlayer.nativeFeatures.init(),a.jPlayer.focus=null,a.jPlayer.keyIgnoreElementNames="A INPUT TEXTAREA SELECT BUTTON";var g=function(b){var c,d=a.jPlayer.focus;d&&(a.each(a.jPlayer.keyIgnoreElementNames.split(/\s+/g),function(a,d){return b.target.nodeName.toUpperCase()===d.toUpperCase()?(c=!0,!1):void 0}),c||a.each(d.options.keyBindings,function(c,e){return e&&a.isFunction(e.fn)&&("number"==typeof e.key&&b.which===e.key||"string"==typeof e.key&&b.key===e.key)?(b.preventDefault(),e.fn(d),!1):void 0}))};a.jPlayer.keys=function(b){var c="keydown.jPlayer";a(document.documentElement).unbind(c),b&&a(document.documentElement).bind(c,g)},a.jPlayer.keys(!0),a.jPlayer.prototype={count:0,version:{script:"2.9.1",needFlash:"2.9.0",flash:"unknown"},options:{swfPath:"js",solution:"html, flash",supplied:"mp3",auroraFormats:"wav",preload:"metadata",volume:.8,muted:!1,remainingDuration:!1,toggleDuration:!1,captureDuration:!0,playbackRate:1,defaultPlaybackRate:1,minPlaybackRate:.5,maxPlaybackRate:4,wmode:"opaque",backgroundColor:"#000000",cssSelectorAncestor:"#jp_container_1",cssSelector:{videoPlay:".jp-video-play",play:".jp-play",pause:".jp-pause",stop:".jp-stop",seekBar:".jp-seek-bar",playBar:".jp-play-bar",mute:".jp-mute",unmute:".jp-unmute",volumeBar:".jp-volume-bar",volumeBarValue:".jp-volume-bar-value",volumeMax:".jp-volume-max",playbackRateBar:".jp-playback-rate-bar",playbackRateBarValue:".jp-playback-rate-bar-value",currentTime:".jp-current-time",duration:".jp-duration",title:".jp-title",fullScreen:".jp-full-screen",restoreScreen:".jp-restore-screen",repeat:".jp-repeat",repeatOff:".jp-repeat-off",gui:".jp-gui",noSolution:".jp-no-solution"},stateClass:{playing:"jp-state-playing",seeking:"jp-state-seeking",muted:"jp-state-muted",looped:"jp-state-looped",fullScreen:"jp-state-full-screen",noVolume:"jp-state-no-volume"},useStateClassSkin:!1,autoBlur:!0,smoothPlayBar:!1,fullScreen:!1,fullWindow:!1,autohide:{restored:!1,full:!0,fadeIn:200,fadeOut:600,hold:1e3},loop:!1,repeat:function(b){b.jPlayer.options.loop?a(this).unbind(".jPlayerRepeat").bind(a.jPlayer.event.ended+".jPlayer.jPlayerRepeat",function(){a(this).jPlayer("play")}):a(this).unbind(".jPlayerRepeat")},nativeVideoControls:{},noFullWindow:{msie:/msie [0-6]\./,ipad:/ipad.*?os [0-4]\./,iphone:/iphone/,ipod:/ipod/,android_pad:/android [0-3]\.(?!.*?mobile)/,android_phone:/(?=.*android)(?!.*chrome)(?=.*mobile)/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/},noVolume:{ipad:/ipad/,iphone:/iphone/,ipod:/ipod/,android_pad:/android(?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/,playbook:/playbook/},timeFormat:{},keyEnabled:!1,audioFullScreen:!1,keyBindings:{play:{key:80,fn:function(a){a.status.paused?a.play():a.pause()}},fullScreen:{key:70,fn:function(a){(a.status.video||a.options.audioFullScreen)&&a._setOption("fullScreen",!a.options.fullScreen)}},muted:{key:77,fn:function(a){a._muted(!a.options.muted)}},volumeUp:{key:190,fn:function(a){a.volume(a.options.volume+.1)}},volumeDown:{key:188,fn:function(a){a.volume(a.options.volume-.1)}},loop:{key:76,fn:function(a){a._loop(!a.options.loop)}}},verticalVolume:!1,verticalPlaybackRate:!1,globalVolume:!1,idPrefix:"jp",noConflict:"jQuery",emulateHtml:!1,consoleAlerts:!0,errorAlerts:!1,warningAlerts:!1},optionsAudio:{size:{width:"0px",height:"0px",cssClass:""},sizeFull:{width:"0px",height:"0px",cssClass:""}},optionsVideo:{size:{width:"480px",height:"270px",cssClass:"jp-video-270p"},sizeFull:{width:"100%",height:"100%",cssClass:"jp-video-full"}},instances:{},status:{src:"",media:{},paused:!0,format:{},formatType:"",waitForPlay:!0,waitForLoad:!0,srcSet:!1,video:!1,seekPercent:0,currentPercentRelative:0,currentPercentAbsolute:0,currentTime:0,duration:0,remaining:0,videoWidth:0,videoHeight:0,readyState:0,networkState:0,playbackRate:1,ended:0},internal:{ready:!1},solution:{html:!0,aurora:!0,flash:!0},format:{mp3:{codec:"audio/mpeg",flashCanPlay:!0,media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!0,media:"audio"},m3u8a:{codec:'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',flashCanPlay:!1,media:"audio"},m3ua:{codec:"audio/mpegurl",flashCanPlay:!1,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis, opus"',flashCanPlay:!1,media:"audio"},flac:{codec:"audio/x-flac",flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},fla:{codec:"audio/x-flv",flashCanPlay:!0,media:"audio"},rtmpa:{codec:'audio/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!0,media:"video"},m3u8v:{codec:'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!1,media:"video"},m3uv:{codec:"audio/mpegurl",flashCanPlay:!1,media:"video"},ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"},flv:{codec:"video/x-flv",flashCanPlay:!0,media:"video"},rtmpv:{codec:'video/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"video"}},_init:function(){var c=this;if(this.element.empty(),this.status=a.extend({},this.status),this.internal=a.extend({},this.internal),this.options.timeFormat=a.extend({},a.jPlayer.timeFormat,this.options.timeFormat),this.internal.cmdsIgnored=a.jPlayer.platform.ipad||a.jPlayer.platform.iphone||a.jPlayer.platform.ipod,this.internal.domNode=this.element.get(0),this.options.keyEnabled&&!a.jPlayer.focus&&(a.jPlayer.focus=this),this.androidFix={setMedia:!1,play:!1,pause:!1,time:0/0},a.jPlayer.platform.android&&(this.options.preload="auto"!==this.options.preload?"metadata":"auto"),this.formats=[],this.solutions=[],this.require={},this.htmlElement={},this.html={},this.html.audio={},this.html.video={},this.aurora={},this.aurora.formats=[],this.aurora.properties=[],this.flash={},this.css={},this.css.cs={},this.css.jq={},this.ancestorJq=[],this.options.volume=this._limitValue(this.options.volume,0,1),a.each(this.options.supplied.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.format[e]){var f=!1;a.each(c.formats,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.formats.push(e)}}),a.each(this.options.solution.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.solution[e]){var f=!1;a.each(c.solutions,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.solutions.push(e)}}),a.each(this.options.auroraFormats.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.format[e]){var f=!1;a.each(c.aurora.formats,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.aurora.formats.push(e)}}),this.internal.instance="jp_"+this.count,this.instances[this.internal.instance]=this.element,this.element.attr("id")||this.element.attr("id",this.options.idPrefix+"_jplayer_"+this.count),this.internal.self=a.extend({},{id:this.element.attr("id"),jq:this.element}),this.internal.audio=a.extend({},{id:this.options.idPrefix+"_audio_"+this.count,jq:b}),this.internal.video=a.extend({},{id:this.options.idPrefix+"_video_"+this.count,jq:b}),this.internal.flash=a.extend({},{id:this.options.idPrefix+"_flash_"+this.count,jq:b,swf:this.options.swfPath+(".swf"!==this.options.swfPath.toLowerCase().slice(-4)?(this.options.swfPath&&"/"!==this.options.swfPath.slice(-1)?"/":"")+"jquery.jplayer.swf":"")}),this.internal.poster=a.extend({},{id:this.options.idPrefix+"_poster_"+this.count,jq:b}),a.each(a.jPlayer.event,function(a,d){c.options[a]!==b&&(c.element.bind(d+".jPlayer",c.options[a]),c.options[a]=b)}),this.require.audio=!1,this.require.video=!1,a.each(this.formats,function(a,b){c.require[c.format[b].media]=!0}),this.options=this.require.video?a.extend(!0,{},this.optionsVideo,this.options):a.extend(!0,{},this.optionsAudio,this.options),this._setSize(),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow),this.status.noVolume=this._uaBlocklist(this.options.noVolume),a.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled&&this._fullscreenAddEventListeners(),this._restrictNativeVideoControls(),this.htmlElement.poster=document.createElement("img"),this.htmlElement.poster.id=this.internal.poster.id,this.htmlElement.poster.onload=function(){(!c.status.video||c.status.waitForPlay)&&c.internal.poster.jq.show()},this.element.append(this.htmlElement.poster),this.internal.poster.jq=a("#"+this.internal.poster.id),this.internal.poster.jq.css({width:this.status.width,height:this.status.height}),this.internal.poster.jq.hide(),this.internal.poster.jq.bind("click.jPlayer",function(){c._trigger(a.jPlayer.event.click)}),this.html.audio.available=!1,this.require.audio&&(this.htmlElement.audio=document.createElement("audio"),this.htmlElement.audio.id=this.internal.audio.id,this.html.audio.available=!!this.htmlElement.audio.canPlayType&&this._testCanPlayType(this.htmlElement.audio)),this.html.video.available=!1,this.require.video&&(this.htmlElement.video=document.createElement("video"),this.htmlElement.video.id=this.internal.video.id,this.html.video.available=!!this.htmlElement.video.canPlayType&&this._testCanPlayType(this.htmlElement.video)),this.flash.available=this._checkForFlash(10.1),this.html.canPlay={},this.aurora.canPlay={},this.flash.canPlay={},a.each(this.formats,function(b,d){c.html.canPlay[d]=c.html[c.format[d].media].available&&""!==c.htmlElement[c.format[d].media].canPlayType(c.format[d].codec),c.aurora.canPlay[d]=a.inArray(d,c.aurora.formats)>-1,c.flash.canPlay[d]=c.format[d].flashCanPlay&&c.flash.available}),this.html.desired=!1,this.aurora.desired=!1,this.flash.desired=!1,a.each(this.solutions,function(b,d){if(0===b)c[d].desired=!0;else{var e=!1,f=!1;a.each(c.formats,function(a,b){c[c.solutions[0]].canPlay[b]&&("video"===c.format[b].media?f=!0:e=!0)}),c[d].desired=c.require.audio&&!e||c.require.video&&!f}}),this.html.support={},this.aurora.support={},this.flash.support={},a.each(this.formats,function(a,b){c.html.support[b]=c.html.canPlay[b]&&c.html.desired,c.aurora.support[b]=c.aurora.canPlay[b]&&c.aurora.desired,c.flash.support[b]=c.flash.canPlay[b]&&c.flash.desired}),this.html.used=!1,this.aurora.used=!1,this.flash.used=!1,a.each(this.solutions,function(b,d){a.each(c.formats,function(a,b){return c[d].support[b]?(c[d].used=!0,!1):void 0})}),this._resetActive(),this._resetGate(),this._cssSelectorAncestor(this.options.cssSelectorAncestor),this.html.used||this.aurora.used||this.flash.used?this.css.jq.noSolution.length&&this.css.jq.noSolution.hide():(this._error({type:a.jPlayer.error.NO_SOLUTION,context:"{solution:'"+this.options.solution+"', supplied:'"+this.options.supplied+"'}",message:a.jPlayer.errorMsg.NO_SOLUTION,hint:a.jPlayer.errorHint.NO_SOLUTION}),this.css.jq.noSolution.length&&this.css.jq.noSolution.show()),this.flash.used){var d,e="jQuery="+encodeURI(this.options.noConflict)+"&id="+encodeURI(this.internal.self.id)+"&vol="+this.options.volume+"&muted="+this.options.muted;if(a.jPlayer.browser.msie&&(Number(a.jPlayer.browser.version)<9||a.jPlayer.browser.documentMode<9)){var f='<object id="'+this.internal.flash.id+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>',g=['<param name="movie" value="'+this.internal.flash.swf+'" />','<param name="FlashVars" value="'+e+'" />','<param name="allowScriptAccess" value="always" />','<param name="bgcolor" value="'+this.options.backgroundColor+'" />','<param name="wmode" value="'+this.options.wmode+'" />'];d=document.createElement(f);for(var h=0;h<g.length;h++)d.appendChild(document.createElement(g[h]))}else{var i=function(a,b,c){var d=document.createElement("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)};d=document.createElement("object"),d.setAttribute("id",this.internal.flash.id),d.setAttribute("name",this.internal.flash.id),d.setAttribute("data",this.internal.flash.swf),d.setAttribute("type","application/x-shockwave-flash"),d.setAttribute("width","1"),d.setAttribute("height","1"),d.setAttribute("tabindex","-1"),i(d,"flashvars",e),i(d,"allowscriptaccess","always"),i(d,"bgcolor",this.options.backgroundColor),i(d,"wmode",this.options.wmode)}this.element.append(d),this.internal.flash.jq=a(d)}this.status.playbackRateEnabled=this.html.used&&!this.flash.used?this._testPlaybackRate("audio"):!1,this._updatePlaybackRate(),this.html.used&&(this.html.audio.available&&(this._addHtmlEventListeners(this.htmlElement.audio,this.html.audio),this.element.append(this.htmlElement.audio),this.internal.audio.jq=a("#"+this.internal.audio.id)),this.html.video.available&&(this._addHtmlEventListeners(this.htmlElement.video,this.html.video),this.element.append(this.htmlElement.video),this.internal.video.jq=a("#"+this.internal.video.id),this.internal.video.jq.css(this.status.nativeVideoControls?{width:this.status.width,height:this.status.height}:{width:"0px",height:"0px"}),this.internal.video.jq.bind("click.jPlayer",function(){c._trigger(a.jPlayer.event.click)}))),this.aurora.used,this.options.emulateHtml&&this._emulateHtmlBridge(),!this.html.used&&!this.aurora.used||this.flash.used||setTimeout(function(){c.internal.ready=!0,c.version.flash="n/a",c._trigger(a.jPlayer.event.repeat),c._trigger(a.jPlayer.event.ready)},100),this._updateNativeVideoControls(),this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),a.jPlayer.prototype.count++},destroy:function(){this.clearMedia(),this._removeUiClass(),this.css.jq.currentTime.length&&this.css.jq.currentTime.text(""),this.css.jq.duration.length&&this.css.jq.duration.text(""),a.each(this.css.jq,function(a,b){b.length&&b.unbind(".jPlayer")}),this.internal.poster.jq.unbind(".jPlayer"),this.internal.video.jq&&this.internal.video.jq.unbind(".jPlayer"),this._fullscreenRemoveEventListeners(),this===a.jPlayer.focus&&(a.jPlayer.focus=null),this.options.emulateHtml&&this._destroyHtmlBridge(),this.element.removeData("jPlayer"),this.element.unbind(".jPlayer"),this.element.empty(),delete this.instances[this.internal.instance]},destroyRemoved:function(){var b=this;a.each(this.instances,function(a,c){b.element!==c&&(c.data("jPlayer")||(c.jPlayer("destroy"),delete b.instances[a]))})},enable:function(){},disable:function(){},_testCanPlayType:function(a){try{return a.canPlayType(this.format.mp3.codec),!0}catch(b){return!1}},_testPlaybackRate:function(a){var b,c=.5;a="string"==typeof a?a:"audio",b=document.createElement(a);try{return"playbackRate"in b?(b.playbackRate=c,b.playbackRate===c):!1}catch(d){return!1}},_uaBlocklist:function(b){var c=navigator.userAgent.toLowerCase(),d=!1;return a.each(b,function(a,b){return b&&b.test(c)?(d=!0,!1):void 0}),d},_restrictNativeVideoControls:function(){this.require.audio&&this.status.nativeVideoControls&&(this.status.nativeVideoControls=!1,this.status.noFullWindow=!0)},_updateNativeVideoControls:function(){this.html.video.available&&this.html.used&&(this.htmlElement.video.controls=this.status.nativeVideoControls,this._updateAutohide(),this.status.nativeVideoControls&&this.require.video?(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})):this.status.waitForPlay&&this.status.video&&(this.internal.poster.jq.show(),this.internal.video.jq.css({width:"0px",height:"0px"})))},_addHtmlEventListeners:function(b,c){var d=this;b.preload=this.options.preload,b.muted=this.options.muted,b.volume=this.options.volume,this.status.playbackRateEnabled&&(b.defaultPlaybackRate=this.options.defaultPlaybackRate,b.playbackRate=this.options.playbackRate),b.addEventListener("progress",function(){c.gate&&(d.internal.cmdsIgnored&&this.readyState>0&&(d.internal.cmdsIgnored=!1),d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.progress))},!1),b.addEventListener("loadeddata",function(){c.gate&&(d.androidFix.setMedia=!1,d.androidFix.play&&(d.androidFix.play=!1,d.play(d.androidFix.time)),d.androidFix.pause&&(d.androidFix.pause=!1,d.pause(d.androidFix.time)),d._trigger(a.jPlayer.event.loadeddata))},!1),b.addEventListener("timeupdate",function(){c.gate&&(d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.timeupdate))},!1),b.addEventListener("durationchange",function(){c.gate&&(d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.durationchange))},!1),b.addEventListener("play",function(){c.gate&&(d._updateButtons(!0),d._html_checkWaitForPlay(),d._trigger(a.jPlayer.event.play))},!1),b.addEventListener("playing",function(){c.gate&&(d._updateButtons(!0),d._seeked(),d._trigger(a.jPlayer.event.playing))},!1),b.addEventListener("pause",function(){c.gate&&(d._updateButtons(!1),d._trigger(a.jPlayer.event.pause))},!1),b.addEventListener("waiting",function(){c.gate&&(d._seeking(),d._trigger(a.jPlayer.event.waiting))},!1),b.addEventListener("seeking",function(){c.gate&&(d._seeking(),d._trigger(a.jPlayer.event.seeking))},!1),b.addEventListener("seeked",function(){c.gate&&(d._seeked(),d._trigger(a.jPlayer.event.seeked))},!1),b.addEventListener("volumechange",function(){c.gate&&(d.options.volume=b.volume,d.options.muted=b.muted,d._updateMute(),d._updateVolume(),d._trigger(a.jPlayer.event.volumechange))},!1),b.addEventListener("ratechange",function(){c.gate&&(d.options.defaultPlaybackRate=b.defaultPlaybackRate,d.options.playbackRate=b.playbackRate,d._updatePlaybackRate(),d._trigger(a.jPlayer.event.ratechange))},!1),b.addEventListener("suspend",function(){c.gate&&(d._seeked(),d._trigger(a.jPlayer.event.suspend))},!1),b.addEventListener("ended",function(){c.gate&&(a.jPlayer.browser.webkit||(d.htmlElement.media.currentTime=0),d.htmlElement.media.pause(),d._updateButtons(!1),d._getHtmlStatus(b,!0),d._updateInterface(),d._trigger(a.jPlayer.event.ended))},!1),b.addEventListener("error",function(){c.gate&&(d._updateButtons(!1),d._seeked(),d.status.srcSet&&(clearTimeout(d.internal.htmlDlyCmdId),d.status.waitForLoad=!0,d.status.waitForPlay=!0,d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"}),d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show(),d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show(),d._error({type:a.jPlayer.error.URL,context:d.status.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL})))},!1),a.each(a.jPlayer.htmlEvent,function(e,f){b.addEventListener(this,function(){c.gate&&d._trigger(a.jPlayer.event[f])},!1)})},_addAuroraEventListeners:function(b,c){var d=this;b.volume=100*this.options.volume,b.on("progress",function(){c.gate&&(d.internal.cmdsIgnored&&this.readyState>0&&(d.internal.cmdsIgnored=!1),d._getAuroraStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.progress),b.duration>0&&d._trigger(a.jPlayer.event.timeupdate))},!1),b.on("ready",function(){c.gate&&d._trigger(a.jPlayer.event.loadeddata)},!1),b.on("duration",function(){c.gate&&(d._getAuroraStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.durationchange))},!1),b.on("end",function(){c.gate&&(d._updateButtons(!1),d._getAuroraStatus(b,!0),d._updateInterface(),d._trigger(a.jPlayer.event.ended))},!1),b.on("error",function(){c.gate&&(d._updateButtons(!1),d._seeked(),d.status.srcSet&&(d.status.waitForLoad=!0,d.status.waitForPlay=!0,d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"}),d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show(),d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show(),d._error({type:a.jPlayer.error.URL,context:d.status.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL})))},!1)},_getHtmlStatus:function(a,b){var c=0,d=0,e=0,f=0;isFinite(a.duration)&&(this.status.duration=a.duration),c=a.currentTime,d=this.status.duration>0?100*c/this.status.duration:0,"object"==typeof a.seekable&&a.seekable.length>0?(e=this.status.duration>0?100*a.seekable.end(a.seekable.length-1)/this.status.duration:100,f=this.status.duration>0?100*a.currentTime/a.seekable.end(a.seekable.length-1):0):(e=100,f=d),b&&(c=0,f=0,d=0),this.status.seekPercent=e,this.status.currentPercentRelative=f,this.status.currentPercentAbsolute=d,this.status.currentTime=c,this.status.remaining=this.status.duration-this.status.currentTime,this.status.videoWidth=a.videoWidth,this.status.videoHeight=a.videoHeight,this.status.readyState=a.readyState,this.status.networkState=a.networkState,this.status.playbackRate=a.playbackRate,this.status.ended=a.ended},_getAuroraStatus:function(a,b){var c=0,d=0,e=0,f=0;this.status.duration=a.duration/1e3,c=a.currentTime/1e3,d=this.status.duration>0?100*c/this.status.duration:0,a.buffered>0?(e=this.status.duration>0?a.buffered*this.status.duration/this.status.duration:100,f=this.status.duration>0?c/(a.buffered*this.status.duration):0):(e=100,f=d),b&&(c=0,f=0,d=0),this.status.seekPercent=e,this.status.currentPercentRelative=f,this.status.currentPercentAbsolute=d,this.status.currentTime=c,this.status.remaining=this.status.duration-this.status.currentTime,this.status.readyState=4,this.status.networkState=0,this.status.playbackRate=1,this.status.ended=!1},_resetStatus:function(){this.status=a.extend({},this.status,a.jPlayer.prototype.status)},_trigger:function(b,c,d){var e=a.Event(b);e.jPlayer={},e.jPlayer.version=a.extend({},this.version),e.jPlayer.options=a.extend(!0,{},this.options),e.jPlayer.status=a.extend(!0,{},this.status),e.jPlayer.html=a.extend(!0,{},this.html),e.jPlayer.aurora=a.extend(!0,{},this.aurora),e.jPlayer.flash=a.extend(!0,{},this.flash),c&&(e.jPlayer.error=a.extend({},c)),d&&(e.jPlayer.warning=a.extend({},d)),this.element.trigger(e)},jPlayerFlashEvent:function(b,c){if(b===a.jPlayer.event.ready)if(this.internal.ready){if(this.flash.gate){if(this.status.srcSet){var d=this.status.currentTime,e=this.status.paused;this.setMedia(this.status.media),this.volumeWorker(this.options.volume),d>0&&(e?this.pause(d):this.play(d))}this._trigger(a.jPlayer.event.flashreset)}}else this.internal.ready=!0,this.internal.flash.jq.css({width:"0px",height:"0px"}),this.version.flash=c.version,this.version.needFlash!==this.version.flash&&this._error({type:a.jPlayer.error.VERSION,context:this.version.flash,message:a.jPlayer.errorMsg.VERSION+this.version.flash,hint:a.jPlayer.errorHint.VERSION}),this._trigger(a.jPlayer.event.repeat),this._trigger(b);if(this.flash.gate)switch(b){case a.jPlayer.event.progress:this._getFlashStatus(c),this._updateInterface(),this._trigger(b);break;case a.jPlayer.event.timeupdate:this._getFlashStatus(c),this._updateInterface(),this._trigger(b);break;case a.jPlayer.event.play:this._seeked(),this._updateButtons(!0),this._trigger(b);break;case a.jPlayer.event.pause:this._updateButtons(!1),this._trigger(b);break;case a.jPlayer.event.ended:this._updateButtons(!1),this._trigger(b);break;case a.jPlayer.event.click:this._trigger(b);break;case a.jPlayer.event.error:this.status.waitForLoad=!0,this.status.waitForPlay=!0,this.status.video&&this.internal.flash.jq.css({width:"0px",height:"0px"}),this._validString(this.status.media.poster)&&this.internal.poster.jq.show(),this.css.jq.videoPlay.length&&this.status.video&&this.css.jq.videoPlay.show(),this.status.video?this._flash_setVideo(this.status.media):this._flash_setAudio(this.status.media),this._updateButtons(!1),this._error({type:a.jPlayer.error.URL,context:c.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL});break;case a.jPlayer.event.seeking:this._seeking(),this._trigger(b);break;case a.jPlayer.event.seeked:this._seeked(),this._trigger(b);break;case a.jPlayer.event.ready:break;default:this._trigger(b)}return!1},_getFlashStatus:function(a){this.status.seekPercent=a.seekPercent,this.status.currentPercentRelative=a.currentPercentRelative,this.status.currentPercentAbsolute=a.currentPercentAbsolute,this.status.currentTime=a.currentTime,this.status.duration=a.duration,this.status.remaining=a.duration-a.currentTime,this.status.videoWidth=a.videoWidth,this.status.videoHeight=a.videoHeight,this.status.readyState=4,this.status.networkState=0,this.status.playbackRate=1,this.status.ended=!1},_updateButtons:function(a){a===b?a=!this.status.paused:this.status.paused=!a,a?this.addStateClass("playing"):this.removeStateClass("playing"),!this.status.noFullWindow&&this.options.fullWindow?this.addStateClass("fullScreen"):this.removeStateClass("fullScreen"),this.options.loop?this.addStateClass("looped"):this.removeStateClass("looped"),this.css.jq.play.length&&this.css.jq.pause.length&&(a?(this.css.jq.play.hide(),this.css.jq.pause.show()):(this.css.jq.play.show(),this.css.jq.pause.hide())),this.css.jq.restoreScreen.length&&this.css.jq.fullScreen.length&&(this.status.noFullWindow?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.hide()):this.options.fullWindow?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.show()):(this.css.jq.fullScreen.show(),this.css.jq.restoreScreen.hide())),this.css.jq.repeat.length&&this.css.jq.repeatOff.length&&(this.options.loop?(this.css.jq.repeat.hide(),this.css.jq.repeatOff.show()):(this.css.jq.repeat.show(),this.css.jq.repeatOff.hide()))},_updateInterface:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.width(this.status.seekPercent+"%"),this.css.jq.playBar.length&&(this.options.smoothPlayBar?this.css.jq.playBar.stop().animate({width:this.status.currentPercentAbsolute+"%"},250,"linear"):this.css.jq.playBar.width(this.status.currentPercentRelative+"%"));var a="";this.css.jq.currentTime.length&&(a=this._convertTime(this.status.currentTime),a!==this.css.jq.currentTime.text()&&this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));var b="",c=this.status.duration,d=this.status.remaining;this.css.jq.duration.length&&("string"==typeof this.status.media.duration?b=this.status.media.duration:("number"==typeof this.status.media.duration&&(c=this.status.media.duration,d=c-this.status.currentTime),b=this.options.remainingDuration?(d>0?"-":"")+this._convertTime(d):this._convertTime(c)),b!==this.css.jq.duration.text()&&this.css.jq.duration.text(b))},_convertTime:c.prototype.time,_seeking:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.addClass("jp-seeking-bg"),this.addStateClass("seeking")},_seeked:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.removeClass("jp-seeking-bg"),this.removeStateClass("seeking")},_resetGate:function(){this.html.audio.gate=!1,this.html.video.gate=!1,this.aurora.gate=!1,this.flash.gate=!1},_resetActive:function(){this.html.active=!1,this.aurora.active=!1,this.flash.active=!1},_escapeHtml:function(a){return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")},_qualifyURL:function(a){var b=document.createElement("div");
return b.innerHTML='<a href="'+this._escapeHtml(a)+'">x</a>',b.firstChild.href},_absoluteMediaUrls:function(b){var c=this;return a.each(b,function(a,d){d&&c.format[a]&&"data:"!==d.substr(0,5)&&(b[a]=c._qualifyURL(d))}),b},addStateClass:function(a){this.ancestorJq.length&&this.ancestorJq.addClass(this.options.stateClass[a])},removeStateClass:function(a){this.ancestorJq.length&&this.ancestorJq.removeClass(this.options.stateClass[a])},setMedia:function(b){var c=this,d=!1,e=this.status.media.poster!==b.poster;this._resetMedia(),this._resetGate(),this._resetActive(),this.androidFix.setMedia=!1,this.androidFix.play=!1,this.androidFix.pause=!1,b=this._absoluteMediaUrls(b),a.each(this.formats,function(e,f){var g="video"===c.format[f].media;return a.each(c.solutions,function(e,h){if(c[h].support[f]&&c._validString(b[f])){var i="html"===h,j="aurora"===h;return g?(i?(c.html.video.gate=!0,c._html_setVideo(b),c.html.active=!0):(c.flash.gate=!0,c._flash_setVideo(b),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.show(),c.status.video=!0):(i?(c.html.audio.gate=!0,c._html_setAudio(b),c.html.active=!0,a.jPlayer.platform.android&&(c.androidFix.setMedia=!0)):j?(c.aurora.gate=!0,c._aurora_setAudio(b),c.aurora.active=!0):(c.flash.gate=!0,c._flash_setAudio(b),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.hide(),c.status.video=!1),d=!0,!1}}),d?!1:void 0}),d?(this.status.nativeVideoControls&&this.html.video.gate||this._validString(b.poster)&&(e?this.htmlElement.poster.src=b.poster:this.internal.poster.jq.show()),"string"==typeof b.title&&(this.css.jq.title.length&&this.css.jq.title.html(b.title),this.htmlElement.audio&&this.htmlElement.audio.setAttribute("title",b.title),this.htmlElement.video&&this.htmlElement.video.setAttribute("title",b.title)),this.status.srcSet=!0,this.status.media=a.extend({},b),this._updateButtons(!1),this._updateInterface(),this._trigger(a.jPlayer.event.setmedia)):this._error({type:a.jPlayer.error.NO_SUPPORT,context:"{supplied:'"+this.options.supplied+"'}",message:a.jPlayer.errorMsg.NO_SUPPORT,hint:a.jPlayer.errorHint.NO_SUPPORT})},_resetMedia:function(){this._resetStatus(),this._updateButtons(!1),this._updateInterface(),this._seeked(),this.internal.poster.jq.hide(),clearTimeout(this.internal.htmlDlyCmdId),this.html.active?this._html_resetMedia():this.aurora.active?this._aurora_resetMedia():this.flash.active&&this._flash_resetMedia()},clearMedia:function(){this._resetMedia(),this.html.active?this._html_clearMedia():this.aurora.active?this._aurora_clearMedia():this.flash.active&&this._flash_clearMedia(),this._resetGate(),this._resetActive()},load:function(){this.status.srcSet?this.html.active?this._html_load():this.aurora.active?this._aurora_load():this.flash.active&&this._flash_load():this._urlNotSetError("load")},focus:function(){this.options.keyEnabled&&(a.jPlayer.focus=this)},play:function(a){var b="object"==typeof a;b&&this.options.useStateClassSkin&&!this.status.paused?this.pause(a):(a="number"==typeof a?a:0/0,this.status.srcSet?(this.focus(),this.html.active?this._html_play(a):this.aurora.active?this._aurora_play(a):this.flash.active&&this._flash_play(a)):this._urlNotSetError("play"))},videoPlay:function(){this.play()},pause:function(a){a="number"==typeof a?a:0/0,this.status.srcSet?this.html.active?this._html_pause(a):this.aurora.active?this._aurora_pause(a):this.flash.active&&this._flash_pause(a):this._urlNotSetError("pause")},tellOthers:function(b,c){var d=this,e="function"==typeof c,f=Array.prototype.slice.call(arguments);"string"==typeof b&&(e&&f.splice(1,1),a.jPlayer.prototype.destroyRemoved(),a.each(this.instances,function(){d.element!==this&&(!e||c.call(this.data("jPlayer"),d))&&this.jPlayer.apply(this,f)}))},pauseOthers:function(a){this.tellOthers("pause",function(){return this.status.srcSet},a)},stop:function(){this.status.srcSet?this.html.active?this._html_pause(0):this.aurora.active?this._aurora_pause(0):this.flash.active&&this._flash_pause(0):this._urlNotSetError("stop")},playHead:function(a){a=this._limitValue(a,0,100),this.status.srcSet?this.html.active?this._html_playHead(a):this.aurora.active?this._aurora_playHead(a):this.flash.active&&this._flash_playHead(a):this._urlNotSetError("playHead")},_muted:function(a){this.mutedWorker(a),this.options.globalVolume&&this.tellOthers("mutedWorker",function(){return this.options.globalVolume},a)},mutedWorker:function(b){this.options.muted=b,this.html.used&&this._html_setProperty("muted",b),this.aurora.used&&this._aurora_mute(b),this.flash.used&&this._flash_mute(b),this.html.video.gate||this.html.audio.gate||(this._updateMute(b),this._updateVolume(this.options.volume),this._trigger(a.jPlayer.event.volumechange))},mute:function(a){var c="object"==typeof a;c&&this.options.useStateClassSkin&&this.options.muted?this._muted(!1):(a=a===b?!0:!!a,this._muted(a))},unmute:function(a){a=a===b?!0:!!a,this._muted(!a)},_updateMute:function(a){a===b&&(a=this.options.muted),a?this.addStateClass("muted"):this.removeStateClass("muted"),this.css.jq.mute.length&&this.css.jq.unmute.length&&(this.status.noVolume?(this.css.jq.mute.hide(),this.css.jq.unmute.hide()):a?(this.css.jq.mute.hide(),this.css.jq.unmute.show()):(this.css.jq.mute.show(),this.css.jq.unmute.hide()))},volume:function(a){this.volumeWorker(a),this.options.globalVolume&&this.tellOthers("volumeWorker",function(){return this.options.globalVolume},a)},volumeWorker:function(b){b=this._limitValue(b,0,1),this.options.volume=b,this.html.used&&this._html_setProperty("volume",b),this.aurora.used&&this._aurora_volume(b),this.flash.used&&this._flash_volume(b),this.html.video.gate||this.html.audio.gate||(this._updateVolume(b),this._trigger(a.jPlayer.event.volumechange))},volumeBar:function(b){if(this.css.jq.volumeBar.length){var c=a(b.currentTarget),d=c.offset(),e=b.pageX-d.left,f=c.width(),g=c.height()-b.pageY+d.top,h=c.height();this.volume(this.options.verticalVolume?g/h:e/f)}this.options.muted&&this._muted(!1)},_updateVolume:function(a){a===b&&(a=this.options.volume),a=this.options.muted?0:a,this.status.noVolume?(this.addStateClass("noVolume"),this.css.jq.volumeBar.length&&this.css.jq.volumeBar.hide(),this.css.jq.volumeBarValue.length&&this.css.jq.volumeBarValue.hide(),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.hide()):(this.removeStateClass("noVolume"),this.css.jq.volumeBar.length&&this.css.jq.volumeBar.show(),this.css.jq.volumeBarValue.length&&(this.css.jq.volumeBarValue.show(),this.css.jq.volumeBarValue[this.options.verticalVolume?"height":"width"](100*a+"%")),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.show())},volumeMax:function(){this.volume(1),this.options.muted&&this._muted(!1)},_cssSelectorAncestor:function(b){var c=this;this.options.cssSelectorAncestor=b,this._removeUiClass(),this.ancestorJq=b?a(b):[],b&&1!==this.ancestorJq.length&&this._warning({type:a.jPlayer.warning.CSS_SELECTOR_COUNT,context:b,message:a.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.ancestorJq.length+" found for cssSelectorAncestor.",hint:a.jPlayer.warningHint.CSS_SELECTOR_COUNT}),this._addUiClass(),a.each(this.options.cssSelector,function(a,b){c._cssSelector(a,b)}),this._updateInterface(),this._updateButtons(),this._updateAutohide(),this._updateVolume(),this._updateMute()},_cssSelector:function(b,c){var d=this;if("string"==typeof c)if(a.jPlayer.prototype.options.cssSelector[b]){if(this.css.jq[b]&&this.css.jq[b].length&&this.css.jq[b].unbind(".jPlayer"),this.options.cssSelector[b]=c,this.css.cs[b]=this.options.cssSelectorAncestor+" "+c,this.css.jq[b]=c?a(this.css.cs[b]):[],this.css.jq[b].length&&this[b]){var e=function(c){c.preventDefault(),d[b](c),d.options.autoBlur?a(this).blur():a(this).focus()};this.css.jq[b].bind("click.jPlayer",e)}c&&1!==this.css.jq[b].length&&this._warning({type:a.jPlayer.warning.CSS_SELECTOR_COUNT,context:this.css.cs[b],message:a.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.css.jq[b].length+" found for "+b+" method.",hint:a.jPlayer.warningHint.CSS_SELECTOR_COUNT})}else this._warning({type:a.jPlayer.warning.CSS_SELECTOR_METHOD,context:b,message:a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,hint:a.jPlayer.warningHint.CSS_SELECTOR_METHOD});else this._warning({type:a.jPlayer.warning.CSS_SELECTOR_STRING,context:c,message:a.jPlayer.warningMsg.CSS_SELECTOR_STRING,hint:a.jPlayer.warningHint.CSS_SELECTOR_STRING})},duration:function(a){this.options.toggleDuration&&(this.options.captureDuration&&a.stopPropagation(),this._setOption("remainingDuration",!this.options.remainingDuration))},seekBar:function(b){if(this.css.jq.seekBar.length){var c=a(b.currentTarget),d=c.offset(),e=b.pageX-d.left,f=c.width(),g=100*e/f;this.playHead(g)}},playbackRate:function(a){this._setOption("playbackRate",a)},playbackRateBar:function(b){if(this.css.jq.playbackRateBar.length){var c,d,e=a(b.currentTarget),f=e.offset(),g=b.pageX-f.left,h=e.width(),i=e.height()-b.pageY+f.top,j=e.height();c=this.options.verticalPlaybackRate?i/j:g/h,d=c*(this.options.maxPlaybackRate-this.options.minPlaybackRate)+this.options.minPlaybackRate,this.playbackRate(d)}},_updatePlaybackRate:function(){var a=this.options.playbackRate,b=(a-this.options.minPlaybackRate)/(this.options.maxPlaybackRate-this.options.minPlaybackRate);this.status.playbackRateEnabled?(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.show(),this.css.jq.playbackRateBarValue.length&&(this.css.jq.playbackRateBarValue.show(),this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate?"height":"width"](100*b+"%"))):(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.hide(),this.css.jq.playbackRateBarValue.length&&this.css.jq.playbackRateBarValue.hide())},repeat:function(a){var b="object"==typeof a;this._loop(b&&this.options.useStateClassSkin&&this.options.loop?!1:!0)},repeatOff:function(){this._loop(!1)},_loop:function(b){this.options.loop!==b&&(this.options.loop=b,this._updateButtons(),this._trigger(a.jPlayer.event.repeat))},option:function(c,d){var e=c;if(0===arguments.length)return a.extend(!0,{},this.options);if("string"==typeof c){var f=c.split(".");if(d===b){for(var g=a.extend(!0,{},this.options),h=0;h<f.length;h++){if(g[f[h]]===b)return this._warning({type:a.jPlayer.warning.OPTION_KEY,context:c,message:a.jPlayer.warningMsg.OPTION_KEY,hint:a.jPlayer.warningHint.OPTION_KEY}),b;g=g[f[h]]}return g}e={};for(var i=e,j=0;j<f.length;j++)j<f.length-1?(i[f[j]]={},i=i[f[j]]):i[f[j]]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(b,c){var d=this;switch(b){case"volume":this.volume(c);break;case"muted":this._muted(c);break;case"globalVolume":this.options[b]=c;break;case"cssSelectorAncestor":this._cssSelectorAncestor(c);break;case"cssSelector":a.each(c,function(a,b){d._cssSelector(a,b)});break;case"playbackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate),this.html.used&&this._html_setProperty("playbackRate",c),this._updatePlaybackRate();break;case"defaultPlaybackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate),this.html.used&&this._html_setProperty("defaultPlaybackRate",c),this._updatePlaybackRate();break;case"minPlaybackRate":this.options[b]=c=this._limitValue(c,.1,this.options.maxPlaybackRate-.1),this._updatePlaybackRate();break;case"maxPlaybackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate+.1,16),this._updatePlaybackRate();break;case"fullScreen":if(this.options[b]!==c){var e=a.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;(!e||e&&!this.status.waitForPlay)&&(e||(this.options[b]=c),c?this._requestFullscreen():this._exitFullscreen(),e||this._setOption("fullWindow",c))}break;case"fullWindow":this.options[b]!==c&&(this._removeUiClass(),this.options[b]=c,this._refreshSize());break;case"size":this.options.fullWindow||this.options[b].cssClass===c.cssClass||this._removeUiClass(),this.options[b]=a.extend({},this.options[b],c),this._refreshSize();break;case"sizeFull":this.options.fullWindow&&this.options[b].cssClass!==c.cssClass&&this._removeUiClass(),this.options[b]=a.extend({},this.options[b],c),this._refreshSize();break;case"autohide":this.options[b]=a.extend({},this.options[b],c),this._updateAutohide();break;case"loop":this._loop(c);break;case"remainingDuration":this.options[b]=c,this._updateInterface();break;case"toggleDuration":this.options[b]=c;break;case"nativeVideoControls":this.options[b]=a.extend({},this.options[b],c),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this._restrictNativeVideoControls(),this._updateNativeVideoControls();break;case"noFullWindow":this.options[b]=a.extend({},this.options[b],c),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow),this._restrictNativeVideoControls(),this._updateButtons();break;case"noVolume":this.options[b]=a.extend({},this.options[b],c),this.status.noVolume=this._uaBlocklist(this.options.noVolume),this._updateVolume(),this._updateMute();break;case"emulateHtml":this.options[b]!==c&&(this.options[b]=c,c?this._emulateHtmlBridge():this._destroyHtmlBridge());break;case"timeFormat":this.options[b]=a.extend({},this.options[b],c);break;case"keyEnabled":this.options[b]=c,c||this!==a.jPlayer.focus||(a.jPlayer.focus=null);break;case"keyBindings":this.options[b]=a.extend(!0,{},this.options[b],c);break;case"audioFullScreen":this.options[b]=c;break;case"autoBlur":this.options[b]=c}return this},_refreshSize:function(){this._setSize(),this._addUiClass(),this._updateSize(),this._updateButtons(),this._updateAutohide(),this._trigger(a.jPlayer.event.resize)},_setSize:function(){this.options.fullWindow?(this.status.width=this.options.sizeFull.width,this.status.height=this.options.sizeFull.height,this.status.cssClass=this.options.sizeFull.cssClass):(this.status.width=this.options.size.width,this.status.height=this.options.size.height,this.status.cssClass=this.options.size.cssClass),this.element.css({width:this.status.width,height:this.status.height})},_addUiClass:function(){this.ancestorJq.length&&this.ancestorJq.addClass(this.status.cssClass)},_removeUiClass:function(){this.ancestorJq.length&&this.ancestorJq.removeClass(this.status.cssClass)},_updateSize:function(){this.internal.poster.jq.css({width:this.status.width,height:this.status.height}),!this.status.waitForPlay&&this.html.active&&this.status.video||this.html.video.available&&this.html.used&&this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):!this.status.waitForPlay&&this.flash.active&&this.status.video&&this.internal.flash.jq.css({width:this.status.width,height:this.status.height})},_updateAutohide:function(){var a=this,b="mousemove.jPlayer",c=".jPlayerAutohide",d=b+c,e=function(b){var c,d,e=!1;"undefined"!=typeof a.internal.mouse?(c=a.internal.mouse.x-b.pageX,d=a.internal.mouse.y-b.pageY,e=Math.floor(c)>0||Math.floor(d)>0):e=!0,a.internal.mouse={x:b.pageX,y:b.pageY},e&&a.css.jq.gui.fadeIn(a.options.autohide.fadeIn,function(){clearTimeout(a.internal.autohideId),a.internal.autohideId=setTimeout(function(){a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)},a.options.autohide.hold)})};this.css.jq.gui.length&&(this.css.jq.gui.stop(!0,!0),clearTimeout(this.internal.autohideId),delete this.internal.mouse,this.element.unbind(c),this.css.jq.gui.unbind(c),this.status.nativeVideoControls?this.css.jq.gui.hide():this.options.fullWindow&&this.options.autohide.full||!this.options.fullWindow&&this.options.autohide.restored?(this.element.bind(d,e),this.css.jq.gui.bind(d,e),this.css.jq.gui.hide()):this.css.jq.gui.show())},fullScreen:function(a){var b="object"==typeof a;b&&this.options.useStateClassSkin&&this.options.fullScreen?this._setOption("fullScreen",!1):this._setOption("fullScreen",!0)},restoreScreen:function(){this._setOption("fullScreen",!1)},_fullscreenAddEventListeners:function(){var b=this,c=a.jPlayer.nativeFeatures.fullscreen;c.api.fullscreenEnabled&&c.event.fullscreenchange&&("function"!=typeof this.internal.fullscreenchangeHandler&&(this.internal.fullscreenchangeHandler=function(){b._fullscreenchange()}),document.addEventListener(c.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1))},_fullscreenRemoveEventListeners:function(){var b=a.jPlayer.nativeFeatures.fullscreen;this.internal.fullscreenchangeHandler&&document.removeEventListener(b.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1)},_fullscreenchange:function(){this.options.fullScreen&&!a.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement()&&this._setOption("fullScreen",!1)},_requestFullscreen:function(){var b=this.ancestorJq.length?this.ancestorJq[0]:this.element[0],c=a.jPlayer.nativeFeatures.fullscreen;c.used.webkitVideo&&(b=this.htmlElement.video),c.api.fullscreenEnabled&&c.api.requestFullscreen(b)},_exitFullscreen:function(){var b,c=a.jPlayer.nativeFeatures.fullscreen;c.used.webkitVideo&&(b=this.htmlElement.video),c.api.fullscreenEnabled&&c.api.exitFullscreen(b)},_html_initMedia:function(b){var c=a(this.htmlElement.media).empty();a.each(b.track||[],function(a,b){var d=document.createElement("track");d.setAttribute("kind",b.kind?b.kind:""),d.setAttribute("src",b.src?b.src:""),d.setAttribute("srclang",b.srclang?b.srclang:""),d.setAttribute("label",b.label?b.label:""),b.def&&d.setAttribute("default",b.def),c.append(d)}),this.htmlElement.media.src=this.status.src,"none"!==this.options.preload&&this._html_load(),this._trigger(a.jPlayer.event.timeupdate)},_html_setFormat:function(b){var c=this;a.each(this.formats,function(a,d){return c.html.support[d]&&b[d]?(c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1):void 0})},_html_setAudio:function(a){this._html_setFormat(a),this.htmlElement.media=this.htmlElement.audio,this._html_initMedia(a)},_html_setVideo:function(a){this._html_setFormat(a),this.status.nativeVideoControls&&(this.htmlElement.video.poster=this._validString(a.poster)?a.poster:""),this.htmlElement.media=this.htmlElement.video,this._html_initMedia(a)},_html_resetMedia:function(){this.htmlElement.media&&(this.htmlElement.media.id!==this.internal.video.id||this.status.nativeVideoControls||this.internal.video.jq.css({width:"0px",height:"0px"}),this.htmlElement.media.pause())},_html_clearMedia:function(){this.htmlElement.media&&(this.htmlElement.media.src="about:blank",this.htmlElement.media.load())},_html_load:function(){this.status.waitForLoad&&(this.status.waitForLoad=!1,this.htmlElement.media.load()),clearTimeout(this.internal.htmlDlyCmdId)},_html_play:function(a){var b=this,c=this.htmlElement.media;if(this.androidFix.pause=!1,this._html_load(),this.androidFix.setMedia)this.androidFix.play=!0,this.androidFix.time=a;else if(isNaN(a))c.play();else{this.internal.cmdsIgnored&&c.play();try{if(c.seekable&&!("object"==typeof c.seekable&&c.seekable.length>0))throw 1;c.currentTime=a,c.play()}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.play(a)},250))}}this._html_checkWaitForPlay()},_html_pause:function(a){var b=this,c=this.htmlElement.media;if(this.androidFix.play=!1,a>0?this._html_load():clearTimeout(this.internal.htmlDlyCmdId),c.pause(),this.androidFix.setMedia)this.androidFix.pause=!0,this.androidFix.time=a;else if(!isNaN(a))try{if(c.seekable&&!("object"==typeof c.seekable&&c.seekable.length>0))throw 1;c.currentTime=a}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.pause(a)},250))}a>0&&this._html_checkWaitForPlay()},_html_playHead:function(a){var b=this,c=this.htmlElement.media;this._html_load();try{if("object"==typeof c.seekable&&c.seekable.length>0)c.currentTime=a*c.seekable.end(c.seekable.length-1)/100;else{if(!(c.duration>0)||isNaN(c.duration))throw"e";c.currentTime=a*c.duration/100}}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.playHead(a)},250))}this.status.waitForLoad||this._html_checkWaitForPlay()},_html_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})))},_html_setProperty:function(a,b){this.html.audio.available&&(this.htmlElement.audio[a]=b),this.html.video.available&&(this.htmlElement.video[a]=b)},_aurora_setAudio:function(b){var c=this;a.each(this.formats,function(a,d){return c.aurora.support[d]&&b[d]?(c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1):void 0}),this.aurora.player=new AV.Player.fromURL(this.status.src),this._addAuroraEventListeners(this.aurora.player,this.aurora),"auto"===this.options.preload&&(this._aurora_load(),this.status.waitForLoad=!1)},_aurora_resetMedia:function(){this.aurora.player&&this.aurora.player.stop()},_aurora_clearMedia:function(){},_aurora_load:function(){this.status.waitForLoad&&(this.status.waitForLoad=!1,this.aurora.player.preload())},_aurora_play:function(b){this.status.waitForLoad||isNaN(b)||this.aurora.player.seek(b),this.aurora.player.playing||this.aurora.player.play(),this.status.waitForLoad=!1,this._aurora_checkWaitForPlay(),this._updateButtons(!0),this._trigger(a.jPlayer.event.play)},_aurora_pause:function(b){isNaN(b)||this.aurora.player.seek(1e3*b),this.aurora.player.pause(),b>0&&this._aurora_checkWaitForPlay(),this._updateButtons(!1),this._trigger(a.jPlayer.event.pause)},_aurora_playHead:function(a){this.aurora.player.duration>0&&this.aurora.player.seek(a*this.aurora.player.duration/100),this.status.waitForLoad||this._aurora_checkWaitForPlay()},_aurora_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1)},_aurora_volume:function(a){this.aurora.player.volume=100*a},_aurora_mute:function(a){a?(this.aurora.properties.lastvolume=this.aurora.player.volume,this.aurora.player.volume=0):this.aurora.player.volume=this.aurora.properties.lastvolume,this.aurora.properties.muted=a},_flash_setAudio:function(b){var c=this;try{a.each(this.formats,function(a,d){if(c.flash.support[d]&&b[d]){switch(d){case"m4a":case"fla":c._getMovie().fl_setAudio_m4a(b[d]);break;case"mp3":c._getMovie().fl_setAudio_mp3(b[d]);break;case"rtmpa":c._getMovie().fl_setAudio_rtmp(b[d])}return c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_setVideo:function(b){var c=this;try{a.each(this.formats,function(a,d){if(c.flash.support[d]&&b[d]){switch(d){case"m4v":case"flv":c._getMovie().fl_setVideo_m4v(b[d]);break;case"rtmpv":c._getMovie().fl_setVideo_rtmp(b[d])}return c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_resetMedia:function(){this.internal.flash.jq.css({width:"0px",height:"0px"}),this._flash_pause(0/0)},_flash_clearMedia:function(){try{this._getMovie().fl_clearMedia()}catch(a){this._flashError(a)}},_flash_load:function(){try{this._getMovie().fl_load()}catch(a){this._flashError(a)}this.status.waitForLoad=!1},_flash_play:function(a){try{this._getMovie().fl_play(a)}catch(b){this._flashError(b)}this.status.waitForLoad=!1,this._flash_checkWaitForPlay()},_flash_pause:function(a){try{this._getMovie().fl_pause(a)}catch(b){this._flashError(b)}a>0&&(this.status.waitForLoad=!1,this._flash_checkWaitForPlay())},_flash_playHead:function(a){try{this._getMovie().fl_play_head(a)}catch(b){this._flashError(b)}this.status.waitForLoad||this._flash_checkWaitForPlay()},_flash_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.flash.jq.css({width:this.status.width,height:this.status.height})))},_flash_volume:function(a){try{this._getMovie().fl_volume(a)}catch(b){this._flashError(b)}},_flash_mute:function(a){try{this._getMovie().fl_mute(a)}catch(b){this._flashError(b)}},_getMovie:function(){return document[this.internal.flash.id]},_getFlashPluginVersion:function(){var a,b=0;if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")){var c=a.GetVariable("$version");c&&(c=c.split(" ")[1].split(","),b=parseInt(c[0],10)+"."+parseInt(c[1],10))}}catch(d){}else navigator.plugins&&navigator.mimeTypes.length>0&&(a=navigator.plugins["Shockwave Flash"],a&&(b=navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/,"$1")));return 1*b},_checkForFlash:function(a){var b=!1;return this._getFlashPluginVersion()>=a&&(b=!0),b},_validString:function(a){return a&&"string"==typeof a},_limitValue:function(a,b,c){return b>a?b:a>c?c:a},_urlNotSetError:function(b){this._error({type:a.jPlayer.error.URL_NOT_SET,context:b,message:a.jPlayer.errorMsg.URL_NOT_SET,hint:a.jPlayer.errorHint.URL_NOT_SET})},_flashError:function(b){var c;c=this.internal.ready?"FLASH_DISABLED":"FLASH",this._error({type:a.jPlayer.error[c],context:this.internal.flash.swf,message:a.jPlayer.errorMsg[c]+b.message,hint:a.jPlayer.errorHint[c]}),this.internal.flash.jq.css({width:"1px",height:"1px"})},_error:function(b){this._trigger(a.jPlayer.event.error,b),this.options.errorAlerts&&this._alert("Error!"+(b.message?"\n"+b.message:"")+(b.hint?"\n"+b.hint:"")+"\nContext: "+b.context)},_warning:function(c){this._trigger(a.jPlayer.event.warning,b,c),this.options.warningAlerts&&this._alert("Warning!"+(c.message?"\n"+c.message:"")+(c.hint?"\n"+c.hint:"")+"\nContext: "+c.context)},_alert:function(a){var b="jPlayer "+this.version.script+" : id='"+this.internal.self.id+"' : "+a;this.options.consoleAlerts?window.console&&window.console.log&&window.console.log(b):alert(b)},_emulateHtmlBridge:function(){var b=this;a.each(a.jPlayer.emulateMethods.split(/\s+/g),function(a,c){b.internal.domNode[c]=function(a){b[c](a)}}),a.each(a.jPlayer.event,function(c,d){var e=!0;a.each(a.jPlayer.reservedEvent.split(/\s+/g),function(a,b){return b===c?(e=!1,!1):void 0}),e&&b.element.bind(d+".jPlayer.jPlayerHtml",function(){b._emulateHtmlUpdate();var a=document.createEvent("Event");a.initEvent(c,!1,!0),b.internal.domNode.dispatchEvent(a)})})},_emulateHtmlUpdate:function(){var b=this;a.each(a.jPlayer.emulateStatus.split(/\s+/g),function(a,c){b.internal.domNode[c]=b.status[c]}),a.each(a.jPlayer.emulateOptions.split(/\s+/g),function(a,c){b.internal.domNode[c]=b.options[c]})},_destroyHtmlBridge:function(){var b=this;this.element.unbind(".jPlayerHtml");var c=a.jPlayer.emulateMethods+" "+a.jPlayer.emulateStatus+" "+a.jPlayer.emulateOptions;a.each(c.split(/\s+/g),function(a,c){delete b.internal.domNode[c]})}},a.jPlayer.error={FLASH:"e_flash",FLASH_DISABLED:"e_flash_disabled",NO_SOLUTION:"e_no_solution",NO_SUPPORT:"e_no_support",URL:"e_url",URL_NOT_SET:"e_url_not_set",VERSION:"e_version"},a.jPlayer.errorMsg={FLASH:"jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",FLASH_DISABLED:"jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",NO_SOLUTION:"No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",NO_SUPPORT:"It is not possible to play any media format provided in setMedia() on this browser using your current options.",URL:"Media URL could not be loaded.",URL_NOT_SET:"Attempt to issue media playback commands, while no media url is set.",VERSION:"jPlayer "+a.jPlayer.prototype.version.script+" needs Jplayer.swf version "+a.jPlayer.prototype.version.needFlash+" but found "},a.jPlayer.errorHint={FLASH:"Check your swfPath option and that Jplayer.swf is there.",FLASH_DISABLED:"Check that you have not display:none; the jPlayer entity or any ancestor.",NO_SOLUTION:"Review the jPlayer options: support and supplied.",NO_SUPPORT:"Video or audio formats defined in the supplied option are missing.",URL:"Check media URL is valid.",URL_NOT_SET:"Use setMedia() to set the media URL.",VERSION:"Update jPlayer files."},a.jPlayer.warning={CSS_SELECTOR_COUNT:"e_css_selector_count",CSS_SELECTOR_METHOD:"e_css_selector_method",CSS_SELECTOR_STRING:"e_css_selector_string",OPTION_KEY:"e_option_key"},a.jPlayer.warningMsg={CSS_SELECTOR_COUNT:"The number of css selectors found did not equal one: ",CSS_SELECTOR_METHOD:"The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING:"The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",OPTION_KEY:"The option requested in jPlayer('option') is undefined."},a.jPlayer.warningHint={CSS_SELECTOR_COUNT:"Check your css selector and the ancestor.",CSS_SELECTOR_METHOD:"Check your method name.",CSS_SELECTOR_STRING:"Check your css selector is a string.",OPTION_KEY:"Check your option name."}});

(function(b,f){jPlayerPlaylist=function(a,c,d){var e=this;this.current=0;this.removing=this.shuffled=this.loop=!1;this.cssSelector=b.extend({},this._cssSelector,a);this.options=b.extend(!0,{keyBindings:{next:{key:39,fn:function(){e.next()}},previous:{key:37,fn:function(){e.previous()}}}},this._options,d);this.playlist=[];this.original=[];this._initPlaylist(c);this.cssSelector.title=this.cssSelector.cssSelectorAncestor+" .jp-title";this.cssSelector.playlist=this.cssSelector.cssSelectorAncestor+" .jp-playlist";
this.cssSelector.next=this.cssSelector.cssSelectorAncestor+" .jp-next";this.cssSelector.previous=this.cssSelector.cssSelectorAncestor+" .jp-previous";this.cssSelector.shuffle=this.cssSelector.cssSelectorAncestor+" .jp-shuffle";this.cssSelector.shuffleOff=this.cssSelector.cssSelectorAncestor+" .jp-shuffle-off";this.options.cssSelectorAncestor=this.cssSelector.cssSelectorAncestor;this.options.repeat=function(a){e.loop=a.jPlayer.options.loop};b(this.cssSelector.jPlayer).bind(b.jPlayer.event.ready,function(){e._init()});
b(this.cssSelector.jPlayer).bind(b.jPlayer.event.ended,function(){e.next()});b(this.cssSelector.jPlayer).bind(b.jPlayer.event.play,function(){b(this).jPlayer("pauseOthers")});b(this.cssSelector.jPlayer).bind(b.jPlayer.event.resize,function(a){a.jPlayer.options.fullScreen?b(e.cssSelector.title).show():b(e.cssSelector.title).hide()});b(this.cssSelector.previous).click(function(){e.previous();b(this).blur();return!1});b(this.cssSelector.next).click(function(){e.next();b(this).blur();return!1});b(this.cssSelector.shuffle).click(function(){e.shuffle(!0);
return!1});b(this.cssSelector.shuffleOff).click(function(){e.shuffle(!1);return!1}).hide();this.options.fullScreen||b(this.cssSelector.title).hide();b(this.cssSelector.playlist+" ul").empty();this._createItemHandlers();b(this.cssSelector.jPlayer).jPlayer(this.options)};jPlayerPlaylist.prototype={_cssSelector:{jPlayer:"#jquery_jplayer_1",cssSelectorAncestor:"#jp_container_1"},_options:{playlistOptions:{autoPlay:!1,loopOnPrevious:!1,shuffleOnLoop:!0,enableRemoveControls:!1,displayTime:"slow",addTime:"fast",
removeTime:"fast",shuffleTime:"slow",itemClass:"jp-playlist-item",freeGroupClass:"jp-free-media",freeItemClass:"jp-playlist-item-free",removeItemClass:"jp-playlist-item-remove"}},option:function(a,b){if(b===f)return this.options.playlistOptions[a];this.options.playlistOptions[a]=b;switch(a){case "enableRemoveControls":this._updateControls();break;case "itemClass":case "freeGroupClass":case "freeItemClass":case "removeItemClass":this._refresh(!0),this._createItemHandlers()}return this},_init:function(){var a=
this;this._refresh(function(){a.options.playlistOptions.autoPlay?a.play(a.current):a.select(a.current)})},_initPlaylist:function(a){this.current=0;this.removing=this.shuffled=!1;this.original=b.extend(!0,[],a);this._originalPlaylist()},_originalPlaylist:function(){var a=this;this.playlist=[];b.each(this.original,function(b){a.playlist[b]=a.original[b]})},_refresh:function(a){var c=this;if(a&&!b.isFunction(a))b(this.cssSelector.playlist+" ul").empty(),b.each(this.playlist,function(a){b(c.cssSelector.playlist+
" ul").append(c._createListItem(c.playlist[a]))}),this._updateControls();else{var d=b(this.cssSelector.playlist+" ul").children().length?this.options.playlistOptions.displayTime:0;b(this.cssSelector.playlist+" ul").slideUp(d,function(){var d=b(this);b(this).empty();b.each(c.playlist,function(a){d.append(c._createListItem(c.playlist[a]))});c._updateControls();b.isFunction(a)&&a();c.playlist.length?b(this).slideDown(c.options.playlistOptions.displayTime):b(this).show()})}},_createListItem:function(a){var c=
this,d="<li><div>",d=d+("<a href='javascript:;' class='"+this.options.playlistOptions.removeItemClass+"'>&times;</a>");if(a.free){var e=!0,d=d+("<span class='"+this.options.playlistOptions.freeGroupClass+"'>(");b.each(a,function(a,f){b.jPlayer.prototype.format[a]&&(e?e=!1:d+=" | ",d+="<a class='"+c.options.playlistOptions.freeItemClass+"' href='"+f+"' tabindex='1'>"+a+"</a>")});d+=")</span>"}d+="<a href='javascript:;' class='"+this.options.playlistOptions.itemClass+"' tabindex='1'>"+a.title+(a.artist?
" <span class='jp-artist'>by "+a.artist+"</span>":"")+"</a>";return d+="</div></li>"},_createItemHandlers:function(){var a=this;b(this.cssSelector.playlist).off("click","a."+this.options.playlistOptions.itemClass).on("click","a."+this.options.playlistOptions.itemClass,function(){var c=b(this).parent().parent().index();a.current!==c?a.play(c):b(a.cssSelector.jPlayer).jPlayer("play");b(this).blur();return!1});b(this.cssSelector.playlist).off("click","a."+this.options.playlistOptions.freeItemClass).on("click",
"a."+this.options.playlistOptions.freeItemClass,function(){b(this).parent().parent().find("."+a.options.playlistOptions.itemClass).click();b(this).blur();return!1});b(this.cssSelector.playlist).off("click","a."+this.options.playlistOptions.removeItemClass).on("click","a."+this.options.playlistOptions.removeItemClass,function(){var c=b(this).parent().parent().index();a.remove(c);b(this).blur();return!1})},_updateControls:function(){this.options.playlistOptions.enableRemoveControls?b(this.cssSelector.playlist+
" ."+this.options.playlistOptions.removeItemClass).show():b(this.cssSelector.playlist+" ."+this.options.playlistOptions.removeItemClass).hide();this.shuffled?(b(this.cssSelector.shuffleOff).show(),b(this.cssSelector.shuffle).hide()):(b(this.cssSelector.shuffleOff).hide(),b(this.cssSelector.shuffle).show())},_highlight:function(a){this.playlist.length&&a!==f&&(b(this.cssSelector.playlist+" .jp-playlist-current").removeClass("jp-playlist-current"),b(this.cssSelector.playlist+" li:nth-child("+(a+1)+
")").addClass("jp-playlist-current").find(".jp-playlist-item").addClass("jp-playlist-current"),b(this.cssSelector.title+" li").html(this.playlist[a].title+(this.playlist[a].artist?" <span class='jp-artist'>by "+this.playlist[a].artist+"</span>":"")))},setPlaylist:function(a){this._initPlaylist(a);this._init()},add:function(a,c){b(this.cssSelector.playlist+" ul").append(this._createListItem(a)).find("li:last-child").hide().slideDown(this.options.playlistOptions.addTime);this._updateControls();this.original.push(a);
this.playlist.push(a);c?this.play(this.playlist.length-1):1===this.original.length&&this.select(0)},remove:function(a){var c=this;if(a===f)return this._initPlaylist([]),this._refresh(function(){b(c.cssSelector.jPlayer).jPlayer("clearMedia")}),!0;if(this.removing)return!1;a=0>a?c.original.length+a:a;0<=a&&a<this.playlist.length&&(this.removing=!0,b(this.cssSelector.playlist+" li:nth-child("+(a+1)+")").slideUp(this.options.playlistOptions.removeTime,function(){b(this).remove();if(c.shuffled){var d=
c.playlist[a];b.each(c.original,function(a){if(c.original[a]===d)return c.original.splice(a,1),!1})}else c.original.splice(a,1);c.playlist.splice(a,1);c.original.length?a===c.current?(c.current=a<c.original.length?c.current:c.original.length-1,c.select(c.current)):a<c.current&&c.current--:(b(c.cssSelector.jPlayer).jPlayer("clearMedia"),c.current=0,c.shuffled=!1,c._updateControls());c.removing=!1}));return!0},select:function(a){a=0>a?this.original.length+a:a;0<=a&&a<this.playlist.length?(this.current=
a,this._highlight(a),b(this.cssSelector.jPlayer).jPlayer("setMedia",this.playlist[this.current])):this.current=0},play:function(a){a=0>a?this.original.length+a:a;0<=a&&a<this.playlist.length?this.playlist.length&&(this.select(a),b(this.cssSelector.jPlayer).jPlayer("play")):a===f&&b(this.cssSelector.jPlayer).jPlayer("play")},pause:function(){b(this.cssSelector.jPlayer).jPlayer("pause")},next:function(){var a=this.current+1<this.playlist.length?this.current+1:0;this.loop?0===a&&this.shuffled&&this.options.playlistOptions.shuffleOnLoop&&
1<this.playlist.length?this.shuffle(!0,!0):this.play(a):0<a&&this.play(a)},previous:function(){var a=0<=this.current-1?this.current-1:this.playlist.length-1;(this.loop&&this.options.playlistOptions.loopOnPrevious||a<this.playlist.length-1)&&this.play(a)},shuffle:function(a,c){var d=this;a===f&&(a=!this.shuffled);(a||a!==this.shuffled)&&b(this.cssSelector.playlist+" ul").slideUp(this.options.playlistOptions.shuffleTime,function(){(d.shuffled=a)?d.playlist.sort(function(){return 0.5-Math.random()}):
d._originalPlaylist();d._refresh(!0);c||!b(d.cssSelector.jPlayer).data("jPlayer").status.paused?d.play(0):d.select(0);b(this).slideDown(d.options.playlistOptions.shuffleTime)})}}})(jQuery);
function y(h,g,b){var c=g||0,d=0;"string"==typeof h?(d=b||h.length,this.a=function(a){return h.charCodeAt(a+c)&255}):"unknown"==typeof h&&(d=b||IEBinary_getLength(h),this.a=function(a){return IEBinary_getByteAt(h,a+c)});this.l=function(a,f){for(var v=Array(f),b=0;b<f;b++)v[b]=this.a(a+b);return v};this.h=function(){return d};this.d=function(a,f){return 0!=(this.a(a)&1<<f)};this.w=function(a){a=(this.a(a+1)<<8)+this.a(a);0>a&&(a+=65536);return a};this.i=function(a){var f=this.a(a),b=this.a(a+1),d=
this.a(a+2);a=this.a(a+3);f=(((f<<8)+b<<8)+d<<8)+a;0>f&&(f+=4294967296);return f};this.o=function(a){var f=this.a(a),b=this.a(a+1);a=this.a(a+2);f=((f<<8)+b<<8)+a;0>f&&(f+=16777216);return f};this.c=function(a,f){for(var b=[],d=a,e=0;d<a+f;d++,e++)b[e]=String.fromCharCode(this.a(d));return b.join("")};this.e=function(a,b,d){a=this.l(a,b);switch(d.toLowerCase()){case "utf-16":case "utf-16le":case "utf-16be":b=d;var l,e=0,c=1;d=0;l=Math.min(l||a.length,a.length);254==a[0]&&255==a[1]?(b=!0,e=2):255==
a[0]&&254==a[1]&&(b=!1,e=2);b&&(c=0,d=1);b=[];for(var m=0;e<l;m++){var g=a[e+c],k=(g<<8)+a[e+d],e=e+2;if(0==k)break;else 216>g||224<=g?b[m]=String.fromCharCode(k):(g=(a[e+c]<<8)+a[e+d],e+=2,b[m]=String.fromCharCode(k,g))}a=new String(b.join(""));a.g=e;break;case "utf-8":l=0;e=Math.min(e||a.length,a.length);239==a[0]&&187==a[1]&&191==a[2]&&(l=3);c=[];for(d=0;l<e&&(b=a[l++],0!=b);d++)128>b?c[d]=String.fromCharCode(b):194<=b&&224>b?(m=a[l++],c[d]=String.fromCharCode(((b&31)<<6)+(m&63))):224<=b&&240>
b?(m=a[l++],k=a[l++],c[d]=String.fromCharCode(((b&255)<<12)+((m&63)<<6)+(k&63))):240<=b&&245>b&&(m=a[l++],k=a[l++],g=a[l++],b=((b&7)<<18)+((m&63)<<12)+((k&63)<<6)+(g&63)-65536,c[d]=String.fromCharCode((b>>10)+55296,(b&1023)+56320));a=new String(c.join(""));a.g=l;break;default:e=[];c=c||a.length;for(l=0;l<c;){d=a[l++];if(0==d)break;e[l-1]=String.fromCharCode(d)}a=new String(e.join(""));a.g=l}return a};this.f=function(a,b){b()}}var B=document.createElement("script");B.type="text/vbscript";
B.textContent="Function IEBinary_getByteAt(strBinary, iOffset)\r\n\tIEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n\tIEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n";document.getElementsByTagName("head")[0].appendChild(B);function C(h,g,b){function c(a,b,e,c,f,g){var k=d();k?("undefined"===typeof g&&(g=!0),b&&("undefined"!=typeof k.onload?(k.onload=function(){"200"==k.status||"206"==k.status?(k.fileSize=f||k.getResponseHeader("Content-Length"),b(k)):e&&e({error:"xhr",xhr:k});k=null},e&&(k.onerror=function(){e({error:"xhr",xhr:k});k=null})):k.onreadystatechange=function(){4==k.readyState&&("200"==k.status||"206"==k.status?(k.fileSize=f||k.getResponseHeader("Content-Length"),b(k)):e&&e({error:"xhr",xhr:k}),k=null)}),
k.open("GET",a,g),k.overrideMimeType&&k.overrideMimeType("text/plain; charset=x-user-defined"),c&&k.setRequestHeader("Range","bytes="+c[0]+"-"+c[1]),k.setRequestHeader("If-Modified-Since","Sat, 1 Jan 1970 00:00:00 GMT"),k.send(null)):e&&e({error:"Unable to create XHR object"})}function d(){var a=null;window.XMLHttpRequest?a=new XMLHttpRequest:window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP"));return a}function a(a,b,e){var c=d();c?(b&&("undefined"!=typeof c.onload?(c.onload=function(){"200"==
c.status||"206"==c.status?b(this):e&&e({error:"xhr",xhr:c});c=null},e&&(c.onerror=function(){e({error:"xhr",xhr:c});c=null})):c.onreadystatechange=function(){4==c.readyState&&("200"==c.status||"206"==c.status?b(this):e&&e({error:"xhr",xhr:c}),c=null)}),c.open("HEAD",a,!0),c.send(null)):e&&e({error:"Unable to create XHR object"})}function f(a,d){var e,f;function g(a){var b=~~(a[0]/e)-f;a=~~(a[1]/e)+1+f;0>b&&(b=0);a>=blockTotal&&(a=blockTotal-1);return[b,a]}function h(f,g){for(;n[f[0]];)if(f[0]++,f[0]>
f[1]){g&&g();return}for(;n[f[1]];)if(f[1]--,f[0]>f[1]){g&&g();return}var m=[f[0]*e,(f[1]+1)*e-1];c(a,function(a){parseInt(a.getResponseHeader("Content-Length"),10)==d&&(f[0]=0,f[1]=blockTotal-1,m[0]=0,m[1]=d-1);a={data:a.N||a.responseText,offset:m[0]};for(var b=f[0];b<=f[1];b++)n[b]=a;g&&g()},b,m,k,!!g)}var k,r=new y("",0,d),n=[];e=e||2048;f="undefined"===typeof f?0:f;blockTotal=~~((d-1)/e)+1;for(var q in r)r.hasOwnProperty(q)&&"function"===typeof r[q]&&(this[q]=r[q]);this.a=function(a){var b;h(g([a,
a]));b=n[~~(a/e)];if("string"==typeof b.data)return b.data.charCodeAt(a-b.offset)&255;if("unknown"==typeof b.data)return IEBinary_getByteAt(b.data,a-b.offset)};this.f=function(a,b){h(g(a),b)}}(function(){a(h,function(a){a=parseInt(a.getResponseHeader("Content-Length"),10)||-1;g(new f(h,a))},b)})()};(function(h){h.FileAPIReader=function(g,b){return function(c,d){var a=b||new FileReader;a.onload=function(a){d(new y(a.target.result))};a.readAsBinaryString(g)}}})(this);(function(h){var g=h.p={},b={},c=[0,7];g.t=function(d){delete b[d]};g.s=function(){b={}};g.B=function(d,a,f){f=f||{};(f.dataReader||C)(d,function(g){g.f(c,function(){var c="ftypM4A"==g.c(4,7)?ID4:"ID3"==g.c(0,3)?ID3v2:ID3v1;c.m(g,function(){var e=f.tags,h=c.n(g,e),e=b[d]||{},m;for(m in h)h.hasOwnProperty(m)&&(e[m]=h[m]);b[d]=e;a&&a()})})},f.onError)};g.v=function(d){if(!b[d])return null;var a={},c;for(c in b[d])b[d].hasOwnProperty(c)&&(a[c]=b[d][c]);return a};g.A=function(d,a){return b[d]?b[d][a]:
null};h.ID3=h.p;g.loadTags=g.B;g.getAllTags=g.v;g.getTag=g.A;g.clearTags=g.t;g.clearAll=g.s})(this);(function(h){var g=h.q={},b="Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
g.m=function(b,d){var a=b.h();b.f([a-128-1,a],d)};g.n=function(c){var d=c.h()-128;if("TAG"==c.c(d,3)){var a=c.c(d+3,30).replace(/\0/g,""),f=c.c(d+33,30).replace(/\0/g,""),g=c.c(d+63,30).replace(/\0/g,""),l=c.c(d+93,4).replace(/\0/g,"");if(0==c.a(d+97+28))var e=c.c(d+97,28).replace(/\0/g,""),h=c.a(d+97+29);else e="",h=0;c=c.a(d+97+30);return{version:"1.1",title:a,artist:f,album:g,year:l,comment:e,track:h,genre:255>c?b[c]:""}}return{}};h.ID3v1=h.q})(this);(function(h){function g(a,b){var d=b.a(a),c=b.a(a+1),e=b.a(a+2);return b.a(a+3)&127|(e&127)<<7|(c&127)<<14|(d&127)<<21}var b=h.D={};b.b={};b.frames={BUF:"Recommended buffer size",CNT:"Play counter",COM:"Comments",CRA:"Audio encryption",CRM:"Encrypted meta frame",ETC:"Event timing codes",EQU:"Equalization",GEO:"General encapsulated object",IPL:"Involved people list",LNK:"Linked information",MCI:"Music CD Identifier",MLL:"MPEG location lookup table",PIC:"Attached picture",POP:"Popularimeter",REV:"Reverb",
RVA:"Relative volume adjustment",SLT:"Synchronized lyric/text",STC:"Synced tempo codes",TAL:"Album/Movie/Show title",TBP:"BPM (Beats Per Minute)",TCM:"Composer",TCO:"Content type",TCR:"Copyright message",TDA:"Date",TDY:"Playlist delay",TEN:"Encoded by",TFT:"File type",TIM:"Time",TKE:"Initial key",TLA:"Language(s)",TLE:"Length",TMT:"Media type",TOA:"Original artist(s)/performer(s)",TOF:"Original filename",TOL:"Original Lyricist(s)/text writer(s)",TOR:"Original release year",TOT:"Original album/Movie/Show title",
TP1:"Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",TP2:"Band/Orchestra/Accompaniment",TP3:"Conductor/Performer refinement",TP4:"Interpreted, remixed, or otherwise modified by",TPA:"Part of a set",TPB:"Publisher",TRC:"ISRC (International Standard Recording Code)",TRD:"Recording dates",TRK:"Track number/Position in set",TSI:"Size",TSS:"Software/hardware and settings used for encoding",TT1:"Content group description",TT2:"Title/Songname/Content description",TT3:"Subtitle/Description refinement",
TXT:"Lyricist/text writer",TXX:"User defined text information frame",TYE:"Year",UFI:"Unique file identifier",ULT:"Unsychronized lyric/text transcription",WAF:"Official audio file webpage",WAR:"Official artist/performer webpage",WAS:"Official audio source webpage",WCM:"Commercial information",WCP:"Copyright/Legal information",WPB:"Publishers official webpage",WXX:"User defined URL link frame",AENC:"Audio encryption",APIC:"Attached picture",COMM:"Comments",COMR:"Commercial frame",ENCR:"Encryption method registration",
EQUA:"Equalization",ETCO:"Event timing codes",GEOB:"General encapsulated object",GRID:"Group identification registration",IPLS:"Involved people list",LINK:"Linked information",MCDI:"Music CD identifier",MLLT:"MPEG location lookup table",OWNE:"Ownership frame",PRIV:"Private frame",PCNT:"Play counter",POPM:"Popularimeter",POSS:"Position synchronisation frame",RBUF:"Recommended buffer size",RVAD:"Relative volume adjustment",RVRB:"Reverb",SYLT:"Synchronized lyric/text",SYTC:"Synchronized tempo codes",
TALB:"Album/Movie/Show title",TBPM:"BPM (beats per minute)",TCOM:"Composer",TCON:"Content type",TCOP:"Copyright message",TDAT:"Date",TDLY:"Playlist delay",TENC:"Encoded by",TEXT:"Lyricist/Text writer",TFLT:"File type",TIME:"Time",TIT1:"Content group description",TIT2:"Title/songname/content description",TIT3:"Subtitle/Description refinement",TKEY:"Initial key",TLAN:"Language(s)",TLEN:"Length",TMED:"Media type",TOAL:"Original album/movie/show title",TOFN:"Original filename",TOLY:"Original lyricist(s)/text writer(s)",
TOPE:"Original artist(s)/performer(s)",TORY:"Original release year",TOWN:"File owner/licensee",TPE1:"Lead performer(s)/Soloist(s)",TPE2:"Band/orchestra/accompaniment",TPE3:"Conductor/performer refinement",TPE4:"Interpreted, remixed, or otherwise modified by",TPOS:"Part of a set",TPUB:"Publisher",TRCK:"Track number/Position in set",TRDA:"Recording dates",TRSN:"Internet radio station name",TRSO:"Internet radio station owner",TSIZ:"Size",TSRC:"ISRC (international standard recording code)",TSSE:"Software/Hardware and settings used for encoding",
TYER:"Year",TXXX:"User defined text information frame",UFID:"Unique file identifier",USER:"Terms of use",USLT:"Unsychronized lyric/text transcription",WCOM:"Commercial information",WCOP:"Copyright/Legal information",WOAF:"Official audio file webpage",WOAR:"Official artist/performer webpage",WOAS:"Official audio source webpage",WORS:"Official internet radio station homepage",WPAY:"Payment",WPUB:"Publishers official webpage",WXXX:"User defined URL link frame"};var c={title:["TIT2","TT2"],artist:["TPE1",
"TP1"],album:["TALB","TAL"],year:["TYER","TYE"],comment:["COMM","COM"],track:["TRCK","TRK"],genre:["TCON","TCO"],picture:["APIC","PIC"],lyrics:["USLT","ULT"]},d=["title","artist","album","track"];b.m=function(a,b){a.f([0,g(6,a)],b)};b.n=function(a,f){var h=0,l=a.a(h+3);if(4<l)return{version:">2.4"};var e=a.a(h+4),t=a.d(h+5,7),m=a.d(h+5,6),u=a.d(h+5,5),k=g(h+6,a),h=h+10;if(m)var r=a.i(h),h=h+(r+4);var l={version:"2."+l+"."+e,major:l,revision:e,flags:{unsynchronisation:t,extended_header:m,experimental_indicator:u},
size:k},n;if(t)n={};else{for(var k=k-10,t=a,e=f,m={},u=l.major,r=[],q=0,p;p=(e||d)[q];q++)r=r.concat(c[p]||[p]);for(e=r;h<k;){r=null;q=t;p=h;var x=null;switch(u){case 2:n=q.c(p,3);var s=q.o(p+3),w=6;break;case 3:n=q.c(p,4);s=q.i(p+4);w=10;break;case 4:n=q.c(p,4),s=g(p+4,q),w=10}if(""==n)break;h+=w+s;0>e.indexOf(n)||(2<u&&(x={message:{P:q.d(p+8,6),I:q.d(p+8,5),M:q.d(p+8,4)},k:{K:q.d(p+8+1,7),F:q.d(p+8+1,3),H:q.d(p+8+1,2),C:q.d(p+8+1,1),u:q.d(p+8+1,0)}}),p+=w,x&&x.k.u&&(g(p,q),p+=4,s-=4),x&&x.k.C||
(n in b.b?r=b.b[n]:"T"==n[0]&&(r=b.b["T*"]),r=r?r(p,s,q,x):void 0,r={id:n,size:s,description:n in b.frames?b.frames[n]:"Unknown",data:r},n in m?(m[n].id&&(m[n]=[m[n]]),m[n].push(r)):m[n]=r))}n=m}for(var z in c)if(c.hasOwnProperty(z)){a:{s=c[z];"string"==typeof s&&(s=[s]);w=0;for(h=void 0;h=s[w];w++)if(h in n){a=n[h].data;break a}a=void 0}a&&(l[z]=a)}for(var A in n)n.hasOwnProperty(A)&&(l[A]=n[A]);return l};h.ID3v2=b})(this);(function(){function h(b){var c;switch(b){case 0:c="iso-8859-1";break;case 1:c="utf-16";break;case 2:c="utf-16be";break;case 3:c="utf-8"}return c}var g="32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. lable side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
ID3v2.b.APIC=function(b,c,d,a,f){f=f||"3";a=b;var v=h(d.a(b));switch(f){case "2":var l=d.c(b+1,3);b+=4;break;case "3":case "4":l=d.e(b+1,c-(b-a),""),b+=1+l.g}f=d.a(b,1);f=g[f];v=d.e(b+1,c-(b-a),v);b+=1+v.g;return{format:l.toString(),type:f,description:v.toString(),data:d.l(b,a+c-b)}};ID3v2.b.COMM=function(b,c,d){var a=b,f=h(d.a(b)),g=d.c(b+1,3),l=d.e(b+4,c-4,f);b+=4+l.g;b=d.e(b,a+c-b,f);return{language:g,O:l.toString(),text:b.toString()}};ID3v2.b.COM=ID3v2.b.COMM;ID3v2.b.PIC=function(b,c,d,a){return ID3v2.b.APIC(b,
c,d,a,"2")};ID3v2.b.PCNT=function(b,c,d){return d.J(b)};ID3v2.b.CNT=ID3v2.b.PCNT;ID3v2.b["T*"]=function(b,c,d){var a=h(d.a(b));return d.e(b+1,c-1,a).toString()};ID3v2.b.TCON=function(b,c,d){return ID3v2.b["T*"].apply(this,arguments).replace(/^\(\d+\)/,"")};ID3v2.b.TCO=ID3v2.b.TCON;ID3v2.b.USLT=function(b,c,d){var a=b,f=h(d.a(b)),g=d.c(b+1,3),l=d.e(b+4,c-4,f);b+=4+l.g;b=d.e(b,a+c-b,f);return{language:g,G:l.toString(),L:b.toString()}};ID3v2.b.ULT=ID3v2.b.USLT})();(function(h){function g(b,a,f,h){var l=b.i(a);if(0==l)h();else{var e=b.c(a+4,4);-1<["moov","udta","meta","ilst"].indexOf(e)?("meta"==e&&(a+=4),b.f([a+8,a+8+8],function(){g(b,a+8,l-8,h)})):b.f([a+(e in c.j?0:l),a+l+8],function(){g(b,a+l,f,h)})}}function b(d,a,f,g,h){h=void 0===h?"":h+"  ";for(var e=f;e<f+g;){var t=a.i(e);if(0==t)break;var m=a.c(e+4,4);if(-1<["moov","udta","meta","ilst"].indexOf(m)){"meta"==m&&(e+=4);b(d,a,e+8,t-8,h);break}if(c.j[m]){var u=a.o(e+16+1),k=c.j[m],u=c.types[u];if("trkn"==
m)d[k[0]]=a.a(e+16+11),d.count=a.a(e+16+13);else{var m=e+16+4+4,r=t-16-4-4,n;switch(u){case "text":n=a.e(m,r,"UTF-8");break;case "uint8":n=a.w(m);break;case "jpeg":case "png":n={k:"image/"+u,data:a.l(m,r)}}d[k[0]]="comment"===k[0]?{text:n}:n}}e+=t}}var c=h.r={};c.types={0:"uint8",1:"text",13:"jpeg",14:"png",21:"uint8"};c.j={"\u00a9alb":["album"],"\u00a9art":["artist"],"\u00a9ART":["artist"],aART:["artist"],"\u00a9day":["year"],"\u00a9nam":["title"],"\u00a9gen":["genre"],trkn:["track"],"\u00a9wrt":["composer"],
"\u00a9too":["encoder"],cprt:["copyright"],covr:["picture"],"\u00a9grp":["grouping"],keyw:["keyword"],"\u00a9lyr":["lyrics"],"\u00a9cmt":["comment"],tmpo:["tempo"],cpil:["compilation"],disk:["disc"]};c.m=function(b,a){b.f([0,7],function(){g(b,0,b.h(),a)})};c.n=function(c){var a={};b(a,c,0,c.h());return a};h.ID4=h.r})(this);
/*! iScroll v5.1.2 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function(g,n,f){function p(a,b){this.wrapper="string"==typeof a?n.querySelector(a):a;this.scroller=this.wrapper.children[0];this.scrollerStyle=this.scroller.style;this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var c in b)this.options[c]=
b[c];this.translateZ=this.options.HWCompositing&&d.hasPerspective?" translateZ(0)":"";this.options.useTransition=d.hasTransition&&this.options.useTransition;this.options.useTransform=d.hasTransform&&this.options.useTransform;this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough;this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault;this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY;
this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX;this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough;this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold;this.options.bounceEasing="string"==typeof this.options.bounceEasing?d.ease[this.options.bounceEasing]||d.ease.circular:this.options.bounceEasing;this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling;
!0===this.options.tap&&(this.options.tap="tap");"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1);this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1;this.directionY=this.directionX=this.y=this.x=0;this._events={};this._init();this.refresh();this.scrollTo(this.options.startX,this.options.startY);this.enable()}function s(a,b,c){var e=n.createElement("div"),d=n.createElement("div");!0===c&&(e.style.cssText="position:absolute;z-index:9999",d.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px");
d.className="iScrollIndicator";"h"==a?(!0===c&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",d.style.height="100%"),e.className="iScrollHorizontalScrollbar"):(!0===c&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",d.style.width="100%"),e.className="iScrollVerticalScrollbar");e.style.cssText+=";overflow:hidden";b||(e.style.pointerEvents="none");e.appendChild(d);return e}function t(a,b){this.wrapper="string"==typeof b.el?n.querySelector(b.el):b.el;this.wrapperStyle=this.wrapper.style;
this.indicator=this.wrapper.children[0];this.indicatorStyle=this.indicator.style;this.scroller=a;this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var c in b)this.options[c]=b[c];this.sizeRatioY=this.sizeRatioX=1;this.maxPosY=this.maxPosX=0;this.options.interactive&&(this.options.disableTouch||(d.addEvent(this.indicator,"touchstart",this),d.addEvent(g,"touchend",this)),this.options.disablePointer||(d.addEvent(this.indicator,
d.prefixPointerEvent("pointerdown"),this),d.addEvent(g,d.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(d.addEvent(this.indicator,"mousedown",this),d.addEvent(g,"mouseup",this)));this.options.fade&&(this.wrapperStyle[d.style.transform]=this.scroller.translateZ,this.wrapperStyle[d.style.transitionDuration]=d.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var u=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||
g.msRequestAnimationFrame||function(a){g.setTimeout(a,1E3/60)},d=function(){function a(a){return!1===e?!1:""===e?a:e+a.charAt(0).toUpperCase()+a.substr(1)}var b={},c=n.createElement("div").style,e=function(){for(var a=["t","webkitT","MozT","msT","OT"],b,e=0,d=a.length;e<d;e++)if(b=a[e]+"ransform",b in c)return a[e].substr(0,a[e].length-1);return!1}();b.getTime=Date.now||function(){return(new Date).getTime()};b.extend=function(a,b){for(var c in b)a[c]=b[c]};b.addEvent=function(a,b,c,e){a.addEventListener(b,
c,!!e)};b.removeEvent=function(a,b,c,e){a.removeEventListener(b,c,!!e)};b.prefixPointerEvent=function(a){return g.MSPointerEvent?"MSPointer"+a.charAt(9).toUpperCase()+a.substr(10):a};b.momentum=function(a,b,c,e,d,k){b=a-b;c=f.abs(b)/c;var g;k=void 0===k?6E-4:k;g=a+c*c/(2*k)*(0>b?-1:1);k=c/k;g<e?(g=d?e-d/2.5*(c/8):e,b=f.abs(g-a),k=b/c):0<g&&(g=d?d/2.5*(c/8):0,b=f.abs(a)+g,k=b/c);return{destination:f.round(g),duration:k}};var d=a("transform");b.extend(b,{hasTransform:!1!==d,hasPerspective:a("perspective")in
c,hasTouch:"ontouchstart"in g,hasPointer:g.PointerEvent||g.MSPointerEvent,hasTransition:a("transition")in c});b.isBadAndroid=/Android /.test(g.navigator.appVersion)&&!/Chrome\/\d/.test(g.navigator.appVersion);b.extend(b.style={},{transform:d,transitionTimingFunction:a("transitionTimingFunction"),transitionDuration:a("transitionDuration"),transitionDelay:a("transitionDelay"),transformOrigin:a("transformOrigin")});b.hasClass=function(a,b){return(new RegExp("(^|\\s)"+b+"(\\s|$)")).test(a.className)};
b.addClass=function(a,c){if(!b.hasClass(a,c)){var e=a.className.split(" ");e.push(c);a.className=e.join(" ")}};b.removeClass=function(a,c){b.hasClass(a,c)&&(a.className=a.className.replace(new RegExp("(^|\\s)"+c+"(\\s|$)","g")," "))};b.offset=function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;)b-=a.offsetLeft,c-=a.offsetTop;return{left:b,top:c}};b.preventDefaultException=function(a,b){for(var c in b)if(b[c].test(a[c]))return!0;return!1};b.extend(b.eventType={},{touchstart:1,touchmove:1,
touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3});b.extend(b.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(a){return a*(2-a)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(a){return f.sqrt(1- --a*a)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(a){return(a-=1)*a*(5*a+4)+1}},bounce:{style:"",fn:function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*
(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}},elastic:{style:"",fn:function(a){return 0===a?0:1==a?1:.4*f.pow(2,-10*a)*f.sin(2*(a-.055)*f.PI/.22)+1}}});b.tap=function(a,b){var c=n.createEvent("Event");c.initEvent(b,!0,!0);c.pageX=a.pageX;c.pageY=a.pageY;a.target.dispatchEvent(c)};b.click=function(a){var b=a.target,c;/(SELECT|INPUT|TEXTAREA)/i.test(b.tagName)||(c=n.createEvent("MouseEvents"),c.initMouseEvent("click",!0,!0,a.view,1,b.screenX,b.screenY,
b.clientX,b.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),c._constructed=!0,b.dispatchEvent(c))};return b}();p.prototype={version:"5.1.2",_init:function(){this._initEvents();(this.options.scrollbars||this.options.indicators)&&this._initIndicators();this.options.mouseWheel&&this._initWheel();this.options.snap&&this._initSnap();this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0);this._execEvent("destroy")},_transitionEnd:function(a){a.target==this.scroller&&
this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(a){if(!(1!=d.eventType[a.type]&&0!==a.button||!this.enabled||this.initiated&&d.eventType[a.type]!==this.initiated)){!this.options.preventDefault||d.isBadAndroid||d.preventDefaultException(a.target,this.options.preventDefaultException);var b=a.touches?a.touches[0]:a;this.initiated=d.eventType[a.type];this.moved=!1;this.directionLocked=this.directionY=
this.directionX=this.distY=this.distX=0;this._transitionTime();this.startTime=d.getTime();this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,a=this.getComputedPosition(),this._translate(f.round(a.x),f.round(a.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd"));this.startX=this.x;this.startY=this.y;this.absStartX=this.x;this.absStartY=this.y;this.pointX=b.pageX;this.pointY=b.pageY;this._execEvent("beforeScrollStart")}},
_move:function(a){if(this.enabled&&d.eventType[a.type]===this.initiated){this.options.preventDefault&&a.preventDefault();var b=a.touches?a.touches[0]:a,c=b.pageX-this.pointX,e=b.pageY-this.pointY,k=d.getTime(),h;this.pointX=b.pageX;this.pointY=b.pageY;this.distX+=c;this.distY+=e;b=f.abs(this.distX);h=f.abs(this.distY);if(!(300<k-this.endTime&&10>b&&10>h)){this.directionLocked||this.options.freeScroll||(this.directionLocked=b>h+this.options.directionLockThreshold?"h":h>=b+this.options.directionLockThreshold?
"v":"n");if("h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)a.preventDefault();else if("horizontal"==this.options.eventPassthrough){this.initiated=!1;return}e=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)a.preventDefault();else if("vertical"==this.options.eventPassthrough){this.initiated=!1;return}c=0}c=this.hasHorizontalScroll?c:0;e=this.hasVerticalScroll?e:0;a=this.x+c;b=this.y+e;if(0<a||a<this.maxScrollX)a=this.options.bounce?this.x+
c/3:0<a?0:this.maxScrollX;if(0<b||b<this.maxScrollY)b=this.options.bounce?this.y+e/3:0<b?0:this.maxScrollY;this.directionX=0<c?-1:0>c?1:0;this.directionY=0<e?-1:0>e?1:0;this.moved||this._execEvent("scrollStart");this.moved=!0;this._translate(a,b);300<k-this.startTime&&(this.startTime=k,this.startX=this.x,this.startY=this.y)}}},_end:function(a){if(this.enabled&&d.eventType[a.type]===this.initiated){this.options.preventDefault&&d.preventDefaultException(a.target,this.options.preventDefaultException);
var b,c;c=d.getTime()-this.startTime;var e=f.round(this.x),k=f.round(this.y),h=f.abs(e-this.startX),g=f.abs(k-this.startY);b=0;var l="";this.initiated=this.isInTransition=0;this.endTime=d.getTime();if(!this.resetPosition(this.options.bounceTime))if(this.scrollTo(e,k),this.moved)if(this._events.flick&&200>c&&100>h&&100>g)this._execEvent("flick");else if(this.options.momentum&&300>c&&(b=this.hasHorizontalScroll?d.momentum(this.x,this.startX,c,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,
this.options.deceleration):{destination:e,duration:0},c=this.hasVerticalScroll?d.momentum(this.y,this.startY,c,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:k,duration:0},e=b.destination,k=c.destination,b=f.max(b.duration,c.duration),this.isInTransition=1),this.options.snap&&(this.currentPage=l=this._nearestSnap(e,k),b=this.options.snapSpeed||f.max(f.max(f.min(f.abs(e-l.x),1E3),f.min(f.abs(k-l.y),1E3)),300),e=l.x,k=l.y,this.directionY=this.directionX=
0,l=this.options.bounceEasing),e!=this.x||k!=this.y){if(0<e||e<this.maxScrollX||0<k||k<this.maxScrollY)l=d.ease.quadratic;this.scrollTo(e,k,b,l)}else this._execEvent("scrollEnd");else this.options.tap&&d.tap(a,this.options.tap),this.options.click&&d.click(a),this._execEvent("scrollCancel")}},_resize:function(){var a=this;clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout(function(){a.refresh()},this.options.resizePolling)},resetPosition:function(a){var b=this.x,c=this.y;!this.hasHorizontalScroll||
0<this.x?b=0:this.x<this.maxScrollX&&(b=this.maxScrollX);!this.hasVerticalScroll||0<this.y?c=0:this.y<this.maxScrollY&&(c=this.maxScrollY);if(b==this.x&&c==this.y)return!1;this.scrollTo(b,c,a||0,this.options.bounceEasing);return!0},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapperWidth=this.wrapper.clientWidth;this.wrapperHeight=this.wrapper.clientHeight;this.scrollerWidth=this.scroller.offsetWidth;this.scrollerHeight=this.scroller.offsetHeight;
this.maxScrollX=this.wrapperWidth-this.scrollerWidth;this.maxScrollY=this.wrapperHeight-this.scrollerHeight;this.hasHorizontalScroll=this.options.scrollX&&0>this.maxScrollX;this.hasVerticalScroll=this.options.scrollY&&0>this.maxScrollY;this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth);this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight);this.directionY=this.directionX=this.endTime=0;this.wrapperOffset=d.offset(this.wrapper);this._execEvent("refresh");
this.resetPosition()},on:function(a,b){this._events[a]||(this._events[a]=[]);this._events[a].push(b)},off:function(a,b){if(this._events[a]){var c=this._events[a].indexOf(b);-1<c&&this._events[a].splice(c,1)}},_execEvent:function(a){if(this._events[a]){var b=0,c=this._events[a].length;if(c)for(;b<c;b++)this._events[a][b].apply(this,[].slice.call(arguments,1))}},scrollBy:function(a,b,c,e){a=this.x+a;b=this.y+b;this.scrollTo(a,b,c||0,e)},scrollTo:function(a,b,c,e){e=e||d.ease.circular;this.isInTransition=
this.options.useTransition&&0<c;!c||this.options.useTransition&&e.style?(this._transitionTimingFunction(e.style),this._transitionTime(c),this._translate(a,b)):this._animate(a,b,c,e.fn)},scrollToElement:function(a,b,c,e,k){if(a=a.nodeType?a:this.scroller.querySelector(a)){var h=d.offset(a);h.left-=this.wrapperOffset.left;h.top-=this.wrapperOffset.top;!0===c&&(c=f.round(a.offsetWidth/2-this.wrapper.offsetWidth/2));!0===e&&(e=f.round(a.offsetHeight/2-this.wrapper.offsetHeight/2));h.left-=c||0;h.top-=
e||0;h.left=0<h.left?0:h.left<this.maxScrollX?this.maxScrollX:h.left;h.top=0<h.top?0:h.top<this.maxScrollY?this.maxScrollY:h.top;b=void 0===b||null===b||"auto"===b?f.max(f.abs(this.x-h.left),f.abs(this.y-h.top)):b;this.scrollTo(h.left,h.top,b,k)}},_transitionTime:function(a){a=a||0;this.scrollerStyle[d.style.transitionDuration]=a+"ms";!a&&d.isBadAndroid&&(this.scrollerStyle[d.style.transitionDuration]="0.001s");if(this.indicators)for(var b=this.indicators.length;b--;)this.indicators[b].transitionTime(a)},
_transitionTimingFunction:function(a){this.scrollerStyle[d.style.transitionTimingFunction]=a;if(this.indicators)for(var b=this.indicators.length;b--;)this.indicators[b].transitionTimingFunction(a)},_translate:function(a,b){this.options.useTransform?this.scrollerStyle[d.style.transform]="translate("+a+"px,"+b+"px)"+this.translateZ:(a=f.round(a),b=f.round(b),this.scrollerStyle.left=a+"px",this.scrollerStyle.top=b+"px");this.x=a;this.y=b;if(this.indicators)for(var c=this.indicators.length;c--;)this.indicators[c].updatePosition()},
_initEvents:function(a){a=a?d.removeEvent:d.addEvent;var b=this.options.bindToWrapper?this.wrapper:g;a(g,"orientationchange",this);a(g,"resize",this);this.options.click&&a(this.wrapper,"click",this,!0);this.options.disableMouse||(a(this.wrapper,"mousedown",this),a(b,"mousemove",this),a(b,"mousecancel",this),a(b,"mouseup",this));d.hasPointer&&!this.options.disablePointer&&(a(this.wrapper,d.prefixPointerEvent("pointerdown"),this),a(b,d.prefixPointerEvent("pointermove"),this),a(b,d.prefixPointerEvent("pointercancel"),
this),a(b,d.prefixPointerEvent("pointerup"),this));d.hasTouch&&!this.options.disableTouch&&(a(this.wrapper,"touchstart",this),a(b,"touchmove",this),a(b,"touchcancel",this),a(b,"touchend",this));a(this.scroller,"transitionend",this);a(this.scroller,"webkitTransitionEnd",this);a(this.scroller,"oTransitionEnd",this);a(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var a=g.getComputedStyle(this.scroller,null),b;this.options.useTransform?(a=a[d.style.transform].split(")")[0].split(", "),
b=+(a[12]||a[4]),a=+(a[13]||a[5])):(b=+a.left.replace(/[^-\d.]/g,""),a=+a.top.replace(/[^-\d.]/g,""));return{x:b,y:a}},_initIndicators:function(){function a(a){for(var b=f.indicators.length;b--;)a.call(f.indicators[b])}var b=this.options.interactiveScrollbars,c="string"!=typeof this.options.scrollbars,e=[],d,f=this;this.indicators=[];this.options.scrollbars&&(this.options.scrollY&&(d={el:s("v",b,this.options.scrollbars),interactive:b,defaultScrollbars:!0,customStyle:c,resize:this.options.resizeScrollbars,
shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(d.el),e.push(d)),this.options.scrollX&&(d={el:s("h",b,this.options.scrollbars),interactive:b,defaultScrollbars:!0,customStyle:c,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(d.el),e.push(d)));this.options.indicators&&(e=e.concat(this.options.indicators));for(b=e.length;b--;)this.indicators.push(new t(this,
e[b]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){a(function(){this.fade()})}),this.on("scrollCancel",function(){a(function(){this.fade()})}),this.on("scrollStart",function(){a(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){a(function(){this.fade(1,!0)})}));this.on("refresh",function(){a(function(){this.refresh()})});this.on("destroy",function(){a(function(){this.destroy()});delete this.indicators})},_initWheel:function(){d.addEvent(this.wrapper,"wheel",this);
d.addEvent(this.wrapper,"mousewheel",this);d.addEvent(this.wrapper,"DOMMouseScroll",this);this.on("destroy",function(){d.removeEvent(this.wrapper,"wheel",this);d.removeEvent(this.wrapper,"mousewheel",this);d.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(a){if(this.enabled){a.preventDefault();a.stopPropagation();var b,c,e,d=this;void 0===this.wheelTimeout&&d._execEvent("scrollStart");clearTimeout(this.wheelTimeout);this.wheelTimeout=setTimeout(function(){d._execEvent("scrollEnd");
d.wheelTimeout=void 0},400);if("deltaX"in a)b=-a.deltaX,a=-a.deltaY;else if("wheelDeltaX"in a)b=a.wheelDeltaX/120*this.options.mouseWheelSpeed,a=a.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in a)b=a=a.wheelDelta/120*this.options.mouseWheelSpeed;else if("detail"in a)b=a=-a.detail/3*this.options.mouseWheelSpeed;else return;b*=this.options.invertWheelDirection;a*=this.options.invertWheelDirection;this.hasVerticalScroll||(b=a,a=0);this.options.snap?(c=this.currentPage.pageX,e=this.currentPage.pageY,
0<b?c--:0>b&&c++,0<a?e--:0>a&&e++,this.goToPage(c,e)):(c=this.x+f.round(this.hasHorizontalScroll?b:0),e=this.y+f.round(this.hasVerticalScroll?a:0),0<c?c=0:c<this.maxScrollX&&(c=this.maxScrollX),0<e?e=0:e<this.maxScrollY&&(e=this.maxScrollY),this.scrollTo(c,e,0))}},_initSnap:function(){this.currentPage={};"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap));this.on("refresh",function(){var a=0,b,c=0,e,d,h,g=0,l;e=this.options.snapStepX||this.wrapperWidth;
var m=this.options.snapStepY||this.wrapperHeight;this.pages=[];if(this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(d=f.round(e/2),h=f.round(m/2);g>-this.scrollerWidth;){this.pages[a]=[];for(l=b=0;l>-this.scrollerHeight;)this.pages[a][b]={x:f.max(g,this.maxScrollX),y:f.max(l,this.maxScrollY),width:e,height:m,cx:g-d,cy:l-h},l-=m,b++;g-=e;a++}else for(m=this.options.snap,b=m.length,e=-1;a<b;a++){if(0===a||m[a].offsetLeft<=m[a-1].offsetLeft)c=
0,e++;this.pages[c]||(this.pages[c]=[]);g=f.max(-m[a].offsetLeft,this.maxScrollX);l=f.max(-m[a].offsetTop,this.maxScrollY);d=g-f.round(m[a].offsetWidth/2);h=l-f.round(m[a].offsetHeight/2);this.pages[c][e]={x:g,y:l,width:m[a].offsetWidth,height:m[a].offsetHeight,cx:d,cy:h};g>this.maxScrollX&&c++}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0);0===this.options.snapThreshold%1?this.snapThresholdY=this.snapThresholdX=this.options.snapThreshold:(this.snapThresholdX=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*
this.options.snapThreshold),this.snapThresholdY=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}});this.on("flick",function(){var a=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.x-this.startX),1E3),f.min(f.abs(this.y-this.startY),1E3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,a)})},_nearestSnap:function(a,b){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var c=0,e=this.pages.length,
d=0;if(f.abs(a-this.absStartX)<this.snapThresholdX&&f.abs(b-this.absStartY)<this.snapThresholdY)return this.currentPage;0<a?a=0:a<this.maxScrollX&&(a=this.maxScrollX);0<b?b=0:b<this.maxScrollY&&(b=this.maxScrollY);for(;c<e;c++)if(a>=this.pages[c][0].cx){a=this.pages[c][0].x;break}for(e=this.pages[c].length;d<e;d++)if(b>=this.pages[0][d].cy){b=this.pages[0][d].y;break}c==this.currentPage.pageX&&(c+=this.directionX,0>c?c=0:c>=this.pages.length&&(c=this.pages.length-1),a=this.pages[c][0].x);d==this.currentPage.pageY&&
(d+=this.directionY,0>d?d=0:d>=this.pages[0].length&&(d=this.pages[0].length-1),b=this.pages[0][d].y);return{x:a,y:b,pageX:c,pageY:d}},goToPage:function(a,b,c,d){d=d||this.options.bounceEasing;a>=this.pages.length?a=this.pages.length-1:0>a&&(a=0);b>=this.pages[a].length?b=this.pages[a].length-1:0>b&&(b=0);var g=this.pages[a][b].x,h=this.pages[a][b].y;c=void 0===c?this.options.snapSpeed||f.max(f.max(f.min(f.abs(g-this.x),1E3),f.min(f.abs(h-this.y),1E3)),300):c;this.currentPage={x:g,y:h,pageX:a,pageY:b};
this.scrollTo(g,h,c,d)},next:function(a,b){var c=this.currentPage.pageX,d=this.currentPage.pageY;c++;c>=this.pages.length&&this.hasVerticalScroll&&(c=0,d++);this.goToPage(c,d,a,b)},prev:function(a,b){var c=this.currentPage.pageX,d=this.currentPage.pageY;c--;0>c&&this.hasVerticalScroll&&(c=0,d--);this.goToPage(c,d,a,b)},_initKeys:function(a){a={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};var b;if("object"==typeof this.options.keyBindings)for(b in this.options.keyBindings)"string"==
typeof this.options.keyBindings[b]&&(this.options.keyBindings[b]=this.options.keyBindings[b].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(b in a)this.options.keyBindings[b]=this.options.keyBindings[b]||a[b];d.addEvent(g,"keydown",this);this.on("destroy",function(){d.removeEvent(g,"keydown",this)})},_key:function(a){if(this.enabled){var b=this.options.snap,c=b?this.currentPage.pageX:this.x,e=b?this.currentPage.pageY:this.y,g=d.getTime(),h=this.keyTime||0,n;this.options.useTransition&&
this.isInTransition&&(n=this.getComputedPosition(),this._translate(f.round(n.x),f.round(n.y)),this.isInTransition=!1);this.keyAcceleration=200>g-h?f.min(this.keyAcceleration+.25,50):0;switch(a.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?c+=b?1:this.wrapperWidth:e+=b?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?c-=b?1:this.wrapperWidth:e-=b?1:this.wrapperHeight;break;case this.options.keyBindings.end:c=
b?this.pages.length-1:this.maxScrollX;e=b?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:e=c=0;break;case this.options.keyBindings.left:c+=b?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:e+=b?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:c-=b?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:e-=b?1:5+this.keyAcceleration>>0;break;default:return}b?this.goToPage(c,e):(0<c?this.keyAcceleration=c=0:c<this.maxScrollX&&
(c=this.maxScrollX,this.keyAcceleration=0),0<e?this.keyAcceleration=e=0:e<this.maxScrollY&&(e=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(c,e,0),this.keyTime=g)}},_animate:function(a,b,c,e){function f(){var q=d.getTime(),r;q>=p?(g.isAnimating=!1,g._translate(a,b),g.resetPosition(g.options.bounceTime)||g._execEvent("scrollEnd")):(q=(q-m)/c,r=e(q),q=(a-n)*r+n,r=(b-l)*r+l,g._translate(q,r),g.isAnimating&&u(f))}var g=this,n=this.x,l=this.y,m=d.getTime(),p=m+c;this.isAnimating=!0;f()},handleEvent:function(a){switch(a.type){case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":this._start(a);
break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":this._end(a);break;case "orientationchange":case "resize":this._resize();break;case "transitionend":case "webkitTransitionEnd":case "oTransitionEnd":case "MSTransitionEnd":this._transitionEnd(a);break;case "wheel":case "DOMMouseScroll":case "mousewheel":this._wheel(a);
break;case "keydown":this._key(a);break;case "click":a._constructed||(a.preventDefault(),a.stopPropagation())}}};t.prototype={handleEvent:function(a){switch(a.type){case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":this._start(a);break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":this._end(a)}},
destroy:function(){this.options.interactive&&(d.removeEvent(this.indicator,"touchstart",this),d.removeEvent(this.indicator,d.prefixPointerEvent("pointerdown"),this),d.removeEvent(this.indicator,"mousedown",this),d.removeEvent(g,"touchmove",this),d.removeEvent(g,d.prefixPointerEvent("pointermove"),this),d.removeEvent(g,"mousemove",this),d.removeEvent(g,"touchend",this),d.removeEvent(g,d.prefixPointerEvent("pointerup"),this),d.removeEvent(g,"mouseup",this));this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},
_start:function(a){var b=a.touches?a.touches[0]:a;a.preventDefault();a.stopPropagation();this.transitionTime();this.initiated=!0;this.moved=!1;this.lastPointX=b.pageX;this.lastPointY=b.pageY;this.startTime=d.getTime();this.options.disableTouch||d.addEvent(g,"touchmove",this);this.options.disablePointer||d.addEvent(g,d.prefixPointerEvent("pointermove"),this);this.options.disableMouse||d.addEvent(g,"mousemove",this);this.scroller._execEvent("beforeScrollStart")},_move:function(a){var b=a.touches?a.touches[0]:
a,c,e;d.getTime();this.moved||this.scroller._execEvent("scrollStart");this.moved=!0;c=b.pageX-this.lastPointX;this.lastPointX=b.pageX;e=b.pageY-this.lastPointY;this.lastPointY=b.pageY;this._pos(this.x+c,this.y+e);a.preventDefault();a.stopPropagation()},_end:function(a){if(this.initiated){this.initiated=!1;a.preventDefault();a.stopPropagation();d.removeEvent(g,"touchmove",this);d.removeEvent(g,d.prefixPointerEvent("pointermove"),this);d.removeEvent(g,"mousemove",this);if(this.scroller.options.snap){a=
this.scroller._nearestSnap(this.scroller.x,this.scroller.y);var b=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.scroller.x-a.x),1E3),f.min(f.abs(this.scroller.y-a.y),1E3)),300);if(this.scroller.x!=a.x||this.scroller.y!=a.y)this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=a,this.scroller.scrollTo(a.x,a.y,b,this.scroller.options.bounceEasing)}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(a){a=a||0;this.indicatorStyle[d.style.transitionDuration]=
a+"ms";!a&&d.isBadAndroid&&(this.indicatorStyle[d.style.transitionDuration]="0.001s")},transitionTimingFunction:function(a){this.indicatorStyle[d.style.transitionTimingFunction]=a},refresh:function(){this.transitionTime();this.indicatorStyle.display=this.options.listenX&&!this.options.listenY?this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.scroller.hasVerticalScroll?"block":"none":this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?
"block":"none";this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(d.addClass(this.wrapper,"iScrollBothScrollbars"),d.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(d.removeClass(this.wrapper,"iScrollBothScrollbars"),d.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?
this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=f.max(f.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=
this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX);this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=f.max(f.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,
this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY);this.updatePosition()},updatePosition:function(){var a=this.options.listenX&&f.round(this.sizeRatioX*this.scroller.x)||0,b=this.options.listenY&&
f.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(a<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=f.max(this.indicatorWidth+a,8),this.indicatorStyle.width=this.width+"px"),a=this.minBoundaryX):a>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=f.max(this.indicatorWidth-(a-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",a=this.maxPosX+this.indicatorWidth-this.width):a=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&
(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),b<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=f.max(this.indicatorHeight+3*b,8),this.indicatorStyle.height=this.height+"px"),b=this.minBoundaryY):b>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=f.max(this.indicatorHeight-3*(b-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",b=this.maxPosY+this.indicatorHeight-this.height):b=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=
this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px"));this.x=a;this.y=b;this.scroller.options.useTransform?this.indicatorStyle[d.style.transform]="translate("+a+"px,"+b+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=a+"px",this.indicatorStyle.top=b+"px")},_pos:function(a,b){0>a?a=0:a>this.maxPosX&&(a=this.maxPosX);0>b?b=0:b>this.maxPosY&&(b=this.maxPosY);a=this.options.listenX?f.round(a/this.sizeRatioX):this.scroller.x;b=this.options.listenY?
f.round(b/this.sizeRatioY):this.scroller.y;this.scroller.scrollTo(a,b)},fade:function(a,b){if(!b||this.visible){clearTimeout(this.fadeTimeout);this.fadeTimeout=null;var c=a?250:500,e=a?0:300;this.wrapperStyle[d.style.transitionDuration]=c+"ms";this.fadeTimeout=setTimeout(function(a){this.wrapperStyle.opacity=a;this.visible=+a}.bind(this,a?"1":"0"),e)}}};p.utils=d;"undefined"!=typeof module&&module.exports?module.exports=p:g.IScroll=p})(window,document,Math);
(function($){jQuery.fn.linerPlayer=function(options){options=$.extend({shuffle:false,autoplay:false,accentColor:"#008DDE",firstPlaying:0,supplied:"mp3, m4a",preload:"auto",loop:false,volume:1,veryThin:false,roundedCorners:false,slideAlbumsName:true,nowplaying2title:false,pluginPath:"",keyEnabled:false,continuous:false,playlist:[{title:"Add Music",artist:false,album:"Just one lonely single",mp3:false,oga:false,m4a:false,cover:false}]},options);var linerPlayer=function(){var mixedPlaylist=options.playlist;mixedPlaylist.forEach(function(el,idx,a){el['mp3']=el['file'];el['m4a']=el['file'];});function hexToRgbA(hex,alpha){var c;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){c=hex.substring(1).split('');if(c.length==3){c=[c[0],c[0],c[1],c[1],c[2],c[2]];}
c='0x'+c.join('');return'rgba('+[(c>>16)&255,(c>>8)&255,c&255].join(',')+','+alpha+')';}
throw new Error('Bad color in options. Check # character.');}
var template='\
   <div id="strm_liner" class="custom">\
    <div class="strm_center">\
     <div class="strm_player">\
      <div class="blPlayer">\
       <div class="playControls">\
        <button class="new-jp-previous"><i class="previous"></i></button>\
        <button class="new-jp-play"><i class="pause"></i></button>\
        <button class="new-jp-pause" style="display:none;"><i class="play"></i></button>\
        <button class="new-jp-next"><i class="next"></i></button>\
       </div>\
       <div class="modeControls">\
        <button class="shuffle jp-shuffle on"></button>\
        <button class="shuffle active jp-shuffle-off off"></button>\
        <button class="repeat jp-repeat"></button>\
        <button class="repeat active jp-repeat-off"></button>\
        <button class="openPlaylist icon-list-1"></button>\
       </div>\
       <div class="volumeControl">\
        <button class="vol vol2 jp-mute"></button>\
        <button class="vol0 jp-unmute" style="display:none;"></button>\
        <div class="ruler jp-volume-bar">\
         <div class="trailer jp-volume-slider" style="width: 100%;"></div>\
        </div>\
       </div>\
       <div class="nowPlaying">\
        <time class="jp-time-holder">\
         <span class="time jp-current-time">0:00</span>\
         <span>/</span>\
         <span class="duration jp-duration"><small>loading…</small></span>\
        </time>\
        <h5 class="track">\
         <div class="track">\
          <span class="title"><a class="jp-title"><small>title…</small></a></span>&nbsp;\
          <span class="band"><a class="new-jp-artist"><small>loading…</small></a></span>\
         </div>\
         <div class="album">\
          <span class="cd"><a class="new-jp-cd"><small>album…</small></a></span>\
         </div>\
        </h5>\
        <div class="ruler">\
         <div class="jp-play-slider">\
          <div class="buffer jp-seek-bar"></div>\
         </div>\
         <div class="allbits" style="width:0%"></div>\
        </div>\
       </div>\
      </div>\
     </div>\
     <div class="playlist">\
      <div>\
       <section id="queue">\
        <div class="horizontal jp-playlist">\
         <ul class="queue list"> \
         </ul>\
        </div>\
       </section>\
      </div>\
     </div>\
    </div>\
   </div>\
   <div id="jplayerLiner" class="jp-jplayer"></div>\
  ';var accentCSS='\
    <style>\
     #strm_liner.custom .nowPlaying h5 a:hover,\
     #strm_liner.custom .list li .info h6 a:hover,\
     #strm_liner.custom .list li.jp-playlist-current h6 a{color:'+options.accentColor+';}\
     #strm_liner.custom .ruler>.allbits>.bit,\
     #strm_liner.custom .ruler .ui-slider-range,\
     #strm_liner.custom .volumeControl .ui-slider-range,\
     #strm_liner.custom .list li .playBtn:hover {background-color:'+options.accentColor+';}\
     #strm_liner.custom .list li.jp-playlist-current .controls {border: 3px solid '+options.accentColor+';}\
    </style>\
    ';var ignore_timeupdate=false;var myjPlayer=false;var JPready=false;var fixFlash_mp4_id=false;var fixFlash_mp4=false;var rebuild=false;var shuffleOn=options.shuffle;var colour=options.accentColor;var selected=options.firstPlaying;var defTitle=$('title').text();$(this).append(template);if(!options.roundedCorners){$('#strm_liner').addClass('sharpen');}
if(options.veryThin){$('#strm_liner').addClass('veryThin');}
$('#strm_liner').before(accentCSS);$('#strm_liner').find(".nowPlaying .ruler").css('background-color',hexToRgbA(options.accentColor,0.5));var JPlaylist=new jPlayerPlaylist({jPlayer:"#jplayerLiner",cssSelectorAncestor:"#strm_liner",},mixedPlaylist,{playlistOptions:{enableRemoveControls:true},swfPath:options.pluginPath+'js/',supplied:options.supplied,preload:options.preload,loop:options.loop,keyEnabled:options.keyEnabled,volume:options.volume,smoothPlayBar:true,fullScreen:true,audioFullScreen:true,ready:function(event){myjPlayer=event.jPlayer;if(options.continuous){setCookie('linerPlaylist',JSON.stringify(JPlaylist.playlist));}
$(document).on('click','.plManager',function(e){e.preventDefault();if($(this).data('action')=='clear'){$(JPlaylist.cssSelector.jPlayer).jPlayer('stop');JPlaylist.remove();$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .new-jp-cd').text(' ');$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .new-jp-artist').text(' ');$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .jp-title').text('Playlist is empty. Add new songs!');makebits();if(!event.jPlayer.status.noVolume){myScroll.refresh();}}
if($(this).data('action')=='add'){JPlaylist.add({title:$(this).data('title'),artist:$(this).data('artist'),album:$(this).data('album'),mp3:$(this).data('mp3'),m4a:$(this).data('mp3'),cover:$(this).data('cover')});rebuildPl(event);JPlaylist.play(-1);if(!event.jPlayer.status.noVolume){myScroll.refresh();}}
if($(this).data('action')=='add-no-play'){JPlaylist.add({title:$(this).data('title'),artist:$(this).data('artist'),album:$(this).data('album'),mp3:$(this).data('mp3'),m4a:$(this).data('mp3'),cover:$(this).data('cover')});rebuildPl(event);if(!event.jPlayer.status.noVolume){myScroll.refresh();}}
if($(this).data('action')=='play'){JPlaylist.play($(this).data('id'));$(this).addClass('clickedPlay');$(this).removeClass('clickedPause');$(this).removeClass('clickedStop');}
if($(this).data('action')=='pause'){$(JPlaylist.cssSelector.jPlayer).jPlayer('pause');$(this).addClass('clickedPause');$(this).removeClass('clickedPlay');$(this).removeClass('clickedStop');}
if($(this).data('action')=='stop'){$(JPlaylist.cssSelector.jPlayer).jPlayer('stop');$(this).addClass('clickedStop');$(this).removeClass('clickedPause');$(this).removeClass('clickedPlay');}});if(screen.width<=480){$('body').css('margin-bottom',$('body').css('margin-bottom').split('px')[0].split('em')[0]*1+88);}else{$('body').css('margin-bottom',$('body').css('margin-bottom').split('px')[0].split('em')[0]*1+58);}
if(myjPlayer.options.loop){$(JPlaylist.cssSelector.jPlayer).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended,looper);}else{$(JPlaylist.cssSelector.jPlayer).unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended,looperOff);}
if(options.nowplaying2title){if(defTitle){$(JPlaylist.cssSelector.jPlayer).bind($.jPlayer.event.pause,function(){$('title').text(defTitle);});}
$(JPlaylist.cssSelector.jPlayer).bind($.jPlayer.event.play,function(){$('title').text($(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .jp-title').text()+' — '+$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .new-jp-artist').text());});}
if(shuffleOn&&!options.continuous){$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-shuffle").hide();$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-shuffle-off").show();shuffler();}
rebuildPl(event);if(event.jPlayer.status.noVolume){$(event.jPlayer.options.cssSelectorAncestor+' .strm_player').addClass('volHidden');}else{myScroll=new IScroll(event.jPlayer.options.cssSelectorAncestor+' .horizontal',{scrollX:true,scrollY:false,scrollbars:true,mouseWheel:true,interactiveScrollbars:true,scrollbars:'custom',shrinkScrollbars:'scale',fadeScrollbars:true});}
JPlaylist.select(selected);setSlides(event);JPready=true;if(options.continuous){JPlaylist.select(getCookie('linerSelected')*1);if(getCookie('linerPlay')*1==1){$(JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-play").addClass('playing').hide();$(JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-pause").show().addClass('playing');$(JPlaylist.cssSelector.jPlayer).jPlayer('play',getCookie('linerTime')*1);}else{$(JPlaylist.cssSelector.jPlayer).jPlayer('pause',getCookie('linerTime')*1);}
var cookieVolume=getCookie('linerVolume')?getCookie('linerVolume')*1:options.volume;$(JPlaylist.cssSelector.jPlayer).jPlayer("option","volume",cookieVolume);myControl.volume.slider("value",cookieVolume);}
if(options.autoplay&&!event.jPlayer.status.noVolume&&!options.continuous){$(JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-play").addClass('playing').hide();$(JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-pause").show().addClass('playing');JPlaylist.play();}
if(options.slideAlbumsName){setTimeout(function(){$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying h5').removeClass('track').addClass('album');},2500);setTimeout(function(){$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying h5').removeClass('album').addClass('track');},6500);setInterval(function(){$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying h5').removeClass('track').addClass('album');setTimeout(function(){$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying h5').removeClass('album').addClass('track');},4500);},10000);}},volumechange:function(event){myjPlayer=event.jPlayer;if(event.jPlayer.options.muted){myControl.volume.slider("value",0);}else{myControl.volume.slider("value",event.jPlayer.options.volume);}
setCookie('linerVolume',$(JPlaylist.cssSelector.jPlayer).jPlayer("option","volume"));if($(JPlaylist.cssSelector.jPlayer).jPlayer("option","volume")==0){$(event.jPlayer.options.cssSelectorAncestor+' .vol').removeClass('volmute').removeClass('vol0').removeClass('vol1').removeClass('vol2').addClass('volmute');return;}
if($(JPlaylist.cssSelector.jPlayer).jPlayer("option","volume")<0.2){$(event.jPlayer.options.cssSelectorAncestor+' .vol').removeClass('volmute').removeClass('vol0').removeClass('vol1').removeClass('vol2').addClass('vol0');return;}
if($(JPlaylist.cssSelector.jPlayer).jPlayer("option","volume")<0.7){$(event.jPlayer.options.cssSelectorAncestor+' .vol').removeClass('volmute').removeClass('vol0').removeClass('vol1').removeClass('vol2').addClass('vol1');return;}
if($(JPlaylist.cssSelector.jPlayer).jPlayer("option","volume")<=1){$(event.jPlayer.options.cssSelectorAncestor+' .vol').removeClass('volmute').removeClass('vol0').removeClass('vol1').removeClass('vol2').addClass('vol2');return;}},setmedia:function(event){$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying h5').removeClass('album').addClass('track');if(rebuild){rebuildPl(event);rebuild=false;}
$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .new-jp-artist').text($(event.jPlayer.options.cssSelectorAncestor+' .playlist ul li:nth-child('+(JPlaylist.current+1)+') .new-jp-artist').text());$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .jp-title').text($(event.jPlayer.options.cssSelectorAncestor+' .playlist ul li:nth-child('+(JPlaylist.current+1)+') .new-jp-title').text());$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .new-jp-cd').text($(event.jPlayer.options.cssSelectorAncestor+' .playlist ul li:nth-child('+(JPlaylist.current+1)+') .new-jp-artist').data('cd'));makebits();},keyBindings:{play:{key:179,fn:function(f){if(f.status.paused){f.play();}else{f.pause();}}},stop:{key:178,fn:function(f){f.stop();}},next:{key:176,fn:function(f){JPlaylist.next();}},previous:{key:177,fn:function(f){JPlaylist.previous();}},volumeUp:{key:38,fn:function(f){return false;}},volumeDown:{key:40,fn:function(f){return false;}}},timeupdate:function(event){myjPlayer=event.jPlayer;if(!ignore_timeupdate&&JPready){myControl.progress.slider("value",event.jPlayer.status.currentPercentAbsolute);$(event.jPlayer.options.cssSelectorAncestor+' .allbits').stop().animate({'width':event.jPlayer.status.currentPercentAbsolute+'%'},'fast');}
if(myjPlayer.status.currentTime!=0){setCookie('linerTime',myjPlayer.status.currentTime);setCookie('linerSelected',JPlaylist.current);}}});var myControl={progress:$(this).find(".jp-play-slider"),volume:$(this).find(".jp-volume-slider")};function setSlides(event){myControl.progress.slider({animate:'fast',max:100,range:"min",step:0.1,value:0,slide:function(e,ui){var sp=myjPlayer.status.seekPercent;var value=ui.value;if(sp>0){if(fixFlash_mp4){ignore_timeupdate=true;clearTimeout(fixFlash_mp4_id);fixFlash_mp4_id=setTimeout(function(){ignore_timeupdate=false;},1000);}
$(JPlaylist.cssSelector.jPlayer).jPlayer("playHead",value*(100/sp));}else{setTimeout(function(){myControl.progress.slider("value",0);},0);}}});myControl.volume.slider({animate:true,max:1,range:"min",step:0.01,value:myjPlayer.options.volume,slide:function(e,ui){var value=ui.value;$(JPlaylist.cssSelector.jPlayer).jPlayer("option","muted",false);$(JPlaylist.cssSelector.jPlayer).jPlayer("option","volume",value);}});}
function rebuildPl(event){var i=-1;var tpl='';$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-playlist li").each(function(){tpl='\
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDhGOTczMkUyNUY4MTFFNEJDNDdFMTBDNjc0MDA0NDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDhGOTczMkYyNUY4MTFFNEJDNDdFMTBDNjc0MDA0NDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowOEY5NzMyQzI1RjgxMUU0QkM0N0UxMEM2NzQwMDQ0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowOEY5NzMyRDI1RjgxMUU0QkM0N0UxMEM2NzQwMDQ0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq6fqRoAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC" class="new-jp-cover">\
     <div class="info">\
       <h6><a class="new-jp-title">No Title</a></h6>\
       <a class="new-jp-artist" data-cd="">No Band</a>\
     </div>\
     <div class="clr"></div>\
     <div class="controls">\
       <a class="playBtn"></a>\
     </div>\
    ';i++;$(this).html(tpl);$(this).data('i',i);setID3orTags(event,i);});$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-playlist li, "+JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-play, "+JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-pause").unbind('click',goPlaying).bind('click',goPlaying);$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .new-jp-artist').text($(event.jPlayer.options.cssSelectorAncestor+' .playlist ul li:nth-child('+(selected+1)+') .new-jp-artist').text());$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .jp-title').text($(event.jPlayer.options.cssSelectorAncestor+' .playlist ul li:nth-child('+(selected+1)+') .new-jp-title').text());$(event.jPlayer.options.cssSelectorAncestor+' .nowPlaying .new-jp-cd').text($(event.jPlayer.options.cssSelectorAncestor+' .playlist ul li:nth-child('+(selected+1)+') .new-jp-artist').data('cd'));}
function setID3orTags(event,i){var tags=false;var thisLi=$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-playlist li:nth-child("+(i+1)+")");if(JPlaylist.playlist[i].cover){thisLi.find('.new-jp-cover').attr('src',JPlaylist.playlist[i].cover);}else{thisLi.find('.new-jp-cover').addClass('noCover');}
if(JPlaylist.playlist[i].artist){thisLi.find('.new-jp-artist').text(JPlaylist.playlist[i].artist);}
if(JPlaylist.playlist[i].title){thisLi.find('.new-jp-title').text(JPlaylist.playlist[i].title);}
if(JPlaylist.playlist[i].album){thisLi.find('.new-jp-artist').data('cd',JPlaylist.playlist[i].album);}else{thisLi.find('.new-jp-artist').data('cd','Unknown album');}
if(!(JPlaylist.playlist[i].title&&JPlaylist.playlist[i].artist&&JPlaylist.playlist[i].cover)){ID3.loadTags(JPlaylist.playlist[i].mp3,function(){tags=ID3.getAllTags(JPlaylist.playlist[i].mp3);if(!JPlaylist.playlist[i].artist&&tags.artist){thisLi.find('.new-jp-artist').text(tags.artist);}
if(!JPlaylist.playlist[i].title&&tags.title){thisLi.find('.new-jp-title').text(tags.title);}
if(JPlaylist.playlist[i].album){thisLi.find('.new-jp-artist').data('cd',JPlaylist.playlist[i].album);}else{if(tags.album){thisLi.find('.new-jp-artist').data('cd',tags.album);}else{thisLi.find('.new-jp-artist').data('cd','Unknown album');}}
if(!JPlaylist.playlist[i].cover){var image=tags.picture;if(image){var base64String="";for(var j=0;j<image.data.length;j++){base64String+=String.fromCharCode(image.data[j]);}
var base64="data:"+image.format+";base64,"+window.btoa(base64String);thisLi.find('.new-jp-cover').attr('src',base64);thisLi.find('.new-jp-cover').removeClass('noCover');}else{thisLi.find('.new-jp-cover').addClass('noCover');}}},{tags:["title","artist","album","picture"]});}}
$(JPlaylist.cssSelector.cssSelectorAncestor+" .new-jp-next").click(function(){JPlaylist.next();});$(JPlaylist.cssSelector.cssSelectorAncestor+" .new-jp-previous").click(function(){JPlaylist.previous();});function looper(){JPlaylist.play();}
function looperOff(){JPlaylist.next();}
$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-repeat").click(function(){$(JPlaylist.cssSelector.jPlayer).unbind($.jPlayer.event.ended,looper).unbind($.jPlayer.event.ended,looperOff).bind($.jPlayer.event.ended,looper);$(JPlaylist.cssSelector.jPlayer).jPlayer("option","loop",true);});$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-repeat-off").click(function(){$(JPlaylist.cssSelector.jPlayer).unbind($.jPlayer.event.ended,looper).unbind($.jPlayer.event.ended,looperOff).bind($.jPlayer.event.ended,looperOff);$(JPlaylist.cssSelector.jPlayer).jPlayer("option","loop",false);});$(JPlaylist.cssSelector.jPlayer).bind($.jPlayer.event.play,function(){setCookie('linerPlay',1);$(JPlaylist.cssSelector.cssSelectorAncestor+" .playlist li").removeClass('playing');$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-playlist li:nth-child("+(JPlaylist.current+1)+")").addClass('playing');$(JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-play").addClass('playing').hide();$(JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-pause").show().addClass('playing');});$(JPlaylist.cssSelector.jPlayer).bind($.jPlayer.event.pause,function(){setCookie('linerPlay',0);$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-playlist li:nth-child("+(JPlaylist.current+1)+")").removeClass('playing');$(JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-pause").removeClass('playing').hide();$(JPlaylist.cssSelector.cssSelectorAncestor+" .playControls .new-jp-play").show().removeClass('playing');});function shuffler(){JPlaylist.playlist.sort(function(){return 0.5-Math.random();});if(options.continuous){setCookie('linerPlaylist',JSON.stringify(JPlaylist.playlist));}
JPlaylist.shuffled=true;rebuild=true;};function shufflerOff(){JPlaylist._originalPlaylist();if(options.continuous){setCookie('linerPlaylist',JSON.stringify(JPlaylist.playlist));}
rebuild=true;}
$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-shuffle").click(function(){shuffler();});$(JPlaylist.cssSelector.cssSelectorAncestor+" .jp-shuffle-off").click(function(){shufflerOff();});function goPlaying(event){if($(this).hasClass('playing')){$(JPlaylist.cssSelector.jPlayer).jPlayer("pause");}else{JPlaylist.play($(this).data('i'));$(JPlaylist.cssSelector.cssSelectorAncestor+" .playlist li").removeClass('playing');}}
function makebits(event){$(myjPlayer.options.cssSelectorAncestor+' .allbits').stop().css('width',0).empty();var countpix=Math.round(screen.width/2);var i=0;while(i<countpix){i++;heigth=Math.round(Math.random()*10)+4;minustop=Math.floor(6-(heigth-1)/2)+1;$(myjPlayer.options.cssSelectorAncestor+' .allbits').append('<div class="bit" style="margin-top:'+minustop+'px; height:'+heigth+'px;" ></div>');}}};return this.each(linerPlayer);};})(jQuery);var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0
input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+
this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+
this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
function setCookie(c_name,value){var exdate=new Date();var exdays=1;exdate.setDate(exdate.getDate()+exdays);var c_value=escape(value)+((exdays==null)?"":"; expires="+exdate.toUTCString()+"; path=/;");document.cookie=c_name+"="+c_value;}
function getCookie(c_name){var c_value=document.cookie;var c_start=c_value.indexOf(" "+c_name+"=");if(c_start==-1){c_start=c_value.indexOf(c_name+"=");}
if(c_start==-1){c_value=null;}else{c_start=c_value.indexOf("=",c_start)+1;var c_end=c_value.indexOf(";",c_start);if(c_end==-1){c_end=c_value.length;}
c_value=unescape(c_value.substring(c_start,c_end));}
return c_value;};
jQuery(function($){riachoLinerPlayer=jQuery('body').linerPlayer({firstPlaying:0,autoplay:false,shuffle:false,veryThin:false,slideAlbumsName:false,nowplaying2title:true,roundedCorners:false,accentColor:"#008DDE",pluginPath:"../liner/js",playlist:[]});});

/**
 * jQuery.tagcanvas 2.4
 * For more information, please contact <graham@goat1000.com>
 */
(function (ah) {
    var I, G, H = Math.abs, ab = Math.sin, u = Math.cos, q = Math.max, au = Math.min, ai = Math.ceil, B = Math.sqrt, ak = Math.pow, f = {}, h = {}, k = {0: "0,", 1: "17,", 2: "34,", 3: "51,", 4: "68,", 5: "85,", 6: "102,", 7: "119,", 8: "136,", 9: "153,", a: "170,", A: "170,", b: "187,", B: "187,", c: "204,", C: "204,", d: "221,", D: "221,", e: "238,", E: "238,", f: "255,", F: "255,"}, v, b, M, aw, D, ax, A = document, n, a = {};
    for (I = 0; I < 256; ++I) {
        G = I.toString(16);
        if (I < 16) {
            G = "0" + G
        }
        h[G] = h[G.toUpperCase()] = I.toString() + ","
    }
    function ac(i) {
        return typeof i != "undefined"
    }
    function E(i) {
        return typeof i == "object" && i != null
    }
    function am(i, j, ay) {
        return isNaN(i) ? ay : au(ay, q(j, i))
    }
    function aq() {
        return false
    }
    function C() {
        return new Date().valueOf()
    }
    function y(ay, aB) {
        var j = [], az = ay.length, aA;
        for (aA = 0; aA < az; ++aA) {
            j.push(ay[aA])
        }
        j.sort(aB);
        return j
    }
    function ag(j) {
        var az = j.length - 1, ay, aA;
        while (az) {
            aA = ~~(Math.random() * az);
            ay = j[az];
            j[az] = j[aA];
            j[aA] = ay;
            --az
        }
    }
    function Y(i, ay, j) {
        this.x = i;
        this.y = ay;
        this.z = j
    }
    D = Y.prototype;
    D.length = function () {
        return B(this.x * this.x + this.y * this.y + this.z * this.z)
    };
    D.dot = function (i) {
        return this.x * i.x + this.y * i.y + this.z * i.z
    };
    D.cross = function (j) {
        var i = this.y * j.z - this.z * j.y, az = this.z * j.x - this.x * j.z, ay = this.x * j.y - this.y * j.x;
        return new Y(i, az, ay)
    };
    D.angle = function (j) {
        var i = this.dot(j), ay;
        if (i == 0) {
            return Math.PI / 2
        }
        ay = i / (this.length() * j.length());
        if (ay >= 1) {
            return 0
        }
        if (ay <= -1) {
            return Math.PI
        }
        return Math.acos(ay)
    };
    D.unit = function () {
        var i = this.length();
        return new Y(this.x / i, this.y / i, this.z / i)
    };
    function ad(ay, j) {
        j = j * Math.PI / 180;
        ay = ay * Math.PI / 180;
        var i = ab(ay) * u(j), aA = -ab(j), az = -u(ay) * u(j);
        return new Y(i, aA, az)
    }
    function N(i) {
        this[1] = {1: i[0], 2: i[1], 3: i[2]};
        this[2] = {1: i[3], 2: i[4], 3: i[5]};
        this[3] = {1: i[6], 2: i[7], 3: i[8]}
    }
    aw = N.prototype;
    N.Identity = function () {
        return new N([1, 0, 0, 0, 1, 0, 0, 0, 1])
    };
    N.Rotation = function (az, i) {
        var j = ab(az), ay = u(az), aA = 1 - ay;
        return new N([ay + ak(i.x, 2) * aA, i.x * i.y * aA - i.z * j, i.x * i.z * aA + i.y * j, i.y * i.x * aA + i.z * j, ay + ak(i.y, 2) * aA, i.y * i.z * aA - i.x * j, i.z * i.x * aA - i.y * j, i.z * i.y * aA + i.x * j, ay + ak(i.z, 2) * aA])
    };
    aw.mul = function (ay) {
        var az = [], aC, aB, aA = (ay.xform ? 1 : 0);
        for (aC = 1; aC <= 3; ++aC) {
            for (aB = 1; aB <= 3; ++aB) {
                if (aA) {
                    az.push(this[aC][1] * ay[1][aB] + this[aC][2] * ay[2][aB] + this[aC][3] * ay[3][aB])
                } else {
                    az.push(this[aC][aB] * ay)
                }
            }
        }
        return new N(az)
    };
    aw.xform = function (ay) {
        var j = {}, i = ay.x, aA = ay.y, az = ay.z;
        j.x = i * this[1][1] + aA * this[2][1] + az * this[3][1];
        j.y = i * this[1][2] + aA * this[2][2] + az * this[3][2];
        j.z = i * this[1][3] + aA * this[2][3] + az * this[3][3];
        return j
    };
    function o(az, aB, aG, aD) {
        var aC, aF, j, aE, aH = [], aA = Math.PI * (3 - B(5)), ay = 2 / az;
        for (aC = 0; aC < az; ++aC) {
            aF = aC * ay - 1 + (ay / 2);
            j = B(1 - aF * aF);
            aE = aC * aA;
            aH.push([u(aE) * j * aB, aF * aG, ab(aE) * j * aD])
        }
        return aH
    }
    function R(aA, ay, aD, aJ, aH) {
        var aI, aK = [], aB = Math.PI * (3 - B(5)), az = 2 / aA, aG, aF, aE, aC;
        for (aG = 0; aG < aA; ++aG) {
            aF = aG * az - 1 + (az / 2);
            aI = aG * aB;
            aE = u(aI);
            aC = ab(aI);
            aK.push(ay ? [aF * aD, aE * aJ, aC * aH] : [aE * aD, aF * aJ, aC * aH])
        }
        return aK
    }
    function J(ay, az, aC, aI, aG, aE) {
        var aH, aJ = [], aA = Math.PI * 2 / az, aF, aD, aB;
        for (aF = 0; aF < az; ++aF) {
            aH = aF * aA;
            aD = u(aH);
            aB = ab(aH);
            aJ.push(ay ? [aE * aC, aD * aI, aB * aG] : [aD * aC, aE * aI, aB * aG])
        }
        return aJ
    }
    function af(az, i, j, ay) {
        return R(az, 0, i, j, ay)
    }
    function al(az, i, j, ay) {
        return R(az, 1, i, j, ay)
    }
    function c(aA, i, j, ay, az) {
        az = isNaN(az) ? 0 : az * 1;
        return J(0, aA, i, j, ay, az)
    }
    function l(aA, i, j, ay, az) {
        az = isNaN(az) ? 0 : az * 1;
        return J(1, aA, i, j, ay, az)
    }
    function Q(aB, i) {
        var aA = aB, az, ay, j = (i * 1).toPrecision(3) + ")";
        if (aB[0] === "#") {
            if (!f[aB]) {
                if (aB.length === 4) {
                    f[aB] = "rgba(" + k[aB[1]] + k[aB[2]] + k[aB[3]]
                } else {
                    f[aB] = "rgba(" + h[aB.substr(1, 2)] + h[aB.substr(3, 2)] + h[aB.substr(5, 2)]
                }
            }
            aA = f[aB] + j
        } else {
            if (aB.substr(0, 4) === "rgb(" || aB.substr(0, 4) === "hsl(") {
                aA = (aB.replace("(", "a(").replace(")", "," + j))
            } else {
                if (aB.substr(0, 5) === "rgba(" || aB.substr(0, 5) === "hsla(") {
                    az = aB.lastIndexOf(",") + 1, ay = aB.indexOf(")");
                    i *= parseFloat(aB.substring(az, ay));
                    aA = aB.substr(0, az) + i.toPrecision(3) + ")"
                }
            }
        }
        return aA
    }
    function L(i, j) {
        if (window.G_vmlCanvasManager) {
            return null
        }
        var ay = A.createElement("canvas");
        ay.width = i;
        ay.height = j;
        return ay
    }
    function ae() {
        var j = L(3, 3), az, ay;
        if (!j) {
            return false
        }
        az = j.getContext("2d");
        az.strokeStyle = "#000";
        az.shadowColor = "#fff";
        az.shadowBlur = 3;
        az.globalAlpha = 0;
        az.strokeRect(2, 2, 2, 2);
        az.globalAlpha = 1;
        ay = az.getImageData(2, 2, 1, 1);
        j = null;
        return(ay.data[0] > 0)
    }
    function g(aF, j) {
        var ay = 1024, aB = aF.weightGradient, aA, aD, az, aE, aC;
        if (aF.gCanvas) {
            aD = aF.gCanvas.getContext("2d")
        } else {
            aF.gCanvas = aA = L(ay, 1);
            if (!aA) {
                return null
            }
            aD = aA.getContext("2d");
            aE = aD.createLinearGradient(0, 0, ay, 0);
            for (az in aB) {
                aE.addColorStop(1 - az, aB[az])
            }
            aD.fillStyle = aE;
            aD.fillRect(0, 0, ay, 1)
        }
        aC = aD.getImageData(~~((ay - 1) * j), 0, 1, 1).data;
        return"rgba(" + aC[0] + "," + aC[1] + "," + aC[2] + "," + (aC[3] / 255) + ")"
    }
    function T(aH, aA, j, aJ, aB, aG, aC, az, aF, aI) {
        var aE = aB + (aC || 0) + (az && az[0] < 0 ? H(az[0]) : 0), ay = aB + (aC || 0) + (az && az[1] < 0 ? H(az[1]) : 0), aD, aK;
        aH.font = aA;
        aH.textBaseline = "top";
        aH.fillStyle = j;
        aG && (aH.shadowColor = aG);
        aC && (aH.shadowBlur = aC);
        az && (aH.shadowOffsetX = az[0], aH.shadowOffsetY = az[1]);
        for (aD = 0; aD < aJ.length; ++aD) {
            aK = aI ? (aF - aI[aD]) / 2 : 0;
            aH.fillText(aJ[aD], aE + aK, ay);
            ay += parseInt(aA)
        }
    }
    function aj(aC, i, aB, j, az, aA, ay) {
        if (aA) {
            aC.beginPath();
            aC.moveTo(i, aB + az - aA);
            aC.arcTo(i, aB, i + aA, aB, aA);
            aC.arcTo(i + j, aB, i + j, aB + aA, aA);
            aC.arcTo(i + j, aB + az, i + j - aA, aB + az, aA);
            aC.arcTo(i, aB + az, i, aB + az - aA, aA);
            aC.closePath();
            aC[ay ? "stroke" : "fill"]()
        } else {
            aC[ay ? "strokeRect" : "fillRect"](i, aB, j, az)
        }
    }
    function t(aC, aK, aE, aP, aF, aM, aD, aN, aL, aJ, i, aH, aB, aI, aR) {
        var az = aE + H(i[0]) + 2 * (aJ + aH) + aN, aG = aP + H(i[1]) + 2 * (aJ + aH) + aN, aA, aS, aQ, aO, ay, j;
        aA = L(az, aG);
        if (!aA) {
            return null
        }
        aQ = ay = aN / 2;
        aO = az - aN;
        j = aG - aN;
        aH += aQ;
        aS = aA.getContext("2d");
        if (aM) {
            aS.fillStyle = aM;
            aj(aS, aQ, ay, aO, j, aB)
        }
        if (aN) {
            aS.strokeStyle = aD;
            aS.lineWidth = aN;
            aj(aS, aQ, ay, aO, j, aB, true)
        }
        T(aS, aK, aF, aC, aH, aL, aJ, i, aI, aR);
        return aA
    }
    function ar(aI, ay, aH, aC, aN, aJ, aD) {
        var aE = aI.width + (2 * aN) + aH, j = aI.height + (2 * aN) + aH, aG = L(aE, j), aK, aA, aM, az, aL, aF, aB;
        if (!aG) {
            return null
        }
        aA = aM = aH / 2;
        az = aE - aH;
        aL = j - aH;
        aN += aA;
        aK = aG.getContext("2d");
        if (ay) {
            aK.fillStyle = ay;
            aj(aK, aA, aM, az, aL, aJ)
        }
        if (aH) {
            aK.strokeStyle = aC;
            aK.lineWidth = aH;
            aj(aK, aA, aM, az, aL, aJ, true)
        }
        if (aD) {
            aF = L(aE, j);
            aB = aF.getContext("2d");
            aB.drawImage(aI, aN, aN, aI.width, aI.height);
            aB.globalCompositeOperation = "source-in";
            aB.fillStyle = aC;
            aB.fillRect(0, 0, aE, j);
            aB.globalCompositeOperation = "destination-over";
            aB.drawImage(aG, 0, 0);
            aB.globalCompositeOperation = "source-over";
            aK.drawImage(aF, 0, 0)
        } else {
            aK.drawImage(aI, aN, aN, aI.width, aI.height)
        }
        return aG
    }
    function V(aD, aG, aH, az) {
        var aI = H(az[0]), aE = H(az[1]), aA = aD.width + (aI > aH ? aI + aH : aH * 2), j = aD.height + (aE > aH ? aE + aH : aH * 2), aC = (aH || 0) + (az[0] < 0 ? aI : 0), ay = (aH || 0) + (az[1] < 0 ? aE : 0), aB, aF;
        aB = L(aA, j);
        if (!aB) {
            return null
        }
        aF = aB.getContext("2d");
        aG && (aF.shadowColor = aG);
        aH && (aF.shadowBlur = aH);
        az && (aF.shadowOffsetX = az[0], aF.shadowOffsetY = az[1]);
        aF.drawImage(aD, aC, ay, aD.width, aD.height);
        return aB
    }
    function r(aK, aC, aI) {
        var aJ = parseInt(aK.toString().length * aI), aB = parseInt(aI * 2 * aK.length), az = L(aJ, aB), aF, j, aA, aE, aH, aG, ay, aD;
        if (!az) {
            return null
        }
        aF = az.getContext("2d");
        aF.fillStyle = "#000";
        aF.fillRect(0, 0, aJ, aB);
        T(aF, aI + "px " + aC, "#fff", aK, 0, 0, 0, []);
        j = aF.getImageData(0, 0, aJ, aB);
        aA = j.width;
        aE = j.height;
        aD = {min: {x: aA, y: aE}, max: {x: -1, y: -1}};
        for (aG = 0; aG < aE; ++aG) {
            for (aH = 0; aH < aA; ++aH) {
                ay = (aG * aA + aH) * 4;
                if (j.data[ay + 1] > 0) {
                    if (aH < aD.min.x) {
                        aD.min.x = aH
                    }
                    if (aH > aD.max.x) {
                        aD.max.x = aH
                    }
                    if (aG < aD.min.y) {
                        aD.min.y = aG
                    }
                    if (aG > aD.max.y) {
                        aD.max.y = aG
                    }
                }
            }
        }
        if (aA != aJ) {
            aD.min.x *= (aJ / aA);
            aD.max.x *= (aJ / aA)
        }
        if (aE != aB) {
            aD.min.y *= (aJ / aE);
            aD.max.y *= (aJ / aE)
        }
        az = null;
        return aD
    }
    function m(i) {
        return"'" + i.replace(/(\'|\")/g, "").replace(/\s*,\s*/g, "', '") + "'"
    }
    function X(i, j, ay) {
        ay = ay || A;
        if (ay.addEventListener) {
            ay.addEventListener(i, j, false)
        } else {
            ay.attachEvent("on" + i, j)
        }
    }
    function an(aB, aE, aA, ay) {
        var aC = ay.imageScale, j, aD, az;
        if (!aE.complete) {
            return X("load", function () {
                an(aB, aE, aA, ay)
            }, aE)
        }
        if (!aB.complete) {
            return X("load", function () {
                an(aB, aE, aA, ay)
            }, aB)
        }
        aE.width = aE.width;
        aE.height = aE.height;
        if (aC) {
            aB.width = aE.width * aC;
            aB.height = aE.height * aC
        }
        aA.w = aB.width;
        aA.h = aB.height;
        if (ay.txtOpt) {
            if (ay.shadow) {
                j = V(aB, ay.shadow, ay.shadowBlur, ay.shadowOffset);
                if (j) {
                    aA.image = j;
                    aA.w = j.width;
                    aA.h = j.height
                }
            }
            if (ay.bgColour || ay.bgOutlineThickness) {
                aD = ay.bgColour == "tag" ? U(aA.a, "background-color") : ay.bgColour;
                az = ay.bgOutline == "tag" ? U(aA.a, "color") : (ay.bgOutline || ay.textColour);
                j = ar(aA.image, aD, ay.bgOutlineThickness, az, ay.padding, ay.bgRadius);
                if (ay.outlineMethod == "colour") {
                    aA.oimage = ar(aA.image, aD, ay.bgOutlineThickness, ay.outlineColour, ay.padding, ay.bgRadius, true)
                }
                if (j) {
                    aA.image = j;
                    aA.w = j.width;
                    aA.h = j.height
                }
            }
        }
    }
    function U(az, ay) {
        var j = A.defaultView, i = ay.replace(/\-([a-z])/g, function (aA) {
            return aA.charAt(1).toUpperCase()
        });
        return(j && j.getComputedStyle && j.getComputedStyle(az, null).getPropertyValue(ay)) || (az.currentStyle && az.currentStyle[i])
    }
    function s(ay, j) {
        var i = 1, az;
        if (ay.weightFrom) {
            i = 1 * (j.getAttribute(ay.weightFrom) || ay.textHeight)
        } else {
            if (az = U(j, "font-size")) {
                i = (az.indexOf("px") > -1 && az.replace("px", "") * 1) || (az.indexOf("pt") > -1 && az.replace("pt", "") * 1.25) || az * 3.3
            } else {
                ay.weight = false
            }
        }
        return i
    }
    function e(i) {
        return i.target && ac(i.target.id) ? i.target.id : i.srcElement.parentNode.id
    }
    function O(aA, aB) {
        var az, ay, i = parseInt(U(aB, "width")) / aB.width, j = parseInt(U(aB, "height")) / aB.height;
        if (ac(aA.offsetX)) {
            az = {x: aA.offsetX, y: aA.offsetY}
        } else {
            ay = W(aB.id);
            if (ac(aA.changedTouches)) {
                aA = aA.changedTouches[0]
            }
            if (aA.pageX) {
                az = {x: aA.pageX - ay.x, y: aA.pageY - ay.y}
            }
        }
        if (az && i && j) {
            az.x /= i;
            az.y /= j
        }
        return az
    }
    function z(ay) {
        var j = ay.target || ay.fromElement.parentNode, i = w.tc[j.id];
        if (i) {
            i.mx = i.my = -1;
            i.UnFreeze();
            i.EndDrag()
        }
    }
    function Z(aC) {
        var az, ay = w, j, aB, aA = e(aC);
        for (az in ay.tc) {
            j = ay.tc[az];
            if (j.tttimer) {
                clearTimeout(j.tttimer);
                j.tttimer = null
            }
        }
        if (aA && ay.tc[aA]) {
            j = ay.tc[aA];
            if (aB = O(aC, j.canvas)) {
                j.mx = aB.x;
                j.my = aB.y;
                j.Drag(aC, aB)
            }
            j.drawn = 0
        }
    }
    function x(az) {
        var j = w, i = A.addEventListener ? 0 : 1, ay = e(az);
        if (ay && az.button == i && j.tc[ay]) {
            j.tc[ay].BeginDrag(az)
        }
    }
    function av(aA) {
        var ay = w, j = A.addEventListener ? 0 : 1, az = e(aA), i;
        if (az && aA.button == j && ay.tc[az]) {
            i = ay.tc[az];
            Z(aA);
            if (!i.EndDrag() && !i.touched) {
                i.Clicked(aA)
            }
        }
    }
    function P(ay) {
        var i = w, j = e(ay);
        if (j && ay.changedTouches && i.tc[j]) {
            i.tc[j].touched = 1;
            i.tc[j].BeginDrag(ay)
        }
    }
    function p(ay) {
        var i = w, j = e(ay);
        if (j && ay.changedTouches && i.tc[j]) {
            ap(ay);
            if (!i.tc[j].EndDrag()) {
                i.tc[j].Draw();
                i.tc[j].Clicked(ay)
            }
        }
    }
    function ap(aC) {
        var az, ay = w, j, aB, aA = e(aC);
        for (az in ay.tc) {
            j = ay.tc[az];
            if (j.tttimer) {
                clearTimeout(j.tttimer);
                j.tttimer = null
            }
        }
        if (aA && ay.tc[aA] && aC.changedTouches) {
            j = ay.tc[aA];
            if (aB = O(aC, j.canvas)) {
                j.mx = aB.x;
                j.my = aB.y;
                j.Drag(aC, aB)
            }
            j.drawn = 0
        }
    }
    function aa(ay) {
        var i = w, j = e(ay);
        if (j && i.tc[j]) {
            ay.cancelBubble = true;
            ay.returnValue = false;
            ay.preventDefault && ay.preventDefault();
            i.tc[j].Wheel((ay.wheelDelta || ay.detail) > 0)
        }
    }
    function K(aA) {
        var j = w.tc, az, ay;
        aA = aA || C();
        for (az in j) {
            ay = j[az].interval;
            j[az].Draw(aA)
        }
        w.NextFrame(ay)
    }
    function W(ay) {
        var aB = A.getElementById(ay), i = aB.getBoundingClientRect(), aE = A.documentElement, aC = A.body, aD = window, az = aD.pageXOffset || aE.scrollLeft, aF = aD.pageYOffset || aE.scrollTop, aA = aE.clientLeft || aC.clientLeft, j = aE.clientTop || aC.clientTop;
        return{x: i.left + az - aA, y: i.top + aF - j}
    }
    function S(j, az, aA, ay) {
        var i = j.radius * j.z1 / (j.z1 + j.z2 + az.z);
        return{x: az.x * i * aA, y: az.y * i * ay, z: az.z, w: (j.z1 - az.z) / j.z2}
    }
    function at(i) {
        this.e = i;
        this.br = 0;
        this.line = [];
        this.text = [];
        this.original = i.innerText || i.textContent
    }
    ax = at.prototype;
    ax.Lines = function (aA) {
        var az = aA ? 1 : 0, aB, j, ay;
        aA = aA || this.e;
        aB = aA.childNodes;
        j = aB.length;
        for (ay = 0; ay < j; ++ay) {
            if (aB[ay].nodeName == "BR") {
                this.text.push(this.line.join(" "));
                this.br = 1
            } else {
                if (aB[ay].nodeType == 3) {
                    if (this.br) {
                        this.line = [aB[ay].nodeValue];
                        this.br = 0
                    } else {
                        this.line.push(aB[ay].nodeValue)
                    }
                } else {
                    this.Lines(aB[ay])
                }
            }
        }
        az || this.br || this.text.push(this.line.join(" "));
        return this.text
    };
    ax.SplitWidth = function (ay, aF, aC, aB) {
        var aA, az, aE, aD = [];
        aF.font = aB + "px " + aC;
        for (aA = 0; aA < this.text.length; ++aA) {
            aE = this.text[aA].split(/\s+/);
            this.line = [aE[0]];
            for (az = 1; az < aE.length; ++az) {
                if (aF.measureText(this.line.join(" ") + " " + aE[az]).width > ay) {
                    aD.push(this.line.join(" "));
                    this.line = [aE[az]]
                } else {
                    this.line.push(aE[az])
                }
            }
            aD.push(this.line.join(" "))
        }
        return this.text = aD
    };
    function F(i, j) {
        this.ts = C();
        this.tc = i;
        this.tag = j;
        this.x = this.y = this.w = this.h = this.sc = 1;
        this.z = 0;
        this.Draw = i.pulsateTo < 1 && i.outlineMethod != "colour" ? this.DrawPulsate : this.DrawSimple;
        this.radius = i.outlineRadius | 0;
        this.SetMethod(i.outlineMethod)
    }
    v = F.prototype;
    v.SetMethod = function (ay) {
        var j = {block: ["PreDraw", "DrawBlock"], colour: ["PreDraw", "DrawColour"], outline: ["PostDraw", "DrawOutline"], classic: ["LastDraw", "DrawOutline"], none: ["LastDraw"]}, i = j[ay] || j.outline;
        if (ay == "none") {
            this.Draw = function () {
                return 1
            }
        } else {
            this.drawFunc = this[i[1]]
        }
        this[i[0]] = this.Draw
    };
    v.Update = function (aE, aD, aF, aA, aB, aC, az, i) {
        var j = this.tc.outlineOffset, ay = 2 * j;
        this.x = aB * aE + az - j;
        this.y = aB * aD + i - j;
        this.w = aB * aF + ay;
        this.h = aB * aA + ay;
        this.sc = aB;
        this.z = aC
    };
    v.DrawOutline = function (aB, i, aA, j, ay, az) {
        aB.strokeStyle = az;
        aj(aB, i, aA, j, ay, this.radius, true)
    };
    v.DrawColour = function (az, aC, aA, aD, ay, i, aE, j, aB) {
        if (aE.oimage) {
            aE.alpha = 1;
            aE.Draw(az, j, aB, aE.oimage);
            return 1
        }
        return this[aE.image ? "DrawColourImage" : "DrawColourText"](az, aC, aA, aD, ay, i, aE, j, aB)
    };
    v.DrawColourText = function (aA, aD, aB, aE, ay, i, aF, j, aC) {
        var az = aF.colour;
        aF.colour = i;
        aF.alpha = 1;
        aF.Draw(aA, j, aC);
        aF.colour = az;
        return 1
    };
    v.DrawColourImage = function (aD, aG, aE, aH, aC, i, aK, j, aF) {
        var aI = aD.canvas, aA = ~~q(aG, 0), az = ~~q(aE, 0), aB = au(aI.width - aA, aH) + 0.5 | 0, aJ = au(aI.height - az, aC) + 0.5 | 0, ay;
        if (n) {
            n.width = aB, n.height = aJ
        } else {
            n = L(aB, aJ)
        }
        if (!n) {
            return this.SetMethod("outline")
        }
        ay = n.getContext("2d");
        ay.drawImage(aI, aA, az, aB, aJ, 0, 0, aB, aJ);
        aD.clearRect(aA, az, aB, aJ);
        aK.alpha = 1;
        aK.Draw(aD, j, aF);
        aD.setTransform(1, 0, 0, 1, 0, 0);
        aD.save();
        aD.beginPath();
        aD.rect(aA, az, aB, aJ);
        aD.clip();
        aD.globalCompositeOperation = "source-in";
        aD.fillStyle = i;
        aD.fillRect(aA, az, aB, aJ);
        aD.restore();
        aD.globalCompositeOperation = "destination-over";
        aD.drawImage(n, 0, 0, aB, aJ, aA, az, aB, aJ);
        aD.globalCompositeOperation = "source-over";
        return 1
    };
    v.DrawBlock = function (aB, i, aA, j, ay, az) {
        aB.fillStyle = az;
        aj(aB, i, aA, j, ay, this.radius)
    };
    v.DrawSimple = function (aA, i, j, az) {
        var ay = this.tc;
        aA.setTransform(1, 0, 0, 1, 0, 0);
        aA.strokeStyle = ay.outlineColour;
        aA.lineWidth = ay.outlineThickness;
        aA.shadowBlur = aA.shadowOffsetX = aA.shadowOffsetY = 0;
        aA.globalAlpha = 1;
        return this.drawFunc(aA, this.x, this.y, this.w, this.h, ay.outlineColour, i, j, az)
    };
    v.DrawPulsate = function (aB, i, j, az) {
        var aA = C() - this.ts, ay = this.tc;
        aB.setTransform(1, 0, 0, 1, 0, 0);
        aB.strokeStyle = ay.outlineColour;
        aB.lineWidth = ay.outlineThickness;
        aB.shadowBlur = aB.shadowOffsetX = aB.shadowOffsetY = 0;
        aB.globalAlpha = ay.pulsateTo + ((1 - ay.pulsateTo) * (0.5 + (u(2 * Math.PI * aA / (1000 * ay.pulsateTime)) / 2)));
        return this.drawFunc(aB, this.x, this.y, this.w, this.h, ay.outlineColour, i, j, az)
    };
    v.Active = function (ay, i, j) {
        return(i >= this.x && j >= this.y && i <= this.x + this.w && j <= this.y + this.h)
    };
    v.PreDraw = v.PostDraw = v.LastDraw = aq;
    function d(az, aK, aG, aJ, aH, aA, ay, aC, aI, aB, aF, j, aE, i) {
        var aD = az.ctxt;
        this.tc = az;
        this.image = aK.src ? aK : null;
        this.text = aK.src ? [] : aK;
        this.text_original = i;
        this.line_widths = [];
        this.title = aG.title || null;
        this.a = aG;
        this.position = new Y(aJ[0], aJ[1], aJ[2]);
        this.x = this.y = this.z = 0;
        this.w = aH;
        this.h = aA;
        this.colour = ay || az.textColour;
        this.bgColour = aC || az.bgColour;
        this.bgRadius = aI | 0;
        this.bgOutline = aB || this.colour;
        this.bgOutlineThickness = aF | 0;
        this.textFont = j || az.textFont;
        this.padding = aE | 0;
        this.weight = this.sc = this.alpha = 1;
        this.weighted = !az.weight;
        this.outline = new F(az, this);
        if (!this.image) {
            this.textHeight = az.textHeight;
            this.extents = r(this.text, this.textFont, this.textHeight);
            this.Measure(aD, az)
        }
        this.SetShadowColour = az.shadowAlpha ? this.SetShadowColourAlpha : this.SetShadowColourFixed;
        this.SetDraw(az)
    }
    b = d.prototype;
    b.EqualTo = function (ay) {
        var j = ay.getElementsByTagName("img");
        if (this.a.href != ay.href) {
            return 0
        }
        if (j.length) {
            return this.image.src == j[0].src
        }
        return(ay.innerText || ay.textContent) == this.text_original
    };
    b.SetDraw = function (i) {
        this.Draw = this.image ? (i.ie > 7 ? this.DrawImageIE : this.DrawImage) : this.DrawText;
        i.noSelect && (this.CheckActive = aq)
    };
    b.MeasureText = function (aB) {
        var az, ay = this.text.length, j = 0, aA;
        for (az = 0; az < ay; ++az) {
            this.line_widths[az] = aA = aB.measureText(this.text[az]).width;
            j = q(j, aA)
        }
        return j
    };
    b.Measure = function (aC, j) {
        this.h = this.extents ? this.extents.max.y + this.extents.min.y : this.textHeight;
        aC.font = this.font = this.textHeight + "px " + this.textFont;
        this.w = this.MeasureText(aC);
        if (j.txtOpt) {
            var az = j.txtScale, aA = az * this.textHeight, aB = aA + "px " + this.textFont, ay = [az * j.shadowOffset[0], az * j.shadowOffset[1]], i;
            aC.font = aB;
            i = this.MeasureText(aC);
            this.image = t(this.text, aB, i + az, (az * this.h) + az, this.colour, this.bgColour, this.bgOutline, az * this.bgOutlineThickness, j.shadow, az * j.shadowBlur, ay, az * this.padding, az * this.bgRadius, i, this.line_widths);
            if (j.outlineMethod == "colour") {
                this.oimage = t(this.text, aB, i + az, (az * this.h) + az, j.outlineColour, this.bgColour, j.outlineColour, az * this.bgOutlineThickness, j.shadow, az * j.shadowBlur, ay, az * this.padding, az * this.bgRadius, i, this.line_widths)
            }
            if (this.image) {
                this.w = this.image.width / az;
                this.h = this.image.height / az
            }
            this.SetDraw(j);
            j.txtOpt = !!this.image
        }
    };
    b.SetFont = function (i, j) {
        this.textFont = i;
        this.colour = j;
        this.extents = r(this.text, this.textFont, this.textHeight);
        this.Measure(this.tc.ctxt, this.tc)
    };
    b.SetWeight = function (i) {
        if (!this.text.length) {
            return
        }
        this.weight = i;
        this.Weight(this.tc.ctxt, this.tc);
        this.Measure(this.tc.ctxt, this.tc)
    };
    b.Weight = function (az, ay) {
        var j = this.weight, i = ay.weightMode;
        this.weighted = true;
        if (i == "colour" || i == "both") {
            this.colour = g(ay, (j - ay.min_weight) / (ay.max_weight - ay.min_weight))
        }
        if (i == "size" || i == "both") {
            if (ay.weightSizeMin > 0 && ay.weightSizeMax > ay.weightSizeMin) {
                this.textHeight = ay.weightSize * (ay.weightSizeMin + (ay.weightSizeMax - ay.weightSizeMin) * (j - ay.min_weight) / (ay.max_weight - ay.min_weight))
            } else {
                this.textHeight = j * ay.weightSize
            }
        }
        this.extents = r(this.text, this.textFont, this.textHeight)
    };
    b.SetShadowColourFixed = function (ay, j, i) {
        ay.shadowColor = j
    };
    b.SetShadowColourAlpha = function (ay, j, i) {
        ay.shadowColor = Q(j, i)
    };
    b.DrawText = function (aA, aD, az) {
        var aE = this.tc, aC = this.x, aB = this.y, aF = this.sc, j, ay;
        aA.globalAlpha = this.alpha;
        aA.fillStyle = this.colour;
        aE.shadow && this.SetShadowColour(aA, aE.shadow, this.alpha);
        aA.font = this.font;
        aC += aD / aF;
        aB += (az / aF) - (this.h / 2);
        for (j = 0; j < this.text.length; ++j) {
            ay = aC - (this.line_widths[j] / 2);
            aA.setTransform(aF, 0, 0, aF, aF * ay, aF * aB);
            aA.fillText(this.text[j], 0, 0);
            aB += this.textHeight
        }
    };
    b.DrawImage = function (aA, aH, az, aC) {
        var aE = this.x, aB = this.y, aI = this.sc, j = aC || this.image, aF = this.w, ay = this.h, aD = this.alpha, aG = this.shadow;
        aA.globalAlpha = aD;
        aG && this.SetShadowColour(aA, aG, aD);
        aE += (aH / aI) - (aF / 2);
        aB += (az / aI) - (ay / 2);
        aA.setTransform(aI, 0, 0, aI, aI * aE, aI * aB);
        aA.drawImage(j, 0, 0, aF, ay)
    };
    b.DrawImageIE = function (aA, aE, az) {
        var j = this.image, aF = this.sc, aD = j.width = this.w * aF, ay = j.height = this.h * aF, aC = (this.x * aF) + aE - (aD / 2), aB = (this.y * aF) + az - (ay / 2);
        aA.setTransform(1, 0, 0, 1, 0, 0);
        aA.globalAlpha = this.alpha;
        aA.drawImage(j, aC, aB)
    };
    b.Calc = function (i, ay) {
        var j, aB = this.tc, aA = aB.minBrightness, az = aB.maxBrightness, aC = aB.max_radius;
        j = i.xform(this.position);
        this.xformed = j;
        j = S(aB, j, aB.stretchX, aB.stretchY);
        this.x = j.x;
        this.y = j.y;
        this.z = j.z;
        this.sc = j.w;
        this.alpha = ay * am(aA + (az - aA) * (aC - this.z) / (2 * aC), 0, 1)
    };
    b.UpdateActive = function (aD, ay, aB) {
        var aA = this.outline, j = this.w, az = this.h, i = this.x - j / 2, aC = this.y - az / 2;
        aA.Update(i, aC, j, az, this.sc, this.z, ay, aB);
        return aA
    };
    b.CheckActive = function (aA, i, az) {
        var j = this.tc, ay = this.UpdateActive(aA, i, az);
        return ay.Active(aA, j.mx, j.my) ? ay : null
    };
    b.Clicked = function (aB) {
        var j = this.a, ay = j.target, az = j.href, i;
        if (ay != "" && ay != "_self") {
            if (self.frames[ay]) {
                self.frames[ay].document.location = az
            } else {
                try {
                    if (top.frames[ay]) {
                        top.frames[ay].document.location = az;
                        return
                    }
                } catch (aA) {
                }
                window.open(az, ay)
            }
            return
        }
        if (A.createEvent) {
            i = A.createEvent("MouseEvents");
            i.initMouseEvent("click", 1, 1, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
            if (!j.dispatchEvent(i)) {
                return
            }
        } else {
            if (j.fireEvent) {
                if (!j.fireEvent("onclick")) {
                    return
                }
            }
        }
        A.location = az
    };
    function w(aD, j, az) {
        var ay, aB, aC = A.getElementById(aD), aA = ["id", "class", "innerHTML"];
        if (!aC) {
            throw 0
        }
        if (ac(window.G_vmlCanvasManager)) {
            aC = window.G_vmlCanvasManager.initElement(aC);
            this.ie = parseFloat(navigator.appVersion.split("MSIE")[1])
        }
        if (aC && (!aC.getContext || !aC.getContext("2d").fillText)) {
            aB = A.createElement("DIV");
            for (ay = 0; ay < aA.length; ++ay) {
                aB[aA[ay]] = aC[aA[ay]]
            }
            aC.parentNode.insertBefore(aB, aC);
            aC.parentNode.removeChild(aC);
            throw 0
        }
        for (ay in w.options) {
            this[ay] = az && ac(az[ay]) ? az[ay] : (ac(w[ay]) ? w[ay] : w.options[ay])
        }
        this.canvas = aC;
        this.ctxt = aC.getContext("2d");
        this.z1 = 250 / this.depth;
        this.z2 = this.z1 / this.zoom;
        this.radius = au(aC.height, aC.width) * 0.0075;
        this.max_weight = 0;
        this.min_weight = 200;
        this.textFont = this.textFont && m(this.textFont);
        this.textHeight *= 1;
        this.pulsateTo = am(this.pulsateTo, 0, 1);
        this.minBrightness = am(this.minBrightness, 0, 1);
        this.maxBrightness = am(this.maxBrightness, this.minBrightness, 1);
        this.ctxt.textBaseline = "top";
        this.lx = (this.lock + "").indexOf("x") + 1;
        this.ly = (this.lock + "").indexOf("y") + 1;
        this.frozen = this.dx = this.dy = this.fixedAnim = this.touched = 0;
        this.fixedAlpha = 1;
        this.source = j || aD;
        this.transform = N.Identity();
        this.startTime = this.time = C();
        this.Animate = this.dragControl ? this.AnimateDrag : this.AnimatePosition;
        this.animTiming = (typeof w[this.animTiming] == "function" ? w[this.animTiming] : w.Smooth);
        if (this.shadowBlur || this.shadowOffset[0] || this.shadowOffset[1]) {
            this.ctxt.shadowColor = this.shadow;
            this.shadow = this.ctxt.shadowColor;
            this.shadowAlpha = ae()
        } else {
            delete this.shadow
        }
        this.Load();
        if (j && this.hideTags) {
            (function (i) {
                if (w.loaded) {
                    i.HideTags()
                } else {
                    X("load", function () {
                        i.HideTags()
                    }, window)
                }
            })(this)
        }
        this.yaw = this.initial ? this.initial[0] * this.maxSpeed : 0;
        this.pitch = this.initial ? this.initial[1] * this.maxSpeed : 0;
        if (this.tooltip) {
            if (this.tooltip == "native") {
                this.Tooltip = this.TooltipNative
            } else {
                this.Tooltip = this.TooltipDiv;
                if (!this.ttdiv) {
                    this.ttdiv = A.createElement("div");
                    this.ttdiv.className = this.tooltipClass;
                    this.ttdiv.style.position = "absolute";
                    this.ttdiv.style.zIndex = aC.style.zIndex + 1;
                    X("mouseover", function (i) {
                        i.target.style.display = "none"
                    }, this.ttdiv);
                    A.body.appendChild(this.ttdiv)
                }
            }
        } else {
            this.Tooltip = this.TooltipNone
        }
        if (!this.noMouse && !a[aD]) {
            X("mousemove", Z, aC);
            X("mouseout", z, aC);
            X("mouseup", av, aC);
            X("touchstart", P, aC);
            X("touchend", p, aC);
            X("touchcancel", p, aC);
            X("touchmove", ap, aC);
            if (this.dragControl) {
                X("mousedown", x, aC);
                X("selectstart", aq, aC)
            }
            if (this.wheelZoom) {
                X("mousewheel", aa, aC);
                X("DOMMouseScroll", aa, aC)
            }
            a[aD] = 1
        }
        w.started || (w.started = setTimeout(K, this.interval))
    }
    M = w.prototype;
    M.SourceElements = function () {
        if (A.querySelectorAll) {
            return A.querySelectorAll("#" + this.source)
        }
        return[A.getElementById(this.source)]
    };
    M.HideTags = function () {
        var ay = this.SourceElements(), j;
        for (j = 0; j < ay.length; ++j) {
            ay[j].style.display = "none"
        }
    };
    M.GetTags = function () {
        var aC = this.SourceElements(), aB, ay = [], aA, az;
        for (aA = 0; aA < aC.length; ++aA) {
            aB = aC[aA].getElementsByTagName("a");
            for (az = 0; az < aB.length; ++az) {
                ay.push(aB[az])
            }
        }
        return ay
    };
    M.CreateTag = function (aB, j) {
        var aE = aB.getElementsByTagName("img"), aA, aF, aD, ay, aC, az;
        j = j || [0, 0, 0];
        if (aE.length) {
            aA = new Image;
            aA.src = aE[0].src;
            aF = new d(this, aA, aB, j, 0, 0);
            an(aA, aE[0], aF, this);
            return aF
        }
        aD = new at(aB);
        aF = aD.Lines();
        ay = this.textFont || m(U(aB, "font-family"));
        if (this.splitWidth) {
            aF = aD.SplitWidth(this.splitWidth, this.ctxt, ay, this.textHeight)
        }
        aC = this.bgColour == "tag" ? U(aB, "background-color") : this.bgColour;
        az = this.bgOutline == "tag" ? U(aB, "color") : this.bgOutline;
        return new d(this, aF, aB, j, 2, this.textHeight + 2, this.textColour || U(aB, "color"), aC, this.bgRadius, az, this.bgOutlineThickness, ay, this.padding, aD.original)
    };
    M.UpdateTag = function (ay, i) {
        var az = this.textColour || U(i, "color"), j = this.textFont || m(U(i, "font-family"));
        ay.a = i;
        ay.title = i.title;
        if (ay.colour != az || ay.textFont != j) {
            ay.SetFont(j, az)
        }
    };
    M.Weight = function (az) {
        var ay = az.length, j, aA, aB = [];
        for (aA = 0; aA < ay; ++aA) {
            j = s(this, az[aA].a);
            if (j > this.max_weight) {
                this.max_weight = j
            }
            if (j < this.min_weight) {
                this.min_weight = j
            }
            aB.push(j)
        }
        if (this.max_weight > this.min_weight) {
            for (aA = 0; aA < ay; ++aA) {
                az[aA].SetWeight(aB[aA])
            }
        }
    };
    M.Load = function () {
        var aH = this.GetTags(), aD = [], aG, aC, az, ay, j, aA, aF, aB = [], aE = {sphere: o, vcylinder: af, hcylinder: al, vring: c, hring: l};
        if (aH.length) {
            aB.length = aH.length;
            for (aF = 0; aF < aH.length; ++aF) {
                aB[aF] = aF
            }
            this.shuffleTags && ag(aB);
            az = 100 * this.radiusx;
            ay = 100 * this.radiusy;
            j = 100 * this.radiusz;
            this.max_radius = q(az, q(ay, j));
            if (this.shapeArgs) {
                this.shapeArgs[0] = aH.length
            } else {
                aC = this.shape.toString().split(/[(),]/);
                aG = aC.shift();
                this.shape = aE[aG] || aE.sphere;
                this.shapeArgs = [aH.length, az, ay, j].concat(aC)
            }
            aA = this.shape.apply(this, this.shapeArgs);
            this.listLength = aH.length;
            for (aF = 0; aF < aH.length; ++aF) {
                aD.push(this.CreateTag(aH[aB[aF]], aA[aF]))
            }
            this.weight && this.Weight(aD, true)
        }
        this.taglist = aD
    };
    M.Update = function () {
        var aH = this.GetTags(), aG = [], aB = this.taglist, aI, aF = [], aD = [], az, aE, ay, aC, aA;
        if (!this.shapeArgs) {
            return this.Load()
        }
        if (aH.length) {
            ay = this.listLength = aH.length;
            aE = aB.length;
            for (aC = 0; aC < aE; ++aC) {
                aG.push(aB[aC]);
                aD.push(aC)
            }
            for (aC = 0; aC < ay; ++aC) {
                for (aA = 0, aI = 0; aA < aE; ++aA) {
                    if (aB[aA].EqualTo(aH[aC])) {
                        this.UpdateTag(aG[aA], aH[aC]);
                        aI = aD[aA] = -1
                    }
                }
                if (!aI) {
                    aF.push(aC)
                }
            }
            for (aC = 0, aA = 0; aC < aE; ++aC) {
                if (aD[aA] == -1) {
                    aD.splice(aA, 1)
                } else {
                    ++aA
                }
            }
            if (aD.length) {
                ag(aD);
                while (aD.length && aF.length) {
                    aC = aD.shift();
                    aA = aF.shift();
                    aG[aC] = this.CreateTag(aH[aA])
                }
                aD.sort(function (j, i) {
                    return j - i
                });
                while (aD.length) {
                    aG.splice(aD.pop(), 1)
                }
            }
            aA = aG.length / (aF.length + 1);
            aC = 0;
            while (aF.length) {
                aG.splice(ai(++aC * aA), 0, this.CreateTag(aH[aF.shift()]))
            }
            this.shapeArgs[0] = ay = aG.length;
            az = this.shape.apply(this, this.shapeArgs);
            for (aC = 0; aC < ay; ++aC) {
                aG[aC].position = new Y(az[aC][0], az[aC][1], az[aC][2])
            }
            this.weight && this.Weight(aG)
        }
        this.taglist = aG
    };
    M.SetShadow = function (i) {
        i.shadowBlur = this.shadowBlur;
        i.shadowOffsetX = this.shadowOffset[0];
        i.shadowOffsetY = this.shadowOffset[1]
    };
    M.Draw = function (aI) {
        if (this.paused) {
            return
        }
        var aC = this.canvas, aA = aC.width, aH = aC.height, aK = 0, az = (aI - this.time) * this.interval / 1000, aG = aA / 2 + this.offsetX, aF = aH / 2 + this.offsetY, aO = this.ctxt, aE, aP, aM, ay = -1, aB = this.taglist, aL = aB.length, j = this.frontSelect, aJ = (this.centreFunc == aq), aD;
        this.time = aI;
        if (this.frozen && this.drawn) {
            return this.Animate(aA, aH, az)
        }
        aD = this.AnimateFixed();
        aO.setTransform(1, 0, 0, 1, 0, 0);
        for (aM = 0; aM < aL; ++aM) {
            aB[aM].Calc(this.transform, this.fixedAlpha)
        }
        aB = y(aB, function (aQ, i) {
            return i.z - aQ.z
        });
        if (aD && this.fixedAnim.active) {
            aE = this.fixedAnim.tag.UpdateActive(aO, aG, aF)
        } else {
            this.active = null;
            for (aM = 0; aM < aL; ++aM) {
                aP = this.mx >= 0 && this.my >= 0 && this.taglist[aM].CheckActive(aO, aG, aF);
                if (aP && aP.sc > aK && (!j || aP.z <= 0)) {
                    aE = aP;
                    ay = aM;
                    aE.tag = this.taglist[aM];
                    aK = aP.sc
                }
            }
            this.active = aE
        }
        this.txtOpt || (this.shadow && this.SetShadow(aO));
        aO.clearRect(0, 0, aA, aH);
        for (aM = 0; aM < aL; ++aM) {
            if (!aJ && aB[aM].z <= 0) {
                try {
                    this.centreFunc(aO, aA, aH, aG, aF)
                } catch (aN) {
                    alert(aN);
                    this.centreFunc = aq
                }
                aJ = true
            }
            if (!(aE && aE.tag == aB[aM] && aE.PreDraw(aO, aB[aM], aG, aF))) {
                aB[aM].Draw(aO, aG, aF)
            }
            aE && aE.tag == aB[aM] && aE.PostDraw(aO)
        }
        if (this.freezeActive && aE) {
            this.Freeze()
        } else {
            this.UnFreeze();
            this.drawn = (aL == this.listLength)
        }
        if (this.fixedCallback) {
            this.fixedCallback(this, this.fixedCallbackTag);
            this.fixedCallback = null
        }
        aD || this.Animate(aA, aH, az);
        aE && aE.LastDraw(aO);
        aC.style.cursor = aE ? this.activeCursor : "";
        this.Tooltip(aE, this.taglist[ay])
    };
    M.TooltipNone = function () {
    };
    M.TooltipNative = function (j, i) {
        this.canvas.title = j && i.title ? i.title : ""
    };
    M.TooltipDiv = function (aA, j) {
        var i = this, az = i.ttdiv.style, aB = i.canvas.id, ay = "none";
        if (aA && j.title) {
            if (j.title != i.ttdiv.innerHTML) {
                az.display = ay
            }
            i.ttdiv.innerHTML = j.title;
            j.title = i.ttdiv.innerHTML;
            if (az.display == ay && !i.tttimer) {
                i.tttimer = setTimeout(function () {
                    var aC = W(aB);
                    az.display = "block";
                    az.left = aC.x + i.mx + "px";
                    az.top = aC.y + i.my + 24 + "px";
                    i.tttimer = null
                }, i.tooltipDelay)
            }
        } else {
            az.display = ay
        }
    };
    M.Transform = function (aB, i, aD) {
        if (i || aD) {
            var j = ab(i), aC = u(i), aE = ab(aD), aA = u(aD), ay = new N([aA, 0, aE, 0, 1, 0, -aE, 0, aA]), az = new N([1, 0, 0, 0, aC, -j, 0, j, aC]);
            aB.transform = aB.transform.mul(ay.mul(az))
        }
    };
    M.AnimateFixed = function () {
        var ay, j, aA, i, az;
        if (this.fadeIn) {
            j = C() - this.startTime;
            if (j >= this.fadeIn) {
                this.fadeIn = 0;
                this.fixedAlpha = 1
            } else {
                this.fixedAlpha = j / this.fadeIn
            }
        }
        if (this.fixedAnim) {
            if (!this.fixedAnim.transform) {
                this.fixedAnim.transform = this.transform
            }
            ay = this.fixedAnim, j = C() - ay.t0, aA = ay.angle, i, az = this.animTiming(ay.t, j);
            this.transform = ay.transform;
            if (j >= ay.t) {
                this.fixedCallbackTag = ay.tag;
                this.fixedCallback = ay.cb;
                this.fixedAnim = this.yaw = this.pitch = 0
            } else {
                aA *= az
            }
            i = N.Rotation(aA, ay.axis);
            this.transform = this.transform.mul(i);
            return(this.fixedAnim != 0)
        }
        return false
    };
    M.AnimatePosition = function (ay, aB, az) {
        var j = this, i = j.mx, aD = j.my, aA, aC;
        if (!j.frozen && i >= 0 && aD >= 0 && i < ay && aD < aB) {
            aA = j.maxSpeed, aC = j.reverse ? -1 : 1;
            j.lx || (j.yaw = aC * az * ((aA * 2 * i / ay) - aA));
            j.ly || (j.pitch = aC * az * -((aA * 2 * aD / aB) - aA));
            j.initial = null
        } else {
            if (!j.initial) {
                if (j.frozen && !j.freezeDecel) {
                    j.yaw = j.pitch = 0
                } else {
                    j.Decel(j)
                }
            }
        }
        this.Transform(j, j.pitch, j.yaw)
    };
    M.AnimateDrag = function (j, aA, az) {
        var i = this, ay = 100 * az * i.maxSpeed / i.max_radius / i.zoom;
        if (i.dx || i.dy) {
            i.lx || (i.yaw = i.dx * ay / i.stretchX);
            i.ly || (i.pitch = i.dy * -ay / i.stretchY);
            i.dx = i.dy = 0;
            i.initial = null
        } else {
            if (!i.initial) {
                i.Decel(i)
            }
        }
        this.Transform(i, i.pitch, i.yaw)
    };
    M.Freeze = function () {
        if (!this.frozen) {
            this.preFreeze = [this.yaw, this.pitch];
            this.frozen = 1;
            this.drawn = 0
        }
    };
    M.UnFreeze = function () {
        if (this.frozen) {
            this.yaw = this.preFreeze[0];
            this.pitch = this.preFreeze[1];
            this.frozen = 0
        }
    };
    M.Decel = function (i) {
        var az = i.minSpeed, aA = H(i.yaw), j = H(i.pitch);
        if (!i.lx && aA > az) {
            i.yaw = aA > i.z0 ? i.yaw * i.decel : 0
        }
        if (!i.ly && j > az) {
            i.pitch = j > i.z0 ? i.pitch * i.decel : 0
        }
    };
    M.Zoom = function (i) {
        this.z2 = this.z1 * (1 / i);
        this.drawn = 0
    };
    M.Clicked = function (ay) {
        var i = this.active;
        try {
            if (i && i.tag) {
                if (this.clickToFront === false || this.clickToFront === null) {
                    i.tag.Clicked(ay)
                } else {
                    this.TagToFront(i.tag, this.clickToFront, function () {
                        i.tag.Clicked(ay)
                    }, true)
                }
            }
        } catch (j) {
        }
    };
    M.Wheel = function (j) {
        var ay = this.zoom + this.zoomStep * (j ? 1 : -1);
        this.zoom = au(this.zoomMax, q(this.zoomMin, ay));
        this.Zoom(this.zoom)
    };
    M.BeginDrag = function (i) {
        this.down = O(i, this.canvas);
        i.cancelBubble = true;
        i.returnValue = false;
        i.preventDefault && i.preventDefault()
    };
    M.Drag = function (aA, az) {
        if (this.dragControl && this.down) {
            var ay = this.dragThreshold * this.dragThreshold, j = az.x - this.down.x, i = az.y - this.down.y;
            if (this.dragging || j * j + i * i > ay) {
                this.dx = j;
                this.dy = i;
                this.dragging = 1;
                this.down = az
            }
        }
    };
    M.EndDrag = function () {
        var i = this.dragging;
        this.dragging = this.down = null;
        return i
    };
    M.Pause = function () {
        this.paused = true
    };
    M.Resume = function () {
        this.paused = false
    };
    M.SetSpeed = function (j) {
        this.initial = j;
        this.yaw = j[0] * this.maxSpeed;
        this.pitch = j[1] * this.maxSpeed
    };
    M.FindTag = function (ay) {
        if (!ac(ay)) {
            return null
        }
        ac(ay.index) && (ay = ay.index);
        if (!E(ay)) {
            return this.taglist[ay]
        }
        var az, aA, j;
        if (ac(ay.id)) {
            az = "id", aA = ay.id
        } else {
            if (ac(ay.text)) {
                az = "innerText", aA = ay.text
            }
        }
        for (j = 0; j < this.taglist.length; ++j) {
            if (this.taglist[j].a[az] == aA) {
                return this.taglist[j]
            }
        }
    };
    M.RotateTag = function (aG, az, aF, i, aD, ay) {
        var aE = aG.xformed, aB = new Y(aE.x, aE.y, aE.z), aA = ad(aF, az), j = aB.angle(aA), aC = aB.cross(aA).unit();
        if (j == 0) {
            this.fixedCallbackTag = aG;
            this.fixedCallback = aD
        } else {
            this.fixedAnim = {angle: -j, axis: aC, t: i, t0: C(), cb: aD, tag: aG, active: ay}
        }
    };
    M.TagToFront = function (i, ay, az, j) {
        this.RotateTag(i, 0, 0, ay, az, j)
    };
    w.Start = function (ay, i, j) {
        w.tc[ay] = new w(ay, i, j)
    };
    function ao(i, j) {
        w.tc[j] && w.tc[j][i]()
    }
    w.Linear = function (i, j) {
        return j / i
    };
    w.Smooth = function (i, j) {
        return 0.5 - u(j * Math.PI / i) / 2
    };
    w.Pause = function (i) {
        ao("Pause", i)
    };
    w.Resume = function (i) {
        ao("Resume", i)
    };
    w.Reload = function (i) {
        ao("Load", i)
    };
    w.Update = function (i) {
        ao("Update", i)
    };
    w.SetSpeed = function (j, i) {
        if (E(i) && w.tc[j] && !isNaN(i[0]) && !isNaN(i[1])) {
            w.tc[j].SetSpeed(i);
            return true
        }
        return false
    };
    w.TagToFront = function (j, i) {
        if (!E(i)) {
            return false
        }
        i.lat = i.lng = 0;
        return w.RotateTag(j, i)
    };
    w.RotateTag = function (ay, i) {
        if (E(i) && w.tc[ay]) {
            if (isNaN(i.time)) {
                i.time = 500
            }
            var j = w.tc[ay].FindTag(i);
            if (j) {
                w.tc[ay].RotateTag(j, i.lat, i.lng, i.time, i.callback, i.active);
                return true
            }
        }
        return false
    };
    w.Delete = function (i) {
        delete a[i];
        delete w.tc[i]
    };
    w.NextFrame = function (i) {
        var j = window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        w.NextFrame = j ? w.NextFrameRAF : w.NextFrameTimeout;
        w.NextFrame(i)
    };
    w.NextFrameRAF = function () {
        requestAnimationFrame(K)
    };
    w.NextFrameTimeout = function (i) {
        setTimeout(K, i)
    };
    w.tc = {};
    w.options = {z1: 20000, z2: 20000, z0: 0.0002, freezeActive: false, freezeDecel: false, activeCursor: "pointer", pulsateTo: 1, pulsateTime: 3, reverse: false, depth: 0.5, maxSpeed: 0.05, minSpeed: 0, decel: 0.95, interval: 20, minBrightness: 0.1, maxBrightness: 1, outlineColour: "#ffff99", outlineThickness: 2, outlineOffset: 5, outlineMethod: "outline", outlineRadius: 0, textColour: "#ff99ff", textHeight: 15, textFont: "Helvetica, Arial, sans-serif", shadow: "#000", shadowBlur: 0, shadowOffset: [0, 0], initial: null, hideTags: true, zoom: 1, weight: false, weightMode: "size", weightFrom: null, weightSize: 1, weightSizeMin: null, weightSizeMax: null, weightGradient: {0: "#f00", 0.33: "#ff0", 0.66: "#0f0", 1: "#00f"}, txtOpt: true, txtScale: 2, frontSelect: false, wheelZoom: true, zoomMin: 0.3, zoomMax: 3, zoomStep: 0.05, shape: "sphere", lock: null, tooltip: null, tooltipDelay: 300, tooltipClass: "tctooltip", radiusx: 1, radiusy: 1, radiusz: 1, stretchX: 1, stretchY: 1, offsetX: 0, offsetY: 0, shuffleTags: false, noSelect: false, noMouse: false, imageScale: 1, paused: false, dragControl: false, dragThreshold: 4, centreFunc: aq, splitWidth: 0, animTiming: "Smooth", clickToFront: false, fadeIn: 0, padding: 0, bgColour: null, bgRadius: 0, bgOutline: null, bgOutlineThickness: 0};
    for (I in w.options) {
        w[I] = w.options[I]
    }
    window.TagCanvas = w;
    jQuery.fn.tagcanvas = function (j, i) {
        var ay = {pause: function () {
            ah(this).each(function () {
                ao("Pause", ah(this)[0].id)
            })
        }, resume: function () {
            ah(this).each(function () {
                ao("Resume", ah(this)[0].id)
            })
        }, reload: function () {
            ah(this).each(function () {
                ao("Load", ah(this)[0].id)
            })
        }, update: function () {
            ah(this).each(function () {
                ao("Update", ah(this)[0].id)
            })
        }, tagtofront: function () {
            ah(this).each(function () {
                w.TagToFront(ah(this)[0].id, i)
            })
        }, rotatetag: function () {
            ah(this).each(function () {
                w.RotateTag(ah(this)[0].id, i)
            })
        }, "delete": function () {
            ah(this).each(function () {
                w.Delete(ah(this)[0].id)
            })
        }, setspeed: function () {
            ah(this).each(function () {
                w.SetSpeed(ah(this)[0].id, i)
            })
        }};
        if (typeof j == "string" && ay[j]) {
            ay[j].apply(this);
            return this
        } else {
            w.jquery = 1;
            ah(this).each(function () {
                w.Start(ah(this)[0].id, i, j)
            });
            return w.started
        }
    };
    X("load", function () {
        w.loaded = 1
    }, window)
})(jQuery);
function wpctcWrapper($){var wpctc={init:function(){wpctc.prefix="wpctc_";wpctc.templateURL=$("#template-url").val();wpctc.ajaxPostURL=$("#ajax-post-url").val();wpctc.registerEventHandlers();$(".tagcloud-canvas").each(function(){$color=$(this).attr("data-tagcloud-color");$bordercolor=$(this).attr("data-tagcloud-bordercolor");$font=$(this).attr("data-cloud-font");$radiusx=$(this).attr("data-cloud-radiusx");$radiusy=$(this).attr("data-cloud-radiusy");$radiusz=$(this).attr("data-cloud-radiusz");if($font=="null"){$font=null;}$(this).tagcanvas({outlineThickness:0,outlineColour:$bordercolor,textFont:$font,textColour:$color,radiusx:$radiusx,radiusy:$radiusy,radiusz:$radiusz,maxSpeed:0.06,minBrightness:0.1,depth:0.95,pulsateTo:0.2,pulsateTime:0.75,decel:0.9,reverse:true,fadeIn:800,zoom:parseInt($(this).attr("data-cloud-zoom")),zoomStep:0.05,zoomMax:3,zoomMin:0.3,weight:true},$(this).attr("id")+"_tags");});},registerEventHandlers:function(){}};$(document).ready(wpctc.init);}wpctcWrapper(jQuery);
(function($){if($.fn.style){return;}var escape=function(text){return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");};var isStyleFuncSupported=!!CSSStyleDeclaration.prototype.getPropertyValue;if(!isStyleFuncSupported){CSSStyleDeclaration.prototype.getPropertyValue=function(a){return this.getAttribute(a);};CSSStyleDeclaration.prototype.setProperty=function(styleName,value,priority){this.setAttribute(styleName,value);var priority=typeof priority!="undefined"?priority:"";if(priority!=""){var rule=new RegExp(escape(styleName)+"\\s*:\\s*"+escape(value)+"(\\s*;)?","gmi");this.cssText=this.cssText.replace(rule,styleName+": "+value+" !"+priority+";");}};CSSStyleDeclaration.prototype.removeProperty=function(a){return this.removeAttribute(a);};CSSStyleDeclaration.prototype.getPropertyPriority=function(styleName){var rule=new RegExp(escape(styleName)+"\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?","gmi");return rule.test(this.cssText)?"important":"";};}$.fn.style=function(styleName,value,priority){var node=this.get(0);if(typeof node=="undefined"){return this;}var style=this.get(0).style;if(typeof styleName!="undefined"){if(typeof value!="undefined"){priority=typeof priority!="undefined"?priority:"";style.setProperty(styleName,value,priority);return this;}else{return style.getPropertyValue(styleName);}}else{return style;}};})(jQuery);
(function(){var isWebkit=navigator.userAgent.toLowerCase().indexOf('webkit')>-1,isOpera=navigator.userAgent.toLowerCase().indexOf('opera')>-1,isIe=navigator.userAgent.toLowerCase().indexOf('msie')>-1;if((isWebkit||isOpera||isIe)&&document.getElementById&&window.addEventListener){window.addEventListener('hashchange',function(){var id=location.hash.substring(1),element;if(!(/^[A-z0-9_-]+$/.test(id))){return;}
element=document.getElementById(id);if(element){if(!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))){element.tabIndex=-1;}
element.focus();}},false);}})();
;(function(root,factory){if(typeof define==='function'&&define.amd){define(factory);}else if(typeof exports==='object'){module.exports=factory();}else{root.NProgress=factory();}})(this,function(){var NProgress={};NProgress.version='0.2.0';var Settings=NProgress.settings={minimum:0.08,easing:'linear',positionUsing:'',speed:350,trickle:true,trickleSpeed:250,showSpinner:true,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:'body',template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};NProgress.configure=function(options){var key,value;for(key in options){value=options[key];if(value!==undefined&&options.hasOwnProperty(key))Settings[key]=value;}
return this;};NProgress.status=null;NProgress.set=function(n){var started=NProgress.isStarted();n=clamp(n,Settings.minimum,1);NProgress.status=(n===1?null:n);var progress=NProgress.render(!started),bar=progress.querySelector(Settings.barSelector),speed=Settings.speed,ease=Settings.easing;progress.offsetWidth;queue(function(next){if(Settings.positionUsing==='')Settings.positionUsing=NProgress.getPositioningCSS();css(bar,barPositionCSS(n,speed,ease));if(n===1){css(progress,{transition:'none',opacity:1});progress.offsetWidth;setTimeout(function(){css(progress,{transition:'all '+speed+'ms linear',opacity:0});setTimeout(function(){NProgress.remove();next();},speed);},speed);}else{setTimeout(next,speed);}});return this;};NProgress.isStarted=function(){return typeof NProgress.status==='number';};NProgress.start=function(){if(!NProgress.status)NProgress.set(0);var work=function(){setTimeout(function(){if(!NProgress.status)return;NProgress.trickle();work();},Settings.trickleSpeed);};if(Settings.trickle)work();return this;};NProgress.done=function(force){if(!force&&!NProgress.status)return this;return NProgress.inc(0.3+0.5*Math.random()).set(1);};NProgress.inc=function(amount){var n=NProgress.status;if(!n){return NProgress.start();}else if(n>1){return;}else{if(typeof amount!=='number'){if(n>=0&&n<0.25){amount=(Math.random()*(5-3+1)+3)/100;}else if(n>=0.25&&n<0.65){amount=(Math.random()*3)/100;}else if(n>=0.65&&n<0.9){amount=(Math.random()*2)/100;}else if(n>=0.9&&n<0.99){amount=0.005;}else{amount=0;}}
n=clamp(n+amount,0,0.994);return NProgress.set(n);}};NProgress.trickle=function(){return NProgress.inc();};(function(){var initial=0,current=0;NProgress.promise=function($promise){if(!$promise||$promise.state()==="resolved"){return this;}
if(current===0){NProgress.start();}
initial++;current++;$promise.always(function(){current--;if(current===0){initial=0;NProgress.done();}else{NProgress.set((initial-current)/initial);}});return this;};})();NProgress.render=function(fromStart){if(NProgress.isRendered())return document.getElementById('nprogress');addClass(document.documentElement,'nprogress-busy');var progress=document.createElement('div');progress.id='nprogress';progress.innerHTML=Settings.template;var bar=progress.querySelector(Settings.barSelector),perc=fromStart?'-100':toBarPerc(NProgress.status||0),parent=document.querySelector(Settings.parent),spinner;css(bar,{transition:'all 0 linear',transform:'translate3d('+perc+'%,0,0)'});if(!Settings.showSpinner){spinner=progress.querySelector(Settings.spinnerSelector);spinner&&removeElement(spinner);}
if(parent!=document.body){addClass(parent,'nprogress-custom-parent');}
parent.appendChild(progress);return progress;};NProgress.remove=function(){removeClass(document.documentElement,'nprogress-busy');removeClass(document.querySelector(Settings.parent),'nprogress-custom-parent');var progress=document.getElementById('nprogress');progress&&removeElement(progress);};NProgress.isRendered=function(){return!!document.getElementById('nprogress');};NProgress.getPositioningCSS=function(){var bodyStyle=document.body.style;var vendorPrefix=('WebkitTransform'in bodyStyle)?'Webkit':('MozTransform'in bodyStyle)?'Moz':('msTransform'in bodyStyle)?'ms':('OTransform'in bodyStyle)?'O':'';if(vendorPrefix+'Perspective'in bodyStyle){return'translate3d';}else if(vendorPrefix+'Transform'in bodyStyle){return'translate';}else{return'margin';}};function clamp(n,min,max){if(n<min)return min;if(n>max)return max;return n;}
function toBarPerc(n){return(-1+n)*100;}
function barPositionCSS(n,speed,ease){var barCSS;if(Settings.positionUsing==='translate3d'){barCSS={transform:'translate3d('+toBarPerc(n)+'%,0,0)'};}else if(Settings.positionUsing==='translate'){barCSS={transform:'translate('+toBarPerc(n)+'%,0)'};}else{barCSS={'margin-left':toBarPerc(n)+'%'};}
barCSS.transition='all '+speed+'ms '+ease;return barCSS;}
var queue=(function(){var pending=[];function next(){var fn=pending.shift();if(fn){fn(next);}}
return function(fn){pending.push(fn);if(pending.length==1)next();};})();var css=(function(){var cssPrefixes=['Webkit','O','Moz','ms'],cssProps={};function camelCase(string){return string.replace(/^-ms-/,'ms-').replace(/-([\da-z])/gi,function(match,letter){return letter.toUpperCase();});}
function getVendorProp(name){var style=document.body.style;if(name in style)return name;var i=cssPrefixes.length,capName=name.charAt(0).toUpperCase()+name.slice(1),vendorName;while(i--){vendorName=cssPrefixes[i]+capName;if(vendorName in style)return vendorName;}
return name;}
function getStyleProp(name){name=camelCase(name);return cssProps[name]||(cssProps[name]=getVendorProp(name));}
function applyCss(element,prop,value){prop=getStyleProp(prop);element.style[prop]=value;}
return function(element,properties){var args=arguments,prop,value;if(args.length==2){for(prop in properties){value=properties[prop];if(value!==undefined&&properties.hasOwnProperty(prop))applyCss(element,prop,value);}}else{applyCss(element,args[1],args[2]);}}})();function hasClass(element,name){var list=typeof element=='string'?element:classList(element);return list.indexOf(' '+name+' ')>=0;}
function addClass(element,name){var oldList=classList(element),newList=oldList+name;if(hasClass(oldList,name))return;element.className=newList.substring(1);}
function removeClass(element,name){var oldList=classList(element),newList;if(!hasClass(element,name))return;newList=oldList.replace(' '+name+' ',' ');element.className=newList.substring(1,newList.length-1);}
function classList(element){return(' '+(element&&element.className||'')+' ').replace(/\s+/gi,' ');}
function removeElement(element){element&&element.parentNode&&element.parentNode.removeChild(element);}
return NProgress;});
function GMB_InfoBubble(t){this.extend(GMB_InfoBubble,google.maps.OverlayView),this.tabs_=[],this.activeTab_=null,this.baseZIndex_=100,this.isOpen_=!1;var e=t||{};void 0==e.backgroundColor&&(e.backgroundColor=this.BACKGROUND_COLOR_),void 0==e.borderColor&&(e.borderColor=this.BORDER_COLOR_),void 0==e.borderRadius&&(e.borderRadius=this.BORDER_RADIUS_),void 0==e.borderWidth&&(e.borderWidth=this.BORDER_WIDTH_),void 0==e.padding&&(e.padding=this.PADDING_),void 0==e.arrowPosition&&(e.arrowPosition=this.ARROW_POSITION_),void 0==e.disableAutoPan&&(e.disableAutoPan=!1),void 0==e.disableAnimation&&(e.disableAnimation=!1),void 0==e.minWidth&&(e.minWidth=this.MIN_WIDTH_),void 0==e.shadowStyle&&(e.shadowStyle=this.SHADOW_STYLE_),void 0==e.arrowSize&&(e.arrowSize=this.ARROW_SIZE_),void 0==e.arrowStyle&&(e.arrowStyle=this.ARROW_STYLE_),void 0==e.closeSrc&&(e.closeSrc=this.CLOSE_SRC_),this.buildDom_(),this.setValues(e)}window.GMB_InfoBubble=GMB_InfoBubble,GMB_InfoBubble.prototype.ARROW_SIZE_=15,GMB_InfoBubble.prototype.ARROW_STYLE_=0,GMB_InfoBubble.prototype.SHADOW_STYLE_=1,GMB_InfoBubble.prototype.MIN_WIDTH_=50,GMB_InfoBubble.prototype.ARROW_POSITION_=50,GMB_InfoBubble.prototype.PADDING_=10,GMB_InfoBubble.prototype.BORDER_WIDTH_=1,GMB_InfoBubble.prototype.BORDER_COLOR_="#ccc",GMB_InfoBubble.prototype.BORDER_RADIUS_=10,GMB_InfoBubble.prototype.BACKGROUND_COLOR_="#fff",GMB_InfoBubble.prototype.CLOSE_SRC_="https://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif",GMB_InfoBubble.prototype.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},GMB_InfoBubble.prototype.buildDom_=function(){var t=this.bubble_=document.createElement("DIV");t.style.position="absolute",t.style.zIndex=this.baseZIndex_;var e=this.tabsContainer_=document.createElement("DIV");e.style.position="relative";var o=this.close_=document.createElement("IMG");o.style.position="absolute",o.style.border=0,o.style.zIndex=this.baseZIndex_+1,o.style.cursor="pointer",o.src=this.get("closeSrc");var i=this;google.maps.event.addDomListener(o,"click",function(){i.close(),google.maps.event.trigger(i,"closeclick")});var n=this.contentContainer_=document.createElement("DIV");n.className="gmb-infobubble-container",n.style.overflowX="auto",n.style.overflowY="auto",n.style.cursor="default",n.style.clear="both",n.style.position="relative";var s=this.content_=document.createElement("DIV");n.appendChild(s);var r=this.arrow_=document.createElement("DIV");r.style.position="relative";var a=this.arrowOuter_=document.createElement("DIV"),b=this.arrowInner_=document.createElement("DIV"),h=this.getArrowSize_();a.style.position=b.style.position="absolute",a.style.left=b.style.left="50%",a.style.height=b.style.height="0",a.style.width=b.style.width="0",a.style.marginLeft=this.px(-h),a.style.borderWidth=this.px(h),a.style.borderBottomWidth=0;var l=this.bubbleShadow_=document.createElement("DIV");l.style.position="absolute",t.style.display=l.style.display="none",t.appendChild(this.tabsContainer_),t.appendChild(o),t.appendChild(n),r.appendChild(a),r.appendChild(b),t.appendChild(r);var p=document.createElement("style");p.setAttribute("type","text/css"),this.animationName_="_ibani_"+Math.round(1e4*Math.random());var d="."+this.animationName_+"{-webkit-animation-name:"+this.animationName_+";-webkit-animation-duration:0.5s;-webkit-animation-iteration-count:1;}@-webkit-keyframes "+this.animationName_+" {from {-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% {-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}";p.textContent=d,document.getElementsByTagName("head")[0].appendChild(p)},GMB_InfoBubble.prototype.setBackgroundClassName=function(t){this.set("backgroundClassName",t)},GMB_InfoBubble.prototype.setBackgroundClassName=GMB_InfoBubble.prototype.setBackgroundClassName,GMB_InfoBubble.prototype.backgroundClassName_changed=function(){this.content_.className=this.get("backgroundClassName")},GMB_InfoBubble.prototype.backgroundClassName_changed=GMB_InfoBubble.prototype.backgroundClassName_changed,GMB_InfoBubble.prototype.setTabClassName=function(t){this.set("tabClassName",t)},GMB_InfoBubble.prototype.setTabClassName=GMB_InfoBubble.prototype.setTabClassName,GMB_InfoBubble.prototype.tabClassName_changed=function(){this.updateTabStyles_()},GMB_InfoBubble.prototype.tabClassName_changed=GMB_InfoBubble.prototype.tabClassName_changed,GMB_InfoBubble.prototype.getArrowStyle_=function(){return parseInt(this.get("arrowStyle"),10)||0},GMB_InfoBubble.prototype.setArrowStyle=function(t){this.set("arrowStyle",t)},GMB_InfoBubble.prototype.setArrowStyle=GMB_InfoBubble.prototype.setArrowStyle,GMB_InfoBubble.prototype.arrowStyle_changed=function(){this.arrowSize_changed()},GMB_InfoBubble.prototype.arrowStyle_changed=GMB_InfoBubble.prototype.arrowStyle_changed,GMB_InfoBubble.prototype.getArrowSize_=function(){return parseInt(this.get("arrowSize"),10)||0},GMB_InfoBubble.prototype.setArrowSize=function(t){this.set("arrowSize",t)},GMB_InfoBubble.prototype.setArrowSize=GMB_InfoBubble.prototype.setArrowSize,GMB_InfoBubble.prototype.arrowSize_changed=function(){this.borderWidth_changed()},GMB_InfoBubble.prototype.arrowSize_changed=GMB_InfoBubble.prototype.arrowSize_changed,GMB_InfoBubble.prototype.setArrowPosition=function(t){this.set("arrowPosition",t)},GMB_InfoBubble.prototype.setArrowPosition=GMB_InfoBubble.prototype.setArrowPosition,GMB_InfoBubble.prototype.getArrowPosition_=function(){return parseInt(this.get("arrowPosition"),10)||0},GMB_InfoBubble.prototype.arrowPosition_changed=function(){var t=this.getArrowPosition_();this.arrowOuter_.style.left=this.arrowInner_.style.left=t+"%",this.redraw_()},GMB_InfoBubble.prototype.arrowPosition_changed=GMB_InfoBubble.prototype.arrowPosition_changed,GMB_InfoBubble.prototype.setZIndex=function(t){this.set("zIndex",t)},GMB_InfoBubble.prototype.setZIndex=GMB_InfoBubble.prototype.setZIndex,GMB_InfoBubble.prototype.getZIndex=function(){return parseInt(this.get("zIndex"),10)||this.baseZIndex_},GMB_InfoBubble.prototype.zIndex_changed=function(){var t=this.getZIndex();this.bubble_.style.zIndex=this.baseZIndex_=t,this.close_.style.zIndex=t+1},GMB_InfoBubble.prototype.zIndex_changed=GMB_InfoBubble.prototype.zIndex_changed,GMB_InfoBubble.prototype.setShadowStyle=function(t){this.set("shadowStyle",t)},GMB_InfoBubble.prototype.setShadowStyle=GMB_InfoBubble.prototype.setShadowStyle,GMB_InfoBubble.prototype.getShadowStyle_=function(){return parseInt(this.get("shadowStyle"),10)||0},GMB_InfoBubble.prototype.shadowStyle_changed=function(){var t=this.getShadowStyle_(),e="",o="",i="";switch(t){case 0:e="none";break;case 1:o="0 0 3px rgba(0,0,0,0.2)",i="transparent";break;case 2:o="0 0 3px rgba(0,0,0,0.2)",i="transparent"}this.bubbleShadow_.style.boxShadow=this.bubbleShadow_.style.webkitBoxShadow=this.bubbleShadow_.style.MozBoxShadow=o,this.bubbleShadow_.style.backgroundColor=i,this.isOpen_&&(this.bubbleShadow_.style.display=e,this.draw())},GMB_InfoBubble.prototype.shadowStyle_changed=GMB_InfoBubble.prototype.shadowStyle_changed,GMB_InfoBubble.prototype.showCloseButton=function(){this.set("hideCloseButton",!1)},GMB_InfoBubble.prototype.showCloseButton=GMB_InfoBubble.prototype.showCloseButton,GMB_InfoBubble.prototype.hideCloseButton=function(){this.set("hideCloseButton",!0)},GMB_InfoBubble.prototype.hideCloseButton=GMB_InfoBubble.prototype.hideCloseButton,GMB_InfoBubble.prototype.hideCloseButton_changed=function(){this.close_.style.display=this.get("hideCloseButton")?"none":""},GMB_InfoBubble.prototype.hideCloseButton_changed=GMB_InfoBubble.prototype.hideCloseButton_changed,GMB_InfoBubble.prototype.setBackgroundColor=function(t){t&&this.set("backgroundColor",t)},GMB_InfoBubble.prototype.setBackgroundColor=GMB_InfoBubble.prototype.setBackgroundColor,GMB_InfoBubble.prototype.backgroundColor_changed=function(){var t=this.get("backgroundColor");this.contentContainer_.style.backgroundColor=t,this.arrowInner_.style.borderColor=t+" transparent transparent",this.updateTabStyles_()},GMB_InfoBubble.prototype.backgroundColor_changed=GMB_InfoBubble.prototype.backgroundColor_changed,GMB_InfoBubble.prototype.setBorderColor=function(t){t&&this.set("borderColor",t)},GMB_InfoBubble.prototype.setBorderColor=GMB_InfoBubble.prototype.setBorderColor,GMB_InfoBubble.prototype.borderColor_changed=function(){var t=this.get("borderColor"),e=this.contentContainer_,o=this.arrowOuter_;e.style.borderColor=t,o.style.borderColor=t+" transparent transparent",e.style.borderStyle=o.style.borderStyle=this.arrowInner_.style.borderStyle="solid",this.updateTabStyles_()},GMB_InfoBubble.prototype.borderColor_changed=GMB_InfoBubble.prototype.borderColor_changed,GMB_InfoBubble.prototype.setBorderRadius=function(t){this.set("borderRadius",t)},GMB_InfoBubble.prototype.setBorderRadius=GMB_InfoBubble.prototype.setBorderRadius,GMB_InfoBubble.prototype.getBorderRadius_=function(){return parseInt(this.get("borderRadius"),10)||0},GMB_InfoBubble.prototype.borderRadius_changed=function(){var t=this.getBorderRadius_(),e=this.getBorderWidth_();this.contentContainer_.style.borderRadius=this.contentContainer_.style.MozBorderRadius=this.contentContainer_.style.webkitBorderRadius=this.bubbleShadow_.style.borderRadius=this.bubbleShadow_.style.MozBorderRadius=this.bubbleShadow_.style.webkitBorderRadius=this.px(t),this.tabsContainer_.style.paddingLeft=this.tabsContainer_.style.paddingRight=this.px(t+e),this.redraw_()},GMB_InfoBubble.prototype.borderRadius_changed=GMB_InfoBubble.prototype.borderRadius_changed,GMB_InfoBubble.prototype.getBorderWidth_=function(){return parseInt(this.get("borderWidth"),10)||0},GMB_InfoBubble.prototype.setBorderWidth=function(t){this.set("borderWidth",t)},GMB_InfoBubble.prototype.setBorderWidth=GMB_InfoBubble.prototype.setBorderWidth,GMB_InfoBubble.prototype.borderWidth_changed=function(){var t=this.getBorderWidth_();this.contentContainer_.style.borderWidth=this.px(t),this.tabsContainer_.style.top=this.px(t),this.updateArrowStyle_(),this.updateTabStyles_(),this.borderRadius_changed(),this.redraw_()},GMB_InfoBubble.prototype.borderWidth_changed=GMB_InfoBubble.prototype.borderWidth_changed,GMB_InfoBubble.prototype.updateArrowStyle_=function(){var t=this.getBorderWidth_(),e=this.getArrowSize_(),o=this.getArrowStyle_(),i=this.px(e),n=this.px(Math.max(0,e-t)),s=this.arrowOuter_,r=this.arrowInner_;this.arrow_.style.marginTop=this.px(-t),s.style.borderTopWidth=i,r.style.borderTopWidth=n,0==o||1==o?(s.style.borderLeftWidth=i,r.style.borderLeftWidth=n):s.style.borderLeftWidth=r.style.borderLeftWidth=0,0==o||2==o?(s.style.borderRightWidth=i,r.style.borderRightWidth=n):s.style.borderRightWidth=r.style.borderRightWidth=0,o<2?(s.style.marginLeft=this.px(-e),r.style.marginLeft=this.px(-(e-t))):s.style.marginLeft=r.style.marginLeft=0,0==t?s.style.display="none":s.style.display=""},GMB_InfoBubble.prototype.setPadding=function(t){this.set("padding",t)},GMB_InfoBubble.prototype.setPadding=GMB_InfoBubble.prototype.setPadding,GMB_InfoBubble.prototype.setCloseSrc=function(t){t&&this.close_&&(this.close_.src=t)},GMB_InfoBubble.prototype.setCloseSrc=GMB_InfoBubble.prototype.setCloseSrc,GMB_InfoBubble.prototype.getPadding_=function(){return parseInt(this.get("padding"),10)||0},GMB_InfoBubble.prototype.padding_changed=function(){var t=this.getPadding_();this.contentContainer_.style.padding=this.px(t),this.updateTabStyles_(),this.redraw_()},GMB_InfoBubble.prototype.padding_changed=GMB_InfoBubble.prototype.padding_changed,GMB_InfoBubble.prototype.px=function(t){return t?t+"px":t},GMB_InfoBubble.prototype.addEvents_=function(){var t=["mousedown","mousemove","mouseover","mouseout","mouseup","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","dblclick","contextmenu","click"],e=this.bubble_;this.listeners_=[];for(var o,i=0;o=t[i];i++)this.listeners_.push(google.maps.event.addDomListener(e,o,function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}))},GMB_InfoBubble.prototype.onAdd=function(){this.bubble_||this.buildDom_(),this.addEvents_();var t=this.getPanes();t&&(t.floatPane.appendChild(this.bubble_),t.floatShadow.appendChild(this.bubbleShadow_)),google.maps.event.trigger(this,"domready")},GMB_InfoBubble.prototype.onAdd=GMB_InfoBubble.prototype.onAdd,GMB_InfoBubble.prototype.draw=function(){var t=this.getProjection();if(t){var e=this.get("position");if(!e)return void this.close();var o=0;this.activeTab_&&(o=this.activeTab_.offsetHeight);var i=this.getAnchorHeight_(),n=this.getArrowSize_(),s=this.getArrowPosition_();s/=100;var r=t.fromLatLngToDivPixel(e),a=this.contentContainer_.offsetWidth,b=this.bubble_.offsetHeight;if(a){var h=r.y-(b+n);i&&(h-=i);var l=r.x-a*s;this.bubble_.style.top=this.px(h),this.bubble_.style.left=this.px(l);var p=parseInt(this.get("shadowStyle"),10);switch(p){case 1:this.bubbleShadow_.style.top=this.px(h+o-1),this.bubbleShadow_.style.left=this.px(l),this.bubbleShadow_.style.width=this.px(a),this.bubbleShadow_.style.height=this.px(this.contentContainer_.offsetHeight-n);break;case 2:a=.8*a,i?this.bubbleShadow_.style.top=this.px(r.y):this.bubbleShadow_.style.top=this.px(r.y+n),this.bubbleShadow_.style.left=this.px(r.x-a*s),this.bubbleShadow_.style.width=this.px(a),this.bubbleShadow_.style.height=this.px(2)}}}},GMB_InfoBubble.prototype.draw=GMB_InfoBubble.prototype.draw,GMB_InfoBubble.prototype.onRemove=function(){this.bubble_&&this.bubble_.parentNode&&this.bubble_.parentNode.removeChild(this.bubble_),this.bubbleShadow_&&this.bubbleShadow_.parentNode&&this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);for(var t,e=0;t=this.listeners_[e];e++)google.maps.event.removeListener(t)},GMB_InfoBubble.prototype.onRemove=GMB_InfoBubble.prototype.onRemove,GMB_InfoBubble.prototype.isOpen=function(){return this.isOpen_},GMB_InfoBubble.prototype.isOpen=GMB_InfoBubble.prototype.isOpen,GMB_InfoBubble.prototype.close=function(){this.bubble_&&(this.bubble_.style.display="none",this.bubble_.className=this.bubble_.className.replace(this.animationName_,"")),this.bubbleShadow_&&(this.bubbleShadow_.style.display="none",this.bubbleShadow_.className=this.bubbleShadow_.className.replace(this.animationName_,"")),this.isOpen_=!1},GMB_InfoBubble.prototype.close=GMB_InfoBubble.prototype.close,GMB_InfoBubble.prototype.open=function(t,e,o){var i=this;window.setTimeout(function(){i.open_(t,e)},230)},GMB_InfoBubble.prototype.open_=function(t,e){this.updateContent_(),t&&this.setMap(t),e&&(this.set("anchor",e),this.bindTo("anchorPoint",e),this.bindTo("position",e)),this.bubble_.style.display=this.bubbleShadow_.style.display="";var o=!this.get("disableAnimation");o&&(this.bubble_.className+=" "+this.animationName_,this.bubbleShadow_.className+=" "+this.animationName_),this.redraw_(),this.isOpen_=!0;var i=!this.get("disableAutoPan");if(i){var n=this;window.setTimeout(function(){n.panToView()},200)}},GMB_InfoBubble.prototype.open=GMB_InfoBubble.prototype.open,GMB_InfoBubble.prototype.setPosition=function(t){t&&this.set("position",t)},GMB_InfoBubble.prototype.setPosition=GMB_InfoBubble.prototype.setPosition,GMB_InfoBubble.prototype.getPosition=function(){return this.get("position")},GMB_InfoBubble.prototype.getPosition=GMB_InfoBubble.prototype.getPosition,GMB_InfoBubble.prototype.position_changed=function(){this.draw()},GMB_InfoBubble.prototype.position_changed=GMB_InfoBubble.prototype.position_changed,GMB_InfoBubble.prototype.panToView=function(){var t=this.getProjection();if(t&&this.bubble_){var e=this.getAnchorHeight_(),o=this.bubble_.offsetHeight+e,i=this.get("map"),n=i.getDiv(),s=n.offsetHeight,r=this.getPosition(),a=t.fromLatLngToContainerPixel(i.getCenter()),b=t.fromLatLngToContainerPixel(r),h=a.y-o,l=s-a.y,p=h<0,d=0;p&&(h*=-1,d=(h+l)/2),b.y-=d,r=t.fromContainerPixelToLatLng(b),i.getCenter()!=r&&i.panTo(r)}},GMB_InfoBubble.prototype.panToView=GMB_InfoBubble.prototype.panToView,GMB_InfoBubble.prototype.htmlToDocumentFragment_=function(t){t=t.replace(/^\s*([\S\s]*)\b\s*$/,"$1");var e=document.createElement("DIV");if(e.innerHTML=t,1==e.childNodes.length)return e.removeChild(e.firstChild);for(var o=document.createDocumentFragment();e.firstChild;)o.appendChild(e.firstChild);return o},GMB_InfoBubble.prototype.removeChildren_=function(t){if(t)for(var e;e=t.firstChild;)t.removeChild(e)},GMB_InfoBubble.prototype.setContent=function(t){this.set("content",t)},GMB_InfoBubble.prototype.setContent=GMB_InfoBubble.prototype.setContent,GMB_InfoBubble.prototype.getContent=function(){return this.get("content")},GMB_InfoBubble.prototype.getContent=GMB_InfoBubble.prototype.getContent,GMB_InfoBubble.prototype.updateContent_=function(){if(this.content_){this.removeChildren_(this.content_);var t=this.getContent();if(t){"string"==typeof t&&(t=this.htmlToDocumentFragment_(t)),this.content_.appendChild(t);for(var e,o=this,i=this.content_.getElementsByTagName("IMG"),n=0;e=i[n];n++)google.maps.event.addDomListener(e,"load",function(){o.imageLoaded_()})}this.redraw_()}},GMB_InfoBubble.prototype.imageLoaded_=function(){var t=!this.get("disableAutoPan");this.redraw_(),!t||0!=this.tabs_.length&&0!=this.activeTab_.index||this.panToView()},GMB_InfoBubble.prototype.updateTabStyles_=function(){if(this.tabs_&&this.tabs_.length){for(var t,e=0;t=this.tabs_[e];e++)this.setTabStyle_(t.tab);this.activeTab_.style.zIndex=this.baseZIndex_;var o=this.getBorderWidth_(),i=this.getPadding_()/2;this.activeTab_.style.borderBottomWidth=0,this.activeTab_.style.paddingBottom=this.px(i+o)}},GMB_InfoBubble.prototype.setTabStyle_=function(t){var e=this.get("backgroundColor"),o=this.get("borderColor"),i=this.getBorderRadius_(),n=this.getBorderWidth_(),s=this.getPadding_(),r=this.px(-Math.max(s,i)),a=this.px(i),b=this.baseZIndex_;t.index&&(b-=t.index);var h={cssFloat:"left",position:"relative",cursor:"pointer",backgroundColor:e,border:this.px(n)+" solid "+o,padding:this.px(s/2)+" "+this.px(s),marginRight:r,whiteSpace:"nowrap",borderRadiusTopLeft:a,MozBorderRadiusTopleft:a,webkitBorderTopLeftRadius:a,borderRadiusTopRight:a,MozBorderRadiusTopright:a,webkitBorderTopRightRadius:a,zIndex:b,display:"inline"};for(var l in h)t.style[l]=h[l];var p=this.get("tabClassName");void 0!=p&&(t.className+=" "+p)},GMB_InfoBubble.prototype.addTabActions_=function(t){var e=this;t.listener_=google.maps.event.addDomListener(t,"click",function(){e.setTabActive_(this)})},GMB_InfoBubble.prototype.setTabActive=function(t){var e=this.tabs_[t-1];e&&this.setTabActive_(e.tab)},GMB_InfoBubble.prototype.setTabActive=GMB_InfoBubble.prototype.setTabActive,GMB_InfoBubble.prototype.setTabActive_=function(t){if(!t)return this.setContent(""),void this.updateContent_();var e=this.getPadding_()/2,o=this.getBorderWidth_();if(this.activeTab_){var i=this.activeTab_;i.style.zIndex=this.baseZIndex_-i.index,i.style.paddingBottom=this.px(e),i.style.borderBottomWidth=this.px(o)}t.style.zIndex=this.baseZIndex_,t.style.borderBottomWidth=0,t.style.marginBottomWidth="-10px",t.style.paddingBottom=this.px(e+o),this.setContent(this.tabs_[t.index].content),this.updateContent_(),this.activeTab_=t,this.redraw_()},GMB_InfoBubble.prototype.setMaxWidth=function(t){this.set("maxWidth",t)},GMB_InfoBubble.prototype.setMaxWidth=GMB_InfoBubble.prototype.setMaxWidth,GMB_InfoBubble.prototype.maxWidth_changed=function(){this.redraw_()},GMB_InfoBubble.prototype.maxWidth_changed=GMB_InfoBubble.prototype.maxWidth_changed,GMB_InfoBubble.prototype.setMaxHeight=function(t){this.set("maxHeight",t)},GMB_InfoBubble.prototype.setMaxHeight=GMB_InfoBubble.prototype.setMaxHeight,GMB_InfoBubble.prototype.maxHeight_changed=function(){this.redraw_()},GMB_InfoBubble.prototype.maxHeight_changed=GMB_InfoBubble.prototype.maxHeight_changed,GMB_InfoBubble.prototype.setMinWidth=function(t){this.set("minWidth",t)},GMB_InfoBubble.prototype.setMinWidth=GMB_InfoBubble.prototype.setMinWidth,GMB_InfoBubble.prototype.minWidth_changed=function(){this.redraw_()},GMB_InfoBubble.prototype.minWidth_changed=GMB_InfoBubble.prototype.minWidth_changed,GMB_InfoBubble.prototype.setMinHeight=function(t){this.set("minHeight",t)},GMB_InfoBubble.prototype.setMinHeight=GMB_InfoBubble.prototype.setMinHeight,GMB_InfoBubble.prototype.minHeight_changed=function(){this.redraw_()},GMB_InfoBubble.prototype.minHeight_changed=GMB_InfoBubble.prototype.minHeight_changed,GMB_InfoBubble.prototype.addTab=function(t,e){var o=document.createElement("DIV");o.innerHTML=t,this.setTabStyle_(o),this.addTabActions_(o),this.tabsContainer_.appendChild(o),this.tabs_.push({label:t,content:e,tab:o}),o.index=this.tabs_.length-1,o.style.zIndex=this.baseZIndex_-o.index,this.activeTab_||this.setTabActive_(o),o.className=o.className+" "+this.animationName_,this.redraw_()},GMB_InfoBubble.prototype.addTab=GMB_InfoBubble.prototype.addTab,GMB_InfoBubble.prototype.updateTab=function(t,e,o){if(!(!this.tabs_.length||t<0||t>=this.tabs_.length)){var i=this.tabs_[t];void 0!=e&&(i.tab.innerHTML=i.label=e),void 0!=o&&(i.content=o),this.activeTab_==i.tab&&(this.setContent(i.content),this.updateContent_()),this.redraw_()}},GMB_InfoBubble.prototype.updateTab=GMB_InfoBubble.prototype.updateTab,GMB_InfoBubble.prototype.removeTab=function(t){if(!(!this.tabs_.length||t<0||t>=this.tabs_.length)){var e=this.tabs_[t];e.tab.parentNode.removeChild(e.tab),google.maps.event.removeListener(e.tab.listener_),this.tabs_.splice(t,1),delete e;for(var o,i=0;o=this.tabs_[i];i++)o.tab.index=i;e.tab==this.activeTab_&&(this.tabs_[t]?this.activeTab_=this.tabs_[t].tab:this.tabs_[t-1]?this.activeTab_=this.tabs_[t-1].tab:this.activeTab_=void 0,this.setTabActive_(this.activeTab_)),this.redraw_()}},GMB_InfoBubble.prototype.removeTab=GMB_InfoBubble.prototype.removeTab,GMB_InfoBubble.prototype.getElementSize_=function(t,e,o){var i=document.createElement("DIV");i.className="gmb-infobubble",i.style.display="inline",i.style.position="absolute",i.style.padding=this.padding+"px","string"==typeof t?i.innerHTML=t:i.appendChild(t.cloneNode(!0));var n=jQuery("#google-maps-builder-"+this.map_data.id);n.append(i);var s=new google.maps.Size(i.offsetWidth,i.offsetHeight),r=document.createElement("div");r.className="gmb-infobubble-container",r.style.position="relative",r.style.overflowY="auto",r.style.overflowX="auto",r.style.width=i.offsetWidth+2+"px",r.style.height=i.offsetHeight+2+"px",r.style.visibility="hidden",r.style.msOverflowStyle="scrollbar",n.append(r),jQuery(i).appendTo(r);var a=r.offsetWidth-i.offsetWidth;return a>0&&(r.style.width=i.offsetWidth+a+4+"px",s=new google.maps.Size(r.offsetWidth,r.offsetHeight)),e&&s.width>e&&(i.style.width=this.px(e),s=new google.maps.Size(i.offsetWidth,i.offsetHeight)),o&&s.height>o&&(i.style.height=this.px(o),s=new google.maps.Size(i.offsetWidth,i.offsetHeight)),jQuery(r).remove(),s},GMB_InfoBubble.prototype.redraw_=function(){this.figureOutSize_(),this.positionCloseButton_(),this.draw()},GMB_InfoBubble.prototype.figureOutSize_=function(){var t=this.get("map");if(t){var e=this.getPadding_(),o=(this.getBorderWidth_(),this.getBorderRadius_(),this.getArrowSize_()),i=t.getDiv(),n=2*o,s=i.offsetWidth-n,r=i.offsetHeight-n-this.getAnchorHeight_(),a=0,b=this.get("minWidth")||0,h=this.get("minHeight")||0,l=this.get("maxWidth")||0,p=this.get("maxHeight")||0;l=Math.min(s,l),p=Math.min(r,p);var d=0;if(this.tabs_.length)for(var _,u=0;_=this.tabs_[u];u++){var B=this.getElementSize_(_.tab,l,p),f=this.getElementSize_(_.content,l,p);b<B.width&&(b=B.width),d+=B.width,h<B.height&&(h=B.height),B.height>a&&(a=B.height),b<f.width&&(b=f.width),h<f.height&&(h=f.height)}else{var y=this.get("content");if("string"==typeof y&&(y=this.htmlToDocumentFragment_(y)),y){var f=this.getElementSize_(y,l,p);b<f.width&&(b=f.width),h<f.height&&(h=f.height)}}l&&(b=Math.min(b,l)),p&&(h=Math.min(h,p)),b=Math.max(b,d),b==d&&(b+=2*e),o=2*o,b=Math.max(b,o),this.tabsContainer_&&(this.tabHeight_=a,this.tabsContainer_.style.width=this.px(d)),this.contentContainer_.style.width=this.px(b),this.contentContainer_.style.height=this.px(h)}},GMB_InfoBubble.prototype.getAnchorHeight_=function(){var t=this.get("anchor");if(t){var e=this.get("anchorPoint");if(e)return-1*e.y}return 0},GMB_InfoBubble.prototype.anchorPoint_changed=function(){this.draw()},GMB_InfoBubble.prototype.anchorPoint_changed=GMB_InfoBubble.prototype.anchorPoint_changed,GMB_InfoBubble.prototype.positionCloseButton_=function(){var t=(this.getBorderRadius_(),this.getBorderWidth_()),e=2,o=2;this.tabs_.length&&this.tabHeight_&&(o+=this.tabHeight_),o+=t,e+=t;var i=this.contentContainer_;i&&i.clientHeight<i.scrollHeight&&(e+=15),this.close_.style.right=this.px(e),this.close_.style.top=this.px(o)};
!function($,gmb){"use strict";function perform_places_search(a,e){for(var t=a.getCenter(),n=e.places_api.search_places,o=0;o<search_markers.length;o++)search_markers[o].setMap(null);if(search_markers=[],n.length>0){var i={key:gmb_data.api_key,location:new google.maps.LatLng(t.lat(),t.lng()),types:n,radius:e.places_api.search_radius};places_service.nearbySearch(i,function(t,n,o){var i,r=0;if(n==google.maps.places.PlacesServiceStatus.OK){for(r=0;i=t[r];r++)gmb.create_search_result_marker(a,t[r],e);o.hasNextPage&&o.nextPage()}})}}var map,places_service,place,directionsDisplay=[],search_markers=[];gmb.maps=[],gmb.init=function(){var a=$(".google-maps-builder");a.each(function(e,t){gmb.initialize_map($(a[e]))}),gmb.add_tab_support()},gmb.global_load=function(a){return $(a).hasClass("google-maps-builder")?void gmb.initialize_map(a):"invalid Google Maps Builder"},gmb.load_hidden_map=function(a){var e=$(a).find(".google-maps-builder");if(void 0!==e&&0!==e.length){var t=window.MapsBuilder.maps;e.each(function(a,e){var n=$(e).data("map-id");if(void 0!==n&&0!==n.length)if(void 0===t[n])gmb.initialize_map(map_canvas);else{google.maps.event.trigger(t[n],"resize");var o=gmb_data[n].map_params.latitude,i=gmb_data[n].map_params.longitude,r=new google.maps.LatLng(o,i);t[n].setCenter(r)}})}},gmb.initialize_map=function(a){var e=$(a).data("map-id"),t=gmb_data[e],n=t.map_params.latitude?t.map_params.latitude:"32.713240",o=t.map_params.longitude?t.map_params.longitude:"-117.159443",i={center:new google.maps.LatLng(n,o),zoom:parseInt(t.map_params.zoom),styles:[{stylers:[{visibility:"simplified"}]},{elementType:"labels",stylers:[{visibility:"off"}]}]};map=new google.maps.Map(a[0],i),places_service=new google.maps.places.PlacesService(map),gmb.set_map_options(map,t),gmb.set_map_theme(map,t),gmb.set_map_markers(map,t),gmb.set_mashup_markers(map,t),gmb.set_map_directions(map,t),gmb.set_map_layers(map,t),gmb.set_map_places_search(map,t),"yes"===t.places_api.show_places&&perform_places_search(map,t),gmb.maps[e]=map,$(document).trigger("gmb.initialize_map",[map,places_service,a])},gmb.set_map_theme=function(map,map_data){var map_type=map_data.map_theme.map_type.toUpperCase(),map_theme=map_data.map_theme.map_theme_json;"ROADMAP"===map_type&&"none"!==map_theme?map.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP,styles:eval(map_theme)}):map.setOptions({mapTypeId:google.maps.MapTypeId[map_type],styles:!1})},gmb.set_map_options=function(a,e){var t=e.map_controls.zoom_control.toLowerCase();"none"==t?a.setOptions({zoomControl:!1}):a.setOptions({zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle[t]}});var n=e.map_controls.wheel_zoom.toLowerCase();"none"===n?a.setOptions({scrollwheel:!1}):a.setOptions({scrollwheel:!0});var o=e.map_controls.pan_control.toLowerCase();"none"===o?a.setOptions({panControl:!1}):a.setOptions({panControl:!0});var i=e.map_controls.map_type_control;"none"==i?a.setOptions({mapTypeControl:!1}):a.setOptions({mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle[i]}});var r=e.map_controls.street_view.toLowerCase();"none"===r?a.setOptions({streetViewControl:!1}):a.setOptions({streetViewControl:!0});var s=e.map_controls.double_click_zoom.toLowerCase();"none"===s?a.setOptions({disableDoubleClickZoom:!0}):a.setOptions({disableDoubleClickZoom:!1});var m=e.map_controls.draggable.toLowerCase();"none"===m?a.setOptions({draggable:!1}):a.setOptions({draggable:!0})},gmb.set_map_markers=function(map,map_data){gmb.info_window_args={map:map,map_data:map_data,shadowStyle:gmb_data.infobubble_args.shadowStyle,padding:gmb_data.infobubble_args.padding,backgroundColor:gmb_data.infobubble_args.backgroundColor,borderRadius:gmb_data.infobubble_args.borderRadius,arrowSize:gmb_data.infobubble_args.arrowSize,minHeight:gmb_data.infobubble_args.minHeight,maxHeight:gmb_data.infobubble_args.maxHeight,minWidth:gmb_data.infobubble_args.minWidth,maxWidth:gmb_data.infobubble_args.maxWidth,borderWidth:gmb_data.infobubble_args.borderWidth,disableAutoPan:gmb_data.infobubble_args.disableAutoPan,disableAnimation:gmb_data.infobubble_args.disableAnimation,backgroundClassName:gmb_data.infobubble_args.backgroundClassName,closeSrc:gmb_data.infobubble_args.closeSrc};var map_markers=map_data.map_markers,markers=[];if(map.info_window=new GMB_InfoBubble(gmb.info_window_args),$(map_markers).each(function(index,marker_data){if(""!=marker_data.lat&&""!=marker_data.lng){var marker_label="",custom_marker_icon=marker_data.marker_img&&!isNaN(marker_data.marker_img_id)?marker_data.marker_img:"",marker_icon=map_data.map_params.default_marker,included_marker_icon=""!==marker_data.marker_included_img?marker_data.marker_included_img:"";included_marker_icon?marker_icon=map_data.plugin_url+included_marker_icon:custom_marker_icon?marker_icon=custom_marker_icon:"undefined"!=typeof marker_data.marker&&marker_data.marker.length>0&&"undefined"!=typeof marker_data.label&&marker_data.label.length>0&&(marker_icon=eval("("+marker_data.marker+")"),marker_label=marker_data.label);var marker_args={position:new google.maps.LatLng(marker_data.lat,marker_data.lng),map:map,zIndex:index,icon:marker_icon,custom_label:marker_label},location_marker=new Marker(marker_args);markers.push(location_marker),location_marker.setVisible(!0),google.maps.event.addListener(location_marker,"click",function(){map.info_window.close(),gmb.set_info_window_content(marker_data,map,map_data).done(function(){map.info_window.open(map,location_marker,map_data),"yes"==map_data.marker_centered&&window.setTimeout(function(){map.info_window.panToView()},300)})}),"undefined"!=typeof marker_data.infowindow_open&&"opened"==marker_data.infowindow_open&&google.maps.event.addListenerOnce(map,"idle",function(){gmb.set_info_window_content(marker_data,map,map_data).done(function(){map.info_window.open(map,location_marker,map_data)})})}}),"yes"===map_data.marker_cluster)var markerCluster=new MarkerClusterer(map,markers)},gmb.set_info_window_content=function(a,e,t){var n=$.Deferred(),o="";if("undefined"!=typeof a.title&&a.title.length>0&&(o+='<p class="place-title">'+a.title+"</p>"),"undefined"!=typeof a.description&&a.description.length>0&&(o+='<div class="place-description">'+a.description+"</div>"),"undefined"!=typeof a.place_id&&a.place_id&&"on"!==a.hide_details){var i={key:gmb_data.api_key,placeId:a.place_id};places_service.getDetails(i,function(a,i){i==google.maps.places.PlacesServiceStatus.OK&&(o+=gmb.set_place_content_in_info_window(a),e.info_window.setContent(o),e.info_window.updateContent_(),n.resolve(),"yes"==t.marker_centered&&window.setTimeout(function(){e.info_window.panToView()},300))})}else n.resolve(),e.info_window.setContent(o);return n},gmb.set_place_content_in_info_window=function(a){var e;return e='<div class="marker-info-wrapper">',a.adr_address&&(e+='<div class="place-address">',e+=a.adr_address,a.formatted_address&&(e+='<a href="https://www.google.com/maps/dir/Current+Location/'+encodeURIComponent(a.formatted_address)+'" class="place-directions-link" target="_blank" title="'+gmb_data.i18n.get_directions+'"><span class="place-icon"></span>'+gmb_data.i18n.get_directions+"</a>"),e+="</div>"),a.rating&&(e+='<div class="rating-wrap"><p class="numeric-rating">'+a.rating+'</p><div class="star-rating-wrap"><div class="star-rating-size" style="width:'+65*a.rating/5+'px;"></div></div></div>'),e+=a.formatted_phone_number?'<div class="place-phone"><a href="tel:'+a.international_phone_number.replace(/\s+/g,"")+'" class="place-tel-link"><span  class="place-icon"></span>'+a.formatted_phone_number+"</a></div>":"",e+=a.website?'<div class="place-website"><a href="'+a.website+'" target="_blank" rel="nofollow"><span class="place-icon"></span>'+gmb_data.i18n.visit_website+"</a></div>":"",e+="</div>"},gmb.create_search_result_marker=function(a,e,t){var n=new google.maps.Marker({map:a});n.setIcon({url:e.icon,size:new google.maps.Size(24,24),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(24,24)}),n.setPosition(e.geometry.location),n.setVisible(!0),google.maps.event.addListener(n,"click",function(){a.info_window.close();var o={title:e.name,place_id:e.place_id};gmb.set_info_window_content(o,a,t).done(function(){a.info_window.open(a,n,t),"yes"==t.marker_centered&&window.setTimeout(function(){a.info_window.panToView()},300)})}),search_markers.push(n)},gmb.set_mashup_markers=function(a,e){if("undefined"==typeof e.mashup_markers||!e.mashup_markers)return!1;var t=[];$(e.mashup_markers).each(function(n,o){var i="undefined"!=typeof o.post_type?o.post_type:"",r="undefined"!=typeof o.taxonomy?o.taxonomy:"",s="undefined"!=typeof o.latitude?o.latitude:"",m="undefined"!=typeof o.longitude?o.longitude:"",_="undefined"!=typeof o.terms?o.terms:"",p={action:"get_mashup_markers",post_type:i,taxonomy:r,terms:_,index:n,lat_field:s,lng_field:m};jQuery.post(e.ajax_url,p,function(n){if($.each(n,function(n,i){var r=gmb.set_mashup_marker(a,p.index,i,o,e);r instanceof Marker&&t.push(r)}),"yes"===e.marker_cluster){new MarkerClusterer(a,t)}},"json")})},gmb.add_tab_support=function(){$(".responsive-tabs").on("click",".responsive-tabs__heading, .responsive-tabs__list__item",function(){gmb.load_hidden_map(".responsive-tabs__panel--active")}),$(".elementor-tabs").on("click",".elementor-tab-title",function(){var a=$(this).data("tab");gmb.load_hidden_map('.elementor-tab-content[data-tab="'+a+'"]')}),$(document).on("simple_slider_after_move_to",function(){gmb.load_hidden_map(".et-pb-active-slide")}),$('a[data-toggle="tab"]').on("shown.bs.tab",function(a){gmb.load_hidden_map($(a.target).attr("href"))}),$(".fl-tabs-label").on("click",function(){gmb.load_hidden_map($(".fl-tab-active"))}),$(".vc_tta-tabs").on("show.vc.tab",function(){gmb.load_hidden_map($(".vc_tta-panel.vc_active"))})},gmb.set_map_directions=function(a,e){},gmb.set_map_layers=function(a,e){},gmb.set_map_places_search=function(a,e){}}(jQuery,window.MapsBuilder||(window.MapsBuilder={})),jQuery(document).ready(function(){MapsBuilder.init();var a=document.createEvent("Event");a.initEvent("MapBuilderInit",!0,!0)}),window.google_maps_builder_load=function(a){return MapsBuilder.global_load(a)};
var MAP_PIN='M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z';var SQUARE_PIN='M 50 -119.876 -50 -119.876 -50 -19.876 -13.232 -19.876 0.199 0 13.63 -19.876 50 -19.876 Z';var SHEILD='M42.8-72.919c0.663-7.855 3.029-15.066 7.2-21.675L34.002-110c-5.054 4.189-10.81 6.509-17.332 6.919 c-5.976 0.52-11.642-0.574-16.971-3.287c-5.478 2.626-11.121 3.723-17.002 3.287c-6.086-0.523-11.577-2.602-16.495-6.281 l-16.041 15.398c3.945 6.704 6.143 13.72 6.574 21.045c0.205 3.373-0.795 8.016-3.038 14.018c-1.175 3.327-2.061 6.213-2.667 8.627 c-0.562 2.394-0.911 4.34-1.027 5.801c-0.082 6.396 1.78 12.168 5.602 17.302c2.986 3.745 7.911 7.886 14.748 12.41 c7.482 3.665 13.272 6.045 17.326 7.06c1.163 0.521 2.301 1.025 3.363 1.506C-7.9-5.708-6.766-5.232-5.586-4.713 C-3.034-3.242-1.243-1.646-0.301 0C0.858-1.782 2.69-3.338 5.122-4.713c1.717-0.723 3.173-1.346 4.341-1.896 c1.167-0.494 2.037-0.865 2.54-1.09c0.866-0.414 2.002-0.888 3.376-1.41c1.386-0.527 3.101-1.168 5.144-1.882 c3.951-1.348 6.83-2.62 8.655-3.77c6.634-4.524 11.48-8.595 14.566-12.235c3.958-5.152 5.879-10.953 5.79-17.475 c-0.232-2.922-1.52-7.594-3.85-13.959C43.463-64.631 42.479-69.445 42.8-72.919z';var ROUTE='M49.986-58.919c-0.51-27.631-16.538-38.612-17.195-39.049l-2.479-1.692l-2.5 1.689c-4.147 2.817-8.449 4.247-12.783 4.247 c-7.178 0-12.051-3.864-12.256-4.032L-0.023-100l-2.776 2.248c-0.203 0.165-5.074 4.028-12.253 4.028 c-4.331 0-8.63-1.429-12.788-4.253l-2.486-1.678l-2.504 1.692c-1.702 1.17-16.624 12.192-17.165 38.907 C-50.211-56.731-43.792-12.754-0.003 0C47.609-13.912 50.23-56.018 49.986-58.919z';var ROUNDED='M50-80c0-11-9-20-20-20h-60c-11 0-20 9-20 20v60c0 11 9 20 20 20h60c11 0 20-9 20-20V-80z';var inherits=function(childCtor,parentCtor){function tempCtor(){};tempCtor.prototype=parentCtor.prototype;childCtor.superClass_=parentCtor.prototype;childCtor.prototype=new tempCtor();childCtor.prototype.constructor=childCtor;};function Marker(options){google.maps.Marker.apply(this,arguments);if(options.custom_label){this.MarkerLabel=new MarkerLabel({map:this.map,marker:this,text:options.custom_label});this.MarkerLabel.bindTo('position',this,'position');}}
inherits(Marker,google.maps.Marker);Marker.prototype.setMap=function(){google.maps.Marker.prototype.setMap.apply(this,arguments);(this.MarkerLabel)&&this.MarkerLabel.setMap.apply(this.MarkerLabel,arguments);};var MarkerLabel=function(options){var self=this;this.setValues(options);this.div=document.createElement('div');this.div.className='marker-label';var span=document.createElement('span');span.className="marker-icon";this.div.appendChild(span);google.maps.event.addDomListener(this.div,'click',function(e){(e.stopPropagation)&&e.stopPropagation();google.maps.event.trigger(self.marker,'click');});};MarkerLabel.prototype=new google.maps.OverlayView;MarkerLabel.prototype.onAdd=function(){var pane=this.getPanes().overlayImage.appendChild(this.div);var self=this;this.listeners=[google.maps.event.addListener(this,'position_changed',function(){self.draw();}),google.maps.event.addListener(this,'text_changed',function(){self.draw();}),google.maps.event.addListener(this,'zindex_changed',function(){self.draw();})];};MarkerLabel.prototype.onRemove=function(){this.div.parentNode.removeChild(this.div);for(var i=0,I=this.listeners.length;i<I;++i){google.maps.event.removeListener(this.listeners[i]);}};MarkerLabel.prototype.draw=function(){var projection=this.getProjection();var position=projection.fromLatLngToDivPixel(this.get('position'));var div=this.div;div.style.left=position.x+'px';div.style.top=position.y+'px';div.style.display='block';div.style.zIndex=this.get('zIndex');this.div.innerHTML=this.get('text').toString();};
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);