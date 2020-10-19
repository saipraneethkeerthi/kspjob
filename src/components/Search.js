import React, { useState, useContext } from "react";
import { Form, Button, Row, Col, FormControl } from "react-bootstrap";
import JobsContext from "../context/jobs";

const Search = () => {
  const { onSearch } = useContext(JobsContext);

  const [state, setState] = useState({
    description: "",
    location: "",
    full_time: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "full_time") {
      setState((prevState) => ({
        ...state,
        [name]: !prevState.full_time,
      }));
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(state);
    onSearch(state);
  };
  const change = (e) => {
    console.log(e.target.name);
  };

  return (
    <div className="search-section">
      <Form className="search-form" onSubmit={handleSearch}>
        <Row>
          {/* <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ''}
                placeholder="Enter search term"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="location">
              <Form.Control
                type="text"
                name="location"
                value={state.location || ''}
                placeholder="Enter location"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col> */}
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                as="select"
                custom
                onChange={handleInputChange.bind(this)}
                size="lg"
                name="description"
              >
                <option value=""> Select Job Role</option>
                <option value="Full stack engineer">Full stack engineer</option>
                <option value="data science">data science</option>
                <option value=".net">.Net</option>
                <option value="Java Software Engineer">Java Software Engineer</option>
                <option value="Cloud Infrastructure Engineer - Formidable (Remote)">Cloud Infrastructure Engineer - Formidable (Remote)</option>
                <option value="iOS developer">iOS developer</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="location">
              <Form.Control
                as="select"
                custom
                onChange={handleInputChange.bind(this)}
                size="lg"
                name="location"
              >
                <option name="location" value="">
                  Select Location
                </option>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="uk">UK</option>
                <option value="america">America</option>
                <option value="London">London</option>
                <option value="india">India</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Button variant="primary" type="submit" className="btn-search">
              Search
            </Button>
          </Col>
        </Row>
        <div className="filters">
          <Form.Group controlId="full_time">
            <Form.Check
              type="checkbox"
              name="full_time"
              className="full-time-checkbox"
              label="Full time only"
              checked={state.full_time}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default Search;
