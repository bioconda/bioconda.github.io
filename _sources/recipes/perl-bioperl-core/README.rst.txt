:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bioperl-core'
.. highlight: bash

perl-bioperl-core
=================

.. conda:recipe:: perl-bioperl-core
   :replaces_section_title:

   \"Core\" packages for the BioPerl toolkit\; you really should install perl\-bioperl.

   :homepage: http://metacpan.org/pod/BioPerl
   :license: perl_5
   :recipe: /`perl-bioperl-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-core/meta.yaml>`_

   


.. conda:package:: perl-bioperl-core

   |downloads_perl-bioperl-core| |docker_perl-bioperl-core|

   :versions: 1.007002-0, 1.7.2-3, 1.6.924-2, 1.6.924-1, 1.6.924-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-aceperl: 
   :depends perl-algorithm-munkres: 
   :depends perl-array-compare: 
   :depends perl-bio-phylo: 
   :depends perl-clone: 
   :depends perl-convert-binary-c: 
   :depends perl-data-stag: 
   :depends perl-db-file: 
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-error: 
   :depends perl-gd: 
   :depends perl-graphviz: 
   :depends perl-html-tableextract: 
   :depends perl-io-string: 
   :depends perl-io-stringy: 
   :depends perl-list-moreutils: 
   :depends perl-postscript: 
   :depends perl-set-scalar: 
   :depends perl-soap-lite: 
   :depends perl-sort-naturally: 
   :depends perl-spreadsheet-parseexcel: 
   :depends perl-svg: 
   :depends perl-svg-graph: 
   :depends perl-xml-dom: 
   :depends perl-xml-dom-xpath: 
   :depends perl-xml-sax-writer: 
   :depends perl-xml-simple: 
   :depends perl-xml-twig: 
   :depends perl-xml-writer: 
   :depends perl-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bioperl-core

   and update with::

      conda update perl-bioperl-core

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bioperl-core:<tag>

   (see `perl-bioperl-core/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bioperl-core| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl-core.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bioperl-core| image:: https://quay.io/repository/biocontainers/perl-bioperl-core/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl-core
.. _`perl-bioperl-core/tags`: https://quay.io/repository/biocontainers/perl-bioperl-core?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl-core/README.html