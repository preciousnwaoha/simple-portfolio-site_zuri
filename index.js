const menuIcon = document.querySelector("#menu");

const closeNav = document.querySelector("#close-nav");

const nav = document.querySelector("#nav");

const horiProjects = document.getElementById("hori-projects");

menuIcon.addEventListener("click", () => {
  menuIcon.className += " hide";
  closeNav.className = "menu";
  nav.className += " show-nav";
});
function closeNavHandler() {
    closeNav.className += " hide";
  menuIcon.className = "menu";
  nav.className = "";
}
closeNav.addEventListener("click", closeNavHandler);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } =
    typeof window !== "undefined" ? window : { innerWidth: 0, innerHeight: 0 };
  return {
    width,
    height,
  };
}

const leftScrollHandler = () => {
  let { width, height } = getWindowDimensions();
  horiProjects.scrollLeft = horiProjects.scrollLeft - 0.75 * width;
};

const rightScrollHandler = () => {
  let { width, height } = getWindowDimensions();
  horiProjects.scrollLeft = horiProjects.scrollLeft + 0.75 * width;
};

// var oldHref = document.location.href;

// window.onload = function () {
//   var bodyList = document.querySelector("body");

//   var observer = new MutationObserver(function (mutations) {
//     mutations.forEach(function (mutation) {
//       if (oldHref != document.location.href) {
//         oldHref = document.location.href;
//         /* Changed ! your code here */
//       }
//     });
//   });

//   var config = {
//     childList: true,
//     subtree: true,
//   };

//   observer.observe(bodyList, config);
// };

window.addEventListener('popstate', closeNavHandler);

const pushUrl = (href) => {
  history.pushState({}, '', href);
  console.log("redish")
  window.dispatchEvent(new Event('popstate'));
  
};