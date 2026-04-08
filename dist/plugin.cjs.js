'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const NearbyMultipeer = core.registerPlugin('NearbyMultipeer', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.NearbyMultipeerWeb()),
});

class NearbyMultipeerWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async initialize(options) {
        console.log('Web implementation not available for Nearby Connections API', options);
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async setStrategy(options) {
        console.log('Web implementation not available for Nearby Connections API', options);
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async startAdvertising(options) {
        console.log('Web implementation not available for Nearby Connections API', options);
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async stopAdvertising() {
        console.log('Web implementation not available for Nearby Connections API');
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async startDiscovery() {
        console.log('Web implementation not available for Nearby Connections API');
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async stopDiscovery() {
        console.log('Web implementation not available for Nearby Connections API');
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async connect(options) {
        console.log('Web implementation not available for Nearby Connections API', options);
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async acceptConnection(options) {
        console.log('Web implementation not available for Nearby Connections API', options);
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async rejectConnection(options) {
        console.log('Web implementation not available for Nearby Connections API', options);
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async disconnectFromEndpoint(options) {
        console.log('Web implementation not available for Nearby Connections API', options);
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async disconnect() {
        console.log('Web implementation not available for Nearby Connections API');
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async sendMessage(options) {
        console.log('Web implementation not available for Nearby Connections API', options);
        throw this.unavailable('Nearby Connections API not available on web');
    }
    async setLogLevel(options) {
        console.log('Web implementation not available for Nearby Connections API', options);
        throw this.unavailable('Nearby Connections API not available on web');
    }
    addListener(eventName, listenerFunc) {
        const listener = super.addListener(eventName, listenerFunc);
        return Object.assign(listener, {
            remove: () => {
                this.removeAllListeners();
                return Promise.resolve();
            }
        });
    }
    async removeAllListeners() {
        await super.removeAllListeners();
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NearbyMultipeerWeb: NearbyMultipeerWeb
});

exports.NearbyMultipeer = NearbyMultipeer;
//# sourceMappingURL=plugin.cjs.js.map
