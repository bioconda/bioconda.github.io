.. title:: Package Recipe 'bioconductor-cogaps'
.. highlight: bash


bioconductor-cogaps
===================

.. conda:recipe:: bioconductor-cogaps
   :replaces_section_title:

   Coordinated Gene Activity in Pattern Sets \(CoGAPS\) implements a Bayesian MCMC matrix factorization algorithm\, GAPS\, and links it to gene set statistic methods to infer biological process activity.  It can be used to perform sparse matrix factorization on any data\, and when this data represents biomolecules\, to do gene set analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CoGAPS.html
   :license: GPL (==2)
   :recipe: /`bioconductor-cogaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogaps/meta.yaml>`_

   


.. conda:package:: bioconductor-cogaps

   |downloads_bioconductor-cogaps| |docker_bioconductor-cogaps|

   :versions: 3.2.1

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bh`  :conda:package:`r-cluster`  :conda:package:`r-data.table`  :conda:package:`r-gplots`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-cogaps|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cogaps

   and update with::

      conda update bioconductor-cogaps

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cogaps


.. |required_by_bioconductor-cogaps| conda:required_by:: bioconductor-cogaps
.. |downloads_bioconductor-cogaps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogaps.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cogaps| image:: https://quay.io/repository/biocontainers/bioconductor-cogaps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogaps







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogaps/README.html

