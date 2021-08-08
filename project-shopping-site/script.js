var shoes = 0,
    tShirt = 0,
    umbr = 0;

function addToCart(clicked_id) {
    console.log("hello");
    switch (clicked_id) {
        case "p1":
            shoes++;
            break;
        case "p2":
            tShirt++;
            break;
        case "p3":
            umbr++;
            break;
    }
    console.log(shoes + tShirt + umbr);
    // x=$("p1");
    console.log(this);
}
// console.log(this);