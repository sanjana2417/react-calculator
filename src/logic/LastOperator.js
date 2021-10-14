export default function LastOperator(string) {
    if(string[string.length - 1] === "/") {
        return true;
    }
    else if(string[string.length - 1] === "*") {
        return true;
    }
    else if(string[string.length - 1] === "-"){
        return true;
    }
    else if(string[string.length - 1] === "+"){
        return true;
    }
}