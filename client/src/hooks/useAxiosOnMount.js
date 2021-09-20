import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosOnMount = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // reset error
      setError(null);
      let res = await axios.get(url);
      // this will not work if it doesn't as res.data.data or res.data
      setData(res.data.data ? res.data.data : res.data);
    } catch (err) {
      setError(err);
    } finally {
      // finally block runs regaradless if successfull or not
      setLoading(false);
    }
  };
  // object order doesn't matter when someone use this
  // but name does
  return { data, loading, error };
  // let { loading, error, data  as grades} = useAxiosOnMount('/api/grades')

  // array order does matter what they call it does
  // return [data, loading, error];
  // let [x, y, z ] = useAxiosOnMount('/api/grades')
};

export default useAxiosOnMount;