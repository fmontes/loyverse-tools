import React, { useState } from 'react';
import Table from './components/Table';

import './App.css';

function parseData(csv) {
    var lines = csv.split('\n');

    var result = [];
    var headers = lines[0].split(',');

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(',');

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    return result; //JavaScript object
}

function work(target) {
    return new Promise((resolve, reject) => {
        const file = target.files[0];

        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = ({ target }) => {
            const data = parseData(target.result);
            const res = data
                .filter(item => {
                    return item['Disponibles para la venta [Smile]'] === 'Y';
                })
                .map(item => {
                    return {
                        name: item['Nombre'],
                        qty: parseInt(item['En inventario [Smile]']),
                        supplier: item['Proveedor']
                    };
                })
                .sort(function(itemA, itemB) {
                    return itemA.qty - itemB.qty;
                });
            return resolve(res);
        };
        reader.onerror = () => {
            reject('Error');
        };
    });
}
function App() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Nombre',
                accessor: 'name'
            },
            {
                Header: 'Cantidad',
                accessor: 'qty'
            },
            {
                Header: 'Proveedor',
                accessor: 'supplier'
            }
        ],
        []
    );

    const [data, setData] = useState([]);
    return (
        <div className="App">
            <h1>Productos con inventario bajo</h1>
            <input
                type="file"
                onChange={async ({ currentTarget }) => {
                    const data = await work(currentTarget);
                    setData(data);
                }}
            />
            <hr />
            {data.length ? <Table columns={columns} data={data} /> : null}
        </div>
    );
}

export default App;
