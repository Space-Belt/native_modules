//
//  NativeCPracticeProvider.m
//  NativeModules
//
//  Created by 해보자 on 8/18/25.
//

#import <Foundation/Foundation.h>

#import "NativeCPracticeProvider.h"
#import <ReactCommon/CallInvoker.h>
#import <ReactCommon/TurboModule.h>
#import "NativeCPracticeModule.h"


@implementation NativeCPracticeProvider

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeCPracticeModule>(params.jsInvoker);
}

@end
