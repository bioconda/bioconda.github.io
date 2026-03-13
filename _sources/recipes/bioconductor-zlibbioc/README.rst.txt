:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zlibbioc'
.. highlight: bash

bioconductor-zlibbioc
=====================

.. conda:recipe:: bioconductor-zlibbioc
   :replaces_section_title:
   :noindex:

   An R packaged zlib\-1.2.5

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/zlibbioc.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-zlibbioc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zlibbioc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zlibbioc/meta.yaml>`_
   :links: biotools: :biotools:`zlibbioc`, doi: :doi:`10.1038/nmeth.3252`

   This package uses the source code of zlib\-1.2.5 to create libraries for systems that do not have these available via other means \(most Linux and Mac users should have system\-level access to zlib\, and no direct need for this package\). See the vignette for instructions on use.


.. conda:package:: bioconductor-zlibbioc

   |downloads_bioconductor-zlibbioc| |docker_bioconductor-zlibbioc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-2</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-2</code>,  <code>1.44.0-1</code>,  </span></summary>
      

      ``1.52.0-2``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-2``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install bioconductor-zlibbioc

to add into an existing workspace instead, run::

    pixi add bioconductor-zlibbioc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-zlibbioc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-zlibbioc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-zlibbioc:<tag>

(see `bioconductor-zlibbioc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-zlibbioc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zlibbioc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zlibbioc
   :alt:   (downloads)
.. |docker_bioconductor-zlibbioc| image:: https://quay.io/repository/biocontainers/bioconductor-zlibbioc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zlibbioc
.. _`bioconductor-zlibbioc/tags`: https://quay.io/repository/biocontainers/bioconductor-zlibbioc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zlibbioc";
        var versions = ["1.52.0","1.52.0","1.52.0","1.48.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zlibbioc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zlibbioc/README.html