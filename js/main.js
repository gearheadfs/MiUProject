// Dave Johnson
// 11/28/12
// MiU 1211
// Assignment 1

//Wait until DOM is ready
window.addEventListener("DOMContentLoaded", function(){
    
    //getElementbyID function **Shortcut Function**
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    //Create select field element and populate with options
    function makeState(){
        var formTag = document.getElementsByTagName("form");
            selectLi = $('select');
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "states");
        for(var i=0, j=orderForm.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = orderForm[i];
            makeOption.setAttribute("select", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    function getSelectedState(){
        var stateSelected = orderForm[i].text;
        for (var i=0; i<orderForm.length; i++){
            if (stateSelected[i].checked){
                selectValue = orderForm[i].text;
            }
        } 
    }
    
    function getCheckboxValue(){
        if($('onemini').checked){
            oneValue = $('onemini').value;
            
        }else{
            oneValue = "None"
        }
        if($('twomini').checked){
            twoValue = $('twomini').value;
            
        }else{
            twoValue = "None"
        }
        if($('threemini').checked){
            threeValue = $('threemini').value;
            
        }else{
            threeValue = "None"
        }
        if($('fourmini').checked){
            fourValue = $('fourmini').value;
            
        }else{
            fourValue = "None"
        }
        if($('fivemini').checked){
            fiveValue = $('fivemini').value;
            
        }else{
            fiveValue = "None"
        }
        if($('sixmini').checked){
            sixValue = $('sixmini').value;
            
        }else{
            sixValue = "None"
        }
        if($('sevenmini').checked){
            sevenValue = $('sevenmini').value;
            
        }else{
            sevenValue = "None"
        }
        if($('eightmini').checked){
            eightValue = $('eightmini').value;
            
        }else{
            eightValue = "None"
        }
        if($('ninemini').checked){
            nineValue = $('ninimini').value;
            
        }else{
            nineValue = "None"
        }
        if($('tenmini').checked){
            tenValue = $('tenmini').value;
            
        }else{
            tenValue = "None"
        }
        if($('elevenmini').checked){
            elevenValue = $('elevenmini').value;
            
        }else{
            elevenValue = "None"
        }
        if($('twelvemini').checked){
            twelveValue = $('twelvemini').value;
            
        }else{
            twelveValue = "None"
        }
        if($('thirteenmini').checked){
            thirteenValue = $('thirteenmini').value;
            
        }else{
            thirteenValue = "None"
        }
        if($('fourteenmini').checked){
            fourteenValue = $('fourteenmini').value;
            
        }else{
            fourteenValue = "None"
        }
        if($('fifteenmini').checked){
            fifteenValue = $('fifteenmini').value;
            
        }else{
            fifteenValue = "None"
        }
        if($('sixteenmini').checked){
            sixteenValue = $('sixteenmini').value;
            
        }else{
            sixteenValue = "None"
        }
        if($('seventeenmini').checked){
            seventeenValue = $('seventeenmini').value;
            
        }else{
            seventeenValue = "None"
        }
        if($('eighteenmini').checked){
            eighteenValue = $('eighteenmini').value;
            
        }else{
            eighteenValue = "None"
        }
        if($('nineteenmini').checked){
            nineteenValue = $('nineteenmini').value;
            
        }else{
            nineteenValue = "None"
        }
        if($('twentymini').checked){
            twentyValue = $('twentymini').value;
            
        }else{
            twentyValue = "None"
        }
        if($('twentyonemini').checked){
            twentyoneValue = $('twentyonemini').value;
            
        }else{
            twentyoneValue = "None"
        }
        if($('twentytwomini').checked){
            twentytwoValue = $('twentytwomini').value;
            
        }else{
            twentytwoValue = "None"
        }
        if($('twentythreemini').checked){
            twentythreeValue = $('twentythreemini').value;
            
        }else{
            twentythreeValue = "None"
        }
        if($('twentyfourmini').checked){
            twentyfourValue = $('twentyfourmini').value;
            
        }else{
            twentyfourValue = "None"
        }
        if($('twentyfivemini').checked){
            twentyfiveValue = $('twentyfivemini').value;
            
        }else{
            twentyfiveValue = "None"
        }
        if($('twentysixmini').checked){
            twentysixValue = $('twentysixmini').value;
            
        }else{
            twentysixValue = "None"
        }
        if($('twentysevenmini').checked){
            twentysevenValue = $('twentysevenmini').value;
            
        }else{
            twentysevenValue = "None"
        }
        if($('twentyeightmini').checked){
            twentyeightValue = $('twentyeightmini').value;
            
        }else{
            twentyeightValue = "None"
        }
        if($('twentyninemini').checked){
            twentynineValue = $('twentyninemini').value;
            
        }else{
            twentynineValue = "None"
        }
        if($('thirtymini').checked){
            thirtyValue = $('thirtymini').value;
            
        }else{
            thirtyValue = "None"
        }
        if($('thirtyonemini').checked){
            thirtyoneValue = $('thirtyonemini').value;
            
        }else{
            thirtyoneValue = "None"
        }
        if($('thirtytwomini').checked){
            thirtytwoValue = $('thirtytwomini').value;
            
        }else{
            thirtytwoValue = "None"
        }
        if($('thirtythreemini').checked){
            thirtythreeValue = $('thirtythreemini').value;
            
        }else{
            thirtythreeValue = "None"
        }
        if($('thirtyfourmini').checked){
            thirtyfourValue = $('thirtyfourmini').value;
            
        }else{
            thirtyfourValue = "None"
        }
        if($('thirtyfivemini').checked){
            thirtyfiveValue = $('thirtyfivemini').value;
            
        }else{
            thirtyfiveValue = "None"
        }
        if($('thirtysixmini').checked){
            thirtysixValue = $('thirtysixmini').value;
            
        }else{
            thirtysixValue = "None"
        }
        if($('thirtysevenmini').checked){
            thirtysevenValue = $('thirtysevenmini').value;
            
        }else{
            thirtysevenValue = "None"
        }
        if($('thirtyeightmini').checked){
            thirtyeightValue = $('thirtyeightmini').value;
            
        }else{
            thirtyeightValue = "None"
        }
        if($('thirtyninemini').checked){
            thirtynineValue = $('thirtyninemini').value;
            
        }else{
            thirtynineValue = "None"
        }
        if($('fourtymini').checked){
            fourtyValue = $('fourtymini').value;
            
        }else{
            fourtyValue = "None"
        }
        if($('fourtyonemini').checked){
            fourtyoneValue = $('fourtyonemini').value;
            
        }else{
            fourtyoneValue = "None"
        }
        if($('fourtytwomini').checked){
            fourtytwoValue = $('fourtytwomini').value;
            
        }else{
            fourtytwoValue = "None"
        }
        if($('fourtythreemini').checked){
            fourtythreeValue = $('fourtythreemini').value;
            
        }else{
            foutythreeValue = "None"
        }
        if($('fourtyfourmini').checked){
            fourtyfourValue = $('fourtyfourmini').value;
            
        }else{
            fourtyfourValue = "None"
        }
        if($('fourtyfivemini').checked){
            fourtyfiveValue = $('fourtyfivemini').value;
            
        }else{
            fourtyfiveValue = "None"
        }
        if($('fourtysixmini').checked){
            fourtysixValue = $('fourtysixmini').value;
            
        }else{
            fourtysixValue = "None"
        }
        if($('fourtysevenmini').checked){
            fourtysevenValue = $('fourtysevenmini').value;
            
        }else{
            fourtysevenValue = "None"
        }
        if($('fourtyeightmini').checked){
            fourtyeightValue = $('fourtyeightmini').value;
            
        }else{
            fourtyeightValue= "None"
        }
        if($('fourtyninemini').checked){
            fourtynineValue = $('fourtyninemini').value;
            
        }else{
            fourtynineValue = "None"
        }  
    }
    
    function toggleControls(n){
        switch(n){
            case "on":
                    $('info').style.display = "none";
                    $('clear').style.display = "inline";
                    $('displayLink').style.display = "none";
                    $('addNew').style.display = "inline";
                    break;
            case "off":
                    $('info').style.display = "block";
                    $('clear').style.display = "inline";
                    $('displayLink').style.display = "inline";
                    $('addNew').style.display = "none";
                    $('items').style.display = "none";
                    break;
            default:
                    return false;
        }
    }
    
    function storeData(key){
        //If there is no key this means this is a new input item and needs a new key
        if(!key){
        var id = Math.floor(Math.random()*10000000001);
        }else{
            //Sets id to existing key that's being edited so that it will be overwritten
            id = key;
        }
        // Gather up all form field values and store in an object
        //Object properties contain array with the form label and input value
        //getSelectedRadioMethod();
        getCheckboxValue();
        var item            = {};
            item.firstname  = ["First Name:", $('firstname').value];
            item.lastname   = ["Last Name:", $('lastname').value];
            item.address    = ["Address:", $('address').value];
            item.city       = ["City:", $('city').value];
            item.state      = ["State:", selectText];
            item.phnumber   = ["Phone Number:", $('phnumber').value];
            item.onemini    = ["One:", oneValue];
            item.twomini    = ["Two:", twoValue];
            item.threemini  = ["Three:", threeValue];
            item.fourmini   = ["Four:", fourValue];
            item.fivemini   = ["Five:", fiveValue];
            item.sixmini    = ["Six:", sixValue];
            item.sevenmini  = ["Seven:", sevenValue];
            item.eightmini  = ["Eight:", eightValue];
            item.ninemini   = ["Nine:", nineValue];
            item.tenmini    = ["Ten:", tenValue];
            item.elevenmini = ["Eleven:", elevenValue];
            item.twelvemini = ["Twelve:", twelveValue];
            item.thirteenmini = ["Thirteen:", thirteenValue];
            item.fourteenmini = ["Fourteen:", fourteenValue];
            item.fifteenmini = ["Fourteen:", fifteenValue];
            item.sixteenmini = ["Fourteen:", sixteenValue];
            item.seventeenmini = ["Fourteen:", seventeenValue];
            item.eighteenmini = ["Fourteen:", eighteenValue];
            item.nineteenmini = ["Fourteen:", nineteenValue];
            item.twentymini = ["Fourteen:", twentyValue];
            item.twentyonemini = ["Fourteen:", twentyoneValue];
            item.twentytwomini = ["Fourteen:", twentytwoValue];
            item.twentythreemini = ["Fourteen:", twentythreeValue];
            item.twentyfourmini = ["Fourteen:", twentyfourValue];
            item.twentyfivemini = ["Fourteen:", twentyfiveValue];
            item.twentysixmini = ["Fourteen:", twentysixValue];
            item.twentysevenmini = ["Fourteen:", twentysevenValue];
            item.twentyeightmini = ["Fourteen:", twentyeightValue];
            item.twentyninemini = ["Fourteen:", twentynineValue];
            item.thirtymini = ["Fourteen:", thirtyValue];
            item.thirtyonemini = ["Fourteen:", thirtyoneValue];
            item.thirtytwomini = ["Fourteen:", thirtytwoValue];
            item.thirtythreemini = ["Fourteen:", thirtythreeValue];
            item.thirtyfourmini = ["Fourteen:", thirtyfourValue];
            item.thirtyfivemini = ["Fourteen:", thirtyfiveValue];
            item.thirtysixmini = ["Fourteen:", thirtysixValue];
            item.thirtysevenmini = ["Fourteen:", thirtysevenValue];
            item.thirtyeightmini = ["Fourteen:", thirtyeightValue];
            item.thirtyninemini = ["Fourteen:", thirtynineValue];
            item.fourtymini = ["Fourteen:", fourtyValue];
            item.fourtyonemini = ["Fourteen:", fourtyoneValue];
            item.fourtytwomini = ["Fourteen:", fourtytwoValue];
            item.fourtythreemini = ["Fourteen:", fourtythreeValue];
            item.fourtyfourmini = ["Fourteen:", fourtyfourValue];
            item.fourtyfivemini = ["Fourteen:", fourtyfiveValue];
            item.fourtysixmini = ["Fourteen:", fourtysixValue];
            item.fourtysevenmini = ["Fourteen:", fourtysevenValue];
            item.fourtyeightmini = ["Fourteen:", fourtyeightValue];
            item.fourtyninemini = ["Fourteen:", fourtynineValue];           
            item.quantity   = ["Quantity:", $('qty').value];
            item.date       = ["Date:", $('date').value];
            item.instruct   = ["Special Instructions:", $('specialInstructions').value];
        //Save data into local storage: Use stringify to convert object to a string
        localStorage.setItem(id, JSON.stringify(item));
         alert("Thank you for your order.");
    }
    function getData(){
        toggleControls('on');
        if(localStorage.length === 0){
            alert("There is no data in Local Storage so dummy data was added.");
            autoFillData();
        }
        //Write data from local storage to the browser.
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, len=localStorage.length; i<len; i++){
            var makeLi = document.createElement('li');
            var linksLi = document.createElement('li');
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Convert the string from local storage value back to an object by using JSON.parse()
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeLi.appendChild(makeSubList);
            getImage(obj.method[1], makeSubList);
            for(var k in obj){
                var makeSubLi = document.createElement('li');
                makeSubList.appendChild(makeSubLi);
                var optSubText = obj[k][0]+" "+obj[k][1];
                makeSubLi.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi); //Creates edit and delete links for each list item in local storage
        }
    }
    
    //Get the image for the right category
    function getImage(getSelectedRadioMethod, makeSubList){
        var imgLi = document.createElement('li');
        makeSubList.appendChild(imgLi);
        var newImg = document.createElement('img');
        var setSource = newImg.setAttribute("src", "img/" + getSelectedRadioMethod + ".jpg");
        imgLi.appendChild(newImg);
    }
    
    //Auto Populate Local Storage
    function autoFillData(){
        //The Actual JSON Object data required for this to work is coming from our json.js file which is loaded from additemHTML page
        //Store the JSON data into Local Storage
        for(var n in json){
            var id = Math.floor(Math.random()*10000000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    }
    
    //Make Item Links
    //Create the edit & delete links for each stored item when displayed
    function makeItemLinks(key, linksLi){
        //add edit single item link
        var editLink = document.createElement('a');
            editLink.href = "#";
            editLink.key = key;
            var editText = "Edit Order";
            editLink.addEventListener("click", editItem);
            editLink.innerHTML = editText;
            linksLi.appendChild(editLink);
            
            //add line break
            var breakTag = document.createElement('br');
            linksLi.appendChild(breakTag);
        
        var deleteLink = document.createElement('a');
            deleteLink.href = "#";
            deleteLink.key = key;
            var deleteText = "Delete Order";
            deleteLink.addEventListener("click", deleteItem);
            deleteLink.innerHTML = deleteText;
            linksLi.appendChild(deleteLink);
    }
    
    function editItem(){
        var ask = confirm("Edit your numbers?");
        //Grab data from item from local storage
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        
        //Show the form
        toggleControls("off");
        
        //populate form with current local storage values
        $('firstname').value = item.firstname[1];
        $('lastname').value = item.lastname[1];
        $('address').value = item.address[1];
        $('city').value = item.city[1];
        $('select').value = item.state[1];
        $('phnumber').value = item.phnumber[1];
        
            if(item.onemini[1] == "Yes"){
                $('onemini').setAttribute("checked", "checked");
            }
            if(item.twomini[1] == "Yes"){
                $('twomini').setAttribute("checked", "checked");
            }
            if(item.threemini[1] == "Yes"){
                $('threemini').setAttribute("checked", "checked");
            }
            if(item.fourmini[1] == "Yes"){
                $('fourmini').setAttribute("checked", "checked");
            }
            if(item.fivemini[1] == "Yes"){
                $('fivemini').setAttribute("checked", "checked");
            }
            if(item.sixmini[1] == "Yes"){
                $('sixmini').setAttribute("checked", "checked");
            }
            if(item.sevenmini[1] == "Yes"){
                $('sevenmini').setAttribute("checked", "checked");
            }
            if(item.eightmini[1] == "Yes"){
                $('eightmini').setAttribute("checked", "checked");
            }
            if(item.ninemini[1] == "Yes"){
                $('ninemini').setAttribute("checked", "checked");
            }
            if(item.tenmini[1] == "Yes"){
                $('tenmini').setAttribute("checked", "checked");
            }
            if(item.elevenmini[1] == "Yes"){
                $('elevenmini').setAttribute("checked", "checked");
            }
            if(item.twelvemini[1] == "Yes"){
                $('twelvemini').setAttribute("checked", "checked");
            }
            if(item.thirteenmini[1] == "Yes"){
                $('thirteenmini').setAttribute("checked", "checked");
            }
            if(item.fourteenmini[1] == "Yes"){
                $('fourteenmini').setAttribute("checked", "checked");
            }
            if(item.fifteenmini[1] == "Yes"){
                $('fifteenmini').setAttribute("checked", "checked");
            }
            if(item.sixteenmini[1] == "Yes"){
                $('sixteenmini').setAttribute("checked", "checked");
            }
            if(item.seventeenmini[1] == "Yes"){
                $('seventeenmini').setAttribute("checked", "checked");
            }
            if(item.eighteenmini[1] == "Yes"){
                $('eighteenmini').setAttribute("checked", "checked");
            }
            if(item.nineteenmini[1] == "Yes"){
                $('nineteenmini').setAttribute("checked", "checked");
            }
            if(item.twentymini[1] == "Yes"){
                $('twentymini').setAttribute("checked", "checked");
            }
            if(item.twentyonemini[1] == "Yes"){
                $('twentyonemini').setAttribute("checked", "checked");
            }
            if(item.twentytwomini[1] == "Yes"){
                $('twentytwomini').setAttribute("checked", "checked");
            }
            if(item.twentythreemini[1] == "Yes"){
                $('twentythreemini').setAttribute("checked", "checked");
            }
            if(item.twentyfourmini[1] == "Yes"){
                $('twentyfourmini').setAttribute("checked", "checked");
            }
            if(item.twentyfivemini[1] == "Yes"){
                $('twentyfivemini').setAttribute("checked", "checked");
            }
            if(item.twentysixmini[1] == "Yes"){
                $('twentysixmini').setAttribute("checked", "checked");
            }
            if(item.twentysevenmini[1] == "Yes"){
                $('twentysevenmini').setAttribute("checked", "checked");
            }
            if(item.twentyeightmini[1] == "Yes"){
                $('twentyeightmini').setAttribute("checked", "checked");
            }
            if(item.twentyninemini[1] == "Yes"){
                $('twentyninemini').setAttribute("checked", "checked");
            }
            if(item.thirtymini[1] == "Yes"){
                $('thirtymini').setAttribute("checked", "checked");
            }
            if(item.thirtyonemini[1] == "Yes"){
                $('thirtyonemini').setAttribute("checked", "checked");
            }
            if(item.thirtytwomini[1] == "Yes"){
                $('thirtythreemini').setAttribute("checked", "checked");
            }
            if(item.thirtyfourmini[1] == "Yes"){
                $('thirtyfourmini').setAttribute("checked", "checked");
            }
            if(item.thirtyfivemini[1] == "Yes"){
                $('thirtyfivemini').setAttribute("checked", "checked");
            }
            if(item.thirtysixmini[1] == "Yes"){
                $('thirtysixmini').setAttribute("checked", "checked");
            }
            if(item.thirtysevenmini[1] == "Yes"){
                $('thirtysevenmini').setAttribute("checked", "checked");
            }
            if(item.thirtyeightmini[1] == "Yes"){
                $('thirtyeightmini').setAttribute("checked", "checked");
            }
            if(item.thirtyninemini[1] == "Yes"){
                $('thirtyninemini').setAttribute("checked", "checked");
            }
            if(item.fourtymini[1] == "Yes"){
                $('fourtymini').setAttribute("checked", "checked");
            }
            if(item.fourtyonemini[1] == "Yes"){
                $('fourtyonemini').setAttribute("checked", "checked");
            }
            if(item.fourtytwomini[1] == "Yes"){
                $('fourtytwomini').setAttribute("checked", "checked");
            }
            if(item.fourtythreemini[1] == "Yes"){
                $('fourtythreemini').setAttribute("checked", "checked");
            }
            if(item.fourtyfourmini[1] == "Yes"){
                $('fourtyfourmini').setAttribute("checked", "checked");
            }
            if(item.fourtyfivemini[1] == "Yes"){
                $('fourtyfivemini').setAttribute("checked", "checked");
            }
            if(item.fourtysixmini[1] == "Yes"){
                $('fourtysixmini').setAttribute("checked", "checked");
            }
            if(item.fourtysevenmini[1] == "Yes"){
                $('fourtysevenmini').setAttribute("checked", "checked");
            }
            if(item.fourtyeightmini[1] == "Yes"){
                $('fourtyeightmini').setAttribute("checked", "checked");
            }
            if(item.fourtyninemini[1] == "Yes"){
                $('fourtyninemini').setAttribute("checked", "checked");
            }
    
        $('qty').value = item.quantity[1];
        
        
        /*var radiosMethod = document.forms[0].method;
        for(var i=0; i<radiosMethod.length; i++){
            if (radiosMethod[i].value == "Pick Up" && item.method[1] == ""){
                radiosMethod[i].setAttribute("checked", "checked");
            }else if(radiosMethod[i].value == "Delivery" && item.method[1] == ""){
                radiosMethod[i].setAttribute("checked", "checked"); 
            
            }
        }*/
        $('date').value = item.date[1];
        $('specialInstructions').value = item.instruct[1];
        
        //Remove the initial listener from the input button.
        save.removeEventListener("click", storeData);
        //Change Submit button value to say Edit
        $('submit').value = "Edit Contact";
        var editSubmit = $('submit');
        //Save the key value established in this function as a property of the editSubmit event
        //so the value can be used when data is saved that was edited
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
        /*editSubmit.onsubmit.alert("Order successfully updated.");*/
    }
    
    function deleteItem(){
        var ask = confirm("Are you sure you want to delete this order?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("Order successfully deleted.");
            window.location.reload();
        }else{
            alert("Order has not been deleted.");    
        }
    }
    
    function clearLocal(){
        if (localStorage.length === 0){
            alert("There is no data to clear.")
        }else{
           localStorage.clear();
           alert("Order(s) deleted.");
           window.location.reload();
           return false;
        }
    }
    
     function validate(m){
        //Define elements that need to be validated
        var getFirstName = $('firstname');
        var getLastName = $('lastname')
        var getAddress = $('address');
        var getCity = $('city');
        var getState = $('select');
        var getPhoneNumber = $('phnumber');
        
        //Reset Error Messages
        errMsg.innerHTML = "";
        getFirstName.style.border = "1px solid black";
        getLastName.style.border = "1px solid black";
        getAddress.style.border = "1px solid black";
        getCity.style.border = "1px solid black";
        getState.style.border = "1px solid black";
        getPhoneNumber.style.border = "1px solid black";

        
        //Get error messages
        var messageArray = [];
        //Group validation
        if(getFirstName.value === ""){
            var firstNameError = "Please Enter Your First Name.";
            getFirstName.style.border = "1px dashed red";
            messageArray.push(firstNameError);
        }
        
        if (getLastName.value === ""){
            var lastNameError = "Please Enter Your Last Name.";
            getLastName.style.border = "1px dashed red";
            messageArray.push(lastNameError)
        }
        
        if (getAddress.value === ""){
            var addressError = "Please Enter Your Street Address.";
            getAddress.style.border = "1px dashed red";
            messageArray.push(addressError)
        }
        
        if (getCity.value === ""){
            var cityError = "Please Enter Your City.";
            getCity.style.border = "1px dashed red";
            messageArray.push(cityError);
        }
        
        if (getState.value == "--Choose a State--"){
            var stateError = "Please Provide Your State.";
            getState.style.border = "1px dashed red";
            messageArray.push(stateError);
        }
        //Telephone Validation using regex
       var validTelephone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!(validTelephone.exec(getPhoneNumber.value))){
            var telephoneError = "Please Enter a Valid Telephone Number.";
            getPhoneNumber.style.border = "1px dashed red";
            messageArray.push(telephoneError);
    }
    if(messageArray.length >= 1){
        for(var i=0, j=messageArray.length; i < j; i++){
            var txt = document.createElement('li');
            txt.innerHTML = messageArray[i];
            errMsg.appendChild(txt);
        }
        m.preventDefault();
        return false;
    }else{
        storeData(this.key);
    }
}
  
    //Variable defaults
    var orderForm = [
                    "--Choose a State--",
                    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO",
                    "MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
                    ],
        getSelectedState,
        selectText,
        errMsg = $('errors');

    makeState();
        
        
   
    
    
    
  //Set link & submit click events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clearLink.addEventListener("click", clearLocal);
    var save = $("submit");
    save.addEventListener("click", validate);
    


    
    
    
    });

