import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import logo from '../../assets/images/rick-and-morty-logo.png';
import { useForm } from 'react-hook-form';
import Loader from "../../components/Loader/Loader";
import ViewCharacterDetails from "../../components/ViewCharacterDetails/ViewCharacterDetails";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper"
import axios from 'axios';
import CharacterList from '../../components/CharacterList/CharacterList'
import './Home.css'
const Home = () => {
    const { register, handleSubmit, reset } = useForm();
    const [characterList, setCharacterList] = useState([])
    const [characterInfo, setCharacterInfo] = useState()
    const [view, setView] = useState(false)
    const [viewCharacter, setCharacter] = useState('');
    const api = 'https://rickandmortyapi.com/api/character/';
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryString, setSearchQueryString] = useState('');
    const [loading, setLoading] = useState(false)
    const onSubmit = (form) => {
        console.log(form)
        if (form.name) {
            const result = [];
            setCharacterList(result);
            setSearchQueryString(form.name);
            const query = `${api}?name=${form.name}`;
            setSearchQuery(query)
            // loadData(query);
        } else {
            setSearchQuery('');
        }
        reset();
    }

    const resetSearch = () => {
        const result = [];
        setCharacterList(result);
        setSearchQueryString('')
        setSearchQuery('')

    }
    useEffect(() => {
        if (searchQuery != '') {
            loadData(searchQuery);
        } else {
            loadData(api);
        }
    }, [searchQuery])

    useEffect(() => {
        loadData(api)
    }, [])

    const loadData = (api) => {
        if (api) {
            setLoading(true)
            axios.get(api)
                .then(res => {
                    let result = res.data.results
                    console.log(result)
                    console.log(characterList)
                    setCharacterList([...characterList, ...result])
                    setCharacterInfo(res.data.info)
                }).catch(error => {
                    setCharacterList([]);
                    setCharacterInfo('')
                    console.error('Error:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    const viewDetails = (data) => {
        console.log(data)
        setCharacter(data);
        setView(true);
    }

    const closeHandler = () => {
        setView(prvState => !prvState);

    }

    return (
        <>
            <Container id="header">
                <Row>
                    <Col>
                        <div className="home">
                            <img className="logo" src={logo} alt="logo" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <form onSubmit={handleSubmit(onSubmit)} id="form" className="center-content">
                            <input
                                className='form-field'
                                type='search'
                                placeholder='Search for a character'
                                name='name'
                                {...register('name')}></input>
                            <input
                                className='submit-button'
                                type='submit'
                                value='Submit'></input>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Container>
                {searchQueryString !== '' ? (
                    <Row>
                        <Col md={10}>
                            <div>
                                <h3>Searched for: {searchQueryString}</h3>
                            </div>
                        </Col>
                        <Col md={2}>
                            <button type="button" class="load-more-btn" id="resetSearch" onClick={() => resetSearch(api)}>Reset Search</button>
                        </Col>
                    </Row>
                ) : (''
                )}
                <Row>
                    {!loading && characterList?.length > 0 ?
                        <CharacterList characterList={characterList} setLoading={setLoading} info={characterInfo} loadData={loadData} viewDetails={viewDetails} />
                        :
                        <>
                            {!loading && <div className="norecord">
                                <p>No records found.</p>
                            </div>}
                        </>
                    }
                </Row>

            </Container>
            {view && <ModalWrapper> <ViewCharacterDetails data={viewCharacter} onClose={closeHandler} /></ModalWrapper>}
            {loading && <Loader />}

        </>
    )

}
export default Home;