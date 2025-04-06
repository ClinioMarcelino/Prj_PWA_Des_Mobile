// Configuração do Firebase (substitua pelos dados do seu projeto Firebase)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO_ID",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_MESSAGING_ID",
  appId: "SUA_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login com Google
document.getElementById('google-login').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log("Login bem-sucedido:", user);
      alert(`Bem-vindo(a), ${user.displayName}`);
      // Redirecionar ou carregar app principal aqui, se necessário
    })
    .catch((error) => {
      console.error("Erro no login:", error.message);
      alert("Erro ao tentar login com Google.");
    });
});
