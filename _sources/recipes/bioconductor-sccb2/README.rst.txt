:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sccb2'
.. highlight: bash

bioconductor-sccb2
==================

.. conda:recipe:: bioconductor-sccb2
   :replaces_section_title:
   :noindex:

   CB2 improves power of cell detection in droplet\-based single\-cell RNA sequencing data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/scCB2.html
   :license: GPL-3
   :recipe: /`bioconductor-sccb2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccb2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sccb2/meta.yaml>`_

   scCB2 is an R package implementing CB2 for distinguishing real cells from empty droplets in droplet\-based single cell RNA\-seq experiments \(especially for 10x Chromium\). It is based on clustering similar barcodes and calculating Monte\-Carlo p\-value for each cluster to test against background distribution. This cluster\-level test outperforms single\-barcode\-level tests in dealing with low count barcodes and homogeneous sequencing library\, while keeping FDR well controlled.


.. conda:package:: bioconductor-sccb2

   |downloads_bioconductor-sccb2| |docker_bioconductor-sccb2|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-dropletutils: ``>=1.10.0,<1.11.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-rhdf5: ``>=2.34.0,<2.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-matrix: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sccb2

   and update with::

      conda update bioconductor-sccb2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sccb2:<tag>

   (see `bioconductor-sccb2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sccb2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sccb2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sccb2
   :alt:   (downloads)
.. |docker_bioconductor-sccb2| image:: https://quay.io/repository/biocontainers/bioconductor-sccb2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sccb2
.. _`bioconductor-sccb2/tags`: https://quay.io/repository/biocontainers/bioconductor-sccb2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sccb2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sccb2/README.html