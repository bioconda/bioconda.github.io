:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epigrahmm'
.. highlight: bash

bioconductor-epigrahmm
======================

.. conda:recipe:: bioconductor-epigrahmm
   :replaces_section_title:
   :noindex:

   Epigenomic R\-based analysis with hidden Markov models

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epigraHMM.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epigrahmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigrahmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigrahmm/meta.yaml>`_

   epigraHMM provides a set of tools for the analysis of epigenomic data based on hidden Markov Models. It contains two separate peak callers\, one for consensus peaks from biological or technical replicates\, and one for differential peaks from multi\-replicate multi\-condition experiments. In differential peak calling\, epigraHMM provides window\-specific posterior probabilities associated with every possible combinatorial pattern of read enrichment across conditions.


.. conda:package:: bioconductor-epigrahmm

   |downloads_bioconductor-epigrahmm| |docker_bioconductor-epigrahmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.2-0</code>,  <code>1.6.4-1</code>,  <code>1.6.4-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bamsignals: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-bamsignals: ``>=1.42.0,<1.43.0a0``
   :depends on bioconductor-csaw: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-csaw: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-greylistchip: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-greylistchip: ``>=1.42.0,<1.43.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rhdf5: ``>=2.54.1,<2.55.0a0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-pheatmap: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-scales: 

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

    pixi global install bioconductor-epigrahmm

to add into an existing workspace instead, run::

    pixi add bioconductor-epigrahmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epigrahmm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epigrahmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epigrahmm:<tag>

(see `bioconductor-epigrahmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epigrahmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epigrahmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epigrahmm
   :alt:   (downloads)
.. |docker_bioconductor-epigrahmm| image:: https://quay.io/repository/biocontainers/bioconductor-epigrahmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epigrahmm
.. _`bioconductor-epigrahmm/tags`: https://quay.io/repository/biocontainers/bioconductor-epigrahmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epigrahmm";
        var versions = ["1.18.0","1.18.0","1.18.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epigrahmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epigrahmm/README.html