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

   :versions: 1.007002, 1.7.2, 1.6.924

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-aceperl`  :conda:package:`perl-algorithm-munkres`  :conda:package:`perl-array-compare`  :conda:package:`perl-bio-phylo`  :conda:package:`perl-clone`  :conda:package:`perl-convert-binary-c`  :conda:package:`perl-data-stag`  :conda:package:`perl-db-file`  :conda:package:`perl-dbd-sqlite`  :conda:package:`perl-dbi`  :conda:package:`perl-error`  :conda:package:`perl-gd`  :conda:package:`perl-graphviz`  :conda:package:`perl-html-tableextract`  :conda:package:`perl-io-string`  :conda:package:`perl-io-stringy`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-postscript`  :conda:package:`perl-set-scalar`  :conda:package:`perl-soap-lite`  :conda:package:`perl-sort-naturally`  :conda:package:`perl-spreadsheet-parseexcel`  :conda:package:`perl-svg`  :conda:package:`perl-svg-graph`  :conda:package:`perl-xml-dom`  :conda:package:`perl-xml-dom-xpath`  :conda:package:`perl-xml-sax-writer`  :conda:package:`perl-xml-simple`  :conda:package:`perl-xml-twig`  :conda:package:`perl-xml-writer`  :conda:package:`perl-yaml`  

   :required~by: |required_by_perl-bioperl-core|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bioperl-core

   and update with::

      conda update perl-bioperl-core

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bioperl-core


.. |required_by_perl-bioperl-core| conda:required_by:: perl-bioperl-core
.. |downloads_perl-bioperl-core| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl-core.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bioperl-core| image:: https://quay.io/repository/biocontainers/perl-bioperl-core/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl-core







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl-core/README.html

