.. _`bioconductor-birte`:

bioconductor-birte
==================

|downloads|

Expression levels of mRNA molecules are regulated by different processes\, comprising inhibition or activation by transcription factors and post\-transcriptional degradation by microRNAs. biRte uses regulatory networks of TFs\, miRNAs and possibly other factors\, together with mRNA\, miRNA and other available expression data to predict the relative influence of a regulator on the expression of its target genes. Inference is done in a Bayesian modeling framework using Markov\-Chain\-Monte\-Carlo. A special feature is the possibility for follow\-up network reverse engineering between active regulators.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/birte.html
Versions      1.18.0, 1.16.0, 1.14.0, 1.12.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-birte/meta.yaml



Links         biotools: :biotools:`birte`, doi: :doi:`10.1093/bioinformatics/btv379`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-birte

and update with::

   conda update bioconductor-birte



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-birte.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-birte/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-birte/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-birte/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-birte
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-birte/status
                :target: https://quay.io/repository/biocontainers/bioconductor-birte

