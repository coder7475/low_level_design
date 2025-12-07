class StaticBlockSingleton {
    private static instance: StaticBlockSingleton;

    private constructor() {}

    // Static initialization block (approximated)
    private static initialize(): void {
        try {
            StaticBlockSingleton.instance = new StaticBlockSingleton();
        } catch (e) {
            throw new Error("Exception occurred in creating singleton instance");
        }
    }

    // Public method to get the instance
    public static getInstance(): StaticBlockSingleton {
        if (!StaticBlockSingleton.instance) {
            StaticBlockSingleton.initialize();
        }
        return StaticBlockSingleton.instance;
    }
}