let count = 0


function increment() {
    count += 1
    document.getElementById("count-el").textContent = count
}

function save() {
    let str = ' ' + count + ' -'
    document.getElementById("save-el").textContent += str
    count = 0
    document.getElementById("count-el").textContent = count
}