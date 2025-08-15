import { TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  getBatteryLevel(): number;
  isCharging(): boolean;
}
