:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treesummarizedexperiment'
.. highlight: bash

bioconductor-treesummarizedexperiment
=====================================

.. conda:recipe:: bioconductor-treesummarizedexperiment
   :replaces_section_title:
   :noindex:

   TreeSummarizedExperiment\: a S4 Class for Data with Tree Structures

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/TreeSummarizedExperiment.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-treesummarizedexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treesummarizedexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treesummarizedexperiment/meta.yaml>`_

   TreeSummarizedExperiment has extended SingleCellExperiment to include hierarchical information on the rows or columns of the rectangular data.


.. conda:package:: bioconductor-treesummarizedexperiment

   |downloads_bioconductor-treesummarizedexperiment| |docker_bioconductor-treesummarizedexperiment|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-ape: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-treesummarizedexperiment

   and update with::

      conda update bioconductor-treesummarizedexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-treesummarizedexperiment:<tag>

   (see `bioconductor-treesummarizedexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-treesummarizedexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treesummarizedexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treesummarizedexperiment
   :alt:   (downloads)
.. |docker_bioconductor-treesummarizedexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-treesummarizedexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treesummarizedexperiment
.. _`bioconductor-treesummarizedexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-treesummarizedexperiment?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treesummarizedexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treesummarizedexperiment/README.html