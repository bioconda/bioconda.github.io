:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hopach'
.. highlight: bash

bioconductor-hopach
===================

.. conda:recipe:: bioconductor-hopach
   :replaces_section_title:
   :noindex:

   Hierarchical Ordered Partitioning and Collapsing Hybrid \(HOPACH\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hopach.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hopach <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hopach>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hopach/meta.yaml>`_
   :links: biotools: :biotools:`hopach`, doi: :doi:`10.1038/nmeth.3252`

   The HOPACH clustering algorithm builds a hierarchical tree of clusters by recursively partitioning a data set\, while ordering and possibly collapsing clusters at each level. The algorithm uses the Mean\/Median Split Silhouette \(MSS\) criteria to identify the level of the tree with maximally homogeneous clusters. It also runs the tree down to produce a final ordered list of the elements. The non\-parametric bootstrap allows one to estimate the probability that each element belongs to each cluster \(fuzzy clustering\).


.. conda:package:: bioconductor-hopach

   |downloads_bioconductor-hopach| |docker_bioconductor-hopach|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.70.0-0</code>,  <code>2.66.0-0</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-1</code>,  <code>2.58.0-0</code>,  <code>2.54.0-2</code>,  <code>2.54.0-1</code>,  <code>2.54.0-0</code>,  </span></summary>
      

      ``2.70.0-0``,  ``2.66.0-0``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.54.0-2``,  ``2.54.0-1``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 

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

    pixi global install bioconductor-hopach

to add into an existing workspace instead, run::

    pixi add bioconductor-hopach

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hopach

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hopach

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hopach:<tag>

(see `bioconductor-hopach/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hopach| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hopach.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hopach
   :alt:   (downloads)
.. |docker_bioconductor-hopach| image:: https://quay.io/repository/biocontainers/bioconductor-hopach/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hopach
.. _`bioconductor-hopach/tags`: https://quay.io/repository/biocontainers/bioconductor-hopach?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hopach";
        var versions = ["2.70.0","2.66.0","2.62.0","2.60.0","2.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hopach/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hopach/README.html