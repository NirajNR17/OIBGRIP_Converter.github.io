const caltemp = () => {
    
    const Digit = document.getElementById('digit').value;
    // console.log(Digit);

    // const tempsel = document.getAnimations('tempdiff');
    // const val = tempdiff.options[tempsel.selectedIndex].values;
    // console.log(val);

    const tempsel = document.querySelector('#tempdiff').value;
    // console.log(tempsel);

    const celToFah = (cel) => {
        let F = Math.round((cel * 9/5) + 32);
        return F;
    }
    const FahTocel = (Feh) => {
        let C = Math.round((Feh - 32) * 5/9);
        return C;
    }

    let resultCF;

    if(tempsel == 'C'){
        resultCF = celToFah(Digit);
        document.getElementsByClassName('container2')[0].style.display='block';
        document.querySelector('.result').innerHTML= `${resultCF} &#176 F`;
        // console.log(resultCF);
        if(Digit<=10){
            document.body.style.backgroundImage = "url('https://wallpapertag.com/wallpaper/full/6/d/d/474867-widescreen-beautiful-snow-wallpapers-1920x1200-for-hd.jpg')";
        }
        if(Digit>10 && Digit<=20){
            document.body.style.backgroundImage = "url('https://www.nbc4i.com/wp-content/uploads/sites/18/2019/12/vlcsnap-2019-12-24-08h31m48s322.jpg')";
        }
        if(Digit>20 && Digit<=40){
            document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/Ki3y2Ew.jpg')";
        }
        if(Digit>40){
            document.body.style.backgroundImage = "url('https://i0.wp.com/www.internetgeography.net/wp-content/uploads/2018/01/Sahara-Desert.jpg')";
        }
    }
    else{
        resultCF = FahTocel(Digit);
        document.getElementsByClassName('container2')[0].style.display='block';
        document.querySelector('.result').innerHTML= `${resultCF} &#176 C`;
        // console.log(resultCF);
        if(Digit<50){
            document.body.style.backgroundImage = "url('https://wallpapertag.com/wallpaper/full/6/d/d/474867-widescreen-beautiful-snow-wallpapers-1920x1200-for-hd.jpg')";
        }
        if(Digit>50 && Digit<100){
            document.body.style.backgroundImage = "url('https://www.nbc4i.com/wp-content/uploads/sites/18/2019/12/vlcsnap-2019-12-24-08h31m48s322.jpg')";
        }
        if(Digit>100 && Digit<130){
            document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/Ki3y2Ew.jpg')";
        }
        if(Digit>130){
            document.body.style.backgroundImage = "url('https://i0.wp.com/www.internetgeography.net/wp-content/uploads/2018/01/Sahara-Desert.jpg')";
        }
    }
}