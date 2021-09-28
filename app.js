
        let do_list = [];

        function addItem(){

            //temporarily hold list items
            
            //display box for list
            let display_box = document.querySelector(".tasks");     

            //new list item
            let new_list_item = document.querySelector("#new-task").value;


            //check if the new item is not empty or already entered
            if(new_list_item !== "" && !(do_list.includes(new_list_item))){
                do_list.push(new_list_item);

                //create a new elements
                let checkbox = document.createElement("INPUT");
                checkbox.setAttribute("type", "checkbox");

                let label = document.createElement("label");
                label.innerText = new_list_item;

                let line_break = document.createElement("br");

                let ruler  = document.createElement("hr");

                display_box.append(checkbox, label, line_break, ruler);
            
                //clear the input
                document.querySelector("#new-item").value = "";
            }else if (new_list_item === "") alert("Cannot add empty task");
            else if (do_list.includes(new_list_item)) alert("Task already exists");

 
          
        }
