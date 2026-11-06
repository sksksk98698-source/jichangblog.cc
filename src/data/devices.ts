import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [];

export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
