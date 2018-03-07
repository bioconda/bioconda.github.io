.. _`mvp`:

mvp
===

|downloads|

detect creation\/destruction of sequence motifs as a result of mutations

============= ===========
Home          https://gitlab.com/LPCDRP/motif-variants
Versions      0.4.1, 0.4.3
License       GPLv3+
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvp



============= ===========

Sequence variation may cause the appearance or disappearance of certain motifs. Since motifs can be recognition sites for biological functions such as regulation or DNA modification\, their gain and loss can have additional consequences. Using a list of variants in variant call format\, the corresponding reference sequence\, and a set of motifs to search for\,mvp \(motif\-variant probe\) identifies variants responsible for changing the number of occurrences of these motifs in the sequence. mvp can process both nucleotide and amino acid sequences.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install mvp

and update with::

   conda update mvp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/mvp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/mvp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/mvp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/mvp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/mvp
.. |docker| image:: https://quay.io/repository/biocontainers/mvp/status
                :target: https://quay.io/repository/biocontainers/mvp

