webpackJsonp([2],{6:function(e,o,s){e.exports=s(7)},7:function(e,o,s){"use strict";var r=s(0),n=r("#current-shows");!function(e,o,s){for(var r=Math.floor(Date.now()/1e3),n=0;n<o.length;++n){var t=e(o[n]);s(t,r>parseInt(t.data("time"),10))}}(r,r("#previous-shows > div"),function(e,o){o||(e.detach(),n.prepend(e))}),n.is(":parent")||(r("#current-shows").remove(),r("#no-current-shows-message").removeClass("hidden")),r("#show-root").removeClass("load")}},[6]);