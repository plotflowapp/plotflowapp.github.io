/* ==========================================================
   Toritex checkout (Paddle)

   ONE place to configure payments for the whole site.
   Every "Buy" button on every page carries data-plan="individual",
   data-plan="studio5" or data-plan="studio15" and is wired up here.

   TO GO LIVE, change only the CONFIG block below:
     1. environment: "sandbox" -> "production"
     2. token:       the live client-side token from Paddle (starts with "live_")
     3. prices:      the live price IDs (they differ from the sandbox ones)
   The client-side token is meant to be public. Never put an API key
   or any secret in this file.
==========================================================*/

(function () {
    "use strict";

    var CONFIG = {
        environment: "sandbox",
        token: "test_ceb9d50e015fbc59001cefbaf47",
        prices: {
            individual: "pri_01m7z3enarnj1k2qtpbtqcrt5y",
            studio5: "pri_01m7z4en7bfbjda3c8ep6f7c43",
            studio15: "pri_01m7z4g4f7axqjhk97qrfpkhs3"
        }
    };

    function init() {
        // If Paddle did not load (blocked or offline), buttons keep their
        // normal href (a mail link), so a visitor can still reach us.
        if (!window.Paddle) { return; }

        if (CONFIG.environment === "sandbox") {
            window.Paddle.Environment.set("sandbox");
        }
        window.Paddle.Initialize({ token: CONFIG.token });

        var buttons = document.querySelectorAll("[data-plan]");
        Array.prototype.forEach.call(buttons, function (button) {
            button.addEventListener("click", function (event) {
                var priceId = CONFIG.prices[button.getAttribute("data-plan")];
                if (!priceId) { return; }

                event.preventDefault();
                window.Paddle.Checkout.open({
                    items: [{ priceId: priceId, quantity: 1 }]
                });
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
