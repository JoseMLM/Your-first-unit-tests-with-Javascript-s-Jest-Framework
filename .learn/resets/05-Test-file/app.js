// esta es mi función que suma dos números
const convertPhoneNumberSpain = (phoneNumber) => {
    let string = toString (phoneNumber)
    return `(+${string.slice(0,2)})`
}

// solo un registro en consola para nosotros.
console.log(sum(14,9))