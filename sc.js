var playerInstance = jwplayer("algitv");
playerInstance.setup({
        file: "http://185.180.13.92/live/tv444/index.m3u8",
        //file: "",
        image: '',
        skin: {
          name: "thin",
    },
        width: '100%',
        aspectratio: '16:9',
        stretching: "exactfit",
        autostart: true,
        androidhls: true,
        primary: 'html5',
        advertising: {
        client: "vast",
        admessage: 'Your TV will resume in XX seconds.',
        tag: ""
  }
    });
    jwplayer("tv").onError(function(){
       jwplayer("tv").load([{file:"https:"}]);
       jwplayer("tv").play();
    });
