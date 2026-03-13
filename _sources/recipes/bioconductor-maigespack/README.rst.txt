:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maigespack'
.. highlight: bash

bioconductor-maigespack
=======================

.. conda:recipe:: bioconductor-maigespack
   :replaces_section_title:
   :noindex:

   Functions to handle cDNA microarray data\, including several methods of data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/maigesPack.html
   :license: GPL-3.0-or-later
   :recipe: /`bioconductor-maigespack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maigespack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maigespack/meta.yaml>`_
   :links: biotools: :biotools:`maigespack`, doi: :doi:`10.1038/nmeth.3252`

   This package uses functions of various other packages together with other functions in a coordinated way to handle and analyse cDNA microarray data


.. conda:package:: bioconductor-maigespack

   |downloads_bioconductor-maigespack| |docker_bioconductor-maigespack|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-convert: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-convert: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends on bioconductor-limma: ``>=3.58.1,<3.59.0``
   :depends on bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends on bioconductor-marray: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-marray: ``>=1.80.0,<1.81.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-maigespack

to add into an existing workspace instead, run::

    pixi add bioconductor-maigespack

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-maigespack

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-maigespack

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-maigespack:<tag>

(see `bioconductor-maigespack/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-maigespack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maigespack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maigespack
   :alt:   (downloads)
.. |docker_bioconductor-maigespack| image:: https://quay.io/repository/biocontainers/bioconductor-maigespack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maigespack
.. _`bioconductor-maigespack/tags`: https://quay.io/repository/biocontainers/bioconductor-maigespack?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maigespack";
        var versions = ["1.64.0","1.64.0","1.62.0","1.62.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maigespack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maigespack/README.html