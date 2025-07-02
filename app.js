// Multilingual content
const content = {
    en: {
        title: "United African Empire",
        subtitle: "By Decree of Heru GodKing",
        manifesto: "One Continent. One People. One Destiny.",
        pledgeButton: "Pledge Allegiance",
        languageToggle: "Kiswahili",
        formTitle: "Pledge to the Empire",
        nameLabel: "Full Name",
        emailLabel: "Email",
        passwordLabel: "Password (optional)",
        countryLabel: "Country",
        languageLabel: "Preferred Language",
        englishLabel: "English",
        swahiliLabel: "Kiswahili",
        submitButton: "Submit Pledge"
    },
    sw: {
        title: "Dola la Afrika Muungano",
        subtitle: "Kwa Amri ya Heru GodKing",
        manifesto: "Bara Moja. Watu Moja. Hatima Moja.",
        pledgeButton: "Apa Kiapo",
        languageToggle: "English",
        formTitle: "Kiapo kwa Dola",
        nameLabel: "Jina Kamili",
        emailLabel: "Barua Pepe",
        passwordLabel: "Nenosiri (si lazima)",
        countryLabel: "Nchi",
        languageLabel: "Lugha Unayopendelea",
        englishLabel: "Kiingereza",
        swahiliLabel: "Kiswahili",
        submitButton: "Wasilisha Kiapo"
    }
};

let currentLanguage = 'en';

// DOM Elements
const languageToggle = document.getElementById('languageToggle');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const manifesto = document.getElementById('manifesto');
const pledgeButton = document.getElementById('pledgeButton');
const registrationModal = document.getElementById('registrationModal');
const closeModal = document.getElementById('closeModal');
const registrationForm = document.getElementById('registrationForm');
const formTitle = document.getElementById('formTitle');

// Update UI based on language
function updateLanguage() {
    const langContent = content[currentLanguage];
    title.textContent = langContent.title;
    subtitle.textContent = langContent.subtitle;
    manifesto.textContent = langContent.manifesto;
    pledgeButton.textContent = langContent.pledgeButton;
    languageToggle.textContent = langContent.languageToggle;
    formTitle.textContent = langContent.formTitle;
    document.getElementById('nameLabel').textContent = langContent.nameLabel;
    document.getElementById('emailLabel').textContent = langContent.emailLabel;
    document.getElementById('passwordLabel').textContent = langContent.passwordLabel;
    document.getElementById('countryLabel').textContent = langContent.countryLabel;
    document.getElementById('languageLabel').textContent = langContent.languageLabel;
    document.getElementById('englishLabel').textContent = langContent.englishLabel;
    document.getElementById('swahiliLabel').textContent = langContent.swahiliLabel;
    document.getElementById('submitButton').textContent = langContent.submitButton;
}

// Toggle language
languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'sw' : 'en';
    updateLanguage();
});

// Show registration modal
pledgeButton.addEventListener('click', () => {
    registrationModal.style.display = 'flex';
});

// Close modal
closeModal.addEventListener('click', () => {
    registrationModal.style.display = 'none';
});

// Handle form submission
registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const country = document.getElementById('country').value;
    const language = document.querySelector('input[name="language"]:checked').value;
    
    try {
        // Create auth account if password provided
        if (password) {
            await auth.createUserWithEmailAndPassword(email, password);
        }
        
        // Add citizen to Firestore
        await db.collection('citizens').add({
            name,
            email,
            country,
            language,
            pledged: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        alert(currentLanguage === 'en' 
            ? "Pledge accepted! Long live the Empire!" 
            : "Kiapo chamekubaliwa! Dola iendelee!");
        
        registrationModal.style.display = 'none';
        registrationForm.reset();
        
    } catch (error) {
        console.error("Registration error:", error);
        alert(currentLanguage === 'en' 
            ? `Registration failed: ${error.message}` 
            : `Kusajili kumeshindwa: ${error.message}`);
    }
});

// Initialize
updateLanguage();

// Add this to your existing app.js
document.addEventListener('DOMContentLoaded', function() {
    // Your existing code
    
    // Add this for the new button
    const learnSwahiliButton = document.getElementById('learnSwahiliButton');
    if (learnSwahiliButton) {
        learnSwahiliButton.addEventListener('click', function() {
            window.location.href = 'kiswahili-plan.html';
        });
    }
    
    // Your existing code
});