import React, { useMemo } from 'react'
import { useGlobalFilter, usePagination, useTable } from 'react-table'
import { GlobalFilter } from './GlobalFilter'
import { COLUMNS } from './columns'
// import MOCK_DATA from './MOCK_DATA.json'

export const PaginationTable = ({ MOCK_DATA }) => {
	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => MOCK_DATA, [MOCK_DATA])

	const tableInstance = useTable({
		columns: columns,
		data: data
	}, useGlobalFilter, usePagination)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		state,
		setGlobalFilter,
		prepareRow
	} = tableInstance

	const { globalFilter, pageIndex } = state

	return (
		<div>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<table {...getTableProps()} className='table table-bordered table-striped table-sm table-responsive-lg'>
				<thead className="thead-dark">
					{
						headerGroups.map(headerGroup => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<th {...column.getHeaderProps()}>{column.render('Header')}</th>
								))}
							</tr>
						))
					}
				</thead>
				<tbody {...getTableBodyProps()}>
					{
						page.map(row => {
							prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									{
										row.cells.map(cell => (
											<td {...cell.getCellProps()}>
												{cell.render('Cell')}
											</td>
										))
									}
								</tr>
							)
						})
					}
				</tbody>
			</table>
			<div>
				<span>
					Page{' '}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>{'  '}
				</span>
				<button className="btn btn-success btn-sm" onClick={() => previousPage()} disabled={!canPreviousPage} >Previous</button>
				<button className="btn btn-success btn-sm" onClick={() => nextPage()} disabled={!canNextPage} >Next</button>
			</div>
		</div>
	)
}