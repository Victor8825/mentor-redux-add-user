import { getUsers } from 'redux/users/usersSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, toggleStatus } from 'redux/users/usersSlice';

import Avatar from 'react-avatar';

export const HomePage = () => {
  const users = useSelector(getUsers);
  // const newUser = { name, age, id: nanoid(), avatar: name, status };
  const dispatch = useDispatch();
  const onDeleteUser = id => {
    dispatch(deleteUser(id));
  };

  const onStatusClick = id => {
    dispatch(toggleStatus(id));
  };

  return (
    <>
      <h1>Home</h1>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>avatar</th>
              <th>name</th>
              <th>age</th>
              <th>status</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, age, avatar, status, name }, i) => (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>
                  <Avatar round={true} size={40} name={avatar} />
                </td>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  <span onClick={() => onStatusClick(id)}>
                    {status === 'yes' ? 'online' : 'offline'}
                  </span>
                </td>
                <td>
                  <button type="button" onClick={() => onDeleteUser(id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contacts!</p>
      )}
    </>
  );
};
