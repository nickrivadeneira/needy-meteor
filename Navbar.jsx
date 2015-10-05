Navbar = React.createClass({
  render() {
    return (
      <header className="navigation" role="banner">
        <div className="navigation-wrapper">
          <nav role="navigation">
            <ul id="js-navigation-menu" className="navigation-menu show">
              <AccountsUIWrapper />
            </ul>
          </nav>
        </div>
      </header>
    )
  }
});
