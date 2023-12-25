

let news = [
{
    title : "1st news";
    description : "long news";
    publitionDate : "1/10/2023"; 
    author : "Johnnie"; 
    category : "Politics";
},
{
    title : "2nd news";
    description : "famous news";
    publitionDate : "1/4/2023";
    author : "David"; 
    category : "Economics";
},
{
    title : "3rd news";
    description : "short news";
    publitionDate : "1/3/2023";
    author : "Billy"; 
    category : "World news";
},
{
    title : "4th news";
    description : "hot news";
    publitionDate : "05/12/2022";
    author : "Emmie"; 
    category : "Humanity";
},
{
    title : "5st news";
    description : "high level news";
    publitionDate : "24/9/2021"; 
    author : "Jennie"; 
    category : "Technology";
},
{
    title : "6st news";
    description : "long news";
    publitionDate : "7/10/2023";
    author : "Johnnie"; 
    category : "Politics";
},
{
    title : "7nd news";
    description : "famous news";
    publitionDate : "3/4/2023";
    author : "David"; 
    category : "Economics";
},
{
    title : "8rd news";
    description : "short news";
    publitionDate : "1/3/2023";
    author : "Billy"; 
    category : "World news";
},
{
    title : "9th news";
    description : "hot news";
    publitionDate : "16/4/2021";
    author : "Emmie"; 
    category : "Humanity";
},
{
    title : "10st news";
    description : "high level news";
    publitionDate : "27/9/2021";
    author : "Jennie"; 
    category : "Technology";
}];
    // title : "1st news";
    // description : "long news";
    // publitionDate : "1/10/2023";
    // author : "Johnnie"; 
    // category : "Politics";

function sort(news) {
    let temp, sorted;
    for (let i=0; i<news.length; i++) {
        if (news[i].publitionDate > news[i+1].publitionDate) {
            temp = news[i];
            news[i].publitionDate = news[i+1].publitionDate;
            news[i+1].publitionDate = temp;
            sorted=true;
        }
    }
}

// console.log(Date());
// console.log(Date().toLocale)DateString()

let date = new Date().toLocaleDateString();
console.log(date);

filterByDate("last",5);
filterByAuthor();
filterByCategory();
