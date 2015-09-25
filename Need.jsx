Need = React.createClass({
  propTypes: {
    need: React.PropTypes.object.isRequired
  },

  deleteThisNeed(event) {
    event.preventDefault();

    Needs.remove(this.props.need._id);
  },

  ownerName() {
    return Meteor.users.findOne(this.props.need.owner).profile.name;
  },

  renderTags() {
    return this.props.need.tags.map((tag) => {
      return <Tag key={"need_" + this.props.need._id + "_tag_" + tag} tag={tag} />;
    });
  },

  render() {
    return (
      <li>
        <div>{this.props.need.title} - <a href="" onClick={this.deleteThisNeed}>Delete</a></div>
        <p>{this.props.need.description}</p>
        <div>{this.ownerName()}</div>
        <div>{this.renderTags()}</div>
      </li>
    );
  }
});
