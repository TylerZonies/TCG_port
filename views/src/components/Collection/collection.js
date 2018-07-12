import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import axios from 'axios';
import CardSearch from '../CollectionSearch/CollectionSearchBar';
import LargeTable from '../LargeTable/largeTable';
import CardForm from '../CardForm/CardForm';

class Collection extends Component {
    constructor(props){
        super(props);
        this.state={
            searchTerm: '',
            collectionData: [],
            tableData: [],
            autofillSearchData: [],
            autofillAddData: [],
            dataLoaded: false
        }
    }
    componentDidMount(){
        axios.get('/api/collection?order=alpha').then(res => {
            this.setState({
                tableData: res.data.collection.cards
            })
        })
    }
    handleCardSubmit = (event) => {
        axios.get('/api/collection?order=alpha').then(res => {
            this.setState({
                tableData: res.data.collection.cards
            })
        })
    }
    handleCollectionSearchChange = (event) => {
        const autoFillObject = {};
        axios.get(`https://api.scryfall.com/cards/autocomplete?q=${event.target.value}`)
            .then(res => {
                res.data.data.map(name => autoFillObject[name] = null);
                this.setState({
                    autofillSearchData: autoFillObject
                });
            })

        const newTableData = this.state.collectionData.filter(card => card.name.includes(event.target.value))
        this.setState({
            tableData: newTableData,
            searchTerm: event.target.value
        })
    }
    render(){
        return(
            <div>
                <Row>
                    <CardSearch
                        handleSearchChange={this.handleCollectionSearchChange}
                        handleSearchSubmit={this.handleSearchSubmit}
                        autofill={this.state.autofillData}
                    />
                </Row>
                <div className='container'>
                <Row>
                    <Col l={12} m={12} s={12} className='z-depth-1'>
                        <CardForm passCardSubmit={this.handleCardSubmit} />
                    </Col>
                </Row>
                <Row classname='z-depth-2'>
                    <Col s={12} m={12} l={12} >
                        <div className='container'>
                            <Row>
                                <Col l={12} m={12} s={12}>
                                    <h2>Your Collection</h2>
                                </Col>
                            </Row>
                            <Row>
                                <LargeTable tableData={this.state.tableData} />
                            </Row>
                        </div>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }
}

export default Collection;