import { useState, useEffect } from "react";

const useFetch = (url) => {

    //to make reactive variables which change state

    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();

        // to get data from jason file

        fetch(url, {singal : abortCont.signal }) 
          .then(res => {
            if(!res.ok){        //to check if theres error
                throw Error('could not fetch');
            }
            return res.json();
          })
          .then(data => {
            setError(null);
            setData(data);
            setIspending(false);
          })
          .catch(err => {
            if(err.message === 'AbortError'){
              console.log('Fetch stopped');
            }
            else{
              setError(err.message);
              setIspending(false)
            }  
            })

            return () => abortCont.abort();   //to abort if page changes but fetch is still running
      }, [url])

      return { data, isPending, error }
}

export default useFetch;