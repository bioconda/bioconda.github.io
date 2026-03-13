:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scope'
.. highlight: bash

bioconductor-scope
==================

.. conda:recipe:: bioconductor-scope
   :replaces_section_title:
   :noindex:

   A normalization and copy number estimation method for single\-cell DNA sequencing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SCOPE.html
   :license: GPL-2
   :recipe: /`bioconductor-scope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scope/meta.yaml>`_

   Whole genome single\-cell DNA sequencing \(scDNA\-seq\) enables characterization of copy number profiles at the cellular level. This circumvents the averaging effects associated with bulk\-tissue sequencing and has increased resolution yet decreased ambiguity in deconvolving cancer subclones and elucidating cancer evolutionary history. ScDNA\-seq data is\, however\, sparse\, noisy\, and highly variable even within a homogeneous cell population\, due to the biases and artifacts that are introduced during the library preparation and sequencing procedure. Here\, we propose SCOPE\, a normalization and copy number estimation method for scDNA\-seq data. The distinguishing features of SCOPE include\: \(i\) utilization of cell\-specific Gini coefficients for quality controls and for identification of normal\/diploid cells\, which are further used as negative control samples in a Poisson latent factor model for normalization\; \(ii\) modeling of GC content bias using an expectation\-maximization algorithm embedded in the Poisson generalized linear models\, which accounts for the different copy number states along the genome\; \(iii\) a cross\-sample iterative segmentation procedure to identify breakpoints that are shared across cells from the same genetic background.


.. conda:package:: bioconductor-scope

   |downloads_bioconductor-scope| |docker_bioconductor-scope|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-dnacopy: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-desctools: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-gplots: 
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-scope

to add into an existing workspace instead, run::

    pixi add bioconductor-scope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scope

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scope:<tag>

(see `bioconductor-scope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scope| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scope.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scope
   :alt:   (downloads)
.. |docker_bioconductor-scope| image:: https://quay.io/repository/biocontainers/bioconductor-scope/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scope
.. _`bioconductor-scope/tags`: https://quay.io/repository/biocontainers/bioconductor-scope?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scope";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scope/README.html