#!/bin/bash

# Script to initialize a Main.java file with boilerplate code
# Usage: ./init-java-main.sh <path>
# Example: ./init-java-main.sh src/main/java/com/example/

# Function to display usage
usage() {
    echo "Usage: $0 <path>"
    echo "  <path>: Directory path where Main.java should be created"
    echo ""
    echo "Examples:"
    echo "  $0 src/main/java/com/example/"
    echo "  $0 ."
    echo "  $0 /home/user/project/src/"
    exit 1
}

# Check if path argument is provided
if [ $# -eq 0 ]; then
    echo "Error: No path provided"
    usage
fi

# Get the target path
TARGET_PATH="$1"

# Remove trailing slash if present
TARGET_PATH="${TARGET_PATH%/}"

# Create directory if it doesn't exist
if [ ! -d "$TARGET_PATH" ]; then
    echo "Creating directory: $TARGET_PATH"
    mkdir -p "$TARGET_PATH"
    if [ $? -ne 0 ]; then
        echo "Error: Failed to create directory $TARGET_PATH"
        exit 1
    fi
fi

# Define the full file path
JAVA_FILE="$TARGET_PATH/Main.java"

# Check if Main.java already exists
if [ -f "$JAVA_FILE" ]; then
    echo "Warning: $JAVA_FILE already exists"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Operation cancelled"
        exit 0
    fi
fi

# Extract package name from path (if it follows standard Java structure)
PACKAGE_NAME=""
if [[ "$TARGET_PATH" =~ src/main/java/(.+) ]]; then
    PACKAGE_PATH="${BASH_REMATCH[1]}"
    PACKAGE_NAME=$(echo "$PACKAGE_PATH" | tr '/' '.')
elif [[ "$TARGET_PATH" =~ src/(.+) ]]; then
    PACKAGE_PATH="${BASH_REMATCH[1]}"
    PACKAGE_NAME=$(echo "$PACKAGE_PATH" | tr '/' '.')
fi

# Create the Main.java file with boilerplate code
cat > "$JAVA_FILE" << EOF
$(if [ -n "$PACKAGE_NAME" ]; then echo "package $PACKAGE_NAME;"; echo ""; fi)/**
 * Main class - Entry point for the application
 * 
 * @author $(whoami)
 * @version 1.0
 * @since $(date +%Y-%m-%d)
 */
public class Main {
    
    /**
     * Main method - Entry point of the program
     * 
     * @param args Command line arguments
     */
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // TODO: Add your implementation here
    }
}
EOF

# Check if file was created successfully
if [ $? -eq 0 ]; then
    echo "✅ Successfully created $JAVA_FILE"
    echo ""
    echo "File contents:"
    echo "=============="
    cat "$JAVA_FILE"
    echo ""
    echo "=============="
    
    # Display compilation and run commands
    echo "To compile and run:"
    if [ -n "$PACKAGE_NAME" ]; then
        echo "  javac $JAVA_FILE"
        echo "  java -cp $(dirname $(dirname $(dirname $TARGET_PATH))) $PACKAGE_NAME.Main"
    else
        echo "  javac $JAVA_FILE"
        echo "  java -cp $TARGET_PATH Main"
    fi
else
    echo "❌ Error: Failed to create $JAVA_FILE"
    exit 1
fi
