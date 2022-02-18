import React, { useEffect, useState } from "react";

const useGetData = (staticContext, getData, initialData = {}) => {
  const getInitialData = () => {
    if (staticContext) {
      console.log("server render");
      return staticContext;
    }
    if (window.__APP_DATA__) {
      console.log("client first render");
      return window.__APP_DATA__;
    }
    return initialData;
  };
  const [data, setData] = useState(getInitialData());

  useEffect(() => {
    if (staticContext) return;
    if (window.__APP_DATA__) {
      window.__APP_DATA__ = undefined;
      return;
    }
    getData().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return [data, setData];
};
export default useGetData;
