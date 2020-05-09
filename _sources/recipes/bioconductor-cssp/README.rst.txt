:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cssp'
.. highlight: bash

bioconductor-cssp
=================

.. conda:recipe:: bioconductor-cssp
   :replaces_section_title:

   ChIP\-Seq Statistical Power

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/CSSP.html
   :license: GPL-2
   :recipe: /`bioconductor-cssp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cssp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cssp/meta.yaml>`_

   Power computation for ChIP\-Seq data based on Bayesian estimation for local poisson counting process.


.. conda:package:: bioconductor-cssp

   |downloads_bioconductor-cssp| |docker_bioconductor-cssp|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-1, 1.22.0-0, 1.20.0-0
   
   :depends libblas: >=3.8.0,<4.0a0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cssp

   and update with::

      conda update bioconductor-cssp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cssp:<tag>

   (see `bioconductor-cssp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cssp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cssp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cssp
   :alt:   (downloads)
.. |docker_bioconductor-cssp| image:: https://quay.io/repository/biocontainers/bioconductor-cssp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cssp
.. _`bioconductor-cssp/tags`: https://quay.io/repository/biocontainers/bioconductor-cssp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cssp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cssp/README.html