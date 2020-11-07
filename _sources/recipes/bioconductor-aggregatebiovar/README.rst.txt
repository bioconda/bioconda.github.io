:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aggregatebiovar'
.. highlight: bash

bioconductor-aggregatebiovar
============================

.. conda:recipe:: bioconductor-aggregatebiovar
   :replaces_section_title:
   :noindex:

   Differential Gene Expression Analysis for Multi\-subject scRNA\-seq

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/aggregateBioVar.html
   :license: GPL-3
   :recipe: /`bioconductor-aggregatebiovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aggregatebiovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aggregatebiovar/meta.yaml>`_

   For single cell RNA\-seq data collected from more than one subject \(e.g. biological sample or technical replicates\)\, this package contains tools to summarize single cell gene expression profiles at the level of subject. A SingleCellExperiment object is taken as input and converted to a list of SummarizedExperiment objects\, where each list element corresponds to an assigned cell type. The SummarizedExperiment objects contain aggregate gene\-by\-subject count matrices and inter\-subject column metadata for individual subjects that can be processed using downstream bulk RNA\-seq tools.


.. conda:package:: bioconductor-aggregatebiovar

   |downloads_bioconductor-aggregatebiovar| |docker_bioconductor-aggregatebiovar|

   :versions:
      
      

      ``1.0.0-2``

      

   
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-matrix: 
   :depends r-rlang: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aggregatebiovar

   and update with::

      conda update bioconductor-aggregatebiovar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aggregatebiovar:<tag>

   (see `bioconductor-aggregatebiovar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aggregatebiovar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aggregatebiovar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aggregatebiovar
   :alt:   (downloads)
.. |docker_bioconductor-aggregatebiovar| image:: https://quay.io/repository/biocontainers/bioconductor-aggregatebiovar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aggregatebiovar
.. _`bioconductor-aggregatebiovar/tags`: https://quay.io/repository/biocontainers/bioconductor-aggregatebiovar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aggregatebiovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aggregatebiovar/README.html