:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bufferedmatrixmethods'
.. highlight: bash

bioconductor-bufferedmatrixmethods
==================================

.. conda:recipe:: bioconductor-bufferedmatrixmethods
   :replaces_section_title:
   :noindex:

   Microarray Data related methods that utlize BufferedMatrix objects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BufferedMatrixMethods.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bufferedmatrixmethods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bufferedmatrixmethods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bufferedmatrixmethods/meta.yaml>`_
   :links: biotools: :biotools:`bufferedmatrixmethods`, doi: :doi:`10.1038/nmeth.3252`

   Microarray analysis methods that use BufferedMatrix objects


.. conda:package:: bioconductor-bufferedmatrixmethods

   |downloads_bioconductor-bufferedmatrixmethods| |docker_bioconductor-bufferedmatrixmethods|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.61.0-1</code>,  <code>1.61.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.61.0-1``,  ``1.61.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bufferedmatrix: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-bufferedmatrix: ``>=1.74.0,<1.75.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      

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

    pixi global install bioconductor-bufferedmatrixmethods

to add into an existing workspace instead, run::

    pixi add bioconductor-bufferedmatrixmethods

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bufferedmatrixmethods

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bufferedmatrixmethods

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bufferedmatrixmethods:<tag>

(see `bioconductor-bufferedmatrixmethods/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bufferedmatrixmethods| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bufferedmatrixmethods.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bufferedmatrixmethods
   :alt:   (downloads)
.. |docker_bioconductor-bufferedmatrixmethods| image:: https://quay.io/repository/biocontainers/bioconductor-bufferedmatrixmethods/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bufferedmatrixmethods
.. _`bioconductor-bufferedmatrixmethods/tags`: https://quay.io/repository/biocontainers/bioconductor-bufferedmatrixmethods?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bufferedmatrixmethods";
        var versions = ["1.74.0","1.70.0","1.66.0","1.64.0","1.61.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bufferedmatrixmethods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bufferedmatrixmethods/README.html