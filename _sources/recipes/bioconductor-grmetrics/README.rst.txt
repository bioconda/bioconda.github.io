:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-grmetrics'
.. highlight: bash

bioconductor-grmetrics
======================

.. conda:recipe:: bioconductor-grmetrics
   :replaces_section_title:

   Functions for calculating and visualizing growth\-rate inhibition \(GR\) metrics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GRmetrics.html
   :license: GPL-3
   :recipe: /`bioconductor-grmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grmetrics/meta.yaml>`_
   :links: biotools: :biotools:`grmetrics`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-grmetrics

   |downloads_bioconductor-grmetrics| |docker_bioconductor-grmetrics|

   :versions: 1.8.1-0, 1.8.0-0, 1.6.1-0, 1.4.1-0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-drc: 
   :depends r-ggplot2: 
   :depends r-plotly: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-grmetrics

   and update with::

      conda update bioconductor-grmetrics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-grmetrics:<tag>

   (see `bioconductor-grmetrics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-grmetrics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grmetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-grmetrics
   :alt:   (downloads)
.. |docker_bioconductor-grmetrics| image:: https://quay.io/repository/biocontainers/bioconductor-grmetrics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grmetrics
.. _`bioconductor-grmetrics/tags`: https://quay.io/repository/biocontainers/bioconductor-grmetrics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grmetrics/README.html