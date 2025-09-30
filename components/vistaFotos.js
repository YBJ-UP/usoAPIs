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
                    <img src="./media/placeholder.jfif" alt="" srcset="" id="img">
                </div>

            </section>

            <section class="buttons">
                <div class="cat">
                    <button type="button" id="buttonPhotos">Ver fotos de gatos</button>
                </div>

                <p>ó</p>

                <div class="cat-with-text">
                    <p>¡Haz que el gato diga algo!</p>
                    <input type="text" name="" id="text">
                    <button type="button" id="buttonText">Generar imagen con texto</button>
                </div>
            </section>

        </main>
    `
}

async function getIMG(input) {
    img.src = "./media/102.jpg"
    let URL
    if (!input){
        URL = "https://cataas.com/cat"
    }
    else{
        URL = `https://cataas.com/cat/says/${input}`
    }
    try {
        const response = await fetch(URL)
        if (!response.ok){
            throw new Error(`Error al cargar la API: ${response.status}`)
        }else{
            img.src = response.url
        }
    } catch (error) {
        console.error(error)
    }
}

async function loadEvents(){
    console.log("sdcas")
    const img = document.getElementById("img")

    const photoButton = document.getElementById("buttonPhotos")

    photoButton.addEventListener('click', (event)=>{
        getIMG("")
    })

    const txtInput = document.getElementById("text")
    const txtButton = document.getElementById("buttonText")

    txtButton.addEventListener('click', (event)=>{
        getIMG(txtInput.value)
    })
}

async function loadPagePhotos(){
    setPhotos()
    loadEvents()
}
export { loadPagePhotos }