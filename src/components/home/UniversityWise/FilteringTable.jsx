import React, { useMemo } from 'react'
import { useGlobalFilter, useTable } from 'react-table'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import MOCK_DATA from './MOCK_DATA.json'



export const FilterTable = () => {
	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => MOCK_DATA, [])

	const tableInstance = useTable({
		columns: columns,
		data: data
	}, useGlobalFilter)



	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = tableInstance

	const { globalFilter } = state

	return (
		<div>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<table {...getTableProps()}>
				<thead>
					{
						headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{
									headerGroup.headers.map((column) => {
										<th {...column.getHeaderProps()}>
											{column.render('Header')}
										</th>
									})
								}
							</tr>
						))
					}
				</thead>
				<tbody {...getTableBodyProps()}>
					{
						rows.map(row => {
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
		</div>
	)
}