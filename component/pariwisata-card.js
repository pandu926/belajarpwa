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
          <img src="img/sikunir.jpg">
                <p>Alam</p>    
          </button>
        </div>
        
        <div class="col">
          <button id="card"class="waves-effect waves-light btn modal-trigger" href="#modal2"> 
          <img src="img/sikunir.jpg">
                <p>Buatan</p>    
          </button>
        </div>
      </div>
      `
  }
}

customElements.define("pariwisata-card", PariwisataCard);

