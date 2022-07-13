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
        <th>Won an Oscar</th>
        <th>Won an Emmy </th>
      </tr>
    </thead>
    <tbody>
    {contacts.map((contact) => {
      return (
      <tr>
        <td> <img src={contact.pictureUrl}/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>{contact.wonOscar ? '🏆' :''}</td>
        <td>{contact.wonEmmy ? '🏆' :''}</td>
      </tr>
      );
  })}
    </tbody>
</table>
</div>
);
}
export default App;

