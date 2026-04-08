import type { PluginListenerHandle } from '@capacitor/core';
import { WebPlugin } from '@capacitor/core';
import type { NearbyMultipeerPlugin, ConnectionRequestEvent, ConnectionResultEvent, EndpointFoundEvent, EndpointLostEvent, MessageReceivedEvent, PayloadTransferUpdateEvent } from './definitions';
export declare class NearbyMultipeerWeb extends WebPlugin implements NearbyMultipeerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    initialize(options: {
        serviceId: string;
        serviceUUIDString?: string;
    }): Promise<void>;
    setStrategy(options: {
        strategy: string;
    }): Promise<void>;
    startAdvertising(options: {
        displayName?: string;
    }): Promise<void>;
    stopAdvertising(): Promise<void>;
    startDiscovery(): Promise<void>;
    stopDiscovery(): Promise<void>;
    connect(options: {
        endpointId: string;
        displayName?: string;
    }): Promise<void>;
    acceptConnection(options: {
        endpointId: string;
    }): Promise<void>;
    rejectConnection(options: {
        endpointId: string;
    }): Promise<void>;
    disconnectFromEndpoint(options: {
        endpointId: string;
    }): Promise<void>;
    disconnect(): Promise<void>;
    sendMessage(options: {
        endpointId: string;
        data: string;
    }): Promise<void>;
    setLogLevel(options: {
        logLevel: number;
    }): Promise<void>;
    addListener(eventName: 'connectionRequested', listenerFunc: (event: ConnectionRequestEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: 'connectionResult', listenerFunc: (event: ConnectionResultEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: 'endpointFound', listenerFunc: (event: EndpointFoundEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: 'endpointLost', listenerFunc: (event: EndpointLostEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: 'message', listenerFunc: (event: MessageReceivedEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: 'payloadTransferUpdate', listenerFunc: (event: PayloadTransferUpdateEvent) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    removeAllListeners(): Promise<void>;
}
