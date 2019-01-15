.. _`sbpipe`:

sbpipe
======

|downloads|

SBpipe is a collection of pipelines for systems modelling of biological networks. It allows mathematical modellers to automatically repeat the tasks of model simulation and parameter estimation\, and extract robustness information from these repeat sequences in a solid and consistent manner\, facilitating model development and analysis. SBpipe can run models implemented in COPASI\, Python or coded in any other programming language using Python as a wrapper module. Pipelines can run on multicore computers\, Sun Grid Engine \(SGE\)\, Load Sharing Facility \(LSF\) clusters\, or via Snakemake.

============= ===========
Home          http://sbpipe.readthedocs.io
Versions      4.21.0, 4.20.0, 4.18.0
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbpipe



Links         doi: :doi:`10.1186/s12918-017-0423-3`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install sbpipe

and update with::

   conda update sbpipe



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/sbpipe.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/sbpipe/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/sbpipe/README.html
.. |downloads| image:: https://anaconda.org/bioconda/sbpipe/badges/downloads.svg
               :target: https://anaconda.org/bioconda/sbpipe
.. |docker| image:: https://quay.io/repository/biocontainers/sbpipe/status
                :target: https://quay.io/repository/biocontainers/sbpipe

