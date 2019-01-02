window.eoxiaJS.wpshop.core = {}; // Déclaration de mon objet JS qui vas contenir toutes les functions


window.eoxiaJS.wpshop.core.init = function (){
};

/* ---------------- Affichage produit ciblé  --------------- */
/**
 * [Affichage produit ciblé ]
 * @param  {[type]} element  [description]
 * @param  {[type]} response [description]
 * @since 2.0.0
 */
window.eoxiaJS.wpshop.core.product_focus = function( element, response ) {
    jQuery( '#product_focus' ).html( response.data.view );
};


/**
 * [Modifie l'affichage -> Ajoute un nouveau produit]
 * @param  {[type]} element  [description]
 * @param  {[type]} response [description]
 * @since 2.0.0
 */
window.eoxiaJS.wpshop.core.show_popup = function( element, response ) {
    jQuery( '#success_add_product' ).css( 'display', 'block' );
	jQuery( '#table_listproduct' ).html( response.data.view );
};

/**
 * [Modifie l'affichage -> Création client]
 * @param  {[type]} element  [description]
 * @param  {[type]} response [description]
 * @since 2.0.0
 */
window.eoxiaJS.wpshop.core.add_customer = function( element, response ){
	jQuery( '#text_information' ).html ( 'Etape 2 - Ajouter des produits ');
	jQuery( '.div_add_customer' ).css ( 'display', 'none' );
	jQuery( '.div_add_product' ).css ( 'display', 'block' );
	jQuery( '.div_add_product' ).html( response.data.view );
}

window.eoxiaJS.wpshop.core.update_panier = function( element, response ){
	jQuery( '#panier' ).html( response.data.view );
}


window.eoxiaJS.wpshop.core.modify_quantity = function( element, response ){
	jQuery( '#panier' ).html( response.data.view );
}

/**
 * [Modifie l'affichage -> Création de l'invoice]
 * @param  {[type]} element  [description]
 * @param  {[type]} response [description]
 * @since 2.0.0
 */
window.eoxiaJS.wpshop.core.choose_product = function( element, response ){
	jQuery( '#text_information' ).html ( 'Etape 3 - Liste des produits !');
	jQuery( '.div_add_product' ).css ( 'display', 'none' );
	jQuery( '#div_finish' ).css ( 'display', 'block' );
	jQuery( '#div_finish' ).html ( response.data.view );
}

window.eoxiaJS.wpshop.core.passer_a_l_achat = function( element, response ){
	jQuery( '#achat_panier' ).html( response.data.view );
	jQuery( '#div_finish' ).css ( 'display', 'none' );

}

/**
 * [Modifie l'affiche -> Création du pdf]
 * @param  {[type]} element  [description]
 * @param  {[type]} response [description]
 * @since 2.0.0
 */
window.eoxiaJS.wpshop.core.create_pdf = function( element, response ){
	jQuery( '#text_information' ).html ( 'Etape 4 - PDF généré !');
	jQuery( '#div_finish' ).css ( 'display', 'none' );
	jQuery( '#div_downloadpdf' ).css ( 'display', 'block' );
	jQuery( '#div_downloadpdf' ).html ( response.data.view );
}
