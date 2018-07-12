import React, { Component } from 'react';
import { Autocomplete, Input, Row, Col, Icon, Button } from 'react-materialize';
import axios from 'axios';

class CardForm extends Component {
    constructor(props){
        super(props);
        this.state={
            cardName: '',
            cardSet: '',
            cardLocation: '',
            cardSetData: [],
            cardSetCodeData:[],
            cardApiData: [],
            userStorageData: []
        }
        this.makeSetsPretty = this.makeSetsPretty.bind(this);
    }
    componentDidMount(){
        axios.get('/collection/user?storage=all').then(res => {
            const storageNames = res.data.storage.map(storage => storage.name)
            this.setState({
                userStorageData: storageNames
            })
        })
    }

    handleNameChange = event => {
        const autoFillObject = {};
        axios.get(`https://api.scryfall.com/cards/autocomplete?q=${event.target.value}`)
            .then(res => {
                res.data.data.map(name => autoFillObject[name] = null);
                this.setState({
                    cardApiData: autoFillObject
                });
            })
        this.setState({
            cardName: event.target.value
        })
    }
    getSetData = event => {
       
        axios.get(`https://api.magicthegathering.io/v1/cards?name=${event}`)
            .then(res => {
                const newArr = res.data.cards.map(card => card.set)
                this.setState({
                    cardSetCodeData: newArr
                })
                this.makeSetsPretty(newArr, 0, [])
            
            })
    }
    makeSetsPretty = (incArr, index, arr) => {
        console.log(`outside ${this}`)
        console.log(this)
        axios.get(`https://api.magicthegathering.io/v1/sets/${incArr[index]}`)
            .then(res => {
                
                arr.push(res.data.set.name)
                
                if(index + 1 >= incArr.length){
                    console.log(`inside ${this}`)
                    console.log(this)
                    this.setState({
                        cardSetData: arr
                    })
                } else {
                    index++;
                    this.makeSetsPretty(incArr, index, arr);
                }
            })
    }
    handleSetSelect = set => {
        
        this.setState({
            cardSet: set.target.value
        })
    }
    handleSetSelect = location => {   
        this.setState({
            cardLocation: location.target.value
        })
    }
    handleSelectOptionFill = set => (
        <option value={set} key={set} >{set}</option>
    )
    handleCardSubmit = event => {
        event.preventDefault();
        // get user id from cookie
        const newCard = {
            //add user id
            name: this.state.cardName,
            set: this.state.cardSet,
            location: this.state.cardLocation,
            quantity: this.state.cardQuantity,
        }
        axios.post('/card/add', newCard).then(res => {
            this.setState({
                cardName: '',
                cardSet: '',
                cardLocation: '',
                cardSetData: [],
            })
            this.props.passCardSubmit();
        })
    }
    render(){
        return(
        <div>
        <Row>
            <Col l={12} m={12} s={12}>
                <h2>Add Card:</h2>
            </Col>
        </Row>
        <Row>
            <Col l={8} m={8} s={12}  >
                <Autocomplete 
                    l={12} 
                    s={12} 
                    m={12}
                    title='Card Name'
                    data={this.state.cardApiData}
                    onChange={this.handleNameChange}
                    limit={10}
                    value={this.state.cardName}
                    onAutocomplete={this.getSetData}
                    // inline={true}
                />
            </Col>
        </Row>
        <Row>
            <Input 
                s={12} l={5} m={5} 
                type='select' 
                label="Set" 
                inline={true} 
                value={this.state.cardSet} 
                onChange={this.handleSetSelect} 
                >
                {this.state.cardSetData.map(this.handleSelectOptionFill)}
            </Input>
            <Input 
                s={10} l={5} m={5} 
                type='select' 
                label="Storage Location" 
                inline={true} 
                value={this.state.cardLocation} 
                defaultValue={this.props.defaultLocation}
                onChange={this.handleLocationSelect} 
            >
                {this.state.userStorageData.map(this.handleSelectOptionFill)}
                <option value='Add New Storage'>Add New Storage<Icon>add</Icon></option>
            </Input>
            <Button floating large className='blue' waves='light' icon='add' onClick={this.handleCardSubmit} />
        </Row>
        </div>
    )
    }
    
}

export default CardForm;