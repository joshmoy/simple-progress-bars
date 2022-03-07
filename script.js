function move() {
  const elements = document.querySelectorAll("#myBar");
  elements.forEach(getNewProgress);
}

const getNewProgress = (item) => {
  let width = 50;
  const id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      item.style.width = width + "%";
      item.innerHTML = width * 1 + "%";
    }
  }
};
