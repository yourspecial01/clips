import os
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import (
    ApplicationBuilder, CommandHandler, ContextTypes,
    MessageHandler, filters
)
from telegram.constants import ParseMode

# Load environment variables from .env file
load_dotenv()

# Document file ID (cached from previous upload)
FILE_ID = "BAACAgUAAxkDAAOKaEx-YsMFKll6yqgAATcXsENAFNPaAALXFgACZJthVg5t8Gm5oVFhNgQ"

# /start with optional argument
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if context.args:
        arg = context.args[0].strip()
        if arg == "specialcode123":
            await update.message.reply_document(document=FILE_ID)
            return
    await update.message.reply_text("❌ Access Denied. Invalid or missing code.")

# /help command
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Here’s what I can do:\n"
        "- Use `/start specialcode123` to access the document\n"
        "- Use `/upload` to send a file (only for devs)\n"
        "- Send me any text and I’ll echo it back."
    )

# Generic text handler (echo)
async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_message = update.message.text
    await update.message.reply_text(f"You said: {user_message}")

# /upload command (local file upload)
async def upload_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    file_path = r"C:\Movies\onepiece1.mp4"
    try:
        with open(file_path, "rb") as f:
            msg = await update.message.reply_document(document=f, filename="onepiece1.mp4")
            if msg.document:
                print("✅ file_id (document):", msg.document.file_id)
            elif msg.video:
                print("✅ file_id (video):", msg.video.file_id)
            else:
                print("⚠️ No file_id found in message:", msg)
    except Exception as e:
        await update.message.reply_text(f"❌ Failed to upload file: {e}")

# Main entry point
def main():
    TOKEN = os.getenv("TOKEN")
    if not TOKEN:
        raise ValueError("❗ Bot TOKEN not found in environment variables (.env).")

    application = ApplicationBuilder().token(TOKEN).build()

    # Command handlers
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("upload", upload_command))

    # Message handler
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    # Start bot
    application.run_polling()

if __name__ == "__main__":
    main()
