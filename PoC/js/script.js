// jquery
$(document).ready(function() {
    // hide personalSection class
    $('.personalSection').hide();

    // hide financialSection
    $('.financialSection').hide();

    // hide financialAssetsSection
    $('.financialAssetsSection').hide();

    // hide allDoneSection
    $('.allDoneSection').hide(); 

    // if nextBtn id is clicked
    $('#welcomeBtn').click(function() {
        // show financialSection
        $('.personalSection ').show();
    });
    
    // if personalBtn id is clicked
    $('#personalBtn').click(function() {
        // show financialSection
        $('.financialSection').show();
    });

    // if financialInformationBtn id is clicked
    $('#financialInformationBtn').click(function() {
        // show financialAssetsSection
        $('.financialAssetsSection').show();
    });

    // if financialAssetsBtn id is clicked
    $('#financialAssetsBtn').click(function() {
        // show allDoneSection
        $('.allDoneSection').show();
    });

    // if restartBtn id is clicked
    $('#restartBtn').click(function() {
        // reload page
        location.reload();
    });

    // if yesBtn is clicked redirect to output.html
    $('#yesBtn').click(function() {
        // redirect to output.html
        window.location.href = "output.html";
    });
});