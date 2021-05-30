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
                <h1 style={{textAlign: "center"}}>User Info</h1>
                <div className="container" style={{display: "flex", flexDirection: "column", alignContent: "center", flexWrap: "wrap", marginTop: "5px"}}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={userData.thumbnail} />
                    <Card.Body>
                        <Card.Title>{userData.name}</Card.Title>
                        <Card.Text>
                        <p>Age: {userData.age} Hair</p>
                        <p>Colour: {userData.hair_colour}</p>
                        <p>Height: {userData.height} cm</p>
                        <p>Weight: {userData.weight} kg</p>
                        
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Friends: {userData.friends}</ListGroupItem>
                        <ListGroupItem>Professions: {userData.professions}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Button variant="primary"><Link to={{pathname:`/users`}} style={{color: "white", textDecoration: "none"}}>Go to list</Link></Button>
                    </Card.Body>
                    </Card>

                 </div>
            </div>
        )
    }

}