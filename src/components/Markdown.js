import React, { Component } from "react";
import { renderToString } from "react-dom/server";
import ReactMarkdown from "react-markdown";
import $ from "jquery";

export default class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdText: "",
      downloadMd: "",
      downloadHtml: ""
    };
  }

  handleTextBox = event => {
    this.setState({ mdText: event.target.value });
  };

  mdFileName = event => {
    this.setState({ downloadMd: event.target.value });
  };
  htmlFileName = event => {
    this.setState({ downloadHtml: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm col-md col-lg side left">
            <h4>Provided Md Text</h4>
            <textarea
              placeholder="Please provide some md formatted text here"
              value={this.state.mdText}
              onChange={this.handleTextBox}
            />

            <div className="download-area">
              <input
                type="text"
                placeholder="Name the .md file (no extension needed)"
                value={this.state.downloadMd}
                onChange={this.mdFileName}
              />
              <a
                className={"btn btn-primary "}
                download={this.state.downloadMd + ".md"}
                href={URL.createObjectURL(new Blob([this.state.mdText]))}
              >
                Download
              </a>
            </div>
          </div>

          <div className="col-sm col-md col-lg side right">
            <h4>Md Text Preview</h4>
            <div className="mdFile-container">
              <ReactMarkdown source={this.state.mdText} />
            </div>

            <div className="download-area">
              <input
                type="text"
                placeholder="Name the .html file (no extension needed)"
                value={this.state.downloadHtml}
                onChange={this.htmlFileName}
              />
              <a
                className={"btn btn-primary "}
                download={this.state.downloadHtml + ".html"}
                href={URL.createObjectURL(
                  new Blob([$(".mdFile-container").html()], {
                    type: "text/html"
                  })
                )}
              >
                Download Download
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
