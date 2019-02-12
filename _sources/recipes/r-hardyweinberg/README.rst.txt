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

   


.. conda:package:: r-hardyweinberg

   |downloads_r-hardyweinberg| |docker_r-hardyweinberg|

   :versions: 1.6.1

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mice`  :conda:package:`r-rcpp`  :conda:package:`r-rsolnp`  

   :required~by: |required_by_r-hardyweinberg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-hardyweinberg

   and update with::

      conda update r-hardyweinberg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-hardyweinberg


.. |required_by_r-hardyweinberg| conda:required_by:: r-hardyweinberg
.. |downloads_r-hardyweinberg| image:: https://img.shields.io/conda/dn/bioconda/r-hardyweinberg.svg?style=flat
   :alt:   (downloads)
.. |docker_r-hardyweinberg| image:: https://quay.io/repository/biocontainers/r-hardyweinberg/status
   :target: https://quay.io/repository/biocontainers/r-hardyweinberg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hardyweinberg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hardyweinberg/README.html

