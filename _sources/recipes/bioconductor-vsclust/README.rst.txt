:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vsclust'
.. highlight: bash

bioconductor-vsclust
====================

.. conda:recipe:: bioconductor-vsclust
   :replaces_section_title:
   :noindex:

   Feature\-based variance\-sensitive quantitative clustering

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/vsclust.html
   :license: GPL-2
   :recipe: /`bioconductor-vsclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsclust/meta.yaml>`_

   Feature\-based variance\-sensitive clustering of omics data. Optimizes cluster assignment by taking into account individual feature variance. Includes several modules for statistical testing\, clustering and enrichment analysis.


.. conda:package:: bioconductor-vsclust

   |downloads_bioconductor-vsclust| |docker_bioconductor-vsclust|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.4,<4.19.0a0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0a0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.1,<1.37.0a0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-httr: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-vsclust

to add into an existing workspace instead, run::

    pixi add bioconductor-vsclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-vsclust

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-vsclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-vsclust:<tag>

(see `bioconductor-vsclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-vsclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vsclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vsclust
   :alt:   (downloads)
.. |docker_bioconductor-vsclust| image:: https://quay.io/repository/biocontainers/bioconductor-vsclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vsclust
.. _`bioconductor-vsclust/tags`: https://quay.io/repository/biocontainers/bioconductor-vsclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vsclust";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vsclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vsclust/README.html