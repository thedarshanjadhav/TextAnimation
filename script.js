let textArray = ['Developer', 'Coder', 'Programmer'];


function animateText(index) {
    let textContainer = document.getElementById('ani-text');
    var currentText = textArray[index];
    var currentPosition = 0;

    var interval = setInterval(function () {
        textContainer.textContent += currentText[currentPosition];
        currentPosition++;

        if (currentPosition === currentText.length) {
            clearInterval(interval);

            setTimeout(function () {
                hideText();
            }, 1000);
        }
    }, 100);

    function hideText() {
        var hideInterval = setInterval(function () {
            currentPosition--;

            var displayedText = currentText.substring(0, currentPosition);
            textContainer.textContent = displayedText;

            if (currentPosition === 0) {
                clearInterval(hideInterval);
                setTimeout(function () {
                    textContainer.textContent = ""; // Clear the container
                    var nextIndex = (index + 1) % textArray.length;
                    animateText(nextIndex);
                }, 1000);
            }
        }, 100);
    }
};

animateText(0);