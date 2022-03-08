import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function QuoteCard({ text, author }) {
  return (
    <div className="card text-center col-sm-5 m-3 border border-primary">
      <div className="card-header">
        <p>{author}</p>
      </div>
      <div className="card-body">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default QuoteCard;
