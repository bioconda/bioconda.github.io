:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proda'
.. highlight: bash

bioconductor-proda
==================

.. conda:recipe:: bioconductor-proda
   :replaces_section_title:

   Differential Abundance Analysis of Label\-Free Mass Spectrometry Data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/proDA.html
   :license: GPL-3
   :recipe: /`bioconductor-proda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proda/meta.yaml>`_

   Account for missing values in label\-free mass spectrometry data without imputation. The package implements a probabilistic dropout model that ensures that the information from observed and missing values are properly combined. It adds empirical Bayesian priors to increase power to detect differentially abundant proteins.


.. conda:package:: bioconductor-proda

   |downloads_bioconductor-proda| |docker_bioconductor-proda|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-extradistr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-proda

   and update with::

      conda update bioconductor-proda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-proda:<tag>

   (see `bioconductor-proda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proda
   :alt:   (downloads)
.. |docker_bioconductor-proda| image:: https://quay.io/repository/biocontainers/bioconductor-proda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proda
.. _`bioconductor-proda/tags`: https://quay.io/repository/biocontainers/bioconductor-proda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proda/README.html