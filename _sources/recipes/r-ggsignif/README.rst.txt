.. _`r-ggsignif`:

r-ggsignif
==========

|downloads|

Enrich your 'ggplots' with group-wise comparisons. This package provides an easy way to indicate if two groups are significantly different. Commonly this is shown by a bracket on top connecting the groups of interest which itself is annotated with the level of significance (NS, *, **, ***). The package provides a single layer (geom_signif()) that takes the groups for comparison and the test (t.test(), wilcox.text() etc.) as arguments and adds the annotation to the plot.

======== ===========
Home     https://github.com/const-ae/ggsignif
Versions 0.4.0
License  GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggsignif
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-ggsignif

and update with::

   conda update r-ggsignif



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-ggsignif.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-ggsignif/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-ggsignif/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-ggsignif/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-ggsignif
.. |docker| image:: https://quay.io/repository/biocontainers/r-ggsignif/status
                :target: https://quay.io/repository/biocontainers/r-ggsignif


