import React, { Component } from 'react';
import CardSearch from '../CollectionSearch/CollectionSearchBar';
import PriceChangeTable from './homeComponents/priceChangeTable';
import { Row, Col } from 'react-materialize';
import axios from 'axios';


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            searchTerm: '',
            autofillData: {
                'Name': null,
                'Controll': null
            }

        }
    }
    componentDidMount(){
        
    }
    handleSearchChange = (res) => {
        const autoFillObject = {};
        axios.get(`https://api.scryfall.com/cards/autocomplete?q=${res.target.value}`)
            .then(res => {
                res.data.data.map(name => autoFillObject[name] = null);
                this.setState({
                    autofillData: autoFillObject
                });
            })
        this.setState({
            searchTerm: res.target.value
        })
    }

    render(){
        return(
            <div>
                <Row>
                    <CardSearch 
                        handleSearchChange={this.handleSearchChange} 
                        handleSearchSubmit={this.handleSearchSubmit} 
                        autofill={this.state.autofillData} 
                    />
                </Row>
                <Row>
                    <Col l={3} m={2} s={12} className='z-depth-2'>
                        <Row>
                            <h2>Notifications</h2>
                        </Row>
                    </Col>
                    <Col l={9} m={10} s={12} className='z-depth-2'>
                        <Row>
                            <Col l={10} s={10} m={10} offset='s1 l1 m1' className='z-depth-2'>
                                <div class='collectionSpike'>
                                    {/* <CollectionSpike /> */}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col l={10} s={10} m={10} offset='s1 l1 m1' className='z-depth-2'>
                                <Row>
                                <h3>Dashboard</h3>
                                </Row>
                                <Row>
                                    <div class='collectionSpike'>
                                        <PriceChangeTable isSpiked={true} />
                                    </div>
                                </Row>
                                <Row>
                                    <div class='collectionSpike'>
                                        <PriceChangeTable isSpiked={false} />
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Home