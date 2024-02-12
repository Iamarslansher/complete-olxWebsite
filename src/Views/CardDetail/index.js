import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import Navbar from "../../ReuseAble/Navbar";
import Footer from "../../ReuseAble/Footer";
import { FcBusinessman } from "react-icons/fc";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function CardDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const docRef = doc(db, "userItem", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDetail(docSnap.data());
        } else {
          console.log("not found");
        }
      } catch (e) {
        alert(e.message);
      }
    };
    getDetail();
  }, [id, db]);
  console.log(detail, "<-- detail ");

  if (!detail) {
    return (
      <div>
        <img
          src="https://cdn.dribbble.com/users/2787442/screenshots/11857631/media/08f6802d668c84020f98b3f3a0c81bf0.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="detail-contant">
        <div className="detail-contantLeftSide">
          {detail.image.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                }}
              >
                <img width={370} src={item} alt="" />
                {/* <CCarousel controls>
                 <CCarouselItem>
                   <CImage className="contantImg" src={item} alt="" />
                 </CCarouselItem>
               </CCarousel> */}
              </div>
            );
          })}
        </div>
        <div className="detail-contantRightSide">
          <div className="contant-detail">
            <p>
              <b>Title :</b> {detail.title}
            </p>
            <p>
              <b>Description :</b> {detail.description}
            </p>
            <p>
              <b>Price : </b>Rs. {detail.price}/-
            </p>
          </div>
          <div className="forContact">
            <h2>
              <FcBusinessman className="contactIcon" />
              Contact
            </h2>
            <hr />
            <div className="contact-btn">
              <button className="whatspBtn btn">
                <RiWhatsappFill />
                Chat
              </button>
              <button className="facebookBtn btn">
                <FaFacebookMessenger />
                Messanger
              </button>
            </div>
          </div>
          <div className="loctaion">
            <h2>Loctaion</h2>

            <h4>
              <IoLocationOutline />
              -- Quaidbad , Abbort Labortiry.
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CardDetail;
