
    var albanian = document.querySelector('.albanian');
    var english = document.querySelector('.english');
    var profileDropdown = document.querySelector('.profileDropdown');
    var laptops = document.getElementById('laptops');

    function Albanian(){
        albanian.classList.add('active');
        english.classList.remove('active');
    }
    function English(){
        albanian.classList.remove('active');
        english.classList.add('active');
    }
    $(document).ready(function() {
        $('.shtetet').change(function(){
            $("#width_tmp_option").html($('.shtetet option:selected').text()); 
                $(this).width($("#width_tmp_select").width()-7);  
        });
    });
    function openDropdown(){
       if(profileDropdown.style.display === "none"){
            profileDropdown.style.display = "block";
       }
       else{
            profileDropdown.style.display = "none";
       }
    }

    if(document.location == "http://127.0.0.1:5500/laptops.html"){
         laptops.style.color = "#3c9b9b"; 
         laptops.style.fontWeight = 'bold'; 
    }