import React from 'react';
import { Row, Col } from 'react-materialize';


const renderTable = card => (
    <tr>
        <td><img class='tableCard' src={card.image} /></td>
        <td>{card.name}</td>
        <td>{card.set}</td>
        <td>Owned: {card.quantity}</td>
        <td>Location: {card.location}</td>
        <td>{card.price}</td>
    </tr>
)
const LargeTable = (props) => (
    <table>
        {props.tableData.map(card => renderTable(card))}
    </table>
)

export default LargeTable