
const getCar = () => {
    const result = getCarData();
    const carsTable = getTable(result);
    const newElementPosition = document.getElementById("car-table");
    newElementPosition.appendChild(carsTable);
}
const getCarData = () => {
    return [
        {
        "companies": "Saab AB",
        "city": "Stockholm",
        "date": "1937"
        },
        {
            "companies": "Volvo Croup",
            "city": "Göteborg",
            "date": "1927"
        },
        {
            "companies": "Sandvik AB",
            "city": "Stockholm",
            "date": "1862"
        },
        {
            "companies": "Atlas Copco Group",
            "city": "Naska",
            "date": "1873"
        },
        {
            "companies": "Electrolux AB",
            "city": "Stockholm",
            "date": "1919"
        },
        {
            "companies": "Skanska AB",
            "city": "Stockholm",
            "date": "1887"
        },
        {
            "companies": "Saab AB",
            "city": "Stockholm",
            "date": "1937"
        }

        ];
}

const getTable = (carsList) => {
    const newTable = document.createElement("table");

    carsList.map((car) => { 
        const newRow = getRow(car);
        newTable.appendChild(newRow);
    });
    return newTable;
}

const getRow = (rowData) => {
    const rowToAdd = document.createElement("tr");
   
    const tableData1 = document.createElement("td");
    tableData1.innerText = rowData.companies;
    rowToAdd.appendChild(tableData1);

    const tableData2 = document.createElement("td");
    tableData2.innerText = rowData.city;
    rowToAdd.appendChild(tableData2);

    const tableData3 = document.createElement("td");
    tableData3.innerText = rowData.date;
    rowToAdd.appendChild(tableData3);

    return rowToAdd;
}

const target = document.getElementById("btn");
target.addEventListener("click", getCar);