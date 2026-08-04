const message = `If someone asked me what "home" feels like,
I wouldn't think of a place.
I'd think of you.

No matter how many miles stand between us,
my heart has never felt far from yours.

Thank you for staying,
for loving me,
and for choosing me every single day.

I don't need a perfect love story.
I only need you.

One day,
distance will become just another memory.

Until then...

Take care of yourself.
Sleep well.
Smile more.

I love you today,
tomorrow,
and forever. ❤️`;

const btn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const text = document.getElementById("text");

btn.onclick = () => {
    btn.style.display = "none";
    letter.classList.remove("hidden");

    let i = 0;
    function type() {
        if (i < message.length) {
            text.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }

    type();
};
