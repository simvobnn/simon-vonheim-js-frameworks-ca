import React, {useState, useEffect} from "react";
import {BASE_URL} from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "./Search";
import GameItem from "./GameItem";

function GameList() {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setFilteredGames(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, []);

    const filterGames = function(input) {
        const searchInput = input.target.value.toLowerCase();
        const filteredArray = games.filter(function(item) {
            const lowerCaseName = item.name.toLowerCase();
            if (lowerCaseName.startsWith(searchInput)) {
                return true;
            } return false;
        });
        setFilteredGames(filteredArray);
    };

    if (loading) {
        return <Spinner animation="border" className="spinner"/>
    }

    return (
        <>
            <Search handleSearch={filterGames}/>
            <Row>
                {filteredGames.map(game => {
                    const {id, name, background_image, rating, released} = game;

                    return (
                        <Col sm={6} md={3} key={id}>
                            <GameItem id={id} name={name} image={background_image} rating={rating} rdate={released}/>
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}

export default GameList;