import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CatagoryNews = () => {
  // how to use useParams
  const { id } = useParams(); //string
  const parsedId = parseInt(id);
  const data = useLoaderData();

  const [catagoryNews, setCatagoryNews] = useState([]);
  useEffect(() => {
    if (parsedId === 0) {
      setCatagoryNews(data);
      return;
    } else if (parsedId === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCatagoryNews(filteredNews);
    } else {
        const filteredNews = data.filter(
          (news) => news.category_id === parsedId
        );
        //   console.log(filteredNews);
        setCatagoryNews(filteredNews);
    }
    
  }, [data, parsedId]);
  return <div>Total {catagoryNews.length} news Found</div>;
};

export default CatagoryNews;
