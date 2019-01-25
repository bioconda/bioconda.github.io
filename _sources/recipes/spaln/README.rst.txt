.. _`spaln`:

spaln
=====

|downloads|

Map and align a set of cDNA\/EST or protein sequences onto a genome

============= ===========
Home          http://www.genome.ist.i.kyoto-u.ac.jp/~aln_user/spaln/
Versions      2.3.2
License       GPL-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/spaln/meta.yaml


Development   https://github.com/ogotoh/spaln


============= ===========

Spaln \(space\-efficient spliced alignment\) is a stand\-alone program that maps
and aligns a set of cDNA or protein sequences onto a whole genomic sequence
in a single job. Spaln also performs spliced or ordinary alignment after
rapid similarity search against a protein sequence database\, if a genomic segment
or an amino acid sequence is given as a query.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install spaln

and update with::

   conda update spaln



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/spaln.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/spaln/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/spaln/README.html
.. |downloads| image:: https://anaconda.org/bioconda/spaln/badges/downloads.svg
               :target: https://anaconda.org/bioconda/spaln
.. |docker| image:: https://quay.io/repository/biocontainers/spaln/status
                :target: https://quay.io/repository/biocontainers/spaln

