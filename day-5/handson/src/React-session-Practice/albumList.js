import { useState } from "react";
import './albumList.css';
import Counter from "../counter";

function AlbumList() {
    let [photos, setPhotos] = useState([]); //in order to trigger a re-render , use state
    // if (!photos.length) {
    //     // fetchAlbumData();
    // }
    async function fetchAlbumData() {
        photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1&albumId="+document.getElementById('search-text').value)).json();//why twice
        console.log(photos);
        setPhotos(photos);
    }
    return (
        <div>
            <Counter count={photos.length}></Counter>
            <input placeholder='AlbumID' id='search-text'></input><button onClick={fetchAlbumData}>Search </button>
            <table>
                <thead>
                   <tr>
                     <td>Title</td>
                    <td>URL</td>
                    <td>ThumbnailUrl</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        photos.map(function (photo) { //photos.map((item, i)
                            return <tr key={photo.id}>
                              <td>{photo.title}</td>
                                <td><a href={photo.url}>click</a></td>
                                <td>{photo.thumbnailUrl}</td>
                                </tr>
                        })
                    }</tbody>
            </table>
        </div>
    )
}

export default AlbumList;