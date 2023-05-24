
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
   
    if(elapsedyears > 1){
        return elapsedyears;

    }else if(elapsedmonths > 1){
        return elapsedmonths;

    }else if(elapseddays > 1){
        return elapseddays + " days ago";

    }else if(elapsedhours > 1){
        return elapsedhours;

    }else if(elapsedmins > 1){
        return elapsedmins;

    }else {
        return elapsedsegs;
    }

}
