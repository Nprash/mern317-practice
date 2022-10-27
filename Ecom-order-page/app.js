const section_1 = document.querySelector(".section1");
const section_2 = document.querySelector(".section2");
const closebtn = document.querySelector(".close-icon");
const orderbtn = document.querySelectorAll(".btnn");
const section_11 = document.querySelector(".section11");
// console.log(orderbtn)

orderbtn.forEach((item) => {
    item.addEventListener("click",function orderitem(e) {
        // let saleitems = document.getElementById("saleitems");
        // let ordersuccessful = document.getElementById("ordersuccessful");
        const closebtn = document.querySelector(".close-icon");
        section_2.classList.remove("active1")
        section_1.classList.add("active1")
        section_11.classList.add("active1");
        
        let GST_PERCENTAGE = 0.18;
        // console.log(e.target.dataset.name)
        let name = e.target.dataset.name;
        let price = parseInt(e.target.dataset.price);
        let gst = price*GST_PERCENTAGE;
        let deliverycharge = price < 600 ? 100 :0;
        let total = price + gst + deliverycharge;
        console.log(price)
        console.log(gst)
        console.log(deliverycharge)
        console.log(total);
        document.getElementById("name").innerText = name;
        document.getElementById("price").innerText = price;
        document.getElementById("deliveryCharge").innerText = deliverycharge;
        document.getElementById("gst").innerText = gst;
        document.getElementById("total").innerText = total;
        console.log(document.getElementById("total").innerText)
    
    }
    
    )
});


//for loop also working here

// let buttons = document.getElementsByClassName('btnn');
// for(i=0;i<buttons.length;i++){
//     buttons[i].addEventListener('click',(e)=>{
//         // const closebtn = document.querySelector(".close-icon");
//         section_2.classList.remove("active1")
//         section_1.classList.add("active1")
//         console.log(section_1)
//     })
// }



closebtn.addEventListener("click", () => {
    section_2.classList.add("active1")
    section_1.classList.remove("active1")
    section_11.classList.remove("active1")
})





