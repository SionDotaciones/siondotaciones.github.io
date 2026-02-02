window.addEventListener("scroll", function() {
    var whatsapp = document.querySelector(".icono_whatsapp");
    var footer = document.querySelector("footer");
    var umbralDesaparicion = document.documentElement.scrollHeight - window.innerHeight - footer.offsetHeight;
    var scrollPos = window.scrollY;
    whatsapp.classList.toggle("aparecer_icono_whatsapp", scrollPos > 20);
    whatsapp.classList.toggle("desaparecer_icono_whatsapp", scrollPos > umbralDesaparicion - 50);
});