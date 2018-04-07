.. _`mikado`:

mikado
======

|downloads|

A Python3 annotation program to select the best gene model in each locus

============= ===========
Home          https://github.com/lucventurini/mikado
Versions      1.0.2, 1.1.1
License       GNU Lesser General Public License v3 or later (LGPLv3+)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado

Documentation http://mikado.readthedocs.io/en/latest/


Development   https://github.com/lucventurini/mikado


============= ===========

Mikado is a lightweight Python3 pipeline whose purpose is to facilitate the identification
of expressed loci from RNA\-Seq data \* and to select the best models in each locus.

The logic of the pipeline is as follows\:

1. In a first step\, the annotation \(provided in GTF\/GFF3 format\) is parsed to locate \*superloci\* of overlapping features on the \*\*same strand\*\*.
2. The superloci are divided into different \*subloci\*\, each of which is defined as follows\:

    \* For multiexonic transcripts\, to belong to the same sublocus they must share at least a splicing junction \(i.e. an intron\)
    \* For monoexonic transcripts\, they must overlap for at least one base pair
    \* All subloci must contain either only multiexonic or only monoexonic transcripts
3. In each sublocus\, the pipeline selects the best transcript according to a user\-defined prioritization scheme.
4. The resulting \*monosubloci\* are merged together\, if applicable\, into \*monosubloci\_holders\*
5. The best non\-overlapping transcripts are selected\, in order to define the \*loci\* contained inside the superlocus.

    \* At this stage\, monoexonic and multiexonic transcript are checked for overlaps
    \* Moreover\, two multiexonic transcripts are considered to belong to the same locus if they share a splice \*site\* \(not junction\)
    
6. Once the loci have been defined\, the program backtracks and looks for transcripts which can be assigned unambiguously to a single locus and constitute valid alternative splicing isoforms of the main transcripts. 

The criteria used to select the \"\*best\*\" transcript are left to the user\'s discretion\, using specific configuration files.

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install mikado

and update with::

   conda update mikado



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/mikado.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/mikado/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/mikado/README.html
.. |downloads| image:: https://anaconda.org/bioconda/mikado/badges/downloads.svg
               :target: https://anaconda.org/bioconda/mikado
.. |docker| image:: https://quay.io/repository/biocontainers/mikado/status
                :target: https://quay.io/repository/biocontainers/mikado

