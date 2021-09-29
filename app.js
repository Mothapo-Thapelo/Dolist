
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

                let id = "task" + do_list.length;

                // //create a new elements
                // let checkbox = document.createElement("INPUT");
                // checkbox.setAttribute("type", "checkbox");
                // checkbox.id = id;

                // let label = document.createElement("label");
                // label.innerText = new_list_item;
                // label.htmlFor = id;

                // let line_break = document.createElement("br");

                // let ruler  = document.createElement("hr");

                // display_box.append(checkbox, label, line_break, ruler);


                let outer_label = document.createElement("label");
                outer_label.setAttribute("class", "container");

                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.id = id;

                let inner_label = document.createElement("label");
                inner_label.innerText = new_list_item;
                inner_label.htmlFor = id;


                let custom_checkbox = document.createElement("span");
                custom_checkbox.setAttribute("class", "checkmark");

                outer_label.append(checkbox, inner_label, custom_checkbox);
                display_box.append(outer_label);
            
                //clear the input
                document.querySelector("#new-item").value = "";
            }else if (new_list_item === "") alert("Cannot add empty task");
            else if (do_list.includes(new_list_item)) alert("Task already exists");

 
          
        }
