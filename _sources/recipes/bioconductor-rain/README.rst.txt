:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rain'
.. highlight: bash

bioconductor-rain
=================

.. conda:recipe:: bioconductor-rain
   :replaces_section_title:
   :noindex:

   Rhythmicity Analysis Incorporating Non\-parametric Methods

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/rain.html
   :license: GPL-2
   :recipe: /`bioconductor-rain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rain/meta.yaml>`_
   :links: biotools: :biotools:`rain`

   This package uses non\-parametric methods to detect rhythms in time series. It deals with outliers\, missing values and is optimized for time series comprising 10\-100 measurements. As it does not assume expect any distinct waveform it is optimal or detecting oscillating behavior \(e.g. circadian or cell cycle\) in e.g. genome\- or proteome\-wide biological measurements such as\: micro arrays\, proteome mass spectrometry\, or metabolome measurements.


.. conda:package:: bioconductor-rain

   |downloads_bioconductor-rain| |docker_bioconductor-rain|

   :versions:
      
      

      ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-multtest: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gmp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rain

   and update with::

      conda update bioconductor-rain

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rain:<tag>

   (see `bioconductor-rain/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rain| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rain.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rain
   :alt:   (downloads)
.. |docker_bioconductor-rain| image:: https://quay.io/repository/biocontainers/bioconductor-rain/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rain
.. _`bioconductor-rain/tags`: https://quay.io/repository/biocontainers/bioconductor-rain?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rain/README.html