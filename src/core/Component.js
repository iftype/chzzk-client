export default class Component {
  $target;
  state;
  props;
  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.state = this.initState();
    this.setup();
    this.render();
    this.componentDidMount();
  }
  initState() {
    return {};
  }
  setup() {}

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
