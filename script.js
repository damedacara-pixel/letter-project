const message = `Hi baby Happy 11th Monthsary!.\n I love you so much love, I hope napaparamdam ko sayo everyday how much you mean to me!I love you forever and everr.\n\n I will always be your kakampi hehe “us.”\n\nPlease be patient w us baby hehhe Ik kaggaling lang natin sa away at sana di yun nakabawas ng love mo for me.n\nI love you, my love!, tiis lang hmm? magkikita rin tayo!`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

