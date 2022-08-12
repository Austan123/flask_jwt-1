const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
    },
    actions: {
      // Use getActions to call a function within a fuction
      signup: (email, password) => {
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(email, password),
        })
          .then((resp) => resp.json())
          .then((result) => console.log(result))
          .catch((error) => ("error", error));
      },
      login: (email, password) => {
        fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(email, password),
        })
          .then((resp) => resp.json())
          .then((result) => getActions().verify(result.access_token))
          .catch((error) => ("error", error));
      },
      verify: (token) => {
        fetch(process.env.BACKEND_URL + "/api/protected", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((resp) => resp.json())
          .then((result) => setStore({user:result}))
          .catch((error) => ("error", error));
      },
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
