:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-compara'
.. highlight: bash

perl-ensembl-compara
====================

.. conda:recipe:: perl-ensembl-compara
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-compara <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-compara>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-compara/meta.yaml>`_

   


.. conda:package:: perl-ensembl-compara

   |downloads_perl-ensembl-compara| |docker_perl-ensembl-compara|

   :versions:
      
      

      ``98-0``

      

   
   :depends perl: 
   :depends perl-bioperl: 
   :depends perl-capture-tiny: 
   :depends perl-data-predicate: 
   :depends perl-ensembl-core: 
   :depends perl-html-template: 
   :depends perl-json: 
   :depends perl-list-compare: 
   :depends perl-lwp-simple: 
   :depends perl-namespace-autoclean: 
   :depends perl-number-format: 
   :depends perl-parse-recdescent: 
   :depends perl-set-intervaltree: 
   :depends perl-statistics-descriptive: 
   :depends perl-text-csv: 
   :depends perl-xml-writer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ensembl-compara

   and update with::

      conda update perl-ensembl-compara

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ensembl-compara:<tag>

   (see `perl-ensembl-compara/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ensembl-compara| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-compara.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-compara
   :alt:   (downloads)
.. |docker_perl-ensembl-compara| image:: https://quay.io/repository/biocontainers/perl-ensembl-compara/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-compara
.. _`perl-ensembl-compara/tags`: https://quay.io/repository/biocontainers/perl-ensembl-compara?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-compara/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-compara/README.html