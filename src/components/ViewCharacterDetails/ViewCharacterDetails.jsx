import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import uncheckimg from '../../assets/images/uncheckimg.png';
import RecommendedCharacters from "../RecommendedCharacters/RecommendedCharacters";
const ViewCharacterDetails = (props) => {
    console.log(props.data)
    const [characterData, setCharacterData] = useState(props.data)

    return (
        <>
            <div className="header">
                <h3>Character Details</h3>
                <img src={uncheckimg} onClick={props.onClose} alt="uncheck" />
            </div>
            <Card className="character-list-Details">
                <img className="character-Detail-image" src={characterData.image} alt="characterImage" />
                <div className="row">
                    <Col md={6}>
                        Name:
                    </Col>
                    <Col md={6} className="text-left">
                        {characterData.name}
                    </Col>
                    <Col md={6}>
                        Species:
                    </Col>
                    <Col md={6} className="text-left">
                        {characterData.species}
                    </Col>
                    <Col md={6}>
                        Status:
                    </Col>
                    <Col md={6} className="text-left">
                        {characterData.status}
                    </Col>
                    <Col md={6}>
                        Location:
                    </Col>
                    <Col md={6} className="text-left">
                        {characterData.location.name}
                    </Col>

                    <Col md={6}>
                        Gender:
                    </Col>
                    <Col md={6} className="text-left">
                        {characterData.gender}
                    </Col>

                    <Col md={6}>
                        Created On:
                    </Col>
                    <Col md={6} className="text-left">
                        {characterData.created}
                    </Col>
                </div>
            </Card>
            {characterData.species !== '' ? (
                <div>
                    <h4>Recommended Characters for Specie: {characterData.species}</h4>
                    <RecommendedCharacters species={characterData.species} />
                </div>) : (''
            )}
        </>
    )
}

export default ViewCharacterDetails;