'use strict';
(() => {
  const info = Object.freeze({"sourceCommit":"2deaa02de02b1e87321d01651ec725da19930ede","storageNamespace":"suyuf-preview:phase-f:","developmentSnapshot":false});
  if (window.PHASE_F_PREVIEW) throw new Error('Preview storage initialized twice');
  const base = { get: store.get, set: store.set, del: store.del };
  for (const method of ['get', 'set', 'del']) {
    store[method] = (key, ...args) => base[method].call(store, info.storageNamespace + key, ...args);
  }
  Object.defineProperty(window, 'PHASE_F_PREVIEW', { value: info });
})();
