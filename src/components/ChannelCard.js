import Component from "../core/Component.js";

export default class ChannelCard extends Component {
  initState() {
    return {
      channel: this.props.channel || null,
    };
  }

  template() {
    const { channelId, channelName, channelImageUrl } = this.props;
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
