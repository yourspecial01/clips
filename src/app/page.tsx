"use client";

import { useEffect, useState } from "react";

export default function LandingPage1() {
  // Set initial seconds to 15
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Show the button when timer ends
      const btn = document.getElementById("next-btn");
      if (btn) btn.style.display = "inline-block";
    }
  }, [seconds]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Welcome 1st Page 
        </h1>
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Top 5 Gaming Phones in 2025
        </h1>
        <div
          className="mb-4 text-lg font-semibold text-center rgb-wait"
          style={{
            background:
              "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "rgbText 2s linear infinite, blinker 1s step-start infinite",
          }}
        >
          Please wait for {seconds} second{seconds !== 1 ? "s" : ""}.
        </div>
        <style>
          {`
            @keyframes rgbText {
              0% { filter: hue-rotate(0deg); }
              100% { filter: hue-rotate(360deg); }
            }
            @keyframes blinker {
              50% { opacity: 0; }
            }
            .rgb-wait {
              display: inline-block;
            }
          `}
        </style>
        <p className="mb-4">
          The ASUS ROG Phone 8 Pro, priced around ₹89,999, is a powerhouse designed
          for gamers who demand the best. Its 6.78-inch FHD+ AMOLED display supports
          a 165Hz refresh rate and HDR10+, making every game look stunningly smooth
          and vibrant. Powered by the Snapdragon 8 Gen 3 and up to 24GB RAM, this
          phone handles even the most demanding titles with ease. Its 6000mAh battery
          and 65W fast charging ensure you can play for hours without interruption,
          while advanced vapor chamber cooling keeps the device running cool. Features
          like AirTrigger controls, customizable RGB lighting, and dual front-facing
          speakers create an immersive gaming experience, and WiFi 7 support ensures
          lag-free online play.
        </p>
        <p className="mb-4">
          The Nubia RedMagic 9 Pro+ is a high-performance gaming smartphone designed
          for enthusiasts who demand speed, power, and immersive gameplay. It features
          a 6.8-inch AMOLED display with 120Hz refresh rate and 1600 nits peak
          brightness, ensuring smooth visuals and vibrant colors. The phone is powered
          by the Snapdragon 8 Gen 3 chipset, delivering top-tier performance with up
          to 24GB RAM and 1TB UFS 4.0 storage, making it one of the most powerful
          gaming devices available.
          <br />
          A standout feature is its built-in cooling fan and ICE 13.0 Magic Cooling
          System, which significantly reduces CPU core temperature by up to 25°C,
          ensuring sustained performance during intense gaming sessions. The
          pressure-sensitive shoulder triggers with 520Hz touch-sensing provide a
          console-like experience, enhancing precision and control.
          <br />
          The triple-camera system includes a 50MP main sensor, a 50MP ultrawide lens,
          and a 2MP macro camera, offering high-quality photography and 8K video
          recording. The 16MP under-display front camera ensures a seamless screen
          experience while maintaining excellent selfie quality.
          <br />
          For audio, the stereo speakers with Snapdragon Sound and Hi-Res audio
          deliver immersive sound quality, enhancing the gaming and entertainment
          experience. The 5500mAh battery supports 165W fast charging, fully charging
          the device in just 16 minutes, ensuring minimal downtime.
          <br />
          With its sleek, flat rear design, aviation aluminum frame, and RGB lighting
          customization, the RedMagic 9 Pro+ is not just a gaming powerhouse but also
          a stylish device. Whether you&apos;re gaming, streaming, or capturing stunning
          photos, this phone is built to excel in every aspect. Would you like to
          explore its pricing or availability?
        </p>
        <p className="mb-4">
          The iPhone 16 Pro Max is Apple&apos;s latest flagship, designed to deliver
          top-tier performance, premium aesthetics, and cutting-edge technology. It
          features a 6.9-inch Super Retina XDR OLED display with ProMotion technology,
          offering adaptive refresh rates up to 120Hz for ultra-smooth visuals. The A18
          Pro chip powers the device, delivering exceptional speed and efficiency with
          its 6-core CPU and GPU, making it ideal for gaming, multitasking, and
          professional use.
          <br />
          The camera system includes a 48MP main sensor, a 48MP ultra-wide lens, and a
          12MP periscope telephoto lens with 5x optical zoom, ensuring stunning
          photography and videography. The LiDAR scanner enhances depth sensing for
          improved AR experiences and low-light photography. The Titanium frame and
          Ceramic Shield front provide enhanced durability, while the IP68 rating
          ensures resistance to dust and water.
          <br />
          The 4685mAh battery supports fast charging, ensuring extended usage without
          frequent recharges. The device also features MagSafe wireless charging,
          allowing seamless power-ups. The NVMe storage options go up to 1TB, ensuring
          ample space for apps, games, and media. The stereo speakers with Dolby
          Atmos deliver immersive sound quality, enhancing the entertainment
          experience.
          <br />
          For security, the Face ID system ensures fast and secure authentication.
          The Dynamic Island feature provides an interactive experience, adapting to
          notifications and live activities. The Always-On display keeps essential
          information visible without draining battery life. The iOS 18 software
          introduces new AI-powered features, enhancing productivity and
          personalization.
          <br />
          Gaming on the iPhone 16 Pro Max is enhanced by Apple Arcade, MetalFX
          upscaling, and exclusive iOS titles, making it a favorite among mobile
          gamers. The 5G connectivity ensures ultra-fast internet speeds, while Wi-Fi
          7 provides seamless wireless performance. The USB-C port replaces Lightning,
          offering faster data transfer and charging capabilities.
          <br />
          The sleek design comes in Black Titanium, White Titanium, Natural Titanium,
          and Desert Titanium finishes, adding a premium touch. The textured matte
          glass back enhances grip and aesthetics. The Action Button allows
          customizable shortcuts, improving accessibility. The Apple Intelligence
          system integrates AI-driven enhancements for smarter interactions.
          <br />
          With its advanced camera capabilities, powerful chipset, and premium build,
          the iPhone 16 Pro Max is a top-tier device for professionals, gamers, and
          tech enthusiasts. Whether you&apos;re capturing stunning photos, gaming at high
          frame rates, or enjoying immersive media, this device excels in every
          aspect. You can explore more details here. Would you like to check its
          availability or compare it with other flagship smartphones?
        </p>
        <p className="mb-4">
          The Samsung Galaxy S24 Ultra is a premium flagship smartphone that combines
          cutting-edge technology with a sleek design. It features a 6.8-inch Dynamic
          LTPO AMOLED 2X display with a 120Hz refresh rate, HDR10+ support, and an
          impressive 2600 nits peak brightness, ensuring vibrant visuals and smooth
          performance.
          <br />
          Powered by the Snapdragon 8 Gen 3 chipset, the device delivers top-tier
          performance with 12GB RAM and storage options ranging from 256GB to 1TB UFS
          4.0. The quad-camera system includes a 200MP main sensor, a 50MP periscope
          telephoto lens with 5x optical zoom, a 10MP telephoto lens with 3x optical
          zoom, and a 12MP ultrawide lens, offering professional-grade photography
          and 8K video recording.
          <br />
          The 5000mAh battery supports 45W fast charging and 15W wireless charging,
          ensuring long-lasting power. The S Pen integration enhances productivity,
          allowing precise input and creative functionality. The IP68 rating ensures
          dust and water resistance, making it a durable choice.
          <br />
          With One UI 6.1.1 based on Android 14, the Galaxy S24 Ultra offers a seamless
          user experience with seven years of software updates. Whether you&apos;re gaming,
          capturing stunning photos, or multitasking, this device excels in every
          aspect. Would you like to explore its pricing or compare it with other
          flagship smartphones?
        </p>
        <p className="mb-4">
          The OnePlus 12 is a flagship smartphone that delivers top-tier performance,
          premium design, and cutting-edge features. It boasts a 6.82-inch QHD+ Fluid
          AMOLED display with LTPO technology, offering a 1-120Hz dynamic refresh rate
          and 4500 nits peak brightness, ensuring stunning visuals and smooth
          responsiveness.
          <br />
          Powered by the Snapdragon 8 Gen 3 chipset, the OnePlus 12 provides
          exceptional speed and efficiency, making it ideal for gaming, multitasking,
          and professional use. It comes with up to 16GB LPDDR5X RAM and 512GB UFS 4.0
          storage, ensuring seamless performance and ample space for apps, games, and
          media.
          <br />
          The triple-camera system includes a 50MP main sensor, a 64MP periscope
          telephoto lens with 3x optical zoom, and a 48MP ultrawide lens, offering
          versatile photography capabilities. The 32MP front camera ensures high-quality
          selfies and video calls.
          <br />
          For durability, the IP65 rating provides dust and water resistance, while the
          Corning Gorilla Glass Victus 2 protects the display. The 5400mAh battery
          supports 100W wired charging and 50W wireless charging, ensuring long-lasting
          power with rapid recharging.
          <br />
          Running on OxygenOS 14 based on Android 14, the OnePlus 12 offers a clean and
          feature-rich user experience. Whether you&apos;re gaming, capturing stunning
          photos, or multitasking, this device excels in every aspect. Would you like
          to explore its pricing or compare it with other flagship smartphones?
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">
          Choosing the Best Gaming Phone &amp; Trends
        </h2>
        <p className="mb-4">
          When selecting a gaming phone in 2025, prioritize the latest processors
          (Snapdragon 8 Gen 3 or Apple A17 Pro), at least 8GB RAM, and high refresh
          rate AMOLED displays for immersive visuals. Look for advanced cooling
          systems, large batteries (5000mAh+), and fast charging to support long
          sessions. Features like shoulder triggers, customizable RGB, and stereo
          speakers can enhance your experience, while gaming software and accessory
          support add further value. The trend is moving towards WiFi 7, built-in
          cooling fans, and AI-based performance tuning. Cloud gaming integration,
          improved haptics, and immersive audio are also shaping the future of
          mobile gaming.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">
          Tips &amp; FAQs for Mobile Gamers
        </h2>
        <p className="mb-4">
          To get the most out of your gaming phone, keep your device updated, use a
          quality screen protector and case, and monitor temperatures during long
          sessions. Adjust in-game settings for optimal performance and battery life,
          and consider gaming triggers or controllers for competitive play. Take
          regular breaks to avoid eye strain and fatigue. Most gaming phones are
          excellent for daily use, offering top-tier cameras and build quality. With
          proper care, they last as long as any flagship device, though heavy gaming
          may impact battery health over time. Many support a range of accessories,
          and if you&apos;re a serious gamer, investing in a gaming phone in 2025 is well
          worth it.
        </p>
        <p className="mb-4">
          These phones represent the best options for mobile gamers in 2025, offering
          a mix of raw power, display quality, battery life, and gaming-specific
          features. Choose the one that fits your needs and budget for the ultimate
          gaming experience!
        </p>
        <p>It&apos;s a great phone!</p>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button
            id="next-btn"
            style={{
              display: "none",
              background: "red",
              color: "white",
              padding: "8px 24px",
              borderRadius: 8,
              fontSize: "1em",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/landing2")}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
