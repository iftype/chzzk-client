import Component from "../core/Component.js";

export default class NavBar extends Component {
  template() {
    return `
      <nav class="main-nav">
        <a href="#/" data-link>🏠</a> 
        <a href="#/streamer/paka" data-link class="">파카</a>
        <a href="#/streamer/ralo" data-link>랄로</a>
        <a href="#/streamer/goob" data-link>박종우</a>
        <a href="#/streamer/dopa" data-link>도파</a>
        <a href="#/streamer/monstrat" data-link>괴물쥐</a>
      </nav>
    `;
  }
}
