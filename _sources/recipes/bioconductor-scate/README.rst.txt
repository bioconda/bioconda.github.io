:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scate'
.. highlight: bash

bioconductor-scate
==================

.. conda:recipe:: bioconductor-scate
   :replaces_section_title:
   :noindex:

   SCATE\: Single\-cell ATAC\-seq Signal Extraction and Enhancement

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/SCATE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scate/meta.yaml>`_

   SCATE is a software tool for extracting and enhancing the sparse and discrete Single\-cell ATAC\-seq Signal. Single\-cell sequencing assay for transposase\-accessible chromatin \(scATAC\-seq\) is the state\-of\-the\-art technology for analyzing genome\-wide regulatory landscapes in single cells. Single\-cell ATAC\-seq data are sparse and noisy\, and analyzing such data is challenging. Existing computational methods cannot accurately reconstruct activities of individual cis\-regulatory elements \(CREs\) in individual cells or rare cell subpopulations. SCATE was developed to adaptively integrate information from co\-activated CREs\, similar cells\, and publicly available regulome data and substantially increase the accuracy for estimating activities of individual CREs. We demonstrate that SCATE can be used to better reconstruct the regulatory landscape of a heterogeneous sample.


.. conda:package:: bioconductor-scate

   |downloads_bioconductor-scate| |docker_bioconductor-scate|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-preprocesscore: ``>=1.52.0,<1.53.0``
   :depends bioconductor-scatedata: ``>=1.0.0,<1.1.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-mclust: 
   :depends r-rtsne: 
   :depends r-splines2: 
   :depends r-xgboost: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scate

   and update with::

      conda update bioconductor-scate

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scate:<tag>

   (see `bioconductor-scate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scate
   :alt:   (downloads)
.. |docker_bioconductor-scate| image:: https://quay.io/repository/biocontainers/bioconductor-scate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scate
.. _`bioconductor-scate/tags`: https://quay.io/repository/biocontainers/bioconductor-scate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scate/README.html