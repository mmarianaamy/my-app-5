'use client'

import { useEffect, useState } from "react";
import { resultsData, j } from "../types";

export const useFetchData = (url : string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string|unknown>("");
  const [userHistory, setUserHistory] = useState<resultsData[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json : j = await response.json();
      setUserHistory((userHistory) => [...userHistory, json.results[0]])
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchData()

  }, [url]);

  return { data: {loading, error, userHistory}, refetch: fetchData}
};