import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        `
        const tryF = this.ownerDocument.createElement("my-form");
        this.shadowRoot?.appendChild(tryF);
    }
}

customElements.define('app-container', AppContainer)