/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function getAreaCode(phoneNum) {
    var areaCode;
    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        }
        else {
            throw new Error("Invalid area code: " + areaCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

function displayAreaCode(inputId, outputId, output1Id, output2Id) {
    var outputTextArea = "";
    var outputTextCO = "";
    var outputTextLine = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputTextArea = "Your Area code is " + areaCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    try {
        var COCode = getCOCode(phoneNum);
        outputTextCO = "Your CO code is " + COCode;
    }
    catch (error) {
        console.log(error.message);
        outputTextCO = error.message;
    }
    try {
        var LineCode = getLineCode(phoneNum);
        outputTextLine = "Your Line code is " + LineCode;
    }
    catch (error) {
        console.log(error.message);
        outputTextLine = error.message;
    }
    document.getElementById(outputId).innerHTML = outputTextArea;
    document.getElementById(output1Id).innerHTML = outputTextCO;
    document.getElementById(output2Id).innerHTML = outputTextLine;
}

function between(string, start, end) {
    var startAt = string.indexOf(start);
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    return string.slice(startAt, endAt);
}

function getCOCode(phoneNum) {
    var CO;
    try {
        CO = between(phoneNum, ")", "-");
        CO = CO.trim();
        if (CO.length == 3 && Number(CO)) {
            return CO;
        }
        else {
            throw new Error("Invalid CO code: " + CO);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/*function displayCOCode(inputId, output1Id) {
    var outputTextCO = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var COCode = getCOCode(phoneNum);
        outputTextCO = "Your CO code is " + COC;
    }
    catch (error) {
        console.log(error.message);
        outputTextCO = error.message;
    }
    document.getElementById(output1Id).innerHTML = outputTextCO;
}
*/
function after(string, start) {
    var startAt = string.indexOf(start);
    startAt += start.length;
    return string.slice(startAt);
}

function getLineCode(phoneNum) {
    var line;
    try {
        line = phoneNum.slice(10, 15);
        line = line.trim();
        if (line.length == 4 && Number(line)) {
            return line;
        }
        else {
            throw new Error("Invalid line code: " + line);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
