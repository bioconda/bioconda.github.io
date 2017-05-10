.. _`r-checkpoint`:

r-checkpoint
============

|downloads|

The goal of checkpoint is to solve the problem of package reproducibility in R. Specifically, checkpoint allows you to install packages as they existed on CRAN on a specific snapshot date as if you had a CRAN time machine. To achieve reproducibility, the checkpoint() function installs the packages required or called by your project and scripts to a local library exactly as they existed at the specified point in time. Only those packages are available to your project, thereby avoiding any package updates that came later and may have altered your results. In this way, anyone using checkpoint's checkpoint() can ensure the reproducibility of your scripts or projects at any time. To create the snapshot archives, once a day (at midnight UTC) Microsoft refreshes the Austria CRAN mirror on the "Microsoft R Archived Network" server (<https://mran.microsoft.com/>). Immediately after completion of the rsync mirror process, the process takes a snapshot, thus creating the archive. Snapshot archives exist starting from 2014-09-17.

======== ===========
Home     https://github.com/RevolutionAnalytics/checkpoint
Versions 0.4.0
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-checkpoint
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-checkpoint

and update with::

   conda update r-checkpoint



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-checkpoint.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-checkpoint/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-checkpoint/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-checkpoint/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-checkpoint
.. |docker| image:: https://quay.io/repository/biocontainers/r-checkpoint/status
                :target: https://quay.io/repository/biocontainers/r-checkpoint


