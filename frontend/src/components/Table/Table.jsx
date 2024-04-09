import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

//function createData(name, trackingId, date, status) {
  //return { name, trackingId, date, status };
//}

function createData(name, dato1, dato2, dato3, dato4,dato5,dato6,dato7,dato8,dato9,dato10,dato11,dato12,dato13) {
  return { name, dato1, dato2, dato3, dato4,dato5,dato6,dato7,dato8,dato9,dato10,dato11,dato12,dato13};
}


const rows = [
  createData("Leads", "601,652", "605504","613,399", "330,072","336,726","331,149","387,787","399,799","412,589","427,532","421,436","415,657","2,487,353"),
  createData("Monto Formalizado","146,591,582","139,723,378","155,703,675","114,864,681","153,881,620","140,794,610","153,006,296","171,068,074","147,525,019","142,107,973","132,251,275","183,242,475","710,764,936.08"),
  createData("Ventas Formalizadas","4,348","4,259","5,154","3,919","5,116","5,093","5,194","5,807", "5,451", "5,475","5,336","5,618","22,796"),
  createData("RPC","108,251","109,494","121,008","96,427", "149,570","120,654","110,944","146,470","160,436","159,621","145,315","117,837","584,750"),
  createData("Intensidad","146,591,582","139,723,378","155,703,675","114,864,681","153,881,620","140,794,610","153,006,296","171,068,074","147,525,019","142,107,973","132,251,275","183,242,475","710,764,936.08"),
  createData("AOP","","","","","","","","","","","","",""),
  createData("Valor BDD","31,266,339,210","30,381,529,123","30,892,370,659","29,490,107,457","30,383,762,060","29,315983,841","37,873,369,724","37,873,369,724","38,346,139,266","40,461,368,430", "41,640,261,332","46,235,740,991","152,414,108,509"),
  createData("Ticket BDD","$51,967.48","$50175.60","$50,362.60","$89,344.47","$90,232.90","$88,528.08","$95,846.33","$94,731.03","$92,940.29","$94,639.39","$98,805.66","$111,235.32","$61,275.62"),
  createData("Ticket de Venta","$33,714.72","$32,806.62","$30,210.26","$29,309.69","30,078.50","$27,644.73","$29,458.28","$29,462.04","$27,063,84","$25,955,79","24,784.72","$32,617.03","$31,179.37"),
  createData("RPC","18%","18%","20%","29%","44%","36%","29%","37%","39%","37%","34%","28%","24%"),
  createData("Conversion","4.02%","3.89%","4.26%","4.06%","3.42%","4.22%","4.68%","3.96%","3.40%","3.43%","3.67%","4.77%","3.90%"),
  createData("SR Folios","0.72%","0.70%","0.84%","1.19%","1.52%","1.54%","1.34%","1.45%","1.32%","1.28%","1.27%","1.35%","0.92%",),
  createData("SR Monto","0.47%","0.46%","0.50%","0.39%","0.51%","0.48%","0.41%","0.45%","0.38%","0.35%","0.32%","0.40%","0.47%",),
  createData("Avance AOP","","","","","","","","","","","","","",)

];

/*Aqui cambias el color dependiento de lo que aparezca :3
const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

*/
//Aqui cambias el color dependiento de lo que aparezca :3
/* const makeStyle=(status)=>{
  if(parseFloat(status) > 95)
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(parseFloat(status) < 95)
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#ace6fc',
      color: 'gray',
    }
  }
} */


const makeStyle = (row) => {
  const values = Object.values(row).slice(1,-1).map(value => parseFloat(value.replace(/[^0-9.-]+/g,"")));
  const min = Math.min(...values);
  const max = Math.max(...values);

  return values.map(value => {
    if (isNaN(value)) {
      return { background: 'white', color: 'black' };
    } else if (value === min) {
      return { background: '#ffadad8f', color: 'red' };
    } else if (value === max) {
      return { background: 'rgb(145 254 159 / 47%)', color: 'green' };
    } else {
      return { background: '#FFF', color: 'gray' };
    }
  });
};

export default function BasicTable() {
  return (

<div className="parentContainer">
    <div className="Table">
        
      
      <h3>TPSA</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="Headers">
              <TableRow>
              <TableCell className="StickyColumn">TPSA</TableCell>
                <TableCell align="left" >Enero</TableCell>
<TableCell align="left">Febrero</TableCell>
<TableCell align="left">Marzo</TableCell>
<TableCell align="left">Abril</TableCell>
<TableCell align="left">Mayo</TableCell>
<TableCell align="left">Junio</TableCell>
<TableCell align="left">Julio</TableCell>
<TableCell align="left">Agosto</TableCell>
<TableCell align="left">Septiembre</TableCell>
<TableCell align="left">Octubre</TableCell>
<TableCell align="left">Noviembre</TableCell>
<TableCell align="left">Diciembre</TableCell>
<TableCell align="left">Total</TableCell>

              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {/* {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="left">{row.dato1}</TableCell>
                  <TableCell align="left">{row.dato2}</TableCell>
                  <TableCell align="left">{row.dato3}</TableCell>
                  <TableCell align="left">{row.dato4}</TableCell>
                  <TableCell align="left">{row.dato5}</TableCell>
                  <TableCell align="left">{row.dato6}</TableCell>
                  <TableCell align="left">{row.dato7}</TableCell>
                  <TableCell align="left">{row.dato8}</TableCell>
                  <TableCell align="left">{row.dato9}</TableCell>
                  <TableCell align="left">{row.dato10}</TableCell>
                  <TableCell align="left">{row.dato11}</TableCell>
                  <TableCell align="left">{row.dato12}</TableCell>
                  <TableCell align="left">{row.dato13}</TableCell>

                </TableRow>
              ))} */}
              {rows.map((row) => (
  <TableRow
    key={row.name}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  >
    <TableCell className="StickyColumn" component="th" scope="row">{row.name}</TableCell>
    {Object.values(row).slice(1).map((value, index) => (
      <TableCell align="left" style={makeStyle(row)[index]} key={index}>{value}</TableCell>
    ))}
  </TableRow>
))}

            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
  );
}
