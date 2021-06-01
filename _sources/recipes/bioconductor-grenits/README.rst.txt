:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-grenits'
.. highlight: bash

bioconductor-grenits
====================

.. conda:recipe:: bioconductor-grenits
   :replaces_section_title:
   :noindex:

   Gene Regulatory Network Inference Using Time Series

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GRENITS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-grenits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grenits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grenits/meta.yaml>`_

   The package offers four network inference statistical models using Dynamic Bayesian Networks and Gibbs Variable Selection\: a linear interaction model\, two linear interaction models with added experimental noise \(Gaussian and Student distributed\) for the case where replicates are available and a non\-linear interaction model.


.. conda:package:: bioconductor-grenits

   |downloads_bioconductor-grenits| |docker_bioconductor-grenits|

   :versions:
      
      

      ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: ``>=0.9.0``
   :depends r-rcpp: ``>=0.8.6``
   :depends r-rcpparmadillo: ``>=0.2.8``
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-grenits

   and update with::

      conda update bioconductor-grenits

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-grenits:<tag>

   (see `bioconductor-grenits/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-grenits| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grenits.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-grenits
   :alt:   (downloads)
.. |docker_bioconductor-grenits| image:: https://quay.io/repository/biocontainers/bioconductor-grenits/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grenits
.. _`bioconductor-grenits/tags`: https://quay.io/repository/biocontainers/bioconductor-grenits?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grenits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grenits/README.html