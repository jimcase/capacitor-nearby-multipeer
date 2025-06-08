import Foundation

/**
 * Errores específicos para operaciones Bluetooth Low Energy (BLE)
 */
enum BleError: Error {
    case notInitialized
    case bluetoothNotAvailable
    case bluetoothNotPoweredOn
    case advertisingFailed(String)
    case scanningFailed(String)
    case connectionFailed(String)
    case serviceDiscoveryFailed(String)
    case characteristicNotFound
    case dataTransmissionFailed(String)
    case invalidData
    case timeout
    case unknown(String)

    var localizedDescription: String {
        switch self {
        case .notInitialized:
            return "BLE no inicializado. Llame a initialize primero."
        case .bluetoothNotAvailable:
            return "Bluetooth no disponible en este dispositivo."
        case .bluetoothNotPoweredOn:
            return "Bluetooth no está activado."
        case .advertisingFailed(let reason):
            return "Error al iniciar advertising BLE: \(reason)"
        case .scanningFailed(let reason):
            return "Error al iniciar escaneo BLE: \(reason)"
        case .connectionFailed(let reason):
            return "Error al conectar con dispositivo BLE: \(reason)"
        case .serviceDiscoveryFailed(let reason):
            return "Error al descubrir servicios BLE: \(reason)"
        case .characteristicNotFound:
            return "Característica BLE no encontrada."
        case .dataTransmissionFailed(let reason):
            return "Error en transmisión de datos BLE: \(reason)"
        case .invalidData:
            return "Datos BLE inválidos."
        case .timeout:
            return "Operación BLE excedió el tiempo de espera."
        case .unknown(let message):
            return "Error BLE desconocido: \(message)"
        }
    }
}
