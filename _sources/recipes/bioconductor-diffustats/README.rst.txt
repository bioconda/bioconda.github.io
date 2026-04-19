:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffustats'
.. highlight: bash

bioconductor-diffustats
=======================

.. conda:recipe:: bioconductor-diffustats
   :replaces_section_title:
   :noindex:

   Diffusion scores on biological networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/diffuStats.html
   :license: GPL-3
   :recipe: /`bioconductor-diffustats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffustats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffustats/meta.yaml>`_
   :links: biotools: :biotools:`diffuStats`, doi: :doi:`10.1093/bioinformatics/btx632`

   Label propagation approaches are a widely used procedure in computational biology for giving context to molecular entities using network data. Node labels\, which can derive from gene expression\, genome\-wide association studies\, protein domains or metabolomics profiling\, are propagated to their neighbours in the network\, effectively smoothing the scores through prior annotated knowledge and prioritising novel candidates. The R package diffuStats contains a collection of diffusion kernels and scoring approaches that facilitates their computation\, characterisation and benchmarking.


.. conda:package:: bioconductor-diffustats

   |downloads_bioconductor-diffustats| |docker_bioconductor-diffustats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-2</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.104.0-0``,  ``0.102.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-expm: 
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-plyr: 
   :depends on r-precrec: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppparallel: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-diffustats

to add into an existing workspace instead, run::

    pixi add bioconductor-diffustats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-diffustats

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-diffustats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-diffustats:<tag>

(see `bioconductor-diffustats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-diffustats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffustats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffustats
   :alt:   (downloads)
.. |docker_bioconductor-diffustats| image:: https://quay.io/repository/biocontainers/bioconductor-diffustats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffustats
.. _`bioconductor-diffustats/tags`: https://quay.io/repository/biocontainers/bioconductor-diffustats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffustats";
        var versions = ["1.30.0","1.26.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffustats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffustats/README.html