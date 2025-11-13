import Component from "../core/Component.js";

export default class NavBar extends Component {
  template() {
    return `
      <nav class="main-nav">
        <a href="/" data-link>🏠 Home</a> 
        <a href="/settings" data-link>⚙️ Settings</a>
        <a href="/streamer/paka" data-link>😎stre</a>
      </nav>
      <hr>
    `;
  }
}
