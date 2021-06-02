:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rscudo'
.. highlight: bash

bioconductor-rscudo
===================

.. conda:recipe:: bioconductor-rscudo
   :replaces_section_title:
   :noindex:

   Signature\-based Clustering for Diagnostic Purposes

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/rScudo.html
   :license: GPL-3
   :recipe: /`bioconductor-rscudo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rscudo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rscudo/meta.yaml>`_

   SCUDO \(Signature\-based Clustering for Diagnostic Purposes\) is a rank\-based method for the analysis of gene expression profiles for diagnostic and classification purposes. It is based on the identification of sample\-specific gene signatures composed of the most up\- and down\-regulated genes for that sample. Starting from gene expression data\, functions in this package identify sample\-specific gene signatures and use them to build a graph of samples. In this graph samples are joined by edges if they have a similar expression profile\, according to a pre\-computed similarity matrix. The similarity between the expression profiles of two samples is computed using a method similar to GSEA. The graph of samples can then be used to perform community clustering or to perform supervised classification of samples in a testing set.


.. conda:package:: bioconductor-rscudo

   |downloads_bioconductor-rscudo| |docker_bioconductor-rscudo|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rscudo

   and update with::

      conda update bioconductor-rscudo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rscudo:<tag>

   (see `bioconductor-rscudo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rscudo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rscudo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rscudo
   :alt:   (downloads)
.. |docker_bioconductor-rscudo| image:: https://quay.io/repository/biocontainers/bioconductor-rscudo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rscudo
.. _`bioconductor-rscudo/tags`: https://quay.io/repository/biocontainers/bioconductor-rscudo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rscudo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rscudo/README.html