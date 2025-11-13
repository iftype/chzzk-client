export default class Component {
  $target;
  state;
  props;
  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.state = this.initState();
    this.render();
    this.componentDidMount();
  }

  initState() {
    return {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
    this.componentDidMount();
  }

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  componentDidMount() {}

  componentWillUnmount() {}
}
