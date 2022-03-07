import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from "react-bootstrap";

const RecommendedCharacters = (props) => {
  console.log(props.species)
  const api = `https://rickandmortyapi.com/api/character/?species=${props.species}`;
  const [recommendedList, setRecommendedList] = useState([])

  useEffect(() => {
    loadRecommended(api)
  }, [])

  const loadRecommended = (api) => {
    axios.get(api)
      .then(res => {
        let result = res.data.results
        console.log(result)
        setRecommendedList(result)
      }).catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
      });
  }

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {recommendedList.map((character, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{character.name}</td>
                <td>{character.status}</td>
                <td>{character.gender}</td>
                <td><img className="character-table-image" src={character.image} alt="characterImage" /></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  );
}

export default RecommendedCharacters;