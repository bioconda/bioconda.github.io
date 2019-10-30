:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-obogaf-parser'
.. highlight: bash

perl-obogaf-parser
==================

.. conda:recipe:: perl-obogaf-parser
   :replaces_section_title:

   a perl5 module to handle obo and gaf file

   :homepage: http://metacpan.org/pod/obogaf::parser
   :documentation: https://obogaf-parser.readthedocs.io
   
   :developer docs: https://github.com/marconotaro/obogaf-parser
   :license: perl_5
   :recipe: /`perl-obogaf-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-obogaf-parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-obogaf-parser/meta.yaml>`_

   


.. conda:package:: perl-obogaf-parser

   |downloads_perl-obogaf-parser| |docker_perl-obogaf-parser|

   :versions: 1.016-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-extutils-makemaker: 
   :depends perl-graph: 
   :depends perl-module-metadata: 
   :depends perl-perlio-gzip: 
   :depends perl-test-exception: 
   :depends perl-test-files: 
   :depends perl-test-more: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-obogaf-parser

   and update with::

      conda update perl-obogaf-parser

   or use the docker container::

      docker pull quay.io/biocontainers/perl-obogaf-parser:<tag>

   (see `perl-obogaf-parser/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-obogaf-parser| image:: https://img.shields.io/conda/dn/bioconda/perl-obogaf-parser.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-obogaf-parser
   :alt:   (downloads)
.. |docker_perl-obogaf-parser| image:: https://quay.io/repository/biocontainers/perl-obogaf-parser/status
   :target: https://quay.io/repository/biocontainers/perl-obogaf-parser
.. _`perl-obogaf-parser/tags`: https://quay.io/repository/biocontainers/perl-obogaf-parser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-obogaf-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-obogaf-parser/README.html