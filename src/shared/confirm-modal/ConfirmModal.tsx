import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { confirmModalStyle } from './confirmModal.style'
import SharedButton from '../button/SharedButton'

export interface ConfirmModalProps {
	title: string;
	children: string;
	open: boolean;
	setOpen: ( event: any ) => void;
	onConfirm?: ( event: any ) => void
}

export type PropTypes =
	& ConfirmModalProps

export default function ConfirmModal( { title, children, open, setOpen }: PropTypes ) {

	const classes = confirmModalStyle()
	return (
		<div>
			<Dialog
				classes={ {
					paper: classes.dialog
				} }
				className={ classes.dialog }
				open={ open }
				onClose={ () => setOpen( false ) }
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title" className={ classes.dialogTitle }>
					<span className={ classes.dialogTitle }>{ title }</span>
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description" className={classes.dialogContentText}>
						{ children }
					</DialogContentText>
				</DialogContent>
				<DialogActions className={ classes.dialogActions }>
					<SharedButton label={ 'Cancel' } onClick={ () => setOpen( false ) } filled={ false }/>
					<SharedButton label={ 'Confirm' } onClick={ () => setOpen( false ) } filled={ true }/>
				</DialogActions>
			</Dialog>
		</div>
	)
}
