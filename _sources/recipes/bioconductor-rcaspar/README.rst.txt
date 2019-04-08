:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcaspar'
.. highlight: bash

bioconductor-rcaspar
====================

.. conda:recipe:: bioconductor-rcaspar
   :replaces_section_title:

   The package is the R\-version of the C\-based software \\bold\{CASPAR\} \(Kaderali\,2006\: \\url\{http\:\/\/bioinformatics.oxfordjournals.org\/content\/22\/12\/1495\}\). It is meant to help predict survival times in the presence of high\-dimensional explanatory covariates. The model is a piecewise baseline hazard Cox regression model with an Lq\-norm based prior that selects for the most important regression coefficients\, and in turn the most relevant covariates for survival analysis. It was primarily tried on gene expression and aCGH data\, but can be used on any other type of high\-dimensional data and in disciplines other than biology and medicine.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RCASPAR.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-rcaspar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcaspar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcaspar/meta.yaml>`_
   :links: biotools: :biotools:`rcaspar`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rcaspar

   |downloads_bioconductor-rcaspar| |docker_bioconductor-rcaspar|

   :versions: 1.28.0-0, 1.26.0-0, 1.24.0-0, 1.22.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcaspar

   and update with::

      conda update bioconductor-rcaspar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcaspar:<tag>

   (see `bioconductor-rcaspar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcaspar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcaspar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rcaspar| image:: https://quay.io/repository/biocontainers/bioconductor-rcaspar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcaspar
.. _`bioconductor-rcaspar/tags`: https://quay.io/repository/biocontainers/bioconductor-rcaspar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcaspar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcaspar/README.html