var _table_ = document.createElement('table'), _tr_ = document.createElement('tr'), _th_ = document.createElement('th'), _td_ = document.createElement('td');
export class Services {
    constructor() {
        this.usuariosArray = [
            { id: 1, nombre: 'Nombre1', apellidos: 'Apellidos1', pagado: true },
            { id: 2, nombre: 'Nombre2', apellidos: 'Apellidos2', pagado: false },
            { id: 3, nombre: 'Nombre3', apellidos: 'Apellidos3', pagado: true },
            { id: 4, nombre: 'Nombre4', apellidos: 'Apellidos4', pagado: false },
            { id: 5, nombre: 'Nombre5', apellidos: 'Apellidos5', pagado: true },
            { id: 6, nombre: 'Nombre6', apellidos: 'Apellidos6', pagado: false },
            { id: 7, nombre: 'Nombre7', apellidos: 'Apellidos7', pagado: true },
        ];
    }
    getUsuarios() {
        return this.usuariosArray;
    }
    getUsuariosById(id) {
        return this.usuariosArray.filter(usuario => usuario.id === +id)[0];
    }
    // Adds a header row to the table and returns the set of columns.
    // Need to do union of keys from all records as some records may not contain
    // all records
    addAllColumnHeaders(arr, table) {
        var columnSet = [], tr = _tr_.cloneNode(false);
        for (var i = 0, l = arr.length; i < l; i++) {
            for (var key in arr[i]) {
                if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
                    columnSet.push(key);
                    var th = _th_.cloneNode(false);
                    th.appendChild(document.createTextNode(key));
                    tr.appendChild(th);
                }
            }
        }
        table.appendChild(tr);
        return columnSet;
    }
    // Builds the HTML Table out of myList json data from Ivy restful service.
    buildHtmlTable(arr) {
        var table = _table_.cloneNode(false), columns = this.addAllColumnHeaders(arr, table);
        for (var i = 0, maxi = arr.length; i < maxi; ++i) {
            var tr = _tr_.cloneNode(false);
            for (var j = 0, maxj = columns.length; j < maxj; ++j) {
                var td = _td_.cloneNode(false);
                var cellValue = arr[i][columns[j]].toString();
                //td.appendChild<Text>(document.createTextNode(arr[i][columns[j]] || ''));
                td.appendChild(document.createTextNode(cellValue || ''));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        /*         var trList : NodeListOf<ChildNode> = table.childNodes;
                console.log(trList)
                for(var index = 0; index < trList.length; index++) {
                    trList[index].addEventListener("mouseover", (e: Event) => {
                        const t = e.target as HTMLTableSectionElement;
                        console.log(t);
                        //const usuario: IUser = this.getUsuariosById(t.id);
                        //alert("Row Clicked");
                    });
                } */
        return table;
    }
}
