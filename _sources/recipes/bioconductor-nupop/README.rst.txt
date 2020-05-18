:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nupop'
.. highlight: bash

bioconductor-nupop
==================

.. conda:recipe:: bioconductor-nupop
   :replaces_section_title:

   An R package for nucleosome positioning prediction

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/NuPoP.html
   :license: GPL-2
   :recipe: /`bioconductor-nupop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nupop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nupop/meta.yaml>`_

   NuPoP is an R package for Nucleosome Positioning Prediction.This package is built upon a duration hidden Markov model proposed in Xi et al\, 2010\; Wang et al\, 2008. The core of the package was written in Fotran. In addition to the R package\, a stand\-alone Fortran software tool is also available at http\:\/\/nucleosome.stats.northwestern.edu.


.. conda:package:: bioconductor-nupop

   |downloads_bioconductor-nupop| |docker_bioconductor-nupop|

   :versions: 1.38.0-0, 1.36.0-0, 1.34.0-2, 1.34.0-1, 1.34.0-0, 1.32.0-0
   
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libgfortran-ng: >=7,<8.0a0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nupop

   and update with::

      conda update bioconductor-nupop

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nupop:<tag>

   (see `bioconductor-nupop/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nupop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nupop.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nupop
   :alt:   (downloads)
.. |docker_bioconductor-nupop| image:: https://quay.io/repository/biocontainers/bioconductor-nupop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nupop
.. _`bioconductor-nupop/tags`: https://quay.io/repository/biocontainers/bioconductor-nupop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nupop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nupop/README.html