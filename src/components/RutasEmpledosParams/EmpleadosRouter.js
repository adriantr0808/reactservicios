import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global'
import { NavLink } from 'react-router-dom';

export default class EmpleadosRouter extends Component {
    
   
        state = {
            empleados: [],
            status: false
        }
    
    //Cargamos todos los empleados
    cargarEmpleados = () =>{
        var request = 'api/empleados';
        var url = Global.urlempelados + request;
        axios.get(url).then(res =>{
            this.setState({
                empleados: res.data, 
                status: true
            })
        });
    }


    componentDidMount = () =>{
        this.cargarEmpleados();
    }


    render() {
        return (
            <div>
                <h1>Empleados Router Parametros</h1>
                <ul style={{listStyleType: 'none'}}>{this.state.status == true && (
                    this.state.empleados.map((emp, index) => {
                        return (<li key={index}><a href={'/detallesempleado/'+emp.idEmpleado}>{emp .apellido} | </a>
                        <NavLink to={'/detallesempleado/'+emp.idEmpleado}> Detalles NAVLINK </NavLink>
                        </li>)
                    })
                )}</ul>
            </div>
        )
    }
}
