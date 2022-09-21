"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("==========Decorators==========");
function logarClasse(constructor) {
    console.log(constructor);
}
//Decorator Factory
function DecoratorEmpty(_) { }
function logarClasseSE(value) {
    return value ? logarClasse : DecoratorEmpty;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
// @logarClasse
// @decorator({a:'Test', b: 123})
// @logarClasseSE(true)
let Eletrodomestico = 
// @imprimivel
class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
};
Eletrodomestico = __decorate([
    logarObjeto
    // @imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
// (<any>new Eletrodomestico()).imprimir()
// const Eletro = new Eletrodomestico()
// Eletro.imprimir && Eletro.imprimir()
// Challenge Decorator admProfile
const userLogged = {
    name: 'Guilherme Son',
    email: 'guigui@gmail.com',
    admin: true
};
function admProfile(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!userLogged || !userLogged.admin) {
                throw new Error('No permission');
            }
        }
    };
}
let AdmChange = class AdmChange {
    critico() {
        console.log('Something critic was changed');
    }
};
AdmChange = __decorate([
    admProfile
], AdmChange);
new AdmChange().critico();
// End challeng
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        // if(valor <= this.saldo){
        this.saldo -= valor;
        return true;
        // }else {
        // return false
        // }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    freeze,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    freeze
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(12000.00);
cc.sacar(5000);
console.log(cc.getSaldo());
cc.sacar(7000);
cc.sacar(6000);
// cc.getSaldo = function(){
//     return this['saldo'] + 60065
// }
console.log(cc.getSaldo());
//Object Freeze()
function freeze(target, nameProps, descritor) {
    console.log(target);
    console.log(nameProps);
    descritor.writable = false;
}
function naoNegativo(target, nameProps) {
    delete target[nameProps];
    Object.defineProperty(target, nameProps, {
        get: function () {
            return target["_" + nameProps];
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Invalid Value");
            }
            else {
                target["_" + nameProps] = value;
            }
        }
    });
}
function paramInfo(target, nameMethod, indexParam) {
    console.log(`Target: ${target}`);
    console.log(`Method: ${nameMethod}`);
    console.log(`Index Param: ${indexParam}`);
}
