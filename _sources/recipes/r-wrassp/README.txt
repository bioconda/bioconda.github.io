.. _`r-wrassp`:

r-wrassp
========

|downloads|

A wrapper around Michel Scheffers's libassp (Advanced Speech Signal Processor). The libassp library aims at providing functionality for handling speech signal files in most common audio formats and for performing analyses common in phonetic science/speech science. This includes the calculation of formants, fundamental frequency, root mean square, auto correlation, a variety of spectral analyses, zero crossing rate, filtering etc. This wrapper provides R with a large subset of libassp's signal processing functions and provides them to the user in a (hopefully) user-friendly manner.

======== ===========
Home     https://github.com/IPS-LMU/wrassp
Versions 0.1.4
License  GPL (>= 3)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wrassp
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-wrassp

and update with::

   conda update r-wrassp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-wrassp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-wrassp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-wrassp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-wrassp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-wrassp
.. |docker| image:: https://quay.io/repository/biocontainers/r-wrassp/status
                :target: https://quay.io/repository/biocontainers/r-wrassp


