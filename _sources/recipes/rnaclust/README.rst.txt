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

      

   
   :depends on libgcc: 
   :depends on locarna: 
   :depends on perl: ``5.22.0*``
   :depends on viennarna: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install rnaclust

to add into an existing workspace instead, run::

    pixi add rnaclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnaclust

Alternatively, to install into a new environment, run::

    conda create -n envname rnaclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnaclust:<tag>

(see `rnaclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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