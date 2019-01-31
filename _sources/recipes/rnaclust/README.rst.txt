.. _`rnaclust`:

rnaclust
========

|downloads|

A tool for clustering of RNAs based on their secondary structures using LocARNA

============= ===========
Home          http://www.bioinf.uni-leipzig.de/~kristin/Software/RNAclust/
Versions      1.3
License       GPL-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//rnaclust/meta.yaml



Links         biotools: :biotools:`RNAclust`

============= ===========

RNAclust is a perl script summarizing all the single steps required for
clustering of structured RNA motifs\, i.e. identifying groups of RNA
sequences sharing a secondary structure motif. It requires as input a
multiple FASTA file. In the first step for each input sequence the base
pair probability matrix of its secondary structure distribution is
calculated \(using RNAfold from the Vienna RNA package\). Secondly\, for
each pair of base pair probability matrices a sequence\-structure alignment
is calculated using LocARNA. Lastly\, a hierarchical cluster\-tree \(in
NEWICK format\) is derived by WPGMA clustering of the pairwise alignment
distances and the optimal number of clusters is calculated from the tree.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install rnaclust

and update with::

   conda update rnaclust



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/rnaclust.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/rnaclust/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/rnaclust/README.html
.. |downloads| image:: https://anaconda.org/bioconda/rnaclust/badges/downloads.svg
               :target: https://anaconda.org/bioconda/rnaclust
.. |docker| image:: https://quay.io/repository/biocontainers/rnaclust/status
                :target: https://quay.io/repository/biocontainers/rnaclust

