export default class Component {
  $target;
  $wrapper;
  props;
  state;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;

    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add(this.constructor.name);
    this.$target.appendChild(this.$wrapper);

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
    this.componentDidUpdate();
  }

  template() {
    return "";
  }

  render() {
    this.$wrapper.innerHTML = this.template();
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
}
