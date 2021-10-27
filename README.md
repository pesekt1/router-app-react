# Router app demo

## props, route params, query string params

### Props

Route will inject props when rendering a component:

https://reactrouter.com/web/guides/quick-start

props:
  - history: for sending user to a different page.
  - location: represents where the app is now.
  - match: Info about how the url is matched with the set path from the Route.

Passing additional props by Route: 

Example:We pass sortBy and also all the default props - history, location, and match.
```javascript
<Route
  path="/products"
  render={(props) => <Products sortBy="newest" {...props} />}
/>
```

### params

Passing route parameters:
```javascript
<Switch>
  <Route path="/products/:id" component={ProductDetails} />
```

The route parameter id is in match.params:
```javascript
match :
  params:{id: "1"}
```

Now in ProductDetails we can use this id param:
```javascript
render() {
  return (
    <div>
      <h1>Product Details - {this.props.match.params.id} </h1>
```

Products component - get rid of the full page reload: It is because we are using anchor element:
```javascript
<a href={`/products/${product.id}`}>{product.name}</a>
```

Solution: use Link from react-router-dom
```javascript
<Link to={`/products/${product.id}`}>{product.name}</Link>
```

Optional route params: using "?":
```javascript
<Route path="/posts/:year?/:month?" component={Posts} />
```

In posts we can use the route params:
```javascript
const Posts = (props) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {props.match.params.year} , Month: {props.match.params.month}
    </div>
  );
};
```

Query string parameters:

http://localhost:3000/posts?sortBy=newest&approved=true

Query parameters are in props.location.search: Inspect the component:
```javascript
props
  location:
    {search: "?sortBy=newest&approved=true"}
```

There is a library for parsing query parameters: query-string
```
yarn add query-string
```

Use the parse method:
```javascript
const Posts = (props) => {
  const queryParams = queryString.parse(props.location.search);
```

Result: (It is parsed as a string, if we need other types we need to do it differently.)
```javascript
{approved: 'true', sortBy: 'newest'}
```