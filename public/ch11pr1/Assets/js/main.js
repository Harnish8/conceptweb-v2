
let ImageReturn =(x,y,w,img) => `<image x="${x}" y="${y}" width="${w}" href="${img}" />`;

// Animation Flag
let isAnimationPlaying = false;





// $("#master1").html("loading")
window.onload = function (){
    SimStart()
}




function SimStart(){
    $("#master1").html(SvgInitialSetup);
    // HeaderMaker();
    IcondivMaker();
    SimSetup()
    sideMenuSetup()
    allmaterial();
    addMagnifyingGlass();
    moveMagnifyingGlass();
    removeMagnifiyingGlass();
    disableMagnifyInTouch();
    init();
    resetSimulation();
    toggleFullscreen();

    handleDropdownItemClick();
    handleCloseButtonClick();
    handleDropdownMenu();
    handleInfoUserGuide();
    handleStepHint();


    // observation table
    handleObservationTable();
    TakeScreenshot();
    viewScreenshot();
    closeScreenshot();

}





function SvgInitialSetup(){
    return `<svg id="Mainsvg" viewbox="0 0 1920 1080">
                <svg class="border">
                    <g id="BackgroundImage">
                        ${ImageReturn(0, 0, 1920, BG)}
                    </g>
                    <foreignobject id="ForMenu">
                        <div id="icondiv" class="row"></div>
                        <div id="masterMenu"></div>

                        <!-- Harnish Code -->
                        <div id="uddeshya" class="container-fluid">
                            <h1></h1>
                            <p></p>
                                <img class="close-section-button" src="./Assets/image/Close.svg" alt="" srcset="" width="40px">
                        </div>

                        <div id="sadhano" class="container-fluid">
                            <h1></h1>
                            <p></p>
                                <img class="close-section-button" src="./Assets/image/Close.svg" alt="" srcset="" width="40px">
                        </div>

                        <div id="karyaVidhi" class="container-fluid">
                            <h1></h1>
                            <p></p>
                                <img class="close-section-button" src="./Assets/image/Close.svg" alt="" srcset="" width="40px">
                        </div>

                        <div id="avlokan" class="container-fluid">
                            <h1></h1>
                            <p></p>
                                <img class="close-section-button" src="./Assets/image/Close.svg" alt="" srcset="" width="40px">
                        </div>

                        <div id="Nishkarsh" class="container-fluid" >
                            <h1></h1>
                            <p></p>
                                <img class="close-section-button" src="./Assets/image/Close.svg" alt="" srcset="" width="40px">
                        </div>

                        <div id="userGuide" class="navbtn">
                            <div style="padding: 10px;">
                                <img src="./Assets/image/UserGuide.svg" alt="Close Section" width="auto" />
                                <img id="close-info-div" src="./Assets/image/Close.svg" alt="" srcset="" width="40px">
                            </div>
                        </div>

                        <div id="stepHint" class="navbtn">
                                <h1>Steps</h1>
                                <p></p>
                                <img id="close-step-div" src="./Assets/image/Close.svg" alt="" srcset="" width="40px">
                        </div>



                        <div id="observation-div" class="navbtn">
                            <table id="firsttable" style="margin-top: 50px;">
                                <tr>
                                    <th>Serial Number</th>
                                    <th>Reading</th>
                                    <th>Observation</th>
                                </tr>
                                <tr id="row1">
                                    <td>001</td>
                                    <td>
                                        <button class="screenshotButton">Take Screenshot</button>
                                        <button class="viewScreenshotButton" style="display: none">View Reading</button>
                                    </td>
                                    <td><input type="text" class="observationInput" placeholder="Enter Observation"></td>
                                </tr>
                                <tr id="row2">
                                    <td>002</td>
                                    <td>
                                        <button class="screenshotButton" disabled>Take Screenshot</button>
                                        <button class="viewScreenshotButton" style="display: none" disabled>View Reading</button>
                                    </td>
                                    <td><input type="text" class="observationInput" placeholder="Enter Observation" disabled></td>
                                </tr>
                            </table>
                            <img id="close-observation-div" src="./Assets/image/Close.svg" alt="" srcset="" width="40px">
                        </div>

                        <div id="imageDisplay" style="display: none; border: #f5c242 solid 0.5px;"">
                            <img id="screenshotImage" style="display: block;">
                            <img id="closeButton" style="position: absolute; top: 10px; right: 10px;" src="./Assets/image/Close.svg" width="40px"></img>
                            <img id="magnifyInSS" style="position: absolute; top: 10px; right: 60px;" src="./Assets/image/Magnifier.svg" alt="" srcset="" width="40px">
                        </div>


                        <div id="alltags1" class="nametg1" style="display: none">काँच की प्लेट</div>


                    </foreignobject>
                    <g id="SimSetup">
                    </g>
                </svg>
            </svg>`;
}





// icons
function IcondivMaker() {
    let str = `
            <div class="col-2 col-md-3">
                <span class="dropdown" id="dropdown-trigger">
                    <a data-toggle="dropdown">
                        <img src="./Assets/image/Journal.svg" alt="" srcset="" width="220px">
                    </a>
                    <ul class="dropdown-menu" id="dropdown-menu">
                        <li><a href="#uddeshya"></a></li>
                        <li><a href="#sadhano"></a></li>
                        <li><a href="#karyaVidhi"></a></li>
                        <li><a href="#avlokan"></a></li>
                        <li><a href="#Nishkarsh"></a></li>
                    </ul>
                </span>
                <a id="info-button">
                    <img src="./Assets/image/User4.svg" alt="" srcset="" width="200px">
                </a>
            </div>


            <div class="col-4 col-md-5 text-center">
                <span id="practicalName" class="btn bg-white w-100" style="font-weight: bold;background-color: #ebeeef !important;"></span>
            </div>


            <div class="col-4 text-end">
                <!-- Other icons here -->
                <a id="stepit">
                    <img src="./Assets/image/Stepit.png" alt="" srcset="" width="160px">
                </a>
                <a id="observation-button">
                    <img src="./Assets/image/Table.png" alt="" srcset="" width="240px">
                </a>
                <a id="refreshLink">
                    <img src="./Assets/image/Reset.png" alt="" srcset="" width="46px" id="resetImage">
                </a>
                <img id="fullscreenButton" src="./Assets/image/Full.png" alt="" srcset="" width="46px">
                <img id="magnify" src="./Assets/image/Magnifier.svg" alt="" srcset="" width="46px">
                <img src="./Assets/image/Close.svg" alt="" srcset="" width="46px">
            </div>`;

    $("#icondiv").html(str)
}





function sideMenuSetup() {

    let str = `
    
    <fieldset>
        <button id="material" class="btn bg-white">पदार्थों लें</button>
        <br>
    </fieldset>
    `;

    $("#masterMenu").html(str)
}











function SimSetup() {
    let str = `

            <g id="showmaterial" style="display: none">

                <g id="flame_gif" style="display: none">
                    ${ImageReturn(294.3, 763, 75, flame_gf)}
                </g>

                <g id="Burner" style="display: block">
                    ${ImageReturn(108, 773, 340, burner)}
                </g>



                <g id="first_gif" style="display: none">
                    ${ImageReturn(521, 472, 626, first_apng_leaf)}
                </g>

                <g id="second_gif" style="display: none">
                    ${ImageReturn(288, 326, 875, second_apng_sprit)}
                </g>

                <g id="third_gif" style="display: none">
                    ${ImageReturn(288, 326, 875, third_apng_testtube_biker)}
                </g>

                <g id="third_gif2" style="display: none">
                    ${ImageReturn(298, 701, 69, third_apng_testtube_biker2)}
                </g>

                <g id="fourth_gif" style="display: none">
                    ${ImageReturn(298.5, 363, 897, fourth_apng_white_leaf)}
                </g>

                <g id="fifth_gif" style="display: none">
                    ${ImageReturn(897, 765.5, 210, fifth_apng_white_leaf_clean)}
                </g>

                <g id="six_gif" style="display: none">
                    ${ImageReturn(723, 783, 275, six_gif_blue_leaf)}
                </g>

                <g id="seven_gif" style="display: none">
                    ${ImageReturn(896, 568, 102, seven_gif_blue_leaf)}
                </g>




                <g id="Test_tube_stand" style="display: block">
                    ${ImageReturn(535, 855, 125, test_tube_stand)}
                </g>

                <g id="Empty_tube_stand" style="display: block">
                    ${ImageReturn(528.5, 850, 138, empty_tube_stand)}
                </g>

                <g id="Plate1" style="display: none">
                    ${ImageReturn(783.5, 940, 96, plate)}
                </g>

                <g id="Plate2" style="display: block">
                    ${ImageReturn(900, 940, 96, plate)}
                </g>

                <g id="Blue_plate" style="display: none">
                    ${ImageReturn(900, 940, 95, blue_plate)}
                </g>

                <g id="Green_plate" style="display: block">
                    ${ImageReturn(783.5, 941, 95, green_plate)}
                </g>

                <g id="White_plate" style="display: none">
                    ${ImageReturn(900, 940, 95, white_plate)}
                </g>

                <g id="Sprit" style="display: block">
                    ${ImageReturn(682, 875, 35, sprit_bottle)}
                </g>

                <g id="Ayodin" style="display: block">
                    ${ImageReturn(731.5, 874.5, 33, ayodin_bottle)}
                </g>

                <g id="Biker1" style="display: block">
                    ${ImageReturn(296, 695, 73, biker1)}
                </g>

                <g id="Biker2" style="display: block">
                    ${ImageReturn(1033, 863, 69, biker2)}
                </g>



                <g id="Leaf_testtube" style="display: none">
                    ${ImageReturn(974, 542, 175, leaf_testtube2)}
                </g>

                <g id="Beaker_testtube" style="display: none">
                    ${ImageReturn(299, 695, 68, beaker_testtube)}
                </g>

                <g id="White_leaf" style="display: none">
                    ${ImageReturn(950, 780, 40, white_leaf)}
                </g>

                <g id="Sprit_tag" style="display: block">
                    ${ImageReturn(689, 934, 21, sprit_tag)}
                </g>

                <g id="Burner_click" style="display: block">
                    ${ImageReturn(281, 825, 95, burner_click)}
                </g>

                <g id="Bubble_gif" style="display: none">
                    ${ImageReturn(314, 742, 40, Bubble_gif)}
                </g>



            </g>


    `;
    $("#SimSetup").html(str)
}







// Init for Practical Name and Page Title
function init() {
    const practicalNameSpan = document.getElementById("practicalName");
    practicalNameSpan.innerText = data.practicalName;

    const practicalNameTitle = document.getElementById("pageTitle");
    practicalNameTitle.innerText = data.practicalName;
}





function allmaterial() {
    const materialbtn = document.getElementById("material");
    const ShowMaterial = document.getElementById("showmaterial");

    const handleclick = function () {

        materialbtn.removeEventListener("click", handleclick)


        ShowMaterial.style.display = "block";
        First_anim();
        increaseCurrentStep++;

    }
    materialbtn.addEventListener("click", handleclick);
}



// 1st Animation 
function First_anim() {
    const Green_plate = document.getElementById("Green_plate");
    const Test_tube_stand = document.getElementById("Test_tube_stand");

    const First_Gif = document.getElementById("first_gif");

    const handleclick = function () {

        Green_plate.removeEventListener("click", handleclick)

        First_Gif.style.display = "block";
        Green_plate.style.display = "none";
        Test_tube_stand.style.display = "none";

        increaseCurrentStep++;

        // Second_anim();

        setTimeout(function () {
            // Dropper_Anim.style.display = "none";
            Second_anim();
        }, 10000);

    }
    Green_plate.addEventListener("click", handleclick);
}



// 2nd Animation
function Second_anim() {
    const Sprit = document.getElementById("Sprit");
    const First_Gif = document.getElementById("first_gif");
    const Test_tube_stand = document.getElementById("Test_tube_stand");
    const Leaf_testtube = document.getElementById("Leaf_testtube");
    const Plate1 = document.getElementById("Plate1");

    const Second_Gif = document.getElementById("second_gif");

    const handleclick = function () {

        Sprit.removeEventListener("click", handleclick)

        Second_Gif.style.display = "block";
        // Test_tube_stand.style.display = "block";
        Sprit.style.display = "none";
        First_Gif.style.display = "none";
        Plate1.style.display = "block";

        increaseCurrentStep++;

        // Third_anim();

        setTimeout(function () {
            Leaf_testtube.style.display = "block";
            Third_anim();
        }, 15000);

    }
    Sprit.addEventListener("click", handleclick);
}



// 3rd Animation
function Third_anim() {
    const Sprit = document.getElementById("Sprit");
    const Leaf_testtube = document.getElementById("Leaf_testtube");
    const Second_Gif = document.getElementById("second_gif");
    const Biker1 = document.getElementById("Biker1");
    // const Beaker_testtube = document.getElementById("Beaker_testtube");


    const Third_Gif = document.getElementById("third_gif");

    const handleclick = function () {

        Leaf_testtube.removeEventListener("click", handleclick)

        Third_Gif.style.display = "block";
        Leaf_testtube.style.display = "none";
        Second_Gif.style.display = "none";
        Biker1.style.display = "none";
        Sprit.style.display = "block";

        increaseCurrentStep++;

        // Fourth_anim();

        setTimeout(function () {
            // Dropper_Anim.style.display = "none";
            // Beaker_testtube.style.display = "block";
            Third_anim2();
        }, 7000);

    }
    Leaf_testtube.addEventListener("click", handleclick);
}



//3rd 2nd animation
function Third_anim2() {
    const Burner_click = document.getElementById("Burner_click");
    const Third_Gif = document.getElementById("third_gif");
    const Beaker_testtube = document.getElementById("Beaker_testtube");
    const Bubble_gif = document.getElementById("Bubble_gif");
    const flame_gif = document.getElementById("flame_gif");



    const Third_Gif2 = document.getElementById("third_gif2");

    const handleclick = function () {

        Burner_click.removeEventListener("click", handleclick)

        Third_Gif2.style.display = "block";
        // Leaf_testtube.style.display = "none";
        // Third_Gif.style.display = "none";
        Burner_click.style.display = "none";


        // Bubble_gif.style.display = "block";
        flame_gif.style.display = "block";

        setTimeout(function () {
            // Dropper_Anim.style.display = "none";
            Bubble_gif.style.display = "block";
            
        }, 2000);

        increaseCurrentStep++;

        // Fourth_anim();

        setTimeout(function () {
            // Dropper_Anim.style.display = "none";
            Beaker_testtube.style.display = "block";
            Third_Gif.style.display = "none";
            // Bubble_gif.style.display = "none";
            flame_gif.style.display = "none";
            Fourth_anim();
        }, 10000);

        setTimeout(function () {
            // Dropper_Anim.style.display = "none";
            Bubble_gif.style.display = "none";
            
        }, 11500);

    }
    Burner_click.addEventListener("click", handleclick);
}



// 4th Animation
function Fourth_anim() {
    const Beaker_testtube = document.getElementById("Beaker_testtube");
    const Third_Gif2 = document.getElementById("third_gif2");
    const white_Leaf = document.getElementById("White_leaf");

    const Fourth_Gif = document.getElementById("fourth_gif");

    const handleclick = function () {

        Beaker_testtube.removeEventListener("click", handleclick)

        Fourth_Gif.style.display = "block";
        Beaker_testtube.style.display = "none";
        Third_Gif2.style.display = "none";

        // Fifth_anim();

        setTimeout(function () {
            white_Leaf.style.display = "block";
            Fifth_anim();
        }, 27000);

    }
    Beaker_testtube.addEventListener("click", handleclick);

}



//5th Animation
function Fifth_anim() {
    const White_leaf = document.getElementById("White_leaf");
    const Fourth_Gif = document.getElementById("fourth_gif");
    const Biker1 = document.getElementById("Biker1");
    const Biker2 = document.getElementById("Biker2");
    const Plate2 = document.getElementById("Plate2");
    const Test_tube_stand = document.getElementById("Test_tube_stand");

    const Fifth_Gif = document.getElementById("fifth_gif");




    Fifth_Gif.style.display = "block";
    White_leaf.style.display = "none";
    Fourth_Gif.style.display = "none";
    Biker1.style.display = "block";
    Plate2.style.display = "none";
    Biker2.style.display = "none";
    Test_tube_stand.style.display = "block";

    // Six_anim();
    increaseCurrentStep++;

    setTimeout(function () {
        Six_anim();
    }, 10000);
}



//6th Animation
function Six_anim() {
    const Ayodin = document.getElementById("Ayodin");
    const Fifth_Gif = document.getElementById("fifth_gif");
    const Biker2 = document.getElementById("Biker2");

    const Six_Gif = document.getElementById("six_gif");

    const handleclick = function () {

        Ayodin.removeEventListener("click", handleclick)

        Six_Gif.style.display = "block";
        Fifth_Gif.style.display = "none";
        Ayodin.style.display = "none";
        Biker2.style.display = "block";


        setTimeout(function () {
            Seven_anim();
        }, 20000);

        increaseCurrentStep++;

    }
    Ayodin.addEventListener("click", handleclick);

}



//7th Animation
function Seven_anim() {
    const Seven_Gif = document.getElementById("seven_gif");


    Seven_Gif.style.display = "block";
}













