import * as el from "../scripts/html_elements.js"

const rootGifs = document.querySelector("main-root")

function setGifs(){
    el.navPhotoButton.classList.remove("selected")
    el.navGIFButton.classList.add("selected")
    el.navStatusButton.classList.remove("selected")
    rootGifs.innerHTML= `
        <main>

            <section>
                <h1>¡Gatitos!</h1>
                <p>En esta vista, puedes ver gifs aleatorias de gatos, solo tienes que darle al botón de ahí abajo y van a salir</p>
            </section>

            <section class="img-container">
                <div id="frame">
                    <img src="./media/placeholder.jfif" alt="" srcset="">
                </div>

            </section>

            <section class="buttons">
                <div class="cat">
                    <button type="button">Ver gifs de gatos</button>
                </div>
            </section>

        </main>
    `
}

export { setGifs }