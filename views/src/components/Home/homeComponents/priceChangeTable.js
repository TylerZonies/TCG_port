import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize'
import Preloader from 'react-materialize/lib/Preloader';
import axios from 'axios';

class PriceChangeTable extends Component {
    constructor(props){
        super(props)
        this.state={
            cardList: [],
            listEmpty: false,
            dataLoaded: false
        }
    }
    componentDidMount(){
        // get ordered list of highest spiked or highest dropped cards from wishlist 
        // depending on props.isSpiked cards and set state with the array
        if(this.props.isSpiked){
            //get call to get the sorted list of collection cards
            axios.get('/api/collection').then(res => {
                this.setState({
                    cardList: res.data.cards
                })
            })
        } else {
            //get cell to get ordered list of wishlist cards
            axios.get('/api/collection').then(res => {
                this.setState({
                    cardList: res.data.cards
                })
            })
        }
    }

    renderTableItems = (item) => {
        return (
            <tr>
                <td><img src={item.image} class='responsive-img' /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.priceChange}</td>
                <td><Button small color='green'>TCG</Button></td>
            </tr>
        )
    }
    loadData = () => {
        if(this.state.dataLoaded){
            return(
                <Col l={12} s={12} m={12}>
                    <table>
                        <tbody>
                            {this.state.cardSpikeList.map(this.renderTableItems)}
                        </tbody>
                    </table>
                </Col>
            )
        }else{
            return(
                <Col l={12} s={12} m={12} >
                    <Row>
                        <Col l={12} s={12} m={12} >
                             {(this.props.isSpiked ? <p class='loadingText center-align'>Loading collection price data</p> : <p class='loadingText center-align'>Loading wishlist price data</p>)}
                        </Col>
                        <Col s={4} m={4} l={4} offset='l5 s5 m5'>
                            <Preloader flashing />
                        </Col>
                    </Row>
                </Col>
            )
        }
    }
    render(){
        return(
            <Col l={8} s={8} m={8} > 
                <Row>
                    <Col l={12} s={12} m={12} >
                        <Row>
                            <Col l={12} s={12} m={12} >
                                {(this.props.isSpiked ? <h2>Collection Spikes</h2> : <h2>Wishlist Drops</h2>)}
                            </Col>
                        </Row>
                        <Row className='z-depth-2'>
                            <div class='dataTable'>
                                {this.loadData()}
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Col>     
        )
    }
}

export default PriceChangeTable;