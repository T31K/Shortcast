export function debounce(func, delay) {
  let timeoutId;
  let cancel = function () {
    clearTimeout(timeoutId);
  };
  let debounced = function (...args) {
    cancel();
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
  debounced.cancel = cancel;
  return debounced;
}
