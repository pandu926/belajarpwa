class   KesenianCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render()
    {
        this.innerHTML = `
        <div id="content" class="row container ">
          <div class="col">
            <button id="card" class="waves-effect waves-light btn modal-trigger" href="#modal1"> 
            <img src="img/lengger.png">
                  <p>Lengger</p>    
            </button>
          </div>
          
          <div class="col">
            <button id="card"class="waves-effect waves-light btn modal-trigger" href="#modal2">
             <img src="https://www.inibaru.id/nuploads/1/shutterstock-703809949_1506923185.jpg"> 
                  <p>Embleg</p>    
            </button>
          </div>
        </div>
        `
    }
}

customElements.define("kesenian-card",  KesenianCard);

