import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InsertarDepartamentos from './Departamentos/InsertarDepartamentos';
import DetalleEmpleadoRouter from './RutasEmpledosParams/DetalleEmpleadoRouter';
import EmpleadosRouter from './RutasEmpledosParams/EmpleadosRouter';
import TablaDepartamentos from './Departamentos/TablaDepartamentos';
import MenuDepartamentos from './Departamentos/MenuDepartamentos';
import DetallesDepartamentos from './Departamentos/DetallesDepartamentos';
import UpdateDepartamentos from './Departamentos/UpdateDepartamentos';
import EliminarDepartamento from './Departamentos/EliminarDepartamento';
export default class Router extends Component {
    render() {
        return (

            <BrowserRouter>
                {/* Parte estática */}
                <MenuDepartamentos />
                <Switch>
                    {/* Parte dinamica */}

                    <Route exact path='/' component={TablaDepartamentos} />
                    <Route exact path='/departamentos' component={TablaDepartamentos} />
                    <Route exact path='/createdepartamentos' component={InsertarDepartamentos} />
                    {/* Vamos a enviar  parametros, numero, nombre y loc para no tener que usar axios en el componente detalles */}
                    <Route exact path='/detallesdepartamentos/:numero/:nombre/:localidad'
                        // Necesito el numero del departamneto para poder mostrar los detalles
                        render={props => {
                            var id = props.match.params.numero;
                            var nom = props.match.params.nombre;
                            var loc = props.match.params.localidad;
                            //Devuelvo la etiqueta equivalente a DetallesDepartamentos
                            return (<DetallesDepartamentos iddepartamento={id} nomdepartamento={nom} locdepartamento={loc} />);
                        }} />

                    <Route exact path='/updatedepartamentos/:numero'
                        render={props => {
                            var numero = props.match.params.numero;
                            return (<UpdateDepartamentos iddepartamento={numero} />);
                        }}
                    />

                    <Route exact path='/deletedepartamentos/:numero/:nombre/:localidad'

                        render={
                            props => {
                                var num = props.match.params.numero;
                                var nom = props.match.params.nombre;
                                var loc = props.match.params.localidad;
                                return (<EliminarDepartamento iddepartamento={num} nombre={nom} localidad={loc} />)
                            }
                        }
                    />
                    {/* <div style={{ background: 'beige' }}>
                     
                        <Route exact path='/detallesempleado/:idempleado' render={props => {
                            var id = props.match.params.idempleado;
                            return (<DetalleEmpleadoRouter idempleado={id} />)
                        }} />
                    </div> */}
                    {/* props es un nombre inventado */}
                </Switch>

                {/* <EmpleadosRouter /> */}
            </BrowserRouter>
        )
    }
}
