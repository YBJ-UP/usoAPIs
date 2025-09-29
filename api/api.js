async function loadCATAAS() {
    try {
        const response = await fetch("https://cataas.com/cat")
        if (!response.ok){
            throw new Error(`Error al cargar la API: ${response.status}`)
        }
    } catch (error) {
        console.error(error)
    }
}

loadCATAAS()