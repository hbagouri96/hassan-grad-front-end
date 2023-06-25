"use client";

import axios from "axios";
import { useState } from "react";

type Prediction = {
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  location: string;
};

const Home = () => {
  const [url, setUrl] = useState("");

  const [prediciton, setPrediciton] = useState<Prediction | null>(null);

  const handleClick = async () => {
    try {
      const domain = url.includes("dubizzle")
        ? "/py/dubizzlescrape"
        : "/py/aqarmapscrape";
      const res = await axios.post<Prediction>(domain, {
        url,
      });
      setPrediciton(res.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex gap-4">
        <input
          className="rounded border border-gray-500 p-1"
          type="text"
          onChange={(e) => {
            let reqUrl = e.target.value.replace(
              "https://www.dubizzle.com.eg/ad/",
              "https://www.dubizzle.com.eg/en/ad/"
            );
            reqUrl = e.target.value.replace(
              "https://www.aqarmap.com.eg/ar/",
              "https://www.aqarmap.com.eg/en/"
            );

            setUrl(reqUrl);
          }}
          placeholder="Dubizzle URL"
        />
        <button
          onClick={handleClick}
          className="rounded bg-teal-500 px-6 py-2 text-gray-50"
        >
          Predict
        </button>
      </div>
      {prediciton && (
        <div className="mt-4 grid w-1/2 grid-flow-col grid-cols-5 text-center">
          <div>
            <p className="col-span-1">Area (m²)</p>
            <p>{prediciton.area}</p>
          </div>
          <div>
            <p className="col-span-1">Bedrooms</p>
            <p>{prediciton.bedrooms}</p>
          </div>
          <div>
            <p className="col-span-1">Bathrooms</p>
            <p>{prediciton.bathrooms}</p>
          </div>
          <div>
            <p className="col-span-1">Price</p>
            <p>{prediciton.price}</p>
          </div>
          <div>
            <p className="col-span-1">Location</p>
            <p>{prediciton.location}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
