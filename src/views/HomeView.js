import Component from "../core/Component.js";
import ChannelCard from "../components/ChannelCard.js";
import Store from "../store/GlobalStore.js";

export default class HomeView extends Component {
  initState() {
    return {
      channelList: null,
      isLoading: true,
    };
  }

  setup() {
    const channelMap = Store.getChannelList();
    this.setState({
      channelList: channelMap,
      isLoading: false,
    });
  }

  template() {
    const { isLoading } = this.state;

    return `
      <h1>카테고리 변경 기록 사이트</h1>
      ${isLoading ? `<p>로딩중...</p>` : ""} 
      <div id="channel-list-container"></div>
    `;
  }

  componentDidMount() {
    this.createChannelCardComponent();
  }
  componentDidUpdate() {
    this.createChannelCardComponent();
  }

  createChannelCardComponent() {
    const { channelList, isLoading } = this.state;
    if (isLoading || !channelList || channelList.size === 0) return;

    const $container = this.$wrapper.querySelector("#channel-list-container");

    $container.innerHTML = "";
    channelList.forEach((channel) => {
      new ChannelCard($container, channel);
    });
  }
}
