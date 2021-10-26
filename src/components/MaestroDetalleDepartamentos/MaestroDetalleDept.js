import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import MaestroDetalleEmp from './MaestroDetalleEmp';

export default class MaestroDetalleDept extends Component {
   
    selectDepartamento = React.createRef();

    state = {
        departamentos: [],
        status: false,
        idDepartamento: 0
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
        this.setState({
            idDepartamento: parseInt(deptno)
        })
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
                {
                    this.state.idDepartamento != 0 && 
                     <MaestroDetalleEmp idDepartamento={this.state.idDepartamento}/>
                }
                 
            </div>
        )
    }
}
