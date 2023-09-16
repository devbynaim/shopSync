import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const doc = new jsPDF()


const printPdf = (listItem) => {
    const {total, lists,status,date } = listItem;
      autoTable(doc, {
        head: [['Items', 'Quantity', 'Price',"Status"]],
        body: lists.map(({name, price, quantity })=>([name, quantity, price,status])),
        foot:[[`${date}       Total = ${total}Tk`]]
      })
      doc.save('table.pdf')
      
}

export default printPdf


export function sortByProperty(arr, property, order) {
  if (order === "low") {
    return arr.slice().sort((a, b) => a[property] - b[property]);
  } else if (order === "high") {
    return arr.slice().sort((a, b) => b[property] - a[property]);
  } else {
    // Default to ascending order if order is not specified or invalid
    return arr.slice().sort((a, b) => a[property] - b[property]);
  }
}
