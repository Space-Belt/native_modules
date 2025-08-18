#pragma once

#include <NativeCPracticeModuleCxxSpecJSI.h>

#include <memory>
#include <string>

namespace facebook::react {

class NativeCPracticeModule : public NativeCPracticeModuleCxxSpecJSI<NativeCPracticeModule> {
public:
  NativeCPracticeModule(std::shared_ptr<CallInvoker> jsInvoker);

  std::string reverseString(jsi::Runtime& rt, std::string input);
};

} 