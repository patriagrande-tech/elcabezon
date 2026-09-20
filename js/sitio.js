/* Interacciones del sitio. JavaScript comun, sin bibliotecas. */

document.addEventListener('DOMContentLoaded', function () {

    /* --- Menu en celulares ------------------------------------------------ */
    var boton = document.querySelector('.hamburguesa');
    var nav = document.querySelector('.nav');

    if (boton && nav) {
        boton.addEventListener('click', function () {
            var abierto = nav.classList.toggle('abierto');
            boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        });

        // Al elegir una seccion, se cierra solo
        nav.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                nav.classList.remove('abierto');
                boton.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* --- La cabecera se vuelve solida al bajar ---------------------------- */
    var cabecera = document.querySelector('.cabecera');
    if (cabecera) {
        var alScrollear = function () {
            cabecera.classList.toggle('solida', window.scrollY > 60);
        };
        window.addEventListener('scroll', alScrollear, { passive: true });
        alScrollear();
    }

    /* --- Aparicion progresiva de los bloques ------------------------------ */
    var bloques = document.querySelectorAll('.aparece');
    if (bloques.length && 'IntersectionObserver' in window) {
        var observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visible');
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.12 });
        bloques.forEach(function (b) { observador.observe(b); });
    } else {
        // Sin soporte, se muestra todo directamente
        bloques.forEach(function (b) { b.classList.add('visible'); });
    }
});
