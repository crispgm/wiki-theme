---
---
var TitleMenu = React.createClass({
  getInitialState: function(){
    return {
      className: "dropdown-content"
    };
  },
  handleClick: function() {
    if (this.state.className == "dropdown-content") {
      this.setState({
        className: "dropdown-content dropdown-show"
      });
    }
    else {
      this.setState({
        className: "dropdown-content"
      });
    }
  },
  render: function() {
    return (
      <header className="menu">
        <div className="dropdown">
          <div className="dropdown-button">
            <a href="#" onClick={this.handleClick}>{this.props.title}</a>
          </div>
          <div id="dropdown-menu" className={this.state.className}>
            {this.props.menus.map((item) => (
              <a href={item.link}>{item.name}</a>
            ))}
          </div>
        </div>
      </header>
    );
  }
});

var WikiList = React.createClass({
  render: function() {
    var items = [];

    return (
      <div className="section">
        {this.props.qa.map((item) => (
          <div className="section-wrap">
            <Question text={item.q}/>
            <Answer text={item.a}/>
          </div>
        ))}
      </div>
    );
  }
});

var Question = React.createClass({
  render: function() {
    return (
      <div className="section-item item-q">
        {this.props.text}
      </div>
    );
  }
});

var Answer = React.createClass({
  render: function() {
    return (
      <div className="section-item item-a">
        {this.props.text}
      </div>
    );
  }
});

var WikiPage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <TitleMenu title={this.props.title} menus={this.props.menus} />
        <WikiList qa={this.props.qa} />
      </div>
    )
  }
});

ReactDOM.render(
  <WikiPage
    title="Crisp Wiki"
    menus={[
      {name: "Home", link: "https://crispgm.com/"},
      {name: "About", link: "https://crispgm.com/about.html"}
    ]}
    qa={
      {{ site.data.wiki | jsonify }}
    }/>,
  document.getElementById('root')
);