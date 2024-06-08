"use client";
import React from "react";
import Link from "next/link"; // Linkコンポーネントをインポート

function OperatorPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* ヘッダーをここに追加 */}
      <header className="bg-white shadow-md p-4 flex justify-between">
        <Link href="/" className="font-bold text-xl">
          Video Transcription Service
        </Link>
        <div>
          <Link href="/transcription" className="text-lg mr-4">
            文字起こし
          </Link>
          <Link href="/operator" className="text-lg">
            運営者
          </Link>
        </div>
      </header>

      <div className="p-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-roboto">
        <h1 className="text-4xl font-bold mb-6">
          株式会社ビデオコンコンバータチャンの会社概要ページ
        </h1>
        {/* 以下、既存のコンテンツ */}
        <p className="mb-4 text-xl">所在地　北海道稚内市</p>
        <p className="mb-6 text-xl">事業内容　ITソリューション</p>
        <div className="mb-6">
          <img
            src="./headquarters.jpg"
            alt="株式会社ビデオコンコンバータチャンの本社"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="mb-6">
          <iframe
            title="headquarters-location"
            src="https://maps.google.com/maps?q=45.4095077,141.6730979&z=15&output=embed"
            className="w-full h-[400px] border-0 rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-6 text-center">
          <Link // <a> タグを Link コンポーネントに変更
            href="/transcription" // リンク先を /transcription に変更
            className="text-xl bg-[#ff6347] px-6 py-3 rounded-full shadow-lg hover:bg-[#ff8250] transition duration-300 ease-in-out"
          >
            文字起こしページへ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OperatorPage;
