var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),r=document.querySelector(".average-population"),n=0,o=0,l=!0,i=!1,a=void 0;try{for(var u,c=t[Symbol.iterator]();!(l=(u=c.next()).done);l=!0){var p=u.value;n+=+p.textContent.split(",").join("")}}catch(t){i=!0,a=t}finally{try{l||null==c.return||c.return()}finally{if(i)throw a}}function v(t){for(var e=String(t).split("").reverse(),r="",n=0;n<e.length;n++)Number.isInteger(n/3)&&0!==n&&(r+=","),r+=e[n];return r.split("").reverse().join("")}o=String(o=n/t.length).split("."),e.textContent=v(n),r.textContent="".concat(v(o[0]),".").concat(o[1]);
//# sourceMappingURL=index.45bbadd6.js.map
