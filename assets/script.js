let boxes = document.querySelectorAll(".box");
let rows = document.querySelectorAll(".row");


boxes.forEach(function(box){
    box.addEventListener("dragstart", function(e){
       e.dataTransfer.setData("dragged", e.target.id);
    })
})

rows.forEach(function(row){
    row.addEventListener("dragover", function(e){
        e.preventDefault();
    })

    row.addEventListener("drop", function(e){
        let check = e.dataTransfer.getData("dragged");
        let data = this.getAttribute("data-id").split(",");
        if(data.includes(check)){
            this.append(document.getElementById(check));
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong placement! Please try again...',
              })
        }
        
    })
})