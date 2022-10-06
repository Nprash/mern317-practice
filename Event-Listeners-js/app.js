let section1visited = 0;
let section2visited = 0;
function section1over(){
    section1visited = section1visited+ 1;
    console.log("user visited for section1", section1visited, "times")
}
function section2over(){
    section2visited = section2visited + 1;
    console.log("user visited section2 for", section2visited, "times")
    alert("you are at section2");
}
