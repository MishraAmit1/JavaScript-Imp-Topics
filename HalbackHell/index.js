const getStudentsData = () => {
    setTimeout(() => {
        setTimeout(() => {
            console.log("Hii 1");
            setTimeout(() => {
                console.log("Hii 2");
                setTimeout(() => {
                    console.log("Hii 3");
                }, 1000);
            }, 1000);
        }, 1);
    }, 1000);
}
getStudentsData();


// How to Solve Callback Hell?
// We can avoid Callback Hell using: