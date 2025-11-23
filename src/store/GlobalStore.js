import { fetchStreamer } from "../api/api.js";

class GlobalStore {
  constructor() {
    this.state = {
      channelList: new Map(),
      channelListLoaded: false,
    };
  }

  async loadChannelList() {
    if (this.state.channelListLoaded) return this.state.channelList;

    const channelList = await fetchStreamer();

    const map = new Map();
    channelList.forEach((channel) => {
      map.set(channel.channelId, channel);
    });

    this.state.channelList = map;
    this.state.channelListLoaded = true;

    return map;
  }

  getChannelList() {
    return this.state.channelList;
  }

  getChannel(key) {
    return this.state.channelList.get(key) || null;
  }
}

export default new GlobalStore();
