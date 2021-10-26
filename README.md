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

```javascript

```

```javascript

```

```javascript

```
