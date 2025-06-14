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
ADMIN_CHAT_ID = os.getenv("ADMIN_CHAT_ID")  # Optional for notifications

# File ID of pre-uploaded document
FILE_ID = "BAACAgUAAxkDAAOKaEx-YsMFKll6yqgAATcXsENAFNPaAALXFgACZJthVg5t8Gm5oVFhNgQ"

# Command handlers
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    args = context.args
    if args and args[0].strip() == "specialcode123":
        await update.message.reply_document(document=FILE_ID)
    else:
        await update.message.reply_text("❌ Access Denied. Invalid or missing code.")

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Here's what I can do:\n"
        "- Use /start specialcode123 to access the document\n"
        "- Use /upload to send a file (dev only)\n"
        "- Send me any text and I'll echo it back."
    )

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"You said: {update.message.text}")

async def upload_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    file_path = r"C:\Movies\onepiece1.mp4"
    try:
        with open(file_path, "rb") as f:
            msg = await update.message.reply_document(document=f, filename="onepiece1.mp4")
            print("File ID:", msg.document.file_id if msg.document else "N/A")
    except Exception as e:
        await update.message.reply_text(f"❌ Failed to upload file: {e}")

async def post_init(application: Application) -> None:
    await application.bot.set_my_commands([
        ("start", "Start the bot with access code"),
        ("help", "Show help information"),
        ("upload", "Upload a file (dev only)"),
    ])
    
    if ADMIN_CHAT_ID:
        await application.bot.send_message(
            chat_id=ADMIN_CHAT_ID,
            text="✅ Bot started in polling mode"
        )

def main():
    # Build application
    application = Application.builder()\
        .token(TOKEN)\
        .post_init(post_init)\
        .build()
    
    # Add handlers
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("upload", upload_command))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    # Start polling
    print("Starting bot in polling mode...")
    application.run_polling(
        drop_pending_updates=True,
        allowed_updates=Update.ALL_TYPES,
        poll_interval=1.0  # Seconds between update checks
    )

if __name__ == "__main__":
    main()