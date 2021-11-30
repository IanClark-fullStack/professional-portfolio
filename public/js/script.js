// var repoLink = 'https://github.com/IanClark-fullStack/muskytweets';
// var pageLink1 = 'https://ianclark-fullstack.github.io/muskytweets/';

// var repoLink2 = 'https://github.com/IanClark-fullStack/passwordGenerator';
// var pageLink2 = 'https://ianclark-fullstack.github.io/passwordGenerator/';

// var repoLink3 = 'https://github.com/IanClark-fullStack/workDayScheduler';
// var pageLink3 = 'https://ianclark-fullstack.github.io/workDayScheduler/';

// var repoArray =[repoLink, repoLink2, repoLink3];
// var linkArray = [pageLink1, pageLink2, pageLink3];

// var $customHover1 = $('#custom-hover1');
// var $customHover2 = $('#custom-hover2');
// var $customHover3 = $('#custom-hover3');
// var $visibleInfo1 = $('#visibleInfo1');
// var $visibleInfo2 = $('#visibleInfo2');
// var $visibleInfo3 = $('#visibleInfo3');
// var $hoverBox1 = $('#hover-box1');
// var $hoverBox2 = $('#hover-box2');
// var $hoverBox3 = $('#hover-box3');

// // Project 1 ID's
// var $projectUnderlay = $('#project-underlay');
// var $projectOverlay = $('#project-overlay');
// var projectTitle = $('#project-title');
// var projectLinks = $('#project-links');

// // Project 2 ID's
// var $projectUnderlay2 = $('#project-underlay2');
// var $projectOverlay2 = $('#project-overlay2');
// var projectTitle2 = $('#project-title2');
// var projectLink2 = $('#project-link2');

// // Project 3 ID's
// var info1 = $('#info1');
// var info2 = $('#info2');
// var info3 = $('#info3');

// var $projectUnderlay3 = $('#project-underlay3');
// var $projectOverlay3 = $('#project-overlay3');
// var projectTitle3 = $('#project-title3');
// var projectLink3 = $('#project-link3');



// var $customSection1 = $(('<h4 class="text-xl md:text-3xl mt-4 block">News / Stock Api</h4>' +
// '<ul class="leading-loose">' +
//     '<li id="custom-page">' + 
//     '<a href="https://ianclark-fullstack.github.io/muskytweets/">See the Live Page</a>' + 
//     '</li>' +
//     '<li id="custom-repo">' + 
//         '<a href="https://github.com/IanClark-fullStack/muskytweets">gitHub Repository</a>' +
//     '</li>' +
// '</ul>'
// ));
// var $customSection2 = $(('<h4 class="text-xl md:text-3xl mt-4 block">Local Storage Todo</h4>' +
// '<ul class="leading-loose">' +
//     '<li id="custom-page">' + 
//     '<a href="https://ianclark-fullstack.github.io/workDayScheduler/">See the Live Page</a>' + 
//     '</li>' +
//     '<li id="custom-repo">' + 
//         '<a href="https://github.com/IanClark-fullStack/workDayScheduler/">gitHub Repository</a>' +
//     '</li>' +
// '</ul>'
// ));
// var $customSection3 = $(('<h4 class="text-xl md:text-3xl mt-4 block">Password Generator</h4>' +
// '<ul class="leading-loose">' +
//     '<li id="custom-page">' + 
//     '<a href="https://ianclark-fullstack.github.io/passwordGenerator/">See the Live Page</a>' + 
//     '</li>' +
//     '<li id="custom-repo">' + 
//         '<a href="https://github.com/IanClark-fullStack/passwordGenerator">gitHub Repository</a>' +
//     '</li>' +
// '</ul>'
// ));

// var $repoLink = $('<a>');
// $repoLink.attr('href', 'https://ianclark-fullstack.github.io/muskytweets/');
// $repoLink.text('check the live repo');
// var projectHover = $('#projectHover');
// $projectUnderlay.hover(
//     function() {
//         // Project 1
//         $projectUnderlay.attr('class', 'w-3/5 bg-bright border-2 border-blue ml-5');
//         $projectOverlay.attr('class', 'mx-auto h-28 md:h-44 bg-cover bg-center bg-blue bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-3');
//         info1.attr('class', 'block');
//     }, function() {
//         $projectUnderlay.attr('class', 'w-3/5 bg-blue border-2 border-bright ml-5');
//         $projectOverlay.attr('class', 'mx-auto h-28 md:h-44 bg-cover bg-center bg-muskyTweets-pattern bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-3');
//         info1.attr('class', 'hidden');
//     }
// );
// $projectUnderlay2.hover(
//     function() {
//         // Project 2
//         $projectUnderlay2.attr('class', 'w-2/5 bg-bright border-2 border-blue');
//         $projectOverlay2.attr('class', 'mx-auto h-28 md:h-44 bg-cover bg-center bg-blue bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-3');
//         info2.attr('class', 'block');
//     }, function() {
//         $projectUnderlay2.attr('class', 'w-2/5 bg-blue border-2 border-bright');
//         $projectOverlay2.attr('class', 'mx-auto h-28 md:h-44 bg-cover bg-center bg-password-Pattern bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-3');
//         info2.attr('class', 'hidden');
//     }
// );
// $projectUnderlay3.hover(
//     function() {
//         // Project 3
//         $projectUnderlay3.attr('class', 'w-2/5 bg-bright border-2 border-blue ml-5');
//         $projectOverlay3.attr('class', 'mx-auto h-28 md:h-44 bg-cover bg-blue border-2 border-blue transform -translate-x-2 -translate-y-3');
//         info3.attr('class', 'block');
//     }, function() {
//         $repoLink.attr('class', 'hidden');
//         $projectUnderlay3.attr('class', 'w-2/5 bg-blue border-2 border-bright ml-5');
//         $projectOverlay3.attr('class', 'mx-auto h-28 md:h-44 bg-cover bg-center bg-todo-pattern bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-3');
//         info3.attr('class', 'hidden');
//     }
// );


// $customHover1.attr('class', 'w-1/2');
// var $repoLink = $('<a>');
// $repoLink.attr('href', 'https://ianclark-fullstack.github.io/muskytweets/');
// $repoLink.text('check the live repo');
// $customHover1.hover(
//     function() {
//         $repoLink.attr('class', 'block');
//         $customHover1.append($repoLink);
//     }, function() {
//         $repoLink.attr('class', 'hidden');
//     }
// );


// $visibleInfo1.hover(
//     function() {
//         $visibleInfo1.attr('class', 'bg-blue h-28 md:h-44 text-sm md:text-lg text-white');
//         $customHover1.append($repoLink);
//         $hoverBox1.attr('style', 'box-shadow: 8px 8px #ff0078; border: 2px solid #291aeb;');
//         $visibleInfo1.append($customSection1);
//     }, function() {
//         $visibleInfo1.attr('class', 'bg-cover bg-center bg-muskyTweets-pattern bg-no-repeat h-28 md:h-44');
//         $hoverBox1.attr('style', 'box-shadow: 8px 8px #291aeb; border: 2px solid #291aeb;');
//         $visibleInfo1.empty($customSection1);
//         $repoLink.attr('class', 'hidden');
//     }

    
// );
// $visibleInfo2.hover(
//     function() {
//         $visibleInfo2.attr('class', 'bg-blue h-28 md:h-44 text-lg text-white');
//         $customHover2.append($repoLink);
//         $hoverBox2.attr('style', 'box-shadow: 8px 8px #ff0078; border: 2px solid #291aeb;');
//         $visibleInfo2.append($customSection2);
//     }, function() {
//         $visibleInfo2.attr('class', 'bg-cover bg-center bg-todo-pattern bg-no-repeat h-28 md:h-44');
//         $hoverBox2.attr('style', 'box-shadow: 8px 8px #291aeb; border: 2px solid #291aeb;');
//         $visibleInfo2.empty($customSection2);
//         $repoLink.attr('class', 'hidden');
//     }

    
// );
// $visibleInfo3.hover(
//     function() {
//         $visibleInfo3.attr('class', 'bg-blue h-28 md:h-44  text-lg text-white');
//         $customHover3.append($repoLink);
//         $hoverBox3.attr('style', 'box-shadow: 8px 8px #ff0078; border: 2px solid #291aeb;');
//         $visibleInfo3.append($customSection3);
//     }, function() {
//         $visibleInfo3.attr('class', 'bg-cover bg-center bg-password-Pattern  bg-no-repeat h-28 md:h-44');
//         $hoverBox3.attr('style', 'box-shadow: 8px 8px #291aeb; border: 2px solid #291aeb;');
//         $visibleInfo3.empty($customSection3);
//         $repoLink.attr('class', 'hidden');
//     }

    
// );


