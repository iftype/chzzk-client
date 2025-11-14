import { fetchStreamerData } from "../api/api.js";
import Component from "../core/Component.js";

// client/view/StreamerView.js
export default class StreamerView extends Component {
  initState() {
    return {
      content: {
        channel: null,
      },
      error: null,
      isLoading: true,
    };
  }
  async setup() {
    const content = await fetchStreamerData();
    try {
      this.setState({
        content,
        isLodaing: false,
      });
    } catch (error) {
      console.log(error.message);
      this.setState({ isLoading: false });
    }
  }

  template() {
    const { id } = this.props;
    const { isLodaing, content } = this.state;
    const { channel } = content;
    console.log(this.state.data);
    return `
            <h1>스트리머 페이지</h1>
       
            <p>props 스트리머 ID: <b>${id}</b></p>
            <p>state.channel 스트리머 ID: <b>${
              isLodaing ? "로딩중" : channel
            }</b></p>
        `;
  }
}
