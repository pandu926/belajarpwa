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
                <p>Alam</p>    
          </button>
        </div>
        
        <div class="col">
          <button id="card"class="waves-effect waves-light btn modal-trigger" href="#modal2"> 
                <p>Buatan</p>    
          </button>
        </div>
      </div>
      `
  }
}

customElements.define("pariwisata-card", PariwisataCard);

