class ClassPlanner {
  constructor() {
      this.classes = {

          engineering: [
        { name: 'Chemistry', prerequisites: ['Algebra II'] },
        { name: 'AP Computer Science A', prerequisites: ['Algebra II'] },

        { name: 'AP Chemistry', prerequisites: ['AP Physics 1'] },
        { name: 'AP Statistics', prerequisites: ['Pre-Calculus'] }
          ],
          biology: [
          {name: 'Biology' },
          {name: 'Chemistry'},
          {name: 'AP Biology'},
          {name: 'AP Chemistry'},
          {name: 'Principles of Biomedical Sciences'},
          {name: 'Human Body Systems'},
          {name: 'Medical Interventions'}
          ],
          business:[
          {name: 'Biology'},
          {name: 'Integrated Marketing Communication'},
          {name: 'Sports/Entertainment Marketing'},
          {name: 'Economics Of Business Ownership'}
          ],
          undecided: [ 
            {name: 'Elective #1'},
            {name: 'Elective #2'},
            {name: 'Elective #4'},
            {name: 'Elective #5'}
          ]

      };

this.freshMath = ["Math-8","Algebra I","Geometry","Algebra II", "Precalculus","Calculus", "AP Calculus AB", "AP Calculus BC"];


  }


  getUserPreferences() {
    const majorSelect = document.getElementById('major-select');
    const mathCourse = document.querySelector('input[name="math-course"]:checked').value;
    const difficultySlider = document.getElementById('difficulty-slider');
  
    return {
      major: majorSelect.value,
      mathCourse: mathCourse,
      difficulty: difficultySlider.value,
      
    };
  }



    generateFourYearPlan(preferences) {
      var mathPoint;
    
      if(preferences.mathCourse=="math-8"){
        mathPoint = 0;
      }
      else if(preferences.mathCourse =="algebra-1"){
        mathPoint = 1;
      }
      else{
        mathPoint = 2;
      }






      const plan = [];

      for (let i = 0; i < 4; i++) {
        const year = {
          grade: "",
          classes: [],
        };
          const math = {
                name: "" ,
          };
        switch (i) {
          case 0:
            math.name = this.freshMath[i+mathPoint+1];
            if(preferences.difficulty!=0 && (i+mathPoint+1)!=1){
               math.name = 'Honors '+this.freshMath[i+mathPoint+1];
             }
            year.grade = "Freshman";
            if(preferences.difficulty==0){
            year.classes.push({ name: "Freshman English" });
            year.classes.push({ name: "Global Studies / Health"});
          
            }

            else{
            year.classes.push({ name: "Honors Freshman English" });
            year.classes.push({ name: "Honors Global Studies / Health"});
            }
            if(preferences.major != "engineering"){
              year.classes.push({ name: "Japanese I"});
            }
            if(preferences.major == "engineering"){
              year.classes.push({ name: "Introduction to Engineering"});
             
            }
      
            year.classes.push({ name: "Physical Education" });
            year.classes.push({ name: Object.values(math) });

             




            break;
          case 1:
            math.name = this.freshMath[i+mathPoint+1];
            if(preferences.difficulty!=0){
            math.name = 'Honors '+this.freshMath[i+mathPoint+1];
            }
            year.grade = "Sophomore";
            if(preferences.difficulty == 0){
            year.classes.push({ name: "Sophomore English"});
            year.classes.push({ name: "World History" });


            }
            else if(preferences.difficulty==1){
              year.classes.push({name: "Honors Sophmore English"});
              year.classes.push({name: "World History" });


            }
            else{
              year.classes.push({name: "Honors Sophmore English"});
              year.classes.push ({name: "AP World History"});


            }

            if(preferences.major == "engineering" && preferences.difficulty == 0){
              year.classes.push({ name: "Principles of Engineering"});
              year.classes.push({ name: "Japanese I"});
            }
            if(preferences.major == "engineering" && preferences.difficulty == 1){
              year.classes.push({ name: "Honors Principles of Engineering"});
              year.classes.push({ name: "Japanese I"});
            }
            if(preferences.major == "engineering" && preferences.difficulty == 2){
              year.classes.push({ name: "Honors Principles of Engineering"});
              year.classes.push({ name: "Japanese I"});
            }
           if(preferences.major != "engineering"){
            year.classes.push({ name: "Japanese II"});
           }
            year.classes.push({name:Object.values(math)});
            year.classes.push({name: "Physical Education"})
          
           

            break;
          case 2:
            math.name = this.freshMath[i+mathPoint+1];
              if(i+mathPoint+1==5){
                if(preferences.difficulty==0){
                  math.name = this.freshMath[i+mathPoint+1];
                }
                if(preferences.difficulty==1){
                  math.name = this.freshMath[i+mathPoint+2];
                }
                if(preferences.difficulty==2){
                  math.name = this.freshMath[i+mathPoint+3];
                }

              }
              else{
                if(preferences.difficulty!=0){
                  math.name = 'Honors '+this.freshMath[i+mathPoint+1];
                }
              }
                year.grade = "Junior";
            if(preferences.difficulty == 0){
              year.classes.push({ name: "Junior English"});
              year.classes.push({ name: "World History" });


              }
              else if(preferences.difficulty==1){
                year.classes.push({name: "AP English Language"});
                year.classes.push({name: "United States History" });

              }
              else{
                year.classes.push({name: "AP English Language"});
                year.classes.push ({name: "AP United States History"});
              }
              if(preferences.major == "engineering"){
                year.classes.push({ name: "Digital Electronics"});
                year.classes.push({ name: "Japanese II"});
              }
            else  {
              year.classes.push({ name: "Japanese III"});
              }
              if(preferences.major == "undecided"){
                year.classes.push ({name: "Elective #3"});
              }
              if(preferences.major == "business"){
                year.classes.push ({name: "AP Psychology"});
              }
              if(preferences.major == "biology"){
                year.classes.push ({name: "Physics"});
              }
              year.classes.push({name:Object.values(math)});
             



            break;
          case 3:
            math.name = this.freshMath[i+mathPoint+1];
              if(i+mathPoint+1==5){
                if(preferences.difficulty==0){
                  math.name = this.freshMath[i+mathPoint+1];
                }
                if(preferences.difficulty==1){
                  math.name = this.freshMath[i+mathPoint+2];
                }
                if(preferences.difficulty==2){
                  math.name = this.freshMath[i+mathPoint+3];
                }

              }
              else if(i+mathPoint+1==6){
                if(preferences.difficulty==0){
                  math.name = this.freshMath[i+mathPoint+1];
                }
                if(preferences.difficulty==1){
                  math.name = this.freshMath[i+mathPoint+2];
                }
                if(preferences.difficulty==2){
                  math.name = "Multivariable Calculus";
                }

              }
              else{
                if(preferences.difficulty!=0){
                   math.name = 'Honors '+this.freshMath[i+mathPoint+1];
                   }
              }
            year.grade = "Senior";
          if(preferences.difficulty == 0){
            year.classes.push({ name: "English Literature "});
            year.classes.push({ name: "Economics / Civics" });

            }
            else if(preferences.difficulty==1){
              year.classes.push({name: "English Literature"});
              year.classes.push({name: "AP Government / AP Macroeconomics" });

            }
            else{
              year.classes.push({name: "AP English Literature"});
              year.classes.push ({name: "AP Government / AP Macroeconmics"});
            }
            if(preferences.major == "engineering"){
              year.classes.push({ name: "Civil Engineering & Architecture"});
              year.classes.push({ name: "Japanese III"});
            }
            else{
              year.classes.push({ name: "AP Japanese IV"});
            }
            if(preferences.major == "business"){
              year.classes.push ({name: "Leadership"});
            }
            year.classes.push({name:Object.values(math)});
            

            break;
        }

        const remainingClasses = 6 - year.classes.length;

        for (let j = i; j < i+1; j++) {
          const elective = { name: "Elective" };

          if (i === 0 && j < 5) {
            elective.name =  this.classes[preferences.major][j].name;
          } else if (i > 0 && j < 5) {
            elective.name = this.classes[preferences.major][j].name;
          }
          

          if (!year.classes.some((course) => course.name === elective.name)) {
            year.classes.push(elective);
          } else {
            year.classes.push({ name: "Elective" });
          }
        }

        plan.push(year);
      }

      return plan;
    }





renderFourYearPlan(plan) {
const planContainer = document.querySelector('.four-year-plan');
planContainer.innerHTML = '';

plan.forEach(year => {
  const yearDiv = document.createElement('div');
  yearDiv.className = 'year';

  const gradeDiv = document.createElement('div');
  gradeDiv.className = 'grade';
  gradeDiv.textContent = year.grade;
  yearDiv.appendChild(gradeDiv);

  year.classes.forEach(course => {
    const classDiv = document.createElement('div');
    classDiv.className = 'class';
    classDiv.textContent = course.name;
    yearDiv.appendChild(classDiv);
  });

  planContainer.appendChild(yearDiv);
});
}



updateFourYearPlan(event) {
event.preventDefault();
const preferences = this.getUserPreferences();
const plan = this.generateFourYearPlan(preferences);
this.renderFourYearPlan(plan);
}



init() {

const form = document.querySelector('.selection-tool form');

form.addEventListener('submit', (event) => {

  event.preventDefault();

  const majorSelect = document.getElementById('major-select');
  const mathCourse = document.querySelector('input[name="math-course"]:checked');
  const difficultySlider = document.getElementById('difficulty-slider');
 
  // Check if the user has selected a math course, if not display an alert
  if (!mathCourse) {
    alert('Please select your current math course.');
    return;
  }

  const preferences = {
    major: majorSelect.value,
    mathCourse: mathCourse.value,
    difficulty: difficultySlider.value,
  
  };

  const plan = this.generateFourYearPlan(preferences);
  this.renderFourYearPlan(plan);
});
}


}

// Initialize
const app = new ClassPlanner();
app.init();














