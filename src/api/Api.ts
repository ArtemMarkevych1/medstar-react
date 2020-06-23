import axios from "axios";
import { CENSUS_STATS_URL, DETAILS_HISTORY_URL, UNIT_ABBRS_URL, LOGO_URL } from "../constants/constants";
import { abbrFilterType, OrderByType, OrderType } from '../models/types'


export default class Api {
	static getAllGraphData() {
		return axios.get(`${CENSUS_STATS_URL}`);
	}
	static getFilteredGraphData(abbrFilter: abbrFilterType) {
		return axios.get(`${CENSUS_STATS_URL}?unitAbbr=${abbrFilter}`);
	}
	static getAllTableData(page: number, size: number, sortBy?: OrderByType, order?: OrderType) {
		if (sortBy && order) {
			return axios.get(`${DETAILS_HISTORY_URL}?page=${page}&size=${size}&sort=${sortBy},${order}`);
		} else {
			return axios.get(`${DETAILS_HISTORY_URL}?page=${page}&size=${size}`);
		}
	}
	static getFilteredTableData(page: number, size: number, abbrFilter: abbrFilterType, sortBy?: OrderByType, order?: OrderType) {
		if (sortBy && order) {
			return axios.get(`${DETAILS_HISTORY_URL}?page=${page}&size=${size}&unitAbbr=${abbrFilter}&sort=${sortBy},${order}`);
		} else {
			return axios.get(`${DETAILS_HISTORY_URL}?page=${page}&size=${size}&unitAbbr=${abbrFilter}`);
		}
	}
	static getFilters() {
		return axios.get(`${UNIT_ABBRS_URL}`);
	}
	static getLogo() {
		return axios.get(`${LOGO_URL}`, {
			responseType: 'blob'
		})
	}
}
