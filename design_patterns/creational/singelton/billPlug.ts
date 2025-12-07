// tread safe, instance is not intialized until first call
class BillPughSingleton {
    private constructor() {}

    // Static inner class that holds the instance
    private static SingletonHelper = class {
        public static readonly INSTANCE: BillPughSingleton = new BillPughSingleton();
    };

    public static getInstance(): BillPughSingleton {
        return BillPughSingleton.SingletonHelper.INSTANCE;
    }
}