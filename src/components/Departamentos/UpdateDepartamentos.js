import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

export default class UpdateDepartamentos extends Component {


    cajanumeroRef = React.createRef();
    cajanombreRef = React.createRef();
    cajalocalidadRef = React.createRef();

    state = {
        departamento: null,
        status: false
    }

    //Buscamos el departamento para coger los valores y ponerlos en los input del form
    buscarDepartamento = () => {
        var id = this.props.iddepartamento;
        var request = '/webresources/departamentos/' + id;
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamento: res.data
            })
        });
    }


    //Metodo para actualizar un depatamento
    updateDepartamento = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajanumeroRef.current.value);
        var nom = this.cajanombreRef.current.value;
        var loc = this.cajalocalidadRef.current.value;


        var dept = {
            numero: num,
            nombre: nom,
            localidad: loc
        }

        var request = 'webresources/departamentos/put';
        var url = Global.urlcruddepartamentos + request;
        axios.put(url, dept).then(res => {
            this.setState({
                status: true
            })
        });

    }

    componentDidMount = () => {
        this.buscarDepartamento();
    }

    render() {
        //Si se ha actualizado redirigimos a la tabla
        if (this.state.status == true) {
            return (<Redirect to={"/departamentos"} />)
        }
        if (this.state.departamento != null) {
            return (


                <div>
                    <h1>Update departamentos</h1>

                    <form onSubmit={this.updateDepartamento} style={{ width: '500px', display: 'table', margin: 'auto' }}>
                        <div className='form-group row'>
                            <label>Número: </label>
                            <input className='form-control' type='number'
                                ref={this.cajanumeroRef}
                                defaultValue={this.state.departamento.numero}
                                disabled />
                        </div>
                        <div className='form-group row'>
                            <label>Nombre: </label>
                            <input className='form-control' type='text'
                                ref={this.cajanombreRef}
                                defaultValue={this.state.departamento.nombre}
                            />
                        </div>
                        <div className='form-group row'>
                            <label>Localidad: </label>
                            <input className='form-control' type='text'
                                ref={this.cajalocalidadRef}
                                defaultValue={this.state.departamento.localidad}
                            />
                        </div>
                        <button className='btn btn-warning m-3'>Modificar</button>
                        <NavLink to={"/departamentos"} className='btn btn-success m-3'>Vovler al listado</NavLink>
                    </form>
                </div>
            )
        } else {
            return ('<h1>Cargando...</h1>');
        }

    }
}
