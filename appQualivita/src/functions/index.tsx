
export async function registroUsuario(nome: string, email: string, senha: string, datanasc: string) {
    try {
      const response = await fetch('https://qualivita.tccetecsjc.com.br/cadastro.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
          datanasc,
        }),
      });
  
      const result = await response.json();
      if (response.ok) {
        return result;  // Retorna a resposta do backend em caso de sucesso
      } else {
        throw new Error(result.message || 'Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      throw error;  // Lança o erro para ser tratado no componente
    }
  }
  
  export async function loginUsuario(email: string, senha: string) {
    try {
      const response = await fetch('https://qualivita.tccetecsjc.com.br/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });
  
      const result = await response.json();
      if (response.ok) {
        return result;  // Retorna os dados do usuário logado
      } else {
        throw new Error(result.message || 'Erro ao fazer login');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;  // Lança o erro para ser tratado no componente
    }
  }
  