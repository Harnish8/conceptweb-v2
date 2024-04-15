

// ** Journal/Doc code
// Function to handle dropdown item clicks
function handleDropdownItemClick() {
    $(".dropdown-menu a").click(function (e) {
        e.preventDefault(); // Prevent the default link behavior
        var sectionID = $(this).attr("href");
        $(sectionID).toggle(); // Toggle the visibility of the dropdown section
        hideInfoAndObservation();
        populateContentForSections(['uddeshya', 'sadhano', 'karyaVidhi', 'avlokan', 'Nishkarsh']);

        // Hide SimSetup when a dropdown item is clicked
        toggleSimSetup(false);
    });
}


// Function to handle close button clicks
function handleCloseButtonClick() {
    $(".close-section-button").click(function () {
        $(this).parent().hide(); // Hide the parent section when the close button is clicked

        // Hide SimSetup when a dropdown item is clicked
        toggleSimSetup(true);
    });
}


// Function to handle dropdown menu interactions
function handleDropdownMenu() {
    var $dropdownTrigger = $("#dropdown-trigger");
    var $dropdownMenu = $("#dropdown-menu");

    $dropdownMenu.find("a").each(function (index) {
        var sectionId = $(this).attr("href").substring(1); // Extract section ID from href
        var title = data[sectionId].title; // Get the title from the data

        // Set the title as the content of the <a> element
        $(this).text(title);
    });

    $dropdownTrigger.click(function () {
        $dropdownMenu.toggle();
    });

    $dropdownMenu.find("a").click(function () {
        var clickedValue = $(this).attr("href");

        $dropdownMenu.hide();
        hideAllContainerFluidSections();
        $(clickedValue).show();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".dropdown").length) {
            $dropdownMenu.hide();
        }
    });
}


// Function to populate content for sections
function populateContent(sectionId) {
    const section = data[sectionId];
    if (section) {
        const container = document.getElementById(sectionId);
        container.style.display = 'block';
        container.querySelector('h1').textContent = section.title;

        const contentContainer = container.querySelector('p');
        if (Array.isArray(section.content)) {
            // Clear existing content
            contentContainer.innerHTML = '';

            // Create a new <p> element for each item in the array
            section.content.forEach(item => {
                const pElement = document.createElement('p');
                pElement.textContent = item;
                contentContainer.appendChild(pElement);
            });
        } else {
            contentContainer.textContent = section.content;
        }
    }
}



// Function to populate content for sections
function populateContentForSections(sections) {
    sections.forEach(section => {
        populateContent(section);
    });
}


// Function to hide all container-fluid sections
function hideAllContainerFluidSections() {
    $(".container-fluid").hide();
}




// ** User guide
// Function to handle the "Info" and "Close" button clicks for user guide
function handleInfoUserGuide() {
    let infoDivVisible = false;

    $("#info-button").click(function (e) {
        e.preventDefault();
        toggleUserGuide(infoDivVisible);
        toggleSimSetup(infoDivVisible);
    });

    $("#close-info-div").click(function () {
        hideUserGuide();
        toggleSimSetup(!infoDivVisible);
    });
}





// Function to toggle the visibility of the user guide
function toggleUserGuide(visible) {
    const userGuide = $("#userGuide");
    if (visible) {
        userGuide.hide();
    } else {
        userGuide.show();
    }
}


// Function to hide the user guide
function hideUserGuide() {
    $("#userGuide").hide();
}


// Function to toggle the visibility of SimSetup
// handling simsetup(base64 content) when userguide is open and close
function toggleSimSetup(visible) {
    const simSetup = $("#SimSetup");
    if (visible) {
        simSetup.show();
    } else {
        simSetup.hide();
    }
}


// Function to hide user guide
function hideUserGuide() {
    $("#userGuide").hide();
}


// Function to toggle user guide visibility
function toggleUserGuide(isVisible) {
    hideInfoStepObservation();
    $("#userGuide").toggle();
    isVisible = !isVisible;
    hideAllContainerFluidSections();
}












// ** Step Hint
// // Steps Hint Code
let increaseCurrentStep = 0; // Track the current step
let stepButtonDisabled = false; // Track if the button is disabled
// Function to handle the "Stepit" and "Close" button clicks for step hint
function handleStepHint() {
    let stepHintDivVisible = false;

    $("#stepit").click(function (e) {
        e.preventDefault();
        if (!stepButtonDisabled) {
            if (increaseCurrentStep < stepHintData.length) {
                displayCurrentStepContent();
            }
            toggleStepHint(stepHintDivVisible);
            hideAllContainerFluidSections(); // Add this line to hide other sections
        }
    });

    $("#close-step-div").click(function () {
        hideStepHint();
    });
}
// Function to display the current step's content
function displayCurrentStepContent() {
    if (increaseCurrentStep < stepHintData.length) {
        $("#stepHint p").text(stepHintData[increaseCurrentStep]);
    }
}
// Function to hide step hint
function hideStepHint() {
    $("#stepHint").hide();
    // Show SimSetup when a dropdown item is clicked
    toggleSimSetup(true);
}


// Function to toggle step hint visibility
function toggleStepHint(isVisible) {
    hideInfoAndObservation();
    $("#stepHint").toggle();
    isVisible = !isVisible;
}


// Function to hide user guide, step hint, and observation table
function hideInfoAndObservation() {
    hideUserGuide();
    hideStepHint();
    hideObservationTable();
}









// ** Observation Table
// Function to handle the "Observation" and "Close" button clicks for observation table
function handleObservationTable() {
    let observationDivVisible = false;

    $("#observation-button").click(function (e) {
        e.preventDefault();
        toggleObservationTable(observationDivVisible);
        hideAllContainerFluidSections(); // Add this line to hide other sections
    });

    $("#close-observation-div").click(function () {
        hideObservationTable();
    });
}
// Function to hide observation table
function hideObservationTable() {
    $("#observation-div").hide();
}
// Function to toggle observation table visibility
function toggleObservationTable(isVisible) {
    hideInfoStepObservation();
    $("#observation-div").toggle();
    isVisible = !isVisible;
}
// For Taking Screenshot 
const screenshotTaken = [false, false];
// Keep track of individual screenshot URLs for each row
const screenshotUrls = [];
function captureScreenshot(index) {
    const screenshotButtons = document.querySelectorAll(".screenshotButton");
    const viewScreenshotButtons = document.querySelectorAll(".viewScreenshotButton");
    const screenshotImage = document.getElementById("screenshotImage");
    const simSetupGroup = document.getElementById("SimSetup").cloneNode(true);
    simSetupGroup.style.backgroundColor = "#000";
    const svgScreenshot = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgScreenshot.appendChild(simSetupGroup);
    const svgDataUrl = "data:image/svg+xml;base64," + btoa(new XMLSerializer().serializeToString(svgScreenshot));
    screenshotImage.src = svgDataUrl;
    screenshotTaken[index] = true;
    screenshotUrls[index] = svgDataUrl; // Store the URL for the current screenshot
    screenshotButtons[index].style.display = "none";
    viewScreenshotButtons[index].style.display = "block";

    const nextIndex = index + 1;
    if (nextIndex < screenshotButtons.length) {
        screenshotButtons[nextIndex]?.removeAttribute("disabled");
        viewScreenshotButtons[nextIndex]?.removeAttribute("disabled");
        document.querySelectorAll(".observationInput")[nextIndex]?.removeAttribute("disabled");
    }
}
function TakeScreenshot() {
    document.querySelectorAll(".screenshotButton").forEach((button, index) => {
        button.addEventListener("click", () => {
            if (!screenshotTaken[index]) {
                captureScreenshot(index);
            }
        });
    });
}
function viewScreenshot() {
    document.querySelectorAll(".viewScreenshotButton").forEach((button, index) => {
        button.addEventListener("click", () => {
            hideObservationTable();
            const gSimSetup = document.getElementById("SimSetup");
            const imageDisplay = document.getElementById("imageDisplay");

            // Get the URL of the screenshot for the current row
            const currentScreenshotUrl = screenshotUrls[index];

            // Update the src attribute with the URL of the current screenshot
            document.getElementById("screenshotImage").src = currentScreenshotUrl;

            toggleElementNoneBlock(gSimSetup, "none");
            imageDisplay.style.display = "block";
        });
    });
}
function closeScreenshot() {
    document.getElementById("closeButton").addEventListener("click", () => {
        const gSimSetup = document.getElementById("SimSetup");
        const imageDisplay = document.getElementById("imageDisplay");
        toggleElementNoneBlock(gSimSetup, "block");
        imageDisplay.style.display = "none";
    });
}
// Observation Table
function addReading() {
    var readingNumber = document.getElementById("reading-number").value;
    var reading = "Reading " + readingNumber;
    var observation = document.getElementById("observation-input").value;

    if (observation) {
        var table = document.getElementById("observation-table");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = readingNumber;
        cell2.innerHTML = reading;
        cell3.innerHTML = observation;

        row.style.backgroundColor = colors[readingNumber - 1];
        readingsCount++;

        document.getElementById("observation-input").value = "";

        if (readingsCount >= 5) {
            captureScreenshot();
            readingsCount = 0; // Reset the readings count after taking the screenshot
        }
    } else {
        alert("Please enter observation.");
    }
}

// ** for userinfo, stephint, observation table
// Function to hide user guide, step hint, and observation table
function hideInfoStepObservation() {
    hideUserGuide();
    hideStepHint();
    hideObservationTable();
}






// ** Refresh
// Reset Simulation
function resetSimulation() {
    // Get a reference to the image and link elements
    const resetImage = document.getElementById('resetImage');
    const refreshLink = document.getElementById('refreshLink');

    refreshLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior

        location.reload();
    })
}






// ** FullScreen
// Manage Full Screen
let isFullscreen = false;
function toggleFullscreen() {
    const fullscreenButton = document.getElementById('fullscreenButton');
    fullscreenButton.addEventListener('click', function () {
        if (isFullscreen) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    });
}
function enterFullscreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
    isFullscreen = true;
    updateButtonIcon();
}
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    isFullscreen = false;
    updateButtonIcon();
}
function updateButtonIcon() {
    if (isFullscreen) {
        fullscreenButton.src = "./Assets/image/unfullscreen.svg"; // Change the button image to an "exit" icon
    } else {
        fullscreenButton.src = "./Assets/image/Full.png"; // Change the button image to a "fullscreen" icon
    }
}







// * Extra code 
// For XY-axis
function getXYAxis() {
    // Add a click event listener to the innerFirst SVG element
    const innerFirstSVG = document.getElementById('ForMenu');
    innerFirstSVG.addEventListener('click', function (event) {
        // Get the mouse coordinates relative to the innerFirst SVG element
        const mouseX = event.clientX.toFixed(2);
        const mouseY = event.clientY.toFixed(2);
        // Log the x-axis and y-axis values to the console
        console.log(`X: ${mouseX}, Y: ${mouseY}`);
    });
}


// set Clock
class Clock9 {
    constructor(el) {
        this.el = document.querySelector(el);

        this.init();
    }
    init() {
        this.timeUpdate();
    }
    get timeAsObject() {
        const date = new Date();
        let h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();

        return { h, m, s };
    }
    get timeAsString() {
        const [h, m, s, ap] = this.timeDigitsGrouped;

        return `${h}:${m}:${s} ${ap}`;
    }
    get timeDigitsGrouped() {
        // this accessible string uses the 12-hour clock
        let { h, m, s } = this.timeAsObject;
        const ap = h > 11 ? "PM" : "AM";
        // deal with midnight
        if (h === 0) h += 12;
        else if (h > 12) h -= 12;
        // prepend 0 to the minute and second if single digits
        if (m < 10) m = `0${m}`;
        if (s < 10) s = `0${s}`;

        return [h, m, s, ap];
    }
    timeUpdate() {
        // update the accessible timestamp in the `aria-label`
        this.el?.setAttribute("aria-label", this.timeAsString);
        // move the hands
        const time = this.timeAsObject;
        const minFraction = time.s / 1;
        const hrFraction = (time.m + (minFraction - 50)) / 60;
        const twelveHrFraction = (time.h + hrFraction) / 12;

        this.el?.style.setProperty("--minAngle", `${360 * hrFraction}deg`);
        this.el?.style.setProperty("--hrAngle", `${360 * twelveHrFraction}deg`);
        this.el?.style.setProperty("--secAngle", `${360 * time.s / 5}deg`);
        // loop
        clearTimeout(this.timeUpdateLoop);
        this.timeUpdateLoop = setTimeout(this.timeUpdate.bind(this), 1e3);
    }
}



// Toggle Elements
function toggleElementNoneBlock(element, displayValue) {
    if (element && typeof element.style !== "undefined" && typeof element.style.display !== "undefined") {
        element.style.display = displayValue;
    }
}




