// =========================================
// PlotFlow FAQ Accordion
// =========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        // Закрыть все FAQ

        faqItems.forEach(faq => {

            faq.classList.remove("active");

        });

        // Если этот не был открыт — открыть его

        if (!isActive) {

            item.classList.add("active");

        }

    });

});
// =========================================
// Scroll Reveal Animation
// =========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    if(section.classList.contains("hero")){

        return;

    }

    section.classList.add("hidden");

    observer.observe(section);

});
