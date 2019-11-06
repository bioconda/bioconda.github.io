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

   :versions: 1.26.0-0, 1.24.0-1, 1.22.0-0, 1.14.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biomart: >=2.42.0,<2.43.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends r-ahocorasicktrie: 
   :depends r-base: >=3.6,<3.7.0a0
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
   :target: https://anaconda.org/bioconda/bioconductor-customprodb
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