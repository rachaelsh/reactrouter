Main = React.createClass({
  render: function(){
    return (
      <div>
        <header>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to="about">
          <button>About</button>
          </Link>
          <Link to="contact">
          <button>Contact</button>
          </Link>
        </header>
        {this.props.children}
        <footer>this is a footer</footer>
      </div>
    );
  }
})
//this.props.children is like your ui-view.  this will wrap all content from other pages.
//Link is the variable set up in your index.html.
//notice about is lower case.  it references the routes page, where you name the path.  it's not the component.
