import React from "react";
import queryString from "querystring";
import URLSearchParams from "@ungap/url-search-params";

const Posts = (props) => {
  const queryParams = queryString.parse(props.location.search);
  console.log(queryParams);

  const sortBy = new URLSearchParams(props.location.search).get("sortBy");
  console.log(sortBy);

  return (
    <div>
      <h1>Posts</h1>
      Year: {props.match.params.year} , Month: {props.match.params.month}
    </div>
  );
};

export default Posts;
