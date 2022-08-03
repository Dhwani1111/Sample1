export function exportCSVFile(headers, totalData, fileTitle ){
    if(!totalData || !totalData.length){
        return null
    }
    //convert data to string
    const jsonObject = JSON.stringify(totalData)
    //this will return data in csv format
    const result = convertToCSV(jsonObject,headers)
    if(!result){
        return null
    }
    //binary large object - datatype that stores binary data.(complex files like img,video)
    const blob = new Blob([result])
    const exportedFileName = fileTitle? fileTitle+'.csv':'export.csv'
    if(navigator.msSaveBlob){
        navigator.msSaveBlob(blob, exportedFileName)
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)){
        //this works for iPhone|iPad|iPod
        const link = window.document.createElement('a')
        link.href='data:text/csv;charset=utf-8,' + encodeURI(result);
        link.target = "_blank"
        link.download=exportedFileName
        //<a href="data url" download="export.csv" target="blank"/>
        link.click()
    } else {
        const link = window.document.createElement('a')
        if(link.download !== undefined){
            const url = URL.createObjectURL(blob)
            link.setAttribute("href", url)
            link.setAttribute("download", exportedFileName)
            link.style.visibility='hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }
}

function convertToCSV(objArray,headers){
    const columnDelimeter = ','
    //carriage return(\r) - return to beginning of the current line
    const lineDelimeter = '\r\n'
    const actualHeaderKey = Object.keys(headers)
    const headerToShow = Object.values(headers)

    let str = ''
    str+=headerToShow.join(columnDelimeter)
    str+=lineDelimeter
    const data = typeof objArray !=='object' ? JSON.parse(objArray):objArray
    data.forEach(obj=>{
        let line =''
        actualHeaderKey.forEach(key=>{
            if(line !=''){
                line+=columnDelimeter
            }
            
            let strItem = obj[key] ? obj[key]+'': ''
            //replace , with '' globaly
            line+=strItem? strItem.replace(/,/g, ''):strItem
        })
        str+=line+lineDelimeter
    })
    return str
}