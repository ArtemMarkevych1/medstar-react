import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const headerStyle = makeStyles((theme: Theme) => (
	createStyles({
		headerWrapper: {
			padding: '10px 0',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
	})
))
