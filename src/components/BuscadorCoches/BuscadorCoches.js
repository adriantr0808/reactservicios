import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class BuscadorCoches extends Component {

    caja = React.createRef();
    url = Global.urlcoches;
    request = '/webresources/coches';

    state = {
        coches:[],
        temp: [],
        status: false
    }


    cargarCoches = (e) =>{
       //Pregunto primero para capturar el click del boton 
       if(e != null){
           e.preventDefault();
       }
        var urlCoches= this.url+this.request;
        axios.get(urlCoches).then(res =>{
            //console.log(res.data)
            this.setState({
                coches: res.data,
                temp: res.data
            })
        })
    }

    //Cargar los coches cuando cargue la pagina
    componentDidMount = () => {
        this.cargarCoches();
    }


    buscadorCoches = (e) =>{
        e.preventDefault();
        var array =[];
        var coches = this.state.temp; //Le asigno temp, porque si le asigno coches despues de haber buscado, tendre los de la marca que haya buscado

        var marca = this.caja.current.value;
       

        // for(var i = 0; i<coches.length; i++){
        //     if(coches[i].marca===marca.toUpperCase()){ //OJITO CON EL TOUPPERCASE
        //         array.push(coches[i]);
        //         //console.log(array);
        //          this.setState({
        //              coches: array,
        //              status: true
        //          });
        //         // console.log(this.state.coches);
        //     }
        // }
        //METODO FILTER DE ARRAY

        var filtro = coches.filter(car => car.marca.toLowerCase().includes(marca));
        //REASIGNAMOS AL STATE EL FILTRO
        this.setState({
            coches: filtro, //A coches lo actualizo con filtro, y lo uso para recorrer en la tabla, NO DOS COMO TENIAS
            status: true
        })

       

    }



    render() {
        return (
            <div>
                <form onSubmit={this.buscadorCoches}>
                <h1>Buscador coches sin URL especificia</h1>
                <hr/>
                <label>Introduce la marca: </label>
                <input type='text' ref={this.caja}/>
                <button style={{margin:'1em'}}>Buscar coches</button>
                <button onClick={this.cargarCoches}>Cargar todos los coches</button>
                <hr/>
                </form>
                <div style={{margin:'1em'}}>
                <table border='1' style={{margin:'auto'}}>
                    <thead>
                        <tr>
                            <th>
                                Marca
                            </th>
                            <th>
                                Modelo
                            </th>
                            <th>
                                Conductor
                            </th>
                            <th>
                                Imagen
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    
                            {this.state.coches.map((c, i)=>{
                                return(<tr key={i}>
                                    <td>{c.marca}</td>
                                    <td>{c.modelo}</td>
                                    <td>{c.conductor}</td>
                                    <td><img width='400px' height='250px' src={c.imagen}/></td>
                                    </tr>)
                            })}
                    </tbody>
                </table>
                </div>
             
               
            </div>
        )
    }
}
