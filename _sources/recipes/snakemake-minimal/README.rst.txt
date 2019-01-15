.. _`snakemake-minimal`:

snakemake-minimal
=================

|downloads|

Snakemake is a workflow management system that aims to reduce the complexity of creating workflows by providing a fast and comfortable execution environment\, together with a clean and modern specification language in python style. Snakemake workflows are essentially Python scripts extended by declarative code to define rules. Rules describe how to create output files from input files. This package provides the core snakemake functionility. For features like reports and remote files\, check out the snakemake package which provides all optional dependencies.

============= ===========
Home          https://snakemake.readthedocs.io
Versions      5.4.0, 5.3.1, 5.3.0, 5.2.4, 5.2.2, 5.2.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-minimal



Links         doi: :doi:`10.1093/bioinformatics/bts480`, biotools: :biotools:`Snakemake`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install snakemake-minimal

and update with::

   conda update snakemake-minimal



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/snakemake-minimal.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/snakemake-minimal/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/snakemake-minimal/README.html
.. |downloads| image:: https://anaconda.org/bioconda/snakemake-minimal/badges/downloads.svg
               :target: https://anaconda.org/bioconda/snakemake-minimal
.. |docker| image:: https://quay.io/repository/biocontainers/snakemake-minimal/status
                :target: https://quay.io/repository/biocontainers/snakemake-minimal

