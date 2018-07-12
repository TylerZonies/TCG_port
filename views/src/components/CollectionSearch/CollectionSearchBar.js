import React from 'react';
import { Autocomplete, Row, Col, Button } from 'react-materialize';

const CardSearch = (props) => { 
        return(
            <Row className='z-depth-2'>
                <Col l={1} s={1} m={1}>
                    <Button waves='light' icon='search' onClick={props.handleSearchSubmit} />
                </Col>
                <Col l={11} s={11} m={11}>
                    <Autocomplete 
                        l={12} 
                        s={12} 
                        m={12}
                        title='Search Collection'
                        data={props.autofill}
                        onChange={(event) => props.handleSearchChange(event)}
                        limit={10}
                        value={props.searchTerm}
                        // inline={true}
                    />
                </Col>
                
            </Row>
        )
}

export default CardSearch