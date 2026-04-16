:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcore'
.. highlight: bash

bioconductor-flowcore
=====================

.. conda:recipe:: bioconductor-flowcore
   :replaces_section_title:
   :noindex:

   flowCore\: Basic structures for flow cytometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowCore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcore/meta.yaml>`_
   :links: biotools: :biotools:`flowcore`, doi: :doi:`10.1186/1471-2105-10-106`

   Provides S4 data structures and basic functions to deal with flow cytometry data.


.. conda:package:: bioconductor-flowcore

   |downloads_bioconductor-flowcore| |docker_bioconductor-flowcore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.1-0</code>,  <code>2.18.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.6.0-2</code>,  <code>2.6.0-1</code>,  </span></summary>
      

      ``2.22.1-0``,  ``2.18.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.1-0``,  ``1.48.0-0``,  ``1.46.2-0``,  ``1.44.0-0``,  ``1.42.3-0``,  ``1.42.0-0``,  ``1.38.2-1``,  ``1.38.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-cytolib: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-cytolib: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-rprotobuflib: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-rprotobuflib: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: ``>=1.81.0.0``
   :depends on r-cpp11: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-flowcore

to add into an existing workspace instead, run::

    pixi add bioconductor-flowcore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowcore

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowcore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowcore:<tag>

(see `bioconductor-flowcore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcore
   :alt:   (downloads)
.. |docker_bioconductor-flowcore| image:: https://quay.io/repository/biocontainers/bioconductor-flowcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcore
.. _`bioconductor-flowcore/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowcore";
        var versions = ["2.22.1","2.18.0","2.14.0","2.14.0","2.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcore/README.html