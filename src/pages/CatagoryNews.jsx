import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

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
  return (
    <div>
      <h2 className="font-bold">
        Total <span className="text-secondary">{catagoryNews.length}</span> news Found
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-5">
              {
                  catagoryNews.map((news)=> <NewsCard key={news.id} news={news}></NewsCard>)
              }
          </div>
    </div>
  );
};

export default CatagoryNews;
