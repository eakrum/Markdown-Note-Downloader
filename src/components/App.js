import React from "react";
import Markdown from "./Markdown";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          Markdown Note Downloader
        </a>
      </nav>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">
              A Markdown Note Downloader Using React and Webpack
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Markdown />
          </div>
        </div>
      </main>
    </div>
  );
}
