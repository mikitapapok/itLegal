const burgerMenuButton = document.querySelector(".burger-menu");
const sidebar = document.querySelector(".sidebar");
const sheet = document.querySelector(".sheet");
const closeSideBarButton = document.querySelector(".close-sidebar");
const sidebarNavigator = document.querySelector(".sidebar-navigator");

const closeSideBar = () => {
    sidebar.classList.add("sidebar-display");
    sheet.classList.add("sheet-no-display");
};
const openSideBar = () => {
    sheet.classList.remove("sheet-no-display");
    sidebar.classList.remove("sidebar-display");
};
burgerMenuButton.addEventListener("click", openSideBar);
closeSideBarButton.addEventListener("click", closeSideBar);
