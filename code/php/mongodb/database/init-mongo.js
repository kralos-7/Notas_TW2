// Parámetros
const collectionName = "grupo_712";
const userName = "umarino";
const password = "1234";

// Conectar a la base de datos
db = db.getSiblingDB('alumnos');

// Crear un usuario con permisos para la base de datos
db.createUser({
    user: userName,
    pwd: password,
    roles: [{ role: "readWrite", db: 'alumnos' }],
});

// Insertar elementos iniciales en una colección
db[collectionName].insertOne({materia: "Tecnologias Web II", semestre: "24-25A", alumno: { nombreApellidos: "Juan Perez", matricula: "12345678", calificaciones: [ {parciales: [{ numero: "1", nota: "4"}, { numero: "2", nota: "4"}, { numero: "3", nota: "4"}]} , {ordinario: "8"} ] } })

db[collectionName].insertOne({materia: "Tecnologias Web II", semestre: "24-25A",
    alumno: {
        nombreApellidos: "Alejandro Fernandez",
        matricula: "12349001",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "7" }, { numero: "2", nota: "8" }, { numero: "3", nota: "6" }] },
            { ordinario: "9" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Beatriz Castro",
        matricula: "22349002",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "9" }, { numero: "2", nota: "8" }, { numero: "3", nota: "9" }] },
            { ordinario: "10" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Carlos Lopez",
        matricula: "32349003",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "6" }, { numero: "2", nota: "7" }, { numero: "3", nota: "5" }] },
            { ordinario: "8" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Diana Morales",
        matricula: "42349004",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "7" }, { numero: "2", nota: "6" }, { numero: "3", nota: "8" }] },
            { ordinario: "9" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Emilio Ramos",
        matricula: "52349005",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "8" }, { numero: "2", nota: "9" }, { numero: "3", nota: "8" }] },
            { ordinario: "10" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Fernanda Ortiz",
        matricula: "62349006",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "9" }, { numero: "2", nota: "10" }, { numero: "3", nota: "9" }] },
            { ordinario: "10" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Gabriel Sanchez",
        matricula: "72349007",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "6" }, { numero: "2", nota: "7" }, { numero: "3", nota: "7" }] },
            { ordinario: "8" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Hilda Vargas",
        matricula: "82349008",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "8" }, { numero: "2", nota: "8" }, { numero: "3", nota: "8" }] },
            { ordinario: "9" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Ismael Guzman",
        matricula: "92349009",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "5" }, { numero: "2", nota: "6" }, { numero: "3", nota: "7" }] },
            { ordinario: "8" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Julia Herrera",
        matricula: "102349010",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "7" }, { numero: "2", nota: "8" }, { numero: "3", nota: "8" }] },
            { ordinario: "9" }
        ]
    }
})

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: "Carlos Garcia Acevedo", 
        matricula: "87654321", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "6"}, { numero: "2", nota: "7"}, { numero: "3", nota: "8"}]}, 
            {ordinario: "9"} 
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: "Ana Lopez Lopez", 
        matricula: "23456789", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "3"}, { numero: "2", nota: "5"}, { numero: "3", nota: "4"}]}, 
            {ordinario: "7"} 
        ] 
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: "Luis Martinez Ramirez", 
        matricula: "34567890", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "8"}, { numero: "2", nota: "9"}, { numero: "3", nota: "10"}]}, 
            {ordinario: "10"} 
        ] 
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: "Carlos Rojas Sanchez", 
        matricula: "45678901", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "7"}, { numero: "2", nota: "6"}, { numero: "3", nota: "8"}]}, 
            {ordinario: "8"} 
        ] 
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: "Ivonne Estefanía Hernández Pérez", 
        matricula: "56789012", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "5"}, { numero: "2", nota: "7"}, { numero: "3", nota: "6"}]}, 
            {ordinario: "7"} 
        ] 
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: " Isaac Cortez Escamilla ", 
        matricula: "67890123", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "6"}, { numero: "2", nota: "7"}, { numero: "3", nota: "5"}]}, 
            {ordinario: "8"} 
        ] 
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: "Luis Fernando Matías Acevedo", 
        matricula: "78901234", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "4"}, { numero: "2", nota: "3"}, { numero: "3", nota: "5"}]}, 
            {ordinario: "6"} 
        ] 
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: "Adbeel Jibsam García Matus", 
        matricula: "89012345", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "9"}, { numero: "2", nota: "10"}, { numero: "3", nota: "9"}]}, 
            {ordinario: "10"} 
        ] 
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: "Heriberto Goméz Bolaina", 
        matricula: "90123456", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "8"}, { numero: "2", nota: "6"}, { numero: "3", nota: "7"}]}, 
            {ordinario: "9"} 
        ] 
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II", 
    semestre: "24-25A", 
    alumno: { 
        nombreApellidos: "Abril Azeneth Quintas Rojas", 
        matricula: "12341234", 
        calificaciones: [ 
            {parciales: [{ numero: "1", nota: "10"}, { numero: "2", nota: "9"}, { numero: "3", nota: "10"}]}, 
            {ordinario: "10"} 
        ] 
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Ana Torres",
        matricula: "23456789",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "5" }, { numero: "2", nota: "6" }, { numero: "3", nota: "7" }] },
            { ordinario: "9" }
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Luis Morales",
        matricula: "34567890",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "8" }, { numero: "2", nota: "7" }, { numero: "3", nota: "9" }] },
            { ordinario: "10" }
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Carlos Diaz",
        matricula: "45678901",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "6" }, { numero: "2", nota: "8" }, { numero: "3", nota: "7" }] },
            { ordinario: "8" }
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "María Fernandez",
        matricula: "56789012",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "9" }, { numero: "2", nota: "6" }, { numero: "3", nota: "8" }] },
            { ordinario: "9" }
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Jose Lopez",
        matricula: "67890123",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "5" }, { numero: "2", nota: "4" }, { numero: "3", nota: "6" }] },
            { ordinario: "7" }
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Patricia Jimenez",
        matricula: "78901234",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "8" }, { numero: "2", nota: "7" }, { numero: "3", nota: "9" }] },
            { ordinario: "10" }
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Miguel Sanchez",
        matricula: "89012345",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "4" }, { numero: "2", nota: "5" }, { numero: "3", nota: "6" }] },
            { ordinario: "8" }
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Laura Martinez",
        matricula: "90123456",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "7" }, { numero: "2", nota: "8" }, { numero: "3", nota: "9" }] },
            { ordinario: "9" }
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Juan Gutierrez",
        matricula: "01234567",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "6" }, { numero: "2", nota: "5" }, { numero: "3", nota: "7" }] },
            { ordinario: "8" }
        ]
    }
});

db[collectionName].insertOne({
    materia: "Tecnologias Web II",
    semestre: "24-25A",
    alumno: {
        nombreApellidos: "Diana Rodriguez",
        matricula: "12345678",
        calificaciones: [
            { parciales: [{ numero: "1", nota: "5" }, { numero: "2", nota: "6" }, { numero: "3", nota: "7" }] },
            { ordinario: "9" }
        ]
    }
});

db[collectionName].insertMany([
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Elena Jiménez",
            matricula: "12348765",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "9" }, { numero: "2", nota: "8" }, { numero: "3", nota: "8" }] },
                { ordinario: "9" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Diego Ruiz",
            matricula: "23459876",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "5" }, { numero: "2", nota: "6" }, { numero: "3", nota: "5" }] },
                { ordinario: "6" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Paula Sánchez",
            matricula: "34560987",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "7" }, { numero: "2", nota: "6" }, { numero: "3", nota: "7" }] },
                { ordinario: "8" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Pedro Díaz",
            matricula: "45671098",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "4" }, { numero: "2", nota: "5" }, { numero: "3", nota: "5" }] },
                { ordinario: "6" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Verónica García",
            matricula: "56782109",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "6" }, { numero: "2", nota: "5" }, { numero: "3", nota: "6" }] },
                { ordinario: "7" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Raúl Pérez",
            matricula: "67893210",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "8" }, { numero: "2", nota: "9" }, { numero: "3", nota: "8" }] },
                { ordinario: "9" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Sandra Martínez",
            matricula: "78904321",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "7" }, { numero: "2", nota: "8" }, { numero: "3", nota: "7" }] },
                { ordinario: "8" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Oscar Fernández",
            matricula: "89015432",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "9" }, { numero: "2", nota: "8" }, { numero: "3", nota: "9" }] },
                { ordinario: "9" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Marta González",
            matricula: "90126543",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "10" }, { numero: "2", nota: "9" }, { numero: "3", nota: "9" }] },
                { ordinario: "10" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Jorge Hernández",
            matricula: "01237654",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "5" }, { numero: "2", nota: "4" }, { numero: "3", nota: "6" }] },
                { ordinario: "6" }
            ]
        }
    }
]);

db[collectionName].insertMany([
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Sofía Hernández",
            matricula: "11223344",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "8" }, { numero: "2", nota: "9" }, { numero: "3", nota: "7" }] },
                { ordinario: "9" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Luis García",
            matricula: "22334455",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "6" }, { numero: "2", nota: "5" }, { numero: "3", nota: "7" }] },
                { ordinario: "8" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "María López",
            matricula: "33445566",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "10" }, { numero: "2", nota: "9" }, { numero: "3", nota: "8" }] },
                { ordinario: "10" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "José Martínez",
            matricula: "44556677",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "5" }, { numero: "2", nota: "6" }, { numero: "3", nota: "5" }] },
                { ordinario: "6" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Ana Ramírez",
            matricula: "55667788",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "7" }, { numero: "2", nota: "7" }, { numero: "3", nota: "7" }] },
                { ordinario: "8" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Carlos Torres",
            matricula: "66778899",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "4" }, { numero: "2", nota: "5" }, { numero: "3", nota: "6" }] },
                { ordinario: "7" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Fernanda Gutiérrez",
            matricula: "77889900",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "9" }, { numero: "2", nota: "8" }, { numero: "3", nota: "10" }] },
                { ordinario: "10" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Ricardo Fernández",
            matricula: "88990011",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "6" }, { numero: "2", nota: "6" }, { numero: "3", nota: "7" }] },
                { ordinario: "7" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Valeria Castro",
            matricula: "99001122",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "8" }, { numero: "2", nota: "9" }, { numero: "3", nota: "9" }] },
                { ordinario: "9" }
            ]
        }
    },
    {
        materia: "Tecnologias Web II",
        semestre: "24-25A",
        alumno: {
            nombreApellidos: "Javier Méndez",
            matricula: "00112233",
            calificaciones: [
                { parciales: [{ numero: "1", nota: "5" }, { numero: "2", nota: "5" }, { numero: "3", nota: "6" }] },
                { ordinario: "6" }
            ]
        }
    }
]);

print(`Base de datos alumnos inicializada con usuario "${userName}" y datos en la colección "${collectionName}".`);
