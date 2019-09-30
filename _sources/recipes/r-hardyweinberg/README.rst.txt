:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-hardyweinberg'
.. highlight: bash

r-hardyweinberg
===============

.. conda:recipe:: r-hardyweinberg
   :replaces_section_title:

   Contains tools for exploring Hardy\-Weinberg equilibrium \(Hardy\, 1908\;  Weinberg\, 1908\) \<doi\:10.1126\/science.28.706.49\> for bi and multi\-allelic genetic marker data. All classical tests \(chi\-square\, exact\, likelihood\-ratio and permutation tests\) with bi\-allelic variants are included in the package\, as well as functions for power computation and for the simulation of marker data under equilibrium and disequilibrium. Routines for dealing with markers on the X\-chromosome are included \(Graffelman \& Weir\, 2016\) \<doi\: 10.1038\/hdy.2016.20\>\, including Bayesian procedures. Some exact and permutation procedures also work with multi\-allelic variants. Special test procedures that jointly address Hardy\-Weinberg equilibrium and equality of allele frequencies in both sexes are supplied\, for the bi and multi\-allelic case. Functions for testing equilibrium in the presence of missing data by using multiple imputation are also provided. Implements several graphics for exploring the equilibrium status of a large set of bi\-allelic markers\: ternary plots with acceptance regions\, log\-ratio plots and Q\-Q plots. 

   :homepage: https://www.r-project.org, http://www-eio.upc.edu/~jan
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-hardyweinberg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hardyweinberg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hardyweinberg/meta.yaml>`_
   :links: doi: :doi:`10.1126/science.28.706.49`

   


.. conda:package:: r-hardyweinberg

   |downloads_r-hardyweinberg| |docker_r-hardyweinberg|

   :versions: 1.6.3-1, 1.6.3-0, 1.6.2-0, 1.6.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-mice: 
   :depends r-rcpp: 
   :depends r-rsolnp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-hardyweinberg

   and update with::

      conda update r-hardyweinberg

   or use the docker container::

      docker pull quay.io/biocontainers/r-hardyweinberg:<tag>

   (see `r-hardyweinberg/tags`_ for valid values for ``<tag>``)


.. |downloads_r-hardyweinberg| image:: https://img.shields.io/conda/dn/bioconda/r-hardyweinberg.svg?style=flat
   :target: https://anaconda.org/bioconda/r-hardyweinberg
   :alt:   (downloads)
.. |docker_r-hardyweinberg| image:: https://quay.io/repository/biocontainers/r-hardyweinberg/status
   :target: https://quay.io/repository/biocontainers/r-hardyweinberg
.. _`r-hardyweinberg/tags`: https://quay.io/repository/biocontainers/r-hardyweinberg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hardyweinberg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hardyweinberg/README.html