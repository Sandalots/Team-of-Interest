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

    // hide the other sections
    $('.personalSection').hide();
    $('.financialSection').hide();
    $('.financialAssetsSection').hide();
    $('.allDoneSection').hide(); 
    // hide results
    $('.results').hide();

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

        // update progress bar to 1
        updateProgressBar(1);
    });
    
    // if personalBtn id is clicked
    $('#personalBtn').click(function(event) {
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

        // update progress bar to 2
        updateProgressBar(2);

        // stop form from submitting
        event.preventDefault();

        // get personal information inputs
        var name = $('#nameInput').val();
        var age = $('#ageInput').val();
        var gender = $('#genderInput').val();
        var dependency = $('#dependencyInput').val();

        // store them in an object
        personalData = {
            name: name,
            age: age,
            gender: gender,
            dependency: dependency
        };

        // test to see if data is being stored in personalData object
        console.log(personalData);
    });

    // if financialInformationBtn id is clicked
    $('#financialInformationBtn').click(function(event) {
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

        // update progress bar to 3
        updateProgressBar(3);

        // stop form from submitting
        event.preventDefault();

        // get financial information inputs
        var employmentStatus = $('#employmentInput').val();
        var householdIncome = $('#incomeInput').val();
        var homeStatus = $('#homeInput').val();
        var bankruptcyStatus = $('#bankruptInput').val();

        // store them in an object
        financialData = {
            employmentStatus: employmentStatus,
            householdIncome: householdIncome,
            homeStatus: homeStatus,
            bankruptcyStatus: bankruptcyStatus
        };

        // test to see if data is being stored in financialData object
        console.log(financialData);
    });

    // if financialAssetsBtn id is clicked
    $('#financialAssetsBtn').click(function(event) {
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

        // update progress bar to 4
        updateProgressBar(4);


        // stop form from submitting
        event.preventDefault();
  
        // get financial assets inputs
        var creditCard = $('#CreditCard').is(':checked');
        var debitCard = $('#DebitCard').is(':checked');
        var mortgage = $('#Mortgage').is(':checked');
        var shortTermLoan = $('#short-termLoan').is(':checked');
        var longTermLoan = $('#long-termLoan').is(':checked');
        var pension = $('#Pension').is(':checked');
        var stocks = $('#Stocks').is(':checked');
        var bonds = $('#Bonds').is(':checked');
  
        // store them in an object
        assetsData = {
            creditCard: creditCard,
            debitCard: debitCard,
            mortgage: mortgage,
            shortTermLoan: shortTermLoan,
            longTermLoan: longTermLoan,
            pension: pension,
            stocks: stocks,
            bonds: bonds
        };
    
        // test to see if data is being stored in assetsData object
        console.log(assetsData);
    });

    // if restartBtn id is clicked
    $('#restartBtn').click(function() {
        // reload page
        location.reload();
    });


    // Recommendation logic
    function recommendationLogic() {
        // if user is under 18
        if (personalData.age < 18) {
            // show recommendation
            $('.results table').append("You are under 18, we recommend you speak to your parents about your finances.");
        }
        // if user is over 18
        else if (personalData.age >= 18) {
            // show recommendation
            $('.results table').append("You are over 18, we recommend you take out a credit card.");
        }

        // set the name class to the name input
        $('.name').append(personalData.name +'.');
    }


    // if yesBtn is clicked redirect to output.html
    $('#yesBtn').click(function() {
        // hide allDoneSection
        $('.allDoneSection').hide();

        // show results
        $('.results').show();

        // hide progress bar
        $('.progress-bar').hide();

        // redirect to output.html
        recommendationLogic();

    });
});