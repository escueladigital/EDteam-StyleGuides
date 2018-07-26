export const mainBanner = (idBanner, classTopRefer) => {
    let banner            = document.getElementById(idBanner),
        topRefer          = document.querySelector(classTopRefer),
        bannerPlaceholder = document.createElement('div')

    if (banner && topRefer) {

        // Función que recibe como parámetro el banner y topRefer
        // Dicha función de encargará de realizar los cálculos y aplicar estilos para el banner
        const bannerActive = (b, tr) => {
            // Posicionar banner abajo del nav
            b.style.top = `${tr.getBoundingClientRect().bottom}px`

            // Aplicamos estilos al bannerPlaceholder
            bannerPlaceholder.classList.add('banner-placeholder')
            bannerPlaceholder.setAttribute('style', `height: ${b.getBoundingClientRect().height}px;`)
            b.after(bannerPlaceholder)

            // Ubicamos el pseudoelemento con variables CSS calculando la altura del banner
            let t = b.getBoundingClientRect().height - parseInt(getComputedStyle(bannerPlaceholder).getPropertyValue('--height').replace('px', ''));
            bannerPlaceholder.style.setProperty('--top', `${t}px`)
        }

        // Activamos la función
        bannerActive(banner, topRefer)
        addEventListener('resize', () => {
            bannerActive(banner, topRefer)
        })

    }
}

mainBanner('main-banner', '.main-header')