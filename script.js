
setInterval(() => {
    let vaqt = moment();
    let soat = vaqt.format("hh");
    let minut = vaqt.format("mm");
    let soniya = vaqt.format("ss");
    let ampm = vaqt.format("A");

    document.getElementById("hours").textContent = soat;
    document.getElementById("minutes").textContent = minut;
    document.getElementById("seconds").textContent = soniya;
    document.getElementById("ampm").textContent = ampm;

}, 1000)



