import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public collapsed = true;
  stores: Array<{id: number, image: string, name: string, content: string, hot: boolean}>;
  hot_trends: Array<{id: number, source: number, image: string, oldPrice: number, newPrice: number, description: string,cashBackRate: number}>;
  top_deals: Array<{id: number, source: number, image: string, oldPrice: number, newPrice: number, description: string,cashBackRate: number}>;

  mySlideOptions = {
    autoplay: 2000,
    effect: 'slide',
    initialSlide: 0,
    loop: true,
    pager: true,
    parallax: true,
    autoplayDisableOnInteraction: false
  };


  constructor(public navCtrl: NavController,private iab: InAppBrowser) {
    this.stores = [
      {
        id: 1,
        image: 'https://putatu.com/storage/store_logo/7d595821d284118527819d754be4506b.png',
        name: 'zalora',
        content: 'Cash back 12%',
        hot: true
      },
      {
        id: 2,
        image: 'https://putatu.com/storage/store_logo/dd07245dd296398c757e402094bc1c91.png',
        name: 'lazada',
        content: 'Cash back 12%',
        hot: false
      },
      {
        id: 3,
        image: 'https://putatu.com/storage/store_logo/830144373488391ace51d41dc29bfc36.png',
        name: 'tiki.vn',
        content: 'Cash back 12%',
        hot: false
      },
      {
        id: 4,
        image: 'https://putatu.com/storage/store_logo/255abf061b1d5ed52a20fa79722a6815.png',
        name: 'fpt shop',
        content: 'Cash back 12%',
        hot: false
      }, {
        id: 5,
        image: 'https://putatu.com/storage/store_logo/4dcbd6a3a0a1f72c4eea5e17991f8678.png',
        name: 'mytour',
        content: 'Cash back 12%',
        hot: false
      }, {
        id: 6,
        image: 'https://putatu.com/storage/store_logo/03f6622071a2e86d24ec49396cc2702b.png',
        name: 'sendo',
        content: 'Cash back 12%',
        hot: false
      }, {
        id: 7,
        image: 'https://putatu.com/storage/store_logo/cd78c605118c89adf2062aeca3817fdb.png',
        name: 'zanado',
        content: 'Cash back 12%',
        hot: false
      }, {
        id: 8,
        image: 'https://putatu.com/storage/store_logo/a58ab048c430ebe8766200c8c793e9bf.jpeg',
        name: 'wefit',
        content: 'Cash back 12%',
        hot: false
      }, {
        id: 9,
        image: 'https://putatu.com/storage/store_logo/5375dafc57899ee5919da96583e26e3d.png',
        name: 'vntrip',
        content: 'Cash back 12%',
        hot: false
      }, {
        id: 10,
        image: 'https://putatu.com/storage/store_logo/1e9a3eaea77b6e958a76f915853fffc8.png',
        name: 'zalora',
        content: 'Cash back 12%',
        hot: false
      }
    ];

    this.hot_trends = [{
      id: 1,
      source: 1,
      image: 'https://putatu.com/storage/product_thumb/81c0bfc8fda649d98dd845fcfce53f3c.png',
      oldPrice: 180000,
      newPrice: 100000,
      description: 'Giày thể thao nữ Hunter Biti\'s',
      cashBackRate: .038
    }, {
      id: 2,
      source: 1,
      image: 'https://putatu.com/storage/product_thumb/55c0d720ac6c1434647baec247140916.png',
      oldPrice: 150000,
      newPrice: 20000,
      description: 'Giày thể thao nữ Hunter Biti\'s xanh phối ',
      cashBackRate: .03
    }, {
      id: 3,
      source: 2,
      image: 'https://putatu.com/storage/product_thumb/33f35b73789ea1cd4acf8bc1474ed937.png',
      oldPrice: 290000,
      newPrice: 120000,
      description: 'Giày thể thao nam Hunter Biti\'s',
      cashBackRate: .029
    }];

    this.top_deals = [{
      id: 1,
      source: 2,
      image: 'https://putatu.com/storage/product_thumb/0614b08a6a9b26195e26d6fb05a7199b.png',
      oldPrice: 2990000,
      newPrice: 2000000,
      description: 'Long Beach Resort Phú Quốc',
      cashBackRate: .03
    }, {
      id: 2,
      source: 2,
      image: 'https://putatu.com/storage/product_thumb/79e45d41d7528abb4cdabb6a972514d7.png',
      oldPrice: 2450000,
      newPrice: 2250000,
      description: 'Tour Du lịch Đà Nẵng - Bà Nà - Hội An - Sơn Trà trong 3 ngày 2 đêm',
      cashBackRate: .031
    }, {
      id: 3,
      source: 2,
      image: 'https://putatu.com/storage/product_thumb/8cc7436d4c620f0001f0467d82051ece.png',
      oldPrice: 18990000,
      newPrice: 14399000,
      description: 'Apple iPhone 7 32GB (Vàng Hồng) - Hàng nhập khẩu',
      cashBackRate: .035
    }];
  }


  colex(): void {
    this.collapsed = !this.collapsed;

  }

  changePage(type: string) {
    if (type === 'login') {
      this.navCtrl.push(LoginPage);
    } else if (type === 'register') {
      this.navCtrl.push(RegisterPage);
    } else{
      this.iab.create('http://www.lazada.vn','_blank','location=no,toolbar=yes,hidden=no');
    }
  }

}
