import { TurboModuleRegistry } from 'react-native';
import type { Spec as BatterySpec } from './RCTBatteryModuleType';

const BatteryModule = TurboModuleRegistry.get<BatterySpec>('RCTBatteryModule');

if (BatteryModule != null) {
  console.log('Battery Level:', BatteryModule.getBatteryLevel());
  console.log('Is Charging:', BatteryModule.isCharging());
}
