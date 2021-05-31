import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faMars, faVenus, faSpinner, faChessRook } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import './gnome-list.css';



export default class GnomeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            elements: [],
            input: '',
        };
    }

componentDidMount() {
    this.readData(this.props.dataURL);
}

componentDidUpdate() {
    forceCheck();
}
   
readData =  async (dataURL) => {
    fetch(dataURL)
    .then(res => res.json())
    .then((result) => {
        let elements = result.Brastlewark;
        this.setState({
            loading: false,
            elements: elements,
        });
    })
    .catch(console.log)
};

onChangeHandler(e){
    this.setState({
        input: e.target.value,
    })
}


render () {

    const elements = this.state.elements
    let loading = this.state.loading
    if (loading) return <div><FontAwesomeIcon icon={faSpinner} className="fa-pulse"/></div>
    console.log(elements)
    

    return (
        <div>
            <h1 className="main-title"><FontAwesomeIcon icon={faChessRook} style={{marginRight: "10px"}}/>Brastlewark</h1>
            <div>
                <input className="input-styling" value={this.state.input} type="text" placeholder="search" onChange={this.onChangeHandler.bind(this)}/>
                <div className="main-div">
                {elements.filter(element => this.state.input === '' || element.name.toLowerCase().includes(this.state.input.toLowerCase())) 
                .map((elements) => 
                <div key={elements.id} className="gnome-list-card">
                    <Link to={{pathname:`/users/${elements.id}`, state: { elements: elements }}} style={{textDecoration: "none"}}>
                        <Card style={{flexDirection: "row"}}>
                            <LazyLoad style={{margin: "auto"}} once={true} offset={600}>
                                <Card.Img variant="top" src={elements.thumbnail} className="gnome-avatar" alt="Avatar image"/>
                            </LazyLoad>
                            <Card.Body>
                                <Card.Title style={{marginBottom: "0px"}}>
                                    <div>
                                        {elements.weight >=  40 
                                        ? <FontAwesomeIcon icon={faMars} style={{color:"lightblue", marginRight: "5px", fontSize: "15px"}}/> 
                                        : <FontAwesomeIcon icon={faVenus} style={{color:"pink", marginRight: "5px", fontSize: "15px"}}/>}
                                        <span className="gnome-list-title">{"  "}{elements.name}</span>
                                        <div className="friends-icon">
                                            <FontAwesomeIcon icon={faUserFriends}/>{" "}{elements.friends.length}
                                        </div>
                                    </div>
                                </Card.Title>
                            </Card.Body>
                        </Card>   
                    </Link>              
                </div>)}
                </div>
            </div>
        </div>
    )
}

}

