import os
from telegram import Update
from telegram.ext import (
    ApplicationBuilder, 
    CommandHandler, 
    ContextTypes, 
    MessageHandler, 
    filters
)
from telegram.constants import ParseMode

# Hardcoded token (not recommended for production – use dotenv or environment vars instead)
TOKEN = "7610689819:AAEsL_mv6cO0L6DMxtOE02HGt4PptPnrEuk"

# Command: /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    website_url = "https://clips-six-pink.vercel.app/"
    await update.message.reply_text(
        f"👋 Welcome! To get the videos, visit this page:\n{website_url}\n\nUse /help to see what I can do."
    )

# Command: /help
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "🤖 I can do the following:\n"
        "- Respond to /start and /help\n"
        "- Echo back any text message you send me."
    )

# Generic text messages (not commands)
async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_message = update.message.text
    await update.message.reply_text(f"You said: {user_message}")

# Main function to start bot
def main():
    application = ApplicationBuilder().token(TOKEN).build()

    # Add handlers
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    # Run the bot
    application.run_polling()

if __name__ == "__main__":
    main()
