:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-differentialregulation'
.. highlight: bash

bioconductor-differentialregulation
===================================

.. conda:recipe:: bioconductor-differentialregulation
   :replaces_section_title:
   :noindex:

   Differentially regulated genes from scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DifferentialRegulation.html
   :license: GPL-3
   :recipe: /`bioconductor-differentialregulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-differentialregulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-differentialregulation/meta.yaml>`_

   DifferentialRegulation is a method for detecting differentially regulated genes between two groups of samples \(e.g.\, healthy vs. disease\, or treated vs. untreated samples\)\, by targeting differences in the balance of spliced and unspliced mRNA abundances\, obtained from single\-cell RNA\-sequencing \(scRNA\-seq\) data. From a mathematical point of view\, DifferentialRegulation accounts for the sample\-to\-sample variability\, and embeds multiple samples in a Bayesian hierarchical model. Furthermore\, our method also deals with two major sources of mapping uncertainty\: i\) \'ambiguous\' reads\, compatible with both spliced and unspliced versions of a gene\, and ii\) reads mapping to multiple genes. In particular\, ambiguous reads are treated separately from spliced and unsplced reads\, while reads that are compatible with multiple genes are allocated to the gene of origin. Parameters are inferred via Markov chain Monte Carlo \(MCMC\) techniques \(Metropolis\-within\-Gibbs\).


.. conda:package:: bioconductor-differentialregulation

   |downloads_bioconductor-differentialregulation| |docker_bioconductor-differentialregulation|

   :versions:
      
      

      ``2.8.0-0``,  ``2.4.0-0``,  ``2.0.2-0``,  ``1.4.2-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-bandits: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-bandits: ``>=1.26.0,<1.27.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-tximport: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-tximport: ``>=1.38.2,<1.39.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-dorng: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-mass: 
   :depends on r-matrix: 
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

    pixi global install bioconductor-differentialregulation

to add into an existing workspace instead, run::

    pixi add bioconductor-differentialregulation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-differentialregulation

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-differentialregulation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-differentialregulation:<tag>

(see `bioconductor-differentialregulation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-differentialregulation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-differentialregulation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-differentialregulation
   :alt:   (downloads)
.. |docker_bioconductor-differentialregulation| image:: https://quay.io/repository/biocontainers/bioconductor-differentialregulation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-differentialregulation
.. _`bioconductor-differentialregulation/tags`: https://quay.io/repository/biocontainers/bioconductor-differentialregulation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-differentialregulation";
        var versions = ["2.8.0","2.4.0","2.0.2","1.4.2","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-differentialregulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-differentialregulation/README.html