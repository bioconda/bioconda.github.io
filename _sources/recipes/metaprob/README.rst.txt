.. _`metaprob`:

metaprob
========

|downloads|

assembly\-assisted tool for un\-supervised metagenomic binning

======== ===========
Home     https://bitbucket.org/samu661/metaprob/
Versions 2
License  copyright
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaprob

======== ===========

MetaProb is a novel assembly\-assisted tool for un\-supervised metagenomic
binning\. The novelty of MetaProb derives from solving a few important
problems\: how to divide reads into groups of independent reads\, so that
l\-mer frequencies are not overestimated\; how to convert l\-mer counts into
probabilistic sequence signatures\, that will correct for variable
distribution of l\-mers\, and for unbalanced groups of reads\, in order to
produce better estimates of the underlying genome statistic\. We show that
MetaProb is effective for both simulated and real datasets\. It can
accurately \(with F\-measures of 87 for short reads and 97 long reads\) and
efficiently bin short and long reads with varying abundance ratios\.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install metaprob

and update with::

   conda update metaprob



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/metaprob.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/metaprob/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/metaprob/README.html
.. |downloads| image:: https://anaconda.org/bioconda/metaprob/badges/downloads.svg
               :target: https://anaconda.org/bioconda/metaprob
.. |docker| image:: https://quay.io/repository/biocontainers/metaprob/status
                :target: https://quay.io/repository/biocontainers/metaprob

