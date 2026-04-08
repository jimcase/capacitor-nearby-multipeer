import { registerPlugin } from '@capacitor/core';
const NearbyMultipeer = registerPlugin('NearbyMultipeer', {
    web: () => import('./web').then(m => new m.NearbyMultipeerWeb()),
});
export * from './definitions';
export { NearbyMultipeer };
//# sourceMappingURL=index.js.map