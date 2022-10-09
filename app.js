const inputCep = document.querySelector('#cep')
const form = document.querySelector('form')
const modal = document.querySelector('#modal')
const btnClose = document.querySelector('.btn-close')

const clearAllForm = () => {
    clearInputs()
    form.name.value = ''
    form.email.value = ''
    form.cep.value = ''
    inputCep.style.background = '#f4efdc'
    form.address.style.background = '#f4efdc'
}

const clearInputs = () => {
    form.address.value = ''
    form.district.value = ''
    form.number.value = ''
    form.city.value = ''
    form.state.value = ''
}

const invalidCep = () => {
    clearInputs()
    form.address.value = 'CEP inválido'
    form.address.classList.add('invalidCep')
    inputCep.classList.add('invalidCep')
}

const getFullAddressHtml = (fullAddress) => {
    inputCep.classList.remove('invalidCep')
    form.address.classList.remove('invalidCep')

    const { logradouro, bairro, localidade, uf } = fullAddress
    form.address.value = logradouro
    form.district.value = bairro
    form.city.value = localidade
    form.state.value = uf
}

const consultCep = async () => {
    clearInputs()
    const regexCep = /\d{5}-?\d{3}/

    if (regexCep.test(inputCep.value)) {
        const url = `https://viacep.com.br/ws/${inputCep.value}/json/`
        const data = await fetch(url)
        const fullAddress = await data.json()

        if (!inputCep) {
            invalidCep()
        }
        else if (fullAddress.hasOwnProperty('erro')) {
            invalidCep()
        } else {
            getFullAddressHtml(fullAddress)
        }
    } else {
        invalidCep()
    }
}

const submitForm = (e) => {
    e.preventDefault()
    if (form.state.value == '') {
        e.preventDefault()
        invalidCep()
    } else {
        modal.showModal()
        clearAllForm()
    }
}

const closeModal = () => {
    modal.close()
    clearAllForm()
}

inputCep.addEventListener('change', consultCep)
inputCep.addEventListener('keyup', consultCep)
form.addEventListener('submit', submitForm)

btnClose.addEventListener('click', closeModal)




