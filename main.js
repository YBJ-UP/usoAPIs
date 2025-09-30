import * as el from "./scripts/html_elements.js"

import { loadPagePhotos } from "./components/vistaFotos.js";
import { loadPageGifs } from "./components/vistaGifs.js";

loadPagePhotos()

el.navPhotoButton.addEventListener('click', loadPagePhotos)

el.navGIFButton.addEventListener('click', loadPageGifs)