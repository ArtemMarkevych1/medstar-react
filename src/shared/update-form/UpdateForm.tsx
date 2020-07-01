import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import SharedButton from '../button/SharedButton'
import DialogActions from '@material-ui/core/DialogActions'
import { updateFormStyle } from './updateForm.style'
import { TextField } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export interface UpdateFormProps {
	open: boolean;
	setOpen: ( event: any ) => void;
}

export type PropTypes =
	& UpdateFormProps

export default function UpdateForm( { open, setOpen }: PropTypes ) {
	const classes = updateFormStyle()

	const [ selectedDate, setSelectedDate ] = React.useState( new Date() )
	const handleDateChange = ( date: any ) => {
		setSelectedDate( date )
	}

	const [ unitAbbr, setUnitAbbr ] = React.useState( '' )
	const handleUnitAbbrChange = ( event: any ) => {
		setUnitAbbr( event.target.value )
	}

	const [ sex, setSex ] = React.useState( '' )
	const handleSexChange = ( event: any ) => {
		setSex( event.target.value )
	}

	const [ room, setRoom ] = React.useState( '' )
	const handleRoomChange = ( event: any ) => {
		setRoom( event.target.value )
	}

	const [ finClass, setFinClass ] = React.useState( '' )
	const handleFinClassChange = ( event: any ) => {
		setFinClass( event.target.value )
	}

	const [ classF, setClassF ] = React.useState( '' )
	const handleClassFChange = ( event: any ) => {
		setClassF( event.target.value )
	}

	const [ bedStatus, setBedStatus ] = React.useState( '' )
	const handleBedStatusChange = ( event: any ) => {
		setBedStatus( event.target.value )
	}

	const [ bed, setBed ] = React.useState( '' )
	const handleBedChange = ( event: any ) => {
		setBed( event.target.value )
	}

	const [ admittingProv, setAdmittingProv ] = React.useState( '' )
	const handleAdmittingProv = ( event: any ) => {
		setAdmittingProv( event.target.value )
	}

	const handleSubmit = ( e: React.FormEvent ) => {
		e.preventDefault()
	}

	return (
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
			<DialogContent>
				<form onSubmit={ handleSubmit }>
					<div className={ classes.formField }>
						<label className={ classes.labelPicker } htmlFor="admitDate">Admit Date</label>
						<MuiPickersUtilsProvider utils={ DateFnsUtils }>
							<KeyboardDatePicker
								margin="normal"
								id="date-picker-dialog"
								format="MM/dd/yyyy"
								value={ selectedDate }
								onChange={ handleDateChange }
								KeyboardButtonProps={ {
									'aria-label': 'change date',
								} }
							/>
						</MuiPickersUtilsProvider>
					</div>
					<div className={ classes.formField }>
						<label className={ classes.label } htmlFor="unitAbbr">Unit Abbr</label>
						<FormControl className={ classes.formControl }>
							<Select
								value={ unitAbbr }
								onChange={ handleUnitAbbrChange }
								displayEmpty
								className={ classes.selectEmpty }
								inputProps={ { 'aria-label': 'Without label' } }
							>
								<MenuItem value="">
									<em>{ '' }</em>
								</MenuItem>
								<MenuItem value={ 10 }>Ten</MenuItem>
								<MenuItem value={ 20 }>Twenty</MenuItem>
								<MenuItem value={ 30 }>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>

					<div className={ classes.formField }>
						<label className={ classes.label } htmlFor="unitAbbr">Sex</label>
						<FormControl className={ classes.formControl }>
							<Select
								value={ sex }
								onChange={ handleSexChange }
								displayEmpty
								className={ classes.selectEmpty }
								inputProps={ { 'aria-label': 'Without label' } }
							>
								<MenuItem value="">
									<em>{ '' }</em>
								</MenuItem>
								<MenuItem value={ 10 }>Ten</MenuItem>
								<MenuItem value={ 20 }>Twenty</MenuItem>
								<MenuItem value={ 30 }>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>

					<div className={ classes.formField }>
						<label className={ classes.label } htmlFor="unitAbbr">Room</label>
						<FormControl className={ classes.formControl }>
							<Select
								value={ room }
								onChange={ handleRoomChange }
								displayEmpty
								className={ classes.selectEmpty }
								inputProps={ { 'aria-label': 'Without label' } }
							>
								<MenuItem value="">
									<em>{ '' }</em>
								</MenuItem>
								<MenuItem value={ 10 }>Ten</MenuItem>
								<MenuItem value={ 20 }>Twenty</MenuItem>
								<MenuItem value={ 30 }>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>

					<div className={ classes.formField }>
						<label className={ classes.label } htmlFor="unitAbbr">Fin Class Abbr</label>
						<FormControl className={ classes.formControl }>
							<Select
								value={ finClass }
								onChange={ handleFinClassChange }
								displayEmpty
								className={ classes.selectEmpty }
								inputProps={ { 'aria-label': 'Without label' } }
							>
								<MenuItem value="">
									<em>{ '' }</em>
								</MenuItem>
								<MenuItem value={ 10 }>Ten</MenuItem>
								<MenuItem value={ 20 }>Twenty</MenuItem>
								<MenuItem value={ 30 }>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>

					<div className={ classes.formField }>
						<label className={ classes.label } htmlFor="unitAbbr">Class</label>
						<FormControl className={ classes.formControl }>
							<Select
								value={ classF }
								onChange={ handleClassFChange }
								displayEmpty
								className={ classes.selectEmpty }
								inputProps={ { 'aria-label': 'Without label' } }
							>
								<MenuItem value="">
									<em>{ '' }</em>
								</MenuItem>
								<MenuItem value={ 10 }>Ten</MenuItem>
								<MenuItem value={ 20 }>Twenty</MenuItem>
								<MenuItem value={ 30 }>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>

					<div className={ classes.formField }>
						<label className={ classes.label } htmlFor="unitAbbr">Bed Status</label>
						<FormControl className={ classes.formControl }>
							<Select
								value={ bedStatus }
								onChange={ handleBedStatusChange }
								displayEmpty
								className={ classes.selectEmpty }
								inputProps={ { 'aria-label': 'Without label' } }
							>
								<MenuItem value="">
									<em>{ '' }</em>
								</MenuItem>
								<MenuItem value={ 10 }>Ten</MenuItem>
								<MenuItem value={ 20 }>Twenty</MenuItem>
								<MenuItem value={ 30 }>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>

					<div className={ classes.formField }>
						<label className={ classes.label } htmlFor="unitAbbr">Bed</label>
						<FormControl className={ classes.formControl }>
							<Select
								value={ bed }
								onChange={ handleBedChange }
								displayEmpty
								className={ classes.selectEmpty }
								inputProps={ { 'aria-label': 'Without label' } }
							>
								<MenuItem value="">
									<em>{ '' }</em>
								</MenuItem>
								<MenuItem value={ 10 }>Ten</MenuItem>
								<MenuItem value={ 20 }>Twenty</MenuItem>
								<MenuItem value={ 30 }>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className={ classes.formField }>
						<label className={ classes.labelAdress } htmlFor="unitAbbr">Admitting Prov</label>
						<FormControl className={ classes.formControlAdress }>
							<TextField id="standard-basic" value={ admittingProv }
									   onChange={ handleAdmittingProv } className={ classes.selectEmpty }
									   label="Write address here"
							/>
						</FormControl>
					</div>

				</form>
			</DialogContent>
			<DialogActions className={ classes.dialogActions }>
				<SharedButton label={ 'Cancel' } onClick={ () => setOpen( false ) } filled={ false }/>
				<SharedButton label={ 'Confirm' } onClick={ () => setOpen( false ) } filled={ true }/>
			</DialogActions>
		</Dialog>
	)
}
