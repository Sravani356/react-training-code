import { useState } from "react";
import './albumList.css';

function AlbumList() {
  getAlbums();

  let [photos, setphotos] = useState([]); //in-order to trigger a re-render, useState
  async function getAlbums() {
    const photos = await (
      await fetch("https://jsonplaceholder.typicode.com/photos")
    ).json();
    console.log(photos);
    setphotos(photos);
  }
  return (
    <div>
        <h1>Displaying records</h1>
        <table> 
        <tbody>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Thumbnail Url</th>
          </tr>
          {photos.map((photo, i) => {
            //map returns array
            // console.log(photo)
            return (
              <tr key={i}>
                <td>{photo.title}</td>
                <td>{photo.url}</td>
                <td>{photo.thumbnailUrl}</td>
              </tr>
            );
          })}
        </tbody>
        </table> 
    </div>
  );
}

export default AlbumList;
