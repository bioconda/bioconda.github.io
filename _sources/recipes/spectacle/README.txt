.. _`spectacle`:

spectacle
=========

|downloads|

This software implements a spectral learning algorithm for hidden Markov models for epigenomic data. Please see our paper for further details: Song, J and Chen, K. C. Spectacle: fast chromatin state annotation using spectral learning. Genome Biology, 16:33, 2015. http://genomebiology.com/2015/16/1/33

======== ===========
Home     https://github.com/jiminsong/Spectacle
Versions 1.4
License  GPLv3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectacle
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install spectacle

and update with::

   conda update spectacle

Notes
-----

The Spectacle github repo weighs in at around 500MB, a large portion of which is data files. These have been removed from the conda recipe, but a script (download_spectacle_data.sh) has been included here which will download those files from github.  In addition, a wrapper script `Spectacle.sh` has been included in this recipe and should be used when calling the program.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/spectacle.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/spectacle/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/spectacle/README.html
.. |downloads| image:: https://anaconda.org/bioconda/spectacle/badges/downloads.svg
               :target: https://anaconda.org/bioconda/spectacle
.. |docker| image:: https://quay.io/repository/biocontainers/spectacle/status
                :target: https://quay.io/repository/biocontainers/spectacle


