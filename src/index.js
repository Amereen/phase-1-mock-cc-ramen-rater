// write your code here
// 1.see img in div id #ramen-menu
// 2.fetch get
// a.event lsitner click
// 3.  <div id="ramen-detail"> has info about ramen
// 4.event listner submit   <form id="new-ramen">
// 5.  <form id="new-ramen"> append to #ramen-menu
// 6.

fetch('http://localhost:3000/ramens')
  .then((response) => response.json())
  .then((data) => renderRamens(data));

  const menu = document.querySelector('#ramen-menu')
  function renderRamens(ramens){
    ramens.map(ramen => {
      const img = document.createElement('img')
      img.src = ramen.image
      menu.append(img)
    } )
    
  }
  