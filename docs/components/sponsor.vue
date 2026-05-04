<template>
    <h1>{{ langMap[lang].title }}</h1>

    <p>
        {{ langMap[lang].description }}
    </p>

    <h1>{{ langMap[lang].wechat }}</h1>
    <div class="sponsorBox">
        <img
            class="wxCode"
            src="../static/imgs/sponsor3.webp"
            alt="WeChat QR Code"
        />
    </div>
    <h1>{{ langMap[lang].wallet }}</h1>
    <div class="wallet-grid">
        <!-- Wallet Card 1 -->
        <div class="wallet-card">
            <h2>Arbitrum One</h2>
            <div class="wallet-address" id="eth-addr">
                0x0465944fe1317e8847f6ec1eaf7a7e97cbc1aba4
            </div>
            <button class="copy-btn" @click="copyToClipboard('eth-addr')">
                {{ langMap[lang].copyAddress }}
            </button>
            <img
                class="qr"
                src="https://files.PakePlus.com/arb.png"
                alt="Ethereum QR Code"
            />
        </div>

        <!-- Wallet Card 2 -->
        <div class="wallet-card">
            <h2>BSC (BNB / USDT)</h2>
            <div class="wallet-address" id="polygon-addr">
                0x0465944fe1317e8847f6ec1eaf7a7e97cbc1aba4
            </div>
            <button class="copy-btn" @click="copyToClipboard('polygon-addr')">
                {{ langMap[lang].copyAddress }}
            </button>
            <img
                class="qr"
                src="https://files.PakePlus.com/bnb.png"
                alt="Polygon QR Code"
            />
        </div>

        <!-- Wallet Card 3 -->
        <div class="wallet-card">
            <h2>Bitcoin</h2>
            <div class="wallet-address" id="bsc-addr">
                bc1pcjm3unwrg6shae99qeyex2wak0tszqyz6zw9euf2sthwgyhnp48qhmm42r
            </div>
            <button class="copy-btn" @click="copyToClipboard('bsc-addr')">
                {{ langMap[lang].copyAddress }}
            </button>
            <img
                class="qr"
                src="https://files.PakePlus.com/btc.png"
                alt="BSC QR Code"
            />
        </div>

        <!-- Wallet Card 4 -->
        <div class="wallet-card">
            <h2>Ethereum</h2>
            <div class="wallet-address" id="arbitrum-addr">
                0x0465944fe1317e8847f6ec1eaf7a7e97cbc1aba4
            </div>
            <button class="copy-btn" @click="copyToClipboard('arbitrum-addr')">
                {{ langMap[lang].copyAddress }}
            </button>
            <img
                class="qr"
                src="https://files.PakePlus.com/eth.png"
                alt="Arbitrum QR Code"
            />
        </div>

        <!-- Wallet Card 5 -->
        <div class="wallet-card">
            <h2>Solana</h2>
            <div class="wallet-address" id="tron-addr">
                DU121XejdYxihLxLr4vxcNNViqhpB5Fo5m7hsvmAhUY8
            </div>
            <button class="copy-btn" @click="copyToClipboard('tron-addr')">
                {{ langMap[lang].copyAddress }}
            </button>
            <img
                class="qr"
                src="https://files.PakePlus.com/sol.png"
                alt="Tron QR Code"
            />
        </div>

        <!-- Wallet Card 6 -->
        <div class="wallet-card">
            <h2>Polygon</h2>
            <div class="wallet-address" id="tron-addr">
                0x0465944fe1317e8847f6ec1eaf7a7e97cbc1aba4
            </div>
            <button class="copy-btn" @click="copyToClipboard('tron-addr')">
                {{ langMap[lang].copyAddress }}
            </button>
            <img
                class="qr"
                src="https://files.PakePlus.com/poly.jpg"
                alt="Tron QR Code"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const vpData = useData()
const lang = vpData.lang.value

const langMap: any = {
    zh: {
        title: '💖 赞助我们',
        description:
            '如果您也喜欢我们的PakePlus项目，欢迎赞助我们，我们会继续开发和维护。您的支持是我们前进的动力。赞助时请务必填写留言或发邮箱：1024xiaoshen@gmail.com，以便我们收录到赞助名单中，并为您提供开通更多使用权限的激活码！',
        wechat: '微信/支付宝/PayPal赞助',
        wallet: 'Web3 虚拟币钱包赞助',
        copyAddress: '复制地址',
        copySuccess: '地址已复制：',
        copyError: '复制失败',
    },
    en: {
        title: '💖 Sponsor Us',
        description:
            'If you also like our PakePlus project, we welcome your sponsorship to help us continue development and maintenance. Your support is our driving force. Please include a message or email us at: 1024xiaoshen@gmail.com when sponsoring so we can acknowledge your contribution and provide you with an activation code to unlock more features! Thank you for your support!',
        wechat: 'WeChat/Alipay/PayPal Sponsorship',
        wallet: 'Web3 Wallet Support',
    },
}

const copyToClipboard = (id: string) => {
    const text = document.getElementById(id)?.textContent
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Address copied: ' + text)
        })
    }
}
</script>
<style scoped>
.sponsorBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.wxCode {
    background-image: url('https://files.PakePlus.com/pay.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

h1 {
    text-align: left;
    margin-bottom: 2rem;
}
.wallet-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
}
.wallet-card {
    background: var(--vp-c-bg-alt);
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    text-align: center;
}
.wallet-card h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    border: unset;
    margin-top: 0;
}
.wallet-address {
    font-family: monospace;
    font-size: 0.9rem;
    word-break: break-all;
    margin: 0rem 1rem;
    background: var(--vp-c-bg-alt);
    padding: 0.5rem;
    border-radius: 6px;
}
img.qr {
    width: 50%;
    height: auto;
    margin: 0 auto;
    border-radius: 6px;
}
.copy-btn {
    margin: 0 0 0.5rem 0;
    padding: 0.3rem 0.8rem;
    border: none;
    background: #007aff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}
.copy-btn:hover {
    background: #005ecc;
}
</style>
