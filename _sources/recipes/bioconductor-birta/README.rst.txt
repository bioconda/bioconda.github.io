.. _`bioconductor-birta`:

bioconductor-birta
==================

|downloads|

Expression levels of mRNA molecules are regulated by different processes\, comprising inhibition or activation by transcription factors and post\-transcriptional degradation by microRNAs\. birta \(Bayesian Inference of Regulation of Transcriptional Activity\) uses the regulatory networks of TFs and miRNAs together with mRNA and miRNA expression data to predict switches in regulatory activity between two conditions\. A Bayesian network is used to model the regulatory structure and Markov\-Chain\-Monte\-Carlo is applied to sample the activity states\.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/birta.html
Versions      1.20.0, 1.22.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birta



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-birta

and update with::

   conda update bioconductor-birta



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-birta.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-birta/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-birta/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-birta/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-birta
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-birta/status
                :target: https://quay.io/repository/biocontainers/bioconductor-birta

