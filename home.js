
    var albanian = document.querySelector('.albanian');
    var english = document.querySelector('.english');
    var profileDropdown = document.querySelector('.profileDropdown');
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