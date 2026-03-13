:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowmatch'
.. highlight: bash

bioconductor-flowmatch
======================

.. conda:recipe:: bioconductor-flowmatch
   :replaces_section_title:
   :noindex:

   Matching and meta\-clustering in flow cytometry

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowMatch.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowmatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmatch/meta.yaml>`_
   :links: biotools: :biotools:`flowmatch`, doi: :doi:`10.1038/nmeth.3252`

   Matching cell populations and building meta\-clusters and templates from a collection of FC samples.


.. conda:package:: bioconductor-flowmatch

   |downloads_bioconductor-flowmatch| |docker_bioconductor-flowmatch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-flowcore: ``>=2.22.1,<2.23.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcpp: ``>=0.11.0``

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

    pixi global install bioconductor-flowmatch

to add into an existing workspace instead, run::

    pixi add bioconductor-flowmatch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowmatch

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowmatch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowmatch:<tag>

(see `bioconductor-flowmatch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowmatch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowmatch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowmatch
   :alt:   (downloads)
.. |docker_bioconductor-flowmatch| image:: https://quay.io/repository/biocontainers/bioconductor-flowmatch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowmatch
.. _`bioconductor-flowmatch/tags`: https://quay.io/repository/biocontainers/bioconductor-flowmatch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowmatch";
        var versions = ["1.46.0","1.42.0","1.38.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowmatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowmatch/README.html