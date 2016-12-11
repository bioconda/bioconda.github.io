.. _`r-ipo`:

r-ipo
=====

|downloads|

The outcome of XCMS data processing strongly depends on the parameter settings. IPO ('Isotopologue Parameter Optimization') is a parameter optimization tool that is applicable for different kinds of samples and liquid chromatography coupled to high resolution mass spectrometry devices, fast and free of labeling steps. IPO uses natural, stable 13C isotopes to calculate a peak picking score. Retention time correction is optimized by minimizing the relative retention time differences within features and grouping parameters are optimized by maximizing the number of features showing exactly one peak from each injection of a pooled sample. The different parameter settings are achieved by design of experiment. The resulting scores are evaluated using response surface models.

======== ===========
Home     https://github.com/glibiseller/IPO
Versions 1.7.5
License  GPL (>= 2) + file LICENSE
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ipo
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-ipo

and update with::

   conda update r-ipo



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-ipo.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-ipo/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-ipo/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-ipo/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-ipo
.. |docker| image:: https://quay.io/repository/biocontainers/r-ipo/status
                :target: https://quay.io/repository/biocontainers/r-ipo


