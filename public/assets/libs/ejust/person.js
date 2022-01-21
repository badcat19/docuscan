$(document).ready(function() {
    $("div.juridic").hide();
    $("input[name$='person']").on( "change", function() {
        var selectedValue = $(this).val();
        $("div.person").hide();
        $("div.juridic").hide();
        $("div." + selectedValue).show();
    });
});