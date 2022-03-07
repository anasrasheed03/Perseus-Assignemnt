import { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import Character from '../Character/Character'
const CharacterList = (props) => {
  const [items, setItems] = useState(props.characterList);


  return (
    <>
    <Row>
      <Col md={8}>
      <div id="viewRecords">Number of Results:
        <span data-testid="fetch-records"> {items.length}</span>
      </div>
      </Col>
      <Col md={4}>
      <div id="totalRecords" className="text-right">Total Records:
        <span data-testid="total-records">{props.info.count}</span>
      </div>
      </Col>
      </Row>
      {items.map((character, index) => {
        return (
          <Col sm={4} md={4}>
            <Character key={index} character={character} viewDetails={props.viewDetails} />
          </Col>
        )
      })
      }
      {items.length < props.info.count && <button type="button" class="load-more-btn" onClick={() => props.loadData(props.info.next)}>Load More</button>}
    </>
  )
}

export default CharacterList;