:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellsignalr'
.. highlight: bash

bioconductor-singlecellsignalr
==============================

.. conda:recipe:: bioconductor-singlecellsignalr
   :replaces_section_title:
   :noindex:

   Cell Signalling Using Single Cell RNAseq Data Analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/SingleCellSignalR.html
   :license: GPL-3
   :recipe: /`bioconductor-singlecellsignalr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellsignalr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellsignalr/meta.yaml>`_

   Allows single cell RNA seq data analysis\, clustering\, creates internal network and infers cell\-cell interactions.


.. conda:package:: bioconductor-singlecellsignalr

   |downloads_bioconductor-singlecellsignalr| |docker_bioconductor-singlecellsignalr|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-multtest: ``>=2.46.0,<2.47.0``
   :depends bioconductor-scran: ``>=1.18.0,<1.19.0``
   :depends bioconductor-simlr: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-biocmanager: 
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-foreach: 
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-pheatmap: 
   :depends r-rtsne: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singlecellsignalr

   and update with::

      conda update bioconductor-singlecellsignalr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlecellsignalr:<tag>

   (see `bioconductor-singlecellsignalr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlecellsignalr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellsignalr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecellsignalr
   :alt:   (downloads)
.. |docker_bioconductor-singlecellsignalr| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr
.. _`bioconductor-singlecellsignalr/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellsignalr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellsignalr/README.html