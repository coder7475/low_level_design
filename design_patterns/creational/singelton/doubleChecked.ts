class DoubleCheckedSingleton {
    // The single instance, initially undefined
    private static instance: DoubleCheckedSingleton;
    private static isCreating = false;

    private constructor() {}

    public static getInstance(): DoubleCheckedSingleton {
        // First check (not synchronized)
        if (DoubleCheckedSingleton.instance == undefined) {
            // Simple lock mechanism
            if (!DoubleCheckedSingleton.isCreating) {
                DoubleCheckedSingleton.isCreating = true;
                // Second check (synchronized)
                if (DoubleCheckedSingleton.instance == undefined) {
                    DoubleCheckedSingleton.instance = new DoubleCheckedSingleton();
                }
                DoubleCheckedSingleton.isCreating = false;
            }
        }
        // Return the instance (either newly created or existing)
        return DoubleCheckedSingleton.instance;
    }

    // Example instance methods
    public processData(data: string): void {
        console.log(`Processing: ${data}`);
    }

    public getTimestamp(): number {
        return Date.now();
    }
}

// usage
// Basic Usage
const dc1 = DoubleCheckedSingleton.getInstance();
const dc2 = DoubleCheckedSingleton.getInstance();
const dc3 = DoubleCheckedSingleton.getInstance();

console.log("dc1 === dc2:", dc1 === dc2); // true
console.log("dc2 === dc3:", dc2 === dc3); // true

dc1.processData("User registration");
dc2.processData("Order processing");

console.log("Timestamp from dc1:", dc1.getTimestamp());
console.log("Timestamp from dc2:", dc2.getTimestamp()); // Same instance, same time


// Simulating Concurrent Access
async function testConcurrentAccess() {
    console.log("\n=== Testing Concurrent Access ===");
    
    const results: DoubleCheckedSingleton[] = [];
    
    // Create 10 "concurrent" requests
    const promises = Array.from({ length: 10 }, async (_, i) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                const instance = DoubleCheckedSingleton.getInstance();
                results.push(instance);
                console.log(`Request ${i + 1} got instance`);
                resolve();
            }, Math.random() * 50);
        });
    });

    await Promise.all(promises);
    
    // Verify all are the same instance
    const allSame = results.every(inst => inst === results[0]);
    console.log(`All ${results.length} instances are the same:`, allSame);
}

testConcurrentAccess();


