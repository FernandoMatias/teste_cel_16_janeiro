Ext.Loader.setConfig({
	enabled : true
});

Ext.application({

	name: 'Touch2Demo',

	controllers: [
		'Main'
	],

	views: [
		'ColetasForm',
		'ColetasList',
		'MenuIniciar',
		'Sincronizar',
		'ContatosForm',
		'ContatosList',
		'SincronizarForm',
		'Configuracoes'
	],

	models: [
		'Contato',
		'Coleta',
		'Sincronizar_M',
		'IpSincronizar_m'
	],
	
	stores: [
		'Contato',
		'Coletas',
		'Sincronizar_S',
		'IpSincronizar_s'
	],
	
	viewport:{
		layout:{
			type: 'card',
			animation: {
				type: 'slide',
				duration: 10	
			}
		}
	},

	launch: function(){	
		    
	}
});
