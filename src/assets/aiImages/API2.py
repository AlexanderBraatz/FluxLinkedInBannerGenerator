from flask import Flask, request, jsonify
import replicate
import qrcode

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_KEY = "xxxfind in .envxxxxxxxxx"
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
        "guidance": 3.5,
        "num_outputs": 1,
        "aspect_ratio": "21:9",
        "output_quality": 80,
        "prompt_strength": 0.8,
        "num_inference_steps": 28
    }

    try:
        # Das Bild generieren lassen
        output = client.run("black-forest-labs/flux-schnell", input=input)

        generate_qr_code(output[0], "qrImage.png")

        # Die URL des generierten Bildes zurückgeben
        return jsonify({"image_url": output}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

def generate_qr_code(link, filename='qr_code.png'):
    """
    Diese Funktion nimmt einen Link und erstellt einen QR-Code daraus.
    Der QR-Code wird als Bild gespeichert.

    :param link: Der URL-Link, der in einen QR-Code umgewandelt wird.
    :param filename: Der Dateiname für das gespeicherte Bild (Standard: 'qr_code.png').
    """
    # Erstelle ein QR-Code-Objekt
    qr = qrcode.QRCode(
        version=1,  # Version definiert die Größe des QR-Codes
        error_correction=qrcode.constants.ERROR_CORRECT_L,  # Fehlerkorrektur-Level
        box_size=10,  # Größe jeder Box im QR-Code
        border=4,  # Dicke des Randes
    )

    # Füge den Link zum QR-Code hinzu
    qr.add_data(link)
    qr.make(fit=True)

    # Generiere das QR-Code-Bild
    img = qr.make_image(fill='black', back_color='white')

    # Speichere das Bild
    img.save(filename)

    print(f"QR-Code erfolgreich erstellt und als {filename} gespeichert.")


if __name__ == '__main__':
    app.run(debug=True)