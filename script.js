
angular.module('app', [])
.controller("LoginCtrl", function($scope){
    $scope.cadastrar = function() {
        window.location.href = 'cadastro.html'; // Vai para a tela de cadastro
    };

    $scope.entrar = function(login) {
        console.log(login);
        var usuarioCadastradoBanco = JSON.parse(window.localStorage.getItem('usuarioCadastrado'))
        console.log(usuarioCadastradoBanco);

        if (login.usuario === usuarioCadastradoBanco.usuario && login.senha === usuarioCadastradoBanco.senha) {
            console.log('Acesso permitido');
            window.location.href = 'formulario.html'; // Vai para a tela do formulário
        } 
        else {
            alert('Acesso negado');
        }
    }
})
.controller("CadastroCtrl", function($scope){
    $scope.concluir = function(cadastro) {
        console.log(cadastro);

        if (cadastro.senha === cadastro.confirmarSenha) {
            console.log('Cadastro realizado com sucesso');
            alert('Cadastro realizado com sucesso');

            window.localStorage.setItem('usuarioCadastrado', JSON.stringify(cadastro)) // Grava o usuário cadastrado
            window.location.href = 'acesso.html'; // Vai para a tela de acesso
        } 
        else {
            alert('A repetição de senha não está correto');
        }
    }
})

        .controller("FormularioCtrl", function($scope){
            $scope.enviar = function(formulario) {
                console.log(formulario);
                
                if (formulario) 
                    alert('Dados salvos com sucesso');
        
                    window.localStorage.setItem('dadosCadastrados', JSON.stringify(formulario))
                    return true
    
                }
                            }
        )
        