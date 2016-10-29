$(function() {

	function randomString() {
    	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    	var str = '';
    	var i = 0;
    	for (i = 0; i < 10; i++) {
        	str += chars[Math.floor(Math.random() * chars.length)];
    	}
    	return str;
	}

	function Column(name) {
    	var self = this; 

    	this.id = randomString();
    	this.name = name;
    	this.$element = createColumn();

    	function createColumn() {
    		var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('Delete column');
			var $columnAddCard = $('<button>').addClass('add-card').text('Create new card');	

			$columnDelete.click(function() {
				if (confirm('Are you sure you want to delete this column: ' + '"' + self.name + '"' + ' ?')) {
    				self.removeColumn();
				} else {
    				return false
				}
			});

			$columnAddCard.click(function() {
        		self.addCard(new Card(prompt("Write a Kanban card name")));
			});

			$column.append($columnTitle)
        	.append($columnDelete)
        	.append($columnAddCard)
        	.append($columnCardList);
		
			return $column;		
    	}
	}

    Column.prototype = {
    	addCard: function(card) {
      		this.$element.children('ul').append(card.$element);
    	},
    	removeColumn: function() {
      		this.$element.remove();
    	}
	};

	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard(); //

		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('x');

			$cardDelete.click(function(){
        		if (confirm('Are you sure you want to delete this card: ' + '"' + self.description + '"' + ' ?')) {
    				self.removeCard();
				} else {
    				return false
				}
			});

			$card.append($cardDelete)
			.append($cardDescription);
			
			return $card;
		}

		Card.prototype = {
			removeCard: function() {
				this.$element.remove();
			}
		}
	}

	var board = {
    	name: 'Tablica Kanban',
    	addColumn: function(column) {
      		this.$element.append(column.$element);
      		initSortable();
   		},
    	$element: $('#board .column-container')
	};

	function initSortable() {
    	$('.column-card-list').sortable({
      		connectWith: '.column-card-list',
      		placeholder: 'card-placeholder'
    	}).disableSelection();
  	}

  	$('.create-column')
  	.click(function(){
		var name = prompt('Write column name');
		var column = new Column(name);
    	board.addColumn(column);
 	});

	var todoColumn = new Column('ToDo');
	var doingColumn = new Column('Doing');
	var doneColumn = new Column('Done');

	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	var card1 = new Card('');
	var card2 = new Card('New request');
	var card3 = new Card('Create Kanban table');

	todoColumn.addCard(card2);
	doingColumn.addCard(card3);
});

