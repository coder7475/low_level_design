class ThreadSafeSingleton {
    private static instance: ThreadSafeSingleton;
    private static isCreating = false;

    private constructor() {}

    public static getInstance(): ThreadSafeSingleton {
        if (ThreadSafeSingleton.instance == undefined) {
            if (ThreadSafeSingleton.isCreating) {
                // Wait for creation to complete
                while (ThreadSafeSingleton.isCreating) {
                    // Simple busy wait (in real scenarios, use proper synchronization)
                }
                return ThreadSafeSingleton.instance;
            }
            
            ThreadSafeSingleton.isCreating = true;
            if (ThreadSafeSingleton.instance == undefined) {
                ThreadSafeSingleton.instance = new ThreadSafeSingleton();
            }
            ThreadSafeSingleton.isCreating = false;
        }
        return ThreadSafeSingleton.instance;
    }

    
    public doWork(msg: string): void {
        console.log("Doing: ", msg);
    }

    public getInstanceId(): string {
        return `Singelton-${Date.now()}`
    }
}

// usage
// Basic Usage
const singleton1 = ThreadSafeSingleton.getInstance();
const singleton2 = ThreadSafeSingleton.getInstance();

console.log(singleton1 === singleton2); // true (same instance)

singleton1.doWork("Database connection");
singleton2.doWork("Cache initialization");


// Simulating concurrent access (async)
async function simulateConcurrentAccess() {
    const promises = Array.from({ length: 5 }, async (_, i) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                const instance = ThreadSafeSingleton.getInstance();
                console.log(`Thread ${i + 1} got instance:`, instance.getInstanceId());
                resolve();
            }, Math.random() * 100);
        });
    });

    await Promise.all(promises);
    console.log("All threads completed");
}

simulateConcurrentAccess();

