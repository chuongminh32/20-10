onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


  document.addEventListener("DOMContentLoaded", function () {
    // Truy cập thẻ audio
    var audio = document.getElementById("birthDayaudio");

    // Bắt đầu chơi nhạc khi trang web tải xong
    audio.play();
});
document.addEventListener("click", function () {
    var audio = document.getElementById("birthDayaudio");
    audio.play();
});
document.addEventListener(
    "click",
    () => {
        const AudioTag = document.querySelector("#audio__letter");
        if (AudioTag) {
            AudioTag.play();                                        
        }
    },
    { once: true }
);
