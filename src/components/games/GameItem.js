import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function GameItem({id, name, image, rating, rdate}) {
    return (
            <Card className="h-100">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>Rating:</b> {rating}</ListGroup.Item>
                        <ListGroup.Item><b>Released:</b> {rdate}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer >
                    <Link to={"/" + id}>          
                        <Button variant="secondary" block>
                            View more
                        </Button>
                    </Link>
                </Card.Footer>
            </Card>
    );
}

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
};

export default GameItem;