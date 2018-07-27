function mash(){
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!";
}
   
 console.log(mash());

 function getHome(){
     const decimal = Math.random();
     const times6 = decimal * 6;
     const final = Math.floor(times6);
     const houses = ["Mansion", "Apartment", "Shack", "House", "sidewalk", ];
    return houses[final]
}
   
getHome();

function getChildrenCount(){
    const decimal = Math.random();
    const times100 = decimal * 100;
    const final = Math.floor(times100);
return final
}

getChildrenCount();

//    let a = Math.ceil(min)
//    let b = Math.floor(max)
//    const final = Math.floor(Math.random() * (max - min) + min
//    return final

//    const a = process.argv[2]
//    console.log(results)


