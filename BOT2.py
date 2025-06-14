import os
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext

# Load environment variables from .env file
load_dotenv()
TOKEN = os.getenv("TOKEN")

# Document file ID (cached from previous upload)
FILE_ID = "BAACAgUAAxkDAAOKaEx-YsMFKll6yqgAATcXsENAFNPaAALXFgACZJthVg5t8Gm5oVFhNgQ"

# /start with optional argument
def start(update: Update, context: CallbackContext):
    args = context.args
    if args:
        arg = args[0].strip()
        if arg == "specialcode123":
            update.message.reply_document(document=FILE_ID)
            return
    update.message.reply_text("❌ Access Denied. Invalid or missing code.")

# /help command
def help_command(update: Update, context: CallbackContext):
    update.message.reply_text(
        "Here’s what I can do:\n"
        "- Use /start specialcode123 to access the document\n"
        "- Use /upload to send a file (only for devs)\n"
        "- Send me any text and I’ll echo it back."
    )

# Generic text handler (echo)
def echo(update: Update, context: CallbackContext):
    user_message = update.message.text
    update.message.reply_text(f"You said: {user_message}")

# /upload command (local file upload)
def upload_command(update: Update, context: CallbackContext):
    file_path = r"C:\Movies\onepiece1.mp4"
    try:
        with open(file_path, "rb") as f:
            msg = update.message.reply_document(document=f, filename="onepiece1.mp4")
            # file_id will be printed in your server logs
            print("file_id (document):", msg.document.file_id if msg.document else "N/A")
    except Exception as e:
        update.message.reply_text(f"❌ Failed to upload file: {e}")

def main():
    updater = Updater(TOKEN, use_context=True)
    dp = updater.dispatcher

    dp.add_handler(CommandHandler("start", start, pass_args=True))
    dp.add_handler(CommandHandler("help", help_command))
    dp.add_handler(CommandHandler("upload", upload_command))
    dp.add_handler(MessageHandler(Filters.text & ~Filters.command, echo))

    updater.start_polling()
    updater.idle()

if __name__ == "__main__":
    main()
    