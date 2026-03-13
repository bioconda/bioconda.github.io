:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-stitch'
.. highlight: bash

r-stitch
========

.. conda:recipe:: r-stitch
   :replaces_section_title:
   :noindex:

   STITCH \- Sequencing To Imputation Through Constructing Haplotypes.

   :homepage: https://github.com/rwdavies/stitch
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-stitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-stitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-stitch/meta.yaml>`_

   


.. conda:package:: r-stitch

   |downloads_r-stitch| |docker_r-stitch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.5-0</code>,  <code>1.8.4-1</code>,  <code>1.8.4-0</code>,  <code>1.8.2-0</code>,  <code>1.7.3-0</code>,  <code>1.7.2-1</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  </span></summary>
      

      ``1.8.5-0``,  ``1.8.4-1``,  ``1.8.4-0``,  ``1.8.2-0``,  ``1.7.3-0``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.11-0``,  ``1.6.10-0``,  ``1.6.8-2``,  ``1.6.8-1``,  ``1.6.8-0``,  ``1.6.6-4``,  ``1.6.6-3``,  ``1.6.6-2``,  ``1.6.6-1``,  ``1.6.6-0``,  ``1.6.5-3``,  ``1.6.5-2``,  ``1.6.5-0``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.7-0``,  ``1.5.5-0``,  ``1.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gmp: ``>=6.3.0,<7.0a0``
   :depends on htslib: ``>=1.4``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mpc: ``>=1.3.1,<2.0a0``
   :depends on mpfr: ``>=4.2.1,<5.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: ``>=1.11.8``
   :depends on r-optparse: 
   :depends on r-rcpp: ``>=0.12.18``
   :depends on r-rcpparmadillo: ``>=0.8.600.0.0``
   :depends on r-rrbgen: ``>=0.0.6``
   :depends on r-rrbgen: ``>=0.0.6,<0.1.0a0``
   :depends on r-testthat: ``>=2.0.0``
   :depends on rsync: 
   :depends on samtools: ``>=1.4``

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

    pixi global install r-stitch

to add into an existing workspace instead, run::

    pixi add r-stitch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-stitch

Alternatively, to install into a new environment, run::

    conda create -n envname r-stitch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-stitch:<tag>

(see `r-stitch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-stitch| image:: https://img.shields.io/conda/dn/bioconda/r-stitch.svg?style=flat
   :target: https://anaconda.org/bioconda/r-stitch
   :alt:   (downloads)
.. |docker_r-stitch| image:: https://quay.io/repository/biocontainers/r-stitch/status
   :target: https://quay.io/repository/biocontainers/r-stitch
.. _`r-stitch/tags`: https://quay.io/repository/biocontainers/r-stitch?tab=tags


.. raw:: html

    <script>
        var package = "r-stitch";
        var versions = ["1.8.5","1.8.4","1.8.4","1.8.2","1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-stitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-stitch/README.html