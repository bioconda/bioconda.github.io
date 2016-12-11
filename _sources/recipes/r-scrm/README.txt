.. _`r-scrm`:

r-scrm
======

|downloads|

A coalescent simulator that allows the rapid simulation of biological sequences under neutral models of evolution. Different to other coalescent based simulations, it has an optional approximation parameter that allows for high accuracy while maintaining a linear run time cost for long sequences. It is optimized for simulating massive data sets as produced by Next-Generation Sequencing technologies for up to several thousand sequences.

======== ===========
Home     https://github.com/scrm/scrm-r
Versions 1.6.0_2
License  GPL (>= 3)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scrm
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-scrm

and update with::

   conda update r-scrm



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-scrm.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-scrm/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-scrm/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-scrm/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-scrm
.. |docker| image:: https://quay.io/repository/biocontainers/r-scrm/status
                :target: https://quay.io/repository/biocontainers/r-scrm


