const inputs = document.querySelectorAll(".code");
inputs[0].focus();

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        if (e.inputType === "insertText" && input.value) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

