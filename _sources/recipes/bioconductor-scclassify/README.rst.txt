:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scclassify'
.. highlight: bash

bioconductor-scclassify
=======================

.. conda:recipe:: bioconductor-scclassify
   :replaces_section_title:
   :noindex:

   scClassify\: single\-cell Hierarchical Classification

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scClassify.html
   :license: GPL-3
   :recipe: /`bioconductor-scclassify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scclassify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scclassify/meta.yaml>`_

   scClassify is a multiscale classification framework for single\-cell RNA\-seq data based on ensemble learning and cell type hierarchies\, enabling sample size estimation required for accurate cell type classification and joint classification of cells using multiple references.


.. conda:package:: bioconductor-scclassify

   |downloads_bioconductor-scclassify| |docker_bioconductor-scclassify|

   :versions:
      
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-cepo: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-hopach: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-diptest: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-mgcv: 
   :depends on r-minpack.lm: 
   :depends on r-mixtools: 
   :depends on r-proxy: 
   :depends on r-proxyc: 
   :depends on r-statmod: 

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

    pixi global install bioconductor-scclassify

to add into an existing workspace instead, run::

    pixi add bioconductor-scclassify

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scclassify

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scclassify

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scclassify:<tag>

(see `bioconductor-scclassify/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scclassify| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scclassify.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scclassify
   :alt:   (downloads)
.. |docker_bioconductor-scclassify| image:: https://quay.io/repository/biocontainers/bioconductor-scclassify/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scclassify
.. _`bioconductor-scclassify/tags`: https://quay.io/repository/biocontainers/bioconductor-scclassify?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scclassify";
        var versions = ["1.22.0","1.18.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scclassify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scclassify/README.html