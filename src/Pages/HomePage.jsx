import Header from "../Components/Layouts/Header";
import Layout from "../Components/Props/Layout";
import React, { useEffect, useState } from "react";
import BrowseBanner from "../Components/Layouts/BrowseBanner";
import CatalogCarousel from "../Components/Layouts/CatalogCarousel";
import { Link } from "react-router";
import {
  getNewlyGames,
  getTopTenGames,
  getTrendingGames,
} from "../Services/GameService";

const HomePage = () => {
  const [topGames, setTopGames] = useState([]);
  const [newlyGames, setNewlyGames] = useState([]);
  const [trendingGames, setTrendingGames] = useState([]);

  useEffect(() => {
    getTopTenGames()
      .then(setTopGames)
      .catch((err) => console.error("Erro:", err));
  }, []);

  useEffect(() => {
    getNewlyGames()
      .then(setNewlyGames)
      .catch((err) => console.error("Erro:", err));
  }, []);

  useEffect(() => {
    getTrendingGames()
      .then(setTrendingGames)
      .catch((err) => console.error("Erro:", err));
  }, []);

  return (
    <Layout>
      <Header></Header>

      <div className="bg-background-secondary rounded-2xl my-5 p-10">
        <BrowseBanner></BrowseBanner>

        <div className="bg-neutral-900 mt-8 rounded-2xl p-4">
          <p className="text-2xl font-black">
            <Link to="/browse">
              <span className="underline decoration-2">Most Popular</span>
            </Link>
            <span className="text-blue-theme"> Right Now</span>
          </p>

          <CatalogCarousel items={trendingGames}></CatalogCarousel>
        </div>

        <div className="bg-neutral-900 mt-8 rounded-2xl p-4">
          <p className="text-2xl font-black">
            <Link to="/browse">
              <span className="underline decoration-2">Newly</span>
            </Link>
            <span className="text-blue-theme"> Added</span>
          </p>

          <CatalogCarousel items={newlyGames}></CatalogCarousel>
        </div>

        <div className="bg-neutral-900 mt-8 rounded-2xl p-4">
          <p className="text-2xl font-black">
            <Link to="/browse">
              <span className="underline decoration-2">Best Rated</span>
            </Link>
            <span className="text-blue-theme"> All Time</span>
          </p>

          <CatalogCarousel items={topGames}></CatalogCarousel>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
