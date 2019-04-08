:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beachmat'
.. highlight: bash

bioconductor-beachmat
=====================

.. conda:recipe:: bioconductor-beachmat
   :replaces_section_title:

   Provides a consistent C\+\+ class interface for a variety of commonly used matrix types\, including sparse and HDF5\-backed matrices.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/beachmat.html
   :license: GPL-3
   :recipe: /`bioconductor-beachmat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat/meta.yaml>`_

   


.. conda:package:: bioconductor-beachmat

   |downloads_bioconductor-beachmat| |docker_bioconductor-beachmat|

   :versions: 1.4.0-1, 1.4.0-0, 1.2.1-0, 1.0.1-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-delayedarray: >=0.8.0,<0.9.0
   :depends bioconductor-hdf5array: >=1.10.0,<1.11.0
   :depends bioconductor-rhdf5: >=2.26.0,<2.27.0
   :depends bioconductor-rhdf5lib: >=1.4.0,<1.5.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rcpp: >=0.12.14
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beachmat

   and update with::

      conda update bioconductor-beachmat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beachmat:<tag>

   (see `bioconductor-beachmat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beachmat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beachmat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-beachmat| image:: https://quay.io/repository/biocontainers/bioconductor-beachmat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beachmat
.. _`bioconductor-beachmat/tags`: https://quay.io/repository/biocontainers/bioconductor-beachmat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beachmat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beachmat/README.html