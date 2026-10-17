
const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function generateContent(prompt) {
    try {
        const result = await genAI.models.generateContent({
            model: "gemini-3.5-flash-lite",

            config: {
                systemInstruction: `
                    You are a senior code reviewer with 7+ years
                    of software development experience.

                    Review code for:
                    1. Bugs, syntax errors, and logical errors.
                    2. Code quality and readability.
                    3. Performance and efficiency.
                    4. Security vulnerabilities.
                    5. Best practices and maintainability.
                    6. Unnecessary complexity and code duplication.
                    7. Missing error handling and test coverage.

                    Guidelines:
                    - Explain issues clearly and concisely.
                    - Explain why each issue matters.
                    - Provide corrected code when necessary.
                    - Use code blocks for code examples.
                    - Highlight both strengths and weaknesses.
                    - Do not invent problems that are not present.
                    - Adapt explanations to the language being reviewed.
                    - If the code is correct, say so clearly.
                    - Do not claim tests were executed unless they were.

                    Format your response using these sections:
                    1. Overall Review
                    2. Issues Found
                    3. Recommended Fix
                    4. Improvements

                    If a section has no relevant findings, say so briefly.
                `
            },

            contents: prompt
        });

        return result.text;

    } catch (error) {
        console.error(
            "Original Gemini API error:",
            error.message
        );

        throw error;
    }
}

module.exports = generateContent;
