window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

const jsh1 = document.getElementById('jsh1');
const python = document.getElementById('python');
const javascript = document.getElementById('javascript');
const cs = document.getElementById('cs');
const pyh1 = document.getElementById('pyh1');
const pylist = document.getElementById('pylist');
const pyh4 = document.getElementById('pyh4');
const pyh5 = document.getElementById('pyh5');
const jslist = document.getElementById('jslist');
const jsh4 = document.getElementById('jsh4');
const jsh5 = document.getElementById('jsh5');
const csh1 = document.getElementById('csh1');
const cslist = document.getElementById('cslist');
const csh4 = document.getElementById('csh4');
const csh5 = document.getElementById('csh5');

const GreetingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const Greeting = document.querySelectorAll('.hidden');
Greeting.forEach((element) => {
    GreetingObserver.observe(element);
});

const myScrollFunc = function() {
    var y = window.scrollY;
    if (y > 20) {
      python.className = "proj-show"
      javascript.className = "proj-show"
      cs.className = "proj-show"
    } else {
      python.className = "proj-hidden"
      javascript.className = "proj-hidden"
      cs.className = "proj-hidden"
    }
  };
  
window.addEventListener("scroll", myScrollFunc);

var pythonclick = function() {
    pyh1.classList.toggle("proj-text-show");
    pyh4.classList.toggle("header-hide");
    pyh5.classList.toggle("header-hide");
    pylist.classList.toggle("list-items-show");
    
}

python.addEventListener("click", pythonclick); 


var javascriptclick = function() {
    jsh1.classList.toggle("proj-text-show");
    jsh4.classList.toggle("header-hide");
    jsh5.classList.toggle("header-hide");
    jslist.classList.toggle("list-items-show");
        
}

javascript.addEventListener("click", javascriptclick);

var csclick = function() {
    csh1.classList.toggle("proj-text-show");
    csh4.classList.toggle("header-hide");
    csh5.classList.toggle("header-hide");
    cslist.classList.toggle("list-items-show");
        
}

cs.addEventListener("click", csclick);
