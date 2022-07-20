import {useState, useEffect} from 'react';

function SideEffect() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    function loadData(param1) {
        console.log(param1);
setInterval(() => {
    setData(new Date());
}, 2000)   
      
    }
  
    useEffect(loadData, []);

    
//   function handleNext() {
//     setPage((currentPage) => currentPage + 1);
//   }

  
    return (
      <>
        {loading && <p>Loading...</p>}
        {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
      </>
    );

}

export default SideEffect;