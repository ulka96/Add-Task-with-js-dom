const addBtn = document.getElementById("add");

const taskListContainer = document.querySelector(".taskList");
const taskList = document.querySelector(".taskList ul");
const addInput = document.getElementById("input");

const tasks = [];          //add task buttona basanda inputda yazdigimiz bos arraya duwur

addBtn.addEventListener ("click", (event) => {
    event.preventDefault();                        //add task buttona basanda inputda yazdigimiz submit kimi silinib yenilenmesin deye
    //  console.log(event);                      //ozumuzcun yazib baxdiq
    // console.log(event.target);              // bele yazsaq targetimiz buttondu
   const givenText = addInput.value;          //inputun icine yazacagimiz deyeri bir sozle ifade etmek ucun givenText adlandirdiq
   
   if (givenText === "") {                //eger yazdigimiz text bosdursa hecne return olmasin
    return;
   } 
  
  
    tasks.push(givenText);            // tasks adli bow arrayin icine yazdigimiz texti elave edirik
    displayTasks ();

    addInput.value = "";        //inputun icine nese yazib submit edenden sora inputun yeri bowalir     
    
});

const displayTasks = () => {
    taskList.innerHTML = "";         //inputun icine nese yazib ok verenden sonra, al alta teze yazdiqlarimiz duwecek

    tasks.forEach((task) => {
        taskList.innerHTML += `<li>            
        <span>${task}</span>                             
        <button class="btn delete">Delete Task</button>     
        </li`;
    });

    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
    deleteTask (index);             // klikleyende silecek, amma ekranda yox, konsolda goreceyik
    // console.log(index);          //kliklediyimiz hansi indeksdedi
    });
    });
     
};

   const deleteTask = (index) => {
    tasks.splice (index, 1);
    displayTasks();          //bu funksiyani cagirdiqda kliklediyimiz ekrandan da silinecek
   };

  
    // console.log(tasks);   //baxmaq ucun yazilir, yazmasan da olar
    // taskList.innerHTML += givenText;     //bele yazsaq inputun icine herdefe yeni nese atdiqca yan yana duzecek(yeni li yaratmadan)
     

