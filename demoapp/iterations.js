const salaries = [2000, 4000, 5000, 6000];

/*newSalaries
 [
    {salary:2000},
{salary:4000},
{salary:5000},
{salary:6000}]
*/
//var newSalaries =[]
// for(var i=0;i<salaries.length;i++){
//     newSalaries[i] ={salary:salaries[i]}
// }
var newSalaries =salaries.map((item,index)=>{
    return {salary:item,index:index}
})
console.log(newSalaries);