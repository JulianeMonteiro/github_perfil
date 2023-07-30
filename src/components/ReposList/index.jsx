import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);
  const [deuErro, setDeuErro] = useState(false);

  useEffect(() => {
    setEstaCarregando(true);

    const fetchData = async () => {
      setEstaCarregando(true);
      setRepos([]);

      try {
        const response = await fetch(
          `https://api.github.com/users/${nomeUsuario}/repos`
        );

        if (!response.ok) {
          throw new Error("Erro ao obter os repositórios do usuário.");
        }

        const reposJson = await response.json();

        setTimeout(() => {
          setEstaCarregando(false);
          setRepos(reposJson);
        }, 2000);
      } catch (error) {
        setEstaCarregando(false);
        setDeuErro(true);
        console.error(error);
      }
    };
    if (nomeUsuario.trim() !== "") {
      fetchData(setDeuErro(false));
    }
  }, [nomeUsuario]);

  return (
    <div className="container">
      {deuErro ? (
        <h2 className={styles.error}>Usuário não encontrado! </h2>
      ) : estaCarregando ? (
        <h3>Carregando...</h3>
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.itemName}>
                <b>Nome:</b> {name}
                <br />
              </div>
              <div className={styles.itemLanguage}>
                <b> Linguagem:</b> {language}
                <br />
              </div>
              <a className={styles.itemLink} target="_blank" href={html_url}>
                Visitar no Github
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
