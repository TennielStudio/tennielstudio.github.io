let makeToastBtn = document.querySelector("button"); // grabs by selector aka button or h1 or whatever

function showToastPicture()
{
    const specialToast = document.getElementById("special-toast");
    specialToast.style.display = "block";
}

makeToastBtn.onclick = () => {
    showToastPicture();
}

