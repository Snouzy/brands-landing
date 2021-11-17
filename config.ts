const CONFIG = {
  apiKey: String(process.env.NEXT_PUBLIC_API_KEY),
  authDomain: String(process.env.NEXT_PUBLIC_AUTH_DOMAIN),
  projectId: String(process.env.NEXT_PUBLIC_PROJECT_ID),
  storageBucket: String(process.env.NEXT_PUBLIC_STORAGE_BUCKET),
  messagingSenderId: String(process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID),
  appId: String(process.env.NEXT_PUBLIC_APP_ID),
  measurementId: String(process.env.NEXT_PUBLIC_MEASUREMENT_ID),
};

export default CONFIG;
