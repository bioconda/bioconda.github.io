.. _`r-rocr`:

r-rocr
======

|downloads|

ROC graphs, sensitivity/specificity curves, lift charts, and precision/recall plots are popular examples of trade-off visualizations for specific pairs of performance measures. ROCR is a flexible tool for creating cutoff-parameterized 2D performance curves by freely combining two from over 25 performance measures (new performance measures can be added using a standard interface). Curves from different cross-validation or bootstrapping runs can be averaged by different methods, and standard deviations, standard errors or box plots can be used to visualize the variability across the runs. The parameterization can be visualized by printing cutoff values at the corresponding curve positions, or by coloring the curve according to cutoff. All components of a performance plot can be quickly adjusted using a flexible parameter dispatching mechanism. Despite its flexibility, ROCR is easy to use, with only three commands and reasonable default values for all optional parameters.

======== ===========
Home     http://rocr.bioinf.mpi-sb.mpg.de/
Versions 1.0_7
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rocr
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-rocr

and update with::

   conda update r-rocr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-rocr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-rocr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-rocr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-rocr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-rocr
.. |docker| image:: https://quay.io/repository/biocontainers/r-rocr/status
                :target: https://quay.io/repository/biocontainers/r-rocr


