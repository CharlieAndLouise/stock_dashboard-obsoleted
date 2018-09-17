
export class LocalStorageAgent {
	public static getItem(key: string, defaultValue: any = null) {
		if (key in localStorage) {
			return localStorage.getItem(key);
		}
    	else {
			return defaultValue;
		}
	}

	public static setItem(key: string, value: string) {
    	localStorage.setItem(key, value);
    	return value;
	}
}
