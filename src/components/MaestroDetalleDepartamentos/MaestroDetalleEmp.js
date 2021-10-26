import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class MaestroDetalleEmp extends Component {
    
    state = {
        empleados: []

    }
    cargarEmpleados = () =>{
        var idDepartamento = this.props.idDepartamento;
        var request = "/api/Empleados/EmpleadosDepartamento/"+idDepartamento;
        var url =  Global.urlempelados + request;
        axios.get(url).then(res => {
            this.setState({
                empleados: res.data
            })

        });

        //console.log(this.state.empleados)

       
    }

    componentDidMount = () =>{
        this.cargarEmpleados();
    }


    componentDidUpdate = (oldProps) => {

            if(this.props.idDepartamento !== oldProps.idDepartamento){
                this.cargarEmpleados();
            }
            
        }

    render() {
        return (
            <div>
                <h1 style={{color:'blue'}}>
                    Empleados del departamento {this.props.idDepartamento}
                </h1>
                {this.state.empleados.length > 0 && 
                (
                        this.state.empleados.map((emp, index) => {
                        return (<h3 style={{color:'darkred'}} key={index}>{emp.apellido},{emp.oficio}</h3>)
                    })
                )}
            </div>
        )
    }
}
