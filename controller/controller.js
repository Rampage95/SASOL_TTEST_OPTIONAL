

// We are going to use the "hot-formula-parser" node.js package module to calculate the excel formula
var FormulaParser = require('hot-formula-parser').Parser;
var parser = new FormulaParser();

exports.excel_formula_parser = (req, res) => {
    // request body will be JSON stringified array (JSON.stringify(array)) refrenced by the key "sheet". ;
    // console.log('request:', req.body.sheet);

    // retrieve the array object from req.body using JSON.parse()
    const data = JSON.parse(req.body.sheet);
    console.log('request:', data);

    // the API hook below is fired when retrieving cell value by its cell coordinations (ex B2, A1...)
    parser.on('callCellValue', function (cellCoord, done) {
        done(data[cellCoord.row.index][cellCoord.column.index])
    });

    // the API hook below is fired when retrieving a cell range value (ex A1:A7)
    parser.on('callRangeValue', function (startCellCoord, endCellCoord, done) {
        let fragment = [];
        for (let row = startCellCoord.row.index; row <= endCellCoord.row.index; row++) {
            let rowData = data[row];
            let colFragment = [];
            for (let col = startCellCoord.column.index; col <= endCellCoord.column.index; col++) {
                colFragment.push(rowData[col]);
            }
            fragment.push(colFragment);
        }
        if (fragment) {
            done(fragment);
        }
    });

    // Calculating the excel formula
    for (let row = 0; row < data.length; row++) {
        for(let column = 0; column < data[row].length; column++) {
            let cell = data[row][column];
            if (typeof cell !== 'number' && typeof cell !== 'string') {
                res.status(500).send(`Type Error: Invalid data type of ${typeof cell} provided in excel sheet array at row:${row}, column:${column}.`)
            }
            if (typeof cell === 'string') {
                // removing the '=' sign at the beginning of the formula (if it exists)
                let formula = cell.charAt(0) === '=' ? cell.slice(1) : cell;
                const RESULT = parser.parse(formula);
                if (RESULT.error) {
                    res.status(500).send(`Error: Invalid excel formula \"${formula}\" provided in excel sheet array at row:${row}, column:${column}.`);
                }
                else {
                    data[row][column] = RESULT.result;
                }
            }
        }
    }

    console.log('result:', data);

    res.status(200).send(JSON.stringify(data));
};