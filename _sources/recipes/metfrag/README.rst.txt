.. _`metfrag`:

metfrag
=======

|downloads|

MetFrag is a freely available software for the annotation of high precision tandem mass spectra of metabolites which is a first and critical step for the identification of a molecular structure. Candidate molecules of different databases are fragmented in silico and matched against mass to charge values. A score calculated using the fragment peak matches gives hints to the quality of the candidate spectrum assignment.

======== ===========
Home     http://c-ruttkies.github.io/MetFrag/
Versions 
License  GNU Lesser General Public License version 2.1 or later.
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metfrag
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install metfrag

and update with::

   conda update metfrag



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/metfrag.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/metfrag/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/metfrag/README.html
.. |downloads| image:: https://anaconda.org/bioconda/metfrag/badges/downloads.svg
               :target: https://anaconda.org/bioconda/metfrag
.. |docker| image:: https://quay.io/repository/biocontainers/metfrag/status
                :target: https://quay.io/repository/biocontainers/metfrag


