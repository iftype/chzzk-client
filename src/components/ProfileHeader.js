import Component from "../core/Component.js";

export default class ProfileHeader extends Component {
  initState() {
    return {
      channel: this.props.channel || null,
    };
  }

  template() {
    const { channelName, channelImageUrl } = this.props;

    return `
      <img src="${channelImageUrl}" class="ProfileHeader-image" />
      <h1> ${channelName} 방송 히스토리</h1>
    `;
  }
}
