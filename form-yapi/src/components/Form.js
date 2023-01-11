import { useEffect, useState } from "react";
import * as yup from "yup";
import Formİtem from "./Formİtem";
import schema from "./SchemaForm";
import axios from "axios";
import DataList from "./DataList";
import baslangıc from "./DataBaslangıc";

function Form() {
  const [res, setRes] = useState(true);
  const [veri, setVeri] = useState([]);
  const [error, setError] = useState(baslangıc);
  const [data, setData] = useState(baslangıc);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", data)
      .then((res) => setVeri([...veri, res.data]));
    setData(baslangıc);
  };

  function catchError(name, value) {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setError({
          ...error,
          [name]: "",
        });
      })
      .catch((err) => {
        setError({
          ...error,
          [name]: err.errors[0],
        });
      });
  }

  useEffect(() => {
    schema
      .isValid(data)
      .then((res) => setRes(!res))
      .catch((err) => setRes(err));
  }, [data]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    e.target.type === "checkbox"
      ? setData({ ...data, isTrue: !data.isTrue })
      : setData({ ...data, [name]: value });
    catchError(name, value);
  };

  return (
    <div>
      <Formİtem
        data={data}
        res={res}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div>
        {error.email},{error.isTrue}
      </div>
      <DataList veri={veri} />
    </div>
  );
}
export default Form;
