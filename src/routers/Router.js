export default class Router {
  static CHANNELS = {
    dopa: "c847a58a1599988f6154446c75366523",
    paka: "42597020c1a79fb151bd9b9beaa9779b",
    ralo: "3497a9a7221cc3ee5d3f95991d9f95e9",
    monstrat: "c7ded8ea6b0605d3c78e18650d2df83b",
    goob: "c100f81959d1c17044be0541eed56f5b",
    steelo: "e9c11510c1c6097a20b92ebcb289b26a",
  };

  $view;
  routes;

  constructor($view, routes) {
    this.$view = $view;
    this.routes = [...routes];

    window.addEventListener("hashchange", () => this.renderView());
    this.renderView();
  }

  navigate(path) {
    const hashPath = path.startsWith("#") ? path : "#" + path;
    window.location.hash = hashPath;
  }

  renderView() {
    let currentPath = window.location.hash.slice(1) || "/";

    const [pathPart, queryString] = currentPath.split("?");
    const params = new URLSearchParams(queryString);

    const match = this.routes.find((route) => {
      if (route.path instanceof RegExp) {
        return pathPart.match(route.path);
      }
      return route.path === pathPart;
    });

    const viewParams = {};
    const paramMatch = pathPart.match(/^\/streamer\/(.+)$/);
    if (paramMatch) {
      const raw = paramMatch[1];
      viewParams.id = Router.CHANNELS[raw] || raw;
    }

    if (params.has("date")) {
      viewParams.date = params.get("date");
    }

    this.$view.innerHTML = "";
    new match.view(this.$view, viewParams);
  }
}
