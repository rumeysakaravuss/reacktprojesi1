import React, { useState } from "react";
import "./App.css";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Person } from "./types";

const App = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const handleAddPerson = (person: Person) => {
    setPersons([...persons, person]);
  };

  const handleDeletePerson = (id: number) => {
    const newPersons = persons.filter((person) => person.id !== id);
    setPersons(newPersons);
  };

  const handleEditPerson = (editedPerson: Person) => {
    const updatedPersons = persons.map((person) =>
      person.id === editedPerson.id ? editedPerson : person
    );
    setPersons(updatedPersons);
  };

  return (
    <div className="app">
      <Container>
        <Row>
          <Col>
            <h1 className="app-header">Person List</h1>
            {persons.length === 0 ? (
              <p>No persons added yet!</p>
            ) : (
              <PersonList
                people={persons}
                onEditPerson={handleEditPerson}
                onDeletePerson={handleDeletePerson}
              />
            )}
          </Col>
          <Col>
            <h1 className="app-header">Add Person</h1>
            <PersonForm onSubmit={handleAddPerson} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="danger"
              className="clear-button"
              onClick={() => {
                setPersons([]);
              }}
            >
              Clear All
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
