import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const graphNavigationStyle = makeStyles((theme: Theme) => (
	createStyles({
		graphNavigationWrapper: {
			display: 'flex',
			alignItems: 'center',
			fontSize: '14px',
			padding: '10px 0',

			'& > div': {
				height: 'initial',
			},
		},
		navigationLabel: {
			color: '#fff',
			backgroundColor: '#0462bf',
			padding: '10px',
			minWidth: '90px',
			maxWidth: '90px',
			borderTop: '1px dashed grey',
			borderBottom: '1px dashed grey',
			outlineRight: '1px solid grey',
			outlineLeft: '1px solid grey',
			textAlign: 'center',
			margin: '-1px 0 0 -1px',
			borderLeft: '1px solid grey',
		},
		navigation: {
			alignItems: 'center',
			flexWrap: 'wrap',
			justifyContent: 'flex-start',
		},
		action: {
			width: 'fit-content',
			height: 'fit-content',
			padding: '10px',
			minWidth: '90px',
			maxWidth: '90px',
			border: '1px dashed grey',
			borderCollapse: 'separate',
			borderSpacing: '2px',
			borderLeft: '1px solid grey',
			borderRight: '1px solid grey',
			margin: '-1px 0 0 -1px',

			'&.Mui-selected': {
				backgroundColor: 'rgba(35, 73, 199, 0.2)',
				paddingTop: '10px',
			},

			'& span': {
				fontSize: '14px',
			},
		}
	})
))
