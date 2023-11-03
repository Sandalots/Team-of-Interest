// jquery script for the PoC, currently justs initially hides the forms until each previous form next button is clicked then shows the desired section.
$(document).ready(function() {
    var totalSections = 4; // Total number of sections in your process

    // Update progress bar based on completed sections
    function updateProgressBar(completedSections) {
        var progress = (completedSections / totalSections) * 100;
        $('.progress').css('width', progress + '%');
    }

    // Initial progress bar setup (no sections completed)
    updateProgressBar(0);

    // Function to show a specific section by its class name
    function show(sectionClass) {
        $(sectionClass).show();
        updateProgressBar($(sectionClass).length); // Update progress bar after showing the section
    }

    // show welcomeSection
    $('.welcomeSection ').show();

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
        // hide welcomeSection
        $('.welcomeSection ').hide();
        // show financialSection
        $('.personalSection ').show();
        // hide financialSection
        $('.financialSection').hide();
        // hide financialAssetsSection
        $('.financialAssetsSection').hide();
        // hide allDoneSection
        $('.allDoneSection').hide();
        updateProgressBar(1);
    });
    
    // if personalBtn id is clicked
    $('#personalBtn').click(function() {
        // hide welcomeSection
        $('.welcomeSection ').hide();
        // hide financialSection
        $('.personalSection ').hide();
        // show financialSection
        $('.financialSection').show();
        // hide financialAssetsSection
        $('.financialAssetsSection').hide();
        // hide allDoneSection
        $('.allDoneSection').hide();
        updateProgressBar(2);
    });

    // if financialInformationBtn id is clicked
    $('#financialInformationBtn').click(function() {
        // hide welcomeSection
        $('.welcomeSection ').hide();
        // hide financialSection
        $('.personalSection ').hide();
        // hide financialSection
        $('.financialSection').hide();
        // show financialAssetsSection
        $('.financialAssetsSection').show();
        // hide allDoneSection
        $('.allDoneSection').hide();
        updateProgressBar(3);
    });

    // if financialAssetsBtn id is clicked
    $('#financialAssetsBtn').click(function() {
        // hide welcomeSection
        $('.welcomeSection ').hide();
        // hide financialSection
        $('.personalSection ').hide();
        // hide financialSection
        $('.financialSection').hide();
        // hide financialAssetsSection
        $('.financialAssetsSection').hide();
        // show allDoneSection
        $('.allDoneSection').show();
        updateProgressBar(4);
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