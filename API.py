from flask import Flask, request, jsonify
import replicate

app = Flask(__name__)

API_KEY = "xxxxx"
client = replicate.Client(api_token=API_KEY)


@app.route('/generate', methods=['GET'])
def generate_image():
    prompt = request.args.get('prompt')

    if not prompt:
        return jsonify({"error": "Bitte gib einen Prompt an."}), 400

    # Eingabeparameter für das Modell definieren
    input = {
        "prompt": prompt,
        "output_format": "png",
        "disable_safety_checker": True,
    }

    try:
        # Das Bild generieren lassen
        output = client.run("black-forest-labs/flux-schnell", input=input)

        # Die URL des generierten Bildes zurückgeben
        return jsonify({"image_url": output}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)