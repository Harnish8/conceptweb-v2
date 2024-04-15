//defaults - not recommended to change
const SCALE = 1.8; // Magnification
const SIZE = 200; // Diameter of the magnifying glass
const LENSE_OFFSET_X = SIZE / 10.2; // X offset of the magnifying glass
const LENSE_OFFSET_Y = SIZE / 10.2; // Y offset of the magnifying glass

document.documentElement.style.setProperty("--scale", SCALE);
document.documentElement.style.setProperty("--size", SIZE + "px");

//create magnifying glass (lense)
const handle = document.createElement("div");
handle.classList.add("handle");

const magnifyingGlass = document.createElement("div");
magnifyingGlass.classList.add("magnifying-glass");
magnifyingGlass.style.top = LENSE_OFFSET_Y + "px";
magnifyingGlass.style.left = LENSE_OFFSET_X + "px";

handle.append(magnifyingGlass);

// Magnify
function addMagnifyingGlass() {
    const magnifyButton = document.getElementById("magnify");
    const magnifyButtonInSS = document.getElementById("magnifyInSS");

    const body = document.body; // Get the body element

    const handleClick = function () {
        if (!isAnimationPlaying) {
            const bodyClone = document.body.cloneNode(true);
            bodyClone.classList.add("body-clone");
            bodyClone.style.top = "0px";
            bodyClone.style.left = "0px";
            magnifyingGlass.append(bodyClone);

            // Add the CSS class to hide the cursor
            body.classList.add("hide-cursor");

            document.body.append(handle);
        }
    }
    magnifyButton.addEventListener("click", handleClick);
    magnifyButtonInSS.addEventListener("click", handleClick);
}


function moveMagnifyingGlass() {
    document.addEventListener("pointermove", function () {
        let pointerX = event.pageX;
        let pointerY = event.pageY;
        //move magnifying glass with cursor
        handle.style.left = pointerX - SIZE / 1.7 + "px";
        handle.style.top = pointerY - SIZE / 1.7 + "px";
        if (magnifyingGlass.children[0]) {
            //align magnified document
            let offsetX = (SIZE * Math.pow(SCALE, 2)) / 2 - pointerX * SCALE;
            let offsetY = (SIZE * Math.pow(SCALE, 2)) / 2 - pointerY * SCALE;
            magnifyingGlass.children[0].style.left = (offsetX + 400) + "px";
            magnifyingGlass.children[0].style.top = (offsetY + 210) + "px";
        }
    });
    // Listen for the mouse wheel event
    // for wheel 
    let scale = 1.4; // Initial scale
    const minScale = 1; // Minimum scale
    const maxScale = 1.8; // Maximum scale
    const scaleStep = 0.1; // Scale step
    document.addEventListener('wheel', function (event) {
        if (!isAnimationPlaying) {
            // event.preventDefault();

            // Calculate the new scale
            if (event.deltaY < 0) {
                // Zoom in (scroll up)
                scale = Math.min(maxScale, scale + scaleStep);
            } else {
                // Zoom out (scroll down)
                scale = Math.max(minScale, scale - scaleStep);
            }

            // Apply the new scale to the magnifying glass
            magnifyingGlass.style.transform = `scale(${scale})`;
        }
    });
}

function removeMagnifiyingGlass() {
    const body = document.body; // Get the body element

    magnifyingGlass.addEventListener("click", function () {
        if (magnifyingGlass.children[0]) {
            magnifyingGlass.children[0].remove();
            handle.remove();

            // Remove the CSS class to show the cursor
            body.classList.remove("hide-cursor");
        }
    });
}

// function disableMagnifyButton() {
//     const magnifyButton = document.getElementById("magnify");
//     if (magnifyButton) {
//         magnifyButton.setAttribute("disabled", "disabled");
//     }
// }


// function enableMagnifyButton() {
//     const magnifyButton = document.getElementById("magnify");
//     if (magnifyButton) {
//         magnifyButton.removeAttribute("disabled");
//     }
// }


function disableMagnifyButton() {
    // const magnifyButton = document.getElementById("magnify");
    // if (magnifyButton) {
    //     magnifyButton.addEventListener("click", function (event) {
    //         event.preventDefault(); // Prevent the default click action
    //         event.stopPropagation(); // Stop event propagation
    //     });
    // }
    var magnifyImage = document.getElementById('magnify');
    magnifyImage.style.pointerEvents = 'none';
}


function enableMagnifyButton() {
    // const magnifyButton = document.getElementById("magnify");
    // if (magnifyButton) {
    //     magnifyButton.removeAttribute("disabled");
    // }
    var magnifyImage = document.getElementById('magnify');
    magnifyImage.style.pointerEvents = 'auto';
}


// function disableMagnifyInTouch()
// {
//     // Check if the user is on a mobile or tablet device
//     if (isMobileOrTabletDevice()) {
//         // If it's a mobile or tablet device, disable the "magnify" button
//         disableMagnifyButton();
//     } else {
//     }
// }


function disableMagnifyInTouch() {
    // // Check if the user is on a mobile or tablet device
    // if (isMobileOrTabletDevice()) {
    //     // If it's a mobile or tablet device, disable the "magnify" button
    //     disableMagnifyButton();
    // } else {
    // }
    var magnifyImage = document.getElementById('magnify');
    magnifyImage.addEventListener('touchstart', preventDefaultHandler, { passive: false });
}

// Helper function to prevent default touch behavior
function preventDefaultHandler(event) {
    event.preventDefault();
}


// Function to check if the user is on a mobile or tablet device
function isMobileOrTabletDevice() {
    const userAgent = navigator.userAgent;
    // Add conditions to detect mobile and tablet user agents
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android|Tablet/i.test(userAgent);
    return isMobile || isTablet;
}

