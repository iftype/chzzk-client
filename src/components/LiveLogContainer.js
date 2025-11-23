import Component from "../core/Component.js";
import { formatDateYM } from "../utils/formatDate.js";
import LiveLogCard from "./LiveLogCard.js";

export default class LiveLogContainer extends Component {
  initState() {
    return {
      liveLog: this.props.liveLog || null,
      logTime: formatDateYM(this.props.liveLog[0].logTime) || null,
      openDate: this.props.liveLog[0].openDate || null,
      closeDate: formatDateYM(this.props.liveLog[0].closeDate) || null,
      videoNo: this.props.liveLog[0].video.videoNo || null,
    };
  }

  template() {
    const { logTime, closeDate, videoNo } = this.state;
    return `
    <div class="live-log-card-date">
      ${this.checkToday() ? "TODAY" : logTime}
      ${!closeDate ? "<span class='live-text'>LIVE</span>" : ""}
      ${videoNo ? "<span class='live-text-video'>VOD</span>" : ""}
    </div>
    <div id="live-log-card"></div>
    `;
  }

  componentDidMount() {
    this.createLiveLogCard();
  }

  componentDidUpdate() {
    this.createLiveLogCard();
  }

  createLiveLogCard() {
    const liveLog = this.state.liveLog;

    const $container = this.$wrapper.querySelector("#live-log-card");
    $container.innerHTML = "";
    liveLog.forEach((session) => {
      new LiveLogCard($container, session);
    });
  }

  checkToday() {
    const { openDate } = this.state;
    const now = Date.now();
    return openDate === formatDateYM(now);
  }
}
