NeedForm = React.createClass({
  parseTags(tags) {
    return (
      _.compact(
        _.map(
          _.uniq(tags.split(",")),
          tag => tag.trim()
        )
      )
    );
  },

  handleSubmit(event) {
    event.preventDefault();

    let title = React.findDOMNode(this.refs.titleInput).value.trim();
    let description = React.findDOMNode(this.refs.descriptionInput).value.trim();
    let tags = this.parseTags(React.findDOMNode(this.refs.tagInput).value);

    Needs.insert({
      title: title,
      description: description,
      tags: tags,
      owner: Meteor.userId(),
      createdAt: new Date()
    });

    React.findDOMNode(this.refs.titleInput).value = "";
    React.findDOMNode(this.refs.descriptionInput).value = "";
    React.findDOMNode(this.refs.tagInput).value = "";
  },

  render() {
    return (
      <section className="sheet step-1 margin-bottom sheet--first">
        <form className="new-need" onSubmit={this.handleSubmit} >
          <input
            type="text"
            ref="titleInput"
            placeholder="Title" />
          <textarea
            ref="descriptionInput"
            placeholder="Description" />
          <input
            type="text"
            ref="tagInput"
            placeholder="Add tags separated by commas" />

          <div className="align-right">
            <button type="submit">Create</button>
          </div>
        </form>
      </section>
    );
  }
});
