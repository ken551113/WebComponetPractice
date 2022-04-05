class UserCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `${this.getAttribute("name")}`;
  }
}

customElements.define("user-card", UserCard);
