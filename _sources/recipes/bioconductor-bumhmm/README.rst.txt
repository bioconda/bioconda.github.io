.. _`bioconductor-bumhmm`:

bioconductor-bumhmm
===================

|downloads|

This is a probabilistic modelling pipeline for computing per\- nucleotide posterior probabilities of modification from the data collected in structure probing experiments. The model supports multiple experimental replicates and empirically corrects coverage\- and sequence\-dependent biases. The model utilises the measure of a \"drop\-off rate\" for each nucleotide\, which is compared between replicates through a log\-ratio \(LDR\). The LDRs between control replicates define a null distribution of variability in drop\-off rate observed by chance and LDRs between treatment and control replicates gets compared to this distribution. Resulting empirical p\-values \(probability of being \"drawn\" from the null distribution\) are used as observations in a Hidden Markov Model with a Beta\-Uniform Mixture model used as an emission model. The resulting posterior probabilities indicate the probability of a nucleotide of having being modified in a structure probing experiment.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BUMHMM.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-bumhmm/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bumhmm

and update with::

   conda update bioconductor-bumhmm



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bumhmm.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bumhmm/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bumhmm/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bumhmm/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bumhmm
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bumhmm/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bumhmm

