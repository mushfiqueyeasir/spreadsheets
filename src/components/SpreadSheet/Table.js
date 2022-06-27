import React from 'react';

import TrComponent from './TrComponent';

const Table = ({ row, col }) => {

    let tr = [];
    for (var i = 0; i < row; i++) {
        tr.push(<TrComponent col={col} />);
    }
    return (
        <div class="overflow-x-auto h-[60vh] border-2 border-gray-400">

            <table class="" id='table' >
                <thead className='border-2 font-bold'>
                    {tr.slice(0, 1)}
                </thead>
                <tbody className='border-2'>
                    {tr.slice(1, tr.length)}
                </tbody>
            </table>
        </div>
    );
};

export default Table;