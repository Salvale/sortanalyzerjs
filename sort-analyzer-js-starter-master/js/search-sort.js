// Library of Sort Functions
// Put your sort function solutions here...

// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    for (let numCompares = anArray.length - 1; numCompares >= 1; numCompares--) {
        for (a = 0; a < numCompares; a++) {
            if (anArray[a] > anArray[a+1]) {
                newe = anArray[a];
                anArray[a] = anArray[a+1];
                anArray[a+1] = newe;
            }
        }
    }
 
}
//rand = 334.24999999988360 ms
//reve = 259.28999998723157 ms
//near = 175.36500000278465 ms
//uniq = 173.62000000139233 ms


// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
    for(let i = 0; i < anArray.length - 1; i++) {
        let min = i;
        for(let a = i + 1; a < anArray.length; a++) {
            if(anArray[a] < anArray[min]) {
                min = a;
            }
        }
        if (min != i) {
            let e = anArray[i];
            anArray[i] = anArray[min];
            anArray[min] = e;
        }
    }
}
//rand = 100.57999999844469 ms
//reve =  99.78499999851920 ms
//near =  95.17000000050757 ms
//uniq = 109.73999999987427 ms

// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
    let n = anArray.length;
    for (let i = 1; i < n; i++) {
        let thisone = anArray[i];
        let a = i-1;
        while ((a > -1) && (thisone < anArray[a])) {
            anArray[a+1] = anArray[a];
            a--;
        }
    anArray[a+1] = thisone;
    }
}
//rand =  62.18999999691732 ms
//reve = 121.71500000113156 ms
//near =   3.31000000005588 ms
//uniq =   1.27500000246800 ms