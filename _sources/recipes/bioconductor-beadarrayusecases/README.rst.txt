:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadarrayusecases'
.. highlight: bash

bioconductor-beadarrayusecases
==============================

.. conda:recipe:: bioconductor-beadarrayusecases
   :replaces_section_title:

   Analysing Illumina BeadArray expression data using Bioconductor

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/BeadArrayUseCases.html
   :license: GPL-2
   :recipe: /`bioconductor-beadarrayusecases <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayusecases>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayusecases/meta.yaml>`_

   Example data files and use cases for processing Illumina BeadArray expression data using Bioconductor


.. conda:package:: bioconductor-beadarrayusecases

   |downloads_bioconductor-beadarrayusecases| |docker_bioconductor-beadarrayusecases|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-1, 1.20.0-0
   
   :depends bioconductor-beadarray: >=2.38.0,<2.39.0
   :depends bioconductor-geoquery: >=2.56.0,<2.57.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beadarrayusecases

   and update with::

      conda update bioconductor-beadarrayusecases

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadarrayusecases:<tag>

   (see `bioconductor-beadarrayusecases/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadarrayusecases| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarrayusecases.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadarrayusecases
   :alt:   (downloads)
.. |docker_bioconductor-beadarrayusecases| image:: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases
.. _`bioconductor-beadarrayusecases/tags`: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarrayusecases/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarrayusecases/README.html