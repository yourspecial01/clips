import sqlite3

conn = sqlite3.connect('videos.db')
cursor = conn.cursor()

# Use the public S3 Object URL
video_urls = [
    'https://myvideoclipsbucket.s3.us-east-1.amazonaws.com/john-wick-chapter-4-8000x4500-12559.jpg'
]

for url in video_urls:
    cursor.execute("INSERT INTO videos (file_path) VALUES (?)", (url,))

conn.commit()
conn.close()

print("Video URLs inserted!")