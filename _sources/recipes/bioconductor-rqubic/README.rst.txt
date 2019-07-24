:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rqubic'
.. highlight: bash

bioconductor-rqubic
===================

.. conda:recipe:: bioconductor-rqubic
   :replaces_section_title:

   This package implements the QUBIC algorithm introduced by Li et al. for the qualitative biclustering with gene expression data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/rqubic.html
   :license: GPL-2
   :recipe: /`bioconductor-rqubic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqubic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqubic/meta.yaml>`_

   


.. conda:package:: bioconductor-rqubic

   |downloads_bioconductor-rqubic| |docker_bioconductor-rqubic|

   :versions: 1.30.0-1, 1.28.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biclust: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rqubic

   and update with::

      conda update bioconductor-rqubic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rqubic:<tag>

   (see `bioconductor-rqubic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rqubic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqubic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rqubic
   :alt:   (downloads)
.. |docker_bioconductor-rqubic| image:: https://quay.io/repository/biocontainers/bioconductor-rqubic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqubic
.. _`bioconductor-rqubic/tags`: https://quay.io/repository/biocontainers/bioconductor-rqubic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqubic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqubic/README.html