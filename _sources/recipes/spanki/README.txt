.. _`spanki`:

spanki
======

|downloads|

Spanki is a set of tools to facilitate analysis of alternative splicing from RNA-Seq data. Spanki compiles quantitative and qualitative information about junction alignments from input BAM files, and analyzes junction-level splicing along with pairwise-defined splicing events. A simulator is also included to evaluate junction detection performance.

======== ===========
Home     http://www.cbcb.umd.edu/software/spanki/
Versions 0.5.1
License  GPLv3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spanki
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install spanki

and update with::

   conda update spanki



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/spanki.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/spanki/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/spanki/README.html
.. |downloads| image:: https://anaconda.org/bioconda/spanki/badges/downloads.svg
               :target: https://anaconda.org/bioconda/spanki
.. |docker| image:: https://quay.io/repository/biocontainers/spanki/status
                :target: https://quay.io/repository/biocontainers/spanki


