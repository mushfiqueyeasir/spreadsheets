import React from 'react';
import TdComponent from './TdComponent';

const TrComponent = ({ col }) => {

    let td = [];
    for (var i = 0; i < col; i++) {
        td.push(<TdComponent />);
    }

    return (
        <tr>
            {td}
        </tr>
    );
};

export default TrComponent;