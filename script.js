var showBtn1 = document.getElementById("show1");
var showBtn2 = document.getElementById("show2");
var showBtn3 = document.getElementById("show3");
var showBtn4 = document.getElementById("show4");

var hideBtn1 = document.getElementById("hide1");
var hideBtn2 = document.getElementById("hide2");
var hideBtn3 = document.getElementById("hide3");
var hideBtn4 = document.getElementById("hide4");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");

showBtn1.addEventListener("click", () => {
    showParagraph(showBtn1, hideBtn1, p1)
});

showBtn2.addEventListener("click", () => {
    showParagraph(showBtn2, hideBtn2, p2)
});

showBtn3.addEventListener("click", () => {
    showParagraph(showBtn3, hideBtn3, p3)
})

showBtn4.addEventListener("click", () => {
    showParagraph(showBtn4, hideBtn4, p4)
})

hideBtn1.addEventListener("click", () => {
    hideParagraph(showBtn1, hideBtn1, p1)
})

hideBtn2.addEventListener("click", () => {
    hideParagraph(showBtn2, hideBtn2, p2)
})

hideBtn3.addEventListener("click", () => {
    hideParagraph(showBtn3, hideBtn3, p3)
})

hideBtn4.addEventListener("click", () => {
    hideParagraph(showBtn4, hideBtn4, p4)
})

function showParagraph(showBtn, hideBtn, paragraph) {
    showBtn.setAttribute("class", "hidden");
    hideBtn.removeAttribute("class", "hidden");
    paragraph.setAttribute("class", "p-show");
};

function hideParagraph(showBtn, hideBtn, paragraph) {
    showBtn.removeAttribute("class", "hidden");
    hideBtn.setAttribute("class", "hidden");
    paragraph.removeAttribute("class", "p-show");
};

// Can use easy code
// 1. Use the toggle method on the element className that will hide the text.
// 2. Change the source of the toggle button.

/*toggleButton.addEventListener("click", () => {
    hiddenElement.classList.toggle("classValue") // i.e the value that hides the element.

    // change toggle button by changing the text content or image source as the case may be
    if (toggleButton.src.endsWith("sourceName e.g icon-plus")) {
        toggleButton.src = "newSourceNameWithPath"
    } else {
        // Remain previous sourcename
        toggleButton.src = "sourceNameWithPath"
    }
});*/
