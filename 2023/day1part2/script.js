fetch("./input.txt").then((r) => r.text()).then((input) => {
    const lines = (input.split("\n"));
    let sum = 0;
    for (let i = 0; i < lines.length; i++) {
        let start = 0;
        let end = 0;
        
        lines[i] = lines[i].replaceAll("one", "o1e").replaceAll("two", "t2o").replaceAll("three", "t3e").replaceAll("four", "f4r").replaceAll("five", "f5e").replaceAll("six", "s6x").replaceAll("seven", "s7n").replaceAll("eight", "e8t").replaceAll("nine", "n9e");
        
        for (let y = 0; y < lines[i].length; y++) {
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