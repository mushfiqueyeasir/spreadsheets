import React, { useState } from 'react';
import Table from './Table';


const SpreadSheet = () => {
    const [row, setRow] = useState();
    const [col, setCol] = useState();
    const [fileName, setFileName] = useState('template.csv')

    const drawTable = () => {
        setRow(document.getElementById('row').value);
        setCol(document.getElementById('col').value);

        if (row <= 0 || col <= 0) {
            alert('Row And Column Must Be Grater Than Zero');
        }
    }

    const downloadCSVFile = (csv, filename) => {
        var csv_file, download_link;

        csv_file = new Blob([csv], { type: "text/csv" });

        download_link = document.createElement("a");

        download_link.download = filename;

        download_link.href = window.URL.createObjectURL(csv_file);

        download_link.style.display = "none";

        document.body.appendChild(download_link);

        download_link.click();

    }


    const htmlToCsv = (html, filename) => {
        var data = [];
        var rows = document.querySelectorAll("table tr");

        for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("input");

            for (var j = 0; j < cols.length; j++) {
                row.push(cols[j].value);
            }

            data.push(row.join(","));
        }


        downloadCSVFile(data.join("\n"), filename);

    }

    const changeName = (event) => {
        if (event.target.value) {
            setFileName(event.target.value)
        } else {
            setFileName('template')
        }

    }

    const download = () => {
        var html = document.querySelector("table").outerHTML;
        htmlToCsv(html, fileName);
    };

    return (
        <div className='container  mx-auto p-5'>

            <div className='mb-10 grid grid-cols-1 lg:grid-cols-3  gap-5'>
                <label className='flex items-center'>Row:  <input id='row' type="number" placeholder="" class="input input-bordered w-full max-w-xs ml-10 lg:ml-5" /></label>

                <label className='flex items-center'>Column: <input id='col' type="number" placeholder="" class="input input-bordered w-full max-w-xs ml-5" /> </label>

                <label className='flex items-center'>File Name: <input onBlur={changeName} type="text" placeholder="" class="input input-bordered w-full max-w-xs ml-5" /> </label>

                <button onClick={drawTable} class="btn btn-warning max-w-xs">Draw Table</button>

            </div>


            {
                row <= 0 || col <= 0 || row === undefined || col === undefined ?
                    <>
                    </>
                    :
                    <>
                        <Table row={row} col={col} />
                        <div className='flex'>
                            <button onClick={download} className="btn mt-5">Export</button>
                        </div>
                    </>
            }

        </div>
    );
};

export default SpreadSheet;