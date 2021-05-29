import React from 'react'

export default class GnomeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userData: null,
        };
        this.readData(this.props.dataURL);
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
        console.log(userData)
    
        return (
            <div style={{backgroundColor: "lightsteelblue",}}>
                <h1 style={{textAlign: "center"}}>User Info</h1>
                <div className="container" style={{display: "flex", flexDirection: "column", alignContent: "center", flexWrap: "wrap", marginTop: "5px"}}>
                    <div className="card" style={{width: "18rem", marginBottom: "5px"}}>

                    </div>

                 </div>
            </div>
        )
    }

}