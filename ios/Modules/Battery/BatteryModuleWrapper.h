#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface BatteryModuleWrapper : NSObject

+ (int)getBatteryLevel;
+ (BOOL)isCharging;

@end

NS_ASSUME_NONNULL_END