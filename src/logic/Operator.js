export default function Operator(buttonName) {
    if(buttonName === "/") {
        return true;
    }
    else if (buttonName === "x") {
        return true;
    }
    else if (buttonName === "-") {
        return true;
    }
    else if (buttonName === "+") {
        return true;
    }
    else {
        return false;
    }
}