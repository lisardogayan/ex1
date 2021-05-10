import { Services } from './services/services.js';
import { IUser } from './interfaces/interfaces.js';

const service = new Services();

const usuarios: IUser[] = service.getUsuarios();

const getUsuarioInfo = function (usuario: number) {
    console.log(usuario);
}

console.log('usuarios', usuarios);

/* let htmlInjected = '<ul>';

usuarios.forEach((usuario: IUser) => {
    htmlInjected += `<li id="${ usuario.id }"> ${ usuario.nombre } ${ usuario.apellidos }</li>`;
});

htmlInjected += '</ul>';

document.getElementById('listado')!.innerHTML = htmlInjected; */

document.getElementById('listado')!.appendChild(service.buildHtmlTable(usuarios));

/* document.getElementById('listado')!.addEventListener("click", (e:Event) => {
    const t = e.target as any;
    const usuario: IUser = service.getUsuariosById(t.id);
    if (usuario.pagado)
        document.getElementById('resultado')!.innerHTML = `<div>Pagado</div>`;
    else
        document.getElementById('resultado')!.innerHTML = `<div>Pendiente pago</div>`;
}); */

/* document.getElementsByTagName('tr')!.addEventListener("mouseover", (e:Event) => {
    const t = e.target as any;
    console.log(t);
    const usuario: IUser = service.getUsuariosById(t.id);
    if (usuario.pagado)
        document.getElementById('resultado')!.innerHTML = `<div>Pagado</div>`;
    else
        document.getElementById('resultado')!.innerHTML = `<div>Pendiente pago</div>`;
}); */

var filasTabla = document.getElementsByTagName('tr')!
for (var i = 1; i < filasTabla.length; i++){
    filasTabla[i].addEventListener("mouseover", (e:Event) => {
        var t = e.target as any;
        var p = t.parentElement;
        var celdas = p.getElementsByTagName('td')!
/*         console.log(e)
        console.log(celdas[0]); */
        const usuario: IUser = service.getUsuariosById(celdas[0].innerHTML);
        if (usuario.pagado)
            document.getElementById('resultado')!.innerHTML =
             `<div>El usuario ${ usuario.nombre } ${ usuario.apellidos } ha pagado.</div>`;
        else
            document.getElementById('resultado')!.innerHTML = 
            `<div>El usuario ${ usuario.nombre } ${ usuario.apellidos } está pendiente de pago.</div>`;
    });
}


