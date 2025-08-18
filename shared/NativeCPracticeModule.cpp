#include "NativeCPracticeModule.h"

namespace facebook::react {

NativeCPracticeModule::NativeCPracticeModule(std::shared_ptr<CallInvoker> jsInvoker)
    : NativeCPracticeModuleCxxSpec(std::move(jsInvoker)) {}

std::string NativeCPracticeModule::reverseString(jsi::Runtime& rt, std::string input) {
  return std::string(input.rbegin(), input.rend());
}

} // namespace facebook::react