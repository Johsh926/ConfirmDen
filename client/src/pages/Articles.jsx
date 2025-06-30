import React, { useEffect, useState } from "react";
import "./Articles.css";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY; // Use environment variable
const NEWS_CATEGORIES = ["general", "business", "sports", "technology", "health", "entertainment", "science"];

export default function Articles() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNews(category);
    const interval = setInterval(() => fetchNews(category), 300000); // Auto-refresh every 5 minutes
    return () => clearInterval(interval);
  }, [category]);

  const fetchNews = async (selectedCategory) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`
      );
      const data = await response.json();

      if (data.articles && data.articles.length > 0) {
        setNews(data.articles);
      } else {
        setError(`No news articles found for ${selectedCategory}.`);
        setNews([]);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setError("Failed to load news.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="news-container">
      <h2 className="news-title">Latest News</h2>

      {/* Category Selector */}
      <div className="category-buttons">
        {NEWS_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`category-btn ${category === cat ? "active" : ""}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading & Error Messages */}
      {loading && <p className="loading">Loading news...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* News Articles */}
      <div className="news-grid">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage ? (
              <img src={article.urlToImage} alt="News" className="news-img" />
            ) : (
              <div className="placeholder-img">No Image</div>
            )}
            <div className="news-content">
              <h3 className="news-headline">{article.title}</h3>
              <p className="news-description">{article.description || "No description available."}</p>
            </div>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}