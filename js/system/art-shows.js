System.register([],(function(){"use strict";return{execute:function(){var e=document.querySelector("#current-shows"),r=Math.floor(Date.now()/1e3),t=0,o=!0,n=!1,s=void 0;try{for(var a,l=document.querySelectorAll("#previous-shows .card")[Symbol.iterator]();!(o=(a=l.next()).done);o=!0){var u=a.value;r<=parseInt(u.dataset.time,10)&&(u.parentNode.removeChild(u),e.appendChild(u),t++)}}catch(e){n=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(n)throw s}}0===t&&document.querySelector("#no-current-shows-message").classList.remove("hidden"),document.querySelector("#show-root").classList.remove("load")}}}));
