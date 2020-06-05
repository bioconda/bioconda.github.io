:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-variation'
.. highlight: bash

perl-ensembl-variation
======================

.. conda:recipe:: perl-ensembl-variation
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-variation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-variation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-variation/meta.yaml>`_

   


.. conda:package:: perl-ensembl-variation

   |downloads_perl-ensembl-variation| |docker_perl-ensembl-variation|

   :versions:
      
      

      ``98-0``

      

   
   :depends perl: 
   :depends perl-bio-bigfile: 
   :depends perl-bio-db-hts: 
   :depends perl-ensembl-core: 
   :depends perl-json: 
   :depends perl-sereal: 
   :depends perl-set-intervaltree: 
   :depends perl-string-approx: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ensembl-variation

   and update with::

      conda update perl-ensembl-variation

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ensembl-variation:<tag>

   (see `perl-ensembl-variation/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ensembl-variation| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-variation.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-variation
   :alt:   (downloads)
.. |docker_perl-ensembl-variation| image:: https://quay.io/repository/biocontainers/perl-ensembl-variation/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-variation
.. _`perl-ensembl-variation/tags`: https://quay.io/repository/biocontainers/perl-ensembl-variation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-variation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-variation/README.html