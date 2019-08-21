
  $(function () {
    $('.menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
});

function show() {
  let more = document.getElementById("more");
  let button = document.getElementById("button");

  if(more.style.display === 'none'){
    more.style.display = 'block';
    button.innerHTML ='See less';
  } else {
    more.style.display = 'none';
    button.innerHTML = 'See more'
  }
}