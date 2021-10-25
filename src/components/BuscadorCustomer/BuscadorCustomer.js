import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class BuscadorCustomer extends Component {

    cajaIdRef = React.createRef();
   

    state = {
        customer: {}, 
        status: false //Lo usamos para saber si tenemos un objeto, para no usar al objoet, poniendo null.
    }

    buscarCustomer = (e) => {    
        e.preventDefault();
        var id = this.cajaIdRef.current.value;
        var request = 'customers/' +id;
        var urlcustomer = Global.urlnorthwind + request;
       
        axios.get(urlcustomer).then(res => {
            console.log(res.data); //Lo necesito para saber que devuelve, en este caso un objeto
            this.setState({
               customer: res.data.customer //data te devuelve customer y orders solo queremos customers para leer
                ,status: true
            })
        });
    }

    render() {
        return (
            <div>
                <h1>Buscador Customer</h1>
                <form onSubmit={this.buscarCustomer}>
                <label>Introduce ID  de Customer: </label>
                <input type='text' ref={this.cajaIdRef} required/>
                <button>Buscar</button>
                </form>
                <hr/>
                {this.state.status && (<div>
                <h1>{this.state.customer.companyName}</h1>
                <h1 style={{color:'red'}}>
                    Nombre: {this.state.customer.contactName}
                </h1>
                <h2>
                    Cargo: {this.state.customer.contactTitle}
                </h2>
                <h2>
                    País: {this.state.customer.country}
                </h2>
                </div>)}
                
            </div>
        )
    }
}
