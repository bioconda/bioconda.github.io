:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sva'
.. highlight: bash

bioconductor-sva
================

.. conda:recipe:: bioconductor-sva
   :replaces_section_title:
   :noindex:

   Surrogate Variable Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sva.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sva/meta.yaml>`_
   :links: biotools: :biotools:`sva`, doi: :doi:`10.1371/journal.pgen.0030161`

   The sva package contains functions for removing batch effects and other unwanted variation in high\-throughput experiment. Specifically\, the sva package contains functions for the identifying and building surrogate variables for high\-dimensional data sets. Surrogate variables are covariates constructed directly from high\-dimensional data \(like gene expression\/RNA sequencing\/methylation\/brain imaging data\) that can be used in subsequent analyses to adjust for unknown\, unmodeled\, or latent sources of noise. The sva package can be used to remove artifacts in three ways\: \(1\) identifying and estimating surrogate variables for unknown sources of variation in high\-throughput experiments \(Leek and Storey 2007 PLoS Genetics\,2008 PNAS\)\, \(2\) directly removing known batch effects using ComBat \(Johnson et al. 2007 Biostatistics\) and \(3\) removing batch effects with known control probes \(Leek 2014 biorXiv\). Removing batch effects and using surrogate variables in differential expression analysis have been shown to reduce dependence\, stabilize error rate estimates\, and improve reproducibility\, see \(Leek and Storey 2007 PLoS Genetics\, 2008 PNAS or Leek et al. 2011 Nat. Reviews Genetics\).


.. conda:package:: bioconductor-sva

   |downloads_bioconductor-sva| |docker_bioconductor-sva|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.58.0-0</code>,  <code>3.54.0-1</code>,  <code>3.54.0-0</code>,  <code>3.50.0-1</code>,  <code>3.50.0-0</code>,  <code>3.48.0-0</code>,  <code>3.46.0-1</code>,  <code>3.46.0-0</code>,  <code>3.42.0-2</code>,  </span></summary>
      

      ``3.58.0-0``,  ``3.54.0-1``,  ``3.54.0-0``,  ``3.50.0-1``,  ``3.50.0-0``,  ``3.48.0-0``,  ``3.46.0-1``,  ``3.46.0-0``,  ``3.42.0-2``,  ``3.42.0-1``,  ``3.42.0-0``,  ``3.40.0-0``,  ``3.38.0-1``,  ``3.38.0-0``,  ``3.36.0-0``,  ``3.34.0-0``,  ``3.32.1-0``,  ``3.30.1-0``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.4-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.15.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-edger: ``>=4.8.2,<4.9.0a0``
   :depends on bioconductor-genefilter: ``>=1.92.0,<1.93.0``
   :depends on bioconductor-genefilter: ``>=1.92.0,<1.93.0a0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrixstats: 
   :depends on r-mgcv: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-sva

to add into an existing workspace instead, run::

    pixi add bioconductor-sva

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sva

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sva

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sva:<tag>

(see `bioconductor-sva/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sva| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sva.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sva
   :alt:   (downloads)
.. |docker_bioconductor-sva| image:: https://quay.io/repository/biocontainers/bioconductor-sva/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sva
.. _`bioconductor-sva/tags`: https://quay.io/repository/biocontainers/bioconductor-sva?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sva";
        var versions = ["3.58.0","3.54.0","3.54.0","3.50.0","3.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sva/README.html