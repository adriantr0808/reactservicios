import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class TablaDepartamentos extends Component {

    state = {
        departamentos: [],
        status: false
    }

    //Metodo para cargar los departamentos
    cargarDepartamentos = () => {
        var request = 'webresources/departamentos';
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data,
                status: true
            })
        })
    }

    //Lo montamos cuando se monte el componente
    componentDidMount = () => {
        this.cargarDepartamentos();
    }


    render() {
        if (this.state.status == true) {
            return (
                <div>
                    <h1>Tabla departamentos</h1>
                    <hr />
                    <table className='table table-striped'>
                        <thead>
                            <th>NUMERO</th>
                            <th>NOMBRE</th>
                            <th>LOCALIDAD</th>
                            <th>ACCIONES</th>
                        </thead>
                        <tbody>
                            {this.state.departamentos.map((dept, index) => {
                                return (<tr key={index}>
                                    <td>{dept.numero}</td>
                                    <td>{dept.nombre}</td>
                                    <td>{dept.localidad}</td>
                                    <td>
                                        <NavLink className='btn btn-primary m-2' to={'/detallesdepartamentos/' + dept.numero + '/' + dept.nombre + '/' + dept.localidad}>
                                            Detalles
                                        </NavLink>
                                        <NavLink className='btn btn-warning m-2 ' to={'/updatedepartamentos/' + dept.numero}>
                                            Editar
                                        </NavLink>
                                        <NavLink className='btn btn-danger m-2' to={'/deletedepartamentos/' + dept.numero + '/' + dept.nombre + '/' + dept.localidad}>
                                            Eliminar
                                        </NavLink>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div >
            )
        } else if (this.state.status == false) {
            return (<h1>Cargando registros...</h1>)
        }

    }
}
