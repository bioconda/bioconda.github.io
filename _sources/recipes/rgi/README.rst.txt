.. _`rgi`:

rgi
===

|downloads|

This tool provides a preliminary annotation of your DNA sequence(s) based upon the data available in The Comprehensive Antibiotic Resistance Database (CARD). Hits to genes tagged with Antibiotic Resistance ontology terms will be highlighted. As CARD expands to include more pathogens, genomes, plasmids, and ontology terms this tool will grow increasingly powerful in providing first-pass detection of antibiotic resistance associated genes. See license at CARD website

======== ===========
Home     https://card.mcmaster.ca
Versions 3.1.0, 3.1.1
License  https://card.mcmaster.ca/about
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgi
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install rgi

and update with::

   conda update rgi



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/rgi.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/rgi/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/rgi/README.html
.. |downloads| image:: https://anaconda.org/bioconda/rgi/badges/downloads.svg
               :target: https://anaconda.org/bioconda/rgi
.. |docker| image:: https://quay.io/repository/biocontainers/rgi/status
                :target: https://quay.io/repository/biocontainers/rgi


