:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snprelate'
.. highlight: bash

bioconductor-snprelate
======================

.. conda:recipe:: bioconductor-snprelate
   :replaces_section_title:
   :noindex:

   Parallel Computing Toolset for Relatedness and Principal Component Analysis of SNP Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SNPRelate.html
   :license: GPL-3
   :recipe: /`bioconductor-snprelate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snprelate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snprelate/meta.yaml>`_
   :links: biotools: :biotools:`snprelate`

   Genome\-wide association studies \(GWAS\) are widely used to investigate the genetic basis of diseases and traits\, but they pose many computational challenges. We developed an R package SNPRelate to provide a binary format for single\-nucleotide polymorphism \(SNP\) data in GWAS utilizing CoreArray Genomic Data Structure \(GDS\) data files. The GDS format offers the efficient operations specifically designed for integers with two bits\, since a SNP could occupy only two bits. SNPRelate is also designed to accelerate two key computations on SNP data using parallel computing for multi\-core symmetric multiprocessing computer architectures\: Principal Component Analysis \(PCA\) and relatedness analysis using Identity\-By\-Descent measures. The SNP GDS format is also used by the GWASTools package with the support of S4 classes and generic functions. The extended GDS format is implemented in the SeqArray package to support the storage of single nucleotide variations \(SNVs\)\, insertion\/deletion polymorphism \(indel\) and structural variation calls in whole\-genome and whole\-exome variant data.


.. conda:package:: bioconductor-snprelate

   |downloads_bioconductor-snprelate| |docker_bioconductor-snprelate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.1-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rhpcblasctl: 

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

    pixi global install bioconductor-snprelate

to add into an existing workspace instead, run::

    pixi add bioconductor-snprelate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-snprelate

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-snprelate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-snprelate:<tag>

(see `bioconductor-snprelate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-snprelate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snprelate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snprelate
   :alt:   (downloads)
.. |docker_bioconductor-snprelate| image:: https://quay.io/repository/biocontainers/bioconductor-snprelate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snprelate
.. _`bioconductor-snprelate/tags`: https://quay.io/repository/biocontainers/bioconductor-snprelate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snprelate";
        var versions = ["1.44.0","1.40.0","1.36.0","1.36.0","1.34.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snprelate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snprelate/README.html