class UserCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.getElementById("user-card");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector(".name").innerHTML = `${this.getAttribute(
      "name"
    )}`;
    this.shadowRoot.querySelector(".avatar").src = `${
      this.getAttribute("avatar") ??
      "http://cdn.onlinewebfonts.com/svg/img_264570.png"
    }`;
  }
}

customElements.define("user-card", UserCard);
