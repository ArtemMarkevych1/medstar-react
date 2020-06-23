import { createStyles, makeStyles, Theme } from "@material-ui/core"

export const logoStyle = makeStyles((theme: Theme) => (
	createStyles({
		logoWrapper: {
			display: 'flex',
			alignItems: 'center',
			maxWidth: '200px',
			height: 'auto',

			'& > img': {
				width: '100%',
			},
		},
	})
))
