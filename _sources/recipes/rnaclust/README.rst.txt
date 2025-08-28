:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaclust'
.. highlight: bash

rnaclust
========

.. conda:recipe:: rnaclust
   :replaces_section_title:
   :noindex:

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

   :versions:
      
      

      ``1.3-0``

      

   
   :depends libgcc: 
   :depends locarna: 
   :depends perl: ``5.22.0*``
   :depends viennarna: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rnaclust

   and update with::

      mamba update rnaclust

  To create a new environment, run::

      mamba create --name myenvname rnaclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnaclust:<tag>

   (see `rnaclust/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaclust| image:: https://img.shields.io/conda/dn/bioconda/rnaclust.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaclust
   :alt:   (downloads)
.. |docker_rnaclust| image:: https://quay.io/repository/biocontainers/rnaclust/status
   :target: https://quay.io/repository/biocontainers/rnaclust
.. _`rnaclust/tags`: https://quay.io/repository/biocontainers/rnaclust?tab=tags


.. raw:: html

    <script>
        var package = "rnaclust";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaclust/README.html