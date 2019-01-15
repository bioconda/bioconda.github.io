.. _`bioconductor-targetscore`:

bioconductor-targetscore
========================

|downloads|

Infer the posterior distributions of microRNA targets by probabilistically modelling the likelihood microRNA\-overexpression fold\-changes and sequence\-based scores. Variaitonal Bayesian Gaussian mixture model \(VB\-GMM\) is applied to log fold\-changes and sequence scores to obtain the posteriors of latent variable being the miRNA targets. The final targetScore is computed as the sigmoid\-transformed fold\-change weighted by the averaged posteriors of target components over all of the features.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/TargetScore.html
Versions      1.18.0, 1.16.0, 1.14.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscore



Links         biotools: :biotools:`targetscore`, doi: :doi:`10.1093/bioinformatics/btt599`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-targetscore

and update with::

   conda update bioconductor-targetscore



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-targetscore.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-targetscore/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-targetscore/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-targetscore/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-targetscore
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-targetscore/status
                :target: https://quay.io/repository/biocontainers/bioconductor-targetscore

