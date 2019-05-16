:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doser'
.. highlight: bash

bioconductor-doser
==================

.. conda:recipe:: bioconductor-doser
   :replaces_section_title:

   doseR package is a next generation sequencing package for sex chromosome dosage compensation which can be applied broadly to detect shifts in gene expression among an arbitrary number of pre\-defined groups of loci. doseR is a differential gene expression package for count data\, that detects directional shifts in expression for multiple\, specific subsets of genes\, broad utility in systems biology research. doseR has been prepared to manage the nature of the data and the desired set of inferences. doseR uses S4 classes to store count data from sequencing experiment. It contains functions to normalize and filter count data\, as well as to plot and calculate statistics of count data. It contains a framework for linear modeling of count data. The package has been tested using real and simulated data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/doseR.html
   :license: GPL
   :recipe: /`bioconductor-doser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doser/meta.yaml>`_

   


.. conda:package:: bioconductor-doser

   |downloads_bioconductor-doser| |docker_bioconductor-doser|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-doser

   and update with::

      conda update bioconductor-doser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-doser:<tag>

   (see `bioconductor-doser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-doser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-doser
   :alt:   (downloads)
.. |docker_bioconductor-doser| image:: https://quay.io/repository/biocontainers/bioconductor-doser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doser
.. _`bioconductor-doser/tags`: https://quay.io/repository/biocontainers/bioconductor-doser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doser/README.html