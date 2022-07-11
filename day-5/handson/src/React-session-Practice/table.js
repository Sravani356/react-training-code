import { useState } from 'react';
import './tabledata.css';

export default function TableData() {
    let [photos, setPhotos] = useState({
        photoData: [],
        newAlbumId: "",
    });

    if (!photos.photoData.length) {
        getAlbum();
    }

    async function getAlbum(isButtonClicked = false) {
        let photosList = []
        if (isButtonClicked) {
            photosList = await (await fetch('https://jsonplaceholder.typicode.com/photos?_page=1&&'+'&&albumId='+parseInt(photos.newAlbumId))).json();
        }
        else {
            photosList = await (await fetch('https://jsonplaceholder.typicode.com/photos?_page=1')).json();

        }
        setPhotos({ ...photos, photoData: photosList })
    }


    function onChangeInputAlbumId(event) {
        setPhotos({ ...photos, [event.target.name]: event.target.value })
    }

    return (
        <div className='outerContainer'>
            <div className="inputContainer">
                <input onChange={onChangeInputAlbumId} placeholder="enter Album Id " name="newAlbumId" value={photos.newAlbumId} id="inputAlbumId" />
                <button className="button" onClick={()=>getAlbum(true)}>Click</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>AlbumId </td>
                        <td>Id</td>
                        <td>ThumbnailUrl</td>
                        <td>Title</td>
                        <td>Url</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        photos.photoData.map(photo => {
                            return (
                                <tr>
                                    <td>{photo.albumId}</td>
                                    <td>{photo.id}</td>
                                    <td><a href={photo.thumbnailUrl}>click</a></td>
                                    <td>{photo.title}</td>
                                    <td><a href={photo.url}>click</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}