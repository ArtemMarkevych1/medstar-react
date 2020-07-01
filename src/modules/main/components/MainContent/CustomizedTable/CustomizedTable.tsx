import React, { useEffect, useState } from 'react'
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	TableSortLabel
} from '@material-ui/core'
import { customTableStyle } from './customTable.style'
import Api from '../../../../../api/Api'
import { abbrFilterType, IHeadCell, OrderByType, OrderType, TableDataType } from '../../../../../models/types'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import ConfirmModal from '../../../../../shared/confirm-modal/ConfirmModal'
import UpdateForm from '../../../../../shared/update-form/UpdateForm'


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

interface IProps {
	abbrFilter: abbrFilterType;
}

const CustomizedTable: React.FC<IProps> = ( { abbrFilter } ) => {
	const classes = customTableStyle()
	const [ data, setData ] = useState<TableDataType[]>( [] )
	const [ orderBy, setOrderBy ] = useState<OrderByType | ''>( '' )
	const [ order, setOrder ] = useState<OrderType>( 'asc' )
	const [ page, setPage ] = useState<number>( 0 )
	const [ rowsTotalCount, setRowsTotalCount ] = useState<number>( 0 )
	const emptyRows = 10 - data.length
	const [ openDelete, setOpenDelete ] = React.useState( false )
	const [ openUpdate, setOpenUpdate ] = React.useState( false )

	const handleDeleteOpen = () => {
		setOpenDelete( true )
	}

	const handleUpdateOpen = () => {
		setOpenUpdate( true )
	}

	const setDataHandler = () => {
		if ( orderBy ) {
			if ( abbrFilter === 'ALL' ) {
				Api.getAllTableData( page, 10, orderBy, order )
					.then( res => {
						setData( res.data.result )
						setRowsTotalCount( res.data.total )
					} )
					.catch( err => console.error( err ) )
			} else {
				Api.getFilteredTableData( page, 10, abbrFilter, orderBy, order )
					.then( res => {
						setData( res.data.result )
						setRowsTotalCount( res.data.total )
					} )
					.catch( err => console.error( err ) )
			}
		} else {
			if ( abbrFilter === 'ALL' ) {
				Api.getAllTableData( page, 10 )
					.then( res => {
						setData( res.data.result )
						setRowsTotalCount( res.data.total )
					} )
					.catch( err => console.error( err ) )
			} else {
				Api.getFilteredTableData( page, 10, abbrFilter )
					.then( res => {
						setData( res.data.result )
						setRowsTotalCount( res.data.total )
					} )
					.catch( err => console.error( err ) )
			}
		}
	}

	useEffect( () => {
		setDataHandler()
	}, [ page, abbrFilter, orderBy, order ] )

	const handleChangePage = ( event: any, newPage: number ) => {
		setPage( newPage )
	}

	const handleSortColumn = ( sortBy: OrderByType ) => {
		setOrder( order === 'asc' ? 'desc' : 'asc' )
		setOrderBy( sortBy )
	}

	return (
		<div className={ classes.tableWrapper }>
			{ data.length > 0 && (
				<Paper>
					<TableContainer>
						<Table className={ classes.table }>
							<TableHead>
								<TableRow>
									{ headCells && headCells.map( cell =>
										<TableCell key={ cell.id } className={ classes.headTableCell }>
											<TableSortLabel
												active={ orderBy === cell.id }
												direction={ 'asc' || 'desc' }
												onClick={ () => handleSortColumn( cell.id ) }
											>
												{ cell.name }
											</TableSortLabel>
										</TableCell> ) }
								</TableRow>
							</TableHead>
							<TableBody>
								{ data.length > 0 && data.map( row =>
									<TableRow key={ row.id }>
										<TableCell className={ classes.tableCell } component="th" scope="row">
											{ row.admitDate }
										</TableCell>
										<TableCell className={ classes.tableCell }>{ row.unitAbbr }</TableCell>
										<TableCell className={ classes.tableCell }>{ row.sex }</TableCell>
										<TableCell className={ classes.tableCell }>{ row.room }</TableCell>
										<TableCell className={ classes.tableCell }>{ row.finClass }</TableCell>
										<TableCell className={ classes.tableCell }>{ row.classF }</TableCell>
										<TableCell className={ classes.tableCell }>{ row.bedStatus }</TableCell>
										<TableCell className={ classes.tableCell }>{ row.bed }</TableCell>
										<TableCell className={ classes.tableCell }>{ row.admittingProv }</TableCell>
										<TableCell className={ classes.actions }>
											<BorderColorIcon onClick={ () => handleUpdateOpen() }/>
											<DeleteForeverIcon onClick={ () => handleDeleteOpen() }/>
										</TableCell>
									</TableRow>
								) }
								{ emptyRows > 0 && (
									<TableRow style={ { height: 41 * emptyRows } }>
										<TableCell colSpan={ 6 }/>
									</TableRow>
								) }
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						className={ classes.pagination }
						rowsPerPageOptions={ [ 0 ] }
						component="div"
						count={ rowsTotalCount }
						rowsPerPage={ 10 }
						page={ page }
						onChangePage={ handleChangePage }
					/>
				</Paper>
			) }
			<ConfirmModal title={ 'Confirm Action' } children={ 'Do you really want to delete this?' } open={ openDelete }
						  setOpen={ setOpenDelete }/>
			{/*<ConfirmModal title={ 'Confirm Action' } children={ 'Do you really want to update this?' } open={ openUpdate }*/}
			{/*			  setOpen={ setOpenUpdate }/>*/}
						  <UpdateForm open={openUpdate} setOpen={setOpenUpdate}/>
		</div>
	)
}
export default CustomizedTable
