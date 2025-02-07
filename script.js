const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener("input", (e) => {
        if (e.target.value.length === 1) {
            if (index < codes.length - 1) {
                codes[index + 1].focus();
            }
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && e.target.value === "") {
            if (index > 0) {
                codes[index - 1].focus();
            }
        }
    });
});