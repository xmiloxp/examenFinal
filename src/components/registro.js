import React from 'react';
import Logica from './logica'
class Registro extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            postulante: '',
            grado:'1',
            articulos: [],
            libros:[],
            proyectos: [],
            asesor: [],
            resultado: 'Sin nivel'
        }
    }
    handleSelect = e => {
        this.setState({
            grado: e.target.value
        })
    }
    addArticulo = () => {
        this.setState({
            articulos: [...this.state.articulos,'']
        })
    }
    changeArticulo = (idx) => (e) => {
        let articulos = this.state.articulos;
        articulos[idx] = e.target.value;
        this.setState({
            articulos: articulos
        })
    }
    addAsesor = () => {
        this.setState({
            asesor: [...this.state.asesor,'']
        })
    }
    changeAsesor = (idx) => (e) => {
        let asesor = this.state.asesor;
        asesor[idx] = e.target.value;
        this.setState({
            asesor: asesor
        })
    }
    addLibro = () => {
        this.setState({
            libros: [...this.state.libros,'']
        })
    }
    changeLibro = (idx) => (e) => {
        let libros = this.state.libros;
        libros[idx] = e.target.value;
        this.setState({
            libros: libros
        })
    }
    addProyecto = () => {
        this.setState({
            proyectos: [...this.state.proyectos,'']
        })
    }
    changeProyecto = (idx) => (e) => {
        let proyectos = this.state.proyectos;
        proyectos[idx] = e.target.value;
        this.setState({
            proyectos: proyectos
        })
    }
    procesar = () => {
       
        this.setState({
            resultado: Logica(this.state)
        })
    }
    render(){
        return(
            <div>
                
                <div>
                    <label>Postulante</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Grado o Titulo</label>
                    <select value={this.state.grado} onChange={this.handleSelect}> 
                        <option value="1">Doctor</option>
                        <option value="2">Maestro</option>
                        <option value="3">Titulo Profesional</option>
                    </select>
                </div>
                <div>
                    <label>Articulos</label>
                    {
                        this.state.articulos.map((value,index) => (
                            <div>
                                <input key={index} type="text" value={value} onChange={this.changeArticulo(index)}/>
                            </div>
                        ))
                    }
                    <button onClick={this.addArticulo}>Agregar Articulo</button>
                </div>
                <div>
                    <label>Libros</label>
                    {
                        this.state.libros.map((value,index) => (
                            <div>
                            <input key={"n"+index} type="text" value={value} onChange={this.changeLibro(index)}/>
                            </div>
                        ))
                    }
                    <button onClick={this.addLibro}>Agregar Libro</button>
                </div>
                <div>
                    <label>Proyectos de Investigacion</label>
                    {
                        this.state.proyectos.map((value,index) => (
                            <div>
                            <input key={"a"+index} type="text" value={value} onChange={this.changeProyecto(index)}/>
                            </div>
                        ))
                    }
                    <button onClick={this.addProyecto}>Agregar Proyecto Inv.</button>
                </div>
                <div>
                    <label>Asesor</label>
                    {
                        this.state.asesor.map((value,index) => (
                            <div>
                            <input key={"a"+index} type="text" value={value} onChange={this.changeAsesor(index)}/>
                            </div>
                        ))
                    }
                    <button onClick={this.addAsesor}>Agregar Asesoria</button>
                </div>
                <div>
                    <button onClick={this.procesar}>Procesar</button>
                </div>
                <div>
                <h1>Resultado</h1>

                </div>
                <div>
                <h2>{this.state.resultado}</h2>
                
                </div>
                
                
            </div>
        )
    }
}
export default Registro;