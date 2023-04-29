function carregarDados() {
    // faz uma requisição para o arquivo JSON
    fetch('objects.JSON')
      .then(function(response) {
        // verifica se a requisição foi bem-sucedida
        if (response.ok) {
          // converte a resposta em JSON
          return response.json();
        }
        throw new Error('Erro ao carregar dados.');
      })
      .then(function(data) {
        // percorre o array de objetos e exibe as informações
        data.forEach(function(objeto) {
          console.log('Nome: ' + objeto.nome);
          console.log('Data de lançamento: ' + objeto.data_de_lancamento);
          console.log('Veículo lançador: ' + objeto.veiculo_lancador);
          console.log('COSPAR ID: ' + objeto.cospar_id);
          console.log('Função genérica: ' + objeto.funcao_generica);
          console.log('Status: ' + objeto.status);
        });
      })
      .catch(function(error) {
        console.error(error);
      });
      try {
        // lê o arquivo JSON
        const dados = fs.readFileSync('objects.JSON', 'utf8');
    
        // retorna os dados como objeto JSON
        return JSON.parse(dados);
      } catch (err) {
        console.error(err);
        return null;
      }
  }
  