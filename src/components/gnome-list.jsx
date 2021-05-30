import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faMars, faVenus, faSpinner, faChessRook } from "@fortawesome/free-solid-svg-icons";



export default class GnomeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
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
    let loading = this.state.loading
    if (loading) return <div><FontAwesomeIcon icon={faSpinner} className="fa-pulse" style={{position: "absolute", top: "50%", left: "50%", fontSize: "50px", marginLeft: "-25px", marginTop: "-25px"}}/></div>
    console.log(elements)

    return (
        <div>
            <h1 style={{textAlign: "center"}}><FontAwesomeIcon icon={faChessRook} style={{marginRight: "10px"}}/>Brastlewark</h1>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly",}}>
            {elements.map((elements) => (
                <div key={elements.id} style={{width: "98%", marginBottom: "2px"}}>
                    <Link to={{pathname:`/users/${elements.id}`, state: { elements: elements }}} style={{textDecoration: "none"}}>
                    <Card style={{flexDirection: "row"}}>
                    <Card.Img variant="top" src={elements.thumbnail} style={{height: "50px", width: "50px", borderRadius: "50%", alignSelf: "center", marginLeft: "10px", imageRendering: " -webkit-optimize-contrast"}} alt="Avatar image"/>
                    <Card.Body>
                        <Card.Title style={{marginBottom: "0px"}}>
                            <div style={{color: "black", fontSize:"17px"}}>

                                {elements.weight >=  40 
                                ? <FontAwesomeIcon icon={faMars} style={{color:"lightblue", marginRight: "5px", fontSize: "15px"}}/> 
                                : <FontAwesomeIcon icon={faVenus} style={{color:"pink", marginRight: "5px", fontSize: "15px"}}/>}

                                {"  "}{elements.name}

                                <div style={{
                                    float: "right",
                                    position: "relative",
                                    bottom: "15px",
                                    left: "12px",
                                    fontSize: "15px",
                                    }}>
                                <FontAwesomeIcon icon={faUserFriends}/>{" "}{elements.friends.length}
                                </div>
                            </div>
                        </Card.Title>
                    </Card.Body>
                    </Card>   
                    </Link>              
                </div>
            ))}
             </div>
        </div>
    )
}

}

