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

class CaféFactory {
    static order(name: string) {
        switch (name) {
            case 'Americano':
                return new AmericanoCoffee('美式咖啡');
            case 'Latte':
                return new LatteCoffee('拿铁咖啡');
            case 'Cappuccino':
                return new LatteCoffee('卡布奇诺');
            default:
                return new Error('你点的咖啡品种我们不支持')
        }
    }
}

console.log(CaféFactory.order('Americano'))
console.log(CaféFactory.order('Latte'))
console.log(CaféFactory.order('Cappuccino'))

/**
 * 如果产品的种类非常多switch case的判断会变得非常多
 * 不符合开放—封闭原则,如果要增加或删除一个产品种类，就要修改switch case的判断代码
 */