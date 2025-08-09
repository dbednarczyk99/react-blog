const dateToStr = date => {
    console.log(date);
    const mm = date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const yy = `${date.getFullYear()}`;

    return `${mm}-${dd}-${yy}`
}

export default dateToStr;