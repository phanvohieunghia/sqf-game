export function isMetamask() { 
    if(window.ethereum) {
        return true;
    }
    else return false;
}