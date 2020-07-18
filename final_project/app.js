// login and signup
const content = document.getElementById('content');
let logged_in = false;
let login_modal = document.getElementById('login_modal');
let signup_modal = document.getElementById('signup_modal');
let login_btn = document.getElementById('login_btn');
let signup_btn = document.getElementById('signup_btn');
let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];
login_btn.onclick = function() {
    login_modal.style.display = "block";
}
span.onclick = function() {
    login_modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == login_modal) {
      login_modal.style.display = "none";
    }
}
signup_btn.onclick = function() {
    signup_modal.style.display = "block";
};
span2.onclick = function() {
    signup_modal.style.display = "none";
}

const modal_login_btn = document.getElementById('modal_login_btn');
modal_login_btn.addEventListener('click',login);
const modal_signup_btn = document.getElementById('modal_signup_btn');
modal_signup_btn.addEventListener('click',signup);

function login(){
  for(let i=0;i<users.length;i++){
    if(document.getElementById('user').value=='admin' && document.getElementById('user_pass').value==users[0].password){
      alert('welcome back admin');
      document.getElementById('user').value='';
      document.getElementById('user_pass').value='';
      login_modal.style.display = "none";
      login_btn.style.display = "none";
      signup_btn.style.display = "none";
      document.getElementById('main_bar_container').insertAdjacentHTML('beforeend',`<span id="admin_control">Control data</span><span id="user_control">Control user</span><span id="logout">Log out</span>`);
      const admin_btn = document.getElementById('admin_control');
      const user_btn = document.getElementById('user_control');
      const logout_btn = document.getElementById('logout');
      admin_btn.addEventListener('click',opencontrol);
      user_btn.addEventListener('click',open_user_control);
      logout_btn.addEventListener('click',logoutadmin);
      break;
    }else if(document.getElementById('user').value==users[i+1].user && document.getElementById('user_pass').value==users[i+1].password){
      alert(`logged in as ${users[i+1].user} successfully`);
      document.getElementById('user').value='';
      document.getElementById('user_pass').value='';
      login_modal.style.display = "none";
      login_btn.style.display = "none";
      signup_btn.style.display = "none";
      document.getElementById('main_bar_container').insertAdjacentHTML('beforeend',`<span id="playlist">Favorite</span><span id="logout">Log out</span>`);
      const logout_btn = document.getElementById('logout');
      const playlist_btn = document.getElementById('playlist');
      logout_btn.addEventListener('click',logout);
      playlist_btn.addEventListener('click',()=>{control_playlist(i+1)});
      break
    } else if(i==users.length-2 || users.length==1){
      alert('wrong password or username');
    }
  }
}

function signup(){
  const new_email = document.getElementById('new_email');
  const new_user = document.getElementById('new_user');
  const new_password = document.getElementById('new_password');
  for(let i=0;i<users.length;i++){
    if(new_user.value==''||new_password.value==''||new_email.value==''){
      alert('dont leave anything blank');
      break
    } else if(new_user.value==users[i].user){
      alert('username already exist');
      break
    } else if(i==users.length-1 || users.length==1){
      users.push({user:new_user.value,password:new_password.value,email:new_email.value,favorited:[]});
      new_user.value='';
      new_email.value='';
      new_password.value='';
      signup_modal.style.display = "none";
      break
    }
  }
}

// log out
function logoutadmin(){
  login_btn.style.display = "inline";
  signup_btn.style.display = "inline";
  document.getElementById('logout').remove();
  document.getElementById('user_control').remove();
  document.getElementById('admin_control').remove();
  back_to_main();
}

function logout(){
  login_btn.style.display = "inline";
  signup_btn.style.display = "inline";
  document.getElementById('logout').remove();
  document.getElementById('playlist').remove();
  back_to_main();
}

// admin function
function opencontrol(){
  content.innerHTML = `<input type="text" placeholder="Enter name" id="new_song">
  <input type="text" placeholder="Enter genre" id="genres">
  <input type="text" placeholder="Enter artists" id="artists">
  <input type="number" placeholder="Enter release year" id="year">
  <input type="text" placeholder="Enter country" id="country">
  <input type="text" placeholder="Enter imagelink" id="img">
  <input type="text" placeholder="Enter audio link" id="link">
  <button id="add_btn">Add</button>
  <button id="clear_btn">Clear</button>
  <table id="table">
      <thead>
          <th>Name</th>
          <th>Genres</th>
          <th>Artists</th>
          <th>Year</th>
          <th>Country</th>
          <th>img</th>
          <th>link</th>
          <th>Actions</th>
      </thead>
      <tbody id="body"></tbody>
  </table>`;
  const table_body = document.getElementById('body');
  const new_song = document.getElementById('new_song');
  const genre = document.getElementById('genres');
  const artists = document.getElementById('artists');
  const year = document.getElementById('year');
  const country = document.getElementById('country');
  const img = document.getElementById('img');
  const link = document.getElementById('link');
  const add_btn = document.getElementById('add_btn');
  const clear_btn = document.getElementById('clear_btn');
  let update_num = 0;
  let update_state = false;
  function update_table() {
    table_body.innerHTML = '';
    for (let data of musics_data) {
      table_body.insertAdjacentHTML('beforeend', `<tr><td>${data.name}</td><td>${data.genres}</td><td>${data.artists}</td><td>${data.year}</td><td>${data.country}</td><td>${data.img}</td><td>${data.link}</td><td><button class="remove_btn">X</button><button class="update_btn">U</button></td></tr>`);
    };
    autocomplete_data();
    autocomplete(document.getElementById("search_bar"), datas);
    const remove_btns = document.getElementsByClassName('remove_btn');
    const update_btns = document.getElementsByClassName('update_btn');
    for (let i = 0; i < remove_btns.length; i++) {
      remove_btns[i].addEventListener('click', () => {
          musics_data.splice(i, 1);
          update_table();
        });
    };
    for (let i = 0; i < update_btns.length; i++) {
      update_btns[i].addEventListener('click', () => {
        update_state = true;
        update_num = i;
        new_song.value = musics_data[i].name;
        genre.value = musics_data[i].genres;
        artists.value = musics_data[i].artists;
        year.value = musics_data[i].year;
        country.value = musics_data[i].country;
        img.value = musics_data[i].img;
        link.value = musics_data[i].link;
      });
    };
  };
  update_table();
  add_btn.addEventListener('click', () => {
    if (new_song.value == '' || genre.value == '' || artists.value == '' || year.value == '' || country.value == '' || img.value == '' || link.value == '') {
      alert('dont leave stuff blank')
    } else if (update_state) {
      musics_data[update_num] = {name: new_song.value, genres: genre.value, artists: artists.value, year: year.value, country: country.value, img: img.value, link: link.value};
      update_state = false;
      console.log(musics_data);
      update_table();
      new_song.value = '';
      genre.value = '';
      artists.value = '';
      year.value = '';
      country.value = '';
      img.value = '';
      link.value = '';
    } else {
      musics_data.push({name: new_song.value, genres: genre.value, artists: artists.value, year: year.value, country: country.value, img: img.value, link: link.value});
      console.log(musics_data);
      update_table();
      new_song.value = '';
      genre.value = '';
      artists.value = '';
      year.value = '';
      country.value = '';
      img.value = '';
      link.value = '';
    };
  });
  clear_btn.addEventListener('click',() => {
    new_song.value = '';
    genre.value = '';
    artists.value = '';
    year.value = '';
    country.value = '';
    img.value = '';
    link.value = '';
    update_state = false;
  })
}

function open_user_control(){
  content.innerHTML = `
  <table id="table">
      <thead>
          <th>Name</th>
          <th>Password</th>
          <th>Email</th>
          <th>Actions</th>
      </thead>
      <tbody id="body"></tbody>
  </table>`;
  const table_body = document.getElementById('body');
  function update_table() {
    table_body.innerHTML = '';
    for (let i=1;i<users.length;i++) {
      table_body.insertAdjacentHTML('beforeend', `<tr><td>${users[i].user}</td><td>${users[i].password}</td><td>${users[i].email}</td><td><button class="remove_btn">X</button></td></tr>`);
    };
    const remove_btns = document.getElementsByClassName('remove_btn');
    for (let i = 0; i < remove_btns.length; i++) {
      remove_btns[i].addEventListener('click', () => {
          users.splice(i+1, 1);
          update_table();
        });
    };
  };
  update_table();
}

// user with account
function control_playlist(current_user){
  if(users[current_user].favorited.length==0){
    content.innerHTML = 'You dont have any favorite song yet<br>';
  } else{
    content.innerHTML = 'Favorite song';
    for(i=0;i<users[current_user].favorited.length;i++){
      search_result(users[current_user].favorited[i],musics_data);
    }
  }
  content.insertAdjacentHTML('beforeend','<input type="text" placeholder="Enter song name to add" id="add_song_bar" autocomplete="off"><button id="add_song">Add more songs</button>')
  let datas = [];
  for (let i = 0; i < musics_data.length; i++) {
    datas[i] = musics_data[i].name;
  }
  autocomplete(document.getElementById("add_song_bar"), datas);
  document.getElementById('add_song').addEventListener('click',()=>{
    let new_song = document.getElementById('add_song_bar').value;
    users[current_user].favorited.push(new_song);
    control_playlist(current_user);
  })
}
// search
function search_result(searchinfo,datas) {
  for (let i = 0; i < datas.length; i++) {
    let data = datas[i];
    let name = data.name;
    let genre = data.genres;
    let artist = data.artists;
    let year = data.year;
    let country = data.country;
    let image = data.img;
    let link = data.link;
    //nội dung hiển thị
    let chaHTML = `
        <br>
        <div style="text-align:  center; font-size: 30px">${name}</div>
  <hr>
      <img style="display: block; margin-left: auto; margin-right: auto;" src="${image}">
      <hr>
      <div style="display: flex; flex-flow: row; justify-content: space-around;">
      <div>
          <span>Artist:${artist}</span>
      </div>
      <div>
          <span>Genre:${genre}</span>
      </div>
      <div>
          <audio src="${link}" controls></audio>
      </div>
      <div>
          <span>Year:${year}</span>
      </div>
      <div>
          <span>Country:${country}</span>
      </div>
      </div>`;
    if (searchinfo == name) {
      content.insertAdjacentHTML('beforeend', chaHTML);
    }
    if (searchinfo == artist) {
      content.insertAdjacentHTML('beforeend', chaHTML);
    }
    if (searchinfo == genre) {
      content.insertAdjacentHTML('beforeend', chaHTML);
    }
  }
}

function search(){
    let btn = document.getElementById('search_btn');
    btn.addEventListener('click',function(){
        let search_bar = document.getElementById('search_bar');
        let searchinfo = search_bar.value;
        content.innerHTML = '';
        search_result(searchinfo,musics_data);
    })
}
search();

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function (e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
}

let datas = [];
function autocomplete_data(){
  datas = [];
  for (let i = 0; i < musics_data.length; i++) {
    datas[i] = musics_data[i].name;
    datas[i + musics_data.length] = musics_data[i].artists;
  }
}
autocomplete_data();
autocomplete(document.getElementById("search_bar"), datas);

// logo
const logo = document.getElementById('logo');
logo.addEventListener('click',back_to_main)
function back_to_main(){
  content.innerHTML = 'this is main page';
}

// genres
const genres = document.getElementById('see_genres');
genres.addEventListener('click',opengenres);
function opengenres(){
  content.innerHTML = ``;
  let genre_name = [];
  for(i=0;i<musics_data.length;i++){
    if(!genre_name.includes(musics_data[i].genres)){
      genre_name.push(musics_data[i].genres);
    }
  }
  for(let i of genre_name){
    content.insertAdjacentHTML('beforeend',`<a href='#genres#${i}' class="genre_btn">${i}</a><br>`)
  }
  const genre_btns = document.getElementsByClassName('genre_btn');
  for(let i = 0; i < genre_btns.length; i++){
    genre_btns[i].addEventListener('click',()=>{
      let search_info = genre_btns[i].innerHTML
      content.innerHTML = ``;
      search_result(search_info,musics_data);
    })
  }
}
