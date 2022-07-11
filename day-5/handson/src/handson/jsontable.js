import {useState, useEffect} from 'react';
import './jsontable.css';
import Counter from '../counter'

function TableData() {
    const [data, getData] = useState([]);
    const [loader, setLoader] = useState(false); //initially loader is set to false

const URL = "https://jsonplaceholder.typicode.com/photos";

  async function fetchData() {
  setLoader(true); //loader is set to true before fetching the data

    photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1&albumId="+document.getElementById('search-text').value)).json();//why twice
    console.log(photos);
    setPhotos(photos);
}
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
  <Counter count={data.length}></Counter>
            <input placeholder='AlbumID' id='search-text'></input><button onClick={fetchData}>Search </button>
    <tbody>
      <tr>
        <th>Title</th>
        <th>Url</th>
        <th>Thumbnail url</th>
      </tr>

      {data.map((item, i) => (
          <tr key={i}>
              <td>{item.title}</td>
              <td><a href={item.url}>Click!</a></td>
              <td><a href={item.thumbnailUrl}>Click me!</a></td>
          </tr>
      ))};
    </tbody>
    </div>
    )}
  </>
);
      }

      export default TableData;
