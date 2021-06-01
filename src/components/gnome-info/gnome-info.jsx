import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft, faSpinner, faVenus, faMars, faUserFriends, faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './gnome-info.css';

export default class GnomeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    this.readData(this.props.dataURL);
  }

    readData = (dataURL) => {
      fetch(dataURL)
        .then((res) => res.json())
        .then((result) => {
          const userData = result.Brastlewark[this.props.id];
          this.setState({
            userData,
          });
        })
        .catch(console.log);
    };

    render() {
      const { userData } = this.state;
      if (!userData) return <div><FontAwesomeIcon icon={faSpinner} className="fa-pulse" /></div>;
      console.log(userData);

      return (
        <div style={{ height: '100vh' }}>
          <Link to={{ pathname: '/users' }} className="gnome-info-link">
            <FontAwesomeIcon icon={faChevronLeft} />
            {' '}
            Brastlewark
          </Link>
          <div className="container">
            <Card className="gnome-info-card">
              <Card.Img className="gnome-info-image" variant="top" src={userData.thumbnail} />
              <Card.Body>
                <Card.Title style={{ display: 'flex' }}>
                  <div style={{ width: '30px' }}>
                    {userData.weight >= 40
                      ? <FontAwesomeIcon icon={faMars} style={{ color: 'lightblue', marginLeft: '5px' }} />
                      : <FontAwesomeIcon icon={faVenus} style={{ color: 'pink', marginLeft: '5px' }} />}
                  </div>
                  <span>{userData.name}</span>
                </Card.Title>
                <Card.Text className="gnome-info-text">
                  <strong>
                    Age:
                    {' '}
                    <span style={{ fontWeight: 'normal' }}>{userData.age}</span>
                  </strong>
                  <strong>
                    Height:
                    {' '}
                    <span style={{ fontWeight: 'normal' }}>
                      {Math.round(userData.height)}
                      {' '}
                      cm
                    </span>
                  </strong>
                  <strong>
                    Weight:
                    {' '}
                    <span style={{ fontWeight: 'normal' }}>
                      {Math.round(userData.weight)}
                      {' '}
                      kg
                    </span>
                  </strong>
                  <strong>
                    Hair Colour:
                    <span style={{ fontWeight: 'normal' }}>
                      {' '}
                      {userData.hair_color}
                    </span>
                  </strong>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem style={{ display: 'flex' }}>
                  <div style={{ width: '30px' }}><FontAwesomeIcon icon={faUserFriends} style={{ marginRight: '15px' }} /></div>
                  {userData.friends.join(', ')}
                  {userData.friends.length > 0 ? '.' : 'This gnome is not very sociable.'}
                </ListGroupItem>
                <ListGroupItem style={{ display: 'flex' }}>
                  <div style={{ width: '30px' }}><FontAwesomeIcon icon={faBriefcase} style={{ marginLeft: '2px', marginRight: '13px' }} /></div>
                  {userData.professions.join(', ')}
                  {userData.professions.length > 0 ? '.' : 'This gnome has no useful skills.'}
                </ListGroupItem>
              </ListGroup>

            </Card>

          </div>
        </div>
      );
    }
}
