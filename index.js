var aDares = ['Apply for a job!', 'Build a business!', 'Focus on academics!',
'Spend time with family.', 'Call a friend.', 'Message an old friend.', 'Talk \
to a stranger!', 'Produce a video log.', 'Write an article.',
'Read a book.', 'Code something.', 'Watch an inspirational movie.',
'Sell something!', 'Meditate.', 'Learn a foreign language.', 'Practice \
a new programming language.', 'Write down 5 things you are grateful \
for.', 'Spend time with friends.', 'Faites le ménage.', 'Dance or sing \
to a song you really like.', 'Listen to an audiobook.', 'Go for a run \
if possible. Otherwise, do 30 pushups, 40 situps, 50 squats or \
go to the gym.', 'Play squash if possible.', 'Swim if possible.', 'Go \
to the gym.', 'Play basketball if possible.', 'Talk to someone \
wise.', 'Give someone a warm hug.', 'Cook something really tasty and \
nutritious.', 'Eat fruits.', 'Eat vegetables.', 'Help \
somebody.', 'Observe an organization, contemplate what it can \
improve on. Do something about it if possible.', 'Read an \
autobiography.', 'Review your 10-year, 5-year, 1-year, 6-month, \
1-month and 1-week goals. What are they and how will they \
be achieved?', 'Make sure you are getting enough sleep (minimum 7 \
hours).', 'Sing your national anthem.', 'Ask for a good news story. \
Afterwards, share one of your own.', 'Apologize for something dishonorable \
you may have done, if possible.', 'Thank someone for something their \
valuable contribution(s) in your life.', 'Hold the plank for 2 \
minutes.', 'Play with children, if possible.', 'Express yourself through \
art.', 'Come up with one joke to share later and save it.', 'Let someone \
know your stance on a particular issue in the world.', 'Ask for something \
you will probably be rejected for. Repeat this until you get a positive \
response for at least one of your requests.', 'Define a vision and record \
it somewhere.', 'If you have not yet done so, take a cold shower \
today.', 'Debate with someone on a topic you are knowledgeable \
about.', 'Do two burpees for each percent of body fat you have. If you do \
not know your percentage, do 50 burpees.', 'Listen to the problems or \
concerns of another individual. Seek empathy and offer counsel \
if requested.', 'Find assets you believe in (intrinsically), and invest in \
them if possible. Alternately, invest in bonds or mutual funds with moderate \
risk, optimal reward.', 'Drink lots of water.', 'Do laundry.', 'Seek \
opportunities.', 'Reflect on things that recently happened.', 'Smell the \
flowers, take time off for yourself, relax (in a good way).', 'Brush \
teeth.', 'Clean the house.', 'Compliment someone.', 'Volunteer \
somewhere.', 'Go for a brisk walk.', 'Dance to your favorite tunes.', 'Do \
pullups until exhaustion.', 'Share a story (fiction or personal experience) \
with someone.', 'Come up with a business idea based on a particular \
problem or opportunity.', 'Get some fresh air.', 'Ensure you receive enough \
nutrients (vitamins, omegas, minerals, protein).', 'Record your \
weight.', 'Complete errands and unfinished business.', 'Cut \
nails.', 'Practice cultural traditions.', 'Get to know another \
culture.', 'Remember upcoming deadlines.', 'Socialize.', 'Do a headstand for \
one minute.', 'Post a 1000 word Facebook status for no reason', 'Jump rope \
150 times', 'Talk continuously for ten whole minutes', 'Do 40 pushups in \
less than a minute.', 'Read a research paper.'];

var dDares = ['Speak in public.', 'Pitch a controversial idea.', '\
Ask someone out.', 'Create Big Things'];

function advDare() {
  document.getElementById("prompt").innerHTML = aDares[Math.floor(Math.random() * aDares.length)];
  var x = document.getElementById("prompt");
  if (x.style.visibility === "block") {
    <!-- x.style.visibility = "slow"; -->
    fadeIn(x);
  } else if (x.style.visibility === "none") {
    <!-- x.style.visibility = "block"; -->
    fadeOut(x);
  }
}

function danDare() {
  document.getElementById("prompt").innerHTML = dDares[Math.floor(Math.random() * dDares.length)];
  var x = document.getElementById("prompt");
  if (x.style.visibility === "block") {
    x.style.visibility = "slow";
  } else {
    x.style.visibility = "block";
  }
}
// fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
  if ((el.style.opacity -= .1) < 0) {
    el.style.display = "none";
  } else {
    requestAnimationFrame(fade);
  }
  })();
}

// fade in

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
  var val = parseFloat(el.style.opacity);
  if (!((val += .1) > 1)) {
    el.style.opacity = val;
    requestAnimationFrame(fade);
  }
  })();
}
