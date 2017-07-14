var BODY = "body";
var PAYMENT_BUTTON_SELECTOR = "#payment-button";
var TIME_SELECTOR = "#time";
var SETTINGS_SELECTOR = "#settings";
var TURN_SELECTOR = "#turn";
var PAYMENT_SELECTOR = "#payment";
var INPUT_NUMBER_SELECTOR = 'input[type="number"]';

var HEIGHT = "height";
var WIDTH = "width";
var COLOR = "color";
var BACKGROUND_COLOR = "background-color";
var BLACK = "black";
var GREY = "grey";
var RED = "red";
var WHITE = "white";
var YELLOW = "yellow";
var GREEN = "green";

var TURN_LIMIT = 60;
var PAYMENT_LIMIT = 25;
var ONE_SECOND = 1000;

var PAYMENT_TEXT = "Tap for rent timer";
var BACK_TEXT = "Back to turn";

var BEEP_AUDIO = new Audio("beep.wav");

var turn_time = TURN_LIMIT;
var payment_time = PAYMENT_LIMIT;
var in_payment = false;
var counterInterval;

function setOvertime(is_overtime) {
    $(TIME_SELECTOR).css(COLOR, is_overtime ? RED : WHITE);
}

function setPayment(is_payment) {
    // Reset interval to avoid clipped seconds.
    clearInterval(counterInterval);
    counterInterval = setInterval(decrement, ONE_SECOND);
    var current_time = is_payment ? payment_time : turn_time;
    $(TIME_SELECTOR).text(current_time.toString());
    setOvertime(current_time <= 0);

    $(PAYMENT_BUTTON_SELECTOR).text(is_payment ? BACK_TEXT : PAYMENT_TEXT);
    $(PAYMENT_BUTTON_SELECTOR).css(BACKGROUND_COLOR, is_payment ?
            GREEN : YELLOW);
    payment_time = PAYMENT_LIMIT;
    in_payment = is_payment;
}

function togglePayment(e) {
    setPayment(!in_payment);
}

function decrement() {
    var current_time;
    if (in_payment) {
        payment_time -= 1;
        current_time = payment_time;
    }
    else {
        turn_time -= 1;
        current_time = turn_time;
    }
    $(TIME_SELECTOR).text(current_time.toString());
    setOvertime(current_time <= 0);
}

function nextTurn() {
    // Reset interval to avoid clipped seconds.
    clearInterval(counterInterval);
    counterInterval = setInterval(decrement, ONE_SECOND);
    turn_time = TURN_LIMIT;
    $(TIME_SELECTOR).text(turn_time.toString());
    setOvertime(false);
    setPayment(false);
    BEEP_AUDIO.play();
}

function changeSettings() {
    TURN_LIMIT = $(TURN_SELECTOR).val();
    PAYMENT_LIMIT = $(PAYMENT_SELECTOR).val();
    nextTurn();
    return false;
}

$(BODY).css("margin", "0").css(BACKGROUND_COLOR, BLACK).css(COLOR, WHITE)
        .css("font-family", "Arial").css("text-align", "center")
        .css("overflow", "hidden");
$(PAYMENT_BUTTON_SELECTOR).css(HEIGHT, "25vh").css(BACKGROUND_COLOR, YELLOW)
        .css(COLOR, BLACK).css("font-size", "7vh").css("line-height", "25vh")
        .text(PAYMENT_TEXT);
$(TIME_SELECTOR).css(HEIGHT, "60vh").css("font-size", "40vh").text(TURN_LIMIT);
$(SETTINGS_SELECTOR).css(HEIGHT, "5vh").css(BACKGROUND_COLOR, GREY);
$(INPUT_NUMBER_SELECTOR).css(WIDTH, "3em");

counterInterval = setInterval(decrement, ONE_SECOND);
$(TIME_SELECTOR).click(nextTurn);
$(PAYMENT_BUTTON_SELECTOR).click(togglePayment);
$(SETTINGS_SELECTOR).submit(changeSettings);
