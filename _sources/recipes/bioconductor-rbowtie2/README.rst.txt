:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbowtie2'
.. highlight: bash

bioconductor-rbowtie2
=====================

.. conda:recipe:: bioconductor-rbowtie2
   :replaces_section_title:
   :noindex:

   An R Wrapper for Bowtie2 and AdapterRemoval

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rbowtie2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-rbowtie2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie2/meta.yaml>`_
   :links: biotools: :biotools:`rbowtie2`

   This package provides an R wrapper of the popular bowtie2 sequencing reads aligner and AdapterRemoval\, a convenient tool for rapid adapter trimming\, identification\, and read merging. The package contains wrapper functions that allow for genome indexing and alignment to those indexes. The package also allows for the creation of .bam files via Rsamtools.


.. conda:package:: bioconductor-rbowtie2

   |downloads_bioconductor-rbowtie2| |docker_bioconductor-rbowtie2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.0-0</code>,  <code>2.12.3-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  </span></summary>
      

      ``2.16.0-0``,  ``2.12.3-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-magrittr: 

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

    pixi global install bioconductor-rbowtie2

to add into an existing workspace instead, run::

    pixi add bioconductor-rbowtie2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rbowtie2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rbowtie2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rbowtie2:<tag>

(see `bioconductor-rbowtie2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rbowtie2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbowtie2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbowtie2
   :alt:   (downloads)
.. |docker_bioconductor-rbowtie2| image:: https://quay.io/repository/biocontainers/bioconductor-rbowtie2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbowtie2
.. _`bioconductor-rbowtie2/tags`: https://quay.io/repository/biocontainers/bioconductor-rbowtie2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbowtie2";
        var versions = ["2.16.0","2.12.3","2.8.0","2.8.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbowtie2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbowtie2/README.html