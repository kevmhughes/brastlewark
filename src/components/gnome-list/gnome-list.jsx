/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMars, faVenus, faSpinner, faChessRook, faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import LazyLoad, { forceCheck } from 'react-lazyload';
import PlaceHolder from '../placeholder/placeholder';
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

  onChangeHandler(e) {
    this.setState({
      input: e.target.value,
    });
  }

readData = (dataURL) => {
  fetch(dataURL)
    .then((res) => res.json())
    .then((result) => {
      const elements = result.Brastlewark;
      this.setState({
        loading: false,
        elements,
      });
    })
    .catch(console.log);
};

render() {
  const { elements } = this.state;
  const { loading } = this.state;

  if (loading) return <div><FontAwesomeIcon icon={faSpinner} className="fa-pulse" /></div>;
  console.log(elements);

  return (
    <div>
      <h1 className="main-title">
        <FontAwesomeIcon icon={faChessRook} style={{ marginRight: '10px' }} />
        Brastlewark
      </h1>
      <div>
        <input className="input-styling" value={this.state.input} type="text" placeholder="search" onChange={this.onChangeHandler.bind(this)} aria-label="Search gnomes by name" />
        <div className="main-div">
          {elements.filter((element) => this.state.input === '' || element.name.toLowerCase().includes(this.state.input.toLowerCase()))
            .map((elements) => (
              <div key={elements.id} className="gnome-list-card">
                <Link to={{ pathname: `/users/${elements.id}`, state: { elements } }} style={{ textDecoration: 'none' }}>
                  <Card style={{ flexDirection: 'row' }}>
                    <LazyLoad style={{ margin: 'auto' }} once offset={600} placeholder={<PlaceHolder />}>
                      <Card.Img variant="top" src={elements.thumbnail} className="gnome-avatar" alt="Avatar image" />
                    </LazyLoad>
                    <Card.Body>
                      <Card.Title style={{ marginBottom: '0px' }}>
                        <div>
                          {elements.weight >= 40
                            ? <FontAwesomeIcon icon={faMars} style={{ color: 'lightblue', marginRight: '5px', fontSize: '15px' }} />
                            : <FontAwesomeIcon icon={faVenus} style={{ color: 'pink', marginRight: '5px', fontSize: '15px' }} />}
                          <span className="gnome-list-title">
                            {'  '}
                            {elements.name}
                          </span>
                          <span className="briefcase-icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span style={{ marginLeft: '5px' }}>
                              {elements.professions.length}
                            </span>
                          </span>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
}
