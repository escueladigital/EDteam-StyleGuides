/**
 * Funcionalidad aside de cursos
 */

//  Conseguir elementos
// La variable gutter es el espaciado que habrá entre el footer y el aside cuando lleguen a colisionar
 const titleCourse = document.querySelector(".course-data__title"),
       asideCard = document.querySelector(".card.card--sidebar"),
       mainFooter = document.querySelector(".main-footer"),
       mainHeader = document.querySelector(".main-header"),
       gutter = 32;

export const stickyAside = () => {
    // Validando que los elementos se hayan conseguido correctamente y que la pantalla sea mayor que 1024px
    if (titleCourse && asideCard && mainFooter && mainHeader && window.innerWidth > 1024) {

        // Obtener el ClientRect de los elementos
        let asideRect = asideCard.getBoundingClientRect(),
            titleRect = titleCourse.getBoundingClientRect(),
            footerRect = mainFooter.getBoundingClientRect(),
            headerRect = mainHeader.getBoundingClientRect();

        // Estilos para posicionar aside
        asideCard.style.position = "fixed";
        asideCard.style.right = "1rem";
        
        // Calcular la altura del título principal para poder alinear el aside con éste mismo
        asideCard.style.top = `${titleRect.top}px`;

        // Reasignando la anchura para evitar desmaquetamiento de aside
        asideCard.style.width = `${asideRect.width}px`;

        // Evento scroll. Se usará para que el aside no se sobreponga con el footer
        window.addEventListener("scroll", () => {
            // Validando posición del aside respecto al footer
            if ((asideRect.bottom + gutter) >= footerRect.top) {
                asideCard.style.position = "absolute";
                asideCard.style.top = `${document.documentElement.scrollHeight - footerRect.height - asideRect.height - headerRect.height - gutter}px`;
            } else if (document.documentElement.scrollHeight >= titleRect.top){
                // asideCard.style.position = "fixed";
                // asideCard.style.top = `${titleRect.top}px`;
            }

            /* DELETE THIS */
            // let c = console.log;
            // c(`scroll: ${window.pageYOffset}    aside top: ${asideRect.top}    aside bottom: ${asideRect.bottom}   footer top: ${footerRect.top}`);
        });
    }
};


stickyAside();