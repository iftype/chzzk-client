import Component from "./core/Component.js";
import NavBar from "./components/NavBar.js";
import Router from "./routers/Router.js";
import HomeView from "./views/HomeView.js";
import SettingsView from "./views/SettingsView.js";
import StreamerView from "./views/StreamerView.js";
import NotFoundView from "./views/NotFoundView.js";

export default class App extends Component {
  template() {
    return `
      <header>
        <nav data-component="nav"></nav>
      </header>
      <main data-component="view"></main>
    `;
  }

  componentDidMount() {
    const $nav = this.$target.querySelector('[data-component="nav"]');
    new NavBar($nav);

    const $view = this.$target.querySelector('[data-component="view"]');
    const routes = [
      { path: /^\/$/, view: HomeView },
      { path: /^\/settings\/?$/, view: SettingsView },
      { path: /^\/streamer\/(.+)$/, view: StreamerView },
      { path: /\.*/, view: NotFoundView },
    ];

    const router = new Router($view, routes);

    this.$target.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        router.navigate(href);
      }
    });
  }
}
