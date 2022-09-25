import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getStatus } from '../services/api';
import { addUser } from '../redux/users/usersSlice';

export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'age':
        setAge(value);
        break;

      default:
        return;
    }
  };
  const dispatch = useDispatch();

  const addNewUser = async event => {
    event.preventDefault();
    const status = await getStatus();
    const newUser = { name, age, id: nanoid(), avatar: name, status };
    dispatch(addUser(newUser));
    setName('');
    setAge('');
  };

  return (
    <>
      <form onSubmit={addNewUser}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
          />
        </label>
        <label>
          <span>Age</span>
          <input
            type="number"
            name="age"
            value={age}
            onChange={onInputChange}
          />
        </label>
        <button type="submit">Add user</button>
      </form>
    </>
  );
};
