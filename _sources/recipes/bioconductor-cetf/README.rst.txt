:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cetf'
.. highlight: bash

bioconductor-cetf
=================

.. conda:recipe:: bioconductor-cetf
   :replaces_section_title:
   :noindex:

   Coexpression for Transcription Factors using Regulatory Impact Factors and Partial Correlation and Information Theory analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CeTF.html
   :license: GPL-3
   :recipe: /`bioconductor-cetf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cetf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cetf/meta.yaml>`_

   This package provides the necessary functions for performing the Partial Correlation coefficient with Information Theory \(PCIT\) \(Reverter and Chan 2008\) and Regulatory Impact Factors \(RIF\) \(Reverter et al. 2010\) algorithm. The PCIT algorithm identifies meaningful correlations to define edges in a weighted network and can be applied to any correlation\-based network including but not limited to gene co\-expression networks\, while the RIF algorithm identify critical Transcription Factors \(TF\) from gene expression data. These two algorithms when combined provide a very relevant layer of information for gene expression studies \(Microarray\, RNA\-seq and single\-cell RNA\-seq data\).


.. conda:package:: bioconductor-cetf

   |downloads_bioconductor-cetf| |docker_bioconductor-cetf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.9.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.4,<4.19.0a0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.1,<2.27.0a0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-deseq2: ``>=1.50.2,<1.51.0a0``
   :depends on bioconductor-rcy3: ``>=2.30.0,<2.31.0``
   :depends on bioconductor-rcy3: ``>=2.30.1,<2.31.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-genomictools.filehandler: 
   :depends on r-ggally: 
   :depends on r-ggnetwork: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggrepel: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-network: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 

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

    pixi global install bioconductor-cetf

to add into an existing workspace instead, run::

    pixi add bioconductor-cetf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cetf

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cetf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cetf:<tag>

(see `bioconductor-cetf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cetf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cetf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cetf
   :alt:   (downloads)
.. |docker_bioconductor-cetf| image:: https://quay.io/repository/biocontainers/bioconductor-cetf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cetf
.. _`bioconductor-cetf/tags`: https://quay.io/repository/biocontainers/bioconductor-cetf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cetf";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cetf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cetf/README.html