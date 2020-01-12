import React from 'react';

import { useTable, useSortBy } from 'react-table';

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data
        },
        useSortBy
    );

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                {/* Add a sort direction indicator */}
                                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, i) => {
                                if (cell.column.id === 'actions') {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            <a
                                                href={`https://r.loyverse.com/dashboard/#/goods/itemhistory?page=0&limit=100&periodName=month&periodLength=1m&arg=-1&from=1578290400000&to=1578895140000&wareId=27706807&wareName=${cell.row.original.name}&outletsIds=814446&merchantsIds=all&reasons=all`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Historia
                                            </a>
                                        </td>
                                    );
                                }
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
