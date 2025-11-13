export default class Router {
  $view;
  routes;

  constructor($view, routes) {
    this.$view = $view;
    this.routes = [...routes];

    window.addEventListener("hashchange", () => this.renderView());
    this.renderView();
  }

  navigate(path) {
    const fullPath = path;

    const hashPath = path.startsWith("#") ? path : "#" + path;
    window.location.hash = hashPath;
  }

  renderView() {
    let currentPath = window.location.hash.slice(1) || "/";
    console.log(currentPath);

    let match = this.routes.find((route) => {
      if (route.path instanceof RegExp) {
        return currentPath.match(route.path);
      }
      return route.path === currentPath;
    });

    const params = {};
    const paramMatch = currentPath.match(/^\/streamer\/(.+)$/);
    if (paramMatch) {
      params.id = paramMatch[1];
    }

    this.$view.innerHTML = "";
    new match.view(this.$view, params);
  }
}
