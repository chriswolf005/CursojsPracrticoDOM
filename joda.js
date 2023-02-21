const array=[1,'jajaj',true];

const obj ={
    nombre:'fulanito',
    edad:2,
    comidasFvoritas:['pollo frito','tostones'],
};

function imprimirObj(obj){
    const arr=Object.values(obj);
    for(let i; i<arr.length;i++){
       console.log(arr[i])
    }
}

function tipodeSuscripcion(suscripcion){
    if (suscripcion=='Free'){
        console.log('solo puedes tomar los cursos gratis')
        return;
    }
    if(suscripcion=='Basic'){
        console.log('puedes tomar los cursos por un mes')
        return;
    }
    if(suscripcion=='Expert'){
        console.log('Puedes tomar los  cursos por un year')
        return;
    }
    if(suscripcion=='ExpertDuo'){
        console.log('tu y alguien mas pueden tomar los  cursos por un year')
        return;
    }
    console.warn('Este tipo de Suscripcion no existe')
}


const tiposDesuscripciones={
    free: 'Solo puedes tomar los cursos gratis',
    basic:'puedes tomar los cursos por un mes',
    expert:'Puedes tomar los  cursos por un year',
    experDuo:'tu y alguien mas pueden tomar los  cursos por un year',

}

function tipoSus(suscripcion){
    if(tiposDesuscripciones[suscripcion]){
        console.log(tiposDesuscripciones[suscripcion])
        return;
    }

    console.warn("Esta suscricion no existe")
}


