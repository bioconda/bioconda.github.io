.. _`lefse`:

lefse
=====

|downloads|

LDA Effect Size (LEfSe) (Segata et. al 2010) is an algorithm for high-dimensional biomarker discovery and explanation that identifies genomic features (genes, pathways, or taxa) characterizing the differences between two or more biological conditions.

======== ===========
Home     https://bitbucket.org/nsegata/lefse
Versions 1.0.7, 1.0.7.post1
License  
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lefse
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install lefse

and update with::

   conda update lefse

Notes
-----

Prefix with 'lefse-'' some script names that are rather generic: 'format_input.py', 'plot_cladogram.py', 'plot_features.py', 'plot_res.py'.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/lefse.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/lefse/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/lefse/README.html
.. |downloads| image:: https://anaconda.org/bioconda/lefse/badges/downloads.svg
               :target: https://anaconda.org/bioconda/lefse
.. |docker| image:: https://quay.io/repository/biocontainers/lefse/status
                :target: https://quay.io/repository/biocontainers/lefse


