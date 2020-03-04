import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            nomeCupom: '',
            descricao: '',
            quantidade: '',
            desconto: '',
            limivalidadeteFila: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.adicionarCupom(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { nomeCupom, descricao, quantidade, desconto, validade } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="nomeCupom">Nome do Cupom</label>
                <input 
                    type="text" 
                    name="nomeCupom" 
                    id="nomeCupom"
                    value={nomeCupom} 
                    onChange={this.handleChange} />
                <label for="descricao">Descrição</label>
                <input 
                    type="text" 
                    name="descricao" 
                    id="descricao"
                    value={descricao} 
                    onChange={this.handleChange} />
                <label for="quantidade">Quantidade Disponibilizada</label>
                <input 
                    type="text" 
                    name="quantidade" 
                    id="quantidade"
                    value={quantidade} 
                    onChange={this.handleChange} />
                <label for="desconto">Porcentagem de Desconto</label>
                <input 
                    type="text" 
                    name="desconto" 
                    id="desconto"
                    value={desconto} 
                    onChange={this.handleChange} />
                <label for="validade">Validade</label>
                <input 
                    type="text" 
                    name="validade" 
                    id="validade"
                    value={validade} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Criar
                </button>
            </form>
        );
    }
}

export default Form;
