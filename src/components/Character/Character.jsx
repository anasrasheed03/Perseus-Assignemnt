import { Card } from "react-bootstrap";

const Character = (props) => {
    return (
        <Card className="character-list-Details">
            <img className="character-list-Image" id="closeButton" src={props.character.image} alt="characterImage" />
            <h2 className="character-list-Header">{props.character.name}</h2>
            <h6>Status: <span className="character-list-subheader">{props.character.status}</span> </h6>
            <h6>Species: <span className="character-list-subheader">{props.character.species}</span> </h6>
            <button type="button" class="view-btn" onClick={() => props.viewDetails(props.character)}>View</button>
        </Card>
    )
}

export default Character;