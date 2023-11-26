function createGrid(){
    var box = document.getElementById("container");
    var row;
    var pixle;
    for (let i=0; i<100;i++){
        row =document.createElement("div");
        row.classList.add("rows");
        for(let j=0; j<100;j++){
            pixle=document.createElement("div");
            pixle.classList.add("pixle");
            row.appendChild(pixle);
        }
        box.appendChild(row);
    };
}
function hovering(){
    let pic = document.querySelectorAll(".pixle");
    pic.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
          // Function to execute when the mouse enters the element
          element.style.backgroundColor = 'blue';
        });
    
        element.addEventListener('mouseleave', function() {
          // Function to execute when the mouse leaves the element
          element.style.backgroundColor = 'blue';
        });
      });
}
createGrid();
hovering();

