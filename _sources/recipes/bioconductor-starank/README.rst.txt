:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-starank'
.. highlight: bash

bioconductor-starank
====================

.. conda:recipe:: bioconductor-starank
   :replaces_section_title:

   Stability Ranking

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/staRank.html
   :license: GPL
   :recipe: /`bioconductor-starank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starank/meta.yaml>`_
   :links: biotools: :biotools:`starank`, doi: :doi:`10.1093/bioinformatics/bts192`

   Detecting all relevant variables from a data set is challenging\, especially when only few samples are available and data is noisy. Stability ranking provides improved variable rankings of increased robustness using resampling or subsampling.


.. conda:package:: bioconductor-starank

   |downloads_bioconductor-starank| |docker_bioconductor-starank|

   :versions: 1.30.0-0, 1.28.0-0, 1.26.0-1, 1.24.1-0, 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-cellhts2: >=2.52.0,<2.53.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-starank

   and update with::

      conda update bioconductor-starank

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-starank:<tag>

   (see `bioconductor-starank/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-starank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-starank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-starank
   :alt:   (downloads)
.. |docker_bioconductor-starank| image:: https://quay.io/repository/biocontainers/bioconductor-starank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-starank
.. _`bioconductor-starank/tags`: https://quay.io/repository/biocontainers/bioconductor-starank?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-starank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-starank/README.html