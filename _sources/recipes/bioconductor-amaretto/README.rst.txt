:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-amaretto'
.. highlight: bash

bioconductor-amaretto
=====================

.. conda:recipe:: bioconductor-amaretto
   :replaces_section_title:

   Integrating an increasing number of available multi\-omics cancer data remains one of the main challenges to improve our understanding of cancer. One of the main challenges is using multi\-omics data for identifying novel cancer driver genes. We have developed an algorithm\, called AMARETTO\, that integrates copy number\, DNA methylation and gene expression data to identify a set of driver genes by analyzing cancer samples and connects them to clusters of co\-expressed genes\, which we define as modules. We applied AMARETTO in a pancancer setting to identify cancer driver genes and their modules on multiple cancer sites. AMARETTO captures modules enriched in angiogenesis\, cell cycle and EMT\, and modules that accurately predict survival and molecular subtypes. This allows AMARETTO to identify novel cancer driver genes directing canonical cancer pathways.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/AMARETTO.html
   :license: Apache License (== 2.0) + file LICENSE
   :recipe: /`bioconductor-amaretto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amaretto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amaretto/meta.yaml>`_

   


.. conda:package:: bioconductor-amaretto

   |downloads_bioconductor-amaretto| |docker_bioconductor-amaretto|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-amaretto

   and update with::

      conda update bioconductor-amaretto

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-amaretto:<tag>

   (see `bioconductor-amaretto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-amaretto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amaretto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-amaretto
   :alt:   (downloads)
.. |docker_bioconductor-amaretto| image:: https://quay.io/repository/biocontainers/bioconductor-amaretto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amaretto
.. _`bioconductor-amaretto/tags`: https://quay.io/repository/biocontainers/bioconductor-amaretto?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amaretto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amaretto/README.html