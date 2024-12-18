

export async function generateCertificate(userName, courseName, totalAverage, completionDate) {

    function capitalizeFirstLetter(str) {
        if (!str) return ''; // Handle empty or undefined strings
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    if (window.jspdf) {

        const { jsPDF } = window.jspdf; // Access jsPDF library
        const doc = new jsPDF();

        console.log('generateCertificate userName: ,', userName);
        console.log('generateCertificate totalAverage: ,', totalAverage);
        console.log('generateCertificate : ,', courseName);
        console.log('generateCertificate : ,', completionDate);

        // Set background color
        doc.setFillColor(255, 255, 255); // White background
        doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

        // Add certificate border
        doc.setLineWidth(3);
        doc.setDrawColor(0, 0, 0); // Black color
        doc.rect(10, 10, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 20); // Create a border

        // Title - "Certificate of Completion"
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(28);
        doc.setTextColor(0, 51, 102); // Dark blue
        doc.text("Certificate of Completion", 105, 40, { align: "center" });

        // Subheading - "This is to certify that"
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0); // Black color
        doc.text(`This is to certify that`, 105, 60, { align: "center" });

        // User Name
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(20);
        doc.setTextColor(101, 169, 194);
        doc.text(capitalizeFirstLetter(userName), 105, 80, { align: "center" });

        // Subheading - "has successfully completed the course"
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0); // Black color
        doc.text(`has successfully completed the course`, 105, 100, { align: "center" });

        // Course Name
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(101, 169, 194);
        doc.text(courseName, 105, 120, { align: "center" });

        // Subheading - "with an average mark of"
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0); // Black color
        doc.text(`with an average mark of`, 105, 140, { align: "center" });

        // Total Average
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(101, 169, 194);
        doc.text(`${totalAverage} Out Of 10`, 105, 160, { align: "center" });

        // Subheading - "Date of Completion"
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0); // Black color
        doc.text(`Date of Completion: ${completionDate}`, 105, 180, { align: "center" });


        // Save the PDF
        doc.save(`${userName}-${courseName}Certificate.pdf`);

    } else {
        console.error('jsPDF library is not loaded');
    }
}
// import { imageUrl } from './imagCertifcate';
// export async function generateCertificate(userName) {
//     if (window.jspdf) {
//         const { jsPDF } = window.jspdf; // Access jsPDF library

//         // Initialize PDF in landscape A4 mode
//         const doc = new jsPDF("l", "mm", "a4");

//         // Add the certificate image as the background
//         const pageWidth = doc.internal.pageSize.width;
//         const pageHeight = doc.internal.pageSize.height;

//         // Replace with your Base64 image string
//         const backgroundImageBase64 = imageUrl;

//         // Add the background image
//         doc.addImage(backgroundImageBase64, "JPEG", 0, 0, pageWidth, pageHeight);

//         // Dynamically add the userName
//         doc.setFont("Helvetica", "bold"); // Font style
//         doc.setFontSize(35); // Adjust font size to match design
//         doc.setTextColor(0, 0, 0); // Black color

//         // Adjust the position for the dynamic userName
//         doc.text(userName, pageWidth / 2, 125, { align: "center" });

//         // Save the generated certificate
//         doc.save(`${userName}-Certificate.pdf`);
//     } else {
//         console.error("jsPDF library is not loaded");
//     }
// }
