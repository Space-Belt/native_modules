import Foundation
import React

@objc(BatteryModule)
class RCTBatteryModule: NSObject, TurboModule {
  
  @objc
  func getBatteryLevel(_ resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) {
    let level = BatteryModuleWrapper.getBatteryLevel()
    print("Battery Level (Swift) =", level)
    resolve(level)
    return level
  }

  @objc
  func isCharging(_ resolve: @escaping RCTPromiseResolveBlock,
                  reject: @escaping RCTPromiseRejectBlock) {
    let charging = BatteryModuleWrapper.isCharging()
    print("Is Charging (Swift) =", charging)
    resolve(charging)
    return charging;
  }
}