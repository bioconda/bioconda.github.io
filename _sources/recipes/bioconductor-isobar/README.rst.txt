.. title:: Package Recipe 'bioconductor-isobar'
.. highlight: bash


bioconductor-isobar
===================

.. conda:recipe:: bioconductor-isobar
   :replaces_section_title:

   isobar provides methods for preprocessing\, normalization\, and report generation for the analysis of quantitative mass spectrometry proteomics data labeled with isobaric tags\, such as iTRAQ and TMT. Features modules for integrating and validating PTM\-centric datasets \(isobar\-PTM\). More information on http\:\/\/www.ms\-isobar.org.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/isobar.html
   :license: LGPL-2
   :recipe: /`bioconductor-isobar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isobar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isobar/meta.yaml>`_

   


.. conda:package:: bioconductor-isobar

   |downloads_bioconductor-isobar| |docker_bioconductor-isobar|

   :versions: 1.28.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-distr`  :conda:package:`r-ggplot2`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-isobar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isobar

   and update with::

      conda update bioconductor-isobar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-isobar


.. |required_by_bioconductor-isobar| conda:required_by:: bioconductor-isobar
.. |downloads_bioconductor-isobar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isobar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-isobar| image:: https://quay.io/repository/biocontainers/bioconductor-isobar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isobar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isobar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isobar/README.html

