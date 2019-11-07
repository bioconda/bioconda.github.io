:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matrixrider'
.. highlight: bash

bioconductor-matrixrider
========================

.. conda:recipe:: bioconductor-matrixrider
   :replaces_section_title:

   Obtain total affinity and occupancies for binding site matrices on a given sequence

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/MatrixRider.html
   :license: GPL-3
   :recipe: /`bioconductor-matrixrider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixrider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixrider/meta.yaml>`_

   Calculates a single number for a whole sequence that reflects the propensity of a DNA binding protein to interact with it. The DNA binding protein has to be described with a PFM matrix\, for example gotten from Jaspar.


.. conda:package:: bioconductor-matrixrider

   |downloads_bioconductor-matrixrider| |docker_bioconductor-matrixrider|

   :versions: 1.18.0-0, 1.16.0-1, 1.14.0-1, 1.14.0-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-tfbstools: >=1.24.0,<1.25.0
   :depends bioconductor-xvector: >=0.26.0,<0.27.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-matrixrider

   and update with::

      conda update bioconductor-matrixrider

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-matrixrider:<tag>

   (see `bioconductor-matrixrider/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-matrixrider| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matrixrider.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matrixrider
   :alt:   (downloads)
.. |docker_bioconductor-matrixrider| image:: https://quay.io/repository/biocontainers/bioconductor-matrixrider/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matrixrider
.. _`bioconductor-matrixrider/tags`: https://quay.io/repository/biocontainers/bioconductor-matrixrider?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matrixrider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matrixrider/README.html