import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function GameDetails() {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    let {id} = useParams();

    const gameUrl = BASE_URL + "/" + id;
    useEffect(() => {
        fetch(gameUrl)
            .then(response => response.json())
            .then(json => setDetails(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [gameUrl]);

    if (loading) {
        return <Spinner animation="border" className="spinner"/>
    }

    return (
        <Row className="justify-content-md-center">
            <Col md={6} className="bg-white">
                <Image src={details.background_image} fluid/>
                <h1>{details.name}</h1>
                <p>
                    {details.description_raw}
                </p>
                <footer className="text-center">
                    <a href={details.website}>Official Website</a>
                </footer>
            </Col>
        </Row>
    );
           
}

export default GameDetails;