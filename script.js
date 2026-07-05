// =========================================
// FAQ Accordion
// =========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        if(item.classList.contains("active")){

            item.classList.remove("active");
            return;

        }

        faqItems.forEach(faq => {

            faq.classList.remove("active");

        });

        item.classList.add("active");

    });

});
