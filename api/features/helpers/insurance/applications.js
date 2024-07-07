const applications = {
  productId: null,
  orderId: null,
  claimId: null,
  trxId: null,
  shippingId: null,
  refNo: null,
  loanDate: null,
  dueDate: null,
  tenure: null,
  tenureUnit: null,
  loanAmount: null,
  checkInTime: null,
  checkOutTime: null,
  totalPrice: null,
  totalDiscount: null,

  // parseUrl(element) {
  // 	const addparse = url.parse(element, true)
  // 	const removeStr = addparse.pathname.replace("/form", '')
  // 	const orderId = removeStr.replace("/applications/", '')

  // 	return orderId;
  // },

  randomNoRef() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let noRef = `${dd}-${mm}-${yyyy}_${time}`;
    return noRef;
  },

  createDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let hours = today.getHours();
    if (hours <= 9) {
      hours = '0' + hours;
    }
    let minutes = today.getMinutes();
    if (minutes <= 9) {
      minutes = '0' + minutes;
    }
    let seconds = today.getSeconds();
    if (seconds <= 9) {
      seconds = '0' + seconds;
    }
    let time = hours + ":" + minutes + ":" + seconds;

    let current = `${yyyy}-${mm}-${dd}`;
    let due = yyyy + 1 + `-${mm}-${dd}`;
    let purchase = `${yyyy}-${mm}-${dd}T` + time + '.962+07:00';
    if (mm >= 11) {
      mm = '01';
      yyyy += 1;
    } else {
      mm = parseInt(mm) + 2;
      if (mm <= 9) {
        mm = '0' + mm;
      }
    }
    if (dd >= 14) {
      dd = '01';
    } else {
      dd = parseInt(dd) + 1;
      if (dd <= 9) {
        dd = '0' + dd;
      }
    }
    dd = 20;
    mm = 12;
    let checkIn = `${yyyy}-${mm}-${dd}T` + time + '.962+07:00';
    dd = parseInt(dd) + 7;
    if (dd >= 28) {
      dd = '01';
      mm = parseInt(mm) + 1;
      if (mm <= 9) {
        mm = '0' + mm;
      }
      if (mm > 12) {
        mm = '01';
        yyyy = parseInt(yyyy) + 1;
      }
    } else {
      dd = parseInt(dd) + 1;
      if (dd <= 9) {
        dd = '0' + dd;
      }
    }
    let checkOut = `${yyyy}-${mm}-${dd}T${time}.962+07:00`;

    return {
      'current': current,
      'due': due,
      'purchase': purchase,
      'checkIn': checkIn,
      'checkOut': checkOut,
    };
  },

  randomAmount() {
    return Math.floor(Math.random() * 9999) * 1000;
  },
};
export default applications;
