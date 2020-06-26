import React, { useState, useEffect } from 'react';
import { LineChart, ResponsiveContainer, CartesianGrid, YAxis, XAxis, Legend, Tooltip, Line, TooltipPayload } from 'recharts';
import CustomizedAxisTick from './CustomizedAxisTick/CustomizedAxisTick';
import { chartStyle } from './chart.style';
import Api from '../../../../../../api/Api';
import { datetimeFormat, dateTimeFormatter } from '../../../../../../utils/dateAndTimeFormatter'
import { abbrFilterType, GraphDataType } from '../../../../../../models/types'

interface IProps {
	abbrFilter: abbrFilterType;
}

const Chart: React.FC<IProps> = ({ abbrFilter }) => {
	const [data, setData] = useState<GraphDataType[] | undefined>(undefined);

	const getDataHandler = (abbrFilter: abbrFilterType) => {
		if (abbrFilter === 'ALL') {
			Api.getAllGraphData()
				.then(res => setData(res.data))
				.catch(err => console.log(err));
		} else {
			Api.getFilteredGraphData(abbrFilter)
				.then(res => setData(res.data))
				.catch(err => console.log(err));
		}
	}

	useEffect(() => {
		getDataHandler(abbrFilter);
	}, [abbrFilter])


	const legendFormatter = () => (
		<span className={classes.legendWrapper}>
            <span className={classes.legendTitle}>Legend</span>
            All Dept MRN Count
        </span>
	);

	const tooltipFormatter = (props: { active: boolean, label: string | number, payload: ReadonlyArray<TooltipPayload>}) => {
		if (props.active) {
			const newDatetime = dateTimeFormatter(props.payload[0].payload.datetime, datetimeFormat);
			return (
				<div className={classes.tooltip}>
					<p className="label">{`Census Date = ${newDatetime}`}</p>
					<p className="label">{`All Dept MRN Count = ${props.payload[0].value}`}</p>
				</div>
			);
		}
	};

	const classes = chartStyle();

	return (
		<div className={classes.chart}>
			{data && data.length > 0 && (
				<React.Fragment>
					<h1 className={classes.tableType}>{abbrFilter}</h1>
					<ResponsiveContainer className={classes.container} height={500}>
						<LineChart
							data={data}
							margin={{top: 20, right: 30, left: 20, bottom: 10}}
						>
							<CartesianGrid vertical={false} strokeDasharray="0"/>
							<XAxis interval={0} dataKey='datetime' minTickGap={-20} height={100} tick={(props) => <CustomizedAxisTick {...props} />}/>
							<YAxis allowDecimals={false} tick={{fontSize: '12px'}} axisLine={false} />
							<Tooltip content={(props: any) => tooltipFormatter(props)} />
							<Legend formatter={legendFormatter} wrapperStyle={{padding: '10px 0 30px'}} verticalAlign='top' />
							<Line isAnimationActive={false} dot={data.length < 2} legendType='circle' strokeWidth='2px' type='linear' dataKey='mrnCount' stroke="#0462bf" />
						</LineChart>
					</ResponsiveContainer>
					<h4 className={classes.yAxisName}>MRN Count</h4>
					<h4 className={classes.xAxisName}>Census Date</h4>
				</React.Fragment>
			)}
		</div>
	);
}

export default Chart;
