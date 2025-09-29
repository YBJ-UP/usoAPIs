import * as el from "../scripts/html_elements.js"

const rootFotos = document.querySelector("main-root")

function setPhotos(){
    el.navPhotoButton.classList.add("selected")
    el.navGIFButton.classList.remove("selected")
    el.navStatusButton.classList.remove("selected")
    rootFotos.innerHTML= `
        <main>

            <section>
                <h1>¡Gatitos!</h1>
                <p>En esta vista, puedes ver imagenes aleatorias de gatos, solo tienes que darle al botón de ahí abajo y van a salir</p>
            </section>

            <section class="img-container">
                <div id="frame">
                    <img src="./media/placeholder.jfif" alt="" srcset="">
                </div>

            </section>

            <section class="buttons">
                <div class="cat">
                    <button type="button">Ver fotos de gatos</button>
                </div>

                <p>ó</p>

                <div class="cat-with-text">
                    <p>¡Haz que el gato diga algo!</p>
                    <input type="text" name="" id="">
                    <button type="button">Generar imagen con texto</button>
                </div>
            </section>

        </main>
    `
}

export { setPhotos }