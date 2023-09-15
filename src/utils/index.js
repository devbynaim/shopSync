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