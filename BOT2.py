import os
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import (
    Application,
    CommandHandler,
    MessageHandler,
    ContextTypes,
    filters
)

# Load environment variables
load_dotenv()
TOKEN = os.getenv("TOKEN")

# File ID of pre-uploaded document
FILE_ID = "BAACAgUAAxkDAAOKaEx-YsMFKll6yqgAATcXsENAFNPaAALXFgACZJthVg5t8Gm5oVFhNgQ"

# /start with optional argument
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    args = context.args
    if args and args[0].strip() == "specialcode123":
        await update.message.reply_document(document=FILE_ID)
    else:
        await update.message.reply_text("❌ Access Denied. Invalid or missing code.")

# /help command
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Here's what I can do:\n"
        "- Use /start specialcode123 to access the document\n"
        "- Use /upload to send a file (dev only)\n"
        "- Send me any text and I'll echo it back."
    )

# Echo any text messages
async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_message = update.message.text
    await update.message.reply_text(f"You said: {user_message}")

# Upload command to send local file (developer only)
async def upload_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    file_path = r"C:\Movies\onepiece1.mp4"
    try:
        with open(file_path, "rb") as f:
            msg = await update.message.reply_document(document=f, filename="onepiece1.mp4")
            print("file_id (document):", msg.document.file_id if msg.document else "N/A")
    except Exception as e:
        await update.message.reply_text(f"❌ Failed to upload file: {e}")

async def post_init(application: Application) -> None:
    await application.bot.set_my_commands([
        ("start", "Start the bot with access code"),
        ("help", "Show help information"),
        ("upload", "Upload a file (dev only)"),
    ])

def main():
    application = Application.builder().token(TOKEN).post_init(post_init).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("upload", upload_command))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    application.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()