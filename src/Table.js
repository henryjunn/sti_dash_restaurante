import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Nome do Cupom</th>
                <th>Descrição</th>
                <th>Quantidade Disponibilizada</th>
                <th>Porcentagem de Desconto</th>
                <th>Validade</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.dadosCupom.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nomeCupom}</td>
                <td>{row.descricao}</td>
                <td>{row.quantidade}</td>
                <td>{row.desconto}</td>
                <td>{row.validade}</td>
                <td><button onClick={() => props.removerCupom(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { dadosCupom, removerCupom } = props;
        return (
            <table>
                <TableHeader />
                <TableBody dadosCupom={dadosCupom} removerCupom={removerCupom} />
            </table>
        );
}

export default Table;