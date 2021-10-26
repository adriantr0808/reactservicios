import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class DetalleEmpleadoRouter extends Component {
    //PODEMOS RECIBIR PROPS EN CONSTRUCTOR, no es obligatorio
    constructor (props){
        super(props);
        console.log(this.props.idempleado);
    }
    
    //Empleado para almacenar el emplead que coincida con el id y status para comprobar si tenemos o no empleado
    state = {
        empleado: {},
        status: false
    }

    //Recibimos el id del empleado especifico y cargamos los datos el empleado
    detallesEmpleado = () => {
        var request = 'api/Empleados/'+this.props.idempleado;
        var url = Global.urlempelados + request;
        axios.get(url).then(res => {
            this.setState({
                empleado: res.data,
                status: true
            })
        })

    }

    componentDidMount = () => {
        this.detallesEmpleado();
    }

    //Ncesitamos update, porque didmount, solo lo llama al componente 1 vez
    componentDidUpdate = (oldProps) =>{
        if(this.props.idempleado != oldProps.idempleado){
            this.detallesEmpleado();
        }
    }
    render() {
        return (
            <div>
                <h1>Detalles Empleado</h1>
                <div>
                    <fieldset>
                        <legend>DETALLES</legend>
                  <p>Nombre: <span style={{fontWeight: 'bold'}}>{this.state.empleado.apellido}</span></p>
                  <p>Oficio:  <span style={{fontWeight: 'bold'}}> {this.state.empleado.oficio}</span></p>
                  <p>Salario:  <span style={{fontWeight: 'bold'}}>{this.state.empleado.salario}€</span></p>
                  <p>Dept:  <span style={{fontWeight: 'bold'}}>{this.state.empleado.departamento}</span></p>

                    </fieldset>
                </div>
            </div>
        )
    }
}
