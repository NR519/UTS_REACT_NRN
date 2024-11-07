"use client";

import { useState } from "react";

export default function FavColor(){

    const [warna, setWarna] = useState("Biru");
    const [bgwarna, setBGWarna] = useState("white");

    return (
        <div className={`container mx-auto p-4 text-center bg-${bgwarna}`}>
            <h1 className={`text-${bgwarna}`}>Warna Favorit saya adalah {warna}</h1>
            <hr className="m-10" />
            <p className="text-black">Ubah state warna ke warna:</p>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {setWarna("Merah"); setBGWarna("red-500")}}
            >
                Merah
            </button>
            <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {setWarna("Kuning"); setBGWarna("yellow-500")}}
            >
                Kuning
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {setWarna("Biru"); setBGWarna("blue-500")}}
            >
                Biru
            </button>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {setWarna("Hijau"); setBGWarna("green-500")}}
            >
                Hijau
            </button>
            <button
                className="bg-purple-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {setWarna("Ungu"); setBGWarna("purple-500")}}
            >
                Ungu
            </button>
        </div>
    )
}