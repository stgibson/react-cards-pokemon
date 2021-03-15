import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useFlip = () => {
  const [state, setState] = useState(true);

  const flipCard = () => {
    setState(state => !state);
  };

  return [state, flipCard];
};

const useAxios = baseUrl => {
  const [data, setData] = useState([]);

  const addData = async (restOfUrl) => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setData(data => [...data, { ...response.data, id: uuid() }]);
  };

  const removeData = () => {
    setData([]);
  };

  return [data, addData, removeData];
};

export { useFlip, useAxios };