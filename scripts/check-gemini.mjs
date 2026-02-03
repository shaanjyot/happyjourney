const key = process.env.GEMINI_API_KEY;
if (!key) {
    console.error('No key found in environment.');
    process.exit(1);
}

async function check() {
    try {
        console.log('Checking available models with your key...');
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
        const data = await response.json();
        if (data.error) {
            console.error('API Error:', data.error.message);
            return;
        }
        console.log('Available models:');
        data.models.forEach(m => console.log(`- ${m.name.replace('models/', '')} (Supported: ${m.supportedGenerationMethods.join(', ')})`));
    } catch (e) {
        console.error('Fetch failed:', e.message);
    }
}

check();
