import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}${reqType}`);
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [reqType]);
  return (
    <div>
      <Form reqType={reqType} setReqType={setReqType} />
      <List items={data} />
      <Table items={data} />
    </div>
  );
}

export default App;
