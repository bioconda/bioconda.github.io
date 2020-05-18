:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-abadata'
.. highlight: bash

bioconductor-abadata
====================

.. conda:recipe:: bioconductor-abadata
   :replaces_section_title:

   Averaged gene expression in human brain regions from Allen Brain Atlas

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/ABAData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-abadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abadata/meta.yaml>`_

   Provides the data for the gene expression enrichment analysis conducted in the package \'ABAEnrichment\'. The package includes three datasets which are derived from the Allen Brain Atlas\: \(1\) Gene expression data from Human Brain \(adults\) averaged across donors\, \(2\) Gene expression data from the Developing Human Brain pooled into five age categories and averaged across donors and \(3\) a developmental effect score based on the Developing Human Brain expression data. All datasets are restricted to protein coding genes.


.. conda:package:: bioconductor-abadata

   |downloads_bioconductor-abadata| |docker_bioconductor-abadata|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-2, 1.14.0-1, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-abadata

   and update with::

      conda update bioconductor-abadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-abadata:<tag>

   (see `bioconductor-abadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-abadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-abadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-abadata
   :alt:   (downloads)
.. |docker_bioconductor-abadata| image:: https://quay.io/repository/biocontainers/bioconductor-abadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-abadata
.. _`bioconductor-abadata/tags`: https://quay.io/repository/biocontainers/bioconductor-abadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-abadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-abadata/README.html