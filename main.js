const formRegister = document.querySelector('#formRegister')

formRegister.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameUser = e.target.nameUser.value.trim()
    const ageUser = e.target.ageUser.value.trim()
    const emailUser = e.target.emailUser.value.trim()
    const pass1 = e.target.pass1.value.trim()
    const pass2 = e.target.pass2.value.trim()
    const dateBorn = e.target.dateBorn.value.trim()
    const termUser = e.target.termUser.checked
    const countruName = e.target.countruName.value.trim()
    const gender = e.target.gender.value.trim()
    const coments = e.target.coments.value.trim()

    if (nameUser === '' ||
        ageUser === '' ||
        emailUser === '' ||
        pass1 === '' ||
        pass2 === '' ||
        dateBorn === '' ||
        termUser === '' ||
        countruName === '' ||
        gender === '' ||
        coments === '' ||
        !termUser
    ) {
        Swal.fire({
            title: 'Error!',
            text: 'Todos los campos son necesarios',
            icon: 'error',
            confirmButtonText: 'Vale'
        })

        return
    }

    if (pass1 !== pass2) {
        Swal.fire({
            title: 'Error!',
            text: 'Las contraseñas deben coincidir',
            icon: 'error',
            confirmButtonText: 'Vale'
        })

        return
    }

    if (ageUser < 18) {
        Swal.fire({
            title: 'Error!',
            text: 'Debes ser mayor de edad',
            icon: 'error',
            confirmButtonText: 'Vale'
        })

        return
    }

    console.log({
        nameUser,
        ageUser,
        emailUser,
        pass1,
        pass2,
        dateBorn,
        termUser,
        countruName,
        gender,
        coments,
    });

    Swal.fire({
        title: 'Enviado!',
        text: 'El usuario ha sido creado',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
})