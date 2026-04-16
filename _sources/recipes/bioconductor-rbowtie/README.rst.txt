:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbowtie'
.. highlight: bash

bioconductor-rbowtie
====================

.. conda:recipe:: bioconductor-rbowtie
   :replaces_section_title:
   :noindex:

   R bowtie wrapper

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rbowtie.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-rbowtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie/meta.yaml>`_
   :links: biotools: :biotools:`rbowtie`, doi: :doi:`10.1038/nmeth.3252`

   This package provides an R wrapper around the popular bowtie short read aligner and around SpliceMap\, a de novo splice junction discovery and alignment tool. The package is used by the QuasR bioconductor package. We recommend to use the QuasR package instead of using Rbowtie directly.


.. conda:package:: bioconductor-rbowtie

   |downloads_bioconductor-rbowtie| |docker_bioconductor-rbowtie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-2``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-rbowtie

to add into an existing workspace instead, run::

    pixi add bioconductor-rbowtie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rbowtie

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rbowtie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rbowtie:<tag>

(see `bioconductor-rbowtie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rbowtie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbowtie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbowtie
   :alt:   (downloads)
.. |docker_bioconductor-rbowtie| image:: https://quay.io/repository/biocontainers/bioconductor-rbowtie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbowtie
.. _`bioconductor-rbowtie/tags`: https://quay.io/repository/biocontainers/bioconductor-rbowtie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbowtie";
        var versions = ["1.50.0","1.46.0","1.46.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbowtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbowtie/README.html