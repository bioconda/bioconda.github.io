:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isobar'
.. highlight: bash

bioconductor-isobar
===================

.. conda:recipe:: bioconductor-isobar
   :replaces_section_title:
   :noindex:

   Analysis and quantitation of isobarically tagged MSMS proteomics data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/isobar.html
   :license: LGPL-2
   :recipe: /`bioconductor-isobar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isobar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isobar/meta.yaml>`_

   isobar provides methods for preprocessing\, normalization\, and report generation for the analysis of quantitative mass spectrometry proteomics data labeled with isobaric tags\, such as iTRAQ and TMT. Features modules for integrating and validating PTM\-centric datasets \(isobar\-PTM\). More information on http\:\/\/www.ms\-isobar.org.


.. conda:package:: bioconductor-isobar

   |downloads_bioconductor-isobar| |docker_bioconductor-isobar|

   :versions:
      
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-distr: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isobar

   and update with::

      conda update bioconductor-isobar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isobar:<tag>

   (see `bioconductor-isobar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isobar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isobar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isobar
   :alt:   (downloads)
.. |docker_bioconductor-isobar| image:: https://quay.io/repository/biocontainers/bioconductor-isobar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isobar
.. _`bioconductor-isobar/tags`: https://quay.io/repository/biocontainers/bioconductor-isobar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isobar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isobar/README.html