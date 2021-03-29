:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ribor'
.. highlight: bash

bioconductor-ribor
==================

.. conda:recipe:: bioconductor-ribor
   :replaces_section_title:
   :noindex:

   An R Interface for Ribo Files

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ribor.html
   :license: GPL-3
   :recipe: /`bioconductor-ribor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribor/meta.yaml>`_

   The ribor package provides an R Interface for .ribo files. It provides functionality to read the .ribo file\, which is of HDF5 format\, and performs common analyses on its contents.


.. conda:package:: bioconductor-ribor

   |downloads_bioconductor-ribor| |docker_bioconductor-ribor|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rhdf5: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hash: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ribor

   and update with::

      conda update bioconductor-ribor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ribor:<tag>

   (see `bioconductor-ribor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ribor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ribor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ribor
   :alt:   (downloads)
.. |docker_bioconductor-ribor| image:: https://quay.io/repository/biocontainers/bioconductor-ribor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ribor
.. _`bioconductor-ribor/tags`: https://quay.io/repository/biocontainers/bioconductor-ribor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ribor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ribor/README.html