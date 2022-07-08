import {useState, useEffect} from 'react';
import './jsontable.css'

function TableData() {
    const [data, getData] = useState([]);
    const [loader, setLoader] = useState(false); //initially loader is set to false

const URL = "https://jsonplaceholder.typicode.com/photos";

const fetchData = () => {
  setLoader(true); //loader is set to true before fetching the data
  fetch(URL)
    .then((response) => response.json())
    // .then((json) => console.log(json))
    .then((response) => {
      console.log(response);
      setLoader(false);
      getData(response);
    });
};

useEffect(() => {
  fetchData()
}, [])

return (
  <>
  {loader && <p className="loader">Loading...Please Wait..!</p>}
  {data.length > 0 && (   //this line represents some json data has been fetched
    <div>
  <h1>Displaying Json Data in Table</h1>
    <tbody>
      <tr>
        <th>Album Id</th>
        <th>Id</th>
        <th>Title</th>
        <th>Url</th>
        <th>Thumbnail url</th>
      </tr>

      {data.map((item, i) => (
          <tr key={i}>
              <td>{item.albumId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>{item.thumbnailUrl}</td>
          </tr>
      ))};
    </tbody>
    </div>
    )}
  </>
);
      }

      export default TableData;
