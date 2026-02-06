/*------ Global Variables ------*/

/*------ Selectors ------*/
// ids
banner = $('#banner');
tabButtonsContainer = $('#tab-buttons-container');
bannerLine = $('#banner-line');
tabContentContainer = $('#tab-content-container');

// classes
tabButtons = $('.tab-button');
tabContents = $('.tab-content');

/*------ Event listeners ------*/
tabButtons.click(function(){
    const tabName = $(this).text().replace(/ /g, '-');
    toggleTab(tabName);
});

$(window).on("resize", updateContentPosition);

/*------ Helper functions ------*/
function toggleTab(tabName) {
    const selectedTabButton = $(`#${tabName}-button`);
    const selectedTabContent = $(`#${tabName}-content`);

    tabButtons.removeClass("active");
    tabContents.removeClass("active");

    selectedTabButton.addClass("active");
    selectedTabContent.addClass("active");

    const borderColor = selectedTabButton.css('border-top-color');
    bannerLine.css("background-color", borderColor);
}

function updateContentPosition() {
    const targetHeight = banner.outerHeight(); // Get the height including padding
    tabContentContainer.css("top", targetHeight + "px");
}

/*------ Initial function calls on load ------*/
$(document).ready(function () {
    const hash = window.location.hash;

    if (hash) {
        console.log(hash);
        const tabName = hash.substring(1);
        toggleTab(tabName);
    }

    updateContentPosition();
});