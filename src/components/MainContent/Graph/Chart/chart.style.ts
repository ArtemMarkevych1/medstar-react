import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const chartStyle = makeStyles((theme: Theme) => (
	createStyles({
		chart: {
			position: 'relative',
			padding: '20px 0',
		},
		container: {
			padding: '0',
		},
		tableType: {
			textAlign: 'center',
			margin: '20px 0',
		},
		yAxisName: {
			fontWeight: 'bold',
			fontSize: '12px',
			position: 'absolute',
			left: 0,
			top: '50%',
			transform: ' translateY(-50%) rotate(-90deg)',
		},
		xAxisName: {
			fontWeight: 'bold',
			fontSize: '12px',
			position: 'absolute',
			bottom: 0,
			left: '50%',
			transform: 'translateX(-50%)',
		},
		legendWrapper: {
			position: 'relative',
		},
		legendTitle: {
			position: 'absolute',
			top: '-25px',
			fontWeight: 'bold',
			left: '50%',
			transform: 'translateX(-50%)',
		},
		tooltip: {
			backgroundColor: '#fff',
			padding: '10px',
			border: '1px solid rgba(0, 0, 0, 0.3)',

			'& > .label': {
				color: '#0462bf',
				fontWeight: 'bold'
			},
		},
	})
));
