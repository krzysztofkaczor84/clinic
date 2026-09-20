/* ------------------------------------------------------------------------- *
 *  clinic — informational site
 *  Mobile navigation and the screenshot lightbox. No dependencies.
 * ------------------------------------------------------------------------- */

(function () {
    "use strict";

    /* ----------------------------------------------------- mobile menu -- */

    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var open = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        nav.addEventListener("click", function (event) {
            if (event.target.tagName === "A") {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    /* -------------------------------------------------------- lightbox -- */

    var box = document.getElementById("lightbox");
    if (!box) {
        return;
    }

    var boxImage = box.querySelector("img");
    var boxCaption = box.querySelector("figcaption");
    var closeButton = box.querySelector(".lightbox-close");
    var lastFocused = null;

    function open(source, caption) {
        lastFocused = document.activeElement;
        boxImage.src = source;
        boxImage.alt = caption || "";
        boxCaption.textContent = caption || "";
        box.classList.add("is-open");
        document.body.style.overflow = "hidden";
        closeButton.focus();
    }

    function close() {
        box.classList.remove("is-open");
        document.body.style.overflow = "";
        boxImage.removeAttribute("src");
        if (lastFocused) {
            lastFocused.focus();
        }
    }

    document.addEventListener("click", function (event) {
        var image = event.target.closest(".shot-frame img");
        if (image) {
            var figure = image.closest("figure");
            var caption = figure && figure.querySelector("figcaption");
            open(image.getAttribute("data-full") || image.src,
                 caption ? caption.textContent.trim() : image.alt);
        }
    });

    box.addEventListener("click", function (event) {
        if (event.target === box || event.target.closest(".lightbox-close")) {
            close();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && box.classList.contains("is-open")) {
            close();
        }
    });
}());
