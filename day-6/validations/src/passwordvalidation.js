

function PasswordValidation() {
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword:''
    })

    function updateUserData(event) {
        setData({
            ...data
        })
    }
}