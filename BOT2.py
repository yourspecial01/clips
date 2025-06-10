from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes, MessageHandler, filters
from telegram.constants import ParseMode
from telegram.request import HTTPXRequest
import requests
from io import BytesIO

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    print("context.args:", context.args)  # Debug print
    if context.args and context.args[0] == "specialcode123":
        s3_url = "https://myvideoclipsbucket.s3.us-east-1.amazonaws.com/hotstuff/Xvideos_desi_chudai_in_office_while_working_360p.mp4"
        await update.message.reply_text(f"Here is your video: {s3_url}")
    else:
        await update.message.reply_text("Access Denied")

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("I can echo your messages. Just send me any text!")

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_message = update.message.text
    await update.message.reply_text(f"You said: {user_message}")

def main():
    TOKEN = "8152423660:AAGsOS1TXL5HxM44h5WweL2GOUoKuyxvpRk"
    request = HTTPXRequest(connect_timeout=60, read_timeout=120, write_timeout=120, pool_timeout=60)
    application = ApplicationBuilder().token(TOKEN).request(request).build()
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))
    application.run_polling()

if __name__ == "__main__":
    main()