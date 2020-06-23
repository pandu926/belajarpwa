class PariwisataCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render()
    {
        this.innerHTML = `
        <div id="content" class="row container ">
          <div class="col">
            <button id="card" class="waves-effect waves-light btn modal-trigger" href="#modal1"> 
                  <p style="font-size: 40px;">Asal Mula</p>    
            </button>
          </div>
          
          <div class="col">
            <button id="card"class="waves-effect waves-light btn modal-trigger" href="#modal2"> 
                  <p style="font-size: 40px;">Asal Mula</p>    
            </button>
          </div>
        </div>
        `
    }
}

customElements.define("pariwisata-card", PariwisataCard);