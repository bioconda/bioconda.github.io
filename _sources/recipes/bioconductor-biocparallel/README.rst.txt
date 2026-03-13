:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocparallel'
.. highlight: bash

bioconductor-biocparallel
=========================

.. conda:recipe:: bioconductor-biocparallel
   :replaces_section_title:
   :noindex:

   Bioconductor facilities for parallel evaluation

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/BiocParallel.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-biocparallel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocparallel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocparallel/meta.yaml>`_
   :links: biotools: :biotools:`biocparallel`, doi: :doi:`10.1214/14-STS476`

   This package provides modified versions and novel implementation of functions for parallel evaluation\, tailored to use with Bioconductor objects.


.. conda:package:: bioconductor-biocparallel

   |downloads_bioconductor-biocparallel| |docker_bioconductor-biocparallel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-2</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.2-0</code>,  <code>1.32.5-1</code>,  </span></summary>
      

      ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.2-0``,  ``1.32.5-1``,  ``1.32.5-0``,  ``1.32.0-0``,  ``1.28.3-1``,  ``1.28.3-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.6-0``,  ``1.16.2-1``,  ``1.16.2-0``,  ``1.14.2-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.6.6-1``,  ``1.6.6-0``,  ``1.5.0-0``,  ``1.4.3-0``,  ``1.4.0-0``,  ``1.2.22-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: ``>=1.87.0``
   :depends on r-codetools: 
   :depends on r-cpp11: 
   :depends on r-futile.logger: 
   :depends on r-snow: 

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

    pixi global install bioconductor-biocparallel

to add into an existing workspace instead, run::

    pixi add bioconductor-biocparallel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biocparallel

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biocparallel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biocparallel:<tag>

(see `bioconductor-biocparallel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biocparallel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocparallel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocparallel
   :alt:   (downloads)
.. |docker_bioconductor-biocparallel| image:: https://quay.io/repository/biocontainers/bioconductor-biocparallel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocparallel
.. _`bioconductor-biocparallel/tags`: https://quay.io/repository/biocontainers/bioconductor-biocparallel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocparallel";
        var versions = ["1.44.0","1.44.0","1.40.0","1.40.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocparallel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocparallel/README.html