function calcChange(payment, cost) {
  // 코드작성
  let change = payment - cost;

  let fiftyCnt = parseInt(change/50000);
  // const fiftyCnt = ( change - (change % 50000) ) / 50000; // 1장
  // change = change - 50000 * fiftyCnt; // 거스름돈 17000
  let tenCnt = parseInt((change%50000)/10000);
  // const tenCnt = ( change - (change % 10000) ) / 10000; // 1장
  // change = change - 10000 * tenCnt // 거스름돈 7000
  let fiveCnt = parseInt((change%10000)/5000);
  // const fiveCnt = ( change - (change % 5000) ) / 5000; // 1장
  // change = change - 5000 * fiveCnt // 거스름돈 2000
  let oneCnt = parseInt((change%5000)/1000);
  // 채const oneCnt = ( change - (change % 1000) ) / 1000; // 2장

  console.log("50000원 지폐 : " + fiftyCnt + "장");
  // console.log(`50000원 지폐 : ${fiftyCnt}장`);
  console.log("10000원 지폐 : " + tenCnt + "장");
  console.log("5000원 지폐 : " + fiveCnt + "장");
  console.log("1000원 지폐 : " + oneCnt + "장");

}

calcChange(100000, 33000);
console.log('');
calcChange(500000, 378000);