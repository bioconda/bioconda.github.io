:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intomics'
.. highlight: bash

bioconductor-intomics
=====================

.. conda:recipe:: bioconductor-intomics
   :replaces_section_title:
   :noindex:

   Integrative analysis of multi\-omics data to infer regulatory networks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/IntOMICS.html
   :license: GPL-3
   :recipe: /`bioconductor-intomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intomics/meta.yaml>`_

   IntOMICS is an efficient integrative framework based on Bayesian networks. IntOMICS systematically analyses gene expression \(GE\)\, DNA methylation \(METH\)\, copy number variation \(CNV\) and biological prior knowledge \(B\) to infer regulatory networks. IntOMICS complements the missing biological prior knowledge by so\-called empirical biological knowledge \(empB\)\, estimated from the available experimental data. An automatically tuned MCMC algorithm \(Yang and Rosenthal\, 2017\) estimates model parameters and the empirical biological knowledge. Conventional MCMC algorithm with additional Markov blanket resampling \(MBR\) step \(Su and Borsuk\, 2016\) infers resulting regulatory network structure consisting of three types of nodes\: GE nodes refer to gene expression levels\, CNV nodes refer to associated copy number variations\, and METH nodes refer to associated DNA methylation probe\(s\).


.. conda:package:: bioconductor-intomics

   |downloads_bioconductor-intomics| |docker_bioconductor-intomics|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-bestnormalize: 
   :depends on r-bnlearn: 
   :depends on r-bnstruct: 
   :depends on r-cowplot: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-gplots: 
   :depends on r-igraph: 
   :depends on r-matrixstats: 
   :depends on r-numbers: 
   :depends on r-rcolorbrewer: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-intomics

to add into an existing workspace instead, run::

    pixi add bioconductor-intomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-intomics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-intomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-intomics:<tag>

(see `bioconductor-intomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-intomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intomics
   :alt:   (downloads)
.. |docker_bioconductor-intomics| image:: https://quay.io/repository/biocontainers/bioconductor-intomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intomics
.. _`bioconductor-intomics/tags`: https://quay.io/repository/biocontainers/bioconductor-intomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intomics";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intomics/README.html