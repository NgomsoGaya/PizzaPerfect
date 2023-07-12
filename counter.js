function Counter(){
    return {
        count:0,
        count1:0,
        count2:0,
        price:0.00,
        price1:0.00,
        price2:0.00,
        totalPrice:0,
        successmsg: false,
        failuremsg: false,
        payment:"",
        success: "Payment Successful",
        failure: "Payment not Successful",
        paybtnbundle: true,
        checkbtn: false,
        small: false,
        medium: false,
        large: false,
        wallet: 0,
        change: false,
        checkoutmsg: false,
        checkoutmessage: "Your food will be ready for collection in 10 minutes! Show this to the teller!",
        checkOutError: "Your cart is empty!",
        checkError: false,
        increment(){
            if (this.checkbtn == false) {
            this.count++;
            this.price +=31.99;
            this.totalPrice +=31.99;
            }
            else if (this.checkbtn == true && this.wallet >=31.99) {
            this.count++;
            this.price +=31.99;
            this.totalPrice +=31.99;
            this.wallet -= 31.99;
            }
        },
        decrement(){
            if (this.count > 0 && this.checkbtn == false) {
            this.count--;
            this.price -=31.99;
            this.totalPrice -=31.99;
            }
            else if(this.checkbtn == true && this.count > 0){
            this.count--;
            this.price -=31.99;
            this.totalPrice -=31.99;
            this.wallet +=31.99;
            }
            
        },
        increment1(){
            if (this.checkbtn == false) {
                this.count1++;
                this.price1 +=58.99;
                this.totalPrice +=58.99;
                }
                else if (this.checkbtn == true && this.wallet >=58.99) {
                this.count1++;
                this.price1 +=58.99;
                this.totalPrice +=58.99;
                this.wallet -= 58.99;
                }
        },
        decrement1(){
            if (this.count1 > 0 && this.checkbtn == false) {
                this.count1--;
                this.price1 -=58.99;
                this.totalPrice -=58.99;
                }
                else if(this.checkbtn == true && this.count1 > 0){
                this.count1--;
                this.price1 -=58.99;
                this.totalPrice -=58.99;
                this.wallet +=58.99;
                }
        },
        increment2(){
            if (this.checkbtn == false) {
                this.count2++;
                this.price2 +=87.99;
                this.totalPrice +=87.99;
                }
                else if (this.checkbtn == true && this.wallet >=87.99) {
                this.count2++;
                this.price2 +=87.99;
                this.totalPrice +=87.99;
                this.wallet -= 87.99;
                }
        },
        decrement2(){
            if (this.count2 > 0 && this.checkbtn == false) {
                this.count2--;
                this.price2 -=87.99;
                this.totalPrice -=87.99;
                }
                else if(this.checkbtn == true && this.count2 > 0){
                this.count2--;
                this.price2 -=87.99;
                this.totalPrice -=87.99;
                this.wallet +=87.99;
                }
        },
        pay(){
            if(this.payment >= this.totalPrice){
            this.successmsg = true;
            setTimeout(() => {
            this.successmsg = false;
            }, 5000);
            this.checkbtn = true;
            this.paybtnbundle = false;
            this.wallet = this.payment -= this.totalPrice;
            this.change = true;
            }
            else if(this.payment < this.totalPrice){
            this.failuremsg = true;
            setTimeout(() => {
            this.failuremsg = false;
            }, 5000);
            }            
        },
        buysmall(){
            if (this.checkbtn == false) {
            this.small = true;
            this.count += 1;
            this.price += 31.99;
            this.totalPrice +=31.99;  
            } 
        },
        buymedium(){
            if (this.checkbtn == false) {
            this.medium = true;
            this.count1 += 1;
            this.price1 += 58.99;
            this.totalPrice +=58.99;
            }
            
        },
        buylarge(){
            if (this.checkbtn == false) {
            this.large = true;
            this.count2 += 1;
            this.price2 += 87.99;
            this.totalPrice +=87.99;    
            }
             
        },
        checkout(){
            if(this.totalPrice !== 0.00){
            this.checkoutmessage;
            this.checkoutmsg = true;
            this.checkbtn = false;
            }
            else if(this.totalPrice == 0.00){
                this.checkOutError
                this.checkError = true;
            }
           
        }
    };
};