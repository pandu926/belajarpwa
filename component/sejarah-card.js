class SejarahCard extends HTMLElement {
    connectedCallback ()
    {
        this.render();
    }

    render()
    {
        this.innerHTML = `
        <div id="content" class="row container ">
        <div class="col s6 m4 ">
          <button id="card" class="waves-effect waves-light btn modal-trigger" href="#modal1"> 
                <p style="font-size: 40px;">Asal Mula</p>    
          </button>
        </div>

        <div class="col s6 m4 ">
          <button id="card"class="waves-effect waves-light btn modal-trigger" href="#modal2"> 
                <p style="font-size: 40px;">Asal Mula</p>    
          </button>
        </div>

        <div class="col s12 m4 ">
          <button id="card" class="waves-effect waves-light btn modal-trigger" href="#modal3"> 
                <p style="font-size: 40px;">Asal Mula</p>    
          </button>
        </div>
      </div>
      
        `
    }
}

customElements.define("sejarah-card", SejarahCard);