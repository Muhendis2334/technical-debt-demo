// order-processor.js - Teknik Borç Dolu Örnek Kod

function processOrder(cart, customerType, region, couponCode) {
    let total = 0;
    
    // 1. Code Smell & Karmaþýklýk: Derinlemesine iç içe geçmiþ if-else yapýlarý (Cyclomatic Complexity yüksek)
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        if (item.category == "ELECTRONICS") {
            if (region == "TR") {
                if (customerType == "VIP") {
                    total += item.price * 0.70; // %30 indirim
                } else if (customerType == "REGULAR") {
                    total += item.price * 0.90; // %10 indirim
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

    // 2. Güvenlik Açýðý / Kötü Pratik: Hardcoded hassas veri simülasyonu
    const adminApiKey = "AKIAIOSFODNN7EXAMPLE"; 
    console.log("Using API Key for logging: " + adminApiKey);

    // 3. Kod Tekrarý (Duplication) riski taþýyan blok
    if (couponCode == "DISCOUNT50") {
        total = total * 0.5;
    } else if (couponCode == "DISCOUNT20") {
        total = total * 0.8;
    } else if (couponCode == "DISCOUNT10") {
        total = total * 0.9;
    }

    return total;
}

// Test yok, dokümantasyon yok, hata yönetimi (try-catch) yok.
module.exports = { processOrder };