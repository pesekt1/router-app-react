import React from "react";
import queryString from "query-string";

const Posts = (props) => {
  const queryParams = queryString.parse(props.location.search);
  console.log(queryParams);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        Year: {props.match.params.year} , Month: {props.match.params.month}
      </div>
      <div>
        QueryParams: sortBy: {queryParams.sortBy} , approved:
        {queryParams.approved}
      </div>
    </div>
  );
};

export default Posts;
