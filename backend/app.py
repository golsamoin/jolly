from flask import Flask, request, jsonify
from flask_cors import CORS
import anthropic
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://localhost:3001"])

client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    senior_name = data.get('name', 'there')
    interests = data.get('interests', '')
    reminders = data.get('reminders', [])
    notes = data.get('notes', [])

    system_prompt = f"""You are Jolly, a warm, patient, and caring AI companion for {senior_name}, an older adult. 

Your personality:
- Warm, gentle, and encouraging
- You remember details about {senior_name} and bring them up naturally
- You are never rushed or clinical
- You speak clearly and simply
- You occasionally check in about their day, health, and mood

About {senior_name}:
- Interests: {interests}
- Today's reminders: {', '.join(reminders) if reminders else 'None'}
- Notes from family: {', '.join(notes) if notes else 'None'}

If there are notes from family, weave them into conversation naturally and warmly.
If there are reminders, mention them gently at appropriate moments.
Keep responses concise — 2-4 sentences. Never use bullet points or lists."""

    message = client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=300,
        system=system_prompt,
        messages=[{"role": "user", "content": user_message}]
    )

    return jsonify({"reply": message.content[0].text})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
