function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
} 
var video_play_img = '//cdn.olcdn.net/images/video-play-button2.png';
function isMobile() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|ipad|iphone|ipod|windows phone/.test(userAgent.toLowerCase()) && !window.MSStream) {
        return 1;
    }else{
		return 0;
	}

}
function canPlayVideo(){
	var el_video = document.createElement('video');
	return el_video.canPlayType('application/vnd.apple.mpegURL');
}

var loading_img = '//cdn.olcdn.net/images/wait.gif';
var win_width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var win_height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var win_height_proportoionale = (win_width*0.75);
if(win_height <= win_height_proportoionale){
	win_height_proportoionale = win_height + '';
	console.log('win_height_proportoionale: yes win_height='+win_height);
}else{
	console.log('win_height_proportoionale: not win_height='+win_height);

}
document.write('<style>#open_with, iframe, object, embed, video {max-height: '+(win_height_proportoionale)+'px;width: 100%;height: '+(win_height_proportoionale)+'px; margin-top: -10px;margin-left: 0px;}</style>');
var embed_open_with_img = '<a title="Click me to Play" type="application/x-mpegURL" href="'+stream+'" target="play"><img id="open_with" src="'+video_play_img+'"/></a>';
var embed_open_with_text = '<center><p><a type="application/x-mpegURL" href="'+stream+'" target="play">Your browser is not supported, Copy this m3u8 link and open with your video player App.</a></p></center>';
var embed_open_with = embed_open_with_img + embed_open_with_text
var embed_mobile_tag = '<div itemprop="video" itemscope="" itemtype="http://schema.org/VideoObject">'
+'<meta itemprop="duration" content="T99M33S" />'
+'<meta itemprop="thumbnailUrl" content="'+video_play_img+'" />'
   +' <video autoplay id="video_player" class="video_player" controls width="'+win_width+'" height="'+(win_height_proportoionale)+'" preload="metadata">'
        +'<source type="application/x-mpegURL" src="'+stream+'"/>'
    +'</video>'
+'</div>';
var embed_mobile_text = '<center><p><a type="application/x-mpegURL" href="'+stream+'" target="play">Unable to play video?  Copy this m3u8 link and open with your video player App.</a></p></center>';
var embed_mobile = embed_mobile_tag + embed_mobile_text;
