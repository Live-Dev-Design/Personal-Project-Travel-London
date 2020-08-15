// sidenav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});
// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000,
});

// Autocomplete

const autoCom = document.querySelector('.autocomplete'); 
M.Autocomplete.init(autoCom, {
  data: {
    "Buckingham Palace": null,
    "London Eye": null,
    "Westminster": null,
    "River Thames": null,
    "Hyde Park": null,
    "Camden": null,
    "Soho": null,
    "Shoreditch": null,
    "Hampstead Heath": null,
    "Piccadilly Circus": null,
  },
});


// Material Boxed
const mBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mBox, {});


// ScrollSpy
// const ss = document.querySelectorAll('.scrollspy');
// M.Scrollspy.init(ss, {});