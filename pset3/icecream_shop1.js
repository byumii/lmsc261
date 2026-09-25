const priceOfIceCream = 3;
let paymentRecieved = prompt (" Welcome to my ice cream business where I don't tell you how much my ice cream is until you offer me money! How much are you willing to pay? ");
let isPaymentEnough = priceOfIceCream <= paymentRecieved;

if (isPaymentEnough){
    print (" Thanks! Enjoy the Ice Cream! Here is your change! " + (paymentRecieved - priceOfIceCream) + " Robux "); 
}
else{
      print ("Not enough cash!"); 
}
