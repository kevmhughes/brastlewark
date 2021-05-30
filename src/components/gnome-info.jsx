import React from 'react';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSpinner, faVenus, faMars, faUserFriends, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

export default class GnomeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userData: null,
        };
    }

    componentDidMount() {
        this.readData(this.props.dataURL)
    }

    readData = (dataURL) => {
        fetch(dataURL)
        .then(res => res.json())
        .then((result) => {
            let userData = result.Brastlewark[this.props.id];
            this.setState({
                loading: false,
                userData: userData,
            });
        })
        .catch(console.log)
    };
     
    render () {
        
        let userData = this.state.userData
        if (!userData) return <div><FontAwesomeIcon icon={faSpinner} className="fa-pulse" style={{position: "absolute", top: "50%", left: "50%", fontSize: "50px", marginLeft: "-25px", marginTop: "-25px"}}/></div>
        console.log(userData)
    
        return (
            <div style={{height: "100vh",}}>
                <Link to={{pathname:`/users`}} style={{ textDecoration: "none", marginLeft: "5px"}}><FontAwesomeIcon icon={faChevronLeft}/>{" "}Brastlewark</Link>
                <h1 style={{textAlign: "center"}}>Gnome Info</h1>
                <div className="container" style={{display: "flex", flexDirection: "column", alignContent: "center", flexWrap: "wrap", marginTop: "5px"}}>
                    <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={userData.thumbnail} />
                    <Card.Body>
                        <Card.Title>{userData.weight >=  40 
                                ? <FontAwesomeIcon icon={faMars} style={{color:"lightblue", marginRight: "5px"}}/> 
                                : <FontAwesomeIcon icon={faVenus} style={{color:"pink", marginRight: "5px"}}/>}

                                {"  "} {userData.name}</Card.Title>
                        <Card.Text style={{display: "flex", flexDirection: "column"}}>
                            <strong>Age:{" "}<span style={{fontWeight: "normal"}}>{userData.age}</span></strong>
                            <strong>Height:{" "}<span style={{fontWeight: "normal"}}>{Math.round(userData.height)} cm</span></strong>
                            <strong>Weight:{" "}<span style={{fontWeight: "normal"}}>{Math.round(userData.weight)} kg</span></strong> 
                            <strong>Hair Colour:<span style={{fontWeight: "normal"}}>{" "}{userData.hair_color}</span></strong> 
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><FontAwesomeIcon icon={faUserFriends} style={{marginRight: "5px"}}/> {userData.friends.join(", ")}{userData.friends.length > 0 ? "." : "This gnome is not very sociable."}</ListGroupItem>
                        <ListGroupItem><FontAwesomeIcon icon={faBriefcase} style={{marginRight: "10px"}}/>{userData.professions.join(", ")}{userData.professions.length > 0 ? "." : "This gnome has no useful skills."}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    
                    </Card.Body>
                    </Card>

                 </div>
            </div>
        )
    }

}

