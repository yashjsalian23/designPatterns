//Here we are calculating the postal rates as an example

function Fedex(package){
    this.calculate = () => {
        return 2500;
    }
}

function BlueDart(package){
    this.calculate = () => {
        return 2750;
    }
}

function Shipping(){
    this.company = '';
    this.setStrategy = company => {
        this.company = company;
    }

    this.calculate = package => {
        return this.company.calculate(package);
    }
}

const fedex = new Fedex();
const blueDart = new BlueDart();
const shipping = new Shipping();
const package = {
    from: 'Mumbai',
    to: 'Udupi',
    weigth: 5
};

shipping.setStrategy(fedex)
console.log('Fedex:' + shipping.calculate(package));

shipping.setStrategy(blueDart)
console.log('Blue Dart:' + shipping.calculate(package));

