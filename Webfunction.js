// Variables
const FOR_MEN_TITLE = "For Men";
const FOR_WOMEN_TITLE = "For Women";
const FOR_KIDS_TITLE = "For Kids";
const FOR_UNISEX_TITLE = "For Unisex";


var listOfItemsInCart = [
    ["https://fragranceroom.com/cdn/shop/products/perfume-flowerbomb-bloom-for-women-eau-de-toilette-spray-1_large.jpg?v=1550604080", "FLOWERBOMB BLOOM", FOR_WOMEN_TITLE, "2", "75"],
    ["https://fragranceroom.com/cdn/shop/products/perfume-la-nuit-tresor-a-la-folie-for-women-by-lancome-eau-de-parfum-spray-2-5-oz-1.jpg?v=1550604052", "LA NUIT TRESOR A LA FOLIE", FOR_WOMEN_TITLE, "3", "85"],
];


var listOfItemsDesctiption = [
    ["FLOWERBOMB BLOOM", "Flowerbomb by Viktor&Rolf is a Amber Floral fragrance for women. Top notes are Tea, Bergamot and Osmanthus; middle notes are Orchid, Jasmine, Rose, Freesia and African Orange Flower; base notes are Patchouli, Musk and Vanilla."],
    ["LA NUIT TRESOR A LA FOLIE", "La Nuit Trésor à la Folie by Lancôme is a Amber Vanilla fragrance for women. Top notes are Red Currant, Pink Pepper, Pear and Bergamot; middle notes are Damask Rose, Violet, Peony and Jasmine; base notes are Bourbon Vanilla, Tonka Bean, Benzoin, Nutmeg, Ambroxan, Patchouli and Woody Notes."],
    ["VALENTINO UOMO INTENSE", "Valentino Uomo Intense by Valentino is a Leather fragrance for men. Top notes are Mandarin Orange and Clary Sage; middle notes are Iris and Tonka Bean; base notes are Vanilla and Leather."],
    ["ARMANI STRONGER WITH YOU", "Emporio Armani Stronger With You by Giorgio Armani is a Aromatic Fougere fragrance for men. The nose behind this fragrance is Cecile Matton. Top notes are Chestnut and Sugar; middle notes are Sage and Lavender; base notes are Vanilla and Smoke."],
    ["TRIFLE KIRKÈ", "It is the spirit of musk and cinnamon. It is the freshness of peaches, pears and raspberries. It is the scent of sandalwood and the joy of vanilla. Kirkè is a distinctive warm fragrance for those who love calm and relaxation in the winter weather. The fragrance of calm."],
    ["ABBAQ THE NORTH", "A sophisticated fragrance with summer breezes, smelling of freshness to give joy and comfort with notes of jasmine and fruity aromas."],
    ["ABBAQ SWEET GIRL", "Beautiful feeling with floral harmony"],
    ["ABBAQ THE KING", "It has a pleasant powder scent, a beautiful experience that gives your child a wonderful feeling, ideal for after bathing."],
    ["TRIFLE SCANDAL BY NIGHT", "The scent of orange and honey, and after that, as for it calms down, you will smell the scent of cherries and pears, and as for it lingers, at the end you will find vanilla and amber, suitable for these fall nights and the beginning of winter."],
    ["ABBAQ WITH ME", "With a mixture of scents of jasmine flower and Turkish rose with vanilla and flowers."],
    ["TRIFLE CREED AVENTUS", "The composition of the fragrance is very balanced, and this is the secret of the beauty of the fragrance. At the beginning of the fragrance, you smell the refreshing smell of pineapple mixed with bergamot and currants. After that, you will notice the smell of birch wood and a smoky touch, until you become dizzy from it and faint from it, as it combines the refreshing fruity touch with the lemon juice."],
    ["ABBAQ BALANCE", "A lively composition whose aromatic introduction exudes notes of saffron and raspberries, in addition to orange blossoms."],
    ["VALENTINO DONNA BORN IN ROMA", "Valentino Donna Born In Roma by Valentino is a Amber Floral fragrance for women. Top notes are Black Currant, Pink Pepper and Bergamot; middle notes are Jasmine, Jasmine Sambac and Jasmine Tea; base notes are Bourbon Vanilla, Cashmeran and Guaiac Wood."],
    ["BATH & BODY WORKS IN THE STARS", "It smells like a sweet, sparkling wish upon a star in the middle of the forest clearing.It is fragrance notes are starflower, sandalwood musk, sugared tangelo, white agarwood and radiant amber."],
    ["AIR-VAL CAPTAIN AMERICA EDT", "This perfume is a great option for everyday wear during warmer weather in spring and summer seasons. It is packaged in the iconic shield of the classic superhero. This exciting scent offers an enjoyable woodsy aroma with dashes of citrus accords. It harmonizes zesty bergamot, petit grain and orange blossom with vanilla and woodsy notes."],
    ["LE PETIT PRINCE", "FRAGRANCES OF NATURE: It's soft and warm fragrance reflects the values of the little prince. Feel the essence of walking in the woods in the autumn with aromas of moss, leaves, bark and heathers with the Le Petit Prince Eau de Senteur. The woody fragrance harmonizes the fresh notes of pines with warm undertones of oakmoss."],
    ["DIOR J'ADORE PERFUME", "J'adore by Dior is a Floral Fruity fragrance for women. Top notes are Pear, Melon, Magnolia, Peach, Mandarin Orange and Bergamot; middle notes are Jasmine, Lily-of-the-Valley, Tuberose, Freesia, Rose, Orchid, Plum and Violet; base notes are Musk, Vanilla, Blackberry and Cedar."],
    ["DIOR MISS DIOR", "Echoing its inspiring character, the new Miss Dior fragrance is like an olfactory “millefiori”. Centifolia Rose, with its honeyed and peppery notes, reigns over a delectably creamy velvet heart. It is embroidered with fresh Lily-of-the-Valley notes, an apricot-tinged Peony accord, and powdery Iris notes. Miss Dior is thus built around an elegant, striking bouquet—like a “millefiori” that seems to carry countless flowers in endless colours. At the base, slight notes of tender wood envelop the composition."],
    ["PACO RABANNE 1 MILLIONR", "1 Million by Paco Rabanne is a Woody Spicy fragrance for men. Top notes are Blood Mandarin, Grapefruit and Mint; middle notes are Cinnamon, Spicy Notes and Rose; base notes are Amber, Leather, Woody Notes and Indian Patchouli."],
    ["DIOR SAUVAGE", "A radically fresh composition, Sauvage is both raw and noble. Radiant top notes burst with the juicy freshness of Calabrian bergamot, while amber wood unleashes a powerfully woody trail. Sauvage is a fragrance inspired by wide-open spaces under a blue sky that dominates a white-hot desert landscape."],
    ["GUCCI OUD GUCCI", "Gucci Oud by Gucci is a Amber Woody fragrance for women and men. Gucci Oud was launched in 2014. Top notes are Raspberry, Pear and Saffron; middle notes are Bulgarian Rose and Orange Blossom; base notes are Agarwood (Oud), Patchouli, Amber and Musk."],
    ["EAU DE CARTIER","Eau de Cartier by Cartier is a Citrus Aromatic fragrance for women and men. The nose behind this fragrance is Christine Nagel. Top notes are Yuzu, Bergamot and Coriander; middle notes are Violet Leaf, Violet and Lavender; base notes are Cedar, Musk, White Amber and Patchouli."],
    ["DISNEY PRINCESS ARIEL", "Disney Princess Ariel Eau de Parfum is a unique blend of floral and oriental elements. It combines the freshness of floral notes with the depth and warmth of oriental fragrances, resulting in a scent that's both elegant and timeless."],
    ["SPIDERMANM", "The fragrance begins quite sweetly and synthetically, as you can imagine with such fragrances. It also has fruity echoes that I can't really smell out. The sweetness comes first from the jasmine, but later more from the musk. A slight herbaceous note seems to radiate from the background, but quickly fades away. In the base, the fragrance is slightly more woody and spicy, the synthetic notes remain, and the fragrance is also still sweet."],
    ["BATH AND BODY WORKS INTO THE NIGHT", "What it smells like: a timeless, feminine, alluring night on the town. Fragrance notes: raspberry noir, amber crystals, velvety rose petals, creamy patchouli and mocha musk."],
    ["BATH & BODY WORKS WARM VANILLA", "What it smells like: enjoying an irresistibly creamy, sweet treat in your coziest cashmere. Fragrance notes: intoxicating vanilla, white orchid, sparkling sugar, fresh jasmine and creamy sandalwood."],
    ["VERSACE EROS", "Eros Eau de Parfum by Versace is a Amber Woody fragrance for men. Top notes are Mint, Candy Apple, Lemon and Mandarin Orange; middle notes are Ambroxan, Geranium and Clary Sage; base notes are Vanilla, Sandalwood, Cedar, Bitter Orange, Patchouli and Leather."],
    ["PACO RABANNE PHANTOM", "Key Notes: Rhubarb, Lavender, Vetiver. Fragrance Description: This mind-bending fragrance was born from the daring encounter of an energizing, green flash of lemon and vetiver with an irresistible creamy lavender and woody vanilla."],
    ["BOY SMELLS VIOLET ENDS", "VIOLET ENDS thrives even in the wake of destruction. Sumptuous amounts of smoky papyrus, divine incense, and white birch are wrapped in raw tobacco leaves with a flourishing heart of violet and rhubarb growing within. Dark but optimistic, this scent recognizes the beautiful complexities of life."],
    ["COSTA BRAZIL AROMA", "vocative of the Amazon at dawn, this sensual scent is reminiscent of natural resin that grows in the jungles of Brazil and is revered for its benefits: peace of mind, focus, balance. A blend of White Jungle Flora, Patchouli, Sandalwood, Vetiver and Amber Accords, it gives off an exotic, smoky scent of fresh earth, flowers and crushed leaves—like your first steps into the jungle, its welcoming arms open and envelop you whole."],
    ["CINDERELLA PINK", "Immerse yourself in a scent that evokes the charm of a fairytale princess. The fragrance opens with a burst of fresh bergamot and juicy pink grapefruit, instantly awakening your senses with a vibrant energy. As the scent unfolds, delicate hints of dewy rose petals and soft jasmine petals dance on your skin, providing a subtle yet alluring floral undertone. Finally, the fragrance settles into a warm and comforting embrace, thanks to the gentle caress of creamy vanilla and sensual musk."],
    ["IRON MAN", "IRON MAN Cologne by Marvel, IRON MAN cologne is sure to enthrall your little superhero in-the-making. Spunky and fun, it will give him the confidence to conquer all his villains, no matter how big or small. Juicy bergamot and apple start the exciting fragrance, providing an energizing kick. Geranium lends a softer middle with its gentle floral note. Clove and tarragon let the flower linger on a bed of exotic spice. Fresh grass, olive tree wood, sandalwood, and cedar mellow the earlier ingredients for a smooth, earthy finish. Your tyke will imagine all kinds of heroic adventures when he wears this inspiring scent."],
    ["COCO CHANEL MADEMOISELLE", "Key Notes: Orange, Patchouli, Turkish RoseFragrance Description: Irresistibly sexy, irrepressibly spirited. A sparkling ambery fragrance that recalls a daring young Coco Chanel. An absolutely modern composition with a strong yet surprisingly fresh character. Sparks of fresh and vibrant Orange immediately awaken the senses. A clear and sensual heart reveals the transparent accords of Grasse Jasmine and May Rose. The scent finally unfurls with the vibrant accents of Patchouli and Vetiver."],
    ["DIOR J'ADORE", "Notes of Vanilla and magnolia create a subtle sweet, sensual aroma. With notes of ylang- ylang from the Comoros Islands combined with damask rose and sambac jasmine,concluding the deodorant creating an elegant, floral garden aroma. A perfumed deodorant spray for her. Perfect for all occasions."],
    ["COACH FOR MEN", "Coach For Men by Coach is a Woody Aromatic fragrance for men. Top notes are Pear, Kumquat, Bergamot, Lavender and Grapefruit; middle notes are Cardamom, Geranium and Coriander; base notes are Ambergris, Suede, Amberwood and Haitian Vetiver."],
    ["1 MILLION PACO RABANNE", "1 Million by Paco Rabanne is a Woody Spicy fragrance for men. Top notes are Blood Mandarin, Grapefruit and Mint; middle notes are Cinnamon, Spicy Notes and Rose; base notes are Amber, Leather, Woody Notes and Indian Patchouli."],
    ["TNW - PULL ME CLOSER", "The Natural Wash’s Mist give you have the sensual and floral scent that lets you spritz and take this sweet perfume everywhere you go.These long-lasting body mist are a subtle and delicate blend of fresh and floral aroma."],
    ["OSSUM PLEASURE + DELIGHT", " A perfume body mist that’s fun and refreshing at the same time. It will not just make to feel fresh but will make you smell amazing too. Presenting Ossum Romance, this appealing perfume body mist is here to keep you rejuvenated. It’s a water-based body mist, which means it not just makes you smell great."],
    ["BLACK PANTHER", "Black Panther Cologne by Marvel for Kids. This floral fruity fragrance has a blend of juniper, lavender, musk, cedar, and sandalwood."],
    ["BARBIE", "t smells a lot like Snow Fairy with a twist of almond, really pretty and sweet."],
    ["CHANEL CHANCE","It smells quite herbal and green—thanks to patchouli, jasmine, hyacinth, and iris—but has a slight hint of sweetness from pineapple. If you like a fresh scent but aren’t a big fan of dainty florals, this is def the Chanel perfume for you."],
    ["GISOU HONEY INFUSED", "The delicate, sweet scent of lush, droopy honey blends into a heart of spring florals inspired by the Mirsalehi Bee Garden whilst citrus notes of apricot and mandarin bring a playful twist to this incredibly nourishing and luxurious fragrance."],
    ["CK ONE COLOGNE", "CK One by Calvin Klein is a Citrus Aromatic fragrance for women and men. Top notes are Lemon, Green Notes, Bergamot, Mandarin Orange, Pineapple, Cardamom and Papaya; middle notes are Lily-of-the-Valley, Jasmine, Violet, Nutmeg, Rose, Orris Root and Freesia; base notes are Green Accord, Musk, Cedar, Sandalwood, Oakmoss, Green Tea and Amber."],
    ["VERSACE EROS COLOGNE", "Love, passion, beauty, and desire are the key concepts behind the new men’s fragrance by Versace. As Greek mythology and classic sculpture have characterized the Versace world since the beginning, so the perfection of the male body is evoked with an allusion to Eros, the God of Love. VERSACE EROS is a fragrance for a strong, passionate man, who is master of himself. It is key notes are Mint Leaves, Orange Blossom, Vanilla Madagascar."],
    ["TIZIANA TERENZI KIRKE", "Kirke by Tiziana Terenzi is a Chypre Fruity fragrance for women and men. Kirke was launched in 2015. The nose behind this fragrance is Paolo Terenzi. Top notes are Passionfruit, Peach, Pear, Raspberry, Cassis and Sand; middle note is Lily-of-the-Valley; base notes are Musk, Sandalwood, Vanilla, Patchouli and Heliotrope."],
    ["INITIO SIDE EFFECT", "The Tobacco, Vanilla, Rum and Cinnamon harmony of this fragrance is spellbinding. It tantalises the most discerning senses by playing off each of its facets - Leather, animal and the woody note of Vanilla - one by one. Recklessly bold... and stirring. Deeply buried emotions and passions take over. The fragrance lifts the veil on the unsayable. This passionate perfume has the power to plunge its wearer into that altered state where nothing is too daring because there are no risks left. Notes of Cinnamon Bark, Rum, Tobacco, Saffron, Sandal Wood, Hedione."],
    ["CUPCAKE SWIRL", "Cupcake Swirl by Body Fantasies is a Floral Fruity Gourmand fragrance. Top notes are Buttercream, Ginger and Clove; middle notes are Cookie and Butter; base notes are Vanilla, Coconut and Musk."],
    ["STAR WARS DARTH VADER", "The fragrance opens with mandarin and citruses including lime and lemon. The heart holds spice, mid-white woods and lavender. The base notes of tonka bean, sandalwood, amber and creamy musk give the scent a distinctly masculine essence. The unique bottle is sure to garner the interest of any Star Wars or Darth Vader enthusiast."],
];



var listOfItems = [
    ["https://fragranceroom.com/cdn/shop/products/perfume-flowerbomb-bloom-for-women-eau-de-toilette-spray-1_large.jpg?v=1550604080", FOR_WOMEN_TITLE, "Perfume", "FLOWERBOMB BLOOM", "75"],
    ["https://fragranceroom.com/cdn/shop/products/perfume-la-nuit-tresor-a-la-folie-for-women-by-lancome-eau-de-parfum-spray-2-5-oz-1.jpg?v=1550604052", FOR_WOMEN_TITLE, "Perfume", "LA NUIT TRESOR A LA FOLIE", "85"],
    ["https://fragranceroom.com/cdn/shop/products/cologne-valentino-uomo-intense-for-men-eau-de-parfum-spray-1-7-oz-1.jpg?v=1546638204", FOR_MEN_TITLE, "Perfume", "VALENTINO UOMO INTENSE", "70"],
    ["https://fragranceroom.com/cdn/shop/products/cologne-armani-stronger-with-you-for-men-eau-de-toilette-spray-1-7-oz-1.jpg?v=1546638187", FOR_MEN_TITLE, "Perfume", "ARMANI STRONGER WITH YOU", "86"],
    ["https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/405921853_655872063378210_6581242756454862109_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=FlXyTBRFmlkAX_ciLZ4&_nc_ht=scontent.fcai19-2.fna&oh=00_AfCyTTja29i4i5i5kD36z_UCTf5yft3mWFWL0IzS5vG57A&oe=65705E1A", FOR_UNISEX_TITLE, "Perfume", "TRIFLE KIRKÈ", "50"],
    ["https://cdn.salla.sa/ZqaZO/WaCmlrEsQrvQHk5tdh8OZjrtCyUrIOFNd6Ytzagx.png", FOR_UNISEX_TITLE, "Perfume", "ABBAQ THE NORTH", "45"],
    ["Photos/kdp.jpg", FOR_KIDS_TITLE, "Perfume", "ABBAQ SWEET GIRL", "40"],
    ["Photos/kbp.jpg", FOR_KIDS_TITLE, "Perfume", "ABBAQ THE KING", "40"],
    ["https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/405541232_653926796906070_8989601026198634661_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uxf4WolZQhkAX9T69jp&_nc_ht=scontent.fcai19-2.fna&oh=00_AfCI96lIiqXIxglGgY3cf_wstj3hFWrcRPpFbIfFPNgE5A&oe=656BD032", FOR_WOMEN_TITLE, "Perfume", "TRIFLE SCANDAL BY NIGHT", "65"],
    ["Photos/wp.jpg", FOR_WOMEN_TITLE, "Perfume", "ABBAQ WITH ME", "55"],
    ["Photos/mp.jpg", FOR_MEN_TITLE, "Perfume", "TRIFLE CREED AVENTUS", "66"],
    ["https://cdn.salla.sa/ZqaZO/pSFh6GRRI7A5QzpouJrnauWinyKF4BZNuOHi5m02.png", FOR_MEN_TITLE, "Perfume", "ABBAQ BALANCE", "90"],
    ["https://m.media-amazon.com/images/I/711fdw0zM3L._AC_SX522_.jpg", FOR_UNISEX_TITLE, "Perfume", "VALENTINO DONNA BORN IN ROMA", "155"],
    ["Photos/uni.png", FOR_UNISEX_TITLE, "Body Mist", "BATH & BODY WORKS IN THE STARS", "70"],
    ["https://www.mumzworld.com/media/cGF0aD0lMkZtZWRpYSUyRmNhdGFsb2clMkZwcm9kdWN0JTJGcCUyRmwlMkZwbGV4LWFpcjAwODYyMjQtYWlyLXZhbC1jYXBpdGFuLWFtZXJpY2EtZWR0LTEwMG1sLWJsdWUtMTY3NjgwODQ3Mi5qcGcmZml0PWNvdmVyJndpZHRoPTY0MA.webp", FOR_KIDS_TITLE, "Perfume", "Air-Val Captain America Edt", "50"],
    ["https://www.mumzworld.com/media/cGF0aD0lMkZtZWRpYSUyRmNhdGFsb2clMkZwcm9kdWN0JTJGdSUyRnAlMkZ1cC1haTAyMDAxMC1sZS1wZXRpdC1wcmluY2UtZnJhZ3JhbmNlLWZvci1raWRzLWVkdC1zcHJheS01MG1sLTE2NzMwNzg3MzEuanBnJmZpdD1jb3ZlciZ3aWR0aD02NDA.webp", FOR_KIDS_TITLE, "Perfume", "LE PETIT PRINCE", "99"],
    ["Photos/wp1.jpg", FOR_WOMEN_TITLE, "Perfume", "DIOR J'ADORE PERFUME", "450"],
    ["Photos/wp2.jpg", FOR_WOMEN_TITLE, "Deodrant", "DIOR MISS DIOR", "300"],
    ["https://media.theperfumeshop.com/medias/zoom-front-1080993-420x420?context=bWFzdGVyfHByZC1pbWFnZXN8NjA0MTh8aW1hZ2UvanBlZ3xoOTcvaGE4Lzg4MzY4OTczNzQyMzgvem9vbS1mcm9udC0xMDgwOTkzXzQyMHg0MjB8MGEzMDdjNTE4NDRiMzRiNmM1ZmVjYTJiMGI4MjY2YzFiMGU5ODVjNDZkZDQ2Y2UwM2Q1MzIyYmVlZGE1ZjY1Nw", FOR_MEN_TITLE, "Deodrant", "PACO RABANNE 1 MILLIONR", "27"],
    ["https://media.theperfumeshop.com/medias/zoom-front-1166206-420x420?context=bWFzdGVyfHByZC1pbWFnZXN8MTIxNTF8aW1hZ2UvanBlZ3xoYWIvaGIwLzg4MTk3OTgzMTA5NDIvem9vbS1mcm9udC0xMTY2MjA2XzQyMHg0MjB8NmM3Zjg4N2IwZWE3NzkxMjQ1NWIyNTc5YzVkOGJhZjI4OGUzYjJjYjNlNGJmZjBiOGFlZjEzOTQ5ODViNjQzOQ", FOR_MEN_TITLE, "Deodrant", "DIOR SAUVAGE", "37"],
    ["https://catwastore.com/cdn/shop/products/gucci-oud-women-men-unisex-75ml-outlet-box-eau-perfum-fruity-perfume-catwa-deals-651.png?v=1626214778&width=600", FOR_UNISEX_TITLE, "Perfume", "GUCCI OUD GUCCI", "150"],
    ["https://catwastore.com/cdn/shop/products/png_20220106_011402_0000.png?v=1641424820&width=700", FOR_UNISEX_TITLE, "Perfume", "EAU DE CARTIER", "200"],
    ["Photos/kd1.png", FOR_KIDS_TITLE, "Perfume", "DISNEY PRINCESS ARIEL", "17"],
    ["Photos/kd2.png", FOR_KIDS_TITLE, "Perfume", "SPIDERMANM", "20"],
    ["Photos/wp4.png", FOR_WOMEN_TITLE, "Body Mist", "BATH AND BODY WORKS INTO THE NIGHT", "50"],
    ["Photos/wp5.png", FOR_WOMEN_TITLE, "Body Mist", "BATH & BODY WORKS WARM VANILLA", "46"],
    ["https://www.faces.com/dw/image/v2/BJSM_PRD/on/demandware.static/-/Sites-faces-master-catalog/default/dwc0770c0b/product/8011003809202_/8011003809202_.jpg?sw=800&sh=800", FOR_MEN_TITLE, "Perfume", "VERSACE EROS", "200"],
    ["https://www.faces.com/dw/image/v2/BJSM_PRD/on/demandware.static/-/Sites-faces-master-catalog/default/dw48d6e279/product/3349668582297_/3349668582297_.jpg?sw=800&sh=800", FOR_MEN_TITLE, "Perfume", "PACO RABANNE PHANTOM", "350"],
    ["Photos/uni1.jpg", FOR_UNISEX_TITLE, "Perfume", "BOY SMELLS VIOLET ENDS", "98"],
    ["https://media.cnn.com/api/v1/images/stellar/prod/220510142138-unisex-genderless-fragrance-costabrazil.jpg?q=w_1110,c_fill/f_webp", FOR_UNISEX_TITLE, "Perfume", "COSTA BRAZIL AROMA", "198"],
    ["Photos/kd3.png", FOR_KIDS_TITLE, "Perfume", "CINDERELLA PINK", "29"],
    ["Photos/kd4.png", FOR_KIDS_TITLE, "Perfume", "IRON MAN", "18"],
    ["https://media.theperfumeshop.com/medias/zoom-front-1002930-420x420?context=bWFzdGVyfHByZC1pbWFnZXN8NTk3N3xpbWFnZS9qcGVnfGhjNS9oZWEvODgxOTY2NjUxODA0Ni96b29tLWZyb250LTEwMDI5MzBfNDIweDQyMHw0ZTk3M2JlMjE5MjQyZDVlMDM2OWYwMDk3NTc4ODQxMDM5Nzk3NGExNmI1ZDdjNjk2ZTM3Y2UzNmY2ZWQ0NDdh", FOR_WOMEN_TITLE, "Deodrant", "COCO CHANEL MADEMOISELLE", "44"],
    ["https://media.theperfumeshop.com/medias/sys_master/prd-images/h38/hb1/8910346485790/prd-front-1072131_420x420/prd-front-1072131-420x420.jpg", FOR_WOMEN_TITLE, "Deodrant", "DIOR J'ADORE", "43"],
    ["Photos/mp5.png", FOR_MEN_TITLE, "Cologne", "COACH FOR MEN", "109"],
    ["Photos/mp4.png", FOR_MEN_TITLE, "Cologne", "1 MILLION PACO RABANNE", "130"],
    ["Photos/uni2.png", FOR_UNISEX_TITLE, "Body Mist", "TNW - PULL ME CLOSER", "55"],
    ["https://m.media-amazon.com/images/I/71lc0YcIntL._SX522_PIbundle-2,TopRight,0,0_SX522SY572SH20_.jpg", FOR_UNISEX_TITLE, "Body Mist", "OSSUM PLEASURE + DELIGHT", "70"],
    ["Photos/kd6.png", FOR_KIDS_TITLE, "Perfume", "BLACK PANTHER", "20"],
    ["Photos/kd5.png", FOR_KIDS_TITLE, "Perfume", "BARBIE", "14"],
    ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1692636740-chanel-chance-hair-mist-64e3962696cc0.png?crop=1xw:1xh;center,top&resize=980:*", FOR_WOMEN_TITLE, "Hair Perfume", "CHANEL CHANCE", "70"],
    ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1692633782-gisou-hair-perfume-64e38a8b83bf8.png?crop=1xw:1xh;center,top&resize=980:*", FOR_WOMEN_TITLE, "Hair Perfume", "GISOU HONEY INFUSED", "83"],
    ["Photos/mp3.png", FOR_MEN_TITLE, "Cologne", "CK ONE COLOGNE", "56"],
    ["Photos/mp2.png", FOR_MEN_TITLE, "Cologne", "VERSACE EROS COLOGNE", "140"],
    ["https://fourthsense.co/wp-content/uploads/2023/10/Tiziana-Terenzi-Kirke.png", FOR_UNISEX_TITLE, "Perfume", "TIZIANA TERENZI KIRKE", "189"],
    ["https://fourthsense.co/wp-content/uploads/2023/10/Initio-Side-Effect.png", FOR_UNISEX_TITLE, "Perfume", "INITIO SIDE EFFECT", "280"],
    ["https://i5.walmartimages.com/seo/Body-Fantasies-Signature-Fragrance-Body-Spray-Cupcake-Swirl-3-2-fl-oz_a5432373-81bd-4fe2-94a9-7964b7e31ca9.621759656ee4194b51a6850ec79f5163.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", FOR_KIDS_TITLE, "Perfume", "CUPCAKE SWIRL", "13"],
    ["https://i5.walmartimages.com/seo/Star-Wars-Darth-Vader-3D-by-Disney-3-4-oz-Eau-De-Toilette-Spray-for-Boys_eb7b1595-3950-45ca-a94e-a9a04a72404b.ebb0c5e366be2f52dbd16958d2e91444.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", FOR_KIDS_TITLE, "Perfume", "STAR WARS DARTH VADER", "13"],
];

// ------------------------------------------------------------------------------------------------
// Functions


// Check whether the re-entered password is same as the password in sign up and Getting user email and password that he loged in with
function Check() 
{
    const Password = document.getElementById('Password').value;
    const RePassword = document.getElementById('RePassword').value;
    const name = document.getElementById('Uname').value;
    const email = document.getElementById('Uemail').value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", Password);
    if (RePassword === Password && name != "" && email != "") 
    {
        alert("The account has been created");
       return true;
    } 
    else if(RePassword != Password && name != "" && email != "")
    {
        alert("Password must match");
        return false;
    }
}


//Getting & putting user email and password that he loged in with
function getting()
{
    const Password = document.getElementById('Password').value;
    const email = document.getElementById('Uemail').value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", Password); 
}

function putting()
{
    const memail = localStorage.getItem("email");
    const mpassword = localStorage.getItem("password");

    document.getElementById('memail').value = memail;
    document.getElementById('mpassword').value = mpassword;
}


// Putting header and footer and aside in the pages
document.addEventListener('DOMContentLoaded', function () {
    // Load header
    const headerContainer = document.getElementById('headerContainer');
    const headerRequest = new XMLHttpRequest();
    headerRequest.onload = function () {
      if (headerRequest.status >= 200 && headerRequest.status < 400) {
        headerContainer.innerHTML = headerRequest.responseText;
      }
    };
    headerRequest.open('GET', 'Basic ELements/header.html', true);
    headerRequest.send();
  
    // Load footer
    const footerContainer = document.getElementById('footerContainer');
    const footerRequest = new XMLHttpRequest();
    footerRequest.onload = function () {
      if (footerRequest.status >= 200 && footerRequest.status < 400) {
        footerContainer.innerHTML = footerRequest.responseText;
      }
    };
    footerRequest.open('GET', 'Basic ELements/footer.html', true);
    footerRequest.send();


    //load aside
    const asideContainer = document.getElementById('asideContainer');
    const asideRequest = new XMLHttpRequest();
    asideRequest.onload = function () {
        if (asideRequest.status >= 200 && asideRequest.status < 400) {
            asideContainer.innerHTML = asideRequest.responseText;
            let pageName = document.URL.split("/").pop();
            if(pageName !== "Shop.html")
                disableCheckboxes(pageName);
        }
    };
    asideRequest.open('GET', 'Basic ELements/aside.html', true);
    asideRequest.send();
});



// Body functions
function darkmode()
{
    const body = document.body;

    body.classList.remove("lighthome");
    body.classList.add("darkhome");
}

function lightmode()
{
    const body = document.body;

    body.classList.remove("darkhome");
    body.classList.add("lighthome");
    
}   

// Cart Functions
function addItemToCart(imagePath, name, gender, Quantity, price, id)
{
    const div = document.createElement('div');
    div.className = "Cart_Container";

    div.innerHTML =`
        <img src=`+imagePath+`>
        <div class="CaCon">
            <h3>`+name+`</h3>
            <br>
            <h4>`+gender+`</h4>
            <br><br>
            <label for="Quantity">Quantity:</label>
            <button class="QuantityBTN" onclick="Decrease(`+id+`); price();">-</button>
            <input type="text" class="Quantity" id="Quantity`+id+`" value=`+Quantity+` readonly>
            <button class="QuantityBTN" onclick="Increase(`+id+`); price();">+</button>
        </div>
        <div class="CaCon1">
            <h2>Price for one</h2>
            <br>
            <input type="text" id="Get_Price`+id+`" value=`+price+` style="background-color: inherit; font: larger bold inherit;  width: auto; color: inherit;" readonly>
        </div>
        <div class="CaCon2">
            <h2>Total Price</h2>
            <br>
            <input type="text" id="Total_Of_Quantity`+id+`" value=`+(price*Quantity)+` style="background-color: inherit; font: larger bold inherit; width: 30%; color:inherit;" readonly>
        </div>
    `
    return div;
}

function createCartPages()
{
    addItemsToCart(listOfItemsInCart);
}

function addItemsToCart(listOfItemsInCart) {
    listOfItemsInCart.forEach(function (item, index) {
        document.getElementById("listOfCartComponents").appendChild(addItemToCart(item[0], item[1], item[2], item[3], item[4],index));
    });
}

// To change Cart icon color Functions
function addToCart(id) {
    let itemClicked = document.getElementById("cart"+id);
    if (itemClicked.style.color == "green") {
        itemClicked.style.color = "inherit";
        // listOfItemsInCart.remove(id);
    }
    else 
    {
        itemClicked.style.color = "Green";
    }   
} 

// Quantity Function
function Increase(id)
{
    let quan = document.getElementById("Quantity"+id).value;
    let price = document.getElementById("Get_Price"+id).value;
    quan++;
    document.getElementById("Quantity"+id).value = quan;
    document.getElementById("Total_Of_Quantity"+id).value = quan * price;
}

function Decrease(id)
{
    var quan = document.getElementById("Quantity"+id).value;
    let price = document.getElementById("Get_Price"+id).value;
    if(quan <= 1)
        return;
    else
    {
        quan--;
        document.getElementById("Quantity"+id).value = quan;
        document.getElementById("Total_Of_Quantity"+id).value = quan * price;
    }
}

//Total price calcualtionn
function price()
{
    var Total = 0;
    for(var id = 0; id < listOfItemsInCart.length; id++)
    {
        var elemnt1 = parseInt(document.getElementById("Total_Of_Quantity"+id).value);
        Total += elemnt1;
    };
    document.getElementById("Total").value = Total;
}


//Shop functions
function addItem(imagePath, gender, category, name, price, id) {
    const div = document.createElement('div');
    div.className = "pro";

    div.innerHTML = `
    <div class="prohref" href="Product_info.html" onclick="show(`+id+`);"><img src=`+imagePath+`>
        <div class="per">
            <span>`+gender+`</span> 
            <br/> 
            <span>`+category+`</span> 
            <h5 id="name`+id+`">`+name+`</h5> 
            <div class="star"> 
                <i class="fas fa-star"></i> 
                <i class="fas fa-star"></i> 
                <i class="fas fa-star"></i> 
                <i class="fas fa-star"></i> 
                <i class="fas fa-star"></i> 
            </div> 
            <h4>`+ price + `$</h4> 
        </div> 
        <i class="fas fa-shopping-cart" id="cart`+id+`" onclick="addToCart(`+id+`)"></i></div>
    `
    return div;
}

function addItems(listOfItems) {
    listOfItems.forEach(function (item, index) {
        document.getElementById("listOfComponents").appendChild(addItem(item[0], item[1], item[2], item[3], item[4], item[5]));
    });
}

function createPage(filterationString) {
    let listOfFilteredItems = [];
    listOfItems.forEach(function(item, index) {
        item.push(index);
        if (item[1] == filterationString || filterationString === "") {
            listOfFilteredItems.push(item);
        }
    });

    addItems(listOfFilteredItems);
}

function disableCheckboxes(selectedPage) {
    
    let listOfPages = { "Women_Shop.html": "Women", 
                        "Men_Shop.html": "Men", 
                        "Kids_Shop.html": "Kids",
                        "Unisex_Shop.html": "Unisex"};
    
    for (const [key, value] of Object.entries(listOfPages)) {
        if (key === selectedPage)
            continue;

        else
        {
            for (const option of document.getElementsByClassName(value)) {
                option.disabled = true;
            }
        }
    }
}

function createShopPage() {
    createPage("");
}

function createMenPage() {
    createPage(FOR_MEN_TITLE);
}

function createWomenPage() {
    createPage(FOR_WOMEN_TITLE);
}

function createKidsPage() {
    createPage(FOR_KIDS_TITLE);
}

function createUnisexPage() {
    createPage(FOR_UNISEX_TITLE);
}

//Change Profile Picture

function Change_Profile()
{
    document.getElementById('my_file').click();
    Change();
}

function Change()
{
    document.getElementById('my_file').onchange = function (evt) {
        var tgt = evt.target;
            files = tgt.files;
        
        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById("img").src = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }}
}

// Product info page Functions
function show(id) 
{
    var imgname = document.getElementById("name"+id).innerText;
    listOfItems.forEach(function (item, index) {
        item.push(index);
        if (item[3] === imgname) {
            imgsrc = item[0];
            imggen = item[1];
            imgcat = item[2];
            imgpri = item[4];
            return;
        }
    });

    listOfItemsDesctiption.forEach(function (item, index) {
        item.push(index);
        if (item[0] === imgname) {
            imgdes = item[1];
            return;
        }
    });
    
    localStorage.setItem("imgsrc", imgsrc);
    localStorage.setItem("imgpri", imgpri);
    localStorage.setItem("imgcat", imgcat);
    localStorage.setItem("imgdes", imgdes);
    localStorage.setItem("imggen", imggen);
    localStorage.setItem("imgname", imgname);
    localStorage.setItem("imgdes", imgdes);   
    window.location.href = 'Product_info.html'; 
}

function createProductPage(imgname, imgsrc, imggen, imgcat, imgpri, imgdes) {
    const div = document.createElement("div");
    div.className = "ProContainer";

    div.innerHTML = `<div class="left-column">
                        <img src="` + imgsrc + `">
                    </div>

                    <div class="right-column">

                        <div class="product-description">
                            <h1>` + imgname + `</h1>
                            <br>
                            <span>` + imgcat + `</span>
                            <br>
                            <span style="margin-left: 1%;">` + imggen + `</span>
                        </div>

                        <div class="product-configuration">
                            <label for="Quantity">Quantity:</label>
                            <button class="QuantityBTN" onclick="Decreases()">-</button>
                            <input type="text" class="Quantity" id="Quantity" value="1" readonly>
                            <button class="QuantityBTN" onclick="Increases()">+</button>
                            <br><br>
                            <p>` + imgdes + `</p>
                        </div>
                        <br>
                        <div class="product-price">
                        <span>` + imgpri + `$</span>
                        <a href="#" class="cart-btn">Add to cart</a>
                        </div>
                    </div>
                    `;
    return div;
}

function createProPage() 
{
    var imgsrc = localStorage.getItem("imgsrc");
    var imgpri = localStorage.getItem("imgpri");
    var imgcat = localStorage.getItem("imgcat");
    var imgdes = localStorage.getItem("imgdes");
    var imggen = localStorage.getItem("imggen");
    var imgname = localStorage.getItem("imgname");

    document.getElementById("ProductInfoContainer").appendChild(createProductPage(imgname, imgsrc, imggen, imgcat, imgpri, imgdes));
}
