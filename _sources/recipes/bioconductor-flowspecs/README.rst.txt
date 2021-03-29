:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowspecs'
.. highlight: bash

bioconductor-flowspecs
======================

.. conda:recipe:: bioconductor-flowspecs
   :replaces_section_title:
   :noindex:

   Tools for processing of high\-dimensional cytometry data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/flowSpecs.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-flowspecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowspecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowspecs/meta.yaml>`_

   This package is intended to fill the role of conventional cytometry pre\-processing software\, for spectral decomposition\, transformation\, visualization and cleanup\, and to aid further downstream analyses\, such as with DepecheR\, by enabling transformation of flowFrames and flowSets to dataframes. Functions for flowCore\-compliant automatic 1D\-gating\/filtering are in the pipe line. The package name has been chosen both as it will deal with spectral cytometry and as it will hopefully give the user a nice pair of spectacles through which to view their data.


.. conda:package:: bioconductor-flowspecs

   |downloads_bioconductor-flowspecs| |docker_bioconductor-flowspecs|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: ``>=3.1.0``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-zoo: ``>=1.8.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowspecs

   and update with::

      conda update bioconductor-flowspecs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowspecs:<tag>

   (see `bioconductor-flowspecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowspecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowspecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowspecs
   :alt:   (downloads)
.. |docker_bioconductor-flowspecs| image:: https://quay.io/repository/biocontainers/bioconductor-flowspecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowspecs
.. _`bioconductor-flowspecs/tags`: https://quay.io/repository/biocontainers/bioconductor-flowspecs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowspecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowspecs/README.html