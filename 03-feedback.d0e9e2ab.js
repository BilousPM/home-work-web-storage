var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=a||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return f.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,v=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,u=setTimeout(T,t),v?y(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-c>=i}function T(){var e=m();if(O(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-f);return p?s(n,i-(e-c)):n}(e))}function h(e){return u=void 0,b&&r?y(e):(r=o=void 0,a)}function S(){var e=m(),n=O(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(p)return u=setTimeout(T,t),y(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=g(t)||0,d(n)&&(v=!!n.leading,i=(p="maxWait"in n)?l(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},S.flush=function(){return void 0===u?a:h(m())},S}function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(d(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=d(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=r.test(e);return u||o.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const p=document.querySelector(".feedback-form");p.addEventListener("input",(function(e){b[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))})),p.addEventListener("submit",(function(e){if(""===e.target.email.value||""===e.target.message.value)return;e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(b)}));const b={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;p.email.value=e.email||"",p.message.value=e.message||"",b.email=p.email.value,b.message=p.message.value}();
//# sourceMappingURL=03-feedback.d0e9e2ab.js.map