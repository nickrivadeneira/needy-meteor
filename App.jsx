App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      needs: Needs.find({}).fetch()
    }
  },

  renderNeeds() {
    return this.data.needs.map((need) => {
      return <Need key={need._id} need={need} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header className="navigation" role="banner">
          <div className="navigation-wrapper">
            <nav role="navigation">
              <ul id="js-navigation-menu" className="navigation-menu show">
                <li className="nav-link"><a href="javascript:void(0)">Products</a></li>
                <li className="nav-link"><a href="javascript:void(0)">About Us</a></li>
                <li className="nav-link"><a href="javascript:void(0)">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="app-container">
          <AccountsUIWrapper />

          <NeedForm />

          <ul>
            {this.renderNeeds()}
          </ul>
        </div>
      </div>
    );
  }
});
