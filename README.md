
# *Here's how the Astra chatbot works:*

1. **User Input**:
   - Users can input messages either as text through a text input field or as voice messages using voice recognition capabilities (utilizing libraries like voice-to-text ReactJS library command to install- npm i react-speech-recognition / link -<href>https://www.npmjs.com/package/react-speech-recognition</href>.

2. **Sending Messages to Gemini API**:
   - Upon submission, the application sends the user's message to the Google Gemini API for processing. The API then analyzes the input and generates a response based on its natural language understanding capabilities.

3. **Receiving and Displaying Responses**:
   - The Gemini API sends back a response to the React application, containing information or answers related to the user query.
   - The application displays this response in a designated section of the UI, such as the main chat window or result div.

4. **Text-to-Speech Functionality**:
   - As an additional feature, the application uses browser-based text-to-speech functionality (ReactJS library command> npm i react-speech / link - <href>https://www.npmjs.com/package/react-speech</href>) to audibly read the response from the Gemini API. This feature enhances user interaction by providing both visual and auditory feedback.

5. **User Interaction**:
   - Users can continue interacting with the chatbot by providing further input. New messages are sent to the Gemini API, responses are received, and displayed in the UI, maintaining a conversational flow.

6. **Integration and Implementation**:
   - Implementation involves integrating React components with APIs for handling user input, communicating with the Gemini API for message processing, and updating the UI with received responses.

7. **Accessibility via Internet**:
   - The web application is accessible over the internet, allowing users to open and interact with it from their browsers on any device.

8. **Storing Past Chats**:
   - The application includes a feature to store past chat sessions. This involves saving chat histories locally in the browser.

This setup creates an engaging AI chatbot experience within a React application, leveraging the powerful capabilities of the Google Gemini API while ensuring accessibility, usability, and continuity of interaction for users.

# Sequence Diagram-
<a href="https://ibb.co/g7tqz0q"><img src="https://i.ibb.co/4f4vPbv/diagram-export-6-29-2024-10-52-58-AM.png" alt="diagram-export-6-29-2024-10-52-58-AM" width="400"></a>

# Flow Diagram-
<a href="https://ibb.co/Sn0mHV8"><img src="https://i.ibb.co/Kq7sBVk/diagram-export-6-29-2024-11-00-05-AM.png" alt="diagram-export-6-29-2024-11-00-05-AM" width="400"></a>


