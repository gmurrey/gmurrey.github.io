const AccordianItemHeaders = document.querySelectorAll(".accordian-item-header");

AccordianItemHeaders.forEach(AccordianItemHeaders => {
    AccordianItemHeaders.addEventListener("click", Event => {
        AccordianItemHeaders.classList.toggle("active");
        const AccordianItemBody = AccordianItemHeaders.nextElementSibling
        if(AccordianItemHeaders.classList.contains("active"))
        AccordianItemBody.style.maxHeight = AccordianItemBody.scrollHeight + "px";
    else{
        AccordianItemBody.style.maxHeight = 0;
    }
    });
});