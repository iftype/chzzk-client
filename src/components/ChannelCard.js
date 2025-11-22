import Component from "../core/Component.js";

export default class ChannelCard extends Component {
  initState() {
    return {
      channel: this.props.channel || null,
    };
  }

  template() {
    const { channelId, channelName, channelImageUrl } = this.props;
    console.log(channelId);
    return `
      <img src="${channelImageUrl}" class="channel-image" alt="${channelName}" />
      <h3 class="channel-name">${channelName}</h3>
    `;
  }

  componentDidMount() {
    this.$wrapper.addEventListener("click", (e) => {
      console.log("object");
      const link = e.target.closest("[data-link]");
      if (!link) return;

      e.preventDefault();
      const { channelId } = this.state;
      if (true) {
        const routePath = `#/streamer/${channelId}`;
        router.navigate(routePath);
      }
    });
  }
}
