// FusionPay integration for CR7DAO
const fusionPay = {
    init: async function() {
        // Initialize FusionPay SDK with payment methods
        window.fusionPay = new FusionPaySDK({
            merchantId: 'YOUR_MERCHANT_ID',
            environment: 'production',
            paymentMethods: {
                // Mobile Money providers
                mobileMoney: {
                    enabled: true,
                    providers: ['MTN', 'Orange Money', 'MobiCash'],
                    countries: ['CM', 'SN', 'CI', 'ML'] // Cameroon, Senegal, Ivory Coast, Mali
                },
                // Card payments
                card: {
                    enabled: true,
                    types: ['visa', 'mastercard', 'amex'],
                    currencies: ['USD', 'EUR', 'XAF']
                }
            }
        });

        // Add event listeners for payment success
        window.fusionPay.on('payment.success', async (transaction) => {
            await this.handlePaymentSuccess(transaction);
        });

        // Add event listeners for payment error
        window.fusionPay.on('payment.error', (error) => {
            console.error('Payment error:', error);
            Swal.fire(
                'Payment Error',
                error.message || 'An error occurred during payment',
                'error'
            );
        });

        // Add event listeners for payment cancel
        window.fusionPay.on('payment.cancel', () => {
            Swal.fire(
                'Payment Cancelled',
                'Payment was cancelled by user',
                'info'
            );
        });
    },

    handlePaymentSuccess: async function(transaction) {
        try {
            // Get the amount paid in USD
            const amountUSD = transaction.amount / 100; // Convert cents to dollars
            
            // Convert USD to CR7 tokens (1 USD = 1 CR7)
            const amountCR7 = amountUSD * 1e18; // Convert to wei

            // Get the selected wallet address
            const walletAddress = document.getElementById('walletAddress').value;
            
            // Validate wallet address
            if (!/^(0x){1}[0-9a-fA-F]{40}$/i.test(walletAddress)) {
                throw new Error('Invalid BSC wallet address');
            }

            // Send CR7 tokens to the wallet
            await this.sendCR7Tokens(walletAddress, amountCR7);

            // Show success message
            Swal.fire(
                'Success',
                `Payment of ${amountUSD} USD processed successfully!\n${amountUSD} CR7 tokens sent to your wallet.\n\nTransaction ID: ${transaction.transactionId}`,
                'success'
            );
        } catch (error) {
            console.error('Error handling payment:', error);
            Swal.fire(
                'Error',
                'Failed to process payment or send tokens',
                'error'
            );
        }
    },

    sendCR7Tokens: async function(walletAddress, amount) {
        try {
            // Send tokens using smart contract
            const tx = await sttcontract.methods.transfer(walletAddress, amount)
                .send({ from: addr });

            console.log('CR7 tokens sent:', tx);
            return tx;
        } catch (error) {
            console.error('Error sending CR7 tokens:', error);
            throw error;
        }
    }
        } catch (error) {
            console.error('Error handling payment:', error);
            Swal.fire(
                'Error',
                'An error occurred while processing your payment.',
                'error'
            );
        }
    },

    sendCR7Tokens: async function(walletAddress, amount) {
        try {
            await loadweb3();
            
            // Send CR7 tokens to the wallet
            const tx = await sttcontract.methods.transfer(walletAddress, amount)
                .send({ from: addr });

            console.log('CR7 tokens sent:', tx);
            return tx;
        } catch (error) {
            console.error('Error sending CR7 tokens:', error);
            throw error;
        }
    }
};
