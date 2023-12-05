fetch("./input.txt").then((r) => r.text()).then((input) => {
    const lines = (input.split("\n"));
    let sum = 0;
    for (let i = 0; i < lines.length; i++) {
        let start = 0;
        let end = 0;
        let replacenum1 = lines[i].replace("one", "1");
        let replacenum2 = replacenum1.replace("two", "2");
        let replacenum3 = replacenum2.replace("three", "3");
        let replacenum4 = replacenum3.replace("four", "4");
        let replacenum5 = replacenum4.replace("five", "5");
        let replacenum6 = replacenum5.replace("six", "6");
        let replacenum7 = replacenum6.replace("seven", "7");
        let replacenum8 = replacenum7.replace("eight", "8");
        let replacenumfinal = replacenum8.replace("nine", "9");
        
        for (let y = 0; y < replacenumfinal.length; y++) {
            if (numbercheck(lines[i][y])) {
                end = lines[i][y];
                if (start == 0) {
                    start = lines[i][y];
                }
            }

        }
        sum += parseInt(start + end);
    }
    console.log(sum);
})

function numbercheck(c) {
    if (isNaN(parseInt(c))) {
        return false;  
    } 
    return true;
}