console.log('app.js');

var start_shamsi = '1400/08/23' ;






const today = ()=>{
    _date = new Date();
    return moment(_date).format('YYYY/MM/DD')
}

const miladi = (jalalidate)=>{
    var _date = moment(jalalidate,'jYYYY/jM/jD');
    return _date.format('YYYY/MM/DD')
}


const addDays = (start , days)=>{
    var currentDate = moment(start,'jYYYY/jM/jD');
    // console.log(currentDate.format('YYYY/MM/DD'))
    currentDate.add(days, 'days');
    return currentDate.format('jYYYY/jMM/jDD');
};

const dayDiff = (start , end)=>{
    // var startDate = moment(start,'jYYYY/jM/jD');
    // var endDate = moment(start,'jYYYY/jM/jD');
    // return endDate.diff(startDate, 'days');

    var a = moment(end);
    var b = moment(start);
    return a.diff(b, 'days') // 1

};


const calc = (days)=>{
    
    var start_miladi = miladi(start_shamsi);
    var end_shamsi = addDays(start_shamsi , days);
    var end_miladi = miladi(end_shamsi);
    var diff = dayDiff(today(),end_miladi);
    remain = (diff > 100 ) ? 100 : diff ; 
    remain = (diff < 0 )   ? 0 : diff ; 
    percent = parseInt(100 / (days / remain));
    // console.log('start_shamsi' , start_shamsi)
    // console.log('start_miladi' , start_miladi)
    // console.log('end_shamsi' , end_shamsi)
    // console.log('end_miladi' , end_miladi)
    // console.log('diff' , diff)
    // console.log('today' , today())
    
    return {
        'today' : today(),
        'start_shamsi' : start_shamsi,
        'end_shamsi' : end_shamsi,
        'start_miladi' : start_miladi,
        'end_miladi' : end_miladi,
        'remain' : remain , 
        'days' : days , 
        'percent' : percent , 
        'sclass' : `c100 p${percent} small green float-left`
    };
}; 

console.log(calc(90))
// var _end = addDays(_start , 10) ;
// var diff = dayDiff(_start , _end) 

// console.log(_start , _end , diff)

const amadehSazi = {
    title : 'آماده سازی'  , 
    data : [
        { title : 'ایده کسب و کار' , days : 20 } , 
        { title : 'PFS' , days : 30 } , 
        { title : 'FS' , days : 45 } , 
        { title : 'تایید هیات مدیره مجری' , days : 45 } , 
    ] , 
    calc : calc , 
    cardClass : 'card border-success' , 
    cardHeaderClass : 'card-header text-center bg-success text-white'

}

const hoghooghi = {
    title : 'تشکیل شخصیت حقوقی'  , 
    data : [
        { title : 'تشکیل کنسرسیوم' , days : 60 } , 
        { title : 'تنظیم شراکت نامه' , days : 60 } , 
        { title : 'تاسیس شرکت' , days : 90 } , 
    ] , 
    calc : calc , 
    cardClass : 'card border-primary' , 
    cardHeaderClass : 'card-header text-center bg-primary text-white'

}


const mojavezat = {
    title : 'مجوزات و زیرساخت ها    '  , 
    data : [
        { title : 'خوراک' , days : 150 } , 
        { title : 'انرژی' , days : 150 } , 
        { title : 'آب' , days : 150 } , 
        { title : 'منابع طبیعی' , days : 150 } , 
        { title : 'محیط زیست' , days : 150 } , 
        { title : 'وزارت صمت' , days : 150 } , 
    ] , 
    calc : calc , 
    cardClass : 'card border-warning' , 
    cardHeaderClass : 'card-header text-center bg-warning text-white'

}

const ejra = {
    title : 'اجرا'  , 
    data : [
        { title : 'مناقصه مشاور' , days : 180 } , 
        { title : 'مناقصه پیمانکاران' , days : 180 } , 
        { title : 'تامین مالی' , days : 365 } , 
    ] , 
    calc : calc , 
    cardClass : 'card border-info' , 
    cardHeaderClass : 'card-header text-center bg-info text-white'

}