// document.addEventListener("DOMContentLoaded", function() {
//     const volumeSlider = document.getElementById("volumeSlider");
//     const muteButton = document.getElementById("muteButton");

//     volumeSlider.addEventListener("input", function() {
//         updateVolume(volumeSlider.value);
//     });

//     muteButton.addEventListener("click", function() {
//         toggleMute();
//     });

//     function updateVolume(volume) {
//         // You can use this function to update the volume based on the slider value.
//         // Implement your volume control logic here.
//         console.log("Volume:", volume);
//     }

//     function toggleMute() {
//         // Implement your mute/unmute logic here.
//         console.log("Mute/Unmute");
//     }
// });
const bars = document.querySelectorAll('.bar');

    gsap.set(bars, { scaleY: 0.2 });

    function animateBar(bar) {
      gsap.to(bar, {
        scaleY: Math.random() * 2.5 + 0.5,
        transformOrigin: 'bottom',
        duration: 0.3 + Math.random() * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: Math.random() * 0.1,
        onComplete: () => {
          animateBar(bar);
        }
      });
    }

    bars.forEach(bar => {
      animateBar(bar);
    });