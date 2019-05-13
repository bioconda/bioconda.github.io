:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicspca'
.. highlight: bash

bioconductor-omicspca
=====================

.. conda:recipe:: bioconductor-omicspca
   :replaces_section_title:

   OMICsPCA is an analysis pipeline designed to integrate multi OMICs experiments done on various subjects \(e.g. Cell lines\, individuals\)\, treatments \(e.g. disease\/control\) or time points and to analyse such integrated data from various various angles and perspectives. In it\'s core OMICsPCA uses Principal Component Analysis \(PCA\) to integrate multiomics experiments from various sources and thus has ability to over data insufficiency issues by using the ingegrated data as representatives. OMICsPCA can be used in various application including analysis of overall distribution of OMICs assays across various samples \/individuals \/time points\; grouping assays by user\-defined conditions\; identification of source of variation\, similarity\/dissimilarity between assays\, variables or individuals.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/OMICsPCA.html
   :license: GPL-3
   :recipe: /`bioconductor-omicspca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspca/meta.yaml>`_

   


.. conda:package:: bioconductor-omicspca

   |downloads_bioconductor-omicspca| |docker_bioconductor-omicspca|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omicspca

   and update with::

      conda update bioconductor-omicspca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicspca:<tag>

   (see `bioconductor-omicspca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicspca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicspca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicspca
   :alt:   (downloads)
.. |docker_bioconductor-omicspca| image:: https://quay.io/repository/biocontainers/bioconductor-omicspca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicspca
.. _`bioconductor-omicspca/tags`: https://quay.io/repository/biocontainers/bioconductor-omicspca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicspca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicspca/README.html