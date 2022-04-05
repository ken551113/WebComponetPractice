class UserCard extends HTMLElement {
  constructor() {
    super();
  }

  toggleInfo() {
    this.shadowRoot.querySelector(".info").classList.toggle("disable");
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
    this.shadowRoot
      .querySelector("#toggle-info")
      .addEventListener("click", () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#toggle-info")
      .removeEventListener("click", this.toggleInfo());
  }
}

customElements.define("user-card", UserCard);
