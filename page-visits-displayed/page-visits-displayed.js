
    // 1. NUMBER OF TIMES THE PAGE WAS VISITED BY USER
    let timesVisited = 0;

    // reading json object out of localStorage
    if (localStorage.timesVisited) {
      timesVisited = parseInt(localStorage.timesVisited);
    }

    timesVisited ++ ;

    // set 'timesVisited' property to timesVisited value in localStorage
    localStorage.setItem('timesVisited', timesVisited);

    let report = document.getElementById('report');
    report.innerHTML = timesVisited;

    if (timesVisited > 2)
      report.style.backgroundColor = 'yellow';

    // 2. WHEN WAS THE LAST USER VISIT

    let lastVisitDate = 'never';

    // reading json object out of localStorage
    // if localStorage doesnt have a property lastVisit, it will skip this part of the code
    if (localStorage.lastVisit) {
      lastVisit = JSON.parse(localStorage.lastVisit);
      lastVisitDate = lastVisit.date;
    }

    document.getElementById('lastVisitDate').innerHTML = lastVisitDate;

    let myLastVisit = { }
    myLastVisit.date = new Date();
    myLastVisit.timesVisited = timesVisited;
    localStorage.lastVisit = JSON.stringify(myLastVisit);


    // 3. DATE & TIME OF TODAY

    let dateTimeField = document.getElementById('dateTime');
    dateTimeField.innerHTML = new Date();
