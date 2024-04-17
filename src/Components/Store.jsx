import axios from "axios";
import React, { useEffect, useState } from "react";

const Store = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setData(data.data));
  }, []);
  return (
    <div>
      <table border={2}>
        {data.map((a) => (
          <tr key={a.id}>
            <td>{a.title}</td>
            <td>
              <img src={a.image} alt="img" width={100} height={100} />
            </td>
            <td>{a.price}</td>
            <td>{a.rating.rate}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Store;
