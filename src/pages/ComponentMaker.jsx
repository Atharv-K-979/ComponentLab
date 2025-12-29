import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Select from 'react-select';
import { BsStars } from 'react-icons/bs';
import { HiOutlineCode } from 'react-icons/hi';
import Editor from '@monaco-editor/react';
import { IoCloseSharp, IoCopy } from 'react-icons/io5';
import { PiExportBold } from 'react-icons/pi';
import { ImNewTab } from 'react-icons/im';
import { FiRefreshCcw } from 'react-icons/fi';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

// Use environment variable if set, otherwise use relative path for production or localhost for dev
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.PROD ? '' : 'http://localhost:3001');

const ComponentMaker = () => {

  const options = [
    { value: 'html-css', label: 'HTML + CSS' },
    { value: 'html-tailwind', label: 'HTML + Tailwind CSS' },
    { value: 'html-bootstrap', label: 'HTML + Bootstrap' },
    { value: 'html-css-js', label: 'HTML + CSS + JS' },
    { value: 'html-tailwind-bootstrap', label: 'HTML + Tailwind + Bootstrap' },
  ];

  const [outputScreen, setOutputScreen] = useState(false);
  const [tab, setTab] = useState(1);
  const [prompt, setPrompt] = useState("");
  const [frameWork, setFrameWork] = useState(options[0]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [isNewTabOpen, setIsNewTabOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  async function getResponse() {
    if (!prompt.trim()) return toast.error("Please describe your component first");

    try {
      setLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          framework: frameWork.value
        })
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle different error types
        if (data.error === 'API_KEY_MISSING') {
          toast.error('API key not configured. Please add GEMINI_API_KEY to your .env file and restart the server.');
        } else if (data.error === 'API_KEY_INVALID') {
          toast.error('Invalid API key. Please check your GEMINI_API_KEY in .env file and get a new key from https://ai.google.dev/', { 
            autoClose: 10000 
          });
        } else if (data.error === 'RESOURCE_EXHAUSTED') {
          toast.error('API quota exceeded. Please try again later or check your API key quota.', { 
            autoClose: 8000
          });
        } else if (data.error === 'TIMEOUT') {
          toast.error('Request timed out. Please try again with a simpler description.');
        } else {
          toast.error(data.error || data.message || 'Something went wrong while generating code');
        }
        setLoading(false);
        return;
      }

      if (!data.code || data.code.trim().length === 0) {
        toast.error("No code generated. Please try a different description.");
        setLoading(false);
        return;
      }

      setCode(data.code);
      setOutputScreen(true);
      toast.success("Component generated successfully!");
      
    } catch (error) {
      console.error("Error generating component:", error);
      toast.error("Failed to connect to server. Please ensure the backend server is running on port 3001.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  const copyCode = async () => {
    if (!code.trim()) return toast.error("No code to copy");
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Code copied to clipboard");
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast.error("Failed to copy");
    }
  };

  const downnloadFile = () => {
    if (!code.trim()) return toast.error("No code to download");
    const fileName = "ComponentLab-Code.html"
    const blob = new Blob([code], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("File downloaded");
  };


  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 lg:px-16 py-6">
          {/* Left Section */}
          <div className="w-full py-6 rounded-xl bg-[#141319] mt-5 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className='text-[25px] font-semibold sp-text'>AI Component Generator</h3>
            </div>
            <p className='text-gray-400 mt-2 text-[16px]'>Describe your component and let AI code it for you.</p>
            <p className='text-[15px] font-[700] mt-4'>Framework</p>
            <Select
              className='mt-2'
              options={options}
              value={frameWork}
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#111",
                  borderColor: "#333",
                  color: "#fff",
                  boxShadow: "none",
                  "&:hover": { borderColor: "#555" }
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#111",
                  color: "#fff"
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isSelected
                    ? "#333"
                    : state.isFocused
                      ? "#222"
                      : "#111",
                  color: "#fff",
                  "&:active": { backgroundColor: "#444" }
                }),
                singleValue: (base) => ({ ...base, color: "#fff" }),
                placeholder: (base) => ({ ...base, color: "#aaa" }),
                input: (base) => ({ ...base, color: "#fff" })
              }}
              onChange={(selected) => setFrameWork(selected)}
            />
            <p className='text-[15px] font-[700] mt-5'>Describe your component</p>
            <textarea
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              className='w-full min-h-[200px] rounded-xl bg-[#09090B] mt-3 p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 resize-none'
              placeholder="Describe your component in detail and AI will generate it..."
            ></textarea>
            <div className="flex items-center justify-between mt-3">
              <p className='text-gray-400 text-sm'>
                Click on generate button to get your code
              </p>
              <button
                onClick={getResponse}
                disabled={loading}
                className="flex items-center p-3 rounded-lg border-0 bg-gradient-to-r from-purple-400 to-purple-600 px-5 gap-2 transition-all hover:opacity-80 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? <ClipLoader color='white' size={18} /> : <BsStars />}
                Generate
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative mt-2 w-full h-[80vh] min-h-[600px] bg-[#141319] rounded-xl overflow-hidden">
            {
              !outputScreen ? (
                <div className="w-full h-full flex items-center flex-col justify-center">
                  <div className="p-5 w-[70px] flex items-center justify-center text-[30px] h-[70px] rounded-full bg-gradient-to-r from-purple-400 to-purple-600">
                    <HiOutlineCode />
                  </div>
                  <p className='text-[16px] text-gray-400 mt-3'>Your component & code will appear here.</p>
                </div>
              ) : (
                <>
                  {/* Tabs */}
                  <div className="bg-[#17171C] w-full h-[50px] flex items-center gap-3 px-3">
                    <button
                      onClick={() => setTab(1)}
                      className={`w-1/2 py-2 rounded-lg transition-all ${tab === 1 ? "bg-purple-600 text-white" : "bg-zinc-800 text-gray-300"}`}
                    >
                      Code
                    </button>
                    <button
                      onClick={() => setTab(2)}
                      className={`w-1/2 py-2 rounded-lg transition-all ${tab === 2 ? "bg-purple-600 text-white" : "bg-zinc-800 text-gray-300"}`}
                    >
                      Preview
                    </button>
                  </div>

                  {/* Toolbar */}
                  <div className="bg-[#17171C] w-full h-[50px] flex items-center justify-between px-4">
                    <p className='font-bold text-gray-200'>Code Editor</p>
                    <div className="flex items-center gap-2">
                      {tab === 1 ? (
                        <>
                          <button onClick={copyCode} className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center hover:bg-[#333]"><IoCopy /></button>
                          <button onClick={downnloadFile} className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center hover:bg-[#333]"><PiExportBold /></button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => setIsNewTabOpen(true)} className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center hover:bg-[#333]"><ImNewTab /></button>
                          <button onClick={() => setRefreshKey(prev => prev + 1)} className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center hover:bg-[#333]"><FiRefreshCcw /></button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Editor / Preview */}
                  <div className="h-full">
                    {tab === 1 ? (
                      <Editor value={code} height="100%" theme='vs-dark' language="html" />
                    ) : (
                      <iframe key={refreshKey} srcDoc={code} className="w-full h-full bg-white text-black"></iframe>
                    )}
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#141319] rounded-2xl p-8 flex flex-col items-center gap-4 min-w-[300px] max-w-[400px] mx-4 border border-purple-500/20 shadow-2xl">
            <ClipLoader color="#a855f7" size={50} />
            <h3 className="text-xl font-semibold sp-text">Generating Component</h3>
            <p className="text-gray-400 text-sm text-center">AI is crafting your component. Please wait...</p>
          </div>
        </div>
      )}

      {/* Fullscreen Preview Overlay */}
      {isNewTabOpen && (
        <div className="absolute inset-0 bg-white w-screen h-screen overflow-auto z-40">
          <div className="text-black w-full h-[60px] flex items-center justify-between px-5 bg-gray-100">
            <p className='font-bold'>Preview</p>
            <button onClick={() => setIsNewTabOpen(false)} className="w-10 h-10 rounded-xl border border-zinc-300 flex items-center justify-center hover:bg-gray-200">
              <IoCloseSharp />
            </button>
          </div>
          <iframe srcDoc={code} className="w-full h-[calc(100vh-60px)]"></iframe>
        </div>
      )}
      <Footer />
    </>
  )
}

export default ComponentMaker
