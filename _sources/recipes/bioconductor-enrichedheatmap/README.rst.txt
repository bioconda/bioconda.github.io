:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enrichedheatmap'
.. highlight: bash

bioconductor-enrichedheatmap
============================

.. conda:recipe:: bioconductor-enrichedheatmap
   :replaces_section_title:
   :noindex:

   Making Enriched Heatmaps

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EnrichedHeatmap.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-enrichedheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichedheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichedheatmap/meta.yaml>`_

   Enriched heatmap is a special type of heatmap which visualizes the enrichment of genomic signals on specific target regions. Here we implement enriched heatmap by ComplexHeatmap package. Since this type of heatmap is just a normal heatmap but with some special settings\, with the functionality of ComplexHeatmap\, it would be much easier to customize the heatmap as well as concatenating to a list of heatmaps to show correspondance between different data sources.


.. conda:package:: bioconductor-enrichedheatmap

   |downloads_bioconductor-enrichedheatmap| |docker_bioconductor-enrichedheatmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.1-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.27.2-1</code>,  <code>1.27.2-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.1-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.27.2-1``,  ``1.27.2-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.1,<2.27.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: ``>=0.4.5``
   :depends on r-getoptlong: 
   :depends on r-locfit: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-enrichedheatmap

to add into an existing workspace instead, run::

    pixi add bioconductor-enrichedheatmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-enrichedheatmap

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-enrichedheatmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-enrichedheatmap:<tag>

(see `bioconductor-enrichedheatmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-enrichedheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichedheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enrichedheatmap
   :alt:   (downloads)
.. |docker_bioconductor-enrichedheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-enrichedheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichedheatmap
.. _`bioconductor-enrichedheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-enrichedheatmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enrichedheatmap";
        var versions = ["1.40.1","1.36.0","1.32.0","1.30.0","1.27.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichedheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichedheatmap/README.html