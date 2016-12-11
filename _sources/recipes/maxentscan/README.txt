.. _`maxentscan`:

maxentscan
==========

|downloads|

MaxEntScan is based on the approach for modeling the sequences of short sequence motifs such as those involved in RNA splicing which simultaneously accounts for non-adjacent as well as adjacent dependencies between positions. This method is based on the 'Maximum Entropy Principle' and generalizes most previous probabilistic models of sequence motifs such as weight matrix models and inhomogeneous Markov models.

======== ===========
Home     http://genes.mit.edu/burgelab/maxent/Xmaxentscan_scoreseq.html
Versions 0_2004.04.21
License  
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxentscan
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install maxentscan

and update with::

   conda update maxentscan

Notes
-----

Due to the generic name of the included scripts, "maxentscan_" has been prefixed all executables, e.g. score3.pl can be called as maxentscan_score3.pl.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/maxentscan.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/maxentscan/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/maxentscan/README.html
.. |downloads| image:: https://anaconda.org/bioconda/maxentscan/badges/downloads.svg
               :target: https://anaconda.org/bioconda/maxentscan
.. |docker| image:: https://quay.io/repository/biocontainers/maxentscan/status
                :target: https://quay.io/repository/biocontainers/maxentscan


