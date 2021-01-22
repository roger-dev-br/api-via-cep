import cepService from '../services/cepService';

class CepController {
    // http://localhost:3333/cep/01200030
    show = (req, res) => {
        const { cep } = req.params;

        // URL do viacep
        const url = `${cep}/json/`;

        cepService.get(url).then(response => {
            res.json(response.data);            
        });
    }

    // http://localhost:3333/cep?uf=RS&cidade=Porto Alegre&rua=A
    query = (req, res) => {
        const { uf, cidade, rua } = req.query;

        // Montar a URL no padrão do ViaCEP
        // RS/Porto Alegre/Domingos/json/
        const url = `${uf}/${cidade}/${rua}/json`;

        cepService.get(url).then(response => {
            res.json(response.data);            
        }).catch(error => res.send(error));
    }
}

export default new CepController();