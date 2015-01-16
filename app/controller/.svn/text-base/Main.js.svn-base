Ext.define('Touch2Demo.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
	routes: {
	    '': 'showMenuIniciar',
	    'index.html': 'showColetasList'
	},
	refs: {
	    coletasForm: {
		xtype: 'coletasform',
		selector: 'coletasform',
		autoCreate: true
	    },
	    coletasList: {
		xtype: 'coletasList',
		selector: 'coletasList',
		autoCreate: true
	    },
	    menuIniciar: {
		xtype: 'menuIniciar',
		selector: 'menuIniciar',
		autoCreate: true
	    },
	    sincronizar: {
		xtype: 'Sincronizar',
		selector: 'Sincronizar',
		autoCreate: true
	    },
	    sincronizarForm: {
		xtype: 'SincronizarForm',
		selector: 'SincronizarForm',
		autoCreate: true
	    },
	    contatosList: {
		xtype: 'contatosList',
		selector: 'contatosList',
		autoCreate: true
	    },
	    contatosForm: {
		xtype: 'contatosForm',
		selector: 'contatosForm',
		autoCreate: true
	    },
	    salvarColetaBtn: 'button[action=salvarColeta]',
	    sincronizarBtn: 'button[action=sincronizar]',
	    salvarContatoBtn: 'button[action=salvarContato]',
	    deletarColetaBtn: 'button[action=deletarColeta]',
	    deletarContatoBtn: 'button[action=deletarContato]',
	    ToolbarFormColeta: '#toolbarFormColeta',
	    ToolbarFormContato: '#toolbarFormContato'



	},
	control: {
	    'button[action=voltarColetasList]': {
		tap: 'showColetasList'
	    },
	    'button[action=menuIniciar]': {
		tap: 'showMenuIniciar'
	    },
	    'button[action=novaColeta]': {
		tap: 'showColetasForm'
	    },
	    'button[action=listaColetas]': {
		tap: 'showColetasList'
	    },
	    'button[action=contatosList]': {
		tap: 'showContatoList'
	    },
	    'button[action=contatosForm]': {
		tap: 'showContatosForm'
	    },
	    coletasList: {
		itemtap: 'showColetasForm'
	    },
	    contatosList: {
		itemtap: 'showContatosForm'
	    },
	    salvarColetaBtn: {
		tap: 'salvarColeta'
	    },
	    sincronizarBtn: {
		tap: 'sincronizarContatos'
	    },
	    salvarContatoBtn: {
		tap: 'salvarContato'
	    },
	    deletarColetaBtn: {
		tap: 'deletarColeta'
	    },
	    deletarContatoBtn: {
		tap: 'deletarContato'
	    }
	}
    },
    showMenuIniciar: function () {
	Ext.Viewport.setActiveItem(this.getMenuIniciar());
    },
    showSincronizarForm: function () {
	Ext.Viewport.setActiveItem(this.getSincronizarForm());

    },
    showColetasList: function () {
	Ext.Viewport.setActiveItem(this.getColetasList());
    },
    showContatoList: function () {
	Ext.Viewport.setActiveItem(this.getContatosList());
    },
    showSincronizar: function () {
	Ext.Viewport.setActiveItem(this.getSincronizar());
    },
    showColetasForm: function (view, index, target, record, evt, opts) {

	if (record && record.data) {
	    this.getColetasForm().setRecord(record);
	    this.getToolbarFormColeta().setTitle(record.get('nome'));
	    this.getDeletarColetaBtn().show();
	} else {
	    this.getColetasForm().reset();
	    this.getColetasForm().setRecord(null);
	    this.getToolbarFormColeta().setTitle('Criando novo contato');
	    this.getDeletarColetaBtn().hide();
	}
	Ext.Viewport.setActiveItem(this.getColetasForm());
    },
    
    showContatosForm: function (view, index, target, record, evt, opts) {
	if (record && record.data) {
	    this.getContatosForm().setRecord(record);
	    this.getToolbarFormContato().setTitle(record.get('nome'));
	    this.getDeletarContatoBtn().show();
	} else {
	    this.getContatosForm().reset();
	    this.getContatosForm().setRecord(null);
	    this.getToolbarFormContato().setTitle('Criando novo contato');
	    this.getDeletarContatoBtn().hide();
	}	
	Ext.Viewport.setActiveItem(this.getContatosForm());
    },
    sincronizarContatos: function () {
	Ext.onReady(function () {
	    var store = Ext.create('Touch2Demo.store.Sincronizar_S');
	    var i = 0;
	    store.on('load', function (s) {
		s.each(function () {
		    arquivo = s.data.get(i);
		    nome = arquivo.data.nome;
		    email = arquivo.data.email;
		    // console.log(nome);
		    //console.log(email);

		    var contato = Ext.create('Touch2Demo.model.Contato', {
			nome: nome,
			email: email
		    });
		    var storeSalva = Ext.create('Touch2Demo.store.Contato');
		    storeSalva.add(contato);
		    storeSalva.sync();
		    i++;
		});
	    });
	});
	Ext.Msg.alert('Sincronização', 'Sincronização concluida com sucesso .', Ext.emptyFn);
    },
    salvarColeta: function () {
	var form = this.getColetasForm(),
		coleta = Ext.create('Touch2Demo.model.Coleta', form.getValues()),
		store = Ext.getStore('Coletas');
	if (form.getRecord() !== null) {
	    var record = store.findRecord('id', form.getRecord().getId());
	    record.set(form.getValues());
	    Ext.Msg.alert('Alterando coleta', 'Coleta alterada com sucesso.', Ext.emptyFn);
	} else {
	    store.add(coleta);
	    Ext.Msg.alert('Criando coleta', 'Coleta criada com sucesso.', Ext.emptyFn);
	}

	this.showColetasList();
    },
    salvarContato: function () {
	var form = this.getContatosForm(),
		coleta = Ext.create('Touch2Demo.model.Contato', form.getValues()),
		store = Ext.getStore('Contatos');
	if (form.getRecord() !== null) {
	    var record = store.findRecord('id', form.getRecord().getId());
	    record.set(form.getValues());
	    Ext.Msg.alert('Alterando Contato', 'Contato alterada com sucesso.', Ext.emptyFn);
	} else {
	    store.add(coleta);
	    Ext.Msg.alert('Criando Contato', 'Contato criada com sucesso.', Ext.emptyFn);
	}

	this.showContatoList();
    },
    deletarColeta: function () {
	Ext.Msg.confirm(
		'Deletar coleta',
		'Tem certeza que deseja deletar esta coleta?',
		function (btn) {
		    if (btn == 'yes') {
			Ext.getStore('Coletas').remove(this.getColetasForm().getRecord());
			this.showColetasList();
		    }
		},
		this
		);
    },
    deletarContato: function () {
	Ext.Msg.confirm(
		'Deletar contato',
		'Tem certeza que deseja deletar este contato?',
		function (btn) {
		    if (btn == 'yes') {
			Ext.getStore('Contatos').remove(this.getContatosForm().getRecord());
			this.showContatoList();
		    }
		},
		this
		);
    }
});


    
    