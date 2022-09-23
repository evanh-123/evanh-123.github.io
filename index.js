window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

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

python = document.getElementById('python');
javascript = document.getElementById('javascript');
cs = document.getElementById('cs');
var myScrollFunc = function() {
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
    var pyh1 = document.getElementById('pyh1');
    var pylist = document.getElementById('pylist');
    pyh1.classList.toggle("proj-text-show");
    var pyh4 = document.getElementById('pyh4');
    var pyh5 = document.getElementById('pyh5');
    pyh4.classList.toggle("header-hide");
    pyh5.classList.toggle("header-hide");
    pylist.classList.toggle("list-items-show");
    
}

python.addEventListener("click", pythonclick); 


var javascriptclick = function() {
    var jsh1 = document.getElementById('jsh1');
    var jslist = document.getElementById('jslist');
    jsh1.classList.toggle("proj-text-show");
    var jsh4 = document.getElementById('jsh4');
    var jsh5 = document.getElementById('jsh5');
    jsh4.classList.toggle("header-hide");
    jsh5.classList.toggle("header-hide");
    jslist.classList.toggle("list-items-show");
        
}

javascript.addEventListener("click", javascriptclick);

var csclick = function() {
    var csh1 = document.getElementById('csh1');
    var cslist = document.getElementById('cslist');
    csh1.classList.toggle("proj-text-show");
    var csh4 = document.getElementById('csh4');
    var csh5 = document.getElementById('csh5');
    csh4.classList.toggle("header-hide");
    csh5.classList.toggle("header-hide");
    cslist.classList.toggle("list-items-show");
        
}

cs.addEventListener("click", csclick);
