class Word extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["content"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const content = this.attributes.content.value || "";
    this.innerHTML = `<p>${content}</p>`;
  }
}

customElements.define("my-word", Word);
