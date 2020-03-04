import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    
    state = {
        cupons: [],
        nomeEvento: "Show"
    };

    removerCupom = index => {
        const cupons = this.state.cupons;
        this.setState({
            cupons: cupons.filter((cupom, i) => { 
                return i !== index;
            })
        });
    }

    adicionarCupom = cupom => {
        this.setState({cupons: [...this.state.cupons, cupom]});
    }

    render() {
        const cupons = this.state.cupons;
        const nomeEvento = this.state.nomeEvento;
        
        return (
            <div className="container">
                <h1>DASHBOARD Restaurante</h1>
                <h2>Evento: {nomeEvento}</h2>
                <h4>Cupons </h4>
                
                <Table
                    dadosCupom={cupons}
                    removerCupom={this.removerCupom}
                />
                
                <h3>Adicionar Cupom</h3>
                <Form adicionarCupom={this.adicionarCupom} />
            </div>
        );
    }
}

export default App;