# Router app demo

## Branches sequence:

- start
- routes
- props-params
- navigation

## Navigation

### another library for query params

URLSearchParams library - also a library for query strings:
```
yarn add @ungap/url-search-params
```

Example: you need to you a get method with the key you are looking for:
```javascript
const sortBy = new URLSearchParams(props.location.search).get("sortBy");
```

### Redirect

Redirect component from react-router-dom:
```javascript
<Route path="/not-found" component={NotFound} />
<Route path="/" exact component={Home} />
<Redirect to="/not-found" />
```

Redirect from to:
```javascript
<Redirect from="/messages" to="/posts" component={Posts} />
```
Now http://localhost:3000/messages will be redirected to http://localhost:3000/posts


### Programmatic navigation

Redirect on a button click:
```javascript
class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.push("/products"); //with push, you can still go back in the browser
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
```

If we do not want to allow going back in the browser, we use replace function:
```javascript
this.props.history.replace("/products"); //with replace, you cannot go back in the browser
```

### Nested routing

Create a sidebar for DashBoard:
```javascript
class SideBar extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    );
  }
}
```

Now use it in the Dashboard + define the routes: Like this we have nested routing. We have our main NavBar menu and then inside Dashboard we have another routing.
```javascript
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />
    </div>
```