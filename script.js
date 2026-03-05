* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f5f7fb;
    color: #1e293b;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.logo {
    font-size: 22px;
    font-weight: bold;
    color: #2563eb;
}

nav a {
    margin-left: 20px;
    text-decoration: none;
    color: #1e293b;
    font-weight: 500;
}

.btn-temu {
    background: #ef4444;
    color: white !important;
    padding: 8px 14px;
    border-radius: 6px;
}

.hero {
    text-align: center;
    padding: 100px 20px;
}

.hero h1 {
    font-size: 40px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 18px;
    margin-bottom: 30px;
}

.hero-buttons a {
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    margin: 10px;
    display: inline-block;
}

.btn-primary {
    background: #2563eb;
    color: white;
}

.btn-danger {
    background: #ef4444;
    color: white;
}

.features {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 60px 10%;
}

.card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    width: 300px;
    text-align: center;
}

footer {
    text-align: center;
    padding: 30px;
    margin-top: 50px;
    background: white;
    font-size: 14px;
}
