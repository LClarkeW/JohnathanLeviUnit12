/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayEverything(inputId, outputId,output1Id,output2Id) {
    var outputText = "";
    var outputTextCO = "";
    var outputTextLine = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum.replace(/ /g, ""))
        outputText = "Your area code is " + areaCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    try {
        outputTextCO = "Your CO code is " + COC;
    }
    catch (error) {
        console.log(error.message);
        outputTextCO = error.message;


    try {
        outputTextLine = "Your Line code is " + line;
    }
    catch (error) {
        console.log(error.message);
        outputTextLine = error.message;

    }
}
        document.getElementById(outputId).innerHTML = outputText;
        document.getElementById(output2Id).innerHTML = outputTextLine;
        document.getElementById(output1Id).innerHTML = outputTextCO;
}

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

function between(string, start, end) {
    var startAt = string.indexOf(start);
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    return string.slice(startAt, endAt);
}

function getCOCode(phoneNum) {
    var COC;
    try {
        COC = between(phoneNum, ")", "-");
        COC = COC.trim();
        if (COC.length == 3 && Number(COC)) {
            return COC;
        }
        else {
            throw new Error("Invalid CO code: " + COC);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

function getLineCode(phoneNum) {
    var line;
    try {
        line = phoneNum.slice(9,15);
        line = line.trim();
        if (line.length == 3 && Number(line)) {
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

