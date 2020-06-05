:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsseq'
.. highlight: bash

bioconductor-bsseq
==================

.. conda:recipe:: bioconductor-bsseq
   :replaces_section_title:
   :noindex:

   Analyze\, manage and store bisulfite sequencing data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/bsseq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsseq/meta.yaml>`_
   :links: biotools: :biotools:`bsseq`

   A collection of tools for analyzing and visualizing bisulfite sequencing data.


.. conda:package:: bioconductor-bsseq

   |downloads_bioconductor-bsseq| |docker_bioconductor-bsseq|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-0``

      

   
   :depends bioconductor-beachmat: ``>=2.4.0,<2.5.0``
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-biocparallel: ``>=1.22.0,<1.23.0``
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-bsgenome: ``>=1.56.0,<1.57.0``
   :depends bioconductor-delayedarray: ``>=0.14.0,<0.15.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.10.0,<1.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-hdf5array: ``>=1.16.0,<1.17.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends bioconductor-rhdf5: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-gtools: 
   :depends r-locfit: 
   :depends r-permute: 
   :depends r-r.utils: ``>=2.0.0``
   :depends r-rcpp: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsseq

   and update with::

      conda update bioconductor-bsseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsseq:<tag>

   (see `bioconductor-bsseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsseq
   :alt:   (downloads)
.. |docker_bioconductor-bsseq| image:: https://quay.io/repository/biocontainers/bioconductor-bsseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsseq
.. _`bioconductor-bsseq/tags`: https://quay.io/repository/biocontainers/bioconductor-bsseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsseq/README.html