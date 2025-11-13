import Component from "../core/Component.js";

// client/view/StreamerView.js
export default class StreamerView extends Component {
  template() {
    console.log(this.props);
    return `
            <h1>스트리머 페이지</h1>
            <p>스트리머 ID: <b>${this.props.id}</b></p>
        `;
  }
}
