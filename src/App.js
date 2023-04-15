import './App.css';

function App() {

  const addUser = async () => {
    alert('user was added')
  }

  return (
    <div className="App">
      <div>
        <h2>Scuvu Admin</h2>
        <button onClick={addUser}>Add user</button>
      </div>
    </div>
  );
}

export default App;
