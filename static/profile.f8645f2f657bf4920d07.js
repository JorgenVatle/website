(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{184:function(e,n,t){"use strict";t.r(n);var a=t(0),s=t.n(a),o=t(14),i=[new o.c,new o.e,new o.a],r={};s()(function(){s()("#compose.message-composition").each(function(){var e=s()("#compose"),n=e.find(".modal-message"),t=e.find("#compose-form"),a=s()("#alerts-container"),o=t.find("textarea#compose-message"),i=t.find("input#compose-recipients"),r=t.find(".modal-recipients .recipient-container"),c=t.find("button#modal-send-btn"),d=t.find("button#modal-close-btn"),l=t.find(".modal-user-groups"),u=!1,p=function(){t.find("button,input,textarea").removeAttr("disabled")},f=function(){var i=o.val(),r=h();0!==r.length?""!==i.trim()?i.trim().length>500?n.show().html('<span class="text-danger">Your message cannot be longer than 500 characters</span>'):(t.find("button,input,textarea").attr("disabled","disabled"),n.show().html('<i class="fas fa-cog fa-spin"></i> Sending message ...'),u=!0,s.a.ajax({type:"post",url:"/profile/messages/send",data:{recipients:r,message:i}}).always(function(){return u=!1}).fail(function(e){return n.show().html('<span class="text-danger">'.concat(e.status,": ").concat(e.statusText,"</span>"))}).done(function(t){!0===t.success?(a.show().html('<div class="alert alert-info"><strong>Sent!</strong> Your message has been sent.</div>'),window.setTimeout(function(){return a.hide()},3e3),e.modal("hide")):(n.show().html('<span class="text-danger">'.concat(t.message,"</span>")),p())})):n.show().html('<span class="text-danger">Message required</span>'):n.show().html('<span class="text-danger">Recipients required</span>')},m=function(e){return e.split(" ").filter(function(e){return 0===e.search(/^[A-Z0-9_]{3,20}$/i)})},g=function(e,n){var t=e.toLowerCase();n=["recipient",n],r.find('.recipient[data-recipient="'+t+'"]').get(0)||r.append('<span class="'.concat(n.join(" "),'" data-recipient="').concat(t,'">')+'<span class="recipient-name">'.concat(e,"</span>")+'<i class="glyphicon glyphicon-remove remove-recipient" title="Remove"></i></span>')},h=function(){return r.find(".recipient").get().map(function(e){return s()(e).data("recipient")})};e.on("keydown",function(){return n.hide()}),e.on("shown.bs.modal",function(e){return s()(e.currentTarget).find("input#compose-recipients").focus()}),e.on("hidden.bs.modal",function(){u||(o.val(""),i.val(""),r.empty(),n.hide(),p())}),e.on("click",".remove-recipient",function(e){return s()(e.currentTarget).closest(".recipient").remove()}),e.on("change","input#compose-recipients",function(){m(s()(this).val()).forEach(g),i.val("")}),e.on("keypress","input#compose-recipients",function(e){var n=e.which;(32===n||13===n||/[;:,']/i.test(String.fromCharCode(n)))&&(m(s()(this).val()).forEach(g),i.val(""),e.preventDefault(),e.stopPropagation()),i.focus()}),d.on("click",function(){return e.modal("hide")}),c.on("click",f),o.on("keydown",function(e){e.ctrlKey&&13===e.keyCode&&(f(),e.preventDefault(),e.stopPropagation())}),l.on("click",".groups a",function(e){return g(s()(e.currentTarget).text(),"group")}),s()("#message-reply").on("click",function(n){e.unbind("shown.bs.modal").on("shown.bs.modal",function(e){return s()(e.currentTarget).find("textarea").focus()}),e.find("#composeLabel").text("Reply ..."),e.find(".modal-recipients,.modal-settings,.modal-user-groups").hide(),i.val(""),r.empty(),g(s()(n.currentTarget).data("replyto"))})})}),s()(function(){var e=s()("table#inbox");if(e.length>0){var n=function(e){var n=s()(this);e.preventDefault(),e.stopPropagation(),n.hasClass("active")?function(){s()(this).removeClass("active").find("i").attr("class","fas fa-dot-circle")}.apply(n):function(){s()(this).addClass("active").find("i").attr("class","fas fa-circle")}.apply(n)},t=function(e){var n=s()(this).data("id");void 0!==n&&(e.preventDefault(),e.stopPropagation(),window.location.href="/profile/messages/"+encodeURIComponent(n))},a=function(){s()(this).addClass("pressed")},o=function(){s()(this).removeClass("pressed")};e.each(function(e,i){s()(i).on("click","tbody tr",t).on("click","tbody td.selector",n).on("mousedown","tbody tr",a).on("mouseup","tbody tr",o)}),s()("#mark-all").on("click",function(){return s.a.ajax({url:"/api/messages/open"}).always(function(){return window.location.reload()}),!1});var c=0,d=s()("#inbox-show-more"),l=s()("#inbox-empty"),u=s()("#inbox-loading"),p=function(n){c+=25,u.fadeOut();var t=e.find("tbody"),a=(n.length?n:[]).map(function(e){var n=e.message.trim();return i.forEach(function(e){return n=e.format(r,n)}),'<tr data-id="'.concat(e.userid,'" data-username="').concat(e.user,'" class="').concat(e.unread<=0?"read":"unread",'">')+'<td class="from">'+'<a href="/profile/messages/'.concat(e.userid,'">').concat(e.user,"</a> ")+'<span class="count">('.concat(e.unread>0?e.unread:parseInt(e.read)+parseInt(e.unread),")</span>")+"</td>"+'<td class="message"><span>'.concat(n,"</span></td>")+'<td class="timestamp">'.concat(e.timestamp,"</td>")+"</tr>"});t.append(a.join("")+(a.length?"<hr />":"")),d.toggle(a.length>20),e.toggle(a.length>0),l.toggle(0===a.length)},f=function(){return u.fadeIn(),s.a.ajax({url:"/api/messages/inbox",data:{s:c}}).done(p).fail(console.error)};d.on("click",f),f()}}),s()(function(){var e=s()("#message-list"),n=e.data("userid"),t=e.data("username"),a=e.find("#message-container"),o=e.find("#message-list-loading"),c=e.find("#message-list-more");if(e.length>0){var d=0,l=function(e){d+=10,o.fadeOut(),c.show(),c.attr("disabled",e&&0!==e.length?null:"disabled");var t=(e.length?e:[]).reverse().map(function(e){var t=e.message.trim();i.forEach(function(e){return t=e.format(r,t)});var a=parseInt(n)!==parseInt(e.userid),s=[];return s.push("message-active"),s.push("message-"+(a?"me":"notme")),s.push(1===e.isread?"message-read":"message-unread"),'<div id="'.concat(e.id,'" class="message ').concat(s.join(" "),' content">')+'<div class="message-from">'+'<div class="message-date float-right"><i class="fa message-list-item-status float-right '.concat(a?"read":"unread",'"></i>  ').concat(e.timestamp,"</div>")+'<span title="'.concat(e.from,'">').concat(e.from,"</span>")+'</div><div class="message-content">'+'<div class="message-txt">'.concat(t,"</div>")+"</div></div>"});a.prepend(t.join("")+(t.length?"<hr />":""))},u=function(){return o.fadeIn(),s.a.ajax({url:"/api/messages/usr/".concat(encodeURIComponent(t.toLowerCase()),"/inbox"),data:{s:d}}).always(l)};c.on("click",function(){return u().done(function(){return window.scrollTo(0,0)})}),u().done(function(){return window.scrollTo(0,document.body.scrollHeight)})}})}},[[184,1,0,2]]]);