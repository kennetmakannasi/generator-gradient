import react, { useState } from "react";

function App() {
      const[w1,setW1]=useState("blue");
      const[ws1,setShade1]=useState("100");
      const[w2,setW2]=useState("red");
      const[ws2,setShade2]=useState("500");   
      const[w3,setW3]=useState("green");
      const[ws3,setShade3]=useState("500");  

      const[act,setAct]=useState("");
      const[opsi,setOption]=useState("t");

      function c1(event){
          setW1(event.target.value);
      }
      function cs1(event){
          setShade1(event.target.value);
      }

      
      function cs2(event){
        setShade2(event.target.value);
      }
      function c2(event){
        setW2(event.target.value);
      }

      function c3(event){
        setW3(event.target.value);
      }
      function cs3(event){
        setShade3(event.target.value);
      }

      function active(event){
          setAct(event.target.value);
      }
      function pilihopsi(event){
        setOption(event.target.value)
      }

      $(document).ready(function(){
        if(act=="act"){
          $("#actinput").show();
          $("#acts").show();
          $("#via").show();
          $("#-").show();
          $("#vlabel").show();
          $("#vslabel").show();
        }
        if(act=="not"){
          $("#actinput").hide();
          $("#acts").hide();
          $("#via").hide();
          $("#-").hide();
          $("#vlabel").hide();
          $("#vslabel").hide();
          setW3(null);
          setShade3(null);
          $("#actinput").val("")
        }
      });

      function copy(){
        const textToCopy = document.getElementById('output').innerText;
        navigator.clipboard.writeText(textToCopy)

        Swal.fire({
          title:"Gradient berhasil di copy",
          confirmButtonColor: "#22d3ee",
          color: "black",
        });

      }

  return (
    <>
    <div>
    <button className=" text-white text-xl font-semibold px-6 py-2 bg-cyan-400 rounded-md hover:bg-cyan-500"><a href="https://tailwindcss.com/docs/customizing-colors">List Warna</a></button> 
    <div className="mt-5">
      <label htmlFor="viaact" className=" font-semibold">Via</label>
      <select className=" font-semibold bg-slate-200 p-1 rounded-md ml-16 w-40 hover:bg-slate-300" value={act} onChange={active} name="" id="viaact">
        <option value="act">Aktif</option>
        <option value="not">Tidak Aktif</option>
      </select>
    </div>
    <div className="mt-3">
      <label className=" font-semibold" htmlFor="direction">Arah </label>
     <select className=" font-semibold bg-slate-200 p-1 rounded-md ml-12 w-40 hover:bg-slate-300" value={opsi} onChange={pilihopsi} name="" id="direction">
        <option value="t">Atas</option>
        <option value="b">Bawah</option>
        <option value="l">Kiri</option>
        <option value="r">Kanan</option>
      </select> 
    </div>

    <div className="mt-3">
      <label className=" font-semibold">Color 1</label>
      <input className=" font-semibold bg-slate-200 p-1 rounded-md ml-9 w-40 hover:bg-slate-300" type="text" value={w1} onChange={c1}/>
    </div>
    <div className="mt-3">
    <label className=" font-semibold">Shade 1</label>
      <select className=" font-semibold bg-slate-200 p-1 rounded-md ml-8 w-40 hover:bg-slate-300" value={ws1} onChange={cs1} name="" id="">
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">700</option>
        <option value="800">800</option>
        <option value="900">900</option>
      </select>
    </div>
    <div className="mt-3">
    <label id="vlabel" className=" font-semibold">Via Color</label>
      <input className=" font-semibold bg-slate-200 p-1 rounded-md ml-5 w-40 hover:bg-slate-300" id="actinput" type="text" value={w3} onChange={c3} />
    </div>
    <div className="mt-3">
    <label id="vslabel" className=" font-semibold">Via Shade</label>
      <select className=" font-semibold bg-slate-200 p-1 rounded-md ml-4 w-40 hover:bg-slate-300" value={ws3} onChange={cs3} name="" id="acts">
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">700</option>
        <option value="800">800</option>
        <option value="900">900</option>
      </select>
    </div>
    <div className="mt-3">
    <label className=" font-semibold">Color 2</label>
    <input className=" font-semibold bg-slate-200 p-1 rounded-md ml-9 w-40 hover:bg-slate-300" type="text" value={w2} onChange={c2}/>
    </div>
    <div className="mt-3">
    <label className=" font-semibold">Shade 2</label>
      <select className="font-semibold bg-slate-200 p-1 rounded-md ml-8 w-40 hover:bg-slate-300" value={ws2} onChange={cs2} name="" id="">
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">700</option>
        <option value="800">800</option>
        <option value="900">900</option>
      </select>
    </div>
    </div>
    <div className=" ml-20">
      <div className={` rounded-md w-[500px] h-[300px] bg-gradient-to-${opsi} from-${w1}-${ws1} via-${w3}-${ws3} to-${w2}-${ws2}`}></div>
      <p className=" mt-4 font-semibold" id="output">bg-gradient-to-{opsi} from-{w1}-{ws1} <a id="via">via-</a>{w3}<a id="-">-</a>{ws3} to-{w2}-{ws2}</p>
      <button className=" mt-5 text-white text-xl font-semibold px-6 py-2 bg-cyan-400 rounded-md hover:bg-cyan-500" onClick={copy}>copy</button> 
    </div>
    </>
  )
}

export default App
