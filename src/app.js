const employeeArray = [
    {id:1, name:"Erős István", city: "Szeged", salary: 365},
    {id:2, name:"Gyenge Péter", city: "Szolnok", salary: 165},
    {id:3, name:"Fehér Anita", city: "Budapest", salary: 65},
    {id:4, name:"Prof. Dr. Sr. James Michael-Wood", city: "London", salary: 12300},
    {id:5, name:"Ifj. Erős István", city: "Szeged", salary: 465}
] 

const empsBody = document.getElementById("empsBody")

var rows = ""


employeeArray.forEach( (emp) => {
    console.log(emp.name)

    var row = `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.city}</td>
            <td>${emp.salary}</td>
        </tr>
    `

    rows += row
})

empsBody.innerHTML = rows