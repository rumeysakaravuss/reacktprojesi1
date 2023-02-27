import React, { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface Props {
  onAddPerson: (person: Person) => void;
}

const AddPersonForm: React.FC<Props> = ({ onAddPerson }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddPerson({ firstName, lastName, age });
    setFirstName("");
    setLastName("");
    setAge(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Add Person</button>
    </form>
  );
};

export default AddPersonForm;
