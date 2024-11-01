function changeImage(){
	var phone_images = document.getElementsByClassName('phone-img');
	var shown_img = document.getElementsByClassName('phone-img-show')[0];
	var i;
	for(i=0;i<phone_images.length;i++){

		if(phone_images[i] == shown_img)
			break;
	}
	var ind;
	if(i == phone_images.length-1){
		ind = 0;
	}
	else
		ind = i+1;
	phone_images[ind].setAttribute('class','phone-img phone-img-show');	
	shown_img.setAttribute('class','phone-img');
}

$(document).ready(function(){
  setInterval(function() {
    changeImage()
  },3500);
});