let mobilenet;
let crocodile;

function modelReady() {
    console.log('Model is ready!')
    mobilenet.predict(crocodile, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        let label = results[0].className;
        fill(0);
        textSize(64);
        text(label, 10, height - 100);
    }
}

function imageReady() {
    image(crocodile, 0, 0, width, height);
}

function setup() {
    createCanvas(640, 480);
    crocodile = createImg('../images/crocodile.jpg');
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}