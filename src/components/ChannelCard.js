import Component from "../core/Component.js";

export default class ChannelCard extends Component {
  initState() {
    return {
      channelImageUrl: this.props.channelImageUrl || null,
      channelName: this.props.channelName || null,
    };
  }

  template() {
    const { channelName, channelImageUrl } = this.state;
    return `
      <img src="${channelImageUrl}" class="channel-image" alt="${channelName}" />
      <h3 class="channel-name">${channelName}</h3>
    `;
  }

  componentDidMount() {
    this.$wrapper.addEventListener("click", () => {
      this.$wrapper.dispatchEvent(
        new CustomEvent("navigateCard", {
          detail: this.props.channelId,
          bubbles: true,
        })
      );
    });
  }
}
