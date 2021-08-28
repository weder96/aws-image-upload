# aws-image-upload

# 01 - Passo
Criar uma conta na aws (Caso ainda não tenha) <br/>
Acessar Painel do IAM <br/>
Criar usuário e grupos de permissão de Ao S3. <br/>
Va no Usuário criado e em permissões de acesso click em criar chave de acesso. <br/>
Baixe o csv e va no application.properties do projeto e substitua os mesmo nos locais, como abaixo: <br/> 

aws.access_key= #your-key-access-csv-download <br/>
aws.secret_key= #your-scret-access-csv-download <br/>
spring.servlet.multipart.max-file-size=10MB <br/>

Use access keys to make programmatic calls to AWS from the AWS CLI, Tools for PowerShell, AWS SDKs, or direct AWS API calls. You can have a maximum of two access keys (active or inactive) at a time.<br/>

Para sua proteção, você nunca deve compartilhar suas chaves secretas com ninguém. Como prática recomendada, recomendamos alternância frequente de chaves. <br/>

# 02 - Passo
Criar bucket no e setar as permissoes do mesmo. <br/>
Va no Enum BucketName(package com.wsousa.awsimageupload.bucket) e set o PROFILE_IMAGE com o nome criado no bucket

# 03 - Passo
Subir o BackEnd(caso quiser subir por uma IDE(Eclipse, Intellij))
<br/>

# 04 - Passo 
Subir o FrontEnd acessar a pasta frontEnd(Project React)<br/>
Se não tiver instalado o node(Instalar node)
<br/>

Aconselhoa instalação no NVM(Node Version Manager)<br/>
https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm

dentro da Pasta FrontEnd:
npm install 
<br/>
Para baixar dependencias no node_modules
<br/>
Para start a Aplicação
<br/>
npm start


