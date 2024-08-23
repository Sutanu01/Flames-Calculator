let nameTag1 = document.getElementById("nameA")
let nameTag2 = document.getElementById("nameB")
let calc = document.querySelector(".calc")
let output = document.getElementsByTagName("span")[0]
calc.addEventListener("click", () => {
    // console.log(name1.value,name2.value)
    let name1 = nameTag1.value.trim()
    let name2 = nameTag2.value.trim()
    if (name1 == "" && name2 == "")
        output.innerHTML = "Please Enter the names!"
    else if (name1 == "")
        output.innerHTML = "Please Enter your names!"
    else if (name2 == "")
        output.innerHTML = "Please Enter your partners names!"
    else {
        name1 = name1.split(" ")[0]
        name2 = name2.split(" ")[0]
        const flamesOrder = ['Friendship', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'];

        let cnt = 0;
        for (let i = 0; i < name1.length; i++) {
            if (name2.includes(name1[i])) {
                cnt++;
            }
        }
        
        let index = (name1.length + name2.length - 2 * cnt) % 6;
        output.innerHTML = `${flamesOrder[index]}`;

        // output.innerHTML=name1+name2
    }
})