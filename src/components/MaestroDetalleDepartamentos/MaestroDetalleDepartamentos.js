import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class MaestroDetalleDepartamentos extends Component {
   
    selectDepartamento = React.createRef();

    state = {
        departamentos: [],
        empleados: [],
        status: false
    }
   
    cargarDepartamentos = () => {
        //ES LLAMADO EN LA CARGA DEL COMPONENTE
        var request='api/departamentos';
        var url = Global.urldepartamentos;
        axios.get(url+request).then(res => {
            this.setState({
                departamentos: res.data,
                status: true
            })
            console.log('hola');
        });
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        var deptno = this.selectDepartamento.current.value;
        var request = 'api/Empleados/EmpleadosDepartamento/'+deptno;
        var url = Global.urlempelados;
        axios.get(url+request).then(res => {
            this.setState({
                empleados: res.data
            })
        })
        console.log('hola2');

    }
   
    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    render() {
        return (
            <div>
                <h1>Maestro detalle Departamentos</h1>
                <form>
                    <select ref={this.selectDepartamento}>
                        {this.state.status == true && 
                        (this.state.departamentos.map((d,i)=>{
                            return( <option key={i} value={d.Numero}>{d.Nombre}</option>)
                        }))}
                    </select>
                    <button onClick={this.buscarEmpleados}>Mostrar empleados</button>
                </form>
                <hr/>
                {this.state.empleados.length > 0 && (<ul>

                    {this.state.empleados.map((e,i)=> {
                      return(<li key={i}>{e.apellido}</li>)
                    })}

                </ul>)}
               
            </div>
        )
    }
}
