// global variables

// main
$(document).ready(function () {
    // selectors

    // ids
    banner = $('#banner');
    tabButtonsContainer = $('#tab-buttons-container');
    tabContentContainer = $('#tab-content-container');

    // classes
    tabButtons = $('.tab-button');
    tabContents = $('.tab-content');

    // function calls
    updateContentPosition();
});

// event listeners
$("html").on("click", ".tab-button", function(event){
    const tabName = $(this).text().replace(/ /g, '-');
    toggleTab(tabName);
});

$(window).on("resize", updateContentPosition);

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

function updateContentPosition() {
    const targetHeight = banner.outerHeight(); // Get the height including padding
    tabContentContainer.css("top", targetHeight + "px");
}