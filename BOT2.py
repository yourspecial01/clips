import os
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import (
    ApplicationBuilder, CommandHandler, ContextTypes,
    MessageHandler, filters
)
from telegram.constants import ParseMode

load_dotenv()

FILE_ID = "BAACAgUAAxkDAAOKaEx-YsMFKll6yqgAATcXsENAFNPaAALXFgACZJthVg5t8Gm5oVFhNgQ"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if context.args:
        arg = context.args[0].strip()
        if arg == "specialcode123":
            await update.message.reply_document(document=FILE_ID)
            return
    await update.message.reply_text("Access Denied")

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("I can echo your messages. Just send me any text!")

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_message = update.message.text
    await update.message.reply_text(f"You said: {user_message}")

async def upload_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    file_path = r"C:\Movies\onepiece1.mp4"
    try:
        with open(file_path, "rb") as f:
            msg = await update.message.reply_document(document=f, filename="onepiece1.mp4")
            if msg.document:
                print("file_id (document):", msg.document.file_id)
            elif msg.video:
                print("file_id (video):", msg.video.file_id)
            else:
                print("No file_id found in message:", msg)
    except Exception as e:
        await update.message.reply_text(f"Failed to upload file: {e}")

def main():
    TOKEN = os.getenv("TOKEN")
    if not TOKEN:
        raise ValueError("Bot TOKEN not found in environment variables.")

    application = ApplicationBuilder().token(TOKEN).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("upload", upload_command))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    application.run_polling()

if __name__ == "__main__":
    main()
