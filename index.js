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
