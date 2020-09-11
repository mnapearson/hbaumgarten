document.getElementById("gotohomepage").addEventListener(
  "click",
  () => {
    document.getElementById("welcome").hidden = true;
    document.getElementById("main").hidden = false;
  },
  false
);
