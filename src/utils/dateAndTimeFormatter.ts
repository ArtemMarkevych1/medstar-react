import moment from "moment";

export const DatetimeFormat = 'MM/DD/YY hh:mm';
export const DateTimeFormatter = (value: string, format: string) => {
	return moment(value, 'YYYY-MM-DD hh:mm:ss').format(format);
}
