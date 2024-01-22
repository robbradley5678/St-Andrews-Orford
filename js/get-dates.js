    // Function to get the date of the next occurring day of the week
    function getNextDayOfWeek(dayIndex) {
        var today = new Date();
        var dayOfWeek = today.getDay();
        var daysUntilNextDay = (dayIndex + 7 - dayOfWeek) % 7; // Calculate days until next specified day
        var nextDay = new Date(today.getTime() + daysUntilNextDay * 24 * 60 * 60 * 1000); // Add days to today

        // Format the date
        var formattedDate = nextDay.toLocaleDateString(undefined, {weekday:"long", day:"numeric", month:"long" });

        return formattedDate;
    }

    // Display the formatted date of the next day of the week in elements with the corresponding class
    var dayClasses = ['nextSunday', 'nextMonday', 'nextTuesday', 'nextWednesday', 'nextThursday', 'nextFriday', 'nextSaturday'];

    dayClasses.forEach(function(className, index) {
        var elements = document.getElementsByClassName(className);
        Array.from(elements).forEach(function(element) {
            element.innerText = getNextDayOfWeek(index);
        });
    });