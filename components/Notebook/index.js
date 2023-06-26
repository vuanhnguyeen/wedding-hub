import React, { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import styles from "./styles.module.scss";
import flowertemp from "../../public/flowertemp.png";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const domain = "https://script.google.com/macros/s/AKfycbx3ZP6SKB6Qs6Ph0Nw8UZeeb0O4TLWQi5qsoHB8DInSk74GD7Wd3bPOXrUtveYtwDlECQ/exec"

const disable = {
  backgroundColor: "gray",
  borderColor: "gray",
  pointerEvents: "none",
  color: "#fff !important",
};
const Notebook = () => {
  const [form, setForm] = useState({
    name: "",
    wish: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const checkDisable = (form, loading) => {
    if (form.name && form.wish) {
      if (loading) {
        return {
          backgroundColor: "#f2492b !important",
        };
      }
      return {};
    }
    return disable;
  };
  const sendWish = async (form, loading) => {
    if (loading) return;
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("Name", form.name);
      formData.append("Message", form.wish);
      formData.append("Timestamp", dayjs().format("HH:mm DD/MM/YYYY"));

      const res = await axios({
        url: domain,
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res && res.status === 200) {
        toast.success(
          "🙆‍♂️🙆‍♀️ Tụi em đã nhận được lời chúc! Cảm ơn anh/chị rất nhiều.",
          {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setForm({
          name: "",
          wish: "",
        });
      }
    } catch (error) {
      console.log("error ", error);
      toast.error("Hình như có lỗi, để em kiểm tra lại 🙇", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.notebooksection}>
        <div className={styles.ctn}>
          <div className={styles.img}>
            <Image
              src={flowertemp}
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.notebook}>Sổ Lưu Bút</div>
          <div className={styles.thanks}>
            {/* Cảm ơn anh/chị rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
            đám cưới của chúng em */}
          </div>
          <div className={styles.ctn_form}>
            <input
              name="name"
              value={form.name}
              autoComplete="off"
              disabled={loading}
              className={styles.fullname}
              type="text"
              placeholder="Họ và tên"
              onChange={(event) => handleChangeForm(event)}
            />
            <textarea
              name="wish"
              value={form.wish}
              autoComplete="off"
              disabled={loading}
              className={styles.happy}
              type="text"
              placeholder="Lời chúc"
              onChange={(event) => handleChangeForm(event)}
            />
            <button
              style={checkDisable(form, loading)}
              className={styles.button}
              onClick={() => sendWish(form, loading)}
            >
              {loading ? (
                <div className={styles.loadingbtn}></div>
              ) : (
                <span>Gửi lời chúc</span>
              )}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Notebook;
