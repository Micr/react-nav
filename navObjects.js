import Products from './components/dropdowns/Products'
import About from './components/dropdowns/About'
import Account from './components/dropdowns/Account'
import DesignLab from './components/dropdowns/DesignLab'
import Fundraising from './components/dropdowns/Fundraising'
import Sponsorship from './components/dropdowns/Sponsorship'
import Templates from './components/dropdowns/Templates'

export default [
    {name:'products', value: 'Products', component: Products},
    {name: 'lab', value: 'Design Lab', component: DesignLab},
    {name: 'templates', value: 'Templates', component: Templates},
    {name: 'sponsorship', value: 'Sponsorship', component: Sponsorship},
    {name: 'fundraising', value: 'Fundraising', component: Fundraising},
    {name: 'about', value: 'About', component: About},
    {name: 'account', value: 'Account', component: Account}
];
