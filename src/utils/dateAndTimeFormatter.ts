import moment from "moment";

export const datetimeFormat = 'MM/DD/YY hh:mm';
export const dateTimeFormatter = ( value: string, format: string) => {
	return moment(value, 'YYYY-MM-DD hh:mm:ss').format(format);
}
