
const SubmitBtn = document.querySelector('#submitBtn');

let studentsArray =[];

window.onload = init();
function init() {
    if(localStorage.studentsRecord){
        studentsArray = JSON.parse(localStorage.studentsRecord);

        for (let i = 0; i < studentsArray.length; i++) {
            TableDisplay( studentsArray[i].firstname, studentsArray[i].lastname,studentsArray[i].regnum,studentsArray[i].Subject);
        }
    }
};


function Register() {
    // Students Details
   const firstName = document.querySelector('#firstName').value;
   const lastName = document.querySelector('#lastName').value;
   const regNum = document.querySelector('#regNum').value;
   let Subject = document.querySelector('#subject').value;

     
   let regDetails = {firstname:firstName,lastname:lastName,regnum:regNum,subject:Subject};
   studentsArray.push(regDetails);

    localStorage.studentsRecord = JSON.stringify(studentsArray);
    // Tabel display Function
    TableDisplay(firstName,lastName,regNum,Subject);
    //clear form details 
    document.querySelector('#firstName').value ='';
    document.querySelector('#lastName').value ='';
    document.querySelector('#regNum').value = '';
    document.querySelector('#subject').value = '';
};

function TableDisplay(firstName,lastName,regNum,Subject) {
    
   // table to put our data
   const table =  document.querySelector('#students');
   const row = table.insertRow();
   const firstNameCell = row.insertCell(0);
   const lastNameCell = row.insertCell(1);
   const regNumCell = row.insertCell(2);
   const SubjectCell = row.insertCell(3);

   firstNameCell.innerHTML = firstName;
   lastNameCell.innerHTML = lastName;
   regNumCell.innerHTML = regNum;
   SubjectCell.innerHTML = Subject;
   
}

SubmitBtn.addEventListener('click', Register);
