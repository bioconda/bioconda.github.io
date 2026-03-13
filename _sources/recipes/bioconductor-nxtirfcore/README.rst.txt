:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nxtirfcore'
.. highlight: bash

bioconductor-nxtirfcore
=======================

.. conda:recipe:: bioconductor-nxtirfcore
   :replaces_section_title:
   :noindex:

   Core Engine for NxtIRF\: a User\-Friendly Intron Retention and Alternative Splicing Analysis using the IRFinder Engine

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NxtIRFcore.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-nxtirfcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nxtirfcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nxtirfcore/meta.yaml>`_

   Interactively analyses Intron Retention and Alternative Splicing Events \(ASE\) in RNA\-seq data. NxtIRF quantifies ASE events in BAM files aligned to the genome using a splice\-aware aligner such as STAR. The core quantitation algorithm relies on the IRFinder\/C\+\+ engine ported via Rcpp for multi\-platform compatibility. In addition\, NxtIRF provides convenient pipelines for downstream analysis and publication\-ready visualisation tools. Note that NxtIRFcore is now replaced by SpliceWiz in Bioconductor 3.16 onwards.


.. conda:package:: bioconductor-nxtirfcore

   |downloads_bioconductor-nxtirfcore| |docker_bioconductor-nxtirfcore|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends on bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends on bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends on bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends on bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-nxtirfdata: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-zlibbioc: ``>=1.46.0,<1.47.0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-fst: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-plotly: 
   :depends on r-r.utils: 
   :depends on r-rcpp: ``>=1.0.5``
   :depends on r-rcppprogress: 

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

    pixi global install bioconductor-nxtirfcore

to add into an existing workspace instead, run::

    pixi add bioconductor-nxtirfcore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nxtirfcore

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nxtirfcore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nxtirfcore:<tag>

(see `bioconductor-nxtirfcore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nxtirfcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nxtirfcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nxtirfcore
   :alt:   (downloads)
.. |docker_bioconductor-nxtirfcore| image:: https://quay.io/repository/biocontainers/bioconductor-nxtirfcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nxtirfcore
.. _`bioconductor-nxtirfcore/tags`: https://quay.io/repository/biocontainers/bioconductor-nxtirfcore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nxtirfcore";
        var versions = ["1.6.0","1.4.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nxtirfcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nxtirfcore/README.html