// Initialize arrays for each subject
let DSA = [];
let PL = [];
let Networks = [];

// Function to display subjects and get user's subject choice
function selectSubject() {
    let subject = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks");
        if (subject === "A") return DSA;
            else if (subject === "B") return PL;
                else if (subject === "C") return Networks;
                    else return null;
                    }

                    // Function for operations on selected subject
                    function operations(subjectArray) {
                        let operation = prompt("Choose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

                            if (operation === "A") {
                                    let name = prompt("Enter the name of the student to enroll:");
                                            subjectArray.push(name);
                                                } else if (operation === "B") {
                                                        console.log("Currently enrolled students:", subjectArray);
                                                                let name = prompt("Enter the name of the student to unenroll:");
                                                                        let index = subjectArray.indexOf(name);
                                                                                if (index !== -1) subjectArray.splice(index, 1);
                                                                                        else console.log("Student not found.");
                                                                                            } else if (operation === "C") {
                                                                                                    main();
                                                                                                            return;
                                                                                                                } else if (operation === "D") {
                                                                                                                        console.log("Final Enrolled Students:");
                                                                                                                                console.log("DSA:", DSA);
                                                                                                                                        console.log("PL:", PL);
                                                                                                                                                console.log("Networks:", Networks);
                                                                                                                                                        return;
                                                                                                                                                            }
                                                                                                                                                                operations(subjectArray); // Loop back to operations
                                                                                                                                                                }

                                                                                                                                                                // Main function to start the program
                                                                                                                                                                function main() {
                                                                                                                                                                    let subjectArray = selectSubject();
                                                                                                                                                                        if (subjectArray) operations(subjectArray);
                                                                                                                                                                        }

                                                                                                                                                                        main();