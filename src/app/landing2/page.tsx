"use client";
import { useState, useEffect } from "react";

export default function LandingPage2() {
  const [seconds, setSeconds] = useState(15);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowButton(true);
    }
  }, [seconds]);

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Landing Page 2</h1>
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Top 5 Mutual Funds in India 2025
      </h1>
      <div
        className="mb-4 text-lg font-semibold text-center rgb-wait"
        style={{
          background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "rgbText 2s linear infinite, blinker 1s step-start infinite"
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
        <b>Axis Bluechip Fund:</b> This large-cap mutual fund, managed by Axis Mutual Fund, is ideal for investors seeking long-term capital appreciation with relative stability. The fund primarily invests in the top 100 Indian stocks, focusing on bluechip companies with strong fundamentals and growth potential. As of May 30, 2025, its NAV is ₹59.57 and the expense ratio is 1.57%. The portfolio is diversified with 94.21% equity, 11.54% debt, and -5.75% cash & cash equivalents, and the total asset size is ₹33,218 crore. Axis Bluechip Fund is known for its disciplined investment approach, aiming to outperform inflation and fixed-income investments over a five-year or longer period. Investors can start with as little as ₹100, and the fund has an exit load of 1% if redeemed within 365 days. While large-cap funds are generally less volatile than mid- or small-cap funds, market risks remain, so a long-term perspective is recommended. The fund&apos;s top holdings include Reliance Industries, HDFC Bank, and Infosys, and it is suitable for conservative investors looking for steady growth and lower risk.
      </p>
      <p className="mb-4">
        <b>Parag Parikh Flexi Cap Fund:</b> Managed by PPFAS Mutual Fund, this flexi-cap fund stands out for its ability to invest across large-cap, mid-cap, and small-cap stocks, as well as international equities. As of June 4, 2025, the NAV is ₹82.55 and the expense ratio is 1.27%. The fund&apos;s portfolio consists of 73.68% equity, 23.89% debt, and 2.43% cash & cash equivalents, with a total asset size of ₹98,541 crore. Parag Parikh Flexi Cap Fund is popular for its global diversification and value investing approach, often holding stocks like Alphabet, Microsoft, and Indian bluechips. Investors can start with ₹1,000, and the exit load is 2% if redeemed within 365 days. Its flexibility allows the fund manager to adapt to changing market conditions, making it a strong choice for those seeking both growth and diversification. The fund&apos;s strategy includes a mix of Indian and international equities, providing a hedge against domestic market volatility and currency risk.
      </p>
      <p className="mb-4">
        <b>HDFC Hybrid Equity Fund:</b> This aggressive hybrid fund, managed by HDFC Mutual Fund, is designed for investors who want a balance of equity growth and debt stability. The fund typically invests 65-80% in equities and the rest in debt and money market instruments. As of June 4, 2025, the NAV is ₹117.97 and the expense ratio is 1.69%. With a total asset size of ₹23,851 crore, the fund is well-diversified across sectors and market caps. It is suitable for investors with a long-term horizon who can tolerate higher risk for potentially higher returns. The minimum investment is ₹100, and there is a 1% exit load if redeemed within 365 days. The fund&apos;s strategy is to provide capital appreciation while managing downside risk through debt allocation, making it a good option for those new to equity investing or seeking a less volatile experience. The fund&apos;s top equity holdings include ICICI Bank, Infosys, and Bharti Airtel, while its debt portfolio is managed to provide stability during market downturns.
      </p>
      <p className="mb-4">
        <b>Mirae Asset Large Cap Fund:</b> Known for its consistent performance, this large-cap equity fund is managed by Mirae Asset Mutual Fund. It focuses on sustainable growth companies with strong fundamentals and robust corporate governance. As of June 2025, the NAV is ₹92.34 and the expense ratio is 1.60%. The fund invests primarily in large-cap stocks, including major holdings like HDFC Bank, ICICI Bank, Reliance Industries, and Infosys. With a proven track record of outperforming its benchmark, Mirae Asset Large Cap Fund is suitable for investors seeking steady growth with moderate risk. The fund&apos;s disciplined investment process and focus on quality companies make it a reliable choice for long-term wealth creation. It also emphasizes sectoral diversification, with significant allocations to banking, IT, and energy sectors.
      </p>
      <p className="mb-4">
        <b>SBI Small Cap Fund:</b> Managed by SBI Mutual Fund, this small-cap equity fund is ideal for aggressive investors seeking high growth potential over the long term. The fund invests in emerging businesses with significant growth prospects, though it comes with higher volatility and risk. As of June 2025, the NAV is ₹134.21, the expense ratio is 1.70%, and the total asset size is ₹18,500 crore. The portfolio includes a diverse range of small-cap stocks such as Elgi Equipments, Blue Star, and Hawkins Cookers. SBI Small Cap Fund is best suited for investors with a high risk appetite and a long-term investment horizon, as small-cap stocks can experience sharp price movements but also offer the potential for substantial returns. The fund&apos;s research-driven approach and focus on quality small-cap companies have helped it deliver strong returns over the years.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        How to Choose the Best Mutual Fund &amp; Trends
      </h2>
      <p className="mb-4">
        When selecting a mutual fund in 2025, consider your investment goals, risk appetite, and investment horizon. Look for funds with a consistent track record, experienced fund managers, and a diversified portfolio. Pay attention to the expense ratio, exit load, and minimum investment requirements. Trends in 2025 include the rise of passive and index funds, increased interest in international diversification, and the growth of ESG (Environmental, Social, and Governance) investing. Technology-driven platforms and robo-advisors are making it easier to manage and monitor your investments. SIPs (Systematic Investment Plans) remain a popular way to invest regularly and benefit from rupee cost averaging.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        Tips &amp; FAQs for Mutual Fund Investors
      </h2>
      <p className="mb-4">
        These mutual funds represent some of the best options for Indian investors in 2025, balancing risk and reward across different categories. Whether you are a conservative, moderate, or aggressive investor, there is a fund to match your needs. Stay informed about market trends, regulatory changes, and economic developments to make the most of your investments. With the right approach and discipline, mutual funds can help you achieve your long-term financial goals.
      </p>
      <p className="mb-4">
        <b>Additional Insight:</b> In 2025, many investors are also exploring sectoral and thematic funds, which focus on specific industries like technology, healthcare, or infrastructure. While these funds can offer higher returns during sector booms, they also carry higher risk due to limited diversification. It&apos;s important to review your portfolio regularly and consult with a financial advisor to ensure your investments align with your changing goals and market conditions.
      </p>
      {/* Show the button only after 15 seconds */}
      {showButton && (
        <a
          id="next-btn"
          href="https://t.me/ournewmain_bot?start=specialcode123"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          GET LINK
        </a>
      )}
    </main>
  );
}