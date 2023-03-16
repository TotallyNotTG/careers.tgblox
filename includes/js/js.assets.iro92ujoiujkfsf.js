setTimeout(() => {
    fetchData()
}, 500)

function fetchData() {
const content = document.querySelector('.main')

content.innerHTML = "<div class='left-area'><h3>OLLIEBLOX CAREERS</h3><p class='text-large'>Find Jobs to help us</p><p>Ollieblox Corp will always need help with websites, management, and more! When you ask us for a job, you are asking to help us with our responsibilities.</p><input placeholder='Search jobs' class='search-bar' id='search'><a href=''>SEE OPEN POSITIONS</a></div><div class='right-area'><div class='bundle'><div class='game-bundle sideways'><img src='https://tr.rbxcdn.com/e94c9b4523f7fdef1c925792b55fc036/150/150/Image/Png' class='game-logo'><img src='https://tr.rbxcdn.com/16e942aa752ccd409894864ab3181ac2/150/150/Image/Png' class='game-logo'><img src='https://tr.rbxcdn.com/17ea7ba38f8fc375b4aa0f6aead45fbb/150/150/Image/Png' class='game-logo'><img src='https://tr.rbxcdn.com/a397ae5b26b3eea0beaae1ae7b3bf77f/150/150/Image/Png' class='game-logo'><img src='https://tr.rbxcdn.com/b66f7a40b036ab9705109cdfaf446195/150/150/Image/Png' class='game-logo'></div></div></div><div class='bottom-area'><p class='text-large'>Get to know the team</p><div class='workers'><img class='worker-img' src='https://totallynottg.github.io/corp.tgblox/l/img/TG.jpg'><div class='worker-quote'><p class='text-medium'> 'Ollieblox Is the best thing we have ever made '</p><h3>CEO, TG</h3></div></div><div class='workers'><img class='worker-img' src='https://totallynottg.github.io/corp.tgblox/l/img/Gavinsmash!.jpg'><div class='worker-quote'><p class='text-medium'> 'If it weren't for TG, i wouldnt be enjoying this Moment rn. Thanks TG!'</p><h3>Idea Manager, Gavin</h3></div></div><div class='workers'><img class='worker-img' src='content/assets/icons/marcellimg.png'><div class='worker-quote'><p class='text-medium'> 'My buddy TG is the Best at making Websites'</p><h3>Manager, Marcell</h3></div</div></div>"
content.classList.remove('spinner') 

}