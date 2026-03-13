:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-complexheatmap'
.. highlight: bash

bioconductor-complexheatmap
===========================

.. conda:recipe:: bioconductor-complexheatmap
   :replaces_section_title:
   :noindex:

   Make Complex Heatmaps

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ComplexHeatmap.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-complexheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-complexheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-complexheatmap/meta.yaml>`_
   :links: biotools: :biotools:`complexheatmap`

   Complex heatmaps are efficient to visualize associations between different sources of data sets and reveal potential patterns. Here the ComplexHeatmap package provides a highly flexible way to arrange multiple heatmaps and supports various annotation graphics.


.. conda:package:: bioconductor-complexheatmap

   |downloads_bioconductor-complexheatmap| |docker_bioconductor-complexheatmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.1-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.2-1</code>,  <code>2.6.2-0</code>,  </span></summary>
      

      ``2.26.1-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.2-1``,  ``2.6.2-0``,  ``2.6.0-0``,  ``2.4.2-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.17.1-0``,  ``1.14.0-0``,  ``1.6.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: ``>=0.4.14``
   :depends on r-clue: 
   :depends on r-codetools: 
   :depends on r-colorspace: 
   :depends on r-digest: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-getoptlong: 
   :depends on r-globaloptions: ``>=0.1.0``
   :depends on r-matrixstats: 
   :depends on r-png: 
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-complexheatmap

to add into an existing workspace instead, run::

    pixi add bioconductor-complexheatmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-complexheatmap

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-complexheatmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-complexheatmap:<tag>

(see `bioconductor-complexheatmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-complexheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-complexheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-complexheatmap
   :alt:   (downloads)
.. |docker_bioconductor-complexheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-complexheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-complexheatmap
.. _`bioconductor-complexheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-complexheatmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-complexheatmap";
        var versions = ["2.26.1","2.22.0","2.18.0","2.16.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-complexheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-complexheatmap/README.html