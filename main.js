import * as el from "./scripts/html_elements.js"

import { setPhotos } from "./components/vistaFotos.js";
import { setGifs } from "./components/vistaGifs.js";

setPhotos()

el.navPhotoButton.addEventListener('click', setPhotos)

el.navGIFButton.addEventListener('click', setGifs)