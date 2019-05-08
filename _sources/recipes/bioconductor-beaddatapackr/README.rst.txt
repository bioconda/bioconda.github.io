:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beaddatapackr'
.. highlight: bash

bioconductor-beaddatapackr
==========================

.. conda:recipe:: bioconductor-beaddatapackr
   :replaces_section_title:

   Provides functionality for the compression and decompression of raw bead\-level data from the Illumina BeadArray platform.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BeadDataPackR.html
   :license: GPL-2
   :recipe: /`bioconductor-beaddatapackr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beaddatapackr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beaddatapackr/meta.yaml>`_
   :links: biotools: :biotools:`beaddatapackr`

   


.. conda:package:: bioconductor-beaddatapackr

   |downloads_bioconductor-beaddatapackr| |docker_bioconductor-beaddatapackr|

   :versions: 1.36.0-0, 1.34.0-0, 1.32.0-0, 1.30.0-0, 1.28.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beaddatapackr

   and update with::

      conda update bioconductor-beaddatapackr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beaddatapackr:<tag>

   (see `bioconductor-beaddatapackr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beaddatapackr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beaddatapackr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-beaddatapackr| image:: https://quay.io/repository/biocontainers/bioconductor-beaddatapackr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beaddatapackr
.. _`bioconductor-beaddatapackr/tags`: https://quay.io/repository/biocontainers/bioconductor-beaddatapackr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beaddatapackr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beaddatapackr/README.html