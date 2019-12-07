:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-genomes'
.. highlight: bash

perl-ensembl-genomes
====================

.. conda:recipe:: perl-ensembl-genomes
   :replaces_section_title:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-genomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-genomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-genomes/meta.yaml>`_

   


.. conda:package:: perl-ensembl-genomes

   |downloads_perl-ensembl-genomes| |docker_perl-ensembl-genomes|

   :versions: 44-0
   
   :depends perl: 
   :depends perl-ensembl-core: 
   :depends perl-list-moreutils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ensembl-genomes

   and update with::

      conda update perl-ensembl-genomes

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ensembl-genomes:<tag>

   (see `perl-ensembl-genomes/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ensembl-genomes| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-genomes.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-genomes
   :alt:   (downloads)
.. |docker_perl-ensembl-genomes| image:: https://quay.io/repository/biocontainers/perl-ensembl-genomes/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-genomes
.. _`perl-ensembl-genomes/tags`: https://quay.io/repository/biocontainers/perl-ensembl-genomes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-genomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-genomes/README.html