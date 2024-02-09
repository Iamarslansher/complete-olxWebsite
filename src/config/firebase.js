import { initializeApp } from "firebase/app";
import Swal from "sweetalert2";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHuzsdSmqjLoQnVxZK46gfK05pMt9ZOS8",
  authDomain: "full-olx-website.firebaseapp.com",
  projectId: "full-olx-website",
  storageBucket: "full-olx-website.appspot.com",
  messagingSenderId: "320303562413",
  appId: "1:320303562413:web:5f5bd4c0beddfdf19b9024",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export async function login(userInfo, navigate) {
  try {
    const { email, password } = userInfo;
    await signInWithEmailAndPassword(auth, email, password);
    navigate && navigate("/maindashbord");
  } catch (e) {
    alert(e.message);
  }
}

export async function signup(userInfo, navigate) {
  try {
    const { name, email, password } = userInfo;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    delete userInfo.password;
    userInfo.uid = user.uid;

    await setDoc(doc(db, "users/" + user.uid), userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
    navigate && navigate("/maindashbord");
  } catch (e) {
    alert(e.message);
  }
}

export async function itemDetail(itemInfo, navigate) {
  try {
    const { title, description, price, image } = itemInfo;
    const storageRef = ref(storage, `ads/${image.name}`);
    await uploadBytes(storageRef, image);
    const imgUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, "userItem"), {
      title,
      description,
      price,
      image: imgUrl,
    });
    Swal.fire({
      title: "Successfull!",
      text: "Item add successsfully!",
      icon: "success",
    });
    navigate && navigate("/maindashbord");
  } catch (e) {
    alert(e.message);
  }
}

export async function getingAds() {
  const querySnapshot = await getDocs(collection(db, "userItem"));
  const ads = [];
  querySnapshot.forEach((doc) => {
    const ad = doc.data();
    ad.id = doc.id;
    ads.push(ad);
  });
  return ads;
}

export async function updateprofile(update, copy, navigate) {
  try {
    const { image, id, name } = update;
    const washingtonRef = doc(db, "users", id);
    await updateDoc(washingtonRef, {
      name,
    });
    localStorage.setItem("user", JSON.stringify(copy));

    navigate && navigate("/maindashbord");
  } catch (e) {
    alert(e.message);
  }
}

export const uploadImage = (data) => {
  try {
    const { imageFile: image, id } = data;

    const { name = "image.jpg" } = image;

    const imageRef = ref(storage, `profileImge/${name}`);

    uploadBytes(imageRef, image).then(async (snapshot) => {
      const profileImgUrl = await getDownloadURL(imageRef);
      const washingtonRef = doc(db, "users", id);
      await updateDoc(washingtonRef, {
        profileImgUrl,
      });
      let getUser = JSON.parse(localStorage.getItem("user"));
      let getUserCopy = { ...getUser, profileImgUrl };

      localStorage.setItem("user", JSON.stringify(getUserCopy));
    });
  } catch (e) {
    console.log(e, "Error while uploading image");
  }
};
