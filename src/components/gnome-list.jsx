import React from 'react';
import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default class GnomeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            elements: [],
        };
    }

componentDidMount() {
    this.readData(this.props.dataURL)
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



render () {

    let elements = this.state.elements
    console.log(elements)

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Brastlewark</h1>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly",}}>
            {elements.map((elements) => (
                <div key={elements.id} className="card" style={{width: "18rem", marginBottom: "15px"}}>
                    <Card>
                    <Card.Img variant="top" src={elements.thumbnail} style={{height: "200px", objectFit: "fill",}} />
                    <Card.Body>
                        <Card.Title>{elements.name}</Card.Title>
                        <Button variant="primary"><Link to={{pathname:`/users/${elements.id}`, state: { elements: elements }}} style={{color: "white", textDecoration: "none"}}>See info</Link></Button>
                    </Card.Body>
                    </Card>                 
                </div>
            ))}
             </div>
        </div>
    )
}

}

