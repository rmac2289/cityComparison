import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

export default function MoreInfo (props){
    return(
        <Accordion >
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                     More info
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>test {/*{this.props.details}*/}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
