import os
import asyncio
from telegram import Update
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters
)

# Configuration
TOKEN = "7610689819:AAEsL_mv6cO0L6DMxtOE02HGt4PptPnrEuk"  # Your bot token
ADMIN_CHAT_ID = "7370518089"  # Your admin chat ID
WEBSITE_URL = "https://clips-six-pink.vercel.app/"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handler for /start command"""
    await update.message.reply_text(
        f"👋 Welcome! Get videos at:\n{WEBSITE_URL}\n\nUse /help for commands.",
        disable_web_page_preview=True
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handler for /help command"""
    await update.message.reply_text(
        "🤖 Available Commands:\n"
        "/start - Get the video link\n"
        "/help - Show this message"
    )

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Echoes non-command text messages"""
    await update.message.reply_text(f"You said: {update.message.text}")

async def send_admin_notification(application):
    """Sends startup notification to admin"""
    try:
        await application.bot.send_message(
            chat_id=ADMIN_CHAT_ID,
            text="🟢 Bot started successfully",
            disable_notification=True
        )
    except Exception as e:
        print(f"⚠️ Admin notification failed: {e}")

def main():
    """Start the bot"""
    # Build application
    application = ApplicationBuilder()\
        .token(TOKEN)\
        .post_init(send_admin_notification)\
        .build()

    # Register handlers
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    # Start polling
    print("🤖 Starting bot...")
    application.run_polling(
        drop_pending_updates=True,
        allowed_updates=Update.ALL_TYPES,
        poll_interval=1.0  # 1 second between checks
    )

if __name__ == "__main__":
    main()