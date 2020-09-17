var urlParams = new URLSearchParams(window.location.search);
var categoryMapping = {
    onlyFans: "Spends Money on OnlyFans",
    twitch: "Makes donations to female Twitch streamers",
    upvotes: "Upvotes women on Reddit",
    pandering: "Panders to a woman's every request",
    niceGuy: "Displays 'Nice Guy' traits"
};
var name = urlParams.get('name');
var convertedName = decodeURIComponent(name);
var simpScore = generateSimpScore();
var simpTable = generateSimpTable(simpScore);
var simpTotal = 0;

for (var key in simpScore)
{
    simpTotal = simpTotal + simpScore[key];
}

$(document).ready(function ()
{
    $("#header").text(`${convertedName}, you are a simp!`);
    $("#simp-total-header").append(`<span>Your Simp Score is: </span>${simpTotal}`);
    $("#simp-score").append(simpTable);
});


function generateSimpScore()
{
    var score = {};

    score.onlyFans = Math.round((Math.random() * 100) + 20);
    score.twitch = Math.round((Math.random() * 100) + 20);
    score.upvotes = Math.round((Math.random() * 100) + 20);
    score.pandering = Math.round((Math.random() * 100) + 20);
    score.niceGuy = Math.round((Math.random() * 100) + 20);

    return score;
}

function generateSimpTable(simpScore)
{
    var tableString = "";

    for (var key in simpScore)
    {
        tableString += `<div class="scoring-category"><span>${categoryMapping[key]}</span><div class="percentage-bar"><div style="width:${simpScore[key]}%"></div></div></div>`;
    }

    return tableString;
}