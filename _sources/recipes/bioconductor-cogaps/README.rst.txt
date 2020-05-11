:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogaps'
.. highlight: bash

bioconductor-cogaps
===================

.. conda:recipe:: bioconductor-cogaps
   :replaces_section_title:

   Coordinated Gene Activity in Pattern Sets

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/CoGAPS.html
   :license: GPL (==2)
   :recipe: /`bioconductor-cogaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogaps/meta.yaml>`_

   Coordinated Gene Activity in Pattern Sets \(CoGAPS\) implements a Bayesian MCMC matrix factorization algorithm\, GAPS\, and links it to gene set statistic methods to infer biological process activity.  It can be used to perform sparse matrix factorization on any data\, and when this data represents biomolecules\, to do gene set analysis.


.. conda:package:: bioconductor-cogaps

   |downloads_bioconductor-cogaps| |docker_bioconductor-cogaps|

   :versions: 3.8.0-0, 3.6.0-0, 3.4.1-0, 3.2.1-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-rhdf5: >=2.32.0,<2.33.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-singlecellexperiment: >=1.10.0,<1.11.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cluster: 
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cogaps

   and update with::

      conda update bioconductor-cogaps

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogaps:<tag>

   (see `bioconductor-cogaps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogaps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogaps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogaps
   :alt:   (downloads)
.. |docker_bioconductor-cogaps| image:: https://quay.io/repository/biocontainers/bioconductor-cogaps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogaps
.. _`bioconductor-cogaps/tags`: https://quay.io/repository/biocontainers/bioconductor-cogaps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogaps/README.html