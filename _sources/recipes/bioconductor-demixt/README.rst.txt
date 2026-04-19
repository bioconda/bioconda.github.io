:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-demixt'
.. highlight: bash

bioconductor-demixt
===================

.. conda:recipe:: bioconductor-demixt
   :replaces_section_title:
   :noindex:

   Cell type\-specific deconvolution of heterogeneous tumor samples with two or three components using expression data from RNAseq or microarray platforms

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DeMixT.html
   :license: GPL-3
   :recipe: /`bioconductor-demixt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demixt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-demixt/meta.yaml>`_
   :links: biotools: :biotools:`DeMixT`

   DeMixT is a software package that performs deconvolution on transcriptome data from a mixture of two or three components.


.. conda:package:: bioconductor-demixt

   |downloads_bioconductor-demixt| |docker_bioconductor-demixt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-dss: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-dss: ``>=2.58.0,<2.59.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-base64enc: 
   :depends on r-dendextend: 
   :depends on r-ggplot2: 
   :depends on r-kernsmooth: 
   :depends on r-knitr: 
   :depends on r-matrixcalc: 
   :depends on r-matrixstats: 
   :depends on r-psych: 
   :depends on r-rcpp: ``>=1.0.0``
   :depends on r-rmarkdown: 
   :depends on r-truncdist: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-demixt

to add into an existing workspace instead, run::

    pixi add bioconductor-demixt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-demixt

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-demixt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-demixt:<tag>

(see `bioconductor-demixt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-demixt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-demixt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-demixt
   :alt:   (downloads)
.. |docker_bioconductor-demixt| image:: https://quay.io/repository/biocontainers/bioconductor-demixt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-demixt
.. _`bioconductor-demixt/tags`: https://quay.io/repository/biocontainers/bioconductor-demixt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-demixt";
        var versions = ["1.26.0","1.22.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-demixt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-demixt/README.html