import React from 'react'

import './HomePage.css';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

export default function HomePage() {
    return (
        <div className='container'>
            <h1>Select page to go to</h1>
                <ListGroup className='nav'>
                    <Link to="/calendar"><ListGroup.Item>Go to Calendar page</ListGroup.Item></Link>
                    <Link to="/hello"><ListGroup.Item>Go to Hello page</ListGroup.Item></Link>
                </ListGroup>
        </div>
    )
};