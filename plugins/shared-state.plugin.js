export default class extends HTMLElement {
  #sharedStates;
  get sharedStates() {
    return this.#sharedStates;
  }
  set sharedStates(value) {
    this.#sharedStates = value;
    this.renderUI();
  }

  updateSharedStatesDelegate;

  obtainHeaderCallback = () => `Shared State`;

  hostFirstLoadedCallback() {
    this.renderUI();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  renderUI() {
    this.shadowRoot.innerHTML = /* html */ `
        <span>
            The shared value is: 
            <b>${this.sharedStates["demo.value"]}</b>
        </span>
        <hr/>
        <input type="text" placeholder="enter anything here..." />
        <br/>
        <button>Upate shared value</button>
    `;
    this.shadowRoot.querySelector("button")?.addEventListener("click", () => {
      const value = this.shadowRoot.querySelector("input")?.value;
      this.updateSharedStatesDelegate?.({
        ...this.sharedStates,
        "demo.value": value,
      });
    });
  }
}
