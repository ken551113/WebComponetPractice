class UserCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const element = document.createElement("h3");
    element.innerHTML = `<h3>${this.getAttribute("name")}</h3>`;
    this.innerHTML = element.outerHTML;
  }
}

customElements.define("user-card", UserCard);
