import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';

export default class PlaceHolder extends React.Component {

render () {
    return (
        <div>
            <div>
            <FontAwesomeIcon icon={faUserCircle} style={{height: "50px", width: "50px", marginLeft: "10px", color: "lightgray"}}/>
            </div>
        </div>
    )
}

}

