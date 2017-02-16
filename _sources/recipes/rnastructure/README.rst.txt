.. _`rnastructure`:

rnastructure
============

|downloads|

RNAstructure is a complete package for RNA and DNA secondary structure  prediction and analysis. It includes algorithms for   secondary structure  prediction, including facility to predict base pairing probabilities. It  also can be used to predict bimolecular structures and can predict the  equilibrium binding affinity of an oligonucleotide to a structured RNA  target. This is useful for siRNA design. It can also predict secondary  structures common to two, unaligned sequences, which is much more accurate  than single sequence secondary structure prediction. Finally, RNAstructure  can take a number of different types of experiment mapping data to constrain  or restrain structure prediction. These include chemical mapping, enzymatic  mapping, NMR, and SHAPE data.

======== ===========
Home     http://rna.urmc.rochester.edu/RNAstructure.html
Versions 5.7
License  
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnastructure/5.7
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install rnastructure

and update with::

   conda update rnastructure



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/rnastructure.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/rnastructure/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/rnastructure/README.html
.. |downloads| image:: https://anaconda.org/bioconda/rnastructure/badges/downloads.svg
               :target: https://anaconda.org/bioconda/rnastructure
.. |docker| image:: https://quay.io/repository/biocontainers/rnastructure/status
                :target: https://quay.io/repository/biocontainers/rnastructure


