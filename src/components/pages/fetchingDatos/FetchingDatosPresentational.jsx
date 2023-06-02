const FetchingDatosPresentational = ({ users, createUser }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        );
      })}
      <button onClick={createUser}>Crear usuario</button>
    </div>
  );
};

export default FetchingDatosPresentational;
