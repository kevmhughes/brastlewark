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
        this.readData(this.props.dataURL);
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
        <div style={{backgroundColor: "lightsteelblue",}}>
            <h1 style={{textAlign: "center"}}>Brastlewark</h1>
            <div className="container" style={{display: "flex", flexDirection: "column", alignContent: "center", flexWrap: "wrap", marginTop: "5px"}}>
            {elements.map((elements) => (
                <div className="card" style={{width: "18rem", marginBottom: "5px"}}>
                    <Card.Img variant="top" src={elements.thumbnail} />
                    <Button className="btn btn-light card-body">
                    <Link to={{pathname:`/users/${elements.id}`, state: { elements: elements }}}>{elements.name}</Link>                         
                    </Button>
                </div>
            ))}
             </div>
        </div>
    )
}

}

