import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const time = JSON.parse(localStorage.getItem("videoplayer-current-time"));
if (time !== null) {
    player.setCurrentTime(time);
};

    player.on('timeupdate', throttle(function(data) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
    }, 1000));

