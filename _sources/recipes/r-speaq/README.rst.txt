.. _`r-speaq`:

r-speaq
=======

|downloads|

We introduce a novel suite of informatics tools for the quantitative analysis of NMR metabolomic profile data. The core of the processing cascade is a novel peak alignment algorithm, called hierarchical Cluster-based Peak Alignment (CluPA). The algorithm aligns a target spectrum to the reference spectrum in a top-down fashion by building a hierarchical cluster tree from peak lists of reference and target spectra and then dividing the spectra into smaller segments based on the most distant clusters of the tree. To reduce the computational time to estimate the spectral misalignment, the method makes use of Fast Fourier Transformation (FFT) cross-correlation. Since the method returns a high-quality alignment, we can propose a simple methodology to study the variability of the NMR spectra. For each aligned NMR data point the ratio of the between-group and within-group sum of squares (BW-ratio) is calculated to quantify the difference in variability between and within predefined groups of NMR spectra. This differential analysis is related to the calculation of the F-statistic or a one-way ANOVA, but without distributional assumptions. Statistical inference based on the BW-ratio is achieved by bootstrapping the null distribution from the experimental data. See Vu et al. (2011)<DOI:10.1186/1471-2105-12-405> for further information.

======== ===========
Home     https://github.com/nghiavtr/speaq
Versions 1.2.1, 1.2.3
License  Apache License 2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-speaq
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-speaq

and update with::

   conda update r-speaq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-speaq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-speaq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-speaq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-speaq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-speaq
.. |docker| image:: https://quay.io/repository/biocontainers/r-speaq/status
                :target: https://quay.io/repository/biocontainers/r-speaq


