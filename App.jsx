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
        <Navbar />
        <div className="app-container">
          <NeedForm />

          <ul>
            {this.renderNeeds()}
          </ul>
        </div>
      </div>
    );
  }
});
