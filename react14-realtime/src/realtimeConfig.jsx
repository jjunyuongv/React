import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  databaseURL : import.meta.env.VITE_databaseURL
};

//파이어베이스 앱 초기화 
const app = initializeApp(firebaseConfig);
//파이어스토어 객체 생성 및 내보내기 
const realtime = getDatabase(app);
export { realtime };