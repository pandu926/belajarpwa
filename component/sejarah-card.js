class SejarahCard extends HTMLElement {
    connectedCallback ()
    {
        this.render();
    }

    render()
    {
        this.innerHTML = `
        <div id="content" class="row container ">
        <div class="col s12 m4 ">
          <button id="card" class="waves-effect waves-light btn modal-trigger" href="#modal1"> 
          <img src="img/sejarah.jpg">
                <p>Asal Mula</p>    
          </button>
        </div>

        <div class="col s12 m4 ">
          <button id="card"class="waves-effect waves-light btn modal-trigger" href="#modal2"> 
          <img src="img/sejarah.jpg">
                <p>Asal Mula</p>    
          </button>
        </div>

        <div class="col s12 m4">
          <button id="card" class="waves-effect waves-light btn modal-trigger" href="#modal3"> 
          <img src="img/sejarah.jpg">
                <p>Asal Mula</p>    
          </button>
        </div>
      </div>
      
        `
    }
}

customElements.define("sejarah-card", SejarahCard);