import { createContext, useState } from "react";

const githubContext = createContext();

const GITHUB_URL = `https://api.github.com/users`;
const GITHUB_TOKEN = `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`;

const githubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

}