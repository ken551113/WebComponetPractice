class UserCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = "ken lee";
  }
}

customElements.define("user-card", UserCard);
