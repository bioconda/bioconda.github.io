:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stdeconvolve'
.. highlight: bash

bioconductor-stdeconvolve
=========================

.. conda:recipe:: bioconductor-stdeconvolve
   :replaces_section_title:
   :noindex:

   Reference\-free Cell\-Type Deconvolution of Multi\-Cellular Spatially Resolved Transcriptomics Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/STdeconvolve.html
   :license: GPL-3
   :recipe: /`bioconductor-stdeconvolve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stdeconvolve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stdeconvolve/meta.yaml>`_

   STdeconvolve as an unsupervised\, reference\-free approach to infer latent cell\-type proportions and transcriptional profiles within multi\-cellular spatially\-resolved pixels from spatial transcriptomics \(ST\) datasets. STdeconvolve builds on latent Dirichlet allocation \(LDA\)\, a generative statistical model commonly used in natural language processing for discovering latent topics in collections of documents. In the context of natural language processing\, given a count matrix of words in documents\, LDA infers the distribution of words for each topic and the distribution of topics in each document. In the context of ST data\, given a count matrix of gene expression in multi\-cellular ST pixels\, STdeconvolve applies LDA to infer the putative transcriptional profile for each cell\-type and the proportional representation of each cell\-type in each multi\-cellular ST pixel.


.. conda:package:: bioconductor-stdeconvolve

   |downloads_bioconductor-stdeconvolve| |docker_bioconductor-stdeconvolve|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-clue: 
   :depends r-ggplot2: 
   :depends r-liger: 
   :depends r-matrix: 
   :depends r-mgcv: 
   :depends r-reshape2: 
   :depends r-scatterpie: 
   :depends r-slam: 
   :depends r-topicmodels: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stdeconvolve

   and update with::

      conda update bioconductor-stdeconvolve

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stdeconvolve:<tag>

   (see `bioconductor-stdeconvolve/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stdeconvolve| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stdeconvolve.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stdeconvolve
   :alt:   (downloads)
.. |docker_bioconductor-stdeconvolve| image:: https://quay.io/repository/biocontainers/bioconductor-stdeconvolve/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stdeconvolve
.. _`bioconductor-stdeconvolve/tags`: https://quay.io/repository/biocontainers/bioconductor-stdeconvolve?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stdeconvolve";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stdeconvolve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stdeconvolve/README.html