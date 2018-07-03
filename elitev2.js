var inquirer = require("inquirer");
var starter = "You are an independent pilot in the year 3300. You are currently at the station Trevithic Dock in the system LHS 3447, with your trusty Sidewinder. Become Elite. ";
console.log(starter);
var character = {
    credits: 10000,
    alignment: "none",
    pledged: "none",
    ships: [sidewinder],
    cargo: "none",
}
var sidewinder = {
    speed: 100,
    hull: 100,
    attack: 100,
}

inquirer.prompt([
    {
        name: "align",
        type: "list",
        choices: ["Empire", "Federation", "Independent", "Alliance"],
    }
]).then(function(align){
    if (align.align === "Empire"){
        console.log("Aligned with Empire");
        character.alignment = "Empire";
    }
    else if (align.align === "Federation"){
        console.log("Aligned with Federation");
        character.alignment = "Federation";
    }
    else if (align.align === "Independent"){
        console.log("Not aligned");
        character.alignment = "None";
    }
    else if (align.align === "Alliance"){
        console.log("Aligned with the Alliance");
        character.alignment = "Alliance";
    }
    else{
        console.log("Xeno Scum");
    }
    console.log(character.alignment);
    if (character.alignment === "Empire"){
        inquirer.prompt([
            {
                name: "power",
                type: "list",
                message: "Who would you like to pledge to?",
                choices: ["A Lavigny-Duval","Aisling Duval","Zemina Torval", "Denton Patreus"],
            }
        ]).then(function(power){
            character.pledged = power.power;
            if (character.pledged === "A Lavigny-Duval") {
                console.log("The Princess");
            }
            else if (character.pledged === "Aisling Duval") {
                console.log("The Empress");
            }
            else if (character.pledged === "Denton Patreus") {
                console.log("The Senator");
            }
            else if (character.pledged === "Zemina Torval") {
                console.log("Whoever the fuck that is");
            }
            else {
                console.log("Error");
            }
        });
    }
    else if (character.alignment === "Federation") {
        inquirer.prompt([
            {
                name: "power",
                type: "list",
                message: "Who would you like to pledge to?",
                choices: ["Felicia Winters", "Zachary Hudson"]
            }
        ]).then(function(power){
            character.pledged = power.power;
            if (character.pledged === "Felicia Winters"){
                console.log("The Shadow President");
            }
            else if (character.pledged === "Zachary Hudson"){
                console.log("The President");
            }
            else {
                console.log("error");
            }
        });
    }
    else if (character.alignment === "Alliance"){
        console.log("Pledged to Edmund Mahon");
    }
    else if (character.alignment === "Independent"){
        inquirer.prompt([
            {
                name: "power",
                type: "list",
                message: "Who would you like to pledge to?",
                choices: ["Li Yong-Rui", "Archon Delaine", "Pranav Antal", "None"]
            }
        ]).then(function(power){
            character.pledged = power.power;
            if (character.pledged === "Li Yong-Rui"){
                console.log("The Scientist");
            }
            else if (character.pledged === "Archon Delaine"){
                console.log("The Fighter");
            }
            else if (character.pledged === "Pranav Antal"){
                console.log("The Utopian");
            }
            else if (character.pledged === "None"){
                console.log("Fine, fucking pacafist");
            }
            else{
                console.log("Shit went wrong");
            }
        });
    }
    //End of creation
});

var start = function(){
    inquirer.prompt([
        {
        name: "action",
        message: "What would you like to do?",
        type: "list",
        choices: ["leave", "commodities", "ships"]
        }
    ]).then(function(action){
        if (action.action === "leave"){
            console.log("leave function goes here");
        }
        else if (action.action === "commodities"){
            console.log("market function goes here");
        }
        else if (action.action === "ships"){
            console.log("ship bay, buy, sell, swap");
        }
    });
}