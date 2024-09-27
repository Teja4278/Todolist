const submitBtn = document.getElementById('btn');
const outputDiv = document.getElementById('message');

let divArray = [];


submitBtn.addEventListener('click', () => {
    const input1 = document.getElementById('task').value;
    const input2 = document.getElementById('task-description').value;
    const input3 = document.getElementById('datetime-local').value;
    let image=document.getElementById('image');
     image.style.display='none';
     let h1=document.getElementById('h1');
        h1.style.display='none';
    if (input1 && input2 && input3) {
        const newDiv = document.createElement('div');
        newDiv.className = 'output-item';
        newDiv.innerHTML = `Task: ${input1} <br>Description: ${input2} <br>Time: ${input3}`;
        // To display the Added SUcessfully Message 
        let task_added=document.createElement('p');
        task_added.setAttribute('class','task_added');
        task_added.innerHTML='Task Added Sucessfully';
        task_added.classList.add("task_added");
        // Adding the para tag to body
        document.getElementById('body').appendChild(task_added);
        let checkbox=document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('id','checkbox');
        newDiv.appendChild(checkbox);

        divArray.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

        checkbox.addEventListener('click',()=>{
            if(checkbox.checked){
                let deleteDiv=document.createElement('button');
                deleteDiv.setAttribute('id','remove');
                deleteDiv.innerText="delete";
                newDiv.appendChild(deleteDiv);
                deleteDiv.addEventListener('click',()=>{
                    newDiv.remove();
                });
            };
        });
        // Add the new div to the array
        divArray.push(newDiv);
        console.log(divArray);

        // Clear the output div and display the updated array
        outputDiv.innerHTML = '';
        divArray.forEach(div => {
            outputDiv.appendChild(div);
        });

        // Clear the input fields
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
    } 
    else if(input1=="" && input2==""&& input3==""){
        newDiv.textContent ="EMPTY TASK ADDED";
    }
    
    else {
        alert('Please fill in all fields.');
    }
});
