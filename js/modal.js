
import { generateCertificate } from './certificateGenerator.js';
import {
    doc,
    getDoc,
} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
import { db } from './firebaseConfig.js';

async function fetchUserDetailsAndGenerateCertificate(userId, courseName) {

    console.log('fetchUserDetailsAndGenerateCertificate userId :', userId);
    console.log('fetchUserDetailsAndGenerateCertificate courseName :', courseName);

    try {
        const userDocRef = doc(db, "users", userId); // Adjust the path to your Firestore structure
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            const userName = userData.name || "User"; // Adjust the field name based on your database
            const quizzes = userData.quizzes;

            if (!quizzes) {
                console.error("No quizzes found in user progress.");
                return;
            }


            // Calculate the average marks
            const totalMarks = Object.values(quizzes).reduce((sum, quiz) => sum + (quiz.marks || 0), 0);
            const totalQuizzes = Object.values(quizzes).length;
            const totalAverage = (totalMarks / totalQuizzes).toFixed(2);

            // Get the completion date
            const completionDate = userData.completionDate
                ? new Date(userData.completionDate.seconds * 1000).toLocaleDateString() // Adjust for Firestore timestamp
                : new Date().toLocaleDateString();

            console.log('fetchUserDetailsAndGenerateCertificate totalAverage :', totalAverage);
            console.log('fetchUserDetailsAndGenerateCertificate userName :', userName);
            console.log('fetchUserDetailsAndGenerateCertificate completionDate :', completionDate);

            // Generate the certificate
            await generateCertificate(userName, courseName, totalAverage, completionDate);
        } else {
            console.error("User document not found!");
        }
    } catch (error) {
        console.error("Error fetching user details:", error);
    }
}

function createModal(message, buttonText, userId, courseName) {

    console.log('createModal message :', message);
    console.log('createModal buttonText :', buttonText);
    console.log('createModal userId :', userId);
    console.log('createModal courseName :', courseName);
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const title = document.createElement('h2');
    title.textContent = '🎉 Congratulations! 🎉';

    const text = document.createElement('p');
    text.textContent = message;

    const button = document.createElement('button');
    button.textContent = buttonText;
    button.className = 'btn-modal';
    button.onclick = async () => {
        // Call the function to fetch user details and generate the certificate
        await fetchUserDetailsAndGenerateCertificate(userId, courseName);
    };

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';  // Simple close button
    closeButton.className = 'btn-close';
    closeButton.onclick = () => modal.remove();  // Remove the modal when clicked

    // Append elements to modal content
    modalContent.appendChild(closeButton); // Add close button
    modalContent.appendChild(title);
    modalContent.appendChild(text);
    modalContent.appendChild(button);

    // Append modal content to modal
    modal.appendChild(modalContent);

    // Add modal to the body
    document.body.appendChild(modal);
}

// Export the functions to use in other files
export { createModal, fetchUserDetailsAndGenerateCertificate };