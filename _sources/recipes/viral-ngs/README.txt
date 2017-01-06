.. _`viral-ngs`:

viral-ngs
=========

|downloads|

A set of scripts and tools for the analysis of viral NGS data

======== ===========
Home     https://github.com/broadinstitute/viral-ngs
Versions 1.10.1, 1.11.0, 1.12.0, 1.12.1, 1.12.2, 1.13.2, 1.13.3, 1.13.4, 1.5.4, 1.5.5, 1.6.0, 1.6.1, 1.7.0, 1.7.1, 1.8.0, 1.9.0, 1.9.1, 1.9.2
License  https://raw.githubusercontent.com/broadinstitute/viral-ngs/master/LICENSE
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral-ngs
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install viral-ngs

and update with::

   conda update viral-ngs

Notes
-----

This package makes use of GATK. Due to license restrictions, this recipe cannot distribute and install GATK directly as a dependency. To fully install GATK, you must download a licensed copy of GATK from the Broad Institute ( https://www.broadinstitute.org/gatk/download/ ), install this package (which will install the GATK wrapper package), and call “gatk-register /path/to/GenomeAnalysisTK[-$PKG_VERSION.tar.bz2|.jar]”, which will copy GATK into your conda environment. This package also makes use of Novoalign, which can be installed successfully as a conda package, however the unlicensed version of Novoalign runs in single-threaded mode. To enable multithreaded operation, it is necessary to supply a "novoalign.lic" license file and call "novoalign-license-register" to copy the license file into the conda environment.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/viral-ngs.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/viral-ngs/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/viral-ngs/README.html
.. |downloads| image:: https://anaconda.org/bioconda/viral-ngs/badges/downloads.svg
               :target: https://anaconda.org/bioconda/viral-ngs
.. |docker| image:: https://quay.io/repository/biocontainers/viral-ngs/status
                :target: https://quay.io/repository/biocontainers/viral-ngs


