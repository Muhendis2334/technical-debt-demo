// order-processor.js - Yoðun Teknik Borç ve Uyarý Ýçeren Kod
function processOrder(cart, customerType, region, couponCode) {
    let total = 0;
    var unusedVariable = "bu degisken hicbir yerde kullanilmiyor, code smell uretecek"; // Code Smell

    // Karmaþýklýk ve Derin Ýç Ýçe If Yapýlarý (Cyclomatic & Cognitive Complexity yüksek)
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        if (item.category == "ELECTRONICS") {
            if (region == "TR") {
                if (customerType == "VIP") {
                    if (item.price > 5000) {
                        total += item.price * 0.60;
                    } else {
                        total += item.price * 0.70;
                    }
                } else if (customerType == "REGULAR") {
                    total += item.price * 0.90;
                } else {
                    total += item.price;
                }
            } else {
                total += item.price * 0.95;
            }
        } else if (item.category == "CLOTHING") {
            if (customerType == "VIP") {
                total += item.price * 0.50;
            } else {
                total += item.price * 0.80;
            }
        } else {
            total += item.price;
        }
    }

    // Güvenlik Açýðý / Hotspot: Açýkta býrakýlmýþ þifre ve API Key
    const dbPassword = "SuperSecretDatabasePassword123!";
    const adminApiKey = "AKIAIOSFODNN7EXAMPLE";
    console.log("DB Password: " + dbPassword);

    // Kasýtlý ve Birebir Kod Tekrarý (Duplication) - Ayný blok alt alta iki kez yazýldý
    if (couponCode == "DISCOUNT50") {
        total = total * 0.5;
    } else if (couponCode == "DISCOUNT20") {
        total = total * 0.8;
    } else if (couponCode == "DISCOUNT10") {
        total = total * 0.9;
    }

    if (couponCode == "DISCOUNT50") {
        total = total * 0.5;
    } else if (couponCode == "DISCOUNT20") {
        total = total * 0.8;
    } else if (couponCode == "DISCOUNT10") {
        total = total * 0.9;
    }

    return total;
}

// Hiç çaðrýlmayan ölü fonksiyon (Code Smell / Unused Function)
function unusedHelperFunction() {
    console.log("Bu fonksiyon hicbir yerde cagrilmiyor.");
}

module.exports = { processOrder };