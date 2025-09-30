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
                <p>En esta vista, puedes ver gifs aleatorias de gatos, solo tienes que darle al botón de ahí abajo y van a salir.</p>
                <p>Puede que estos tarden un poco en cargar, pero eso ya no es culpa mía</p>
            </section>

            <section class="img-container">
                <div id="frame">
                    <img src="./media/placeholder.jfif" alt="" srcset="" id="img">
                </div>

            </section>

            <section class="buttons">
                <div class="cat">
                    <button type="button" id="buttonGifs">Ver gifs de gatos</button>
                </div>
            </section>

        </main>
    `
}

async function getGIF() {
    img.src = "./media/102.jpg"
    try {
        const response = await fetch("https://cataas.com/cat/gif")
        if(!response.ok){
            throw new Error(`Error al contactar la API: ${response.status}`)
        }else{
            img.src = response.url
        }
    } catch (error) {
        console.error(error)
    }
}

async function loadEvents() {
    const img = document.getElementById("img")
    const button = document.getElementById("buttonGifs")

    button.addEventListener('click', getGIF)
}

function loadPageGifs(){
    setGifs()
    loadEvents()
}

export { loadPageGifs }