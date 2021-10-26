# Router app demo

Adding the routes:

Install react-router-dom:
```
yarn react-router-dom
```

In index.js - wrap the app in a BrowserRouter:
```javascript
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
```

User the Route in App component:
```javascript
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/" component={Home} />
```

Home component is rendered also when we go to the other paths because "/" is part fo the other paths as well.

Solution 1: "exact" keyword:

```javascript
<Route path="/" exact component={Home} />
```

Solution 2: 

Switch component: But we need to give the routes in the right order because Swtich will use the first match: (We cannot put "/" first because it would always be picked):

```javascript
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
```

Problem: 
```javascript
const NavBar = () => {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/products">Products</a>
      </li>
      ...
```

Every time we access a link, the whole page is loaded (the bundle.js file with the whole app code is downloaded).

That is because we are using anchor element and this is the default behavior.

Test it: inspect page / network...

We want to build SPA - Single Page Application, where only the content is reloaded, not the whole page.

Solution:

```javascript
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      ...
```

Link uses anchor element but prevents its default behavior.

Test again - bundle.js is downloaded once and then it is used because it contains all the code. No need to download it every time we navigate to a different page.

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```