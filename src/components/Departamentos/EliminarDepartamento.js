import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';

export default class EliminarDepartamento extends Component {

    cajaNumero = React.createRef();
    state = {
        status: false
    }


    eliminarDepartamento = (e) => {
        e.preventDefault();
        var num = this.cajaNumero.current.value;
        var request = '/webresources/departamentos/delete/' + num;
        var url = Global.urlcruddepartamentos + request;

        axios.delete(url).then(res => {
            this.setState({
                status: true
            })
        });
    }

    render() {
        if (this.state.status == true) {
            return (<Redirect to='/'></Redirect>)
        }
        return (
            <div>
                <h1>¿Desea eliminar el departamento de {this.props.nombre} en {this.props.localidad}?</h1>
                <NavLink to={'/'} className='btn btn-success m-3'>Cancelar</NavLink>
                <form onSubmit={this.eliminarDepartamento}>
                    {/* Tenemos un input para coger el value de ahi y usarlo para borrar por id */}
                    <input ref={this.cajaNumero} type='hidden' value={this.props.iddepartamento} />
                    <button className='btn btn-danger'>Eliminar departamento</button>

                </form>
            </div>
        )
    }
}
