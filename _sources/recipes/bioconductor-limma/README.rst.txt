:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-limma'
.. highlight: bash

bioconductor-limma
==================

.. conda:recipe:: bioconductor-limma
   :replaces_section_title:
   :noindex:

   Linear Models for Microarray and Omics Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/limma.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-limma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limma/meta.yaml>`_
   :links: biotools: :biotools:`limma`, usegalaxy-eu: :usegalaxy-eu:`limma_voom`

   Data analysis\, linear models and differential expression for omics data.


.. conda:package:: bioconductor-limma

   |downloads_bioconductor-limma| |docker_bioconductor-limma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.66.0-0</code>,  <code>3.62.1-1</code>,  <code>3.62.1-0</code>,  <code>3.62.0-0</code>,  <code>3.58.1-1</code>,  <code>3.58.1-0</code>,  <code>3.56.2-0</code>,  <code>3.54.0-1</code>,  <code>3.54.0-0</code>,  </span></summary>
      

      ``3.66.0-0``,  ``3.62.1-1``,  ``3.62.1-0``,  ``3.62.0-0``,  ``3.58.1-1``,  ``3.58.1-0``,  ``3.56.2-0``,  ``3.54.0-1``,  ``3.54.0-0``,  ``3.50.3-0``,  ``3.50.1-0``,  ``3.50.0-0``,  ``3.48.0-0``,  ``3.46.0-1``,  ``3.46.0-0``,  ``3.44.1-0``,  ``3.42.0-0``,  ``3.40.2-0``,  ``3.40.0-0``,  ``3.38.3-0``,  ``3.36.5-0``,  ``3.34.9-0``,  ``3.34.6-0``,  ``3.34.1-0``,  ``3.34.0-0``,  ``3.32.10-0``,  ``3.30.13-1``,  ``3.30.13-0``,  ``3.29.0-0``,  ``3.28.21-0``,  ``3.28.10-1``,  ``3.28.10-0``,  ``3.28.6-0``,  ``3.28.2-1``,  ``3.28.2-0``,  ``3.27.4-1``,  ``3.26.9-0``,  ``3.26.7-1``,  ``3.26.3-0``,  ``3.26.1-0``,  ``3.26.0-0``,  ``3.24.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-statmod: 

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

    pixi global install bioconductor-limma

to add into an existing workspace instead, run::

    pixi add bioconductor-limma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-limma

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-limma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-limma:<tag>

(see `bioconductor-limma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-limma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-limma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-limma
   :alt:   (downloads)
.. |docker_bioconductor-limma| image:: https://quay.io/repository/biocontainers/bioconductor-limma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-limma
.. _`bioconductor-limma/tags`: https://quay.io/repository/biocontainers/bioconductor-limma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-limma";
        var versions = ["3.66.0","3.62.1","3.62.1","3.62.0","3.58.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-limma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-limma/README.html