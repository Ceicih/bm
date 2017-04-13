jwplayer("myElement").setup({
        primary : 'flash',
        file: "http://185.180.13.92/live/tv111/index.m3u8",
        title: 'Live Streaming',
        image: '',
        width: '100%',
        aspectratio: '16:9',
        stretching: "exactfit",
	'logo':{'file':'', 'hide':'false', 'out':'0.3','position':'bottom-right','link':''},
        stretching: "exactfit",
        autostart: true,
        androidhls:true,
        abouttext: "www.tvonline.id Player",
        aboutlink: "http://www.tvonline.id/",
        primary: 'flash',
        advertising: {
        client: "vast",
        'skipoffset':15,
        admessage: 'Your TV will resume in XX seconds.',
        tag: ""
  }
    });
   jwplayer("tv").onError(function(){
       jwplayer("tv").load([{file:"http://149.202.195.176/live/tv4/index.m3u8"}]);
       jwplayer("tv").play();
    });
