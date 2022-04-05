class UserCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.getElementById("user-card");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerHTML = `${this.getAttribute(
      "name"
    )}`;
  }
}

customElements.define("user-card", UserCard);
