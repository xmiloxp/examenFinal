const Logica = (state) => {
    let resultado='Sin nivel';
        //console.log(state.grado)
        if(state.grado ==='3' && state.articulos.length > 3){
            
            if((state.libros.length > 0 || state.proyectos.length > 1) && state.asesor.length > 0){
                console.log('aqui')
                resultado = "Nivel 1";
            }
            if(state.libros.length > 0 && (state.proyectos.length > 1 || state.asesor.length > 0)){
                console.log('aqui')
                resultado = "Nivel 1";
            }
            if((state.libros.length > 0 || state.asesor.length > 0) && state.proyectos.length > 1){
                console.log('aqui')
                resultado = "Nivel 1";
            }
                
        }
        if((state.grado ==='2' || state.grado==="1") && state.articulos.length > 6){
            
            if((state.libros.length > 1 || state.proyectos.length > 1) && state.asesor.length > 2){
                
                resultado = "Nivel 2";
            }
            if(state.libros.length > 1 && (state.proyectos.length > 1 || state.asesor.length > 2)){
                
                resultado = "Nivel 2";
            }
            if((state.libros.length > 1 || state.asesor.length > 2) && state.proyectos.length > 1){
                
                resultado = "Nivel 2";
            }
                
        }
        if((state.grado ==='2' || state.grado==="1") && state.articulos.length > 10){
            
            if((state.libros.length > 2 || state.proyectos.length > 2) && state.asesor.length > 4){
                
                resultado = "Nivel 3";
            }
            if(state.libros.length > 2 && (state.proyectos.length > 2 || state.asesor.length > 4)){
                
                resultado = "Nivel 3";
            }
            if((state.libros.length > 2 || state.asesor.length > 4) && state.proyectos.length > 2){
                
                resultado = "Nivel 3";
            }
                
        }
    return resultado
}
module.exports = Logica;