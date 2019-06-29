//Author: Robert Bedrosian
//Fibonacci Sequence with dynamic programming. We memoize every number in the
//sequence to reduce the loading time. Initially, loading times drastically
//increase after fibonacci(40). With Dynamic Programming, we can reach
//incredibly high values.
var arr = [-1,0,1];
function fibonacci(n){
    if(n < 1){
        return;
    }
    else if(n === 1){
        return 0;
    }
    else if(n === 2){
        return 1;
    }
    else if(arr[n]){
        return arr[n];
    }
    else{
        arr[n] = fibonacci(n-1) + fibonacci(n-2);
        return arr[n];
    }

}
console.log(fibonacci(200));