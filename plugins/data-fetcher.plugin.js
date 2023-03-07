export default class extends HTMLElement {
  checkIfDataProviderRegisteredDelegate;
  queryDataDelegate;

  data;

  obtainHeaderCallback = () => `Data Fetcher`;

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
            Data provider registered: 
            <b>
                ${
                  this.checkIfDataProviderRegisteredDelegate("demo")
                    ? "true"
                    : "false"
                }
            </b>
        </span>
        <hr/>
        <button onclick="this?.getRootNode()?.host?.queryData()">Query Data</button>
        <hr/>
        <span>${this.data ?? ""}</span>
    `;
  }

  async queryData() {
    this.data = await this.queryDataDelegate("demo:mock/data/source", {
      note: "This qeury object is fake.",
    });
    this.renderUI();
  }
}
