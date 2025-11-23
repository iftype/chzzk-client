import Component from "../core/Component.js";
import Store from "../store/GlobalStore.js";
import { fetchStreamerLogData } from "../api/api.js";
import LiveLogContainer from "../components/LiveLogContainer.js";
import ProfileHeader from "../components/ProfileHeader.js";
export default class StreamerView extends Component {
  initState() {
    return {
      channel: {
        channelName: "",
        channelImageUrl: "",
      },
      liveLogList: [],
      isLoading: true,
    };
  }

  async setup() {
    try {
      const { id } = this.props;
      const channel = Store.getChannel(id);
      this.setState({
        channel: channel,
      });

      const liveLogList = await fetchStreamerLogData(id);
      this.setState({
        liveLogList: liveLogList,
        isLoading: false,
      });
    } catch (err) {
      console.error(err);
    }
  }

  template() {
    const { liveLogList } = this.state;
    if (liveLogList.length === 0) {
      return `
          <div id="profile-header-container"></div>
          <div id="live-log-list-container"></div>
          <div>저장된 방송 기록이 존재하지 않습니다</div>
          <div>(2025-11-23 기준)</div>
      `;
    }
    return `
    <div id="profile-header-container"></div>
    <div id="live-log-list-container"></div>
    `;
  }
  componentDidMount() {
    this.createProfileHeaderContainer();
    this.createLiveLogContainer();
  }
  componentDidUpdate() {
    this.createProfileHeaderContainer();
    this.createLiveLogContainer();
  }

  createProfileHeaderContainer() {
    const $container = this.$wrapper.querySelector("#profile-header-container");
    $container.innerHTML = "";
    new ProfileHeader($container, this.state.channel);
  }

  createLiveLogContainer() {
    const { liveLogList, isLoading } = this.state;
    if (isLoading || !liveLogList) return;

    const $container = this.$wrapper.querySelector("#live-log-list-container");

    $container.innerHTML = "";

    liveLogList.forEach((liveLog) => {
      new LiveLogContainer($container, { liveLog });
    });
  }
}
