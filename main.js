import * as el from "./scripts/html_elements.js"

import { loadPagePhotos } from "./components/vistaFotos.js";
import { setGifs } from "./components/vistaGifs.js";

loadPage()

el.navPhotoButton.addEventListener('click', loadPagePhotos)

el.navGIFButton.addEventListener('click', setGifs)