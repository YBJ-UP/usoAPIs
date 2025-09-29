const rootGifs = document.querySelector("main-root")

function setGifs(){
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