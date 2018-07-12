import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class Organize extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){

    }

    render(){
        return(
            <div>
            <Row> 
                <Col l={12} m={12} s={12} >
                    <div className='container'>
                        <Row>
                            <Col l={12} m={12} s={12} >
                                <h2 className='align-center'>Organize Cards</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col l={3} m={3} s={4} offset='l1 s1 m1'>
                                <p>Add Binder</p>
                                <Button floating large className='green' waves='light' icon='add' />
                            </Col>
                            <Col l={3} m={3} s={4} >
                                <p>Add Deck</p>
                                <Button floating large className='green' waves='light' icon='add' />
                            </Col>
                            <Col l={3} m={3} s={4} >
                                <p>Add Box</p>
                                <Button floating large className='green' waves='light' icon='add' />
                            </Col>
                            <Col l={3} m={3} s={4} >
                                <p>Add Box Complex</p>
                                <Button floating large className='green' waves='light' icon='add' />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            
            </div>
        )
    }
}