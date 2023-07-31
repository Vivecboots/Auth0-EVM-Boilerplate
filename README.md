# 🍜Auth0-EVM-Boilerplate
This project is a developer toolkit intended for react based applications with front-end evm functionality and o-auth.  There are times when a cross between decntralization and centralized internet functionality are desireable.  One of these functionalities is authentication, where you need to create as frictionless exprience as possible.  There are positive elements to verification through blockchain such as pseudo-anonymity among most EVM chains, or full anonymity through zero-knowledge snarks or protocols such as Oasis.   Therefore, this integration attempts to provide functionality for both.  While there is full functionality in the local environment and deploys online without error, there still may be some integration issues to work around.  Please contribute, complain, post issues and please enjoy!

## 🚀Installation



```bash
git clone git@github.com:Vivecboots/Auth0-EVM-Boilerplate.git
```

```bash
npm install
```

```bash
npm run dev
```
Then run this in your browser:
```bash
localhost:5173
```
the webpage has loaded, changes made to files inside the src/ directory (e.g. src/App.tsx) will automatically update the webpage.


Oauth requires further attention for full features, especially when deployed to a server.  You must update the callback allowable list and you can also acces CORS from there.  You can also find needed variables such as domain and id.  
## 🌟 Key Features
Auth0 Integration: This boilerplate provides a basic setup for integrating Auth0 in a React application for user authentication.
Blockchain Identity Verification: It uses the wagmi library to interact with the blockchain and verify the user's identity.
Wallet Connect: Wallet Connect is used for wallet interactions, allowing users to connect their blockchain wallets to the application.


## 🤝 Contribute
We welcome contributions to this project. 

To contribute:

Fork this repository.
Create a new branch on your fork. Please use the branch name format feature/your-feature-name.
Make your changes on your new branch.
Push your changes to your fork with git push origin your-branch-name.
Open a pull request against the bravo branch of this repository.

## 📚 Learn More
To learn more about the technologies used in this boilerplate, check out the following resources:

Auth0 Documentation – Learn about Auth0 features and API.
wagmi Documentation – Learn about wagmi Hooks and API.
WalletConnect Documentation – Learn about WalletConnect features and API.
Vite Documentation – Learn about Vite features and API.


## 📜License

[MIT](https://choosealicense.com/licenses/mit/)