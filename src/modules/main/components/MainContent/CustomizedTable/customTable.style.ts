import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const customTableStyle = makeStyles( ( theme: Theme ) => (
	createStyles( {
		tableWrapper: {
			padding: '30px   0',
			borderRadius: '5px',
		},
		headTableCell: {
			backgroundColor: '#0462bf',
			color: '#fff',
			fontSize: '14px',
			fontWeight: 'bold',
			borderCollapse: 'separate',
			borderSpacing: '2px',
			padding: '10px',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
		tableCell: {
			fontSize: '14px',
			border: '1px solid rgba(0, 0, 0, 0.1)',
			borderCollapse: 'separate',
			borderSpacing: '2px',
			padding: '10px',
		},
		actions: {
			display: 'flex',
			justifyContent: 'space-around',
		},
		pagination: {
			borderTop: '1px solid rgba(0, 0, 0, 0.1)',
		},
		table: {
			borderCollapse: 'collapse',
			borderStyle: 'hidden',
		},
	} )
) )
