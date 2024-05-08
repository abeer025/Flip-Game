/* Flip Game  */
var gameGreeting = "Welcome to Flip Master!";
var gameRules = "You have 3 attempt to flip on any box you want and get Diamond"
Swal.fire(gameGreeting,gameRules);
var img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPCelOBrmKgV3rfVHhf9YNzurlsan7OAoBC-208hDcg&s"; //cross img
var img2 = "https://imageio.forbes.com/specials-images/imageserve/63bc44d04f40912057eb4f4e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"; //diamond
var count = 0;
function flip(elem, diamond) {
        if (count < 3) {
                if (diamond == "yes") {
                        elem.src = img1;
                } else {
                        elem.src = img2;
                        Swal.fire("Congratulation You Won! ")
                }
                count++;
        } else {
                alert("3 attempted try agin later!")
        }
}
