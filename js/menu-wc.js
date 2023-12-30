'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ed-wings-management-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-3d3b513f0825660ef190a913fe1fff29e96cd57c1413e2f205da291bcae7f45323bd7dbc50106c3059b638641617ab6839b492eab879dc53fe6ec3dca82f3593"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-3d3b513f0825660ef190a913fe1fff29e96cd57c1413e2f205da291bcae7f45323bd7dbc50106c3059b638641617ab6839b492eab879dc53fe6ec3dca82f3593"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-3d3b513f0825660ef190a913fe1fff29e96cd57c1413e2f205da291bcae7f45323bd7dbc50106c3059b638641617ab6839b492eab879dc53fe6ec3dca82f3593"' :
                                            'id="xs-controllers-links-module-AuthModule-3d3b513f0825660ef190a913fe1fff29e96cd57c1413e2f205da291bcae7f45323bd7dbc50106c3059b638641617ab6839b492eab879dc53fe6ec3dca82f3593"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-3d3b513f0825660ef190a913fe1fff29e96cd57c1413e2f205da291bcae7f45323bd7dbc50106c3059b638641617ab6839b492eab879dc53fe6ec3dca82f3593"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-3d3b513f0825660ef190a913fe1fff29e96cd57c1413e2f205da291bcae7f45323bd7dbc50106c3059b638641617ab6839b492eab879dc53fe6ec3dca82f3593"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-3d3b513f0825660ef190a913fe1fff29e96cd57c1413e2f205da291bcae7f45323bd7dbc50106c3059b638641617ab6839b492eab879dc53fe6ec3dca82f3593"' :
                                        'id="xs-injectables-links-module-AuthModule-3d3b513f0825660ef190a913fe1fff29e96cd57c1413e2f205da291bcae7f45323bd7dbc50106c3059b638641617ab6839b492eab879dc53fe6ec3dca82f3593"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CallUserHistoryModule.html" data-type="entity-link" >CallUserHistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CallUserHistoryModule-fce4d992a31862ac7155e4339e05d8d6c6eaba22a7136157bb5a96477684730a0eb6ba0876c9b4ebc230d764862722efc0570f22de67ebd9ac4bc6fb820342d2"' : 'data-bs-target="#xs-controllers-links-module-CallUserHistoryModule-fce4d992a31862ac7155e4339e05d8d6c6eaba22a7136157bb5a96477684730a0eb6ba0876c9b4ebc230d764862722efc0570f22de67ebd9ac4bc6fb820342d2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CallUserHistoryModule-fce4d992a31862ac7155e4339e05d8d6c6eaba22a7136157bb5a96477684730a0eb6ba0876c9b4ebc230d764862722efc0570f22de67ebd9ac4bc6fb820342d2"' :
                                            'id="xs-controllers-links-module-CallUserHistoryModule-fce4d992a31862ac7155e4339e05d8d6c6eaba22a7136157bb5a96477684730a0eb6ba0876c9b4ebc230d764862722efc0570f22de67ebd9ac4bc6fb820342d2"' }>
                                            <li class="link">
                                                <a href="controllers/CallUserHistoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallUserHistoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CallUserHistoryModule-fce4d992a31862ac7155e4339e05d8d6c6eaba22a7136157bb5a96477684730a0eb6ba0876c9b4ebc230d764862722efc0570f22de67ebd9ac4bc6fb820342d2"' : 'data-bs-target="#xs-injectables-links-module-CallUserHistoryModule-fce4d992a31862ac7155e4339e05d8d6c6eaba22a7136157bb5a96477684730a0eb6ba0876c9b4ebc230d764862722efc0570f22de67ebd9ac4bc6fb820342d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CallUserHistoryModule-fce4d992a31862ac7155e4339e05d8d6c6eaba22a7136157bb5a96477684730a0eb6ba0876c9b4ebc230d764862722efc0570f22de67ebd9ac4bc6fb820342d2"' :
                                        'id="xs-injectables-links-module-CallUserHistoryModule-fce4d992a31862ac7155e4339e05d8d6c6eaba22a7136157bb5a96477684730a0eb6ba0876c9b4ebc230d764862722efc0570f22de67ebd9ac4bc6fb820342d2"' }>
                                        <li class="link">
                                            <a href="injectables/CallUserHistoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallUserHistoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ContactModule-07585d046599f1aabc621fbcaa90996de4034d142591a81fbf88241cc3e0427f9d411284baf950bf8c332059bdabe9e8fd50c7f6beac7445c8b11deb663e45d0"' : 'data-bs-target="#xs-controllers-links-module-ContactModule-07585d046599f1aabc621fbcaa90996de4034d142591a81fbf88241cc3e0427f9d411284baf950bf8c332059bdabe9e8fd50c7f6beac7445c8b11deb663e45d0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactModule-07585d046599f1aabc621fbcaa90996de4034d142591a81fbf88241cc3e0427f9d411284baf950bf8c332059bdabe9e8fd50c7f6beac7445c8b11deb663e45d0"' :
                                            'id="xs-controllers-links-module-ContactModule-07585d046599f1aabc621fbcaa90996de4034d142591a81fbf88241cc3e0427f9d411284baf950bf8c332059bdabe9e8fd50c7f6beac7445c8b11deb663e45d0"' }>
                                            <li class="link">
                                                <a href="controllers/ContactController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ContactModule-07585d046599f1aabc621fbcaa90996de4034d142591a81fbf88241cc3e0427f9d411284baf950bf8c332059bdabe9e8fd50c7f6beac7445c8b11deb663e45d0"' : 'data-bs-target="#xs-injectables-links-module-ContactModule-07585d046599f1aabc621fbcaa90996de4034d142591a81fbf88241cc3e0427f9d411284baf950bf8c332059bdabe9e8fd50c7f6beac7445c8b11deb663e45d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactModule-07585d046599f1aabc621fbcaa90996de4034d142591a81fbf88241cc3e0427f9d411284baf950bf8c332059bdabe9e8fd50c7f6beac7445c8b11deb663e45d0"' :
                                        'id="xs-injectables-links-module-ContactModule-07585d046599f1aabc621fbcaa90996de4034d142591a81fbf88241cc3e0427f9d411284baf950bf8c332059bdabe9e8fd50c7f6beac7445c8b11deb663e45d0"' }>
                                        <li class="link">
                                            <a href="injectables/ContactService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactPersonModule.html" data-type="entity-link" >ContactPersonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ContactPersonModule-a3f67256de598cbc403e6c4702974188958a40b3f69a72590e74d1eb27f167800bc933130abe87a6a5fd471176e9981750b080312ee54c64d5f85aef2de6fddb"' : 'data-bs-target="#xs-controllers-links-module-ContactPersonModule-a3f67256de598cbc403e6c4702974188958a40b3f69a72590e74d1eb27f167800bc933130abe87a6a5fd471176e9981750b080312ee54c64d5f85aef2de6fddb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactPersonModule-a3f67256de598cbc403e6c4702974188958a40b3f69a72590e74d1eb27f167800bc933130abe87a6a5fd471176e9981750b080312ee54c64d5f85aef2de6fddb"' :
                                            'id="xs-controllers-links-module-ContactPersonModule-a3f67256de598cbc403e6c4702974188958a40b3f69a72590e74d1eb27f167800bc933130abe87a6a5fd471176e9981750b080312ee54c64d5f85aef2de6fddb"' }>
                                            <li class="link">
                                                <a href="controllers/ContactPersonController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactPersonController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ContactPersonModule-a3f67256de598cbc403e6c4702974188958a40b3f69a72590e74d1eb27f167800bc933130abe87a6a5fd471176e9981750b080312ee54c64d5f85aef2de6fddb"' : 'data-bs-target="#xs-injectables-links-module-ContactPersonModule-a3f67256de598cbc403e6c4702974188958a40b3f69a72590e74d1eb27f167800bc933130abe87a6a5fd471176e9981750b080312ee54c64d5f85aef2de6fddb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactPersonModule-a3f67256de598cbc403e6c4702974188958a40b3f69a72590e74d1eb27f167800bc933130abe87a6a5fd471176e9981750b080312ee54c64d5f85aef2de6fddb"' :
                                        'id="xs-injectables-links-module-ContactPersonModule-a3f67256de598cbc403e6c4702974188958a40b3f69a72590e74d1eb27f167800bc933130abe87a6a5fd471176e9981750b080312ee54c64d5f85aef2de6fddb"' }>
                                        <li class="link">
                                            <a href="injectables/ContactPersonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactPersonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DirectorModule.html" data-type="entity-link" >DirectorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DirectorModule-34dc5336908e132b518f23ac01676a40446b63642d04de410782a0d109f12329de15d442187fc404d7969aeff50014ac7b756ec00f016852ca47cedf512f8235"' : 'data-bs-target="#xs-controllers-links-module-DirectorModule-34dc5336908e132b518f23ac01676a40446b63642d04de410782a0d109f12329de15d442187fc404d7969aeff50014ac7b756ec00f016852ca47cedf512f8235"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DirectorModule-34dc5336908e132b518f23ac01676a40446b63642d04de410782a0d109f12329de15d442187fc404d7969aeff50014ac7b756ec00f016852ca47cedf512f8235"' :
                                            'id="xs-controllers-links-module-DirectorModule-34dc5336908e132b518f23ac01676a40446b63642d04de410782a0d109f12329de15d442187fc404d7969aeff50014ac7b756ec00f016852ca47cedf512f8235"' }>
                                            <li class="link">
                                                <a href="controllers/DirectorController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DirectorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DirectorModule-34dc5336908e132b518f23ac01676a40446b63642d04de410782a0d109f12329de15d442187fc404d7969aeff50014ac7b756ec00f016852ca47cedf512f8235"' : 'data-bs-target="#xs-injectables-links-module-DirectorModule-34dc5336908e132b518f23ac01676a40446b63642d04de410782a0d109f12329de15d442187fc404d7969aeff50014ac7b756ec00f016852ca47cedf512f8235"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DirectorModule-34dc5336908e132b518f23ac01676a40446b63642d04de410782a0d109f12329de15d442187fc404d7969aeff50014ac7b756ec00f016852ca47cedf512f8235"' :
                                        'id="xs-injectables-links-module-DirectorModule-34dc5336908e132b518f23ac01676a40446b63642d04de410782a0d109f12329de15d442187fc404d7969aeff50014ac7b756ec00f016852ca47cedf512f8235"' }>
                                        <li class="link">
                                            <a href="injectables/DirectorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DirectorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FiszkaModule.html" data-type="entity-link" >FiszkaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FiszkaModule-bedd523d7c184ee98379739e3b649b98272d3bd5e9128913d1c23daad47b36b6e38f23adf4b5bf11b035c7cdc8239bdb0b7be2cc85fc13c74b5324f58b83b9e6"' : 'data-bs-target="#xs-controllers-links-module-FiszkaModule-bedd523d7c184ee98379739e3b649b98272d3bd5e9128913d1c23daad47b36b6e38f23adf4b5bf11b035c7cdc8239bdb0b7be2cc85fc13c74b5324f58b83b9e6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FiszkaModule-bedd523d7c184ee98379739e3b649b98272d3bd5e9128913d1c23daad47b36b6e38f23adf4b5bf11b035c7cdc8239bdb0b7be2cc85fc13c74b5324f58b83b9e6"' :
                                            'id="xs-controllers-links-module-FiszkaModule-bedd523d7c184ee98379739e3b649b98272d3bd5e9128913d1c23daad47b36b6e38f23adf4b5bf11b035c7cdc8239bdb0b7be2cc85fc13c74b5324f58b83b9e6"' }>
                                            <li class="link">
                                                <a href="controllers/FiszkaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiszkaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FiszkaModule-bedd523d7c184ee98379739e3b649b98272d3bd5e9128913d1c23daad47b36b6e38f23adf4b5bf11b035c7cdc8239bdb0b7be2cc85fc13c74b5324f58b83b9e6"' : 'data-bs-target="#xs-injectables-links-module-FiszkaModule-bedd523d7c184ee98379739e3b649b98272d3bd5e9128913d1c23daad47b36b6e38f23adf4b5bf11b035c7cdc8239bdb0b7be2cc85fc13c74b5324f58b83b9e6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FiszkaModule-bedd523d7c184ee98379739e3b649b98272d3bd5e9128913d1c23daad47b36b6e38f23adf4b5bf11b035c7cdc8239bdb0b7be2cc85fc13c74b5324f58b83b9e6"' :
                                        'id="xs-injectables-links-module-FiszkaModule-bedd523d7c184ee98379739e3b649b98272d3bd5e9128913d1c23daad47b36b6e38f23adf4b5bf11b035c7cdc8239bdb0b7be2cc85fc13c74b5324f58b83b9e6"' }>
                                        <li class="link">
                                            <a href="injectables/FiszkaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiszkaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupModule.html" data-type="entity-link" >GroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GroupModule-9f25581d55be42d2ab7b0942cf3f288bd40adc24f792f3eb4f4c098027b2c8bd551f42df8d3a1555cbcead942ecef94bfa5c479da30c22d322e55b216abeef57"' : 'data-bs-target="#xs-controllers-links-module-GroupModule-9f25581d55be42d2ab7b0942cf3f288bd40adc24f792f3eb4f4c098027b2c8bd551f42df8d3a1555cbcead942ecef94bfa5c479da30c22d322e55b216abeef57"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GroupModule-9f25581d55be42d2ab7b0942cf3f288bd40adc24f792f3eb4f4c098027b2c8bd551f42df8d3a1555cbcead942ecef94bfa5c479da30c22d322e55b216abeef57"' :
                                            'id="xs-controllers-links-module-GroupModule-9f25581d55be42d2ab7b0942cf3f288bd40adc24f792f3eb4f4c098027b2c8bd551f42df8d3a1555cbcead942ecef94bfa5c479da30c22d322e55b216abeef57"' }>
                                            <li class="link">
                                                <a href="controllers/GroupController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GroupModule-9f25581d55be42d2ab7b0942cf3f288bd40adc24f792f3eb4f4c098027b2c8bd551f42df8d3a1555cbcead942ecef94bfa5c479da30c22d322e55b216abeef57"' : 'data-bs-target="#xs-injectables-links-module-GroupModule-9f25581d55be42d2ab7b0942cf3f288bd40adc24f792f3eb4f4c098027b2c8bd551f42df8d3a1555cbcead942ecef94bfa5c479da30c22d322e55b216abeef57"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GroupModule-9f25581d55be42d2ab7b0942cf3f288bd40adc24f792f3eb4f4c098027b2c8bd551f42df8d3a1555cbcead942ecef94bfa5c479da30c22d322e55b216abeef57"' :
                                        'id="xs-injectables-links-module-GroupModule-9f25581d55be42d2ab7b0942cf3f288bd40adc24f792f3eb4f4c098027b2c8bd551f42df8d3a1555cbcead942ecef94bfa5c479da30c22d322e55b216abeef57"' }>
                                        <li class="link">
                                            <a href="injectables/GroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InterviewsModule.html" data-type="entity-link" >InterviewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InterviewsModule-a7287ace00a11fb52cbe7c9490a25d5cf39c9aac6055566d54c1cb66ffb989a39600ca11b1242ce4fe53e4f0190a8b5db5c984cebc0b0873f040a3f06862845c"' : 'data-bs-target="#xs-controllers-links-module-InterviewsModule-a7287ace00a11fb52cbe7c9490a25d5cf39c9aac6055566d54c1cb66ffb989a39600ca11b1242ce4fe53e4f0190a8b5db5c984cebc0b0873f040a3f06862845c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InterviewsModule-a7287ace00a11fb52cbe7c9490a25d5cf39c9aac6055566d54c1cb66ffb989a39600ca11b1242ce4fe53e4f0190a8b5db5c984cebc0b0873f040a3f06862845c"' :
                                            'id="xs-controllers-links-module-InterviewsModule-a7287ace00a11fb52cbe7c9490a25d5cf39c9aac6055566d54c1cb66ffb989a39600ca11b1242ce4fe53e4f0190a8b5db5c984cebc0b0873f040a3f06862845c"' }>
                                            <li class="link">
                                                <a href="controllers/InterviewsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterviewsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InterviewsModule-a7287ace00a11fb52cbe7c9490a25d5cf39c9aac6055566d54c1cb66ffb989a39600ca11b1242ce4fe53e4f0190a8b5db5c984cebc0b0873f040a3f06862845c"' : 'data-bs-target="#xs-injectables-links-module-InterviewsModule-a7287ace00a11fb52cbe7c9490a25d5cf39c9aac6055566d54c1cb66ffb989a39600ca11b1242ce4fe53e4f0190a8b5db5c984cebc0b0873f040a3f06862845c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InterviewsModule-a7287ace00a11fb52cbe7c9490a25d5cf39c9aac6055566d54c1cb66ffb989a39600ca11b1242ce4fe53e4f0190a8b5db5c984cebc0b0873f040a3f06862845c"' :
                                        'id="xs-injectables-links-module-InterviewsModule-a7287ace00a11fb52cbe7c9490a25d5cf39c9aac6055566d54c1cb66ffb989a39600ca11b1242ce4fe53e4f0190a8b5db5c984cebc0b0873f040a3f06862845c"' }>
                                        <li class="link">
                                            <a href="injectables/InterviewsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterviewsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LoggerModule-ef27b77359a78754d042b8561bbe5613927e2eddf4c423b98987677f2c824e621f7c777ed7188602156513ef281c0524b8b6cd9c05e8f6a4a9f2c9afe8f0835f"' : 'data-bs-target="#xs-controllers-links-module-LoggerModule-ef27b77359a78754d042b8561bbe5613927e2eddf4c423b98987677f2c824e621f7c777ed7188602156513ef281c0524b8b6cd9c05e8f6a4a9f2c9afe8f0835f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LoggerModule-ef27b77359a78754d042b8561bbe5613927e2eddf4c423b98987677f2c824e621f7c777ed7188602156513ef281c0524b8b6cd9c05e8f6a4a9f2c9afe8f0835f"' :
                                            'id="xs-controllers-links-module-LoggerModule-ef27b77359a78754d042b8561bbe5613927e2eddf4c423b98987677f2c824e621f7c777ed7188602156513ef281c0524b8b6cd9c05e8f6a4a9f2c9afe8f0835f"' }>
                                            <li class="link">
                                                <a href="controllers/LoggerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LoggerModule-ef27b77359a78754d042b8561bbe5613927e2eddf4c423b98987677f2c824e621f7c777ed7188602156513ef281c0524b8b6cd9c05e8f6a4a9f2c9afe8f0835f"' : 'data-bs-target="#xs-injectables-links-module-LoggerModule-ef27b77359a78754d042b8561bbe5613927e2eddf4c423b98987677f2c824e621f7c777ed7188602156513ef281c0524b8b6cd9c05e8f6a4a9f2c9afe8f0835f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-ef27b77359a78754d042b8561bbe5613927e2eddf4c423b98987677f2c824e621f7c777ed7188602156513ef281c0524b8b6cd9c05e8f6a4a9f2c9afe8f0835f"' :
                                        'id="xs-injectables-links-module-LoggerModule-ef27b77359a78754d042b8561bbe5613927e2eddf4c423b98987677f2c824e621f7c777ed7188602156513ef281c0524b8b6cd9c05e8f6a4a9f2c9afe8f0835f"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PredicteModule.html" data-type="entity-link" >PredicteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PredicteModule-10b0dcf94a56bcd60326ec703e47cf5b90ee93175cd43f6a11a0e08d3e61bf6aa4b26c4627d186d89570bba38f222e2bbbe0c045b3c428a7578c4b36be37aba9"' : 'data-bs-target="#xs-controllers-links-module-PredicteModule-10b0dcf94a56bcd60326ec703e47cf5b90ee93175cd43f6a11a0e08d3e61bf6aa4b26c4627d186d89570bba38f222e2bbbe0c045b3c428a7578c4b36be37aba9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PredicteModule-10b0dcf94a56bcd60326ec703e47cf5b90ee93175cd43f6a11a0e08d3e61bf6aa4b26c4627d186d89570bba38f222e2bbbe0c045b3c428a7578c4b36be37aba9"' :
                                            'id="xs-controllers-links-module-PredicteModule-10b0dcf94a56bcd60326ec703e47cf5b90ee93175cd43f6a11a0e08d3e61bf6aa4b26c4627d186d89570bba38f222e2bbbe0c045b3c428a7578c4b36be37aba9"' }>
                                            <li class="link">
                                                <a href="controllers/PredicteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PredicteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PredicteModule-10b0dcf94a56bcd60326ec703e47cf5b90ee93175cd43f6a11a0e08d3e61bf6aa4b26c4627d186d89570bba38f222e2bbbe0c045b3c428a7578c4b36be37aba9"' : 'data-bs-target="#xs-injectables-links-module-PredicteModule-10b0dcf94a56bcd60326ec703e47cf5b90ee93175cd43f6a11a0e08d3e61bf6aa4b26c4627d186d89570bba38f222e2bbbe0c045b3c428a7578c4b36be37aba9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PredicteModule-10b0dcf94a56bcd60326ec703e47cf5b90ee93175cd43f6a11a0e08d3e61bf6aa4b26c4627d186d89570bba38f222e2bbbe0c045b3c428a7578c4b36be37aba9"' :
                                        'id="xs-injectables-links-module-PredicteModule-10b0dcf94a56bcd60326ec703e47cf5b90ee93175cd43f6a11a0e08d3e61bf6aa4b26c4627d186d89570bba38f222e2bbbe0c045b3c428a7578c4b36be37aba9"' }>
                                        <li class="link">
                                            <a href="injectables/PredicteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PredicteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RentalCostModule.html" data-type="entity-link" >RentalCostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RentalCostModule-3f0a38488f9650a6a760065fe2d7a79172209a6e5cacdddb6652e065d7fdb739e63219152791a1482fb1b9fedfa3d070824dc890c7ff7756e04af38cc3771fed"' : 'data-bs-target="#xs-controllers-links-module-RentalCostModule-3f0a38488f9650a6a760065fe2d7a79172209a6e5cacdddb6652e065d7fdb739e63219152791a1482fb1b9fedfa3d070824dc890c7ff7756e04af38cc3771fed"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RentalCostModule-3f0a38488f9650a6a760065fe2d7a79172209a6e5cacdddb6652e065d7fdb739e63219152791a1482fb1b9fedfa3d070824dc890c7ff7756e04af38cc3771fed"' :
                                            'id="xs-controllers-links-module-RentalCostModule-3f0a38488f9650a6a760065fe2d7a79172209a6e5cacdddb6652e065d7fdb739e63219152791a1482fb1b9fedfa3d070824dc890c7ff7756e04af38cc3771fed"' }>
                                            <li class="link">
                                                <a href="controllers/RentalCostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentalCostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RentalCostModule-3f0a38488f9650a6a760065fe2d7a79172209a6e5cacdddb6652e065d7fdb739e63219152791a1482fb1b9fedfa3d070824dc890c7ff7756e04af38cc3771fed"' : 'data-bs-target="#xs-injectables-links-module-RentalCostModule-3f0a38488f9650a6a760065fe2d7a79172209a6e5cacdddb6652e065d7fdb739e63219152791a1482fb1b9fedfa3d070824dc890c7ff7756e04af38cc3771fed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RentalCostModule-3f0a38488f9650a6a760065fe2d7a79172209a6e5cacdddb6652e065d7fdb739e63219152791a1482fb1b9fedfa3d070824dc890c7ff7756e04af38cc3771fed"' :
                                        'id="xs-injectables-links-module-RentalCostModule-3f0a38488f9650a6a760065fe2d7a79172209a6e5cacdddb6652e065d7fdb739e63219152791a1482fb1b9fedfa3d070824dc890c7ff7756e04af38cc3771fed"' }>
                                        <li class="link">
                                            <a href="injectables/RentalCostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentalCostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScheduleDaysModule.html" data-type="entity-link" >ScheduleDaysModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ScheduleDaysModule-655317370c133d3577910bee5be3a89ad26c7dfade808a7348d282368610b03104e459614f83df34ee7d4807e98d42e75f30fb5d82490905b2f9dfcc5aa42cd7"' : 'data-bs-target="#xs-controllers-links-module-ScheduleDaysModule-655317370c133d3577910bee5be3a89ad26c7dfade808a7348d282368610b03104e459614f83df34ee7d4807e98d42e75f30fb5d82490905b2f9dfcc5aa42cd7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ScheduleDaysModule-655317370c133d3577910bee5be3a89ad26c7dfade808a7348d282368610b03104e459614f83df34ee7d4807e98d42e75f30fb5d82490905b2f9dfcc5aa42cd7"' :
                                            'id="xs-controllers-links-module-ScheduleDaysModule-655317370c133d3577910bee5be3a89ad26c7dfade808a7348d282368610b03104e459614f83df34ee7d4807e98d42e75f30fb5d82490905b2f9dfcc5aa42cd7"' }>
                                            <li class="link">
                                                <a href="controllers/ScheduleDaysController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleDaysController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ScheduleDaysModule-655317370c133d3577910bee5be3a89ad26c7dfade808a7348d282368610b03104e459614f83df34ee7d4807e98d42e75f30fb5d82490905b2f9dfcc5aa42cd7"' : 'data-bs-target="#xs-injectables-links-module-ScheduleDaysModule-655317370c133d3577910bee5be3a89ad26c7dfade808a7348d282368610b03104e459614f83df34ee7d4807e98d42e75f30fb5d82490905b2f9dfcc5aa42cd7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ScheduleDaysModule-655317370c133d3577910bee5be3a89ad26c7dfade808a7348d282368610b03104e459614f83df34ee7d4807e98d42e75f30fb5d82490905b2f9dfcc5aa42cd7"' :
                                        'id="xs-injectables-links-module-ScheduleDaysModule-655317370c133d3577910bee5be3a89ad26c7dfade808a7348d282368610b03104e459614f83df34ee7d4807e98d42e75f30fb5d82490905b2f9dfcc5aa42cd7"' }>
                                        <li class="link">
                                            <a href="injectables/ScheduleDaysService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleDaysService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScheduleModule.html" data-type="entity-link" >ScheduleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ScheduleModule-d3446948b44e0b26ac0cbdb06374f1171c4295a378490589fc39550a7fe1f77c51dbda4e8cf4b6f9e6b3fda70915847e7762824e2b11d065a29e411016b146ac"' : 'data-bs-target="#xs-controllers-links-module-ScheduleModule-d3446948b44e0b26ac0cbdb06374f1171c4295a378490589fc39550a7fe1f77c51dbda4e8cf4b6f9e6b3fda70915847e7762824e2b11d065a29e411016b146ac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ScheduleModule-d3446948b44e0b26ac0cbdb06374f1171c4295a378490589fc39550a7fe1f77c51dbda4e8cf4b6f9e6b3fda70915847e7762824e2b11d065a29e411016b146ac"' :
                                            'id="xs-controllers-links-module-ScheduleModule-d3446948b44e0b26ac0cbdb06374f1171c4295a378490589fc39550a7fe1f77c51dbda4e8cf4b6f9e6b3fda70915847e7762824e2b11d065a29e411016b146ac"' }>
                                            <li class="link">
                                                <a href="controllers/ScheduleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ScheduleModule-d3446948b44e0b26ac0cbdb06374f1171c4295a378490589fc39550a7fe1f77c51dbda4e8cf4b6f9e6b3fda70915847e7762824e2b11d065a29e411016b146ac"' : 'data-bs-target="#xs-injectables-links-module-ScheduleModule-d3446948b44e0b26ac0cbdb06374f1171c4295a378490589fc39550a7fe1f77c51dbda4e8cf4b6f9e6b3fda70915847e7762824e2b11d065a29e411016b146ac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ScheduleModule-d3446948b44e0b26ac0cbdb06374f1171c4295a378490589fc39550a7fe1f77c51dbda4e8cf4b6f9e6b3fda70915847e7762824e2b11d065a29e411016b146ac"' :
                                        'id="xs-injectables-links-module-ScheduleModule-d3446948b44e0b26ac0cbdb06374f1171c4295a378490589fc39550a7fe1f77c51dbda4e8cf4b6f9e6b3fda70915847e7762824e2b11d065a29e411016b146ac"' }>
                                        <li class="link">
                                            <a href="injectables/ScheduleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-f8033cab7a3660ac747e683a7249a1e91d17691dcb6e1c1f14cd87da01f1443b9ae1f5e48ac80d7ce0f813c689a01b3c060a401555e79ba8b65989b9e6e7960f"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-f8033cab7a3660ac747e683a7249a1e91d17691dcb6e1c1f14cd87da01f1443b9ae1f5e48ac80d7ce0f813c689a01b3c060a401555e79ba8b65989b9e6e7960f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-f8033cab7a3660ac747e683a7249a1e91d17691dcb6e1c1f14cd87da01f1443b9ae1f5e48ac80d7ce0f813c689a01b3c060a401555e79ba8b65989b9e6e7960f"' :
                                            'id="xs-controllers-links-module-SchoolModule-f8033cab7a3660ac747e683a7249a1e91d17691dcb6e1c1f14cd87da01f1443b9ae1f5e48ac80d7ce0f813c689a01b3c060a401555e79ba8b65989b9e6e7960f"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-f8033cab7a3660ac747e683a7249a1e91d17691dcb6e1c1f14cd87da01f1443b9ae1f5e48ac80d7ce0f813c689a01b3c060a401555e79ba8b65989b9e6e7960f"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-f8033cab7a3660ac747e683a7249a1e91d17691dcb6e1c1f14cd87da01f1443b9ae1f5e48ac80d7ce0f813c689a01b3c060a401555e79ba8b65989b9e6e7960f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-f8033cab7a3660ac747e683a7249a1e91d17691dcb6e1c1f14cd87da01f1443b9ae1f5e48ac80d7ce0f813c689a01b3c060a401555e79ba8b65989b9e6e7960f"' :
                                        'id="xs-injectables-links-module-SchoolModule-f8033cab7a3660ac747e683a7249a1e91d17691dcb6e1c1f14cd87da01f1443b9ae1f5e48ac80d7ce0f813c689a01b3c060a401555e79ba8b65989b9e6e7960f"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-b1844b2ad07afb0324170aca8d6a3cce1f622fe0061674c1ea5ca6efa452ce710b8a12624c633b8a01c364305902b20c79d65505c2693729018858bafa70a9df"' : 'data-bs-target="#xs-controllers-links-module-UserModule-b1844b2ad07afb0324170aca8d6a3cce1f622fe0061674c1ea5ca6efa452ce710b8a12624c633b8a01c364305902b20c79d65505c2693729018858bafa70a9df"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-b1844b2ad07afb0324170aca8d6a3cce1f622fe0061674c1ea5ca6efa452ce710b8a12624c633b8a01c364305902b20c79d65505c2693729018858bafa70a9df"' :
                                            'id="xs-controllers-links-module-UserModule-b1844b2ad07afb0324170aca8d6a3cce1f622fe0061674c1ea5ca6efa452ce710b8a12624c633b8a01c364305902b20c79d65505c2693729018858bafa70a9df"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-b1844b2ad07afb0324170aca8d6a3cce1f622fe0061674c1ea5ca6efa452ce710b8a12624c633b8a01c364305902b20c79d65505c2693729018858bafa70a9df"' : 'data-bs-target="#xs-injectables-links-module-UserModule-b1844b2ad07afb0324170aca8d6a3cce1f622fe0061674c1ea5ca6efa452ce710b8a12624c633b8a01c364305902b20c79d65505c2693729018858bafa70a9df"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-b1844b2ad07afb0324170aca8d6a3cce1f622fe0061674c1ea5ca6efa452ce710b8a12624c633b8a01c364305902b20c79d65505c2693729018858bafa70a9df"' :
                                        'id="xs-injectables-links-module-UserModule-b1844b2ad07afb0324170aca8d6a3cce1f622fe0061674c1ea5ca6efa452ce710b8a12624c633b8a01c364305902b20c79d65505c2693729018858bafa70a9df"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CallUserHistoryController.html" data-type="entity-link" >CallUserHistoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactController.html" data-type="entity-link" >ContactController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactPersonController.html" data-type="entity-link" >ContactPersonController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DirectorController.html" data-type="entity-link" >DirectorController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FiszkaController.html" data-type="entity-link" >FiszkaController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GroupController.html" data-type="entity-link" >GroupController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InterviewsController.html" data-type="entity-link" >InterviewsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoggerController.html" data-type="entity-link" >LoggerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PredicteController.html" data-type="entity-link" >PredicteController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RentalCostController.html" data-type="entity-link" >RentalCostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ScheduleController.html" data-type="entity-link" >ScheduleController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ScheduleDaysController.html" data-type="entity-link" >ScheduleDaysController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SchoolController.html" data-type="entity-link" >SchoolController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessTokenDto.html" data-type="entity-link" >AccessTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddgroupDto.html" data-type="entity-link" >AddgroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUserInterViewDto.html" data-type="entity-link" >AddUserInterViewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordDto.html" data-type="entity-link" >ChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCallUserDto.html" data-type="entity-link" >CreateCallUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateContactDto.html" data-type="entity-link" >CreateContactDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateContactPersontDto.html" data-type="entity-link" >CreateContactPersontDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDirectorDto.html" data-type="entity-link" >CreateDirectorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFiszkaDto.html" data-type="entity-link" >CreateFiszkaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGroupDto.html" data-type="entity-link" >CreateGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInterViewDto.html" data-type="entity-link" >CreateInterViewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRentalCostDto.html" data-type="entity-link" >CreateRentalCostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateScheduleDaysDto.html" data-type="entity-link" >CreateScheduleDaysDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateScheduleDto.html" data-type="entity-link" >CreateScheduleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserForMGTMTDto.html" data-type="entity-link" >CreateUserForMGTMTDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserForRdDto.html" data-type="entity-link" >CreateUserForRdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DecodeDto.html" data-type="entity-link" >DecodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditContactDto.html" data-type="entity-link" >EditContactDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditContactPersontDto.html" data-type="entity-link" >EditContactPersontDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditDirectorDto.html" data-type="entity-link" >EditDirectorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditFiszkaDto.html" data-type="entity-link" >EditFiszkaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditGroupDto.html" data-type="entity-link" >EditGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditInterViewDto.html" data-type="entity-link" >EditInterViewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditRentalCostDto.html" data-type="entity-link" >EditRentalCostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditScheduleDaysDto.html" data-type="entity-link" >EditScheduleDaysDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditScheduleDto.html" data-type="entity-link" >EditScheduleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditSchoolDto.html" data-type="entity-link" >EditSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditSelfDto.html" data-type="entity-link" >EditSelfDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditUserForMGTMTDto.html" data-type="entity-link" >EditUserForMGTMTDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditUserForRdDto.html" data-type="entity-link" >EditUserForRdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetCallUserHistoryDto.html" data-type="entity-link" >GetCallUserHistoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetContactDto.html" data-type="entity-link" >GetContactDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetContactPersontDto.html" data-type="entity-link" >GetContactPersontDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetDirectorDto.html" data-type="entity-link" >GetDirectorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFindByIdDto.html" data-type="entity-link" >GetFindByIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFiszkaDto.html" data-type="entity-link" >GetFiszkaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/getGraphDateDto.html" data-type="entity-link" >getGraphDateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetGroupDto.html" data-type="entity-link" >GetGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetInterViewsDto.html" data-type="entity-link" >GetInterViewsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetRentalCostDto.html" data-type="entity-link" >GetRentalCostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetScheduleDto.html" data-type="entity-link" >GetScheduleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSchoolDto.html" data-type="entity-link" >GetSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserDto.html" data-type="entity-link" >GetUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserInterViewDto.html" data-type="entity-link" >GetUserInterViewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GraphDateDto.html" data-type="entity-link" >GraphDateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MatchConstraint.html" data-type="entity-link" >MatchConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotFoundErrorFilter.html" data-type="entity-link" >NotFoundErrorFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotFoundExceptionFilter.html" data-type="entity-link" >NotFoundExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaOtherFilter.html" data-type="entity-link" >PrismaOtherFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaValidationFilter.html" data-type="entity-link" >PrismaValidationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveUserInterViewDto.html" data-type="entity-link" >RemoveUserInterViewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendFiszkiDto.html" data-type="entity-link" >SendFiszkiDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationdDto.html" data-type="entity-link" >ValidationdDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CallUserHistoryService.html" data-type="entity-link" >CallUserHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactPersonService.html" data-type="entity-link" >ContactPersonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DirectorService.html" data-type="entity-link" >DirectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DtoValidationPipe.html" data-type="entity-link" >DtoValidationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DtoValidatorPipe.html" data-type="entity-link" >DtoValidatorPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DtoValidatorSelfPipe.html" data-type="entity-link" >DtoValidatorSelfPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FiszkaService.html" data-type="entity-link" >FiszkaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupService.html" data-type="entity-link" >GroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InterviewsService.html" data-type="entity-link" >InterviewsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link" >LoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OptionsPipe.html" data-type="entity-link" >OptionsPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PredicteService.html" data-type="entity-link" >PredicteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RentalCostService.html" data-type="entity-link" >RentalCostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScheduleDaysService.html" data-type="entity-link" >ScheduleDaysService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScheduleService.html" data-type="entity-link" >ScheduleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolService.html" data-type="entity-link" >SchoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpperCasePipe.html" data-type="entity-link" >UpperCasePipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ReqUserInfo.html" data-type="entity-link" >ReqUserInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});