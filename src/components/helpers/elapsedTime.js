
const segs = 1000;
const mins = segs * 60;
const hours = mins * 60;
const days = hours * 24;
const months = days * 30.416666666666668;
const years = months * 12;

export default function elapsedTime(date){

    const currentTime = new Date();
    const referenceDate = new Date(date)

    const elapsed = currentTime - referenceDate;

    const elapsedsegs = Math.floor(elapsed /segs )
    const elapsedmins = Math.floor(elapsed /mins )
    const elapsedhours = Math.floor(elapsed /hours )
    const elapseddays = Math.floor(elapsed / days)
    const elapsedmonths= Math.floor(elapsed / months)
    const elapsedyears = Math.floor(elapsed / years)
   
    if(elapsedyears >= 1){

        if(elapsedyears === 1){
            return elapsedyears + " year ago";
        }else{
            return elapsedyears + " years ago";
        }
    }
    
    if(elapsedmonths >= 1){

        if(elapsedmonths === 1){
            return elapsedmonths + " month ago";
        }else{
            return elapsedmonths + " months ago";
        }
    }

    if(elapseddays >= 1){

        if(elapseddays === 1){
            return elapseddays + " day ago";
        }else{
            return elapseddays + " days ago";
        }
    }

    if(elapsedhours >= 1){

        if(elapsedhours === 1){
            return elapsedhours + " hour ago";
        }else{
            return elapsedhours + " hours ago";
        }
    }

    if(elapsedmins >= 1){

        if(elapsedmins === 1){
            return elapsedmins + " min ago";
        }else{
            return elapsedmins + " mins ago";
        }
    }
    
    return elapsedsegs + "segs ago";
    
}
