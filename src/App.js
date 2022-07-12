import "./App.css";
import contacts from './contacts';

function App() {
  return (
  <div className="App">
  <h2>IronContacts</h2>
<table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
    <tbody>
    {contacts.map((contact) => {
      <tr>
        <td>{contact.pictureUrl}</td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
      </tr>
  })}
    </tbody>
</table>
</div>
);
}
export default App;

