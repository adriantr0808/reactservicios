import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class InsertarDepartamentos extends Component {

    //Variables de ref para las cajas
    cajanumeroRef = React.createRef();
    cajanombreRef = React.createRef();
    cajalocalidadRef = React.createRef();

    state = {
        mensaje: "", //Para mostrar si se ha insertado o no
        status: false
    }

    //Metodo para insertar el departamento

    insertarDepartamento = (e) => {
        e.preventDefault();

        var num = parseInt(this.cajanumeroRef.current.value);
        var nom = this.cajanombreRef.current.value;
        var loc = this.cajalocalidadRef.current.value;

        var dept = {
            numero: num,
            nombre: nom,
            localidad: loc
        }

        var request = "webresources/departamentos/post";
        var url = Global.urlcruddepartamentos + request;

        axios.post(url, dept).then(res => {
            this.setState({
                mensaje: 'Departamento insertado correctamente',
                status: true
            });

        });





    }

    render() {
        if (this.state.status == true) {
            return (<Redirect to='/'></Redirect>);
        }
        return (

            <div>
                <h1 className='m-4'>Nuevo departamento</h1>
                <hr />
                <form style={{ width: '500px', display: 'table', margin: 'auto' }} onSubmit={this.insertarDepartamento}>
                    <div className='form-group row'>
                        <label>Número: </label>
                        <input type='number' className='form-control' ref={this.cajanumeroRef}></input>
                    </div>
                    <div className='form-group row'>
                        <label>Nombre: </label>
                        <input type='text' className='form-control' ref={this.cajanombreRef}></input>
                    </div>
                    <div className='form-group row'>
                        <label>Localidad: </label>
                        <input type='text' className='form-control' ref={this.cajalocalidadRef}></input>
                    </div>
                    <button className='btn btn-info m-4'>
                        Insertar Departamento
                    </button>
                </form>
                <h2 style={{ color: 'red' }}>{this.state.mensaje}</h2>
            </div>
        )
    }
}
