import React, { useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import SharedButton from '../button/SharedButton'
import DialogActions from '@material-ui/core/DialogActions'
import { updateFormStyle } from './updateForm.style'
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { IHeadCell, TableDataType } from '../../models/types'
import Api from '../../api/Api'
import { MenuItem } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'


const headCells: IHeadCell[] = [
	{
		id: 'admitDate',
		name: 'Admit Date',
	},
	{
		id: 'unitAbbr',
		name: 'Unit Abbr',
	},
	{
		id: 'sex',
		name: 'Sex',
	},
	{
		id: 'room',
		name: 'Room',
	},
	{
		id: 'finClass',
		name: 'Fin Class Abbr',
	},
	{
		id: 'classF',
		name: 'Class'
	},
	{
		id: 'bedStatus',
		name: 'Bed Status',
	},
	{
		id: 'bed',
		name: 'Bed',
	},
	{
		id: 'admittingProv',
		name: 'Admitting Prov',
	},
	{
		id: 'actions',
		name: 'Actions'
	}
]

export interface UpdateFormProps {
	open: boolean;
	setOpen: ( event: any ) => void;
	activeData: any
}

export type PropTypes =
	& UpdateFormProps

export default function UpdateForm( { open, setOpen, activeData }: PropTypes ) {
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

	const [ data, setData ] = useState<TableDataType[]>( [] )


	const setDataHandler = () => {
		Api.getUpdateTableData()
			.then( res => {
				setData( res.data.result )

			} )
			.catch( err => console.error( err ) )
	}

	useEffect( () => {
		setDataHandler()
	}, [] )

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

					{ activeData && Object.keys( activeData )
						.filter( el => el !== 'censusDate' && el !== 'admitDate' && el !== 'admittingProv' && el !== 'patientMRN' && el!== 'id' )
						.map( ( row: any, index ) => {
								return (
									<div className={ classes.formField } key={ index }>
										<label className={ classes.label } htmlFor="">{ row }</label>
										<FormControl className={ classes.formControl }>
											<Select
												value={ '' }
												onChange={ handleRoomChange }
												displayEmpty
												className={ classes.selectEmpty }
												inputProps={ { 'aria-label': 'Without label' } }
											>
												<MenuItem value="">
													<em className={ classes.placeholder }>{ activeData[row] }</em>
												</MenuItem>
												<MenuItem value={ 10 }>Ten</MenuItem>
												<MenuItem value={ 20 }>Twenty</MenuItem>
												<MenuItem value={ 30 }>Thirty</MenuItem>
											</Select>
										</FormControl>
									</div>
								)
							}
						)
					}

					<div className={ classes.formField }>
						<label className={ classes.labelAdress } htmlFor="admitDate">Admitting Prov</label>
						<TextField className={classes.textField} id="standard-basic" label="Write address here"/>
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
