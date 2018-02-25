.. _`bioconductor-harman`:

bioconductor-harman
===================

|downloads|

Harman is a PCA and constrained optimisation based technique that maximises the removal of batch effects from datasets\, with the constraint that the probability of overcorrection \(i\.e\. removing genuine biological signal along with batch noise\) is kept to a fraction which is set by the end\-user\.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/Harman.html
Versions 1.6.0
License  GPL-3 + file LICENCE
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harman

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-harman

and update with::

   conda update bioconductor-harman



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-harman.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-harman/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-harman/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-harman/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-harman
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-harman/status
                :target: https://quay.io/repository/biocontainers/bioconductor-harman

