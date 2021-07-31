/** @format */
const MusicData = [
  {
    name: "Paper House",
    singer: "نایل هوران",
    cover: "https://i1.sndcdn.com/artworks-FtCCAAIo2Tq1-0-t500x500.jpg",
    rate: "4",
  },
  {
    name: "IDGAF",
    singer: "دوا لیپا",
    cover: "https://i1.sndcdn.com/artworks-000352832037-wrgmq5-t500x500.jpg",
    rate: "5",
  },
  {
    name: "Eastside",
    singer: "خالد و هالزی",
    cover:
      "https://lyrichub.ir/wp-content/uploads/2019/08/Eastside-benny-blanco-Halsey-Khalid.jpg",
    rate: "5",
  },
  {
    name: "Alive",
    singer: "خالد",
    cover:
      "https://www.frontiertouring.com/web_images/2040/Khalid_FreeSpiritTour-Frontier(Square-475x475)_ART.jpg",
    rate: "5",
  },
  {
    name: "طبیب ماهر",
    singer: " آرون افشار ",
    cover:
      "https://nex1music.ir/upload/2019-05-18/aron-afshar-tabibe-maher-2019-05-18-11-22-01.jpg",
    rate: "5",
  },
];
const section = document.getElementById("container-new");
section.innerHTML = MusicData.map(
  (item, i) => `
            <li>
                <div class="music-card">
                    <a href="./Pages/music-info.html?={musicId}" class="music-link">
                        <img src=${item.cover} alt="" class="music-img">
                    </a>
                    <div class="content">
                        <div style="width:3rem" class="iconAddRemove">
                            <img id=${
                              "AddImg-" + i
                            } src="./Assets/Icons/add_circle_white_24dp.svg" />
                        </div>
                        <div class="info">
                            <h2 class="music-name">${item.name}</h2>
                            <h3 class="singer-name">${item.singer} </h3>
                        </div>
                    </div>
                </div>
            </li>
`
);

const AddBtn = document.getElementsByClassName("iconAddRemove");
const ToggleIcon = (i) => {
  const x = document.getElementById("RemoveImg-" + i);
  const y = document.getElementById("AddImg-" + i);
  if (x !== null) {
    x.src = "./Assets/Icons/add_circle_white_24dp.svg";
    x.id = "AddImg-" + i;
  }
  if (y !== null) {
    y.src = "./Assets/Icons/remove_circle_white_24dp.svg";
    y.id = "RemoveImg-" + i;
  }
};
for (let i = 0; i < AddBtn.length; i++) {
  AddBtn[i].addEventListener("click", () => ToggleIcon(i));
}
