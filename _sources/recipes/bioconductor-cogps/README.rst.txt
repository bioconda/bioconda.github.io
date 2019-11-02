:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogps'
.. highlight: bash

bioconductor-cogps
==================

.. conda:recipe:: bioconductor-cogps
   :replaces_section_title:

   Gene Set Enrichment Analysis of P\-value based statistics for outlier gene detection in dataset merged from multiple studies

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/coGPS.html
   :license: GPL-2
   :recipe: /`bioconductor-cogps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogps/meta.yaml>`_
   :links: biotools: :biotools:`cogps`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-cogps

   |downloads_bioconductor-cogps| |docker_bioconductor-cogps|

   :versions: 1.30.0-0, 1.28.0-1, 1.28.0-0, 1.26.0-0, 1.24.0-0, 1.22.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cogps

   and update with::

      conda update bioconductor-cogps

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogps:<tag>

   (see `bioconductor-cogps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogps
   :alt:   (downloads)
.. |docker_bioconductor-cogps| image:: https://quay.io/repository/biocontainers/bioconductor-cogps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogps
.. _`bioconductor-cogps/tags`: https://quay.io/repository/biocontainers/bioconductor-cogps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogps/README.html