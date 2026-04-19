:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-copa'
.. highlight: bash

bioconductor-copa
=================

.. conda:recipe:: bioconductor-copa
   :replaces_section_title:
   :noindex:

   Functions to perform cancer outlier profile analysis.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/copa.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-copa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copa/meta.yaml>`_
   :links: biotools: :biotools:`copa`, usegalaxy-eu: :usegalaxy-eu:`copa`

   COPA is a method to find genes that undergo recurrent fusion in a given cancer type by finding pairs of genes that have mutually exclusive outlier profiles.


.. conda:package:: bioconductor-copa

   |downloads_bioconductor-copa| |docker_bioconductor-copa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.74.0-0</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.62.0-2</code>,  <code>1.62.0-1</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.74.0-0``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.62.0-2``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
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

    pixi global install bioconductor-copa

to add into an existing workspace instead, run::

    pixi add bioconductor-copa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-copa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-copa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-copa:<tag>

(see `bioconductor-copa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-copa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-copa
   :alt:   (downloads)
.. |docker_bioconductor-copa| image:: https://quay.io/repository/biocontainers/bioconductor-copa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copa
.. _`bioconductor-copa/tags`: https://quay.io/repository/biocontainers/bioconductor-copa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-copa";
        var versions = ["1.78.0","1.74.0","1.70.0","1.70.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copa/README.html