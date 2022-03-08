import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import quotes from "./resources/quotes";
import QuoteCard from "./components/QuoteCard";
import AuthorsData from "./resources/authors";
import "./App.css";
function App() {
  const [quotesData, setQuotesData] = useState(quotes);
  const [author, setAuthor] = useState(AuthorsData);
  const [filteredQuotes, setFilteredQuotes] = useState();
  const handleClick = (val) => {
    let list = quotesData.filter((i) => i.author === val);
    setFilteredQuotes(list);
  };
  return (
    <>
      <h1 className="text-center text-primary">
        Welcome!! Beautiful Quotes of World's Best Leaders
      </h1>
      <div className="row mb-3">
        <div className=" col-sm-3 col-md-3 mt-3">
          <h3>See Quotes by Authors</h3>
          <div className="list-group">
            {author &&
              author.map((i, index) => {
                return (
                  i && (
                    <p
                      className="list-group-item"
                      key={index + i}
                      onClick={() => handleClick(i)}
                    >
                      {i}
                    </p>
                  )
                );
              })}
          </div>
        </div>
        <div className=" col-sm-7 col-md-7">
          <h2>Beautiful Quotes</h2>
          <div className="list-group2">
            <div className="row">
              {filteredQuotes ? (
                <FilteredQuotes data={filteredQuotes} />
              ) : (
                <RenderQuotes data={quotesData} />
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-2"> </div>
      </div>
    </>
  );
}
const FilteredQuotes = (props) => {
  return props.data.map((i, index) => {
    return <QuoteCard {...i} key={index} />;
  });
};
const RenderQuotes = (props) => {
  return props.data.map((i, index) => {
    return <QuoteCard {...i} key={index} />;
  });
};

export default App;
