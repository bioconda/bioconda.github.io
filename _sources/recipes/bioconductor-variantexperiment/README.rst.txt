:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variantexperiment'
.. highlight: bash

bioconductor-variantexperiment
==============================

.. conda:recipe:: bioconductor-variantexperiment
   :replaces_section_title:
   :noindex:

   A RangedSummarizedExperiment Container for VCF\/GDS Data with GDS Backend

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VariantExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-variantexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantexperiment/meta.yaml>`_

   VariantExperiment is a Bioconductor package for saving data in VCF\/GDS format into RangedSummarizedExperiment object. The high\-throughput genetic\/genomic data are saved in GDSArray objects. The annotation data for features\/samples are saved in DelayedDataFrame format with mono\-dimensional GDSArray in each column. The on\-disk representation of both assay data and annotation data achieves on\-disk reading and processing and saves memory space significantly. The interface of RangedSummarizedExperiment data format enables easy and common manipulations for high\-throughput genetic\/genomic data with common SummarizedExperiment metaphor in R and Bioconductor.


.. conda:package:: bioconductor-variantexperiment

   |downloads_bioconductor-variantexperiment| |docker_bioconductor-variantexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayeddataframe: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-gdsarray: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqarray: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-snprelate: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-variantexperiment

to add into an existing workspace instead, run::

    pixi add bioconductor-variantexperiment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-variantexperiment

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-variantexperiment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-variantexperiment:<tag>

(see `bioconductor-variantexperiment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-variantexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variantexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variantexperiment
   :alt:   (downloads)
.. |docker_bioconductor-variantexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-variantexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variantexperiment
.. _`bioconductor-variantexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-variantexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-variantexperiment";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variantexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variantexperiment/README.html