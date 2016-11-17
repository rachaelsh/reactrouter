ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,

  document.getElementById('content')
);

//the first route path is your main, and its enclosing your other route paths. IndexRoute is like "otherwise" in angular(default page).  names Home as your main page.  the Main path has an open/close tab, the rest are self closing.
//Router - encases your routes(these are your states)
//Route path is the name of state component is your template
//this.props.children (on your Main) is where the content from all your other routes lives
//browserHistory is to fix a problem.  google it!



//for each route, you need:  Route path in Routes, Link in main, name variabe and call script in Index.html, set up createClass in your Contact page
