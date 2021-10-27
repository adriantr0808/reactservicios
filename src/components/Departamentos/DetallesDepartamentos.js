import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class DetallesDepartamentos extends Component {
    render() {
        return (
            <div>
                <h1 className='m-3'>Detalles del departamento</h1>
                <div className='m-5'>

                    <h2 className='fw-bold'>Número: <span className='fst-italic'>{this.props.iddepartamento}</span></h2>
                    <h2 className='fw-bold'>Nombre: <span className='fst-italic'>{this.props.nomdepartamento}</span></h2>
                    <h2 className='fw-bold'>Localidad: <span className='fst-italic'>{this.props.locdepartamento}</span></h2>

                </div>
                <NavLink to={'/departamentos'} className='btn btn-success m-4'>Volver al listado</NavLink>
                <NavLink to={'/updatedepartamentos/' + this.props.iddepartamento} className='btn btn-warning'>
                    Editar
                </NavLink>
            </div>
        )
    }
}
