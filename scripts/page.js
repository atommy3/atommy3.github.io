/*------ Global Variables ------*/

/*------ Selectors ------*/
// ids
banner = $('#banner');
tabButtonsContainer = $('#tab-buttons-container');
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
}

function updateContentPosition() {
    const targetHeight = banner.outerHeight(); // Get the height including padding
    tabContentContainer.css("top", targetHeight + "px");
}

/*------ Initial function calls on load ------*/
updateContentPosition();