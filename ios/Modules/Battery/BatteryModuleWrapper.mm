#import "BatteryModuleWrapper.h"
#include "cpp/battery/BatteryModule.h"

@implementation BatteryModuleWrapper

+ (int)getBatteryLevel {
    return battery::getBatteryLevel(); 
}

+ (BOOL)isCharging {
    return battery::isCharging();  
}

@end