import Component from "../core/Component.js";
import { formatDateHM } from "../utils/formatDate.js";

export default class LiveLogCard extends Component {
  initState() {
    return {
      category: this.props.category || null,
      videoNo: this.props.video.videoNo || null,
      channelId: this.props.channel.channelId || null,

      closeDate: this.props.closeDate || null,
      openDate: this.props.openDate || null,
      logTime: formatDateHM(this.props.logTime) || null,
      title: this.props.title || null,
    };
  }

  template() {
    const { categoryImageUrl, categoryValue } = this.state.category;
    const { title, logTime } = this.state;

    console.log(this.props);

    return `
      <img src="${categoryImageUrl}" class="LiveLogCard-image"/>
      <div class="LiveLogCard-info">
        <div class="LiveLogCard-title">${title}</div>
        <div class="LiveLogCard-name">${categoryValue}</div>
        <div class="LiveLogCard-time">${logTime}</div>
      </div>
    `;
  }

  componentDidMount() {
    const { closeDate, channelId, videoNo } = this.state;
    const url = closeDate
      ? `https://chzzk.naver.com/video/${videoNo}`
      : `https://chzzk.naver.com/live/${channelId}`;

    this.$wrapper.addEventListener("click", () => {
      window.location = url;
    });
  }
}
