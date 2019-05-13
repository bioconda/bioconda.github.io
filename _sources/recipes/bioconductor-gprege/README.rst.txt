:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gprege'
.. highlight: bash

bioconductor-gprege
===================

.. conda:recipe:: bioconductor-gprege
   :replaces_section_title:

   The gprege package implements the methodology described in Kalaitzis \& Lawrence \(2011\) \"A simple approach to ranking differentially expressed gene expression time\-courses through Gaussian process regression\". The software fits two GPs with the an RBF \(\+ noise diagonal\) kernel on each profile. One GP kernel is initialised wih a short lengthscale hyperparameter\, signal variance as the observed variance and a zero noise variance. It is optimised via scaled conjugate gradients \(netlab\). A second GP has fixed hyperparameters\: zero inverse\-width\, zero signal variance and noise variance as the observed variance. The log\-ratio of marginal likelihoods of the two hypotheses acts as a score of differential expression for the profile. Comparison via ROC curves is performed against BATS \(Angelini et.al\, 2007\). A detailed discussion of the ranking approach and dataset used can be found in the paper \(http\:\/\/www.biomedcentral.com\/1471\-2105\/12\/180\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gprege.html
   :license: AGPL-3
   :recipe: /`bioconductor-gprege <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gprege>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gprege/meta.yaml>`_

   


.. conda:package:: bioconductor-gprege

   |downloads_bioconductor-gprege| |docker_bioconductor-gprege|

   :versions: 1.28.0-0, 1.26.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gptk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gprege

   and update with::

      conda update bioconductor-gprege

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gprege:<tag>

   (see `bioconductor-gprege/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gprege| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gprege.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gprege| image:: https://quay.io/repository/biocontainers/bioconductor-gprege/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gprege
.. _`bioconductor-gprege/tags`: https://quay.io/repository/biocontainers/bioconductor-gprege?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gprege/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gprege/README.html