const uncapFirstLetter = (string: string) => {
	return string.charAt(0).toLowerCase() + string.slice(1);
}

export const getDateTime = (datetime: Date, uncap: boolean) => {
	const timeOptions: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		hour: '2-digit',
		hour12: false,
		minute: '2-digit',
		second: '2-digit'
	};

	if (uncap) {
		return uncapFirstLetter(datetime.toLocaleTimeString(undefined, timeOptions));
	}

	return datetime.toLocaleTimeString(undefined, timeOptions);
};

export const getTimePassed = (datetime: number) => {
	const now = Date.now();

	console.log(now);
	console.log(datetime);

	const millisPassed = now - datetime;

	return Math.floor(millisPassed / 60000);
};