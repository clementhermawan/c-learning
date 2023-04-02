document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name) {
    const message  = `halo saya mau beli ${product_name}`
    const whatsapp = `https://wa.me?0895802646117text=${message}`
    location.href = whatsapp
}