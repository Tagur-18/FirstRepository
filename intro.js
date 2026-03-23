<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Registration Form</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }

        .form-container {
            width: 300px;
            background: white;
            padding: 20px;
            margin: 100px auto;
            border-radius: 8px;
            box-shadow: 0 0 10px gray;
        }

        h2 {
            text-align: center;
        }

        input {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
        }

        button {
            width: 100%;
            padding: 8px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        .error {
            color: red;
            font-size: 14px;
            text-align: center;
        }
    </style>
</head>

<body>

<div class="form-container">
    <h2>Register</h2>

    <form onsubmit="return validateForm()">
        <input type="text" id="name" name="name" placeholder="Enter Name" required>
        <input type="email" id="email" name="email" placeholder="Enter Email" required>
        <input type="password" id="password" name="password" placeholder="Enter Password" required>

        <p class="error" id="errorMsg"></p>

        <button type="submit">Register</button>
    </form>
</div>

<script>
    function validateForm() {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let error = document.getElementById("errorMsg");

        if (name === "" || email === "" || password === "") {
            error.innerHTML = "All fields are required!";
            return false;
        }

        if (password.length < 6) {
            error.innerHTML = "Password must be at least 6 characters";
            return false;
        }

        error.innerHTML = "";
        alert("Registration Successful!");
        return true;
    }
</script>

</body>
</html>
