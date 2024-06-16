"use client";
import React from "react";

function MainComponent() {
  const [transcription, setTranscription] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoUrl = e.target.videoUrl.value;
    const response = await fetch(`https://videosc-api.onrender.com/transcribe/?url=${videoUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setTranscription(data.full_text);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-md p-4 flex justify-between">
        <a href="/" className="font-bold text-xl">
          Video Transcription Service
        </a>
        <a href="/operator" className="text-lg">
          運営者
        </a>
      </header>
      <main className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-bold mb-6">動画の全文文字起こし</h1>
        <form
          className="w-[400px] bg-white p-8 rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <label className="block mb-4">
            <span className="text-gray-700">動画のURL:</span>
            <input
              name="videoUrl"
              type="url"
              className="mt-1 block w-full p-2 border rounded"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            送信
          </button>
        </form>
        {transcription && (
          <div className="w-[400px] bg-white p-8 rounded shadow-md mt-6">
            <h2 className="text-xl font-bold mb-4">全文文字起こし:</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{transcription}</p>
          </div>
        )}
      </main>
    </div>
  );
}

function OperatorPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
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
      <main className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-bold mb-6">運営者情報</h1>
        <div className="w-[400px] bg-white p-8 rounded shadow-md">
          <p className="text-gray-700 mb-4">運営者名: John Doe</p>
          <p className="text-gray-700 mb-4">メール: johndoe@example.com</p>
        </div>
      </main>
    </div>
  );
}

export default MainComponent;