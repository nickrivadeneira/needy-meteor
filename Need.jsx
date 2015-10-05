Need = React.createClass({
  propTypes: {
    need: React.PropTypes.object.isRequired
  },

  deleteThisNeed(event) {
    event.preventDefault();

    Needs.remove(this.props.need._id);
  },

  owner() {
    return Meteor.users.findOne(this.props.need.owner);
  },

  ownerName() {
    return this.owner().profile.name;
  },

  ownerAvatar() {
    return this.owner().services.google.picture;
  },

  renderTags() {
    return this.props.need.tags.map((tag) => {
      return <Tag key={"need_" + this.props.need._id + "_tag_" + tag} tag={tag} />;
    });
  },

  render() {
    return (
      <li className="sheet step-1 margin-bottom">
        <img src={this.ownerAvatar()} className="avatar" />
        <div>{this.props.need.title} - <a href="" onClick={this.deleteThisNeed}>Delete</a></div>
        <p>{this.props.need.description}</p>
        <div>{this.ownerName()}</div>
        <div>{this.renderTags()}</div>
      </li>
    );
  }
});
