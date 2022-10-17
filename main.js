let lab1= [5, 5, 5, 5, 10, 10]; // array of scores for lab1
let lab2= [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 5]; // array of scores for lab2
let lab3= [5, 10, 10, 15]; // array of scores for lab3
let lab4_5= [10, 5, 3, 5, 5,5, 10, 10, 10, 10, 4]; // array of scores for lab4&5
let lab6= [5, 5, 10 ,5, 5, 10]; // array of scores for lab6

let quiz1= [26]; // score of quiz 1

let sum1 = lab1[0] + lab1[1] + lab1[2]+ lab1[3] + lab1[4] + lab1[5];  //array of sums of  lab1
let sum2 = lab2[0] + lab2[1] + lab2[2]+ lab2[3] + lab2[4] + lab2[5] + lab2[6]; //array of sums of  lab2
let sum3 = lab3[0] + lab3[1] + lab3[2]+ lab3[3]; //array of sums of  lab3
let sum4_5 = lab4_5[0] + lab4_5[1] + lab4_5[2]+ lab4_5[3] + lab4_5[4] + lab4_5[5] + lab4_5[6] + lab4_5[7] + lab4_5[8] + lab4_5[9]+ lab4_5[10]; //array of sums of  lab4&5
let sum6 = lab6[0] + lab6[1] + lab6 [2]+ lab6[3] + lab6[4] + lab6[5]; //array of sums of  lab6
let sums = [sum1, sum2, sum3, sum4_5, sum6]; // sum of all labs
let sumtotal= sums[0]+sums[1]+sums[2]+sums[3]+sums[4];

total_score= sumtotal/6*0.6*2.5+quiz1; // computed total score


const results = {
lab1:lab1, // array of scores for lab1
lab2:lab2, // array of scores for lab2
lab3:lab3, // array of scores for lab3
lab4_5:lab4_5, // array of scores for lab4 and 5
lab6:lab6, // array of scores for lab6
quiz1:quiz1 , // score of quiz1
sums:[sum1,sum2,sum3,sum4_5,sum6],
sumtotal:sumtotal, // array of sums of each lab
total_score: total_score, // computed total score
};

console.log(results)

 







