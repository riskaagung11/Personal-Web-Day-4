let blogs = [];

function getBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("project").value;
  let description = document.getElementById("description").value;
  let nodeJs = document.getElementById("nodeJs").checked;
  let reactJs = document.getElementById("reactJs").checked;
  let nextjs = document.getElementById("nextJs").checked;
  let typescript = document.getElementById("typescript").checked;
  let image = document.getElementById("input-blog").files;

  image = URL.createObjectURL(image[0]);

  let blog = {
    projectName,
    description,
    nodeJs,
    reactJs,
    nextjs,
    typescript,
    image,
  };

  blogs.push(blog);
  console.log(blogs);
  renderBlog();
}

function renderBlog() {
  document.getElementById("dynamic-project").innerHTML = "";
  for (let i = 0; i < blogs.length; i++) {
    document.getElementById("dynamic-project").innerHTML += ` <article class="card-project">
    <div class="card-item">
      <img src="${blogs[i].image}" alt="card image" />
      <div class="card-title">
        <h3>${blogs[i].projectName}</h3>
        <p>durasi: 3 bulan</p>
      </div>
      <div class="card-description">
        <p>${blogs[i].description}</p>
        <ul>
        ${blogs[i].nodeJs === true ? '<li><img src="./assets/images/icons8-node-js.svg" alt="node js" /></li>' : ""}
        ${blogs[i].reactJs === true ? '<li><img src="./assets/images/icons8-react-native.svg" alt="react js" /></li>' : ""}
        ${blogs[i].nextjs === true ? '<li><img src="./assets/images/nextjs-icon-svgrepo-com.svg" alt="next js" /></li>' : ""}
        ${blogs[i].typescript === true ? '<li><img src="./assets/images/icons8-typescript.svg" alt="typescript" /></li>' : ""}
        </ul>
      </div>
      <div class="card-button">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  </article>`;
  }
}
