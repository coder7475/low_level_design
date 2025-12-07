// Simple and thread Safe
class EagerSingelton {
    // the single instance, created immediately
    private static readonly instance: EagerSingelton = new  EagerSingelton();

    private constructor(){}

    public static getInstance(): EagerSingelton {
        return EagerSingelton.instance;
    }
}

// usage
const eSingleton1 = EagerSingelton.getInstance();
const eSingleton2 = EagerSingelton.getInstance()

console.log(eSingleton1 === eSingleton2); // true