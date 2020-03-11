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
        axios.delete(`localhost:5000/cupom/${index}`)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                
                // axios.delete Broker
            }
            , (error) => {
                console.log(error);
            });
                            
        this.setState({
            cupons: cupons.filter((cupom, i) => { 
                return i !== index;
            })
        });
    }
    atualizarCupom = index => {

        axios.get('localhost:5000/cupom')
            .then((response) => {
                const cupons = response.data;
                this.setState({ cupons });

                // axios.post Dash
            }
            , (error) => {
                console.log(error);
            });
    }

    adicionarCupom = cupom => {
        this.setState({cupons: [...this.state.cupons, cupom]});

        // axios.post Dash 
        axios.post('localhost:5000/cupom', { cupom })
        .then((response) => {
            console.log(response);
            console.log(response.data);

            // axios.post Broker
        }
        , (error) => {
            console.log(error);
        });
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
                    atualizarCupom={this.atualizarCupom}
                    removerCupom={this.removerCupom}
                />
                
                <h3>Adicionar Cupom</h3>
                <Form adicionarCupom={this.adicionarCupom} />
            </div>
        );
    }
}

export default App;