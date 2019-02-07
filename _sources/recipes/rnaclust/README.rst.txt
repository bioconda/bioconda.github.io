.. title:: Package Recipe 'rnaclust'
.. highlight: bash


rnaclust
========

.. conda:recipe:: rnaclust
   :replaces_section_title:

   A tool for clustering of RNAs based on their secondary structures using LocARNA

   :homepage: http://www.bioinf.uni-leipzig.de/~kristin/Software/RNAclust/
   :license: GPL / GPL-2.0
   :recipe: /`rnaclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaclust/meta.yaml>`_
   :links: biotools: :biotools:`RNAclust`

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



.. conda:package:: rnaclust

   |downloads_rnaclust| |docker_rnaclust|

   :versions: 1.3

   :depends: :conda:package:`libgcc`  :conda:package:`locarna`  :conda:package:`perl` 5.22.0* :conda:package:`viennarna`  

   :required~by: |required_by_rnaclust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnaclust

   and update with::

      conda update rnaclust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rnaclust


.. |required_by_rnaclust| conda:required_by:: rnaclust
.. |downloads_rnaclust| image:: https://img.shields.io/conda/dn/bioconda/rnaclust.svg?style=flat
   :alt:   (downloads)
.. |docker_rnaclust| image:: https://quay.io/repository/biocontainers/rnaclust/status
   :target: https://quay.io/repository/biocontainers/rnaclust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaclust/README.html

