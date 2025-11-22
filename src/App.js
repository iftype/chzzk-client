import Component from "./core/Component.js";
import NavBar from "./components/NavBar.js";
import Router from "./routers/Router.js";
import HomeView from "./views/HomeView.js";
import StreamerView from "./views/StreamerView.js";
import NotFoundView from "./views/NotFoundView.js";
import Store from "./store/GlobalStore.js";

export default class App extends Component {
  template() {
    return `
      <header>
        <nav data-component="nav"></nav>
      </header>
      <main data-component="view"></main>
    `;
  }

  async componentDidMount() {
    const $nav = this.$target.querySelector('[data-component="nav"]');
    const $view = this.$target.querySelector('[data-component="view"]');

    try {
      await Store.loadChannelList();
      console.log("전역 채널 데이터 로딩 완료");
    } catch (err) {
      console.error("채널 데이터 로딩 실패", err);
    }
    new NavBar($nav);

    const routes = [
      { path: /^\/$/, view: HomeView },
      { path: /^\/streamer\/(.+)$/, view: StreamerView },
      { path: /.*/, view: NotFoundView },
    ];
    const router = new Router($view, routes);

    this.$target.addEventListener("click", (e) => {
      const link = e.target.closest("[data-link]");
      if (!link) return;

      e.preventDefault();
      const href = link.getAttribute("href");
      router.navigate(href);
    });
  }
}
