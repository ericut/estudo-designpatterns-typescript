import IPayPalPayment from './paypal/IPayPalPayment';
import MercadoPagoAdapter from './adapters/MercadoPagoAdapter';
import PayonnerAdapter from './adapters/PayonnerAdapter';
import Payonner from './payonner/Payonner';
import PayPal from './paypal/PayPal';
import MercadoPago from './mercadopago/MercadoPago';

// const payment: IPayPalPayment = new PayPal();
// const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

// imutável
payment.paypalPayment();
payment.paypalReceive();
