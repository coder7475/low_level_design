// Create Singleton Instance when needed
class LazySingleton {
    // single instance, initially none
    private static instance: LazySingleton;

    // private constructor to prevent instatiation
    private constructor(){}

    // public method
    public static getInstance(): LazySingleton {
        if (LazySingleton.instance === undefined) {
            LazySingleton.instance = new LazySingleton();
        }

        return LazySingleton.instance;
    }

    public doSomething(): void {
        console.log("Doing Something");
    }
}

// Get the singleton instance wherever you need it
const s1 = LazySingleton.getInstance();
const s2 = LazySingleton.getInstance();

s1.doSomething();

// Both references point to the same object
console.log(s1 === s2); // true
