!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i"),l={delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]'),amountEl:document.querySelector('input[name="amount"]'),form:document.querySelector(".form")};function u(e,n){Math.random()>.3?o.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}l.form.addEventListener("submit",(function(e){e.preventDefault();var n=0,t=Number(l.delayEl.value),r=Number(l.stepEl.value),o=Number(l.amountEl.value);if(0===r)setTimeout((function(){var e=setInterval((function(){if(u(n+=1,t),o===n)return clearInterval(e)}),0)}),t);else var a=setInterval((function(){if(u(n+=1,t),t+=r,o===n)return clearInterval(a)}),t)}))}();
//# sourceMappingURL=03-promises.8ab64b85.js.map
