.. title:: Package Recipe 'bioconductor-grenits'
.. highlight: bash


bioconductor-grenits
====================

.. conda:recipe:: bioconductor-grenits
   :replaces_section_title:

   The package offers four network inference statistical models using Dynamic Bayesian Networks and Gibbs Variable Selection\: a linear interaction model\, two linear interaction models with added experimental noise \(Gaussian and Student distributed\) for the case where replicates are available and a non\-linear interaction model.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GRENITS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-grenits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grenits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grenits/meta.yaml>`_

   


.. conda:package:: bioconductor-grenits

   |downloads_bioconductor-grenits| |docker_bioconductor-grenits|

   :versions: 1.34.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2` >=0.9.0 :conda:package:`r-rcpp` >=0.8.6 :conda:package:`r-rcpparmadillo` >=0.2.8 :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-grenits|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-grenits

   and update with::

      conda update bioconductor-grenits

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-grenits


.. |required_by_bioconductor-grenits| conda:required_by:: bioconductor-grenits
.. |downloads_bioconductor-grenits| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grenits.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-grenits| image:: https://quay.io/repository/biocontainers/bioconductor-grenits/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grenits







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grenits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grenits/README.html

