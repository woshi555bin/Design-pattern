/***
 * 
 * 工厂方法模式Factory Method,又称多态性工厂模式。
 * 在工厂方法模式中,核心的工厂类不再负责所有的产品的创建，而是将具体创建的工作交给工厂子类去做
 */

export{}
abstract class Coffee {
    constructor(public name: string) {

    }
}
class AmericanoCoffee extends Coffee {
    constructor(public name: string) {
        super(name);
    }
}
class LatteCoffee extends Coffee {
    constructor(public name: string) {
        super(name);
    }
}
class CappuccinoCoffee extends Coffee {
    constructor(public name: string) {
        super(name);
    }
}

abstract class CateFactory {
    abstract createCoffee(): Coffee;
}
class AmericanoCoffeeFactory extends CateFactory {
    createCoffee() {
        return new AmericanoCoffee('美式咖啡')
    }
}
class LatteCoffeeFactory extends CateFactory {
    createCoffee() {
        return new LatteCoffee('拿铁咖啡')
    }
}
class CappuccinoFactory extends CateFactory {
    createCoffee() {
        return new CappuccinoCoffee('卡布奇诺')
    }
}

class Factory {
    static order(name: string) {
        switch (name) {
            case 'Americano':
                return new AmericanoCoffeeFactory().createCoffee();
            case 'Latte':
                return new LatteCoffeeFactory().createCoffee();
            case 'Cappuccino':
                return new CappuccinoFactory().createCoffee();
            default:
                return null;
        }
    }
}


// function createElement(type:any,config:any){
//     return {type,props:config}
// }

//  function createFactory(type:string) {
//     const factory = createElement.bind(null, type);

//     return factory;
//   }
//   let  factory =createFactory('h1')
//   let element = factory({id:'h1',classname:'title'})
//   console.log(element)

