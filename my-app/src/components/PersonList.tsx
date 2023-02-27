import { Table, Button } from "react-bootstrap";
import { Person } from "../types";


type PersonListProps = {
  people: Person[];
  onEditPerson: (person: Person) => void;
  onDeletePerson: (id: number) => void;
};

const PersonList = ({
  people,
  onEditPerson,
  onDeletePerson,
}: PersonListProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr key={person.id}>
            <td>{index + 1}</td>
            <td>
              {person.firstName} {person.lastName}
            </td>
            <td>{person.email}</td>
            <td>
              <Button variant="info" onClick={() => onEditPerson(person)}>
                Edit
              </Button>{" "}
              <Button
                variant="danger"
                onClick={() => onDeletePerson(person.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PersonList;
