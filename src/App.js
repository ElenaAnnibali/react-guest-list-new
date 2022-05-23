import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Checkbox from './components/Checkbox';
import Input from './components/Input';

const guestList = [
  {
    id: 0,
    firstName: 'Finn',
    lastName: 'The Human',
    isAttending: false,
  },
  {
    id: 1,
    firstName: 'Jake',
    lastName: 'The Dog',
  },
];

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guests, setGuests] = useState(guestList);
  // const [attending, setAttending] = useState(false);

  function handleAdd() {
    const newGuestList = guests.concat({ firstName, lastName, id: uuidv4() });
    setGuests(newGuestList);

    setFirstName('');
    setLastName('');
    // setAttending(false);
  }

  return (
    <div className="App">
      <h1>
        Tree Trunks Apple Pie Feast <br />
        Guest List
      </h1>
      <Input
        htmlFor="firstName"
        text="First Name"
        id="firstName"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.currentTarget.value);
        }}
      />
      <br />
      <Input
        htmlFor="lastName"
        text="Last Name"
        id="lastName"
        value={lastName}
        onChange={(event) => {
          setLastName(event.currentTarget.value);
        }}
      />
      <br />
      <button onClick={handleAdd}>Let's feast!</button>
      <div>
        <ul>
          {guests.map((guest) => (
            <li key={guest.id}>
              <span>{guest.firstName} </span>
              <span>{guest.lastName}</span>
              <Checkbox />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
