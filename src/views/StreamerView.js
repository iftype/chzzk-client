import { fetchStreamerData } from "../api/api.js";
import Component from "../core/Component.js";

// client/view/StreamerView.js
export default class StreamerView extends Component {
  initState() {
    return {
      content: null,
      error: null,
    };
  }
  async setup() {
    const content = await fetchStreamerData();
    this.setState({
      content,
    });
  }

  template() {
    console.log(this.state.data);
    return `
            <h1>스트리머 페이지</h1>
            <p>props 스트리머 ID: <b>${this.props.id}</b></p>
            <p>state.channel 스트리머 ID: <b>${this.state.content.channel}</b></p>
        `;
  }
}
