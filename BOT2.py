import sqlite3
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes, MessageHandler, filters

def get_video_paths_from_db():
    # Connect to your database (change path as needed)
    conn = sqlite3.connect('videos.db')
    cursor = conn.cursor()
    cursor.execute("SELECT file_path FROM videos")
    videos = [row[0] for row in cursor.fetchall()]
    conn.close()
    return videos

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Check for deep link argument
    if context.args and context.args[0] == "fromlanding":
        await update.message.reply_text("Hello, Enjoy your video clips!")
        video_urls = get_video_paths_from_db()
        for url in video_urls:
            try:
                await update.message.reply_video(video=url)
            except Exception as e:
                await update.message.reply_text(f"Could not send video: {url}\nError: {e}")
    else:
        await update.message.reply_text("Access denied. Please visit the landing page to use this bot.")

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("This is BOT2. I can echo your messages. Just send me any text!")

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_message = update.message.text
    await update.message.reply_text(f"BOT2 says: {user_message}")

def main():
    TOKEN = "8152423660:AAGsOS1TXL5HxM44h5WweL2GOUoKuyxvpRk"
    application = ApplicationBuilder().token(TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))
    application.run_polling()

if __name__ == "__main__":
    main()