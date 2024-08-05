document.addEventListener("DOMContentLoaded", function () {
  const text = "웹과 앱을 개발 하고 있는\n" + "우동엽 입니다 :)";
  let index = 0;

  function type() {
    if (index < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();

  const elements = document.querySelectorAll(
    ".continer1, .continer2, .continer3, .continer4"
  );

  function checkScroll() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        element.classList.add("fadeInUp");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});
