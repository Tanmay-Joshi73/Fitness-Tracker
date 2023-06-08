const BMI_Value=document.getElementById('BMI')
const BodyFatValue=document.getElementById('BodyFat')
const BodyWaterValue=document.getElementById('BodyWater')
const LeanBodyMass=document.getElementById('LBM')
const BMR_Value=document.getElementById('BMR')
const MuscleRate=document.getElementById('MuscleRate')
const MuscleMass=document.getElementById('MuscleMass')
const BoneMass=document.getElementById('BoneMass')
const AgeValue=document.getElementById('Input_Box')
const HeightValue=document.getElementById('HeightInput')
const WeightValue=document.getElementById('WeightInput')
let Gender
let BMI
let age
let BF
let BMR
let LBM_Value
let MuscleMass_Value
let bodyFat
// let value
// let value1
// let value2
         const Calculate=()=>{
             age = parseInt(AgeValue.value, 10);
                        //For Checking the age range
             if (!AgeValue.validity.valid) {
                alert('Input value must be between 0 and 100.')
                    return
            }
              


          
              if(MaleRadio.checked) Gender=0 ,value=0.407,value1=0.267,value2=19.2
              else if(FemaleRadio.checked) Gender=1, value=0.252,value1=0.473,value2=48.3
             
              BMI_Calculation()  
              BodyFat()
              LBM()
              BodyWater()
              BMRCalculation()
              MuscleMassCalculation()
            
    }   


         const BMI_Calculation=()=>{
             const weight = parseFloat(WeightValue.value); // weight in kilograms
             const height = (parseFloat(HeightValue.value)/100); // height in meters
        
              BMI = weight / (height * height);
                if(!isNaN(BMI))  BMI_Value.innerText=`${BMI.toFixed(2)}`

                

            
    }
        


        const BodyFat=()=>{
            
            const bmi = parseFloat(BMI);
            if(!isNaN(bmi)){
            //At reserach Paper Value Assined for a men =0  but if we use men =0 calculation goes wrong
                // const GenderMale=1
             if (Gender === 0) {
            bodyFat = -44.988 + (0.503 * age) + (10.689 * 1) + (3.172 * bmi) - (0.026 * (bmi * bmi)) + (0.181 * bmi * 1) - (0.02 * bmi * age) - (0.005 * (bmi * bmi) * 1) + (0.00021 * (bmi * bmi) * age);           
             }
             else{
                bodyFat = -44.988 + (0.503 * age) + (10.689 * 0) + (3.172 * bmi) - (0.026 * (bmi * bmi)) + (0.181 * bmi * 0) - (0.02 * bmi * age) - (0.005 * (bmi * bmi) * 0) + (0.00021 * (bmi * bmi) * age);           
             }
            BodyFatValue.innerText=`${bodyFat.toFixed(2)}`   
     }
    }


         const LBM=()=>{
            // const LeanBodyMass_Value=value*WeightValue.value+value1*HeightValue.value-value2
            // console.log(LeanBodyMass_Value)
            if (Gender === 0) {
                LBM_Value = (0.407 * WeightValue.value) + (0.267 * HeightValue.value) - 19.2;
              } else if (Gender === 1) {
                LBM_Value = (0.252 * WeightValue.value) + (0.473 * HeightValue.value) - 48.3;
              }
              LeanBodyMass.innerText=`${LBM_Value.toFixed(2)}`
     }


         const BodyWater=()=>{
            if (Gender === 0) {
               BF=2.447 - 0.09156 * age +0.1074 *HeightValue.value + 0.3362* WeightValue.value
              } else if (Gender === 1) {
               BF=-2.097 +0.1069 *HeightValue.value +0.2466 * WeightValue.value
              }
              BodyWaterValue.innerText=`${BF.toFixed(2)}`
     }


        const BMRCalculation=()=>{
            if (Gender === 0) {
               BMR=88.362 + (13.397*WeightValue.value) + (4.799*HeightValue.value) - (5.677*age)
               } else if (Gender === 1) {
                BMR=447.593 + (9.247*WeightValue.value) + (3.098*HeightValue.value) - (4.330*age)
               }
               BMR_Value.innerText=`${BMR.toFixed(2)}`
        }


        const MuscleMassCalculation=()=>{

            if (Gender === 0) { ///Here In THe Lee Equation Value for Male is 1
                MuscleMass_Value= 0.567 * WeightValue.value - 0.037 * age + 0.046 * HeightValue.value + 6.1 * 1 - 1.91
                }
                 else if (Gender === 1) { /// Here Value For Female is 0
                MuscleMass_Value= 0.567 * WeightValue.value - 0.037 * age + 0.046 * HeightValue.value + 6.1 * 0 - 1.91   
            }
                MuscleMass.innerText=`${MuscleMass_Value.toFixed(2)}`
         }

          
           

        

        Calculate();




