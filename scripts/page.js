document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll("#tab-buttons-container .tab-button");

    tabButtons.forEach(tabButton => {
        tabButton.onclick = () => toggleTab(tabButton.innerHTML);
        console.log(tabButton.innerHTML)
    });
});

function toggleTab(tabName) {
    const selectedTabButton = document.getElementById(`${tabName}-button`);
    const selectedTabContent = document.getElementById(`${tabName}-content`); 
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    });
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });
    selectedTabButton.classList.add('active');
    selectedTabContent.classList.add('active');
}
