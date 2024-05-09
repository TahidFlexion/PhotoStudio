var shadow = '0 20px 50px rgba(0,34,45,0.5)';
function animatePropertiesById(elementId, propertySets, duration) {
    var element = document.getElementById(elementId);
    var startTime = performance.now();
    var repeatCount = 0;
    var currentSetIndex = 0;

    console.log(elementId, startTime, repeatCount, currentSetIndex, element);
    function update() {
        var currentTime = performance.now();
        var elapsedTime = currentTime - startTime;
        var progress = Math.min(elapsedTime / duration, 1);

        var currentSet = propertySets[currentSetIndex];
        var startProps = currentSet[0];
        var endProps = currentSet[1];

        var interpolatedProps = {};
        for (var prop in startProps) {
            if (Object.prototype.hasOwnProperty.call(startProps, prop)) {
                interpolatedProps[prop] = startProps[prop] + (endProps[prop] - startProps[prop]) * progress;
            }
        }

        element.style.transform = 'translate3d(' + interpolatedProps.x + 'px, ' + interpolatedProps.y + 'px, ' + interpolatedProps.z + 'px)';
        element.style.opacity = interpolatedProps.opacity;
        element.style.boxShadow = interpolatedProps.boxShadow;

        if (progress === 1) {
            repeatCount++;
            startTime = performance.now();
            if (repeatCount === 3) {
                currentSetIndex++;
                repeatCount = 0;
                if (currentSetIndex === propertySets.length) {
                    currentSetIndex = 0;
                }
            }
        }

        requestAnimationFrame(update);
    }

    update();
}

function automatePropertyChanges() {

    var propertySetsFirst = [
        [
            { x: 0, y: 0, z: 0, opacity: 1, boxShadow: shadow },
            { x: 60, y: 50, z: -50, opacity: 0.6, boxShadow: 'none' }
        ],
        [
            { x: 60, y: 50, z: -50, opacity: 0.6, boxShadow: 'none' },
            { x: 110, y: 80, z: -60, opacity: 0.1, boxShadow: 'none' }
        ],
        [
            { x: 110, y: 80, z: -60, opacity: 0.1, boxShadow: 'none' },
            { x: 0, y: 0, z: 0, opacity: 1, boxShadow: shadow }
        ]
    ];

    var propertySetsSecond = [
        [
            { x: 60, y: 50, z: -50, opacity: 0.6, boxShadow: 'none' },
            { x: 110, y: 80, z: -60, opacity: 0.1, boxShadow: 'none' }
        ],
        [
            { x: 110, y: 80, z: -60, opacity: 0.1, boxShadow: 'none' },
            { x: 0, y: 0, z: 0, opacity: 1, boxShadow: shadow }
        ],
        [
            { x: 0, y: 0, z: 0, opacity: 1, boxShadow: shadow },
            { x: 60, y: 50, z: -50, opacity: 0.6, boxShadow: 'none' }
        ]
    ];

    var propertySetsThird = [
        [
            { x: 110, y: 80, z: -60, opacity: 0.1, boxShadow: 'none' },
            { x: 0, y: 0, z: 0, opacity: 1, boxShadow: shadow }
        ],
        [
            { x: 0, y: 0, z: 0, opacity: 1, boxShadow: shadow },
            { x: 60, y: 50, z: -50, opacity: 0.6, boxShadow: 'none' }
        ],
        [
            { x: 60, y: 50, z: -50, opacity: 0.6, boxShadow: 'none' },
            { x: 110, y: 80, z: -60, opacity: 0.1, boxShadow: 'none' }
        ]
    ];

    animatePropertiesById('first', propertySetsFirst, 1000); // Each animation cycle lasts for 5 seconds
    animatePropertiesById('second', propertySetsSecond, 1000); // Each animation cycle lasts for 5 seconds
    animatePropertiesById('third', propertySetsThird, 1000); // Each animation cycle lasts for 5 seconds
}
document.addEventListener('DOMContentLoaded', function () {
    automatePropertyChanges();
})