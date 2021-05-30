import React from 'react'
import {Card, ListGroupItem, ListGroup, Button} from 'react-bootstrap'
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
        if (!userData) return <div>Loading...</div>
        console.log(userData)
    
        return (
            <div style={{height: "100vh",}}>
                <h1 style={{textAlign: "center"}}>Gnome Info</h1>
                <div className="container" style={{display: "flex", flexDirection: "column", alignContent: "center", flexWrap: "wrap", marginTop: "5px"}}>
                    <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={userData.thumbnail} />
                    <Card.Body>
                        <Card.Title><strong>Name:</strong> {userData.name}</Card.Title>
                        <Card.Text>
                        <p style={{marginBottom: "0"}}><strong>Age:</strong> {userData.age}</p>
                        <p style={{marginBottom: "0"}}><strong>Height:</strong> {Math.round(userData.height)} cm</p>
                        <p style={{marginBottom: "0"}}><strong>Weight:</strong> {Math.round(userData.weight)} kg</p>
                        <p style={{marginBottom: "0"}}><strong>Hair Colour:</strong> {userData.hair_color}</p>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><strong>Friends:</strong> {userData.friends.join(", ")}</ListGroupItem>
                        <ListGroupItem><strong>Professions:</strong> {userData.professions.join(", ")}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Link to={{pathname:`/users`}} style={{color: "white", textDecoration: "none"}}><Button variant="primary">Go to list</Button></Link>
                    </Card.Body>
                    </Card>

                 </div>
            </div>
        )
    }

}

