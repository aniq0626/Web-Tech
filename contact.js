// Find the button and the panel using their unique HTML IDs.
const toggleButton = document.getElementById("brief-toggle");
const helpPanel = document.getElementById("brief-help");

// Run this function each time the visitor clicks the button.
toggleButton.addEventListener("click", function () {
    // Reverse the panel's hidden state: hidden becomes visible and vice versa.
    helpPanel.hidden = !helpPanel.hidden;
    // Tell assistive technology whether the panel is expanded.
    toggleButton.setAttribute("aria-expanded", String(!helpPanel.hidden));
    // Keep the visible label consistent with the panel state.
    toggleButton.textContent = helpPanel.hidden
        ? "Show briefing tips"
        : "Hide briefing tips";
});
