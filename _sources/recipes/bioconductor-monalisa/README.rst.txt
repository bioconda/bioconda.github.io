:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-monalisa'
.. highlight: bash

bioconductor-monalisa
=====================

.. conda:recipe:: bioconductor-monalisa
   :replaces_section_title:
   :noindex:

   Binned Motif Enrichment Analysis and Visualization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/monaLisa.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-monalisa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-monalisa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-monalisa/meta.yaml>`_

   Useful functions to work with sequence motifs in the analysis of genomics data. These include methods to annotate genomic regions or sequences with predicted motif hits and to identify motifs that drive observed changes in accessibility or expression. Functions to produce informative visualizations of the obtained results are also provided.


.. conda:package:: bioconductor-monalisa

   |downloads_bioconductor-monalisa| |docker_bioconductor-monalisa|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-tfbstools: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-cli: 
   :depends on r-ggplot2: ``>=4.0.0``
   :depends on r-glmnet: 
   :depends on r-rlang: 
   :depends on r-rsqlite: 
   :depends on r-stabs: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-monalisa

to add into an existing workspace instead, run::

    pixi add bioconductor-monalisa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-monalisa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-monalisa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-monalisa:<tag>

(see `bioconductor-monalisa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-monalisa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-monalisa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-monalisa
   :alt:   (downloads)
.. |docker_bioconductor-monalisa| image:: https://quay.io/repository/biocontainers/bioconductor-monalisa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-monalisa
.. _`bioconductor-monalisa/tags`: https://quay.io/repository/biocontainers/bioconductor-monalisa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-monalisa";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-monalisa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-monalisa/README.html