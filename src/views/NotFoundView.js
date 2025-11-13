import Component from "../core/Component.js";

export default class NotFoundView extends Component {
  template() {
    return `
            <p>존재하지 않는 페이지입니다</p>
            <button onclick="router.navigate('/')">Home</button>
        `;
  }
}
