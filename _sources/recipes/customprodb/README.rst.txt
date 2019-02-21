:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-customprodb'
.. highlight: bash

bioconductor-customprodb
========================

.. conda:recipe:: customprodb
   :replaces_section_title:

   Generate customized protein sequence database from RNA\-Seq data for proteomics search

   :homepage: http://bioconductor.org/packages/release/bioc/html/customProDB.html
   :license: Artistic-2.0
   :recipe: /`customprodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/customprodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/customprodb/meta.yaml>`_

   


.. conda:package:: bioconductor-customprodb

   |downloads_bioconductor-customprodb| |docker_bioconductor-customprodb|

   :versions: 1.22.0-0, 1.14.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   
   :depends r-ahocorasicktrie: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: 
   
   :depends r-plyr: 
   
   :depends r-rcurl: 
   
   :depends r-rsqlite: 
   
   :depends r-stringr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-customprodb

   and update with::

      conda update bioconductor-customprodb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-customprodb:<tag>

   (see `bioconductor-customprodb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-customprodb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-customprodb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-customprodb| image:: https://quay.io/repository/biocontainers/bioconductor-customprodb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-customprodb
.. _`bioconductor-customprodb/tags`: https://quay.io/repository/biocontainers/bioconductor-customprodb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-customprodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-customprodb/README.html