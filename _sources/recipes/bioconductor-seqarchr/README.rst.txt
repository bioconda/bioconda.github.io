:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqarchr'
.. highlight: bash

bioconductor-seqarchr
=====================

.. conda:recipe:: bioconductor-seqarchr
   :replaces_section_title:
   :noindex:

   Identify Different Architectures of Sequence Elements

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/seqArchR.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-seqarchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarchr/meta.yaml>`_

   seqArchR enables unsupervised discovery of \_de novo\_ clusters with characteristic sequence architectures characterized by position\-specific motifs or composition of stretches of nucleotides\, e.g.\, CG\-richness. seqArchR does \_not\_ require any specifications w.r.t. the number of clusters\, the length of any individual motifs\, or the distance between motifs if and when they occur in pairs\/groups\; it directly detects them from the data. seqArchR uses non\-negative matrix factorization \(NMF\) as its backbone\, and employs a chunking\-based iterative procedure that enables processing of large sequence collections efficiently. Wrapper functions are provided for visualizing cluster architectures as sequence logos.


.. conda:package:: bioconductor-seqarchr

   |downloads_bioconductor-seqarchr| |docker_bioconductor-seqarchr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cli: 
   :depends on r-cluster: 
   :depends on r-cvtools: ``>=0.3.2``
   :depends on r-fpc: 
   :depends on r-ggplot2: ``>=3.1.1``
   :depends on r-ggseqlogo: ``>=0.1``
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-prettyunits: 
   :depends on r-reshape2: ``>=1.4.3``
   :depends on r-reticulate: ``>=1.22``

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

    pixi global install bioconductor-seqarchr

to add into an existing workspace instead, run::

    pixi add bioconductor-seqarchr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-seqarchr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-seqarchr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-seqarchr:<tag>

(see `bioconductor-seqarchr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-seqarchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqarchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqarchr
   :alt:   (downloads)
.. |docker_bioconductor-seqarchr| image:: https://quay.io/repository/biocontainers/bioconductor-seqarchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqarchr
.. _`bioconductor-seqarchr/tags`: https://quay.io/repository/biocontainers/bioconductor-seqarchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqarchr";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqarchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqarchr/README.html