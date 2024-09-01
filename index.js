const hindi = document.querySelector(".hindi");
const oo = document.querySelector(".oo");
const con = document.querySelector('.container');
let count = 0;
let count2 = 0;
hindi.addEventListener("click", () => {
    
    count++;
    hindi.style.zindex = "999"
    
    if (count % 3 == 0) {
        const maxX = con.clientWidth - hindi.offsetWidth;
        const maxY = con.clientHeight - hindi.offsetHeight;
    
        // Generate random positions within these bounds
        const random_value_w = Math.floor(Math.random() * (maxX + 1));
        const random_value_h = Math.floor(Math.random() * (maxY + 1));
        let img = document.createElement("img");
        img.style.left = random_value_w + "px"
        img.style.top = random_value_h + "px"
        img.classList.add("imgg")
        img.src = "img.png"
        document.body.appendChild(img);
        count2++;
    }
  
    
    if (count2 == 2) {
        document.body.style.background = "red"
    }
    const maxX = con.clientWidth - hindi.offsetWidth;
    const maxY = con.clientHeight - hindi.offsetHeight;

    const random_value_w = Math.floor(Math.random() * (maxX + 1));
    const random_value_h = Math.floor(Math.random() * (maxY + 1));

    // Apply the calculated positions to ensure hindi stays within the container
    hindi.style.left = random_value_w + "px";
    hindi.style.top = random_value_h + "px";

    const numberOfParagraphs = 2;
    for (let i = 0; i < numberOfParagraphs; i++) {
     
        const maxX = window.innerWidth - hindi.offsetWidth;
        const maxY = window.innerHeight - hindi.offsetHeight;
    
        // Generate random positions within these bounds
        const random_value_w = Math.floor(Math.random() * (maxX + 1));
        const random_value_h = Math.floor(Math.random() * (maxY + 1));
        const p_el = document.createElement("p");
        p_el.classList.add("pe");
        p_el.style.top = random_value_h + "px"
        p_el.style.left = random_value_w + "px"
        p_el.innerHTML = `Hindi pwedeeeeeeeee <i class="fa-solid fa-face-sad-cry"></i>`; // No need to use += since you're only adding one string
    
        document.body.appendChild(p_el);
    }
  
   
});

oo.addEventListener("click", () => {
    const a = document.createElement('a');
    a.href = "ilovey.html"; // Set the href attribute to your desired URL
    a.style.display = 'none'; // Optionally hide the anchor element if you don’t want it to be visible
    document.body.appendChild(a); // Append the anchor element to the body
    a.click(); // Programmatically trigger the click event
    document.body.removeChild(a); // Optionally remove the anchor element from the DOM after navigation
});