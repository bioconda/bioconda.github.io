:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biobase'
.. highlight: bash

bioconductor-biobase
====================

.. conda:recipe:: bioconductor-biobase
   :replaces_section_title:
   :noindex:

   Biobase\: Base functions for Bioconductor

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Biobase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biobase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobase/meta.yaml>`_
   :links: biotools: :biotools:`biobase`

   Functions that are needed by many other packages or which replace R functions.


.. conda:package:: bioconductor-biobase

   |downloads_bioconductor-biobase| |docker_bioconductor-biobase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.70.0-0</code>,  <code>2.66.0-0</code>,  <code>2.62.0-3</code>,  <code>2.62.0-2</code>,  <code>2.62.0-1</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-1</code>,  <code>2.58.0-0</code>,  </span></summary>
      

      ``2.70.0-0``,  ``2.66.0-0``,  ``2.62.0-3``,  ``2.62.0-2``,  ``2.62.0-1``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.54.0-2``,  ``2.54.0-1``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.2-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-biobase

to add into an existing workspace instead, run::

    pixi add bioconductor-biobase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biobase

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biobase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biobase:<tag>

(see `bioconductor-biobase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biobase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biobase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biobase
   :alt:   (downloads)
.. |docker_bioconductor-biobase| image:: https://quay.io/repository/biocontainers/bioconductor-biobase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biobase
.. _`bioconductor-biobase/tags`: https://quay.io/repository/biocontainers/bioconductor-biobase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biobase";
        var versions = ["2.70.0","2.66.0","2.62.0","2.62.0","2.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biobase/README.html