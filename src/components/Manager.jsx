import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("🦄 Copied to clipboard!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const savePass = () => {
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    console.log(...passwordArray, form);
    setForm({ site: "", username: "", password: "" });
    toast("🦄 password saved!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const deletePassword = (id) => {
    console.log("deleting the with id", id);
    let c = confirm("Do you really want to delete this password");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
      toast("🦄 password deleted", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const editPassword = (id) => {
    console.log("editing the with id", id);
    setForm(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className=" mx-w-4xl md:mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-700"> &lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your Own Password Manager
        </p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-red-600 w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
            placeholder="Enter website Url..."
          />
          <div className="flex flex-col md:flex-row justify-between w-full gap-8 ">
            <input
              onChange={handleChange}
              value={form.username}
              className="rounded-full border border-red-600 w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
              placeholder=" Enter User.."
            />
            <input
              onChange={handleChange}
              value={form.password}
              className="rounded-full border border-red-600 w-full p-4 py-1"
              type="password"
              name="password"
              id="password"
              placeholder=" Enter pass..."
            />
          </div>
          <button
            onClick={savePass}
            className="flex justify-center gap-2 items-center bg-green-500 rounded-full hover:bg-slate-600 px-7 py-0 w-fit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save Password{" "}
          </button>
        </div>
        <div className="password">
          <h2 className="font-bold text-xl py-0">Your Password</h2>
          {passwordArray.length === 0 && <div>No password to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-xl overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-slate-50">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center py-1">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => copyText(item.site)}
                          >
                            <lord-icon
                              style={{
                                width: "18px",
                                height: "25px",
                                paddingTop: "5px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center ">
                        <div
                          className="flex items-center justify-center"
                          onClick={() => copyText(item.username)}
                        >
                          {item.username}

                          <div className="size-7 cursor-pointer">
                            <lord-icon
                              style={{
                                width: "18px",
                                height: "25px",
                                paddingTop: "5px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center ">
                        <div
                          className="flex items-center justify-center"
                          onClick={() => copyText(item.password)}
                        >
                          <span>{item.password}</span>

                          <div className="size-7 cursor-pointer">
                            <lord-icon
                              style={{
                                width: "18px",
                                height: "25px",
                                paddingTtop: "5px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="justify-center py-2  text-center ">
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/sbrtyqxj.json"
                            trigger="hover"
                            style={{ width: "18px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-2"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "18px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
