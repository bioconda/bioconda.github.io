:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-saigegds'
.. highlight: bash

bioconductor-saigegds
=====================

.. conda:recipe:: bioconductor-saigegds
   :replaces_section_title:
   :noindex:

   Scalable Implementation of Generalized mixed models using GDS files in Phenome\-Wide Association Studies

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SAIGEgds.html
   :license: GPL-3
   :recipe: /`bioconductor-saigegds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saigegds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saigegds/meta.yaml>`_

   Scalable implementation of generalized mixed models with highly optimized C\+\+ implementation and integration with Genomic Data Structure \(GDS\) files. It is designed for single variant tests and set\-based aggregate tests in large\-scale Phenome\-wide Association Studies \(PheWAS\) with millions of variants and samples\, controlling for sample structure and case\-control imbalance. The implementation is based on the SAIGE R package \(v0.45\, Zhou et al. 2018 and Zhou et al. 2020\)\, and it is extended to include the state\-of\-the\-art ACAT\-O set\-based tests. Benchmarks show that SAIGEgds is significantly faster than the SAIGE R package.


.. conda:package:: bioconductor-saigegds

   |downloads_bioconductor-saigegds| |docker_bioconductor-saigegds|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0a0``
   :depends on bioconductor-seqarray: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-seqarray: ``>=1.50.1,<1.51.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-compquadform: 
   :depends on r-matrix: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppparallel: ``>=5.0.0``
   :depends on r-skat: 
   :depends on r-survey: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-saigegds

to add into an existing workspace instead, run::

    pixi add bioconductor-saigegds

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-saigegds

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-saigegds

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-saigegds:<tag>

(see `bioconductor-saigegds/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-saigegds| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-saigegds.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-saigegds
   :alt:   (downloads)
.. |docker_bioconductor-saigegds| image:: https://quay.io/repository/biocontainers/bioconductor-saigegds/status
   :target: https://quay.io/repository/biocontainers/bioconductor-saigegds
.. _`bioconductor-saigegds/tags`: https://quay.io/repository/biocontainers/bioconductor-saigegds?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-saigegds";
        var versions = ["2.10.0","2.6.0","2.2.0","2.0.1","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-saigegds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-saigegds/README.html