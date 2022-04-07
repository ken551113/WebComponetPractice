const template = document.createElement("template");
template.innerHTML = `
<style>
  .user-card{
    display:flex;
    padding: 20px 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .content{
    flex:1;
    padding: 0px 10px;
  }

  .info.disable{
    display: none;
  }

  .name {
    color: blue;
  }
  .avatar{
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 25px;
  }

</style>
<div class="user-card">
  <img class="avatar" src="" alt="">
  <div class="content">
    <div class="name"></div>
    <div class="info">
    <slot name="phone"></slot>
    <slot name="email"></slot>
  </div>
    <button id="toggle-info">hide info</button>
  </div>
</div>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
  }

  toggleInfo() {
    this.shadowRoot.querySelector(".info").classList.toggle("disable");
  }

  connectedCallback() {
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
