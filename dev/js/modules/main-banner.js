export const mainBanner = (classBanner, classTopRefer) => {
    let banner            = document.querySelector(classBanner),
        topRefer          = document.querySelector(classTopRefer),
        bannerPlaceholder = document.createElement('div')
        
        if (banner && topRefer) {
        const bannerActive = (b, tr) => {
            let placeholderHeight = 20,
                bannerHeight = banner.getBoundingClientRect().height,
                topBanner = tr.getBoundingClientRect().bottom,
                styles = `
                    width: 100%;
                    height: ${placeholderHeight}px;
                    margin-top: ${bannerHeight - placeholderHeight}px;
                    background: var(--body-bg);
                    clip-path : polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
                    z-index: var(--z-normal);
                `
            b.style.top = `${topBanner}px`
            bannerPlaceholder.setAttribute('style', styles)
            banner.after(bannerPlaceholder)
        }

        bannerActive(banner, topRefer)
        addEventListener('resize', () => {
            bannerActive(banner, topRefer)
        })

    }
}

mainBanner('.main-banner', '.main-header')