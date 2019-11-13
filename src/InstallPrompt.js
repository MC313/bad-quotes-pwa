import React from 'react';

const handleInstallPrompt = () => {

}

const InstallPrompt = ({ children }) => (
    <>
        {
            window.addEventListener("beforeinstallprompt", function (e) {
                // log the platforms provided as options in an install prompt 
                console.log(e.platforms); // e.g., ["web", "android", "windows"] 
                e.userChoice.then(function (choiceResult) {
                    console.log(choiceResult.outcome); // either "accepted" or "dismissed"
                }, (e) => console.error('There was an error', e));
            })
        }
        <div>
            Hello World
        </div>
        <div>{children}</div>
    </>
);

export default InstallPrompt;
// window.addEventListener("beforeinstallprompt", function(e) {
//     // log the platforms provided as options in an install prompt 
//     console.log(e.platforms); // e.g., ["web", "android", "windows"] 
//     e.userChoice.then(function(choiceResult) { 
//       console.log(choiceResult.outcome); // either "accepted" or "dismissed"
//     }, handleError); 
//   });