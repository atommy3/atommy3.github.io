// global variables

// main
$(document).ready(function () {
    // selectors
    tabButtons = $('.tab-button');
    tabContents = $('.tab-content');
});

// event listeners
$("html").on("click", ".tab-button", function(event){
    const tabName = $(this).text().replace(/ /g, '-');
    toggleTab(tabName);
});

// helper functions
function toggleTab(tabName) {
    const selectedTabButton = $(`#${tabName}-button`);
    const selectedTabContent = $(`#${tabName}-content`);

    console.log(selectedTabButton);
    console.log(selectedTabContent)

    tabButtons.removeClass("active");
    tabContents.removeClass("active");

    selectedTabButton.addClass("active");
    selectedTabContent.addClass("active");
}