:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matrixrider'
.. highlight: bash

bioconductor-matrixrider
========================

.. conda:recipe:: bioconductor-matrixrider
   :replaces_section_title:
   :noindex:

   Obtain total affinity and occupancies for binding site matrices on a given sequence

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MatrixRider.html
   :license: GPL-3
   :recipe: /`bioconductor-matrixrider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixrider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixrider/meta.yaml>`_

   Calculates a single number for a whole sequence that reflects the propensity of a DNA binding protein to interact with it. The DNA binding protein has to be described with a PFM matrix\, for example gotten from Jaspar.


.. conda:package:: bioconductor-matrixrider

   |downloads_bioconductor-matrixrider| |docker_bioconductor-matrixrider|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-1``,  ``1.14.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-tfbstools: ``>=1.26.0,<1.27.0``
   :depends bioconductor-xvector: ``>=0.28.0,<0.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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