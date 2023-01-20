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
  horiProjects.scrollLeft = horiProjects.scrollLeft - (0.75 * width) - 8;
};

const rightScrollHandler = () => {
  let { width, height } = getWindowDimensions();
  horiProjects.scrollLeft = horiProjects.scrollLeft + (0.75 * width) + 8;
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

const getProjects = async () => {
    await fetch("data.json", {method: "GET"})
      .then(res => res.json())
      .then(json => {

        for (project of json.projects) {

          horiProjects.innerHTML += `
           <div class="projects-item">
            <img src="${project.imgs[0]}" />
            <h4>${project.name || ("Project")}</h4>
            <p>${project.description || ""}</p>
            <p class="techstack">${project.tools.join(", ")}</p>
            
            <!-- 
             <a href="${project.link}" class="project-link">
               <span class="material-symbols-outlined"> north_east </span>
             </a>
             -->

            <div class="proj-link-github">
              <a
              href="${project.github}"
              class="outer-shadow hover-in-shadow"
              ><i class="fab fa-github"></i
            ></a>
            <a
              href="${project.link}"
              class="outer-shadow hover-in-shadow"
              ><i class="fa-solid fa-link"></i></a>
            </div>

          </div>
           `
        }

        return json
      })
      .catch(err => console.log(err))
}

getProjects()


window.addEventListener('popstate', closeNavHandler);

const pushUrl = (href) => {
  history.pushState({}, '', href);
  console.log("redish")
  window.dispatchEvent(new Event('popstate'));
  
};