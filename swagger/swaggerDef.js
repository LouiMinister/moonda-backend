import path from 'path';

const swaggerDefinition = {
    info: {
        title: 'Moonda - REST API',
        version: '1.0.0',
        description: 'Moonda의 Api 문서입니다'
    },
    host: 'localhost:3000',
    basePath: '/',
    contact: {
        email: "louiminister@gmail.com"
    },
    components: {
        res: {
            Forbidden: { description: '권한이 없습니다.'},
            NotFound: {description: '존재하지 않는 정보입니다.'}
        }
    },
    schemes: ['http']
};

export default {
    swaggerDefinition: swaggerDefinition,
    apis: [path.join(__dirname + '/context.yaml')]
};


