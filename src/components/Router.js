import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InsertarDepartamentos from './Departamentos/InsertarDepartamentos';
import DetalleEmpleadoRouter from './RutasEmpledosParams/DetalleEmpleadoRouter';
import EmpleadosRouter from './RutasEmpledosParams/EmpleadosRouter';
import TablaDepartamentos from './Departamentos/TablaDepartamentos';
import MenuDepartamentos from './Departamentos/MenuDepartamentos';
export default class Router extends Component {
    render() {
        return (

            <BrowserRouter>
                {/* Parte estática */}
                <MenuDepartamentos />
                <Switch>
                    {/* Parte dinamica */}
                    {/* props es un nombre inventado */}
                    <Route exact path='/departamentos' component={TablaDepartamentos} />
                    <Route exact='/createdepartamento' component={InsertarDepartamentos} />
                    {/* <div style={{ background: 'beige' }}>
                        <Route exact path='/detallesempleado/:idempleado' render={props => {
                            var id = props.match.params.idempleado;
                            return (<DetalleEmpleadoRouter idempleado={id} />)
                        }} />
                    </div> */}
                </Switch>

                {/* <EmpleadosRouter /> */}
            </BrowserRouter>
        )
    }
}
